import React from 'react'
import type { Metadata } from 'next'
import { BibleCollegePage } from '@/components/BibleCollegePage'

export const metadata: Metadata = {
  title: 'Bible College | Ankur Narula Ministries',
  description:
    'Equipping believers with the Word of God to walk in truth, power, and purpose at Bible College, The Church of Signs and Wonders (Ankur Narula Ministries).',
}

export default function Page() {
  return <BibleCollegePage />
}
