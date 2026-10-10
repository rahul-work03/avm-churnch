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
  { emoji: '🌙', title: 'Sunday Evening Service', time: '6:00 PM – 10:00 PM (IST)' },
  { emoji: '🔥', title: 'Thursday Service', time: '6:00 PM – 10:00 PM (IST)' },
]

const DEFAULT_DAILY_PROGRAMS = [
  { emoji: '🍞', title: 'Everyday Manna', time: '10:30 AM – 2:30 PM (IST)' },
  { emoji: '🙏', title: 'Prayer Mountain', time: '8:00 PM (Daily)' },
]

const DEFAULT_SOCIAL_PLATFORMS = [
  {
    name: 'Instagram',
    handle: '@ankurnarulaministries',
    url: 'https://www.instagram.com/ankurnarulaministries?stkn=MWd1d3dlZHJvdjF0aw==',
    badge: '6 Handles',
    handles: [
      {
        title: 'Ankur Narula Ministries',
        handle: '@ankurnarulaministries',
        url: 'https://www.instagram.com/ankurnarulaministries?stkn=MWd1d3dlZHJvdjF0aw==',
        description: 'Official ministry page & daily scriptures',
      },
      {
        title: 'Apostle Dr. Ankur Yoseph Narula',
        handle: '@apostledr.ankuryosephnarula',
        url: 'https://www.instagram.com/apostledr.ankuryosephnarula?stkn=MW9hbDhoaGx4ZGNnZA==',
        description: 'Official personal ministry profile',
      },
      {
        title: 'Pastor Sonia Yoseph Narula',
        handle: '@pastorsoniayosephnarula',
        url: 'https://www.instagram.com/pastorsoniayosephnarula?stkn=MTVneWFnbmdqbDc1Yw==',
        description: 'Official personal ministry profile',
      },
      {
        title: 'The Yoseph Family',
        handle: '@the_yoseph_family',
        url: 'https://www.instagram.com/the_yoseph_family?stkn=MThkNmNjZWh0Nmg2ZQ==',
        description: 'Family faith journey & ministry moments',
      },
      {
        title: 'Anugrah TV Official',
        handle: '@anugrahtv_official',
        url: 'https://www.instagram.com/anugrahtv_official?stkn=ZjFpMGpkNHZ4b2d5',
        description: 'Christian broadcast network & shows',
      },
      {
        title: 'ANM Worship Songs Official',
        handle: '@anm_worshipsongs_official',
        url: 'https://www.instagram.com/anm_worshipsongs_official?stkn=MTZybGo2aWFqNDMxbg==',
        description: 'Anointed worship music & praise songs',
      },
    ],
  },
  {
    name: 'Facebook',
    handle: 'Pastor Sonia Yoseph Narula',
    url: 'https://www.facebook.com/p/Pastor-Sonia-Yoseph-Narula-61571457190633/',
    badge: '4 Pages',
    handles: [
      {
        title: 'Apostle Dr. Ankur Yoseph Narula',
        handle: 'Ankur Narula',
        url: 'https://www.facebook.com/ankur.narula.5/',
        description: 'Official Facebook profile',
      },
      {
        title: 'Pastor Sonia Yoseph Narula',
        handle: 'Pastor Sonia Yoseph Narula',
        url: 'https://www.facebook.com/p/Pastor-Sonia-Yoseph-Narula-61571457190633/',
        description: 'Official Facebook page',
      },
      {
        title: 'The Yoseph Family',
        handle: 'The Yoseph Family',
        url: 'https://www.facebook.com/p/The-Yoseph-Family-61577143774557/',
        description: 'Official Facebook community',
      },
      {
        title: 'Anugrah TV',
        handle: 'Anugrah TV',
        url: 'https://www.facebook.com/p/Anugrah-TV-61577404071596/',
        description: 'Official Television Ministry Page',
      },
    ],
  },
  {
    name: 'YouTube',
    handle: '@ApostleDr.AnkurYosephNarula',
    url: 'https://www.youtube.com/@ApostleDr.AnkurYosephNarula',
    badge: '4 Channels',
    handles: [
      {
        title: 'Apostle Dr. Ankur Yoseph Narula',
        handle: '@ApostleDr.AnkurYosephNarula',
        url: 'https://www.youtube.com/@ApostleDr.AnkurYosephNarula',
        description: 'Main ministry sermons, messages & teachings',
      },
      {
        title: 'Pastor Sonia Yoseph Narula',
        handle: '@pastorsoniayosephnarula',
        url: 'https://www.youtube.com/@pastorsoniayosephnarula',
        description: 'Devotionals, worship & women fellowship',
      },
      {
        title: 'Live Ankur Narula Ministries',
        handle: '@liveankurnarulaministries',
        url: 'https://www.youtube.com/@liveankurnarulaministries',
        description: 'Live church prayer services & broadcasts',
      },
      {
        title: 'The Yoseph Family',
        handle: '@theyosephfamily',
        url: 'https://www.youtube.com/@theyosephfamily',
        description: 'Family life, faith journey & inspirational moments',
      },
    ],
  },
  {
    name: 'X (Twitter)',
    handle: '@apostleankur',
    url: 'https://x.com/apostleankur',
    badge: '',
    handles: [],
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
          socialPlatforms:
            doc.socialPlatforms && doc.socialPlatforms.length > 0
              ? doc.socialPlatforms.map((p: any) => {
                  const defaultMatch = DEFAULT_SOCIAL_PLATFORMS.find(
                    (d) => d.name?.toLowerCase() === (p.name || '').toLowerCase(),
                  )
                  return {
                    ...p,
                    badge: p.badge || defaultMatch?.badge || '',
                    handles:
                      p.handles && p.handles.length > 0
                        ? p.handles
                        : defaultMatch?.handles || [],
                  }
                })
              : DEFAULT_SOCIAL_PLATFORMS,
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
              name: 'mogSingleImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Featured Framed Photo (Upload to replace)',
            },
            {
              name: 'mogSingleImageFallback',
              type: 'text',
              label: 'Fallback Featured Photo Path',
              defaultValue: '/man_of_god/image_1.png',
            },
            {
              name: 'mogSingleImageAlt',
              type: 'text',
              label: 'Photo Alt Text',
              defaultValue: 'Apostle Dr. Ankur Yoseph Narula - Man of God',
            },
            {
              name: 'mogSlides',
              type: 'array',
              label: 'Coverflow Carousel Slides (Legacy fallback)',
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
                  label: 'Platform Name (e.g. YouTube, Instagram, Facebook, X)',
                  required: true,
                },
                {
                  name: 'badge',
                  type: 'text',
                  label: 'Optional Badge (e.g. "3 Channels", "Official Handles")',
                },
                {
                  name: 'handle',
                  type: 'text',
                  label: 'Primary Handle / Channel Tag (e.g. @ankurnarulaministries)',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Platform URL (Primary Link)',
                  required: true,
                },
                {
                  name: 'handles',
                  type: 'array',
                  label: 'Multiple Handles / Channels (Optional Slider Accounts)',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Account / Channel Title (e.g. "Official Church Channel")',
                      required: true,
                    },
                    {
                      name: 'handle',
                      type: 'text',
                      label: 'Handle Tag (e.g. @ankurnarulaministries)',
                      required: true,
                    },
                    {
                      name: 'url',
                      type: 'text',
                      label: 'Account URL',
                      required: true,
                    },
                    {
                      name: 'description',
                      type: 'text',
                      label: 'Short Description or Purpose',
                    },
                  ],
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
