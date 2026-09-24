import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_MOG_SLIDES = [
  {
    imageFallback: '/man_of_god/image_1.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula Ministering at Pulpit',
  },
  {
    imageFallback: '/man_of_god/image_2.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula at Main Stage',
  },
  {
    imageFallback: '/man_of_god/image_3.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula',
  },
  {
    imageFallback: '/man_of_god/image_4.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula in Ministry Attire',
  },
  {
    imageFallback: '/man_of_god/image_5.png',
    alt: 'Prophetic Impartation & Deliverance Ministry',
  },
]

const DEFAULT_ACTION_CARDS = [
  {
    title: 'Prayer Request',
    imageFallback: '/prayer_request_homepage.png',
    href: '/prayer-request',
    buttonVariant: 'solid',
  },
  {
    title: 'Offerings',
    imageFallback: '/offerings_homepage.png',
    href: '/give',
    buttonVariant: 'outline',
  },
  {
    title: 'Zoom Lay Hand',
    imageFallback: '/zoom_lay_hand_homepage.png',
    href: '/zoom-lay-hand',
    buttonVariant: 'outline',
  },
]

const DEFAULT_WEEKLY_SERVICES = [
  { emoji: '🕊️', title: 'Sunday Morning Service', time: '10:30 AM – 2:30 PM (IST)' },
  { emoji: '🌙', title: 'Sunday Evening Service', time: '10:30 AM – 2:30 PM (IST)' },
  { emoji: '🔥', title: 'Thursday Service', time: '6:00 PM – 10:00 PM (IST)' },
]

const DEFAULT_DAILY_PROGRAMS = [
  { emoji: '🍞', title: 'Everyday Manna', time: '10:30 AM – 2:30 PM (IST)' },
  { emoji: '🙏', title: 'Prayer Mountain', time: '8:00 PM (Daily)' },
]

const DEFAULT_SOCIAL_PLATFORMS = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ankurnarulaministries',
    buttonImageFallback: '/figma-assets/social_btn_instagram.png',
    iconFallback: '/figma-assets/instagram_logo.png',
    themeGradient: 'linear-gradient(135deg, #fce1ee 0%, #fdf2f7 50%, #ffffff 100%)',
    borderColor: 'border-pink-100',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/ankurnarulaministries/',
    buttonImageFallback: '/figma-assets/social_btn_facebook.png',
    iconFallback: '/figma-assets/facebook_logo.png',
    themeGradient: 'linear-gradient(135deg, #dbe8fa 0%, #f0f5fd 50%, #ffffff 100%)',
    borderColor: 'border-blue-100',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@ankurnarulaministries',
    buttonImageFallback: '/figma-assets/social_btn_youtube.png',
    iconFallback: '/figma-assets/youtube_logo.png',
    themeGradient: 'linear-gradient(135deg, #fce0de 0%, #fdf1f0 50%, #ffffff 100%)',
    borderColor: 'border-red-100',
  },
  {
    name: 'Twitter / X',
    url: 'https://x.com/apostleankur',
    buttonImageFallback: '/figma-assets/social_btn_twitter.png',
    iconFallback: '/figma-assets/x_twitter_logo.png',
    themeGradient: 'linear-gradient(135deg, #9ca3af 0%, #cbd5e1 45%, #f1f5f9 85%, #ffffff 100%)',
    borderColor: 'border-slate-200',
  },
]

