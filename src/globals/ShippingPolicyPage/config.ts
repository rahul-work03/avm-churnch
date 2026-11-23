import type { GlobalConfig } from 'payload'
import { createGlobalRevalidateHook } from '@/utilities/revalidateGlobal'

export const DEFAULT_SHIPPING_SECTIONS = [
  {
    sectionTitle: '4.1. Shipping Locations',
    content:
      'For international shipping, additional customs duties or taxes may apply and are the responsibility of the customer.',
  },
  {
    sectionTitle: '4.2. Processing Time',
    content:
      'Orders are processed within 7 business days from the time of purchase. You will receive an email notification once your order has been shipped, including tracking details if applicable.',
  },
  {
    sectionTitle: '4.3. Shipping Charges',
    content:
      'Shipping charges depend on the delivery address and the size/weight of the order. Shipping costs will be calculated at checkout. We occasionally offer free or discounted shipping promotions.',
  },
  {
    sectionTitle: '4.4. Delivery Time',
    content: 'Delivery times vary based on your location:',
  },
  {
    sectionTitle: '4.5. Delays and Issues',
    content:
      'We are not responsible for delays caused by external factors such as weather, customs clearance, or postal service issues. In the rare event that your order is lost or delayed significantly, please contact us, and we will work with the courier to resolve the issue.',
  },
  {
    sectionTitle: '4.6. Order Tracking',
    content:
      "Once your order has shipped, you will receive a tracking number (if applicable) to monitor your order's progress. If you do not receive a tracking number or have any issues with tracking, please contact us.",
  },
  {
    sectionTitle: '4.7. Incorrect Shipping Information',
    content:
      'Please ensure that the shipping address provided is correct. If an order is returned to us due to an incorrect address, you will be responsible for the cost of reshipping.',
  },
]

export const ShippingPolicyPageGlobal: GlobalConfig = {
  slug: 'shipping-policy-page',
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
            doc.pageTitle || 'Shipping and Delivery Policy for Ankur Narula Ministries',
          introText:
            doc.introText ||
            'At Ankur Narula Ministries, we aim to deliver your order promptly and securely. Below is an outline of our shipping and delivery policy.',
          sections:
            doc.sections && doc.sections.length > 0
              ? doc.sections
              : DEFAULT_SHIPPING_SECTIONS,
          contactEmail: doc.contactEmail || 'anmbrightmedia5185@gmail.com',
        }
      },
    ],
    afterChange: [
      createGlobalRevalidateHook(
        ['/shipping-and-delivery-policy', '/shipping-and-delivery'],
        'shipping-policy-page',
      ),
    ],
  },
  fields: [
    {
      name: 'pageTitle',
      type: 'text',
      label: 'Document Title',
      defaultValue: 'Shipping and Delivery Policy for Ankur Narula Ministries',
    },
    {
      name: 'introText',
      type: 'textarea',
      label: 'Introductory Statement',
      defaultValue:
        'At Ankur Narula Ministries, we aim to deliver your order promptly and securely. Below is an outline of our shipping and delivery policy.',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Shipping Policy Sections / Clauses',
      defaultValue: DEFAULT_SHIPPING_SECTIONS,
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

