import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { TermsAndConditionsPage } from '@/components/TermsAndConditionsPage'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Terms & Conditions | The Church of Signs and Wonders',
  description:
    'Terms and Conditions for Ankur Narula Ministries (The Church of Signs and Wonders).',
}

export default async function Page() {
  const payload = await getPayload({ config })
  const termsData = await payload.findGlobal({
    slug: 'terms-page' as any,
  })

  return <TermsAndConditionsPage data={termsData as any} />
}

