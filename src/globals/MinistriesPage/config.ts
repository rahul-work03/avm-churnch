import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_MINISTRIES = [
  {
    title: 'PRAYER MOUNTAIN',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/ministries/prayer_mountain.png',
    linkUrl: '/prayer-mountain',
    buttonLabel: 'Learn More',
  },
  {
    title: 'PRAYER HOUSE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/ministries/prayer_house.png',
    linkUrl: '/prayer-house',
    buttonLabel: 'Learn More',
  },
  {
    title: 'BIBLE COLLEGE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/ministries/bible_college.png',
    linkUrl: '/bible-college',
    buttonLabel: 'Learn More',
  },
  {
    title: 'SOPHIA INSTITUTE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/ministries/sophia_institute.png',
    linkUrl: '/sophia-institute',
    buttonLabel: 'Learn More',
  },
  {
    title: 'CHURCH BRANCHES',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/ministries/church_branches.png',
    linkUrl: '/church-branches',
    buttonLabel: 'Learn More',
  },
  {
    title: 'SUNDAY SCHOOL',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/ministries/sunday_school.png',
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
              defaultValue: 'Ministries Overview',
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
              defaultValue: '/head_church.png',
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
              defaultValue: '/choir_image.png',
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
