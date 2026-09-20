import type { GlobalConfig } from 'payload'

export const PrayerRequestPageGlobal: GlobalConfig = {
  slug: 'prayer-request-page',
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
          heroBannerFallback:
            doc.heroBannerFallback ||
            '/figma-assets/0c9f2208a82bd40d24f4da377e83cfe370d48e0a.png',
          headingTitle: doc.headingTitle || 'How can we pray for You?',
          headingSubtitle:
            doc.headingSubtitle ||
            "Send your prayer request believing for God's divine intervention, healing, and breakthroughs.",
          helplineTitle: doc.helplineTitle || '24/7 Urgent Prayer Call Center',
          helplinePhone: doc.helplinePhone || '0181 520 7777',
          helplineEmail: doc.helplineEmail || 'Prayer@ankurnarula.org',
          submitButtonText: doc.submitButtonText || 'Submit Your Prayer Request',
          successTitle: doc.successTitle || 'Prayer Request Submitted!',
          successMessage:
            doc.successMessage ||
            'Thank you. Your prayer request has been received. Apostle Dr. Ankur Yoseph Narula and the ministry prayer team will stand in faith with you.',
          successVerse:
            doc.successVerse ||
            '“And all things, whatsoever ye shall ask in prayer, believing, ye shall receive.” — Matthew 21:22',
        }
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero and Header',
          fields: [
            {
              name: 'heroBannerImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Hero Banner Image (1140x620)',
            },
            {
              name: 'heroBannerFallback',
              type: 'text',
              label: 'Hero Banner Fallback Image Path',
              defaultValue:
                '/figma-assets/0c9f2208a82bd40d24f4da377e83cfe370d48e0a.png',
            },
            {
              name: 'headingTitle',
              type: 'text',
              label: 'Section Heading Title',
              defaultValue: 'How can we pray for You?',
            },
            {
              name: 'headingSubtitle',
              type: 'textarea',
              label: 'Section Subtitle / Description',
              defaultValue:
                "Send your prayer request believing for God's divine intervention, healing, and breakthroughs.",
            },
          ],
        },
        {
          label: 'Helpline and Support',
          fields: [
            {
              name: 'helplineTitle',
              type: 'text',
              label: 'Helpline Section Title',
              defaultValue: '24/7 Urgent Prayer Call Center',
            },
            {
              name: 'helplinePhone',
              type: 'text',
              label: 'Helpline Phone Number',
              defaultValue: '0181 520 7777',
            },
            {
              name: 'helplineEmail',
              type: 'text',
              label: 'Helpline Email Address',
              defaultValue: 'Prayer@ankurnarula.org',
            },
          ],
        },
        {
          label: 'Form and Confirmation',
          fields: [
            {
              name: 'submitButtonText',
              type: 'text',
              label: 'Submit Button Label',
              defaultValue: 'Submit Your Prayer Request',
            },
            {
              name: 'successTitle',
              type: 'text',
              label: 'Confirmation Dialog Title',
              defaultValue: 'Prayer Request Submitted!',
            },
            {
              name: 'successMessage',
              type: 'textarea',
              label: 'Confirmation Success Message',
              defaultValue:
                'Thank you. Your prayer request has been received. Apostle Dr. Ankur Yoseph Narula and the ministry prayer team will stand in faith with you.',
            },
            {
              name: 'successVerse',
              type: 'text',
              label: 'Confirmation Scripture Verse',
              defaultValue:
                '“And all things, whatsoever ye shall ask in prayer, believing, ye shall receive.” — Matthew 21:22',
            },
          ],
        },
      ],
    },
  ],
  versions: false,
}
