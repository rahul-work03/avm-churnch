import React from 'react'
import type { Metadata } from 'next'
import { PrayerMountainPage } from '@/components/PrayerMountainPage'

export const metadata: Metadata = {
  title: 'Prayer Mountain | Ankur Narula Ministries',
  description:
    'Experience deep spiritual encounters, prayer, fasting, and rejuvenation at Prayer Mountain, The Church of Signs and Wonders (Ankur Narula Ministries). Daily gatherings at 8:00 PM.',
}

export default function Page() {
  return <PrayerMountainPage />
}
