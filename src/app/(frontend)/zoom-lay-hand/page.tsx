import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { ZoomLayHandPage } from '@/components/ZoomLayHandPage'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Zoom Lay Hand Prayer | The Church of Signs and Wonders',
  description:
    'Register for the Zoom Lay Hand Prayer with Apostle Dr. Ankur Yoseph Narula at The Church of Signs and Wonders (Ankur Narula Ministries).',
}

export default async function Page() {
  const payload = await getPayload({ config })
  const zoomPageData = await payload.findGlobal({
    slug: 'zoom-lay-hand-page' as any,
  })

  return <ZoomLayHandPage data={zoomPageData as any} />
}

