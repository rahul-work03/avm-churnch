import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_SCENES_ROW1 = [
  {
    imageFallback: '/scenes_of_sophia_institute/image_1.png',
    alt: 'Sophia Institute Theological Lecture Hall & Classroom',
  },
  {
    imageFallback: '/scenes_of_sophia_institute/image_2.png',
    alt: 'Study & Scripture Research Center',
  },
  {
    imageFallback: '/scenes_of_sophia_institute/image_3.png',
    alt: 'Scriptural Library & Resource Archives',
  },
]

const DEFAULT_SCENES_ROW2 = [
  {
    imageFallback: '/scenes_of_sophia_institute/image_4.png',
    alt: 'Digital Study & Computer Lab Stations',
  },
  {
    imageFallback: '/scenes_of_sophia_institute/image_5.png',
    alt: 'Student Fellowship & Discussion Space',
  },
  {
    imageFallback: '/scenes_of_sophia_institute/image_6.png',
    alt: 'Institute Campus & Meditation Sanctuary',
  },
]

export const SophiaInstitutePageGlobal: GlobalConfig = {
  slug: 'sophia-institute-page',
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
              defaultValue: 'Sophia Institute',
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              label: 'Intro Description Paragraph',
              defaultValue:
                'Sophia College Institute is a center of higher education committed to academic excellence, leadership development, and professional growth. We equip students with knowledge, practical skills, and strong character to lead with wisdom, live with integrity, serve faithfully, and pursue their calling with purpose.',
            },
            {
              name: 'heroBannerImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Sophia Institute Hero Photo',
            },
            {
              name: 'heroBannerFallback',
              type: 'text',
              label: 'Fallback Banner Image Path',
              defaultValue: '/sophia_institute_hero.png',
            },
            {
              name: 'heroBannerAlt',
              type: 'text',
              label: 'Banner Alt Text',
              defaultValue: 'Sophia Institute - Learning and Theological Wisdom',
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
              name: 'heroSubtitle',
              type: 'text',
              label: 'Subtitle Under Hero Photo',
              defaultValue: "Nurturing faith, wisdom, and purpose through the truth of God's Word.",
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
              defaultValue: 'SCENES OF SOPHIA INSTITUTE',
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
              defaultValue: 'What is Sophia Institute?',
            },
            {
              name: 'whatIsCardDescription',
              type: 'textarea',
              label: 'Card 1 Narrative Description',
              defaultValue:
                "Sophia College Institute is a place of higher education, leadership development and professional preparation, where students are equipped to pursue academic excellence and develop the skills and character needed for greater responsibilities",
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
                'The purpose of Sophia College Institute is to equip individuals to use their education, knowledge and positions with integrity, wisdom and purpose.',
            },
            {
              name: 'visionParagraph',
              type: 'textarea',
              label: 'Vision Statement Paragraph',
              defaultValue:
                "The vision is to develop a generation that will carry strong values, and use their knowledge, positions and influence to bring positive transformation to society.",
            },
          ],
        },
      ],
    },
  ],
}
