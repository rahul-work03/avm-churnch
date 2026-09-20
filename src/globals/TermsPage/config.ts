import type { GlobalConfig } from 'payload'

const DEFAULT_TERMS_SECTIONS = [
  {
    sectionTitle: '2.1. General',
    content:
      'Ankur Narula Ministries is a Christian ministry that provides resources including books and materials related to spiritual growth. Our website allows users to purchase products, access content, and engage with our ministry. By accessing or using this website, you agree to comply with these Terms and Conditions.',
  },
  {
    sectionTitle: '2.2. Product Information and Availability',
    content:
      'We make every effort to ensure that product descriptions, images, and prices are accurate. However, we cannot guarantee that all products are available at all times. If an item is out of stock or unavailable, we will notify you.',
  },
  {
    sectionTitle: '2.3. Payment and Pricing',
    content:
      'All prices on the website are in the specified currency and are exclusive of taxes, shipping, and handling fees unless otherwise stated. We accept payments through Razorpay and other secure payment gateways. Payment must be received in full before products are shipped.',
  },
  {
    sectionTitle: '2.4. Shipping and Delivery',
    content:
      'Please refer to our “Shipping and Delivery” information for detailed insights on shipping costs and estimated delivery times across India and internationally.',
  },
  {
    sectionTitle: '2.5. Limitation of Liability',
    content:
      'We are not liable for any direct, indirect, incidental, special, or consequential damages that may result from using our website or purchasing our products, except where required by law.',
  },
  {
    sectionTitle: '2.6. Changes to Terms and Conditions',
    content:
      'We reserve the right to modify these Terms and Conditions at any time. All changes will be posted on this page with the updated date.',
  },
]

export const TermsPageGlobal: GlobalConfig = {
  slug: 'terms-page',
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
          pageTitle: doc.pageTitle || 'Terms and Conditions for Ankur Narula Ministries',
          introText:
            doc.introText ||
            'By using the website and purchasing products from Ankur Narula Ministries, you agree to the following terms and conditions. Please read them carefully.',
          sections:
            doc.sections && doc.sections.length > 0
              ? doc.sections
              : DEFAULT_TERMS_SECTIONS,
          contactEmail: doc.contactEmail || 'anmbrightmedia5185@gmail.com',
        }
      },
    ],
  },
  fields: [
    {
      name: 'pageTitle',
      type: 'text',
      label: 'Document Title',
      defaultValue: 'Terms and Conditions for Ankur Narula Ministries',
    },
    {
      name: 'introText',
      type: 'textarea',
      label: 'Introductory Statement',
      defaultValue:
        'By using the website and purchasing products from Ankur Narula Ministries, you agree to the following terms and conditions. Please read them carefully.',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Terms & Conditions Clauses',
      defaultValue: DEFAULT_TERMS_SECTIONS,
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
      label: 'Support / Contact Email',
      defaultValue: 'anmbrightmedia5185@gmail.com',
    },
  ],
  versions: false,
}
