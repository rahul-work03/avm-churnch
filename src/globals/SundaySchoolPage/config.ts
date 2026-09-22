import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_SCENES_ROW1 = [
  {
    imageFallback: '/figma-assets/4d4761196131ce8961488f09c189e5a63809c918.png',
    alt: 'Sunday School Children Reciting Scripture',
  },
  {
    imageFallback: '/figma-assets/64e93a20b8fe749de6236fe02d70cbc7c38054f7.png',
    alt: 'Sunday School Hall and Young Learners',
  },
  {
    imageFallback: '/figma-assets/fc5850061a1b97083923002e17103dce8dbe7575.png',
    alt: 'Greater Branch Sydney Sunday School Activity',
  },
  {
    imageFallback: '/figma-assets/53cc1f23c0f197687452e0f24311e5e825b9c472.png',
    alt: 'Kapurthala & Kharagpur Sunday School Group',
  },
  {
    imageFallback: '/figma-assets/b806995f5a4cbef8775c01600f58b10ee5f1bab1.png',
    alt: 'Sunday School Bible Learning & Singing',
  },
]

const DEFAULT_SCENES_ROW2 = [
  {
    imageFallback: '/figma-assets/46d77c804e9de83f316fa73a692abe284168ec06.png',
    alt: 'Fatehabad & Gaya Bihar Sunday School Branch',
  },
  {
    imageFallback: '/figma-assets/eaf236190a0ded0162d655e3e94bd1278f7f66b3.png',
    alt: 'Chandigarh & Chapra Bihar Sunday School Students',
  },
  {
    imageFallback: '/figma-assets/53b701f138eda24b90a19105652d30788c7a52f5.png',
    alt: 'Birmingham Sunday School Class',
  },
  {
    imageFallback: '/figma-assets/7ac5e154d17617ec8deccc6a8263eee659bf249a.png',
    alt: 'Mandi Dabwali & Rayya Sunday School Children',
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
