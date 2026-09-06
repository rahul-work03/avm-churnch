import React from 'react'
import type { Metadata } from 'next'
import { GivePage } from '@/components/GivePage'

export const metadata: Metadata = {
  title: 'Give | Ankur Narula Ministries',
  description:
    'Give your Tithes and Offerings to the Lord at Ankur Narula Ministries (The Church of Signs and Wonders). Scan QR codes or transfer directly to Axis Bank, HDFC Bank, or ICICI Bank.',
}

export default function Page() {
  return <GivePage />
}
