import type { CollectionBeforeChangeHook } from 'payload'

export const fetchYouTubeMetadata: CollectionBeforeChangeHook = async ({ data, req }) => {
  if (!data?.youtubeUrl) {
    return data
  }

  // If title is already provided manually, we don't necessarily override unless empty
  if (data.title && data.customThumbnailUrl) {
    return data
  }

  try {
    const rawUrl = String(data.youtubeUrl).trim()
    const videoIdMatch = rawUrl.match(/(?:embed\/|v=|youtu\.be\/|\/v\/)([^"&?\/\s]{11})/i)
    const videoId = videoIdMatch ? videoIdMatch[1] : null

    if (videoId) {
      const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
      const res = await fetch(oembedUrl)
      if (res.ok) {
        const oembedData = (await res.json()) as {
          title?: string
          author_name?: string
          thumbnail_url?: string
        }

        if (!data.title && oembedData.title) {
          data.title = oembedData.title
        }

        if (!data.customThumbnailUrl && oembedData.thumbnail_url) {
          data.customThumbnailUrl = oembedData.thumbnail_url
        }
      }
    }
  } catch (error) {
    req.payload.logger.warn({
      msg: 'Could not auto-fetch YouTube oEmbed metadata in Sermons hook',
      error,
    })
  }

  // Fallback title if still empty
  if (!data.title) {
    data.title = 'Ankur Narula Ministries Sermon'
  }

  return data
}
