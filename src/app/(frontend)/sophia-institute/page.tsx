import React from 'react'
import type { Metadata } from 'next'
import { SophiaInstitutePage } from '@/components/SophiaInstitutePage'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Sophia Institute | Ankur Narula Ministries',
  description:
    'Nurturing faith, wisdom, and purpose through the truth of God’s Word at Sophia Institute, The Church of Signs and Wonders (Ankur Narula Ministries).',
}

export default async function Page() {
  let sophiaData = null

  try {
    const payload = await getPayload({ config: configPromise })

    sophiaData = await payload.findGlobal({
      slug: 'sophia-institute-page' as any,
      depth: 1,
    })
  } catch (error) {
    console.error('Error loading sophia institute data from Payload:', error)
  }

  return <SophiaInstitutePage data={sophiaData} />
}
