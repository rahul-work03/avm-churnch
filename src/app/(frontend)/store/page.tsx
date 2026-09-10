import React from 'react'
import type { Metadata } from 'next'
import { StorePage } from '@/components/StorePage'

export const metadata: Metadata = {
  title: 'Ministry Store & Spiritual Books | The Church of Signs and Wonders',
  description:
    'Explore spiritual books, worship hymnals, and life-transforming resources by Apostle Dr. Ankur Yoseph Narula at The Church of Signs and Wonders Store.',
}

export default function Page() {
  return <StorePage />
}
