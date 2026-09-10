import React from 'react'
import type { Metadata } from 'next'
import { ZoomLayHandPage } from '@/components/ZoomLayHandPage'

export const metadata: Metadata = {
  title: 'Zoom Lay Hand Prayer | The Church of Signs and Wonders',
  description:
    'Register for the Zoom Lay Hand Prayer with Apostle Dr. Ankur Yoseph Narula at The Church of Signs and Wonders (Ankur Narula Ministries).',
}

export default function Page() {
  return <ZoomLayHandPage />
}
