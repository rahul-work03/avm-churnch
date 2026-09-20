import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

export const TestimonialsPageGlobal: GlobalConfig = {
  slug: 'testimonials-page',
  access: {
    read: anyone,
    update: adminsOrEditors,
  },
  admin: {
    group: 'Website Settings',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Header Settings',
          fields: [
            {
              name: 'headerTitle',
              type: 'text',
              label: 'Main Page Header Title',
              defaultValue: 'Wonderful Testimonies',
            },
            {
              name: 'headerSubtitle',
              type: 'textarea',
              label: 'Header Subtitle / Tagline',
              defaultValue:
                'Jesus Christ: The Same Forever · Meet Jehovah Rapha, Our Healer · Undeniable Evidence of His Power',
            },
          ],
        },
        {
          label: 'CTA Banner Settings',
          fields: [
            {
              name: 'ctaTitle',
              type: 'text',
              label: 'CTA Section Title',
              defaultValue: 'Have a Testimony to Share?',
            },
            {
              name: 'ctaQuote',
              type: 'textarea',
              label: 'CTA Scripture Verse Quote',
              defaultValue:
                '“They overcame him by the blood of the Lamb and by the word of their testimony.” — Revelation 12:11',
            },
            {
              name: 'ctaButton1Label',
              type: 'text',
              label: 'Primary Button Label',
              defaultValue: 'Submit Prayer Request',
            },
            {
              name: 'ctaButton1Url',
              type: 'text',
              label: 'Primary Button Link URL',
              defaultValue: '/prayer-request',
            },
            {
              name: 'ctaButton2Label',
              type: 'text',
              label: 'Secondary Button Label',
              defaultValue: 'Register for Zoom Lay Hand',
            },
            {
              name: 'ctaButton2Url',
              type: 'text',
              label: 'Secondary Button Link URL',
              defaultValue: '/zoom-lay-hand',
            },
          ],
        },
      ],
    },
  ],
}
