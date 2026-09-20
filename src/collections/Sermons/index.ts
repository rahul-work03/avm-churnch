import type { CollectionConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

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
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Sermon Title',
    },
    {
      name: 'youtubeUrl',
      type: 'text',
      required: true,
      label: 'YouTube Video or Channel URL',
      defaultValue: 'https://www.youtube.com/@AnkurNarulaMinistries',
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
