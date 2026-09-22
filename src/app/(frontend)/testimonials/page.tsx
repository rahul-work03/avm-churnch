import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { TestimonialsPage } from '@/components/TestimonialsPage'
import { testimonialsData } from '@/data/testimonialsData'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Wonderful Testimonies | The Church of Signs and Wonders',
  description:
    'Read powerful and miraculous testimonies of supernatural healing, deliverance, and restoration through the ministry of Apostle Dr. Ankur Yoseph Narula at The Church of Signs and Wonders.',
}

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  let docs: any[] = []
  let pageData: any = null

  try {
    const [testimonialsResult, pageGlobalResult] = await Promise.all([
      payload.find({
        collection: 'testimonials' as any,
        limit: 100,
        sort: 'order',
        depth: 1,
      }),
      payload.findGlobal({
        slug: 'testimonials-page' as any,
        depth: 1,
      }).catch(() => null),
    ])

    docs = testimonialsResult.docs
    pageData = pageGlobalResult
  } catch {
    // Database empty or uninitialized during build
  }

  const testimonials = docs.length > 0 ? docs : testimonialsData

  return <TestimonialsPage testimonials={testimonials} pageData={pageData} />
}
