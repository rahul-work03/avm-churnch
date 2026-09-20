import React from 'react'
import type { Metadata } from 'next'
import { PrayerHousePage } from '@/components/PrayerHousePage'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Prayer House | Ankur Narula Ministries',
  description:
    'Enter a dwelling of divine presence and spiritual renewal at Prayer House, The Church of Signs and Wonders (Ankur Narula Ministries). Encounter God, experience healing, and walk in His presence.',
}

export default async function Page() {
  let prayerHouseData = null

  try {
    const payload = await getPayload({ config: configPromise })

    prayerHouseData = await payload.findGlobal({
      slug: 'prayer-house-page' as any,
      depth: 1,
    })
  } catch (error) {
    console.error('Error loading prayer house data from Payload:', error)
  }

  return <PrayerHousePage data={prayerHouseData} />
}

