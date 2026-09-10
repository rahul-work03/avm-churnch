import React from 'react'
import type { Metadata } from 'next'
import { PrayerRequestPage } from '@/components/PrayerRequestPage'

export const metadata: Metadata = {
  title: 'Submit Prayer Request | The Church of Signs and Wonders',
  description:
    'Send your prayer request to Apostle Dr. Ankur Yoseph Narula and the prayer team at The Church of Signs and Wonders (Ankur Narula Ministries).',
}

export default function Page() {
  return <PrayerRequestPage />
}
