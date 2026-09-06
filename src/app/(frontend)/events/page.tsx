import React from 'react'
import type { Metadata } from 'next'
import { EventsPage } from '@/components/EventsPage'

export const metadata: Metadata = {
  title: 'Events | Ankur Narula Ministries',
  description:
    'Join upcoming crusades, live services, and revival gatherings with Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula.',
}

export default function Page() {
  return <EventsPage />
}
