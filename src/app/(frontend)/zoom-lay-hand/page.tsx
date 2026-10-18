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
  let zoomPageData = null

  try {
    const payload = await getPayload({ config })
    zoomPageData = (await payload.findGlobal({
      slug: 'zoom-lay-hand-page' as any,
      depth: 2,
    })) as any

    if (!zoomPageData?.form || typeof zoomPageData.form !== 'object' || !zoomPageData.form.fields) {
      const formQuery = await payload.find({
        collection: 'forms',
        where: {
          or: [
            { title: { equals: 'Zoom Lay Hand Registration Form' } },
            ...(zoomPageData?.form ? [{ id: { equals: zoomPageData.form } }] : []),
          ],
        },
        limit: 1,
      })
      if (formQuery.docs.length > 0) {
        if (!zoomPageData) zoomPageData = {}
        zoomPageData.form = formQuery.docs[0]
      }
    }
  } catch {
    // Database empty or uninitialized during build
  }

  return <ZoomLayHandPage data={zoomPageData as any} />
}

