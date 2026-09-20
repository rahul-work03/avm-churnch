import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ChurchBranchesPage } from '@/components/ChurchBranchesPage'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Our Branches | The Church of Signs and Wonders',
  description:
    'Explore national and international church branches of The Church of Signs and Wonders (Ankur Narula Ministries). Locate head branch Khambra and branches across India and worldwide.',
}

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.findGlobal({
    slug: 'church-branches-page',
    depth: 1,
  })

  return <ChurchBranchesPage data={data} />
}

