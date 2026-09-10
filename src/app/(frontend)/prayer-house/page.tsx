import React from 'react'
import type { Metadata } from 'next'
import { PrayerHousePage } from '@/components/PrayerHousePage'

export const metadata: Metadata = {
  title: 'Prayer House | Ankur Narula Ministries',
  description:
    'Enter a dwelling of divine presence and spiritual renewal at Prayer House, The Church of Signs and Wonders (Ankur Narula Ministries). Encounter God, experience healing, and walk in His presence.',
}

export default function Page() {
  return <PrayerHousePage />
}
