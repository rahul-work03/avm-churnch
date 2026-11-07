import type { GlobalAfterChangeHook } from 'payload'

export const createGlobalRevalidateHook = (
  paths: string | string[],
  globalSlug: string,
): GlobalAfterChangeHook => {
  return async ({ doc, req: { payload, context } }) => {
    if (!context?.disableRevalidate) {
      const { revalidatePath, revalidateTag } = await import('next/cache')
      const pathList = Array.isArray(paths) ? paths : [paths]
      for (const path of pathList) {
        payload.logger.info(`Revalidating path: ${path} for global: ${globalSlug}`)
        revalidatePath(path)
      }
      revalidateTag(`global_${globalSlug}`)
    }
    return doc
  }
}
