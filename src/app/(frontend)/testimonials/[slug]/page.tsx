import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { TestimonialDetailPage } from '@/components/TestimonialDetailPage'
import { testimonialsData, getTestimonyBySlug } from '@/data/testimonialsData'

export const dynamic = 'force-static'
export const revalidate = 600

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'testimonials' as any,
      limit: 100,
      sort: 'order',
    })

    if (result.docs && result.docs.length > 0) {
      return result.docs.map((doc: any) => ({
        slug: doc.slug,
      }))
    }
  } catch (error) {
    console.error('Failed to generate static params from Payload:', error)
  }

  return testimonialsData.map((testimony) => ({
    slug: testimony.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  let testimony: any = null

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'testimonials' as any,
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    })

    if (result.docs && result.docs.length > 0) {
      testimony = result.docs[0]
    }
  } catch (error) {
    console.error('Failed to fetch testimony metadata from Payload:', error)
  }

  if (!testimony) {
    testimony = getTestimonyBySlug(slug)
  }

  if (!testimony) {
    return {
      title: 'Testimony Not Found | The Church of Signs and Wonders',
    }
  }

  return {
    title: `${testimony.person} - ${testimony.category || 'Testimony'} | The Church of Signs and Wonders`,
    description: testimony.shortDescription || testimony.hindiHeadline,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  let currentTestimony: any = null
  let allTestimonials: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })
    const allResult = await payload.find({
      collection: 'testimonials' as any,
      limit: 100,
      sort: 'order',
      depth: 1,
    })

    if (allResult.docs && allResult.docs.length > 0) {
      allTestimonials = allResult.docs
      currentTestimony = allResult.docs.find(
        (doc: any) => doc.slug === slug || String(doc.id) === slug
      )
    }
  } catch (error) {
    console.error('Failed to fetch testimony from Payload:', error)
  }

  if (!currentTestimony) {
    currentTestimony = getTestimonyBySlug(slug)
  }

  if (allTestimonials.length === 0) {
    allTestimonials = testimonialsData
  }

  if (!currentTestimony) {
    notFound()
  }

  return (
    <TestimonialDetailPage
      initialTestimony={currentTestimony}
      allTestimonials={allTestimonials}
      slug={slug}
    />
  )
}
