import type { GlobalConfig } from 'payload'

export const ZoomLayHandPageGlobal: GlobalConfig = {
  slug: 'zoom-lay-hand-page',
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
            '/figma-assets/624a2b77f2c32df6de342821ffd6101999d243b9.png',
          headingTitle: doc.headingTitle || 'Zoom Lay hand',
          headingSubtitle:
            doc.headingSubtitle ||
            'Register for the global Zoom Lay Hand prayer session with Apostle Dr. Ankur Yoseph Narula.',
          guidelinesTitle: doc.guidelinesTitle || 'Zoom Session Guidelines',
          guidelinesText:
            doc.guidelinesText ||
            'Please ensure you have a stable internet connection and quiet environment for the Zoom Lay Hand prayer.',
          supportPhone: doc.supportPhone || '0181 520 7777',
          supportEmail: doc.supportEmail || 'Prayer@ankurnarula.org',
          submitButtonText: doc.submitButtonText || 'Submit',
          successTitle: doc.successTitle || 'Prayer Registration Received',
          successMessage:
            doc.successMessage ||
            'Thank you for submitting your Zoom Lay Hand request. Our ministry team will review your details and send the Zoom session instructions and time slots to your email.',
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
                '/figma-assets/624a2b77f2c32df6de342821ffd6101999d243b9.png',
            },
            {
              name: 'headingTitle',
              type: 'text',
              label: 'Section Heading Title',
              defaultValue: 'Zoom Lay hand',
            },
            {
              name: 'headingSubtitle',
              type: 'textarea',
              label: 'Section Subtitle / Description',
              defaultValue:
                'Register for the global Zoom Lay Hand prayer session with Apostle Dr. Ankur Yoseph Narula.',
            },
          ],
        },
        {
          label: 'Guidelines and Support',
          fields: [
            {
              name: 'guidelinesTitle',
              type: 'text',
              label: 'Guidelines Box Title',
              defaultValue: 'Zoom Session Guidelines',
            },
            {
              name: 'guidelinesText',
              type: 'textarea',
              label: 'Guidelines Instructions',
              defaultValue:
                'Please ensure you have a stable internet connection and quiet environment for the Zoom Lay Hand prayer.',
            },
            {
              name: 'supportPhone',
              type: 'text',
              label: 'Support Helpline Phone',
              defaultValue: '0181 520 7777',
            },
            {
              name: 'supportEmail',
              type: 'text',
              label: 'Support Helpline Email',
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
              defaultValue: 'Submit',
            },
            {
              name: 'successTitle',
              type: 'text',
              label: 'Confirmation Dialog Title',
              defaultValue: 'Prayer Registration Received',
            },
            {
              name: 'successMessage',
              type: 'textarea',
              label: 'Confirmation Success Message',
              defaultValue:
                'Thank you for submitting your Zoom Lay Hand request. Our ministry team will review your details and send the Zoom session instructions and time slots to your email.',
            },
          ],
        },
      ],
    },
  ],
  versions: false,
}
