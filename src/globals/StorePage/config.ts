import type { GlobalConfig } from 'payload'

export const StorePageGlobal: GlobalConfig = {
  slug: 'store-page',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Website Settings',
  },
  hooks: {
    beforeRead: [
      ({ doc }) => {
        if (!doc) return doc
        return {
          ...doc,
          headerTitle: doc.headerTitle || 'Ministry Store & Faith Resources',
          headerSubtitle:
            doc.headerSubtitle ||
            'Explore anointed books, worship hymnals, and life-transforming teachings by Apostle Dr. Ankur Yoseph Narula.',
          fastDeliveryText:
            doc.fastDeliveryText || 'Fast Courier Delivery Across India & Worldwide',
          securePaymentText:
            doc.securePaymentText || '100% Secure Order Processing',
          supportPhone: doc.supportPhone || '0181 520 7777',
          supportEmail: doc.supportEmail || 'info@ankurnarula.org',
        }
      },
    ],
  },
  fields: [
    {
      name: 'headerTitle',
      type: 'text',
      label: 'Store Page Heading Title',
      defaultValue: 'Ministry Store & Faith Resources',
    },
    {
      name: 'headerSubtitle',
      type: 'textarea',
      label: 'Store Page Subtitle',
      defaultValue:
        'Explore anointed books, worship hymnals, and life-transforming teachings by Apostle Dr. Ankur Yoseph Narula.',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'fastDeliveryText',
          type: 'text',
          label: 'Fast Delivery Guarantee Text',
          defaultValue: 'Fast Courier Delivery Across India & Worldwide',
        },
        {
          name: 'securePaymentText',
          type: 'text',
          label: 'Secure Payment Badge Text',
          defaultValue: '100% Secure Order Processing',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'supportPhone',
          type: 'text',
          label: 'Support Phone Number',
          defaultValue: '0181 520 7777',
        },
        {
          name: 'supportEmail',
          type: 'text',
          label: 'Support Email Address',
          defaultValue: 'info@ankurnarula.org',
        },
      ],
    },
  ],
  versions: false,
}
