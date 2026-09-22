import React from 'react'
import type { Metadata } from 'next'
import { BibleCollegePage } from '@/components/BibleCollegePage'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Bible College | Ankur Narula Ministries',
  description:
    'Equipping believers with the Word of God to walk in truth, power, and purpose at Bible College, The Church of Signs and Wonders (Ankur Narula Ministries).',
}

export default async function Page() {
  let bibleCollegeData = null

  try {
    const payload = await getPayload({ config: configPromise })

    bibleCollegeData = await payload.findGlobal({
      slug: 'bible-college-page' as any,
      depth: 1,
    })
  } catch {
    // Database empty or uninitialized during build
  }

  return <BibleCollegePage data={bibleCollegeData} />
}