export const Homepage: GlobalConfig = {
  slug: 'homepage',
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
          mogSlides: doc.mogSlides && doc.mogSlides.length > 0 ? doc.mogSlides : DEFAULT_MOG_SLIDES,
          actionCards: doc.actionCards && doc.actionCards.length > 0 ? doc.actionCards : DEFAULT_ACTION_CARDS,
          weeklyServices: doc.weeklyServices && doc.weeklyServices.length > 0 ? doc.weeklyServices : DEFAULT_WEEKLY_SERVICES,
          dailyPrograms: doc.dailyPrograms && doc.dailyPrograms.length > 0 ? doc.dailyPrograms : DEFAULT_DAILY_PROGRAMS,
          socialPlatforms: doc.socialPlatforms && doc.socialPlatforms.length > 0 ? doc.socialPlatforms : DEFAULT_SOCIAL_PLATFORMS,
        }
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'heroHeadline1',
              type: 'text',
              label: 'Main Headline Top Line',
              defaultValue: 'Welcome to Ankur Narula Ministries',
            },
            {
              name: 'heroHeadline2',
              type: 'text',
              label: 'Headline Second Line',
              defaultValue: 'The Church Of Signs and Wonders',
            },
            {
              name: 'heroMobileHeadline2',
              type: 'text',
              label: 'Mobile Headline (Legacy / Hidden)',
              admin: {
                hidden: true,
              },
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              label: 'Hero Subtitle Description',
              defaultValue:
                'Experience the power of Jesus Christ through signs, wonders, and faith. We believe in the living Word of God and in His mighty works among those who believe.',
            },
            {
              name: 'heroVideoDesktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Hero Video (Desktop .mp4 - Upload to replace)',
            },
            {
              name: 'heroVideoDesktopFallback',
              type: 'text',
              label: 'Fallback Hero Desktop Video Path',
              defaultValue: '/homepage_hero.mp4',
            },
            {
              name: 'heroVideoMobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Hero Video (Mobile .mp4 - Upload to replace)',
            },
            {
              name: 'heroVideoMobileFallback',
              type: 'text',
              label: 'Fallback Hero Mobile Video Path',
              defaultValue: '/homepage_hero_mobile.mp4',
            },
            {
              name: 'heroBannerImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Hero Poster / Fallback Image (Upload to replace)',
            },
            {
              name: 'heroBannerFallback',
              type: 'text',
              label: 'Fallback Banner Image Path',
              defaultValue: '/homepage_banner.png',
            },
            {
              name: 'heroBannerAlt',
              type: 'text',
              label: 'Banner Alt Text',
              defaultValue: 'Ankur Narula Ministries',
            },
          ],
        },
        {
          label: 'Man of God Section',
          fields: [
            {
              name: 'mogHeaderTitle',
              type: 'text',
              label: 'Section Top Header Title',
              defaultValue: 'The church of signs and wonders',
            },
            {
              name: 'mogBadgeTitle',
              type: 'text',
              label: 'Emblem Badge Title',
              defaultValue: 'Man Of God',
            },
            {
              name: 'mogSlides',
              type: 'array',
              label: 'Coverflow Carousel Slides',
              defaultValue: DEFAULT_MOG_SLIDES,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Slide Image (Upload to replace fallback)',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Image Path',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Slide Title',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  label: 'Slide Subtitle',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                },
              ],
            },
            {
              name: 'leaderName',
              type: 'text',
              label: 'Leader Name',
              defaultValue: 'Apostle Dr. Ankur Yoseph Narula',
            },
            {
              name: 'leaderRole',
              type: 'text',
              label: 'Leader Role',
              defaultValue: 'Founder & Senior Pastor',
            },
            {
              name: 'leaderBio',
              type: 'textarea',
              label: 'Leader Short Bio',
              defaultValue:
                'Apostle Dr. Ankur Yoseph Narula is the Founder and Overseer of The Church of Signs and Wonders Ankur Narula Ministries, which is one of the fastest-growing churches in India.',
            },
            {
              name: 'knowMoreLink',
              type: 'text',
              label: 'Know More Button URL',
              defaultValue: '/about',
            },
            {
              name: 'knowMoreLabel',
              type: 'text',
              label: 'Know More Button Label',
              defaultValue: 'Know More',
            },
          ],
        },
        {
          label: 'Action Cards Section',
          fields: [
            {
              name: 'actionCards',
              type: 'array',
              label: 'Action Cards (Prayer, Offerings, Zoom etc.)',
              defaultValue: DEFAULT_ACTION_CARDS,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Card Title / Button Label',
                  required: true,
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Card Image (Upload to replace fallback)',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Image Path',
                },
                {
                  name: 'href',
                  type: 'text',
                  label: 'Link URL',
                  required: true,
                },
                {
                  name: 'buttonVariant',
                  type: 'select',
                  defaultValue: 'solid',
                  options: [
                    { label: 'Solid Navy (bg-[#112e49])', value: 'solid' },
                    { label: 'Outline Blue (border-[#003471])', value: 'outline' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Schedule Section',
          fields: [
            {
              name: 'scheduleHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'Live Prayer & Worship Schedule',
            },
            {
              name: 'scheduleVideoBannerUrl',
              type: 'text',
              label: 'Stage Video Banner URL / Path',
              defaultValue: '/homepage_schedule.mp4',
            },
            {
              name: 'weeklyServices',
              type: 'array',
              label: 'Weekly Services List',
              defaultValue: DEFAULT_WEEKLY_SERVICES,
              fields: [
                {
                  name: 'emoji',
                  type: 'text',
                  label: 'Icon Emoji',
                  defaultValue: '🕊️',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Service Name',
                  required: true,
                },
                {
                  name: 'time',
                  type: 'text',
                  label: 'Time and Details',
                  required: true,
                },
              ],
            },
            {
              name: 'dailyPrograms',
              type: 'array',
              label: 'Daily Prayer Programs List',
              defaultValue: DEFAULT_DAILY_PROGRAMS,
              fields: [
                {
                  name: 'emoji',
                  type: 'text',
                  label: 'Icon Emoji',
                  defaultValue: '🍞',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Program Name',
                  required: true,
                },
                {
                  name: 'time',
                  type: 'text',
                  label: 'Time and Details',
                  required: true,
                },
              ],
            },
            {
              name: 'joinLiveLink',
              type: 'text',
              label: 'Join Live Link URL',
              defaultValue: 'https://www.youtube.com/@ankurnarulaministries',
            },
            {
              name: 'joinLiveLabel',
              type: 'text',
              label: 'Join Live Button Label',
              defaultValue: 'Join Live',
            },
          ],
        },
        {
          label: 'Social Media Section',
          fields: [
            {
              name: 'socialHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'Our Social Media Platforms',
            },
            {
              name: 'socialSubtitle',
              type: 'text',
              label: 'Section Subtitle',
              defaultValue: 'Be a Part of Our Family',
            },
            {
              name: 'socialPlatforms',
              type: 'array',
              label: 'Social Media Platforms',
              defaultValue: DEFAULT_SOCIAL_PLATFORMS,
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Platform Name',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Platform URL',
                  required: true,
                },
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Platform Icon Image (Upload to replace fallback)',
                  admin: {
                    hidden: true,
                  },
                },
                {
                  name: 'iconFallback',
                  type: 'text',
                  label: 'Fallback Icon Path',
                  admin: {
                    hidden: true,
                  },
                },
                {
                  name: 'themeGradient',
                  type: 'text',
                  label: 'CSS Background Gradient',
                  admin: {
                    hidden: true,
                  },
                },
                {
                  name: 'borderColor',
                  type: 'text',
                  label: 'Tailwind Border Color Class',
                  defaultValue: 'border-blue-100',
                  admin: {
                    hidden: true,
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Sermons Section',
          fields: [
            {
              name: 'sermonsHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'Watch Our Latest Sermons',
            },
            {
              name: 'sermonsFeaturedVideoImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Featured Worship Banner Image (Upload to replace)',
            },
            {
              name: 'sermonsFeaturedVideoFallback',
              type: 'text',
              label: 'Featured Banner Image Fallback',
              defaultValue: '/figma-assets/7943a96b8cbd9a1d629265528efec1a38a3d4265.png',
            },
            {
              name: 'sermonsFeaturedVideoAlt',
              type: 'text',
              label: 'Featured Banner Alt Text',
              defaultValue: 'Thursday Full Night Prayer Service',
            },
            {
              name: 'sermonsFeaturedVideoUrl',
              type: 'text',
              label: 'Featured Main Banner YouTube / Embed URL / iframe',
              defaultValue: 'https://www.youtube.com/embed/CPIhQW-8bgo?si=cZrZoi8mfbTqkTYg',
            },
          ],
        },
      ],
    },
  ],
}
