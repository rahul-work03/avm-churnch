import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_RECENT_EVENTS = [
  {
    title: 'Masihi Satsang - Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Narula',
    posterFallback: '/figma-assets/9c4cf0e2f9397f119d80dde4d156bbaa56343330.png',
  },
  {
    title: 'Good News in Pathankot - 11 June 2026',
    posterFallback: '/figma-assets/85761e6b2486d02d0c483eb7871b0ab19ace8c46.png',
  },
  {
    title: 'Sunday Live Service - Ankur Narula Ministries',
    posterFallback: '/figma-assets/b3a0bba89e5f05b1a24ecbaec47a6c1170b270dc.png',
  },
]

export const EventsPageGlobal: GlobalConfig = {
  slug: 'events-page',
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
          recentEvents:
            doc.recentEvents && doc.recentEvents.length > 0
              ? doc.recentEvents
              : DEFAULT_RECENT_EVENTS,
        }
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Recent Events',
          fields: [
            {
              name: 'recentHeaderTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'Events',
            },
            {
              name: 'recentEvents',
              type: 'array',
              label: 'Recent Event Cards',
              defaultValue: DEFAULT_RECENT_EVENTS,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Event Title',
                  required: true,
                },
                {
                  name: 'poster',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Poster Image',
                },
                {
                  name: 'posterFallback',
                  type: 'text',
                  label: 'Fallback Poster Path',
                },
              ],
            },
          ],
        },
        {
          label: 'Upcoming Event & Schedule',
          fields: [
            {
              name: 'upcomingHeaderTitle',
              type: 'text',
              label: 'Upcoming Section Header Title',
              defaultValue: 'Upcoming Events',
            },
            {
              name: 'featuredPoster',
              type: 'upload',
              relationTo: 'media',
              label: 'Featured Event Poster',
            },
            {
              name: 'featuredPosterFallback',
              type: 'text',
              label: 'Fallback Featured Poster Path',
              defaultValue: '/figma-assets/85761e6b2486d02d0c483eb7871b0ab19ace8c46.png',
            },
            {
              name: 'featuredTitle',
              type: 'text',
              label: 'Featured Event Title',
              defaultValue: 'Good News in Pathankot - 11 June 2026',
            },
            {
              name: 'featuredLinkUrl',
              type: 'text',
              label: 'Featured Button Link URL',
              defaultValue: 'https://www.youtube.com/@TheChurchofSignsandWonders/videos',
            },
            {
              name: 'featuredButtonLabel',
              type: 'text',
              label: 'Featured Button Label',
              defaultValue: 'Watch Now',
            },
            {
              name: 'headingGreeting',
              type: 'text',
              label: 'Greeting Heading',
              defaultValue: 'HALLELUJAH!!',
            },
            {
              name: 'announcementParagraph1',
              type: 'textarea',
              label: 'Announcement Paragraph 1',
              defaultValue:
                'We are delighted to share this blessed Good News that the anointed Man of God, Apostle Dr. Ankur Yoseph Narula, and Woman of God, Pastor Sonia Yoseph Narula will be coming to Pathankot on 11 June 2026 with the life-changing Gospel of Lord Jesus Christ.',
            },
            {
              name: 'announcementParagraph2',
              type: 'textarea',
              label: 'Announcement Paragraph 2',
              defaultValue:
                'These powerful and grace-filled gatherings will be filled with the mighty presence of the Living God. As the Word of God is preached under the anointing of the Holy Spirit, many lives will experience divine healing, restoration, deliverance, peace, and freedom in Christ. Every chain of darkness shall be broken, hearts will be renewed, and many testimonies will arise through the power of Jesus Christ.',
            },
            {
              name: 'announcementParagraph3',
              type: 'textarea',
              label: 'Announcement Paragraph 3',
              defaultValue:
                'This is not just a meeting, but a divine encounter with the Lord. You and your family are warmly invited to come with faith and expectation to witness the miraculous move and overflowing glory of God in Pathankot.✨',
            },
            {
              name: 'announcementParagraph4',
              type: 'textarea',
              label: 'Announcement Paragraph 4',
              defaultValue:
                'Don’t miss this opportunity—bring your family, friends, relatives, and loved ones. Because when Jesus enters your life, everything changes for the better.',
            },
            {
              name: 'scheduleDay',
              type: 'text',
              label: 'Event Day',
              defaultValue: 'Thursday',
            },
            {
              name: 'scheduleDate',
              type: 'text',
              label: 'Event Date',
              defaultValue: '11 June, 2026',
            },
            {
              name: 'scheduleTime',
              type: 'text',
              label: 'Event Time',
              defaultValue: '6 PM to 10 PM',
            },
            {
              name: 'scheduleVenue',
              type: 'textarea',
              label: 'Event Venue',
              defaultValue:
                'Growth Center, Village Chacheli, Industrial Area, Near Pepsi Plant (Sujanpur), District Pathankot',
            },
            {
              name: 'schedulePostedBy',
              type: 'text',
              label: 'Posted By Credit',
              defaultValue: 'By:- Church Media Team',
            },
          ],
        },
      ],
    },
  ],
}
