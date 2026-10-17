import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    group: 'Ministry Operations',
    defaultColumns: ['title', 'slug', 'category', 'salePrice', 'originalPrice', 'inStock', 'order'],
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
    slugField('title'),
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
      label: 'Product Short Description',
      required: true,
    },
    {
      name: 'detailedDescription',
      type: 'textarea',
      label: 'Detailed Description / Theological Background',
      admin: {
        description: 'Comprehensive overview displayed on the product detail page.',
      },
    },
    {
      type: 'collapsible',
      label: 'Product Specifications & Details',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'author',
              type: 'text',
              label: 'Author',
              defaultValue: 'Apostle Dr. Ankur Yoseph Narula',
            },
            {
              name: 'publisher',
              type: 'text',
              label: 'Publisher',
              defaultValue: 'Ankur Narula Ministries',
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'language',
              type: 'text',
              label: 'Language',
              defaultValue: 'Hindi',
            },
            {
              name: 'pagesCount',
              type: 'number',
              label: 'Number of Pages',
            },
            {
              name: 'format',
              type: 'select',
              label: 'Format / Binding',
              defaultValue: 'Paperback',
              options: ['Paperback', 'Hardcover', 'Booklet', 'Digital Audio', 'Other'],
            },
            {
              name: 'isbn',
              type: 'text',
              label: 'ISBN (Optional)',
            },
          ],
        },
        {
          name: 'features',
          type: 'array',
          label: 'Key Highlights / Features',
          labels: {
            singular: 'Feature',
            plural: 'Features',
          },
          fields: [
            {
              name: 'feature',
              type: 'text',
              label: 'Feature / Point',
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'External E-commerce Links (Optional - Displayed Only on Detail Page)',
      admin: {
        initCollapsed: false,
        description:
          'External marketplace links are optional and only visible on the single product detail page. They are never shown on store cards.',
      },
      fields: [
        {
          name: 'amazonUrl',
          type: 'text',
          label: 'Amazon Product URL',
          admin: {
            description: 'Direct link to Amazon store listing (optional).',
          },
        },
        {
          name: 'flipkartUrl',
          type: 'text',
          label: 'Flipkart Product URL',
          admin: {
            description: 'Direct link to Flipkart store listing (optional).',
          },
        },
        {
          name: 'productUrl',
          type: 'text',
          label: 'General / Alternative Buy URL',
          admin: {
            description: 'Legacy or additional external shopping link.',
          },
        },
      ],
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
          name: 'allowDirectPurchase',
          type: 'checkbox',
          label: 'Enable Direct Instamojo Checkout',
          defaultValue: true,
        },
        {
          name: 'stockQuantity',
          type: 'number',
          label: 'Inventory Count (Optional)',
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
