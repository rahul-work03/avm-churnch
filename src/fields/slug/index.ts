import type { Field } from 'payload'
import { formatSlug } from './formatSlug'

export const slugField = (fieldToUse: string = 'title'): Field => ({
  name: 'slug',
  type: 'text',
  index: true,
  label: 'Slug',
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [formatSlug(fieldToUse)],
  },
})
