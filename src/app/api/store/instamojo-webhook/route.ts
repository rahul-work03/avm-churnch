import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { verifyWebhookSignature } from '@/lib/instamojo'
import {
  sendEmailNotification,
  renderStoreOrderCustomerEmail,
  renderStoreOrderAdminEmail,
} from '@/utilities/email'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const data: Record<string, any> = {}
    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    const mac = data.mac
    const paymentId = data.payment_id
    const status = data.status
    const paymentRequestId = data.payment_request_id

    // Verify MAC signature if salt is configured
    if (mac && process.env.INSTAMOJO_PRIVATE_SALT) {
      const isValid = verifyWebhookSignature(data, mac)
      if (!isValid) {
        console.warn('⚠️ [Instamojo Webhook] Invalid MAC signature rejected.')
        return NextResponse.json({ success: false, message: 'Invalid MAC signature' }, { status: 403 })
      }
    }

    if (!paymentRequestId) {
      return NextResponse.json({ success: false, message: 'Missing payment_request_id' }, { status: 400 })
    }

    const payload = await getPayload({ config })
    const ordersQuery = await payload.find({
      collection: 'orders' as any,
      where: {
        paymentRequestId: { equals: paymentRequestId },
      },
      limit: 1,
    })

    const order = ordersQuery.docs?.[0] as any
    if (!order) {
      console.warn(`[Instamojo Webhook] No matching order found for request ${paymentRequestId}`)
      return NextResponse.json({ success: true, message: 'Order not found, ignored.' })
    }

    if (status === 'Credit') {
      await payload.update({
        collection: 'orders' as any,
        id: order.id,
        data: {
          status: 'paid',
          paymentStatus: 'credit',
          paymentId: paymentId || order.paymentId,
          paidAt: new Date().toISOString(),
        },
      })

      // Send emails if not sent yet
      const emailItems = (order.items || []).map((it: any) => ({
        title: it.title,
        quantity: Number(it.quantity) || 1,
        unitPrice: Number(it.unitPrice) || 0,
        totalPrice: Number(it.totalPrice) || 0,
      }))

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
        paymentId: paymentId || order.paymentId,
        paymentStatus: 'Credit',
      }

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
        } catch (e) {
          console.error('[Instamojo Webhook] Error sending customer email:', e)
        }
      }

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
        } catch (e) {
          console.error('[Instamojo Webhook] Error sending admin email:', e)
        }
      }
    } else if (status === 'Failed') {
      await payload.update({
        collection: 'orders' as any,
        id: order.id,
        data: {
          status: 'cancelled',
          paymentStatus: 'failed',
          paymentId: paymentId || order.paymentId,
        },
      })
    }

    return NextResponse.json({ success: true, message: 'Webhook processed' })
  } catch (error: any) {
    console.error('[Instamojo Webhook Error]:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Webhook processing failed' },
      { status: 500 }
    )
  }
}
