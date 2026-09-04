import React from 'react'
import type { Metadata } from 'next'
import { ChurchHomepage } from '@/components/ChurchHomepage'

export const metadata: Metadata = {
  title: 'Ankur Narula Ministries | The Church of Signs and Wonders',
  description:
    'Experience the power of Jesus Christ through signs, wonders, and faith. Welcome to Ankur Narula Ministries, Founder & Senior Pastor Apostle Dr. Ankur Yoseph Narula.',
}

export default function HomePage() {
  return <ChurchHomepage />
}
