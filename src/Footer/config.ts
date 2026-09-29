import type { GlobalConfig } from 'payload'
import { revalidateFooter } from './hooks/revalidateFooter'

const DEFAULT_PAGES_LIST = [
  { label: 'Branches', href: '/church-branches' },
  { label: 'Prayer Request', href: '/prayer-request' },
  { label: 'Give', href: '/give' },
  { label: 'Prayer Mountain', href: '/prayer-mountain' },
  { label: 'Prayer House', href: '/prayer-house' },
  { label: 'Sunday School', href: '/sunday-school' },
  { label: 'Bible College', href: '/bible-college' },
  { label: 'Sophia Institute', href: '/sophia-institute' },
]

const DEFAULT_SOCIAL_LINKS = [
  {
    name: 'Instagram',
    iconFallback: '/instagram_logo_footer.png',
    url: 'https://www.instagram.com/ankurnarulaministries',
    width: 36,
    height: 36,
  },
  {
    name: 'Facebook',
    iconFallback: '/facebook_logo_footer.png',
    url: 'https://www.facebook.com/ankurnarulaministries/',
    width: 36,
    height: 36,
  },
  {
    name: 'YouTube',
    iconFallback: '/youtube_logo_footer.png',
    url: 'https://www.youtube.com/@ankurnarulaministries',
    width: 36,
    height: 36,
  },
  {
    name: 'X Twitter',
    iconFallback: '/twitter_logo_footer.png',
    url: 'https://x.com/apostleankur',
    width: 36,
    height: 36,
  },
]

const DEFAULT_MAP_IFRAME =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.0779467068696!2d75.56073407539549!3d31.273939074327686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b50b36a88a1%3A0x3d8b66ec2e189bf6!2sAnkur%20Narula%20Ministries!5e0!3m2!1sen!2sin!4v1790533216619!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>'

const DEFAULT_MAP_EMBED_URL = DEFAULT_MAP_IFRAME

export const Footer: GlobalConfig = {
  slug: 'footer',
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
          logoFallback:
            doc.logoFallback || '/avm_church_logo.webp',
          ministryName: doc.ministryName || 'Ankur Narula Ministries',
          aboutText:
            doc.aboutText ||
            'The Church of Signs and Wonders is the biggest and fastest growing church ministry in World. Apostle Ankur Narula is the Senior Pastor and Overseer in The Church of Signs and Wonders.',
          contactEmail: doc.contactEmail || 'info@ankurnarula.org',
          contactPhone: doc.contactPhone || 'Phone: 0181-520-7777',
          privacyPolicyUrl: doc.privacyPolicyUrl || '/privacy-policy',
          termsUrl: doc.termsUrl || '/terms-and-conditions',
          pagesList: doc.pagesList && doc.pagesList.length > 0 ? doc.pagesList : DEFAULT_PAGES_LIST,
          socialLinks:
            doc.socialLinks && doc.socialLinks.length > 0
              ? doc.socialLinks
              : DEFAULT_SOCIAL_LINKS,
          mapEmbedUrl: doc.mapEmbedUrl || DEFAULT_MAP_IFRAME,
          mapImageFallback:
            doc.mapImageFallback || '/figma-assets/f1c7c30e211dc39094fc986db7a7e7d876202f58.png',
          mapUrl:
            doc.mapUrl ||
            'https://maps.google.com/?q=The+Church+of+Signs+and+Wonders+Khambra+Jalandhar',
          copyrightText:
            doc.copyrightText || '© 2026 Ankur Narula Ministries. All Rights Reserved.',
        }
      },
    ],
    afterChange: [revalidateFooter],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Branding & Overview',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Footer Logo Image',
            },
            {
              name: 'logoFallback',
              type: 'text',
              label: 'Logo Fallback Image Path',
              defaultValue: '/avm_church_logo.webp',
            },
            {
              name: 'ministryName',
              type: 'text',
              label: 'Ministry Name Title',
              defaultValue: 'Ankur Narula Ministries',
            },
            {
              name: 'aboutText',
              type: 'textarea',
              label: 'Ministry Overview Paragraph',
              defaultValue:
                'The Church of Signs and Wonders is the biggest and fastest growing church ministry in World. Apostle Ankur Narula is the Senior Pastor and Overseer in The Church of Signs and Wonders.',
            },
            {
              name: 'copyrightText',
              type: 'text',
              label: 'Bottom Copyright Text',
              defaultValue: '© 2026 Ankur Narula Ministries. All Rights Reserved.',
            },
          ],
        },
        {
          label: 'Contact & Legal',
          fields: [
            {
              name: 'contactEmail',
              type: 'text',
              label: 'Contact Email Address',
              defaultValue: 'info@ankurnarula.org',
            },
            {
              name: 'contactPhone',
              type: 'text',
              label: 'Contact Phone Text',
              defaultValue: 'Phone: 0181-520-7777',
            },
            {
              name: 'privacyPolicyUrl',
              type: 'text',
              label: 'Privacy Policy Page Link URL',
              defaultValue: '/privacy-policy',
            },
            {
              name: 'termsUrl',
              type: 'text',
              label: 'Terms and Conditions Link URL',
              defaultValue: '/terms-and-conditions',
            },
          ],
        },
        {
          label: 'Pages Navigation',
          fields: [
            {
              name: 'pagesList',
              type: 'array',
              label: 'Footer Page Links',
              defaultValue: DEFAULT_PAGES_LIST,
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Page Name',
                  required: true,
                },
                {
                  name: 'href',
                  type: 'text',
                  label: 'Page URL',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Social & Map',
          fields: [
            {
              name: 'socialLinks',
              type: 'array',
              label: 'Social Media Accounts',
              defaultValue: DEFAULT_SOCIAL_LINKS,
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Social Platform Name',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Social Profile URL',
                  required: true,
                },
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Platform Icon Image',
                  admin: {
                    hidden: true,
                  },
                },
                {
                  name: 'iconFallback',
                  type: 'text',
                  label: 'Platform Icon Fallback Path',
                  admin: {
                    hidden: true,
                  },
                },
                {
                  name: 'width',
                  type: 'number',
                  label: 'Icon Width (px)',
                  defaultValue: 26,
                  admin: {
                    hidden: true,
                  },
                },
                {
                  name: 'height',
                  type: 'number',
                  label: 'Icon Height (px)',
                  defaultValue: 26,
                  admin: {
                    hidden: true,
                  },
                },
              ],
            },
            {
              name: 'mapEmbedUrl',
              type: 'textarea',
              label: 'Google Maps Embed URL or <iframe> Code',
              admin: {
                description:
                  'Enter a Google Maps embed URL (https://www.google.com/maps/embed?...) or full <iframe> code. An interactive Google Map will be displayed in the footer.',
              },
              defaultValue: DEFAULT_MAP_IFRAME,
            },
            {
              name: 'mapImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Map Preview Image (Optional Fallback)',
            },
            {
              name: 'mapImageFallback',
              type: 'text',
              label: 'Map Image Fallback Path',
              defaultValue: '/figma-assets/f1c7c30e211dc39094fc986db7a7e7d876202f58.png',
            },
            {
              name: 'mapUrl',
              type: 'text',
              label: 'Google Maps Church URL (Direct Link)',
              defaultValue:
                'https://maps.google.com/?q=The+Church+of+Signs+and+Wonders+Khambra+Jalandhar',
            },
          ],
        },
      ],
    },
  ],
  versions: false,
}
