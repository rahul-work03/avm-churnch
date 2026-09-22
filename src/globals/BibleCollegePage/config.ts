import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_SCENES_ROW1 = [
  {
    imageFallback: '/scenes_of_bible_college/image_1.png',
    alt: 'Bible College Scenic View 1',
  },
  {
    imageFallback: '/scenes_of_bible_college/image_2.png',
    alt: 'Bible College Scenic View 2',
  },
  {
    imageFallback: '/scenes_of_bible_college/image_3.png',
    alt: 'Bible College Scenic View 3',
  },
  {
    imageFallback: '/scenes_of_bible_college/image_4.png',
    alt: 'Bible College Scenic View 4',
  },
  {
    imageFallback: '/scenes_of_bible_college/image_5.png',
    alt: 'Bible College Scenic View 5',
  },
]

const DEFAULT_SCENES_ROW2 = [
  {
    imageFallback: '/scenes_of_bible_college/image_6.png',
    alt: 'Bible College Scenic View 6',
  },
  {
    imageFallback: '/scenes_of_bible_college/image_7.png',
    alt: 'Bible College Scenic View 7',
  },
  {
    imageFallback: '/scenes_of_bible_college/image_8.png',
    alt: 'Bible College Scenic View 8',
  },
  {
    imageFallback: '/scenes_of_bible_college/image_9.png',
    alt: 'Bible College Scenic View 9',
  },
]

export const BibleCollegePageGlobal: GlobalConfig = {
  slug: 'bible-college-page',
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
              defaultValue: 'BIBLE COLLEGE',
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              label: 'Intro Description Paragraph',
              defaultValue:
                "Welcome to a place where the Word of God comes alive and transforms lives from within. Here, you will be grounded in truth, strengthened in faith, and equipped with spiritual wisdom to walk in God's purpose. Through dedicated teaching, revelation, and guidance, you will grow deeper in your relationship with Christ and discover the power of His Word working in your life. This is more than learning—it is a journey of becoming who God has called you to be.",
            },
            {
              name: 'heroBannerImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Bible College Hero Photo',
            },
            {
              name: 'heroBannerFallback',
              type: 'text',
              label: 'Fallback Banner Image Path',
              defaultValue: '/bible_college_hero.png',
            },
            {
              name: 'heroBannerAlt',
              type: 'text',
              label: 'Banner Alt Text',
              defaultValue: 'Bible College - Ankur Narula Ministries',
            },
            {
              name: 'heroSubtitle',
              type: 'text',
              label: 'Subtitle Under Hero Photo',
              defaultValue:
                'Equipping believers with the Word of God to walk in truth, power, and purpose.',
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
              defaultValue: 'SCENES OF BIBLE COLLEGE',
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
              defaultValue: 'What is Bible College?',
            },
            {
              name: 'whatIsCardDescription',
              type: 'textarea',
              label: 'Card 1 Narrative Description',
              defaultValue:
                "Bible College is a dedicated place of learning where individuals are trained in the Word of God, spiritual disciplines, and Christian leadership. It is designed to equip believers with a deeper understanding of Scripture, helping them grow in faith, wisdom, and maturity. Here, students are nurtured to live out God's calling and serve effectively in ministry and everyday life.",
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
                'The purpose of Bible College is to provide sound biblical teaching and practical training for spiritual growth and ministry.',
            },
            {
              name: 'visionParagraph',
              type: 'textarea',
              label: 'Vision Statement Paragraph',
              defaultValue:
                "Our vision is to raise strong, grounded believers who are rooted in God's Word, led by the Holy Spirit, and prepared to impact their communities. We aim to develop leaders who carry truth, integrity, and a heart for service.",
            },
          ],
        },
      ],
    },
  ],
}
