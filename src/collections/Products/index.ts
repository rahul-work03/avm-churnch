import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    group: 'Ministry Operations',
    defaultColumns: ['title', 'category', 'salePrice', 'originalPrice', 'rating', 'inStock', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Product Title',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      label: 'Product Category',
      defaultValue: 'Book',
      options: ['Book', 'Hymnal', 'Teaching', 'Merchandise', 'Other'],
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Product Cover Image',
        },
        {
          name: 'imageFallback',
          type: 'text',
          label: 'Product Image Fallback Path',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'originalPrice',
          type: 'number',
          label: 'Original Price (₹)',
          required: true,
        },
        {
          name: 'salePrice',
          type: 'number',
          label: 'Discounted Sale Price (₹)',
          required: true,
        },
        {
          name: 'rating',
          type: 'number',
          label: 'Star Rating (1 to 5)',
          defaultValue: 4,
          min: 1,
          max: 5,
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Product Description',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'inStock',
          type: 'checkbox',
          label: 'In Stock / Available',
          defaultValue: true,
        },
        {
          name: 'order',
          type: 'number',
          label: 'Display Order',
          defaultValue: 0,
        },
      ],
    },
  ],
}
