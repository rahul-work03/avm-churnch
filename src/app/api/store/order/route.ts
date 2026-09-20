import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'node:crypto'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const payload = await getPayload({ config })

    const orderNumber = 'ANM-' + crypto.randomBytes(3).toString('hex').toUpperCase()

    const result = await payload.create({
      collection: 'orders' as any,
      data: {
        orderNumber,
        productTitle: body.productTitle,
        quantity: Number(body.quantity || 1),
        unitPrice: Number(body.unitPrice || 0),
        totalAmount: Number(body.totalAmount || 0),
        customerName: body.name,
        customerPhone: body.phone,
        customerEmail: body.email,
        shippingAddress: body.address,
        city: body.city,
        pincode: body.pincode,
        status: 'pending',
      },
    })

    return NextResponse.json({ success: true, orderNumber, doc: result }, { status: 201 })
  } catch (error: any) {
    console.error('Error submitting store order:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to place order' },
      { status: 400 }
    )
  }
}
