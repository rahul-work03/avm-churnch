import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_SCENES_ROW1 = [
  {
    imageFallback: '/scenes_of_prayer_mountain/image_1.png',
    alt: 'Prayer Mountain Scenic View 1',
  },
  {
    imageFallback: '/scenes_of_prayer_mountain/image_2.png',
    alt: 'Prayer Mountain Scenic View 2',
  },
  {
    imageFallback: '/scenes_of_prayer_mountain/image_3.png',
    alt: 'Prayer Mountain Scenic View 3',
  },
  {
    imageFallback: '/scenes_of_prayer_mountain/image_4.png',
    alt: 'Prayer Mountain Scenic View 4',
  },
  {
    imageFallback: '/scenes_of_prayer_mountain/image_5.png',
    alt: 'Prayer Mountain Scenic View 5',
  },
]

const DEFAULT_SCENES_ROW2 = [
  {
    imageFallback: '/scenes_of_prayer_mountain/image_6.png',
    alt: 'Prayer Mountain Scenic View 6',
  },
  {
    imageFallback: '/scenes_of_prayer_mountain/image_7.png',
    alt: 'Prayer Mountain Scenic View 7',
  },
  {
    imageFallback: '/scenes_of_prayer_mountain/image_8.png',
    alt: 'Prayer Mountain Scenic View 8',
  },
  {
    imageFallback: '/scenes_of_prayer_mountain/image_9.png',
    alt: 'Prayer Mountain Scenic View 9',
  },
  {
    imageFallback: '/scenes_of_prayer_mountain/image_10.png',
    alt: 'Prayer Mountain Scenic View 10',
  },
]

const DEFAULT_TESTIMONIES = [
  {
    person: 'Sister Randeep',
    title: 'Complete Healing from Tuberculosis, Lung Complications & Paralysis',
    summary:
      'DUE TO TB AND FLUID IN THE RIGHT LUNG, SHE HAD DIFFICULTY IN BREATHING AND REMAINED BEDRIDDEN. AFTER RECEIVING ANOINTED PRAYER BY WOMAN OF GOD, SHE GOT REMARKABLE HEALING.',
    slug: 'sister-randeep-healing',
    imageFallback: '/figma-assets/88fe21040a6d042f53b945fa5a996447efd6bcfd.png',
    buttonLabel: 'READ FULL TESTIMONY',
  },
  {
    person: 'Sister Sukhdeep Kaur',
    title: 'Supernatural Deliverance from Severe Mental Attacks & Oppression',
    summary:
      'DUE TO VIOLENT DEMONIC MENTAL ATTACKS, SHE SUFFERED SEVERE OUTBURSTS AND AGONY. AFTER RECEIVING ANOINTED PRAYER, SHE WAS MIRACULOUSLY DELIVERED AND RESTORED TO SOUND MIND.',
    slug: 'sister-sukhdeep-kaur-deliverance',
    imageFallback: '/figma-assets/6b7f869d048b1af39a42b08c4bacff57cb6ed577.png',
    buttonLabel: 'READ FULL TESTIMONY',
  },
]


export const PrayerMountainPageGlobal: GlobalConfig = {
  slug: 'prayer-mountain-page',
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
          testimonies: doc.testimonies && doc.testimonies.length > 0 ? doc.testimonies : DEFAULT_TESTIMONIES,
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
              defaultValue: 'PRAYER MOUNTAIN',
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              label: 'Intro Description Paragraph',
              defaultValue:
                "The Prayer Mountain is a sacred place dedicated to prayer, meditation, and spiritual renewal. It is where believers gather to seek God's presence, intercede for their needs, and grow in faith. Here, individuals can experience deep encounters with God and leave spiritually rejuvenated.",
            },
            {
              name: 'heroBannerImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Mountain Panorama Photo',
            },
            {
              name: 'heroBannerFallback',
              type: 'text',
              label: 'Fallback Banner Image Path',
              defaultValue: '/prayer_mountain_hero.png',
            },
            {
              name: 'heroBannerAlt',
              type: 'text',
              label: 'Banner Alt Text',
              defaultValue: 'Prayer Mountain - Ankur Narula Ministries',
            },
            {
              name: 'heroSubtitle',
              type: 'text',
              label: 'Subtitle Under Hero Photo',
              defaultValue:
                'A consecrated place to seek God—daily at 8:00 PM we gather in expectation of His presence.',
            },
          ],
        },
        {
          label: 'Scenes of Prayer Mountain',
          fields: [
            {
              name: 'scenesHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'SCENES OF PRAYER MOUNTAIN',
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
              defaultValue: 'What is Prayer Mountain?',
            },
            {
              name: 'whatIsCardDescription',
              type: 'textarea',
              label: 'Card 1 Narrative Description',
              defaultValue:
                "Prayer Mountain is a sacred place dedicated to prayer, meditation, and spiritual renewal. It is where believers gather to seek God's presence, intercede for their needs, and grow in faith. Here, individuals can experience deep encounters with God and leave spiritually rejuvenated.",
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
                "The purpose of Prayer Mountain is to provide a quiet, holy space where believers can seek God's direction, receive healing, and find peace in the midst of life's challenges.",
            },
            {
              name: 'visionParagraph',
              type: 'textarea',
              label: 'Vision Statement Paragraph',
              defaultValue:
                'Our vision is to make it a place where individuals and families connect with God on a deeper level, and where the ministry can pray for the needs of the community.',
            },
          ],
        },
        {
          label: 'Testimonies',
          fields: [
            {
              name: 'testimoniesHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'TESTIMONIES OF PRAYER MOUTAIN',
            },
            {
              name: 'testimonies',
              type: 'array',
              label: 'Testimonial Cards List',
              defaultValue: DEFAULT_TESTIMONIES,
              fields: [
                {
                  name: 'person',
                  type: 'text',
                  label: 'Person Name',
                  required: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Testimony Headline Title',
                  required: true,
                },
                {
                  name: 'summary',
                  type: 'textarea',
                  label: 'Card Short Summary',
                  required: true,
                },
                {
                  name: 'slug',
                  type: 'text',
                  label: 'Testimony Slug / Link (e.g. sister-randeep-healing)',
                  defaultValue: 'sister-randeep-healing',
                },
                {
                  name: 'buttonLabel',
                  type: 'text',
                  label: 'Button Label',
                  defaultValue: 'READ FULL TESTIMONY',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Testimony Photo',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Photo Path',
                },

              ],
            },
          ],
        },
        {
          label: 'Join Us in Prayers',
          fields: [
            {
              name: 'joinHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'JOIN US IN PRAYERS',
            },
            {
              name: 'timeCardTitle',
              type: 'text',
              label: 'Time Card Title',
              defaultValue: 'Time - Every Day at 8 PM',
            },
            {
              name: 'timeCardDescription',
              type: 'text',
              label: 'Time Card Description',
              defaultValue: 'Join in Person or Connect with The Ministry Broadcast Schedule.',
            },
            {
              name: 'locationCardTitle',
              type: 'text',
              label: 'Location Card Title',
              defaultValue: 'LOCATION',
            },
            {
              name: 'locationCardDescription',
              type: 'text',
              label: 'Location Card Description',
              defaultValue: 'Prayer Mountain, Ankur Narula Ministries, Punjab, India',
            },
            {
              name: 'locationUrl',
              type: 'text',
              label: 'Location Google Maps / Directions Link',
              defaultValue:
                'https://maps.google.com/?q=The+Church+of+Signs+and+Wonders+Khambra+Jalandhar+Punjab+India',
            },
          ],
        },
      ],
    },
  ],
}
