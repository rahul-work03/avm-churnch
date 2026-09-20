import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { PrayerRequestPage } from '@/components/PrayerRequestPage'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Submit Prayer Request | The Church of Signs and Wonders',
  description:
    'Send your prayer request to Apostle Dr. Ankur Yoseph Narula and the prayer team at The Church of Signs and Wonders (Ankur Narula Ministries).',
}

export default async function Page() {
  const payload = await getPayload({ config })
  const prayerRequestData = await payload.findGlobal({
    slug: 'prayer-request-page' as any,
  })

  return <PrayerRequestPage data={prayerRequestData as any} />
}

