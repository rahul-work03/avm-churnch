import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { CheckoutPage } from '@/components/StorePage/CheckoutPage'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Secure Checkout | Ministry Store',
  description:
    'Complete your order for anointed books and ministry resources via our secure payment gateway.',
}

interface PageProps {
  searchParams: Promise<{
    buyNow?: string
    slug?: string
    qty?: string
  }>
}

export default async function Page({ searchParams }: PageProps) {
  const { buyNow, slug, qty } = await searchParams
  let directProduct: any = null

  if (buyNow === '1' && slug) {
    try {
      const payload = await getPayload({ config: configPromise })
      const numericId = Number(slug)
      const res = await payload.find({
        collection: 'products',
        where: {
          or: [
            { slug: { equals: slug } },
            ...(numericId > 0 ? [{ id: { equals: numericId } }] : []),
          ],
        },
        limit: 1,
        depth: 2,
      })
      directProduct = res.docs?.[0] || null
    } catch (e) {
      console.warn('Could not fetch direct product for buyNow checkout:', e)
    }
  }

  return (
    <CheckoutPage
      directProduct={directProduct}
      initialDirectQty={Math.max(1, Math.floor(Number(qty) || 1))}
    />
  )
}
