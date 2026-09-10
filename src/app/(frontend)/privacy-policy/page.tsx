import React from 'react'
import type { Metadata } from 'next'
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Church of Signs and Wonders',
  description:
    'Privacy Policy for Ankur Narula Ministries (The Church of Signs and Wonders). Learn how we collect, use, and safeguard your personal information.',
}

export default function Page() {
  return <PrivacyPolicyPage />
}
