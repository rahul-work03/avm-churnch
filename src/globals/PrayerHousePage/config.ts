import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_SCENES_ROW1 = [
  {
    imageFallback: '/figma-assets/55fa90036842a75181669f3a6aec9e0738913aee.png',
    alt: 'Prayer House Grand Neoclassical Sanctuary',
  },
  {
    imageFallback: '/figma-assets/6b099d6a283f967b4bf3ff1f51411f14a0fee0ac.png',
    alt: 'Prayer House Lighted Exterior Facade',
  },
  {
    imageFallback: '/figma-assets/94a1faeb119e4d3406e3e61f9268b121e7b5496f.png',
    alt: 'Paved Tree-Lined Avenues and Grounds',
  },
  {
    imageFallback: '/figma-assets/38c0e2d311bde0d312937a97c60e92a2e2d34116.png',
    alt: 'Sanctuary Lawns and Open Courtyard',
  },
]

const DEFAULT_SCENES_ROW2 = [
  {
    imageFallback: '/figma-assets/36eda1c5a6d082acb6e73e8881c8595815a11a60.png',
    alt: 'Prayer Pavilion and Pathways',
  },
  {
    imageFallback: '/figma-assets/9969ab6a5c61f58502b9d0ffdb0cac71eff778d2.png',
    alt: 'Greenery and Meditation Walkway',
  },
  {
    imageFallback: '/figma-assets/74e8182af8627fad3ae428aad2b17d4eca519897.png',
    alt: 'Evening Illuminated Walkway',
  },
  {
    imageFallback: '/figma-assets/dcd3dfff5990d32ed5316ae442144e3f269cdb3e.png',
    alt: 'Prayer House Retreat Complex',
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
              defaultValue: '/figma-assets/55fa90036842a75181669f3a6aec9e0738913aee.png',
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
