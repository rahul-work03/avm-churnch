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
  {
    imageFallback: '/scenes_of_sunday_school/image_9.png',
    alt: 'Sunday School Creative Arts and Activity 9',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_10.png',
    alt: 'Sunday School Joyful Gathering 10',
  },
]

const DEFAULT_SCENES_ROW2 = [
  {
    imageFallback: '/scenes_of_sunday_school/image_11.png',
    alt: 'Sunday School Group Celebration 11',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_12.png',
    alt: 'Sunday School Worship Songs 12',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_13.png',
    alt: 'Sunday School Kids Bible Quiz 13',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_14.png',
    alt: 'Sunday School Discipleship Class 14',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_15.png',
    alt: 'Sunday School Biblical Story Time 15',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_16.png',
    alt: 'Sunday School Youth Leaders Session 16',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_17.png',
    alt: 'Sunday School Faith Foundations 17',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_18.png',
    alt: 'Sunday School Anointed Teaching 18',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_19.png',
    alt: 'Sunday School Joy in the Lord 19',
  },
  {
    imageFallback: '/scenes_of_sunday_school/image_20.png',
    alt: 'Sunday School Community Outreach 20',
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
          scenesRow1: doc.scenesRow1 && doc.scenesRow1.length >= 10 ? doc.scenesRow1 : DEFAULT_SCENES_ROW1,
          scenesRow2: doc.scenesRow2 && doc.scenesRow2.length >= 10 ? doc.scenesRow2 : DEFAULT_SCENES_ROW2,
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
                'Welcome to Sunday School, a place where the Word of God is taught with simplicity, love, and truth, helping children experience the presence of God in a personal way. Here, children grow together in faith as the Scriptures come alive through teaching, stories, and fellowship.',
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
              name: 'heroVideo',
              type: 'upload',
              relationTo: 'media',
              label: 'Hero Video (Optional - overrides image if provided)',
            },
            {
              name: 'heroVideoFallback',
              type: 'text',
              label: 'Hero Video Fallback URL (Optional MP4/WebM)',
            },
            {
              name: 'bannerVideoUrl',
              type: 'text',
              label: 'External Banner Video Stream URL (Optional)',
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
              defaultValue: 'WHAT IS ANKUR NARULA MINISTRIES SUNDAY SCHOOL',
            },
            {
              name: 'whatIsCardDescription',
              type: 'textarea',
              label: 'Card 1 Narrative Description',
              defaultValue:
                'Ankur Narula Ministries Sunday School, led by Sister Sophia and Brother Yirmeyah, is a place where children are taught to grow in their relationship with God and follow Jesus Christ.',
            },
            {
              name: 'visionCardTitle',
              type: 'text',
              label: 'Card 2 Title',
              defaultValue: 'PURPOSE AND VISION',
            },
            {
              name: 'purposeParagraph',
              type: 'textarea',
              label: 'Purpose Statement Paragraph',
              defaultValue:
                'The purpose of the Sunday School is to build a strong foundation of faith in the lives of children through the teaching of God’s Word and to help them learn the values of faith, obedience, love and godly character.',
            },
            {
              name: 'visionParagraph',
              type: 'textarea',
              label: 'Vision Statement Paragraph',
              defaultValue:
                'The vision of Ankur Narula Ministries Sunday School is to raise a generation of children who know Christ, love His Word, walk in His ways, live for His Glory, and shine His light wherever they go.',
            },
          ],
        },
      ],
    },
  ],
}
