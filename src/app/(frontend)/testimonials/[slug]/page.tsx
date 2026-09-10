import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TestimonialDetailPage } from '@/components/TestimonialDetailPage'
import { testimonialsData, getTestimonyBySlug } from '@/data/testimonialsData'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return testimonialsData.map((testimony) => ({
    slug: testimony.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const testimony = getTestimonyBySlug(slug)

  if (!testimony) {
    return {
      title: 'Testimony Not Found | The Church of Signs and Wonders',
    }
  }

  return {
    title: `${testimony.person} - ${testimony.category} | The Church of Signs and Wonders`,
    description: testimony.shortDescription,
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const testimony = getTestimonyBySlug(slug)

  if (!testimony) {
    notFound()
  }

  return <TestimonialDetailPage initialTestimony={testimony} />
}
