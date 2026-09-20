import type { GlobalConfig } from 'payload'
import { revalidateHeader } from './hooks/revalidateHeader'

const DEFAULT_NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Ministries & More',
    href: '/ministries',
    children: [
      { label: 'Ministries', href: '/ministries' },
      { label: 'Prayer Mountain', href: '/prayer-mountain' },
      { label: 'Prayer House', href: '/prayer-house' },
      { label: 'Bible College', href: '/bible-college' },
      { label: 'Church Branches', href: '/church-branches' },
      { label: 'Sunday School', href: '/sunday-school' },
      { label: 'Sophia Institute', href: '/sophia-institute' },
    ],
  },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Give', href: '/give' },
]

export const Header: GlobalConfig = {
  slug: 'header',
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
          brandName: doc.brandName || 'Ankur Narula Ministries',
          logoFallback:
            doc.logoFallback || '/figma-assets/a12f7a8578aca49746f879f50d3567e9cc929dad.png',
          navItems: doc.navItems && doc.navItems.length > 0 ? doc.navItems : DEFAULT_NAV_ITEMS,
          ctaButtonLabel: doc.ctaButtonLabel || 'Contact Us',
          ctaButtonUrl: doc.ctaButtonUrl || '/contact',
        }
      },
    ],
    afterChange: [revalidateHeader],
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Ministry Brand Logo Image',
    },
    {
      name: 'logoFallback',
      type: 'text',
      label: 'Logo Fallback Image Path',
      defaultValue: '/figma-assets/a12f7a8578aca49746f879f50d3567e9cc929dad.png',
    },
    {
      name: 'brandName',
      type: 'text',
      label: 'Ministry Brand Name / Title',
      defaultValue: 'Ankur Narula Ministries',
    },
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigation Links',
      defaultValue: DEFAULT_NAV_ITEMS,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Navigation Label',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Navigation Link URL',
          required: true,
        },
        {
          name: 'children',
          type: 'array',
          label: 'Submenu Dropdown Links (Optional)',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Sub-Link Label',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              label: 'Sub-Link URL',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'ctaButtonLabel',
      type: 'text',
      label: 'Header CTA Button Label',
      defaultValue: 'Contact Us',
    },
    {
      name: 'ctaButtonUrl',
      type: 'text',
      label: 'Header CTA Button Link URL',
      defaultValue: '/contact',
    },
  ],
  versions: false,
}
