import React from 'react'
import type { Metadata } from 'next'
import { MinistriesPage } from '@/components/MinistriesPage'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Ministries | Ankur Narula Ministries',
  description:
    'Discover the diverse ministries of The Church of Signs and Wonders (Ankur Narula Ministries), including Prayer Mountain, Prayer House, Bible College, Sophia Institute, Church Branches, Sunday School, and our Head Church in Jalandhar.',
}

export default async function Page() {
  let ministriesData = null

  try {
    const payload = await getPayload({ config: configPromise })

    ministriesData = await payload.findGlobal({
      slug: 'ministries-page' as any,
      depth: 1,
    })
  } catch {
    // Database empty or uninitialized during build
  }

  return <MinistriesPage ministriesData={ministriesData} />
}
