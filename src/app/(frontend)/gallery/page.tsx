import React from 'react'
import type { Metadata } from 'next'
import { GalleryPage } from '@/components/GalleryPage'

export const metadata: Metadata = {
  title: 'Gallery | Ankur Narula Ministries',
  description:
    'Explore inspiring moments of worship, healing, ministry crusades, and global leadership with Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula.',
}

export default function Page() {
  return <GalleryPage />
}
