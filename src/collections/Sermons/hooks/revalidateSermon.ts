import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'

export const revalidateSermon: CollectionAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context?.disableRevalidate) {
    payload.logger.info(`Revalidating homepage for sermons update`)
    revalidatePath('/')
  }

  return doc
}

export const revalidateSermonDelete: CollectionAfterDeleteHook = ({ doc, req: { payload, context } }) => {
  if (!context?.disableRevalidate) {
    payload.logger.info(`Revalidating homepage for sermons deletion`)
    revalidatePath('/')
  }

  return doc
}
