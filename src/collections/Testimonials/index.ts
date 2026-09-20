import type { CollectionConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    create: adminsOrEditors,
    delete: adminsOrEditors,
    read: anyone,
    update: adminsOrEditors,
  },
  admin: {
    defaultColumns: ['person', 'category', 'slug', 'isFeatured', 'order', 'updatedAt'],
    useAsTitle: 'person',
  },
  fields: [
    {
      name: 'person',
      type: 'text',
      required: true,
      label: 'Person / Family Name',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Testimony Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'URL Slug (e.g. sister-randeep-healing)',
      admin: {
        description: 'Unique URL identifier for the testimony detail page (/testimonials/[slug])',
      },
    },
    {
      name: 'category',
      type: 'text',
      required: true,
      defaultValue: 'Supernatural Healing',
      label: 'Miracle Category (e.g. Supernatural Healing, Deliverance, Family Deliverance)',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Testimony Image Upload',
    },
    {
      name: 'imageFallback',
      type: 'text',
      label: 'Fallback Image URL/Path',
      admin: {
        description: 'Optional path like /figma-assets/... if no media upload is provided.',
      },
    },
    {
      name: 'hindiHeadline',
      type: 'textarea',
      required: true,
      label: 'Hindi Miracle Headline',
    },
    {
      name: 'englishHeadline',
      type: 'textarea',
      required: true,
      label: 'English Miracle Headline',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      label: 'Short Summary Description',
    },
    {
      name: 'fullStory',
      type: 'textarea',
      required: true,
      label: 'Full Story Narrative',
    },
    {
      name: 'verse',
      type: 'text',
      label: 'Scripture Verse (Optional)',
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Featured Testimony',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order Priority (Lower numbers appear first)',
      defaultValue: 0,
    },
  ],
  timestamps: true,
}
