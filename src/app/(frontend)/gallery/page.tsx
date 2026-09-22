import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { GalleryPage } from '@/components/GalleryPage'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Gallery | Ankur Narula Ministries',
  description:
    'Explore inspiring moments of worship, healing, ministry crusades, and global leadership with Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula.',
}

export default async function Page() {
  let data = null

  try {
    const payload = await getPayload({ config: configPromise })
    data = await payload.findGlobal({
      slug: 'gallery-page',
      depth: 1,
    })
  } catch {
    // Database empty or uninitialized during build
  }

  return <GalleryPage data={data} />
}

