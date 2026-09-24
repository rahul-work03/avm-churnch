import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_SCENES_ROW1 = [
  {
    imageFallback: '/scenes_of_sunday_school/image_1.png',
    alt: 'Sunday School Children Bible Activity 1',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_2.png',
    alt: 'Sunday School Bible Learning and Worship 2',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_3.png',
    alt: 'Sunday School Fellowship and Prayer 3',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_4.png',
    alt: 'Sunday School Young Believers Classroom 4',
  },
]

const DEFAULT_SCENES_ROW2 = [
  {
    imageFallback: '/scenes_of_sunday_school/image_5.png',
    alt: 'Sunday School Scripture Recitation 5',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_6.png',
    alt: 'Sunday School Branch Students 6',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_7.png',
    alt: 'Sunday School Youth Mentorship 7',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_8.png',
    alt: 'Sunday School Praise and Fellowship 8',
  },
]

export const SundaySchoolPageGlobal: GlobalConfig = {
  slug: 'sunday-school-page',
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
              defaultValue: 'SUNDAY SCHOOL MINISTRIES',
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              label: 'Intro Description Paragraph',
              defaultValue:
                'Welcome to Sunday School, a place where the Word of God is taught with simplicity, love, and truth, helping hearts of all ages experience the presence of God in a personal way. Here, children, youth, and believers grow together in faith as the Scriptures come alive through teaching, stories, and fellowship.',
            },
            {
              name: 'heroBannerImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Sunday School Hero Photo',
            },
            {
              name: 'heroBannerFallback',
              type: 'text',
              label: 'Fallback Banner Image Path',
              defaultValue: '/sunday_school_hero.png',
            },
            {
              name: 'heroBannerAlt',
              type: 'text',
              label: 'Banner Alt Text',
              defaultValue: 'Sunday School Ministries - Ankur Narula Ministries',
            },
            {
              name: 'heroVideoUrl',
              type: 'text',
              label: 'Hero Video URL or Path (Optional)',
              defaultValue: '',
            },
            {
              name: 'heroSubtitle',
              type: 'text',
              label: 'Subtitle Under Hero Media',
              defaultValue:
                'Empowering the next generation to walk in faith, truth, and the power of God.',
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
              defaultValue: 'SCENES OF SUNDAY SCHOOL MINISTRIES',
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
              defaultValue: 'What is Sunday School?',
            },
            {
              name: 'whatIsCardDescription',
              type: 'textarea',
              label: 'Card 1 Narrative Description',
              defaultValue:
                'Sunday School is a dedicated time of learning and spiritual growth where children, youth, and adults are taught the Word of God in a simple and meaningful way. It is designed to help believers understand Bible stories, Christian values, and the love of Jesus Christ in a way that is easy to apply in daily life. Through teaching, activities, and fellowship, Sunday School builds a strong foundation of faith from an early age.',
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
                'The purpose of Sunday School is to nurture spiritual growth through Bible-based teaching, helping individuals develop a personal relationship with God. It focuses on building strong moral values, prayer life, and understanding of Scripture in a practical and engaging way.',
            },
            {
              name: 'visionParagraph',
              type: 'textarea',
              label: 'Vision Statement Paragraph',
              defaultValue:
                'Our vision is to raise a generation rooted in God’s Word, filled with the knowledge of Jesus Christ, and guided by the Holy Spirit. We aim to prepare children and believers of all ages to live out their faith boldly, grow in godly character, and become light in their families, schools, and communities.',
            },
          ],
        },
      ],
    },
  ],
}
