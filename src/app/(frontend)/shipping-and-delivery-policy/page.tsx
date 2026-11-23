import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { ShippingPolicyPage } from '@/components/ShippingPolicyPage'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Shipping and Delivery Policy | Ankur Narula Ministries',
  description:
    'Shipping and Delivery Policy for Ankur Narula Ministries. Learn about our processing times, shipping charges, locations, and delivery guidelines.',
}

export default async function Page() {
  let shippingData = null

  try {
    const payload = await getPayload({ config })
    shippingData = await payload.findGlobal({
      slug: 'shipping-policy-page' as any,
    })
  } catch {
    // Database empty or uninitialized during build
  }

  return <ShippingPolicyPage data={shippingData as any} />
}

