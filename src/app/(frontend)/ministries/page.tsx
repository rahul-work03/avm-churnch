import React from 'react'
import type { Metadata } from 'next'
import { MinistriesPage } from '@/components/MinistriesPage'

export const metadata: Metadata = {
  title: 'Ministries | Ankur Narula Ministries',
  description:
    'Discover the diverse ministries of The Church of Signs and Wonders (Ankur Narula Ministries), including Prayer Mountain, Prayer House, Bible College, Sophia Institute, Church Branches, Sunday School, and our Head Church in Jalandhar.',
}

export default function Page() {
  return <MinistriesPage />
}
