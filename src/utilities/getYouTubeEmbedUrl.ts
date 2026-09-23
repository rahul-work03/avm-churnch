/**
 * Extracts a clean YouTube embed URL from various input formats:
 * - Direct embed URL (https://www.youtube.com/embed/...)
 * - Full iframe HTML string (<iframe ... src="..." ...>)
 * - Standard watch URL (https://www.youtube.com/watch?v=...)
 * - Short URL (https://youtu.be/...)
 * - Fallback URL if input is empty or invalid
 */
export function getYouTubeEmbedUrl(
  input?: string | null,
  fallbackUrl = 'https://www.youtube.com/embed/CPIhQW-8bgo?si=cZrZoi8mfbTqkTYg',
): string {
  if (!input || typeof input !== 'string') {
    return fallbackUrl
  }

  const trimmed = input.trim()

  // 1. If it's an iframe snippet, extract the src attribute
  if (trimmed.startsWith('<iframe') || trimmed.includes('src=')) {
    const srcMatch = trimmed.match(/src=["']([^"']+)["']/i)
    if (srcMatch && srcMatch[1]) {
      return srcMatch[1]
    }
  }

  // 2. If it's already an embed URL, return it
  if (trimmed.includes('youtube.com/embed/')) {
    return trimmed
  }

  // 3. If standard watch URL (youtube.com/watch?v=VIDEO_ID) or short URL (youtu.be/VIDEO_ID)
  const watchMatch = trimmed.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i,
  )
  if (watchMatch && watchMatch[1]) {
    const videoId = watchMatch[1]
    return `https://www.youtube.com/embed/${videoId}`
  }

  // 4. Return trimmed if it starts with http, otherwise fallback
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed
  }

  return fallbackUrl
}
