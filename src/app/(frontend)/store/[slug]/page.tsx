import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ProductDetailPage } from '@/components/StorePage/ProductDetailPage'
import type { ProductItem } from '@/components/StorePage/StoreTypes'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

const DEFAULT_PRODUCTS: Record<string, ProductItem> = {
  'abhishikth-geeton-ki-mala-hindi-book': {
    id: 1,
    slug: 'abhishikth-geeton-ki-mala-hindi-book',
    title: 'Abhishikth Geeton Ki Mala, Hindi Book',
    category: 'Book',
    imageFallback: '/store/book_abhishikth_geeton_ki_mala.png',
    originalPrice: 250,
    salePrice: 199,
    rating: 4,
    amazonUrl: 'https://amzn.in/d/0j2LQP4E',
    description:
      'An anointed collection of spiritual worship songs, hymns, and prayers compiled for believers to experience the manifest glory and presence of God.',
    detailedDescription:
      'A powerful and life-transforming treasury of anointed spiritual worship songs, divine prayers, and hymns. Designed for personal devotion, church services, and prayer groups to elevate believers into intimate fellowship with the Lord Jesus Christ and receive prophetic breakthroughs in worship.',
    author: 'Apostle Dr. Ankur Yoseph Narula',
    publisher: 'Ankur Narula Ministries',
    language: 'Hindi',
    pagesCount: 168,
    format: 'Paperback',
    inStock: true,
    allowDirectPurchase: true,
  },
  'sanatan-parameswar-kaun-hai-hindi-religious': {
    id: 2,
    slug: 'sanatan-parameswar-kaun-hai-hindi-religious',
    title: 'Sanatan Parameswar Kaun Hai Hindi Religious',
    category: 'Book',
    imageFallback: '/store/book_sanatan_parameswar_kaun_hai.png',
    originalPrice: 250,
    salePrice: 199,
    rating: 4,
    amazonUrl: 'https://amzn.in/d/0eKR3CnU',
    description:
      'A profound theological exploration by Apostle Dr. Ankur Yoseph Narula unveiling the eternal nature, power, and sovereignty of the living God.',
    detailedDescription:
      'In this groundbreaking theological and spiritual work, Apostle Dr. Ankur Yoseph Narula unveils biblical truths concerning the everlasting sovereignty, majesty, and living presence of the Almighty God. Deepen your understanding of scripture, understand your divine identity, and build unshakeable faith in the promises of God.',
    author: 'Apostle Dr. Ankur Yoseph Narula',
    publisher: 'Ankur Narula Ministries',
    language: 'Hindi',
    pagesCount: 220,
    format: 'Paperback',
    inStock: true,
    allowDirectPurchase: true,
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'products',
      where: {
        slug: { equals: slug },
      },
      limit: 1,
    })

    const product = result.docs?.[0]
    if (product) {
      return {
        title: `${product.title} | Ministry Store`,
        description: product.description || 'Spiritual resource by Apostle Dr. Ankur Yoseph Narula.',
      }
    }
  } catch {
    // fallback below
  }

  const fallback = DEFAULT_PRODUCTS[slug]
  if (fallback) {
    return {
      title: `${fallback.title} | Ministry Store`,
      description: fallback.description || 'Spiritual resource by Apostle Dr. Ankur Yoseph Narula.',
    }
  }

  return {
    title: 'Product Details | Ministry Store',
    description: 'Explore spiritual books and resources from The Church of Signs and Wonders.',
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  let product: any = null
  let relatedProducts: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'products',
      where: {
        slug: { equals: slug },
      },
      limit: 1,
      depth: 2,
    })

    if (result.docs && result.docs.length > 0) {
      product = result.docs[0]
    } else {
      // Try finding by id if slug matches numeric id
      const byId = await payload.find({
        collection: 'products',
        where: {
          id: { equals: slug },
        },
        limit: 1,
        depth: 2,
      })
      if (byId.docs && byId.docs.length > 0) {
        product = byId.docs[0]
      }
    }

    // Fetch related products
    const relatedResult = await payload.find({
      collection: 'products',
      limit: 4,
      sort: 'order',
      depth: 2,
    })
    relatedProducts = (relatedResult.docs || []).filter((p: any) => p.slug !== slug && String(p.id) !== String(product?.id))
  } catch (err) {
    console.warn('Error fetching product from Payload:', err)
  }

  // Fallback to default product if database has not set slug yet
  if (!product) {
    if (DEFAULT_PRODUCTS[slug]) {
      product = DEFAULT_PRODUCTS[slug]
      relatedProducts = Object.values(DEFAULT_PRODUCTS).filter((p) => p.slug !== slug)
    } else if (slug === '1' || slug === 'book-1') {
      product = DEFAULT_PRODUCTS['abhishikth-geeton-ki-mala-hindi-book']
    } else if (slug === '2' || slug === 'book-2') {
      product = DEFAULT_PRODUCTS['sanatan-parameswar-kaun-hai-hindi-religious']
    } else {
      notFound()
    }
  }

  return <ProductDetailPage product={product} relatedProducts={relatedProducts} />
}
