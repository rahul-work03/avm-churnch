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

function cleanSlug(str?: string | null): string {
  if (!str) return ''
  let cleaned = str
  try {
    cleaned = decodeURIComponent(cleaned)
  } catch {
    // ignore decode error
  }
  return cleaned
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
}

function matchTestimony(doc: any, requestedSlug: string): boolean {
  if (!doc || !requestedSlug) return false

  // 1. Direct match (raw or decoded)
  if (doc.slug === requestedSlug) return true
  try {
    const decoded = decodeURIComponent(requestedSlug)
    if (doc.slug === decoded) return true
    if (typeof doc.slug === 'string' && doc.slug.trim() === decoded.trim()) return true
  } catch {}

  // 2. Normalized kebab-case comparison
  const targetClean = cleanSlug(requestedSlug)
  const docSlugClean = cleanSlug(doc.slug)
  if (targetClean && docSlugClean && targetClean === docSlugClean) return true

  // 3. ID match
  if (String(doc.id) === requestedSlug || String(doc.id) === targetClean) return true

  return false
}

export async function generateStaticParams() {
  const slugs = new Set<string>()

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'testimonials' as any,
      limit: 100,
      sort: 'order',
    })

    if (result.docs && result.docs.length > 0) {
      result.docs.forEach((doc: any) => {
        if (doc.slug) {
          slugs.add(doc.slug)
          const c = cleanSlug(doc.slug)
          if (c) slugs.add(c)
        }
      })
    }
  } catch (error) {
    console.error('Failed to generate static params from Payload:', error)
  }

  testimonialsData.forEach((testimony) => {
    if (testimony.slug) {
      slugs.add(testimony.slug)
      const c = cleanSlug(testimony.slug)
      if (c) slugs.add(c)
    }
  })

  return Array.from(slugs).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  let testimony: any = null

  try {
    const payload = await getPayload({ config: configPromise })
    const allResult = await payload.find({
      collection: 'testimonials' as any,
      limit: 100,
      sort: 'order',
    })

    if (allResult.docs && allResult.docs.length > 0) {
      testimony = allResult.docs.find((doc: any) => matchTestimony(doc, slug))
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
      currentTestimony = allResult.docs.find((doc: any) => matchTestimony(doc, slug))
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
