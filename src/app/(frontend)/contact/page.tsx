import React from 'react'
import type { Metadata } from 'next'
import { ContactPage } from '@/components/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us | Ankur Narula Ministries',
  description:
    'Contact Ankur Narula Ministries (The Church of Signs and Wonders). Send your prayer requests, general inquiries, hospital prayer line requests, emergency prayers, or locate our church in Jalandhar, Punjab.',
}

export default function Page() {
  return <ContactPage />
}
