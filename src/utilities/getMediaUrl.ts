export function getMediaUrl(media: any, fallback: string = ''): string {
  if (!media) return fallback
  if (typeof media === 'string') {
    if (media.startsWith('/') || media.startsWith('http') || media.startsWith('data:')) {
      return media
    }
    return fallback
  }
  if (typeof media === 'object' && media !== null) {
    if (typeof media.url === 'string' && media.url.length > 0) {
      return media.url
    }
  }
  return fallback
}

export function getMediaAlt(media: any, fallback: string = ''): string {
  if (!media) return fallback
  if (typeof media === 'object' && media !== null) {
    if (typeof media.alt === 'string' && media.alt.length > 0) {
      return media.alt
    }
  }
  return fallback
}
