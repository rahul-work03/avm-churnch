import React from 'react'
import type { Metadata } from 'next'
import { TermsAndConditionsPage } from '@/components/TermsAndConditionsPage'

export const metadata: Metadata = {
  title: 'Terms & Conditions | The Church of Signs and Wonders',
  description:
    'Terms and Conditions for Ankur Narula Ministries (The Church of Signs and Wonders).',
}

export default function Page() {
  return <TermsAndConditionsPage />
}
