import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_LEADER_IMAGES = [
  {
    imageFallback: '/figma-assets/our_leaders_image_1.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula',
    title: 'Apostle Dr. Ankur & Pastor Sonia Narula',
    subtitle: 'Spiritual Overseers & Senior Pastors',
  },
  {
    imageFallback: '/figma-assets/our_leaders_image_2.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula at Pulpit',
    title: 'Word of Faith & Grace',
    subtitle: 'Sunday Live Ministry',
  },
  {
    imageFallback: '/figma-assets/our_leaders_image_3.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula - Ministry Attire',
    title: 'Apostolic Leadership',
    subtitle: 'The Church of Signs and Wonders',
  },
  {
    imageFallback: '/figma-assets/man_of_god_image_1.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula Ministering at Main Stage',
    title: 'Apostle Dr. Ankur Yoseph Narula',
    subtitle: 'Anointed Stage Ministry',
  },
  {
    imageFallback: '/figma-assets/b833aca853efbb1993ea3ceec33bdb2370c72d55.png',
    alt: 'Pastor Sonia Yoseph Narula Preaching to Multitudes',
    title: 'Pastor Sonia Yoseph Narula',
    subtitle: 'Thursday Prophetic Service',
  },
  {
    imageFallback: '/figma-assets/0ad2c07b6a72c78c1e66fec5b816a26e3f587185.png',
    alt: 'Pastor Sonia Yoseph Narula Ministering at Podium',
    title: 'Healing & Deliverance Ministry',
    subtitle: 'Revival Word Proclamation',
  },
]

const DEFAULT_STATS = [
  { value: '500,000+', label: 'Weekly Attendees' },
  { value: '200+', label: 'Branches Worldwide' },
  { value: '2008', label: 'Year Established' },
]

const DEFAULT_CRUSADES = [
  {
    imageFallback: '/crusades/image_1.jpeg',
    alt: 'Massive Miracle Crusade - Sea of Believers Gathering',
    title: 'Global Miracle Crusade',
    location: 'Main Stadium Grounds',
  },
  {
    imageFallback: '/crusades/image_2.jpeg',
    alt: 'Atmosphere of Fire and Deliverance Night',
    title: 'Night of Deliverance',
    location: 'Mega Arena Assembly',
  },
  {
    imageFallback: '/crusades/image_3.jpeg',
    alt: 'Supernatural Gathering & Holy Spirit Outpouring',
    title: 'Revival Fire Outreach',
    location: 'Grand Stadium',
  },
  {
    imageFallback: '/crusades/image_4.jpeg',
    alt: 'Multitude of Souls Worshipping in Power',
    title: 'Signs & Wonders Convention',
    location: 'National Sports Complex',
  },
  {
    imageFallback: '/crusades/image_5.jpeg',
    alt: 'Historic Ankur Narula Ministries Crusade',
    title: 'Historic Revival Gathering',
    location: 'International Stadium',
  },
  {
    imageFallback: '/crusades/image_6.jpeg',
    alt: 'Praise and Worship Unbroken Multitude',
    title: 'Atmosphere of Praise',
    location: 'Revival Pavilion',
  },
  {
    imageFallback: '/crusades/image_7.jpeg',
    alt: 'Apostle Dr. Ankur Yoseph Narula Preaching to Hundred Thousands',
    title: 'Gospel Proclamation',
    location: 'Global Outreach Field',
  },
  {
    imageFallback: '/crusades/image_8.jpeg',
    alt: 'Unprecedented Healing & Miracles Encounter',
    title: 'Supernatural Healing Day',
    location: 'Convention Center Arena',
  },
  {
    imageFallback: '/crusades/image_9.jpeg',
    alt: 'Overflowing Joy in the Holy Presence',
    title: 'Festival of Life',
    location: 'City Arena Grounds',
  },
  {
    imageFallback: '/crusades/image_10.jpeg',
    alt: 'Holy Spirit Fire Crusade',
    title: 'Holy Spirit Fire Gathering',
    location: 'National Assembly Arena',
  },
  {
    imageFallback: '/crusades/image_11.jpeg',
    alt: 'Great Harvest Crusade',
    title: 'Great Harvest Crusade',
    location: 'Victory Grounds',
  },
]

const DEFAULT_ROW1_PRESENCE = [
  {
    imageFallback: '/figma-assets/a12f7a8578aca49746f879f50d3567e9cc929dad.png',
    alt: 'International Delegation and Diplomatic Meeting',
    title: 'Global Leadership Exchange',
    country: 'United Kingdom',
  },
  {
    imageFallback: '/figma-assets/c83b945c00cc8d9e53f94a7c5903ad702134ed2e.png',
    alt: 'Apostle Dr. Ankur Narula with World Leaders',
    title: 'Honorary Recognition Assembly',
    country: 'United States',
  },
  {
    imageFallback: '/figma-assets/7943a96b8cbd9a1d629265528efec1a38a3d4265.png',
    alt: 'Overseas Mission Outreach Fellowship',
    title: 'Apostolic Mission Outreach',
    country: 'Canada',
  },
  {
    imageFallback: '/figma-assets/65d53a88c2c188c19f670266ce9b27e83745bb6b.png',
    alt: 'Global Doctorate and Faith Citation',
    title: 'International Theological Honors',
    country: 'Europe',
  },
  {
    imageFallback: '/figma-assets/57480aa2a936a6736575d4686f5155c1bef93b95.png',
    alt: 'Revival Summit and Global Delegation',
    title: 'Worldwide Revival Summit',
    country: 'Middle East & Asia',
  },
]

