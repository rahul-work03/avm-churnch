import React from 'react'
import type { Metadata } from 'next'
import { PrayerMountainPage } from '@/components/PrayerMountainPage'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Prayer Mountain | Ankur Narula Ministries',
  description:
    'Experience deep spiritual encounters, prayer, fasting, and rejuvenation at Prayer Mountain, The Church of Signs and Wonders (Ankur Narula Ministries). Daily gatherings at 8:00 PM.',
}

export default async function Page() {
  let prayerMountainData = null

  try {
    const payload = await getPayload({ config: configPromise })

    prayerMountainData = await payload.findGlobal({
      slug: 'prayer-mountain-page' as any,
      depth: 1,
    })
  } catch {
    // Database empty or uninitialized during build
  }

  return <PrayerMountainPage data={prayerMountainData} />
}

