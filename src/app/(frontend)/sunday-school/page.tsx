import React from 'react'
import type { Metadata } from 'next'
import { SundaySchoolPage } from '@/components/SundaySchoolPage'

export const metadata: Metadata = {
  title: 'Sunday School Ministries | The Church of Signs and Wonders',
  description:
    'Empowering the next generation to walk in faith, truth, and the power of God. Learn about Sunday School Ministries at The Church of Signs and Wonders (Ankur Narula Ministries).',
}

export default function Page() {
  return <SundaySchoolPage />
}
