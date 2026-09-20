import type { GlobalConfig } from 'payload'

const DEFAULT_PRIVACY_SECTIONS = [
  {
    sectionTitle: '1.1. Information We Collect',
    content:
      'We collect personal information that you provide directly to us, including: Name, Email address, Shipping address, Payment details, and other information you provide when making a purchase or contacting us.',
  },
  {
    sectionTitle: '1.2. How We Use Your Information',
    content:
      'We use your personal information to: Process your orders and deliver products, Communicate with you regarding your purchases, services, and updates, Improve our website and offerings, and Send newsletters or promotional content (with your consent).',
  },
  {
    sectionTitle: '1.3. Data Security',
    content:
      'We take reasonable steps to ensure the security of your personal information, including using encryption and secure payment processing methods.',
  },
  {
    sectionTitle: '1.4. Third-Party Sharing',
    content:
      'We do not sell, rent, or trade your personal information. However, we may share your information with trusted third-party service providers who assist us with order fulfillment, payments, and marketing, under strict confidentiality agreements.',
  },
  {
    sectionTitle: '1.5. Cookies',
    content:
      'We use cookies to improve your experience on our website. Cookies are small files stored on your device that help us analyze website traffic and tailor content to your preferences. You can manage cookie settings in your browser.',
  },
  {
    sectionTitle: '1.6. Your Rights',
    content:
      'You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us via the contact details provided on our website.',
  },
  {
    sectionTitle: '1.7. Changes to this Privacy Policy',
    content:
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.',
  },
]

export const PrivacyPolicyPageGlobal: GlobalConfig = {
  slug: 'privacy-policy-page',
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
          pageTitle: doc.pageTitle || 'Privacy Policy for Ankur Narula Ministries',
          introText:
            doc.introText ||
            'At Ankur Narula Ministries, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website, purchase products, or engage with our services.',
          sections:
            doc.sections && doc.sections.length > 0
              ? doc.sections
              : DEFAULT_PRIVACY_SECTIONS,
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
      defaultValue: 'Privacy Policy for Ankur Narula Ministries',
    },
    {
      name: 'introText',
      type: 'textarea',
      label: 'Introductory Statement',
      defaultValue:
        'At Ankur Narula Ministries, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website, purchase products, or engage with our services.',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Privacy Policy Sections / Clauses',
      defaultValue: DEFAULT_PRIVACY_SECTIONS,
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
