import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_SCENES_ROW1 = [
  {
    imageFallback: '/scenes_of_multimedia/image_1.png',
    alt: 'Multimedia College Studio & Technology 1',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_2.png',
    alt: 'Multimedia College Production Session 2',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_3.png',
    alt: 'Multimedia College Creative Learning 3',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_4.png',
    alt: 'Multimedia College Media Lab 4',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_5.png',
    alt: 'Multimedia College Broadcasting 5',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_6.png',
    alt: 'Multimedia College Practical Training 6',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_7.png',
    alt: 'Multimedia College Digital Arts 7',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_8.png',
    alt: 'Multimedia College Creative Team 8',
  },
]

const DEFAULT_SCENES_ROW2 = [
  {
    imageFallback: '/scenes_of_multimedia/image_9.png',
    alt: 'Multimedia College Editing & Design 9',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_10.png',
    alt: 'Multimedia College Camera & Audio Setup 10',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_11.png',
    alt: 'Multimedia College Live Broadcast Suite 11',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_12.png',
    alt: 'Multimedia College Students Workshop 12',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_13.png',
    alt: 'Multimedia College Visual Storytelling 13',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_14.png',
    alt: 'Multimedia College Media Equipment 14',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_15.png',
    alt: 'Multimedia College Technical Excellence 15',
  },
  {
    imageFallback: '/scenes_of_multimedia/image_16.png',
    alt: 'Multimedia College Graduation & Impact 16',
  },
]

export const MultimediaCollegePageGlobal: GlobalConfig = {
  slug: 'multimedia-college-page',
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
              defaultValue: 'MULTIMEDIA COLLEGE',
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              label: 'Intro Description Paragraph',
              defaultValue:
                'Welcome to Multimedia College, where creativity, technology, and faith unite to empower the next generation of Christian media creators. Through hands-on training, professional tools, and biblical values, students are equipped to lead and influence the digital world.',
            },
            {
              name: 'heroBannerImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Multimedia College Hero Photo',
            },
            {
              name: 'heroBannerFallback',
              type: 'text',
              label: 'Fallback Banner Image Path',
              defaultValue: '/multimedia_college_hero.png',
            },
            {
              name: 'heroBannerAlt',
              type: 'text',
              label: 'Banner Alt Text',
              defaultValue: 'Multimedia College - Ankur Narula Ministries',
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
                'Empowering creative media minds to communicate truth and impact the digital generation.',
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
              defaultValue: 'SCENES OF MULTIMEDIA COLLEGE',
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
              defaultValue: 'WHAT IS MULTIMEDIA COLLEGE?',
            },
            {
              name: 'whatIsCardDescription',
              type: 'textarea',
              label: 'Card 1 Narrative Description',
              defaultValue:
                'Multimedia College is a place where creativity, technology and practical skills come together to equip students for opportunities in the growing world of multimedia and digital communication.',
            },
            {
              name: 'visionCardTitle',
              type: 'text',
              label: 'Card 2 Title',
              defaultValue: 'PURPOSE & VISION',
            },
            {
              name: 'purposeParagraph',
              type: 'textarea',
              label: 'Purpose Statement Paragraph',
              defaultValue:
                'The college aims to help students turn their creativity and talents into professional skills and prepare them for successful careers and opportunities in the digital world.',
            },
            {
              name: 'visionParagraph',
              type: 'textarea',
              label: 'Vision Statement Paragraph',
              defaultValue:
                'The vision of Multimedia College is to raise a generation of creative and skilled media professionals who can use technology, creativity and communication to influence, inspire and make a positive impact on society',
            },
          ],
        },
      ],
    },
  ],
}
