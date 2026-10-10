import React from 'react'
import type { Metadata } from 'next'
import { MultimediaCollegePage } from '@/components/MultimediaCollegePage'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Multimedia College | Ankur Narula Ministries',
  description:
    'Empowering creative media minds to communicate truth and impact the digital generation at Multimedia College, The Church of Signs and Wonders (Ankur Narula Ministries).',
}

export default async function Page() {
  let multimediaCollegeData = null

  try {
    const payload = await getPayload({ config: configPromise })

    multimediaCollegeData = await payload.findGlobal({
      slug: 'multimedia-college-page' as any,
      depth: 1,
    })
  } catch {
    // Database empty or uninitialized during build
  }

  return <MultimediaCollegePage data={multimediaCollegeData} />
}
