import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { StorePage } from '@/components/StorePage'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Ministry Store & Spiritual Books | The Church of Signs and Wonders',
  description:
    'Explore spiritual books, worship hymnals, and life-transforming resources by Apostle Dr. Ankur Yoseph Narula at The Church of Signs and Wonders Store.',
}

export default async function Page() {
  let storeData = null
  let products: any[] = []

  try {
    const payload = await getPayload({ config })
    const [storeRes, productsRes] = await Promise.all([
      payload.findGlobal({
        slug: 'store-page' as any,
      }),
      payload.find({
        collection: 'products' as any,
        limit: 50,
        sort: 'order',
      }),
    ])

    storeData = storeRes
    products = productsRes.docs || []
  } catch {
    // Database empty or uninitialized during build
  }

  return (
    <StorePage
      data={storeData as any}
      products={products as any}
    />
  )
}

