import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { verifyInstamojoPayment } from '@/lib/instamojo'
import {
  sendEmailNotification,
  renderStoreOrderCustomerEmail,
  renderStoreOrderAdminEmail,
} from '@/utilities/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { orderNumber, paymentId, paymentStatus, paymentRequestId } = body

    if (!paymentRequestId && !orderNumber) {
      return NextResponse.json(
        { success: false, message: 'Missing order reference or payment request ID.' },
        { status: 400 }
      )
    }

    const payload = await getPayload({ config })

    // Find the order by orderNumber or paymentRequestId
    const ordersQuery = await payload.find({
      collection: 'orders' as any,
      where: orderNumber
        ? { orderNumber: { equals: orderNumber } }
        : { paymentRequestId: { equals: paymentRequestId } },
      limit: 1,
    })

    const order = ordersQuery.docs?.[0] as any
    if (!order) {
      return NextResponse.json(
        { success: false, message: 'Order could not be located in database.' },
        { status: 404 }
      )
    }

    // If order is already paid, return early with success
    if (order.status === 'paid' && order.paymentStatus === 'credit') {
      return NextResponse.json({
        success: true,
        verified: true,
        orderNumber: order.orderNumber,
        status: order.status,
      })
    }

    // Verify with Instamojo API if paymentId is available
    let isCredit = paymentStatus === 'Credit'
    let resolvedPaymentId = paymentId || order.paymentId

    if (paymentRequestId || paymentId) {
      const verificationResult = await verifyInstamojoPayment(
        paymentRequestId || order.paymentRequestId,
        paymentId || order.paymentId
      )
      isCredit = verificationResult.success && verificationResult.status === 'Credit'
      if (verificationResult.paymentId) {
        resolvedPaymentId = verificationResult.paymentId
      }
    }

    if (isCredit) {
      // 1. Update Order Status to 'paid' in Payload DB
      await payload.update({
        collection: 'orders' as any,
        id: order.id,
        data: {
          status: 'paid',
          paymentStatus: 'credit',
          paymentId: resolvedPaymentId,
          paidAt: new Date().toISOString(),
        },
      })

      // 2. Dispatch Confirmation Emails (Customer + Admin) if not already sent
      const emailItems = (order.items || []).map((it: any) => ({
        title: it.title,
        quantity: Number(it.quantity) || 1,
        unitPrice: Number(it.unitPrice) || 0,
        totalPrice: Number(it.totalPrice) || (Number(it.unitPrice) || 0) * (Number(it.quantity) || 1),
      }))

      if (emailItems.length === 0 && order.productTitle) {
        emailItems.push({
          title: order.productTitle,
          quantity: Number(order.quantity) || 1,
          unitPrice: Number(order.unitPrice) || Number(order.totalAmount) || 0,
          totalPrice: Number(order.totalAmount) || 0,
        })
      }

      const orderEmailData = {
        orderNumber: order.orderNumber,
        customerName: order.customerName,
        customerEmail: order.customerEmail,
        customerPhone: order.customerPhone,
        shippingAddress: order.shippingAddress,
        landmark: order.landmark,
        city: order.city,
        state: order.state,
        pincode: order.pincode,
        deliveryNotes: order.deliveryNotes,
        items: emailItems,
        totalAmount: Number(order.totalAmount) || 0,
        paymentId: resolvedPaymentId,
        paymentStatus: 'Credit',
      }

      // Send to Customer
      if (!order.customerEmailSent && order.customerEmail) {
        try {
          const customerTemplate = renderStoreOrderCustomerEmail(orderEmailData)
          await sendEmailNotification({
            to: order.customerEmail,
            subject: customerTemplate.subject,
            html: customerTemplate.html,
            text: customerTemplate.text,
          })
          await payload.update({
            collection: 'orders' as any,
            id: order.id,
            data: { customerEmailSent: true },
          })
        } catch (mailErr) {
          console.error('[Email Error] Failed sending store receipt to customer:', mailErr)
        }
      }

      // Send to Admin
      if (!order.adminEmailSent) {
        try {
          const adminTemplate = renderStoreOrderAdminEmail(orderEmailData)
          const adminRecipient = process.env.STORE_ORDER_EMAIL_TO || process.env.EMAIL_TO
          await sendEmailNotification({
            to: adminRecipient,
            subject: adminTemplate.subject,
            html: adminTemplate.html,
            text: adminTemplate.text,
          })
          await payload.update({
            collection: 'orders' as any,
            id: order.id,
            data: { adminEmailSent: true },
          })
        } catch (mailErr) {
          console.error('[Email Error] Failed sending store alert to admin:', mailErr)
        }
      }

      return NextResponse.json({
        success: true,
        verified: true,
        orderNumber: order.orderNumber,
        status: 'paid',
      })
    } else {
      // Payment failed or cancelled
      await payload.update({
        collection: 'orders' as any,
        id: order.id,
        data: {
          status: 'cancelled',
          paymentStatus: 'failed',
        },
      })

      return NextResponse.json({
        success: false,
        verified: false,
        orderNumber: order.orderNumber,
        message: 'Payment verification indicated that the payment was not completed.',
      })
    }
  } catch (error: any) {
    console.error('Error verifying Instamojo payment:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Payment verification failed' },
      { status: 500 }
    )
  }
}
