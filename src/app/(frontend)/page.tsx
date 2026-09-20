import React from 'react'
import type { Metadata } from 'next'
import { ChurchHomepage } from '@/components/ChurchHomepage'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Ankur Narula Ministries | The Church of Signs and Wonders',
  description:
    'Experience the power of Jesus Christ through signs, wonders, and faith. Welcome to Ankur Narula Ministries, Founder & Senior Pastor Apostle Dr. Ankur Yoseph Narula.',
}

export default async function HomePage() {
  let homepageData = null
  let sermonsData: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })

    homepageData = await payload.findGlobal({
      slug: 'homepage' as any,
      depth: 1,
    })

    const sermonsResult = await payload.find({
      collection: 'sermons' as any,
      depth: 1,
      limit: 6,
      sort: 'order',
    })

    sermonsData = sermonsResult?.docs || []
  } catch (error) {
    console.error('Error loading homepage data from Payload:', error)
  }

  return <ChurchHomepage homepageData={homepageData} sermonsData={sermonsData} />
}
