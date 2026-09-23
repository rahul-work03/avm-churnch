import type { CollectionConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'
import { fetchYouTubeMetadata } from './hooks/fetchYouTubeMetadata'

export const Sermons: CollectionConfig = {
  slug: 'sermons',
  access: {
    create: adminsOrEditors,
    delete: adminsOrEditors,
    read: anyone,
    update: adminsOrEditors,
  },
  admin: {
    defaultColumns: ['title', 'publishedDate', 'isFeatured', 'updatedAt'],
    useAsTitle: 'title',
  },
  hooks: {
    beforeChange: [fetchYouTubeMetadata],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      label: 'Sermon Title (Auto-fetched from YouTube if left empty)',
      admin: {
        description:
          'Leave empty to automatically fetch the official video title from YouTube, or enter a custom title.',
      },
    },
    {
      name: 'youtubeUrl',
      type: 'text',
      required: true,
      label: 'YouTube Video URL / Embed URL / iframe',
      defaultValue: 'https://www.youtube.com/embed/uho9yd6qOwk?si=DwZIXkJ5U-D-RJqN',
      admin: {
        description: 'Paste YouTube video link (watch/share URL), embed URL, or complete <iframe> embed code.',
      },
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      label: 'Thumbnail Image',
    },
    {
      name: 'customThumbnailUrl',
      type: 'text',
      label: 'Custom Thumbnail Image URL (Fallback)',
      admin: {
        description: 'Optional direct image URL or fallback path (e.g., /figma-assets/...)',
      },
    },
    {
      name: 'speaker',
      type: 'text',
      defaultValue: 'Apostle Dr. Ankur Yoseph Narula',
      label: 'Speaker / Minister',
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
      label: 'Date of Service / Broadcast',
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Feature on Homepage Top',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order Priority (Lower appears first)',
      defaultValue: 0,
    },
  ],
  timestamps: true,
}
