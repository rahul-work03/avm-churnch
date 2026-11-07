import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidateTestimonial: CollectionAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context?.disableRevalidate) {
    payload.logger.info(`Revalidating testimonials for doc: ${doc?.slug}`)
    revalidatePath('/testimonials')
    if (doc?.slug) {
      revalidatePath(`/testimonials/${doc.slug}`)
    }
    revalidateTag('testimonials')
  }
  return doc
}

export const revalidateTestimonialDelete: CollectionAfterDeleteHook = ({ doc, req: { payload, context } }) => {
  if (!context?.disableRevalidate) {
    payload.logger.info(`Revalidating testimonials after deletion: ${doc?.slug}`)
    revalidatePath('/testimonials')
    if (doc?.slug) {
      revalidatePath(`/testimonials/${doc.slug}`)
    }
    revalidateTag('testimonials')
  }
  return doc
}
