import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_SCENES_ROW1 = [
  {
    imageFallback: '/scenes_of_prayer_house/image_1.png',
    alt: 'Prayer House Scenic View 1',
  },
  {
    imageFallback: '/scenes_of_prayer_house/image_2.png',
    alt: 'Prayer House Scenic View 2',
  },
  {
    imageFallback: '/scenes_of_prayer_house/image_3.png',
    alt: 'Prayer House Scenic View 3',
  },
  {
    imageFallback: '/scenes_of_prayer_house/image_4.png',
    alt: 'Prayer House Scenic View 4',
  },
  {
    imageFallback: '/scenes_of_prayer_house/image_5.png',
    alt: 'Prayer House Scenic View 5',
  },
]

const DEFAULT_SCENES_ROW2 = [
  {
    imageFallback: '/scenes_of_prayer_house/image_6.png',
    alt: 'Prayer House Scenic View 6',
  },
  {
    imageFallback: '/scenes_of_prayer_house/image_7.png',
    alt: 'Prayer House Scenic View 7',
  },
  {
    imageFallback: '/scenes_of_prayer_house/image_8.png',
    alt: 'Prayer House Scenic View 8',
  },
  {
    imageFallback: '/scenes_of_prayer_house/image_9.png',
    alt: 'Prayer House Scenic View 9',
  },
]

export const PrayerHousePageGlobal: GlobalConfig = {
  slug: 'prayer-house-page',
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
          scenesRow1: doc.scenesRow1 && doc.scenesRow1.length > 0 ? doc.scenesRow1 : DEFAULT_SCENES_ROW1,
          scenesRow2: doc.scenesRow2 && doc.scenesRow2.length > 0 ? doc.scenesRow2 : DEFAULT_SCENES_ROW2,
        }
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero & Overview',
          fields: [
            {
              name: 'heroHeaderTitle',
              type: 'text',
              label: 'Header Title',
              defaultValue: 'PRAYER HOUSE',
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              label: 'Intro Description Paragraph',
              defaultValue:
                'Welcome to a dwelling of divine presence, where every soul finds rest and every prayer rises to heaven. This is not just a place, but a powerful encounter with the living God, where broken hearts are healed and weary spirits are strengthened. As you seek Him here, you will discover His love, His peace, and His transforming power working in your life. Come with expectation, and leave with a testimony of His goodness.',
            },
            {
              name: 'heroBannerImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Prayer House Panorama Photo',
            },
            {
              name: 'heroBannerFallback',
              type: 'text',
              label: 'Fallback Banner Image Path',
              defaultValue: '/prayer_house_hero.png',
            },
            {
              name: 'heroBannerAlt',
              type: 'text',
              label: 'Banner Alt Text',
              defaultValue: 'Prayer House - Ankur Narula Ministries',
            },
            {
              name: 'heroSubtitle',
              type: 'text',
              label: 'Subtitle Under Hero Photo',
              defaultValue: 'Encounter God. Experience Healing. Walk in His Presence.',
            },
          ],
        },
        {
          label: 'Scenes Gallery',
          fields: [
            {
              name: 'scenesHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'SCENES OF PRAYER HOUSE',
            },
            {
              name: 'scenesRow1',
              type: 'array',
              label: 'Row 1 Photos (Moving Left)',
              defaultValue: DEFAULT_SCENES_ROW1,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Photo',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Image Path',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                },
              ],
            },
            {
              name: 'scenesRow2',
              type: 'array',
              label: 'Row 2 Photos (Moving Right)',
              defaultValue: DEFAULT_SCENES_ROW2,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Photo',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Image Path',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                },
              ],
            },
          ],
        },
        {
          label: 'What is & Vision',
          fields: [
            {
              name: 'whatIsCardTitle',
              type: 'text',
              label: 'Card 1 Title',
              defaultValue: 'What is Prayer House?',
            },
            {
              name: 'whatIsCardDescription',
              type: 'textarea',
              label: 'Card 1 Narrative Description',
              defaultValue:
                "Prayer House is a sacred space dedicated to prayer, worship, and spiritual renewal. It is a place where believers gather to seek God's presence, lift up their needs, and grow deeper in faith. Here, individuals and families can encounter God intimately and experience peace, restoration, and encouragement in their spiritual journey.",
            },
            {
              name: 'visionCardTitle',
              type: 'text',
              label: 'Card 2 Title',
              defaultValue: 'Purpose & vision',
            },
            {
              name: 'purposeParagraph',
              type: 'textarea',
              label: 'Purpose Statement Paragraph',
              defaultValue:
                'The purpose of Prayer House is to provide a peaceful, holy environment where people can come aside from daily distractions and connect with God.',
            },
            {
              name: 'visionParagraph',
              type: 'textarea',
              label: 'Vision Statement Paragraph',
              defaultValue:
                "Our vision is to build a strong prayer community where lives are transformed, faith is strengthened, and hearts are aligned with God's will. It is a place where continuous prayer is offered for individuals, families, and the needs of the community.",
            },
          ],
        },
      ],
    },
  ],
}
