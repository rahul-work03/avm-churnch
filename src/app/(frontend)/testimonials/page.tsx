import React from 'react'
import type { Metadata } from 'next'
import { TestimonialsPage } from '@/components/TestimonialsPage'

export const metadata: Metadata = {
  title: 'Wonderful Testimonies | The Church of Signs and Wonders',
  description:
    'Read powerful and miraculous testimonies of supernatural healing, deliverance, and restoration through the ministry of Apostle Dr. Ankur Yoseph Narula at The Church of Signs and Wonders.',
}

export default function Page() {
  return <TestimonialsPage />
}
