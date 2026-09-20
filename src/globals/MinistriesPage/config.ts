import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_MINISTRIES = [
  {
    title: 'PRAYER MOUNTAIN',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/figma-assets/36eda1c5a6d082acb6e73e8881c8595815a11a60.png',
    linkUrl: '/prayer-mountain',
    buttonLabel: 'Learn More',
  },
  {
    title: 'PRAYER HOUSE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/figma-assets/55fa90036842a75181669f3a6aec9e0738913aee.png',
    linkUrl: '/prayer-house',
    buttonLabel: 'Learn More',
  },
  {
    title: 'BIBLE COLLEGE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/figma-assets/94a1faeb119e4d3406e3e61f9268b121e7b5496f.png',
    linkUrl: '/bible-college',
    buttonLabel: 'Learn More',
  },
  {
    title: 'SOPHIA INSTITUTE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/figma-assets/38c0e2d311bde0d312937a97c60e92a2e2d34116.png',
    linkUrl: '/sophia-institute',
    buttonLabel: 'Learn More',
  },
  {
    title: 'CHURCH BRANCHES',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/figma-assets/9969ab6a5c61f58502b9d0ffdb0cac71eff778d2.png',
    linkUrl: '/church-branches',
    buttonLabel: 'Learn More',
  },
  {
    title: 'SUNDAY SCHOOL',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/figma-assets/dcd3dfff5990d32ed5316ae442144e3f269cdb3e.png',
    linkUrl: '/sunday-school',
    buttonLabel: 'Learn More',
  },
]

export const MinistriesPageGlobal: GlobalConfig = {
  slug: 'ministries-page',
  access: {
    read: anyone,
    update: adminsOrEditors,
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
          ministryCards: doc.ministryCards && doc.ministryCards.length > 0 ? doc.ministryCards : DEFAULT_MINISTRIES,
        }
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Banner',
          fields: [
            {
              name: 'heroBadgeText',
              type: 'text',
              label: 'Hero Floating Badge Text',
              defaultValue: 'OUR MINISTRIES',
            },
            {
              name: 'heroSubtitle',
              type: 'text',
              label: 'Hero Subtitle Text',
              defaultValue: 'Transforming Lives Through Service',
            },
            {
              name: 'heroVideo',
              type: 'upload',
              relationTo: 'media',
              label: 'Featured Hero Video',
            },
            {
              name: 'heroVideoFallback',
              type: 'text',
              label: 'Fallback Hero Video Path',
              defaultValue: '/ministries_hero_video.mp4',
            },
            {
              name: 'heroBannerImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Featured Banner Image (Optional Poster)',
            },
            {
              name: 'heroBannerFallback',
              type: 'text',
              label: 'Fallback Banner Image Path',
              defaultValue: '/figma-assets/1293a243cd5f4ddaa9c70378ddffe38c61e7ffb6.png',
            },
            {
              name: 'heroBannerAlt',
              type: 'text',
              label: 'Banner Alt Text',
              defaultValue: 'Our Ministries - Ankur Narula Ministries',
            },
          ],
        },
        {
          label: 'Ministries Overview',
          fields: [
            {
              name: 'overviewHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'Ministries of Over View',
            },
            {
              name: 'ministryCards',
              type: 'array',
              label: 'Ministry Overview Cards (Linked to Sub-Pages)',
              defaultValue: DEFAULT_MINISTRIES,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Ministry Title',
                  required: true,
                },
                {
                  name: 'subtitle',
                  type: 'textarea',
                  label: 'Short Subtitle / Description',
                  required: true,
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Card Thumbnail Photo',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Image Path',
                },
                {
                  name: 'linkUrl',
                  type: 'text',
                  label: 'Page Route URL (e.g. /prayer-mountain)',
                  required: true,
                },
                {
                  name: 'buttonLabel',
                  type: 'text',
                  label: 'Button Label',
                  defaultValue: 'Learn More',
                },
              ],
            },
          ],
        },
        {
          label: 'Head Church Jalandhar',
          fields: [
            {
              name: 'headChurchHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'Our Head Church Jalandhar',
            },
            {
              name: 'headChurchImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Head Church Stage Visual Photo',
            },
            {
              name: 'headChurchFallback',
              type: 'text',
              label: 'Fallback Photo Path',
              defaultValue: '/figma-assets/6b099d6a283f967b4bf3ff1f51411f14a0fee0ac.png',
            },
            {
              name: 'headChurchAlt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Head Church Jalandhar - Ankur Narula Ministries',
            },
            {
              name: 'headChurchNarrative',
              type: 'textarea',
              label: 'Narrative Story Paragraph',
              defaultValue:
                'Ankur Narula Ministries (The Church of Signs and Wonders) is the biggest and fastest growing church ministry in Punjab, India. Apostle Ankur Yoseph Narula is the Senior Pastor and Overseer in The Church of Signs and Wonders. The Church has become a channel of Salvation for India. Every Thursday and Sunday, our live services are broadcasted to millions around the globe through Anugrah TV, and the church is always filled more than capacity with overflows of people sitting outside the church on the roads and the empty plots. The church has become the biggest congregation of more than 300,000 people attending weekly services in The Church of Signs and Wonders.',
            },
          ],
        },
        {
          label: 'Worship Team',
          fields: [
            {
              name: 'worshipHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'Our Worship Team',
            },
            {
              name: 'worshipImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Worship Team Visual Photo',
            },
            {
              name: 'worshipFallback',
              type: 'text',
              label: 'Fallback Photo Path',
              defaultValue: '/figma-assets/74e8182af8627fad3ae428aad2b17d4eca519897.png',
            },
            {
              name: 'worshipAlt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'ANM Worship Team Leading Spirit-Filled Praise',
            },
            {
              name: 'worshipNarrative',
              type: 'textarea',
              label: 'Narrative Story Paragraph',
              defaultValue:
                'Our Worship Team leads the church in powerful and spirit-filled praise and worship. With dedication and passion, they help create an atmosphere where everyone can encounter God, express their faith, and grow deeper in their relationship with Christ.',
            },
          ],
        },
      ],
    },
  ],
}
