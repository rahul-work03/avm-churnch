import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Privacy Policy | The Church of Signs and Wonders',
  description:
    'Privacy Policy for Ankur Narula Ministries (The Church of Signs and Wonders). Learn how we collect, use, and safeguard your personal information.',
}

export default async function Page() {
  const payload = await getPayload({ config })
  const privacyData = await payload.findGlobal({
    slug: 'privacy-policy-page' as any,
  })

  return <PrivacyPolicyPage data={privacyData as any} />
}

