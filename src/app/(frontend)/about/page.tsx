import React from 'react'
import type { Metadata } from 'next'
import { AboutPage } from '@/components/AboutPage'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'About Us | Ankur Narula Ministries',
  description:
    'The Church of Signs and Wonders (Ankur Narula Ministries) is a global revival ministry founded in 2004 in Punjab, India, led by Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula.',
}

export default async function Page() {
  let aboutData = null
  let scheduleData = null

  try {
    const payload = await getPayload({ config: configPromise })

    aboutData = await payload.findGlobal({
      slug: 'about-page' as any,
      depth: 1,
    })

    scheduleData = await payload.findGlobal({
      slug: 'homepage' as any,
      depth: 1,
    })
  } catch (error) {
    console.error('Error loading about page data from Payload:', error)
  }

  return <AboutPage aboutData={aboutData} scheduleData={scheduleData} />
}
