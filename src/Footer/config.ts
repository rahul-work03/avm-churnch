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
    url: 'https://www.instagram.com/ankurnarulaministries?igsh=NmEzcDFsYnc4YWEw',
    width: 27,
    height: 27,
  },
  {
    name: 'YouTube',
    iconFallback: '/youtube_logo_footer.png',
    url: 'https://www.youtube.com/channel/UCYwyl0lfL0UzP-1LMtcoH-w',
    width: 25,
    height: 24,
  },
  {
    name: 'Facebook',
    iconFallback: '/facebook_logo_footer.png',
    url: 'https://www.facebook.com/ankurnarulaministries',
    width: 26,
    height: 27,
  },
  {
    name: 'X Twitter',
    iconFallback: '/twitter_logo_footer.png',
    url: 'https://x.com/apostleankur',
    width: 27,
    height: 27,
  },
]

const DEFAULT_MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.0915173016306!2d75.56058437539549!3d31.273563674328035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b93663a625d%3A0x77a5a7c6551686f1!2sKhambra%20Church!5e0!3m2!1sen!2sin!4v1789922592786!5m2!1sen!2sin'

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
          mapEmbedUrl: doc.mapEmbedUrl || DEFAULT_MAP_EMBED_URL,
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
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Platform Icon Image',
                },
                {
                  name: 'iconFallback',
                  type: 'text',
                  label: 'Platform Icon Fallback Path',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Social Profile URL',
                  required: true,
                },
                {
                  name: 'width',
                  type: 'number',
                  label: 'Icon Width (px)',
                  defaultValue: 26,
                },
                {
                  name: 'height',
                  type: 'number',
                  label: 'Icon Height (px)',
                  defaultValue: 26,
                },
              ],
            },
            {
              name: 'mapEmbedUrl',
              type: 'text',
              label: 'Google Maps Embed URL (iframe src)',
              defaultValue: DEFAULT_MAP_EMBED_URL,
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