const DEFAULT_ROW2_PRESENCE = [
  {
    imageFallback: '/figma-assets/e3e25b6c010b5aa006f29088b8dae7f2466bf8f3.png',
    alt: 'Worldwide Gospel Crusade and Mass Gathering',
    title: 'Global Revival Crusade',
    country: 'International Arena',
  },
  {
    imageFallback: '/figma-assets/1293a243cd5f4ddaa9c70378ddffe38c61e7ffb6.png',
    alt: 'International Believers and Ministers Assembly',
    title: 'Global Ministers Fellowship',
    country: 'Australia & Pacific',
  },
  {
    imageFallback: '/figma-assets/f1c7c30e211dc39094fc986db7a7e7d876202f58.png',
    alt: 'Atmosphere of Fire International Convention',
    title: 'Supernatural Fire Conference',
    country: 'Africa Mission',
  },
  {
    imageFallback: '/figma-assets/457a3354faefcf652c2110710588f40233c79c64.png',
    alt: 'Signs and Wonders International Gathering',
    title: 'Signs & Wonders Gathering',
    country: 'Global Network',
  },
  {
    imageFallback: '/figma-assets/ff7b25464623ab07ec009c6cc6d0508eb168c5a7.png',
    alt: 'Overseas Gospel Miracle Gathering',
    title: 'International Miracle Night',
    country: 'Worldwide',
  },
]

