import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { SundaySchoolPage } from '@/components/SundaySchoolPage'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Sunday School Ministries | The Church of Signs and Wonders',
  description:
    'Empowering the next generation to walk in faith, truth, and the power of God. Learn about Sunday School Ministries at The Church of Signs and Wonders (Ankur Narula Ministries).',
}

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.findGlobal({
    slug: 'sunday-school-page',
    depth: 1,
  })

  return <SundaySchoolPage data={data} />
}

