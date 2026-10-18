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
  let checkoutForm: any = null

  try {
    const payload = await getPayload({ config: configPromise })

    if (buyNow === '1' && slug) {
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
    }

    const storePage = (await payload.findGlobal({
      slug: 'store-page' as any,
      depth: 2,
    })) as any

    checkoutForm = storePage?.checkoutForm
    if (!checkoutForm || typeof checkoutForm !== 'object' || !checkoutForm.fields) {
      const formQuery = await payload.find({
        collection: 'forms',
        where: {
          or: [
            { title: { equals: 'Store Checkout Form' } },
            ...(checkoutForm ? [{ id: { equals: checkoutForm } }] : []),
          ],
        },
        limit: 1,
      })
      if (formQuery.docs.length > 0) {
        checkoutForm = formQuery.docs[0]
      }
    }
  } catch (e) {
    console.warn('Could not fetch store checkout data:', e)
  }

  return (
    <CheckoutPage
      directProduct={directProduct}
      initialDirectQty={Math.max(1, Math.floor(Number(qty) || 1))}
      form={checkoutForm}
    />
  )
}