export const AboutPageGlobal: GlobalConfig = {
  slug: 'about-page',
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
          leaderImages: doc.leaderImages && doc.leaderImages.length > 0 ? doc.leaderImages : DEFAULT_LEADER_IMAGES,
          stats: doc.stats && doc.stats.length > 0 ? doc.stats : DEFAULT_STATS,
          crusadeImages: doc.crusadeImages && doc.crusadeImages.length > 0 ? doc.crusadeImages : DEFAULT_CRUSADES,
          presenceRow1: doc.presenceRow1 && doc.presenceRow1.length > 0 ? doc.presenceRow1 : DEFAULT_ROW1_PRESENCE,
          presenceRow2: doc.presenceRow2 && doc.presenceRow2.length > 0 ? doc.presenceRow2 : DEFAULT_ROW2_PRESENCE,
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
              defaultValue: 'About us',
            },
            {
              name: 'heroDescription',
              type: 'textarea',
              label: 'Intro Description Paragraph',
              defaultValue:
                'The Church of Signs and Wonders (Ankur Narula Ministries) is a global revival ministry dedicated to spreading the Gospel of Jesus Christ through the power of the Holy Spirit. Founded in 2004 in Punjab, India, the ministry has grown from three members into a worldwide movement bringing healing, deliverance, and transformed lives.',
            },
            {
              name: 'heroBannerImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Featured Congregation Banner Photo',
            },
            {
              name: 'heroBannerFallback',
              type: 'text',
              label: 'Fallback Banner Image Path',
              defaultValue: '/figma-assets/457a3354faefcf652c2110710588f40233c79c64.png',
            },
            {
              name: 'heroBannerAlt',
              type: 'text',
              label: 'Banner Alt Text',
              defaultValue: 'Ankur Narula Ministries Ministry Congregation',
            },
          ],
        },
        {
          label: 'Vision & Mission',
          fields: [
            {
              name: 'vmIdentityBadge',
              type: 'text',
              label: 'Top Badge Label',
              defaultValue: 'Our Identity',
            },
            {
              name: 'vmHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'Our Vision and Our mission',
            },
            {
              name: 'visionTitle',
              type: 'text',
              label: 'Vision Title',
              defaultValue: 'Our Vision',
            },
            {
              name: 'visionDescription',
              type: 'textarea',
              label: 'Vision Statement Description',
              defaultValue:
                '“Not one soul would be lost” — The ministry aims to see a global revival of faith, hope, and love through the transformative power of Jesus Christ.',
            },
            {
              name: 'missionTitle',
              type: 'text',
              label: 'Mission Title',
              defaultValue: 'Our Mission',
            },
            {
              name: 'missionDescription',
              type: 'textarea',
              label: 'Mission Statement Description',
              defaultValue:
                'Spreading the Gospel of Jesus Christ. Leading people into a personal relationship with God. Demonstrating His power through healing, deliverance, and transformation.',
            },
          ],
        },
        {
          label: 'Our Leaders',
          fields: [
            {
              name: 'leadersHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'Our Leaders',
            },
            {
              name: 'leaderImages',
              type: 'array',
              label: 'Leadership Card Carousel Photos',
              defaultValue: DEFAULT_LEADER_IMAGES,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Photo Upload',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Image Path',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Card Title / Leader Name',
                },
                {
                  name: 'subtitle',
                  type: 'text',
                  label: 'Card Subtitle / Role',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                },
              ],
            },
            {
              name: 'leaderParagraph1',
              type: 'textarea',
              label: 'Story Narrative Paragraph 1',
              defaultValue:
                'The Church of Signs and Wonders (Ankur Narula Ministries) is a fast-growing revival ministry based in Punjab, India, committed to preaching the Gospel of Jesus Christ through the power of the Holy Spirit. Founded in 2004 with just three members, the ministry has grown by God’s grace into a global revival movement where lakhs gather weekly to worship, receive the Word, and experience healing, deliverance, and transformation.',
            },
            {
              name: 'leaderParagraph2',
              type: 'textarea',
              label: 'Story Narrative Paragraph 2',
              defaultValue:
                'Led by Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula, the ministry serves millions through church services, live broadcasts, revival crusades, and the establishment of 200+ churches worldwide. With a strong heart for compassion, the ministry also supports the needy through charitable initiatives and a 24×7 Prayer Call Center, offering prayer and counsel to people across the world—reflecting the love and power of Christ in action.',
            },
            {
              name: 'leaderParagraph3',
              type: 'textarea',
              label: 'Story Narrative Paragraph 3',
              defaultValue:
                'Ankur Narula Ministries, led by Apostle Dr. Ankur Yoseph Narula, is a powerful Holy Spirit-led movement based in Punjab, India. Known for healing, deliverance, and prophetic ministry, to lead souls to Christ and transform lives. Follow for powerful sermons, live broadcasts, testimonies, and daily encouragement.',
            },
          ],
        },
        {
          label: 'Ministry Statistics',
          fields: [
            {
              name: 'statsHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'Ministry Statistics',
            },
            {
              name: 'stats',
              type: 'array',
              label: 'Statistics List',
              defaultValue: DEFAULT_STATS,
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  label: 'Stat Number / Value',
                  required: true,
                },
                {
                  name: 'label',
                  type: 'text',
                  label: 'Stat Label',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Faith Resources',
          fields: [
            {
              name: 'resourcesHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'Faith Resources',
            },
            {
              name: 'resourcesDescription',
              type: 'textarea',
              label: 'Description Text',
              defaultValue: 'Explore books, teachings, and spiritual resources that will strengthen your walk with God.',
            },
            {
              name: 'resourcesStoreLink',
              type: 'text',
              label: 'Store CTA Button URL',
              defaultValue: '/store',
            },
            {
              name: 'resourcesStoreLabel',
              type: 'text',
              label: 'Store CTA Button Label',
              defaultValue: 'Visit the Store Now',
            },
            {
              name: 'resourcesBgImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Background Book Image',
            },
            {
              name: 'resourcesBgFallback',
              type: 'text',
              label: 'Fallback Background Image Path',
              defaultValue: '/faith_resources_background.png',
            },
            {
              name: 'resourcesFgImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Foreground Holy Bible Image',
            },
            {
              name: 'resourcesFgFallback',
              type: 'text',
              label: 'Fallback Foreground Image Path',
              defaultValue: '/faith_resources_foreground.png',
            },
          ],
        },
        {
          label: 'Crusades Section',
          fields: [
            {
              name: 'crusadesHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'The Largest ankur narula ministries Crusades',
            },
            {
              name: 'crusadeImages',
              type: 'array',
              label: '3D Panoramic Crusade Items',
              defaultValue: DEFAULT_CRUSADES,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Crusade Photo',
                },
                {
                  name: 'imageFallback',
                  type: 'text',
                  label: 'Fallback Image Path',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Crusade Title',
                },
                {
                  name: 'location',
                  type: 'text',
                  label: 'Location / Venue',
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
          label: 'International Presence',
          fields: [
            {
              name: 'presenceHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'Man Of God International Presence',
            },
            {
              name: 'presenceSubtitle',
              type: 'textarea',
              label: 'Intro Subtitle',
              defaultValue: 'Spreading the revival fire, establishing branches, and connecting with global leadership across continents.',
            },
            {
              name: 'presenceRow1',
              type: 'array',
              label: 'Row 1 Photos (Moving Left)',
              defaultValue: DEFAULT_ROW1_PRESENCE,
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
                  name: 'title',
                  type: 'text',
                  label: 'Photo Title',
                },
                {
                  name: 'country',
                  type: 'text',
                  label: 'Country Tag',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                },
              ],
            },
            {
              name: 'presenceRow2',
              type: 'array',
              label: 'Row 2 Photos (Moving Right)',
              defaultValue: DEFAULT_ROW2_PRESENCE,
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
                  name: 'title',
                  type: 'text',
                  label: 'Photo Title',
                },
                {
                  name: 'country',
                  type: 'text',
                  label: 'Country Tag',
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
      ],
    },
  ],
}
