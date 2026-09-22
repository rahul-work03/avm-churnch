import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { EventsPage } from '@/components/EventsPage'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Events | Ankur Narula Ministries',
  description:
    'Join upcoming crusades, live services, and revival gatherings with Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula.',
}

export default async function Page() {
  let data = null

  try {
    const payload = await getPayload({ config: configPromise })
    data = await payload.findGlobal({
      slug: 'events-page',
      depth: 1,
    })
  } catch {
    // Database empty or uninitialized during build
  }

  return <EventsPage data={data} />
}

