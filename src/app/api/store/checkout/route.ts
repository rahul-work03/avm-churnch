import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'
import crypto from 'node:crypto'
import { createInstamojoPaymentRequest } from '@/lib/instamojo'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { items, customer } = body

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Your shopping cart is empty.' },
        { status: 400 }
      )
    }

    if (!customer?.name || !customer?.email || !customer?.phone || !customer?.address || !customer?.city || !customer?.pincode) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required shipping and contact details.' },
        { status: 400 }
      )
    }

    const payload = await getPayload({ config })

    // Verify prices against the database to prevent client-side tampering
    const numericIds = items
      .map((it: any) => Number(it.id))
      .filter((n: number) => !isNaN(n) && n > 0)
    const slugs = items.map((it: any) => it.slug).filter(Boolean)
    let verifiedDocs: any[] = []

    try {
      const orConditions: any[] = []
      if (numericIds.length > 0) orConditions.push({ id: { in: numericIds } })
      if (slugs.length > 0) orConditions.push({ slug: { in: slugs } })

      const productsQuery = await payload.find({
        collection: 'products',
        where: orConditions.length > 0 ? { or: orConditions } : undefined,
        limit: 100,
        depth: 1,
      })
      verifiedDocs = productsQuery.docs || []
    } catch (e) {
      console.warn('Could not query database products for verification, using provided items:', e)
    }

    // Build verified order items list
    let calculatedTotal = 0
    const verifiedOrderItems = items.map((cartItem: any) => {
      const dbMatch = verifiedDocs.find(
        (doc: any) =>
          String(doc.id) === String(cartItem.id) ||
          (doc.slug && cartItem.slug && doc.slug === cartItem.slug)
      )
      const unitPrice = dbMatch ? Number(dbMatch.salePrice) : Number(cartItem.price) || 0
      const quantity = Math.max(1, Math.floor(Number(cartItem.quantity) || 1))
      const totalPrice = unitPrice * quantity
      calculatedTotal += totalPrice

      return {
        productId: String(dbMatch?.id || cartItem.id),
        title: dbMatch?.title || cartItem.title || 'Spiritual Resource',
        slug: dbMatch?.slug || cartItem.slug || '',
        quantity,
        unitPrice,
        totalPrice,
        image: cartItem.image || '',
      }
    })

    if (calculatedTotal <= 0) {
      return NextResponse.json(
        { success: false, message: 'Invalid total order amount.' },
        { status: 400 }
      )
    }

    const orderNumber = 'ANM-' + crypto.randomBytes(3).toString('hex').toUpperCase()
    const primaryItemTitle = verifiedOrderItems.map((i: any) => i.title).join(', ').slice(0, 100)
    const totalUnits = verifiedOrderItems.reduce((acc: number, it: any) => acc + it.quantity, 0)

    // Construct full shipping address string for legacy and display
    const formattedAddress = [
      customer.address,
      customer.landmark ? `Landmark: ${customer.landmark}` : '',
    ]
      .filter(Boolean)
      .join(', ')

    // 1. Create Order in Payload DB with status 'pending_payment'
    const newOrder = await payload.create({
      collection: 'orders' as any,
      data: {
        orderNumber,
        items: verifiedOrderItems,
        productTitle: primaryItemTitle,
        quantity: totalUnits,
        unitPrice: verifiedOrderItems[0]?.unitPrice || 0,
        totalAmount: calculatedTotal,
        customerName: customer.name.trim(),
        customerPhone: customer.phone.trim(),
        customerEmail: customer.email.trim().toLowerCase(),
        shippingAddress: formattedAddress,
        landmark: customer.landmark?.trim() || '',
        city: customer.city.trim(),
        state: customer.state?.trim() || 'Punjab',
        pincode: customer.pincode.trim(),
        deliveryNotes: customer.deliveryNotes?.trim() || '',
        paymentGateway: 'instamojo',
        paymentStatus: 'pending',
        status: 'pending_payment',
        customerEmailSent: false,
        adminEmailSent: false,
      },
    })

    // 2. Build Callback & Webhook URLs
    const isBuyNow = Boolean(body.isBuyNow || body.buyNow)
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
    const redirectUrl = `${serverUrl}/store/order/callback?orderNumber=${encodeURIComponent(orderNumber)}${isBuyNow ? '&buyNow=1' : ''}`

    // Webhook URL: Instamojo rejects 'localhost' and '127.0.0.1' domains.
    // Set INSTAMOJO_WEBHOOK_URL in .env (e.g. https://xxx.ngrok-free.app/api/store/instamojo-webhook) for local webhook testing.
    // If on localhost without an ngrok tunnel, omit webhookUrl so payment request creation succeeds.
    const customWebhook = process.env.INSTAMOJO_WEBHOOK_URL
    const defaultWebhook = `${serverUrl}/api/store/instamojo-webhook`
    const targetWebhook = customWebhook || defaultWebhook
    const isLocalhostWebhook = targetWebhook.includes('localhost') || targetWebhook.includes('127.0.0.1')
    const webhookUrl = isLocalhostWebhook ? undefined : targetWebhook

    // 3. Request Payment Link from Instamojo
    const paymentResult = await createInstamojoPaymentRequest({
      amount: calculatedTotal,
      purpose: `Order ${orderNumber}`,
      buyerName: customer.name.trim(),
      email: customer.email.trim(),
      phone: customer.phone.trim(),
      redirectUrl,
      webhookUrl,
    })

    if (!paymentResult.success) {
      // Update order to record gateway failure
      await payload.update({
        collection: 'orders' as any,
        id: newOrder.id,
        data: {
          status: 'cancelled',
          paymentStatus: 'failed',
        },
      })

      return NextResponse.json(
        {
          success: false,
          message: paymentResult.error || 'Failed to initiate Instamojo payment session.',
        },
        { status: 502 }
      )
    }

    // 4. Update order with payment request reference
    await payload.update({
      collection: 'orders' as any,
      id: newOrder.id,
      data: {
        paymentRequestId: paymentResult.paymentRequestId,
        paymentUrl: paymentResult.longurl,
      },
    })

    return NextResponse.json({
      success: true,
      orderNumber,
      paymentUrl: paymentResult.longurl,
      isMock: paymentResult.isMock,
    })
  } catch (error: any) {
    console.error('Error creating store checkout order:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'An unexpected error occurred during checkout.' },
      { status: 500 }
    )
  }
}
