import type { GlobalAfterChangeHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidatePrayerMountain: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context?.disableRevalidate) {
    payload.logger.info(`Revalidating Prayer Mountain (/prayer-mountain)`)
    revalidatePath('/prayer-mountain')
    revalidateTag('global_prayer-mountain-page')
  }
  return doc
}
