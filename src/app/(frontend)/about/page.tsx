import React from 'react'
import type { Metadata } from 'next'
import { AboutPage } from '@/components/AboutPage'

export const metadata: Metadata = {
  title: 'About Us | Ankur Narula Ministries',
  description:
    'The Church of Signs and Wonders (Ankur Narula Ministries) is a global revival ministry founded in 2004 in Punjab, India, led by Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula.',
}

export default function Page() {
  return <AboutPage />
}
