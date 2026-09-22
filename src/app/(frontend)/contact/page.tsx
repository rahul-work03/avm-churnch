import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ContactPage } from '@/components/ContactPage'

export const dynamic = 'force-static'
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Contact Us | Ankur Narula Ministries',
  description:
    'Contact Ankur Narula Ministries (The Church of Signs and Wonders). Send your prayer requests, general inquiries, hospital prayer line requests, emergency prayers, or locate our church in Jalandhar, Punjab.',
}

export default async function Page() {
  let data = null

  try {
    const payload = await getPayload({ config: configPromise })
    data = await payload.findGlobal({
      slug: 'contact-page' as any,
      depth: 1,
    })
  } catch {
    // Database empty or uninitialized during build
  }

  return <ContactPage data={data} />
}
