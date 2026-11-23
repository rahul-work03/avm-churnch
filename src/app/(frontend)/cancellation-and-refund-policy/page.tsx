import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { RefundPolicyPage } from '@/components/RefundPolicyPage'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Cancellation and Refund Policy | Ankur Narula Ministries',
  description:
    'Cancellation and Refund Policy for Ankur Narula Ministries. Learn about our cancellation window, return eligibility, and refund procedures.',
}

export default async function Page() {
  let refundData = null

  try {
    const payload = await getPayload({ config })
    refundData = await payload.findGlobal({
      slug: 'refund-policy-page' as any,
    })
  } catch {
    // Database empty or uninitialized during build
  }

  return <RefundPolicyPage data={refundData as any} />
}

