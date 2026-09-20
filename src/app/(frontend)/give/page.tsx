import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { GivePage } from '@/components/GivePage'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Give | Ankur Narula Ministries',
  description:
    'Give your Tithes and Offerings to the Lord at Ankur Narula Ministries (The Church of Signs and Wonders). Scan QR codes or transfer directly to Axis Bank, HDFC Bank, or ICICI Bank.',
}

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.findGlobal({
    slug: 'give-page' as any,
    depth: 1,
  })

  return <GivePage data={data} />
}
