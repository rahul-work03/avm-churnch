import type { GlobalConfig } from 'payload'
import { createGlobalRevalidateHook } from '@/utilities/revalidateGlobal'

export const DEFAULT_REFUND_SECTIONS = [
  {
    sectionTitle: '3.1. Cancellations',
    content:
      'You can cancel your order within 24 hours of purchase if it has not yet been shipped. To cancel an order, please contact us immediately at anmbrightmedia5185@gmail.com with your order details. Once the order has been shipped, it cannot be canceled.',
  },
  {
    sectionTitle: '3.2. Refunds',
    content:
      'Refund requests are accepted within 7 days of receiving your order. If you are not satisfied with your purchase or if the product is damaged or defective, please contact us at anmbrightmedia5185@gmail.com to initiate the return and refund process.',
  },
  {
    sectionTitle: '3.3. Eligibility for Refunds',
    content:
      'Refunds will only be issued under the following conditions:\n• The product is defective or damaged upon arrival.\n• The wrong product was delivered.\n• You cancel the order within the specified time frame and it has not been shipped.\n\nRefunds will be processed to the original payment method after the product is returned and inspected.',
  },
  {
    sectionTitle: '3.4. Non-refundable Items',
    content:
      'Some products, such as downloadable content or products marked as final sale, may not be eligible for a refund.',
  },
  {
    sectionTitle: '3.5. Shipping Costs',
    content:
      'Shipping fees are non-refundable, and the customer is responsible for the cost of return shipping, unless the product was defective or an error was made by us.',
  },
]

export const RefundPolicyPageGlobal: GlobalConfig = {
  slug: 'refund-policy-page',
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
          pageTitle:
            doc.pageTitle || 'Cancellation and Refund Policy for Ankur Narula Ministries',
          introText:
            doc.introText ||
            'We want you to be satisfied with your purchase from Ankur Narula Ministries. If you need to cancel or request a refund, please refer to the guidelines below.',
          sections:
            doc.sections && doc.sections.length > 0
              ? doc.sections
              : DEFAULT_REFUND_SECTIONS,
          contactEmail: doc.contactEmail || 'anmbrightmedia5185@gmail.com',
        }
      },
    ],
    afterChange: [
      createGlobalRevalidateHook(
        ['/cancellation-and-refund-policy', '/cancellation-and-refund'],
        'refund-policy-page',
      ),
    ],
  },
  fields: [
    {
      name: 'pageTitle',
      type: 'text',
      label: 'Document Title',
      defaultValue: 'Cancellation and Refund Policy for Ankur Narula Ministries',
    },
    {
      name: 'introText',
      type: 'textarea',
      label: 'Introductory Statement',
      defaultValue:
        'We want you to be satisfied with your purchase from Ankur Narula Ministries. If you need to cancel or request a refund, please refer to the guidelines below.',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Cancellation & Refund Sections / Clauses',
      defaultValue: DEFAULT_REFUND_SECTIONS,
      fields: [
        {
          name: 'sectionTitle',
          type: 'text',
          label: 'Section Heading',
          required: true,
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Clause Body Content',
          required: true,
        },
      ],
    },
    {
      name: 'contactEmail',
      type: 'text',
      label: 'Contact Support Email',
      defaultValue: 'anmbrightmedia5185@gmail.com',
    },
  ],
}

