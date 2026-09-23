import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

export const DEFAULT_EVENTS = [
  {
    title: 'Masihi Satsang - Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Narula',
    cardPosterFallback: '/figma-assets/9c4cf0e2f9397f119d80dde4d156bbaa56343330.png',
    buttonLabel: 'See Details',
    detailPosterFallback: '/figma-assets/9c4cf0e2f9397f119d80dde4d156bbaa56343330.png',
    headingGreeting: 'HALLELUJAH!!',
    subheading: 'Special Spiritual Gathering & Holy Communion',
    announcementParagraph1:
      'Join us for a spirit-filled Masihi Satsang with Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula. Come with hearts full of expectation to receive God’s miraculous blessing, divine touch, and life-transforming Word.',
    announcementParagraph2:
      'God is moving powerfully in our midst. Testimonies of healing, deliverance from generational bondage, and restoration of families are happening continuously through the power of Jesus Christ.',
    announcementParagraph3:
      'Invite your friends, relatives, and loved ones to witness the living power of God and partake in a joyful atmosphere of worship and fellowship.',
    announcementParagraph4:
      'Everyone is welcome. Experience salvation, peace, and spiritual revival in your life.',
    scheduleDay: 'Wednesday & Thursday',
    scheduleDate: 'Weekly Services',
    scheduleTime: '10:00 AM onwards',
    scheduleVenue:
      'The Church of Signs and Wonders, Khambra, Near Lambra, Nakodar Road, Jalandhar, Punjab - 144026',
    schedulePostedBy: 'By:- Church Media Team',
  },
  {
    title: 'Good News in Pathankot - 11 June 2026',
    cardPosterFallback: '/figma-assets/85761e6b2486d02d0c483eb7871b0ab19ace8c46.png',
    buttonLabel: 'See Details',
    detailPosterFallback: '/figma-assets/85761e6b2486d02d0c483eb7871b0ab19ace8c46.png',
    headingGreeting: 'HALLELUJAH!!',
    subheading: 'Grand Mega Crusade 2026',
    announcementParagraph1:
      'We are delighted to share this blessed Good News that the anointed Man of God, Apostle Dr. Ankur Yoseph Narula, and Woman of God, Pastor Sonia Yoseph Narula will be coming to Pathankot on 11 June 2026 with the life-changing Gospel of Lord Jesus Christ.',
    announcementParagraph2:
      'These powerful and grace-filled gatherings will be filled with the mighty presence of the Living God. As the Word of God is preached under the anointing of the Holy Spirit, many lives will experience divine healing, restoration, deliverance, peace, and freedom in Christ. Every chain of darkness shall be broken, hearts will be renewed, and many testimonies will arise through the power of Jesus Christ.',
    announcementParagraph3:
      'This is not just a meeting, but a divine encounter with the Lord. You and your family are warmly invited to come with faith and expectation to witness the miraculous move and overflowing glory of God in Pathankot.✨',
    announcementParagraph4:
      'Don’t miss this opportunity—bring your family, friends, relatives, and loved ones. Because when Jesus enters your life, everything changes for the better.',
    scheduleDay: 'Thursday',
    scheduleDate: '11 June, 2026',
    scheduleTime: '6:00 PM to 10:00 PM',
    scheduleVenue:
      'Growth Center, Village Chacheli, Industrial Area, Near Pepsi Plant (Sujanpur), District Pathankot',
    schedulePostedBy: 'By:- Church Media Team',
  },
  {
    title: 'Sunday Live Service - Ankur Narula Ministries',
    cardPosterFallback: '/figma-assets/b3a0bba89e5f05b1a24ecbaec47a6c1170b270dc.png',
    buttonLabel: 'See Details',
    detailPosterFallback: '/figma-assets/b3a0bba89e5f05b1a24ecbaec47a6c1170b270dc.png',
    headingGreeting: 'HALLELUJAH!!',
    subheading: 'Weekly Mega Sunday Worship & Deliverance Service',
    announcementParagraph1:
      'Experience the mighty power of Jesus Christ every Sunday at The Church of Signs and Wonders. Gather with over 300,000 believers in powerful praise, prophetic word, and supernatural deliverance.',
    announcementParagraph2:
      'The blind receive sight, the lame walk, diseases are healed, and lives are eternally transformed under the heavy anointing of the Holy Spirit with Apostle Dr. Ankur Yoseph Narula.',
    announcementParagraph3:
      'Services are also broadcast live worldwide across YouTube and Anugrah TV for millions watching internationally.',
    announcementParagraph4:
      'Prepare your hearts and come expectant to meet the King of Kings. Your breakthrough is waiting!',
    scheduleDay: 'Sunday',
    scheduleDate: 'Every Sunday',
    scheduleTime: '8:30 AM to 3:00 PM',
    scheduleVenue:
      'The Church of Signs and Wonders, Khambra, Near Lambra, Nakodar Road, Jalandhar, Punjab - 144026',
    schedulePostedBy: 'By:- Church Media Team',
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
          eventsSectionTitle: doc.eventsSectionTitle || 'Events',
          upcomingSectionTitle: doc.upcomingSectionTitle || 'Upcoming Events',
          events: doc.events && doc.events.length > 0 ? doc.events : DEFAULT_EVENTS,
        }
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Section Titles',
          fields: [
            {
              name: 'eventsSectionTitle',
              type: 'text',
              label: 'Top Events Grid Section Title',
              defaultValue: 'Events',
            },
            {
              name: 'upcomingSectionTitle',
              type: 'text',
              label: 'Detail Section Header Title',
              defaultValue: 'Upcoming Events',
            },
          ],
        },
        {
          label: 'Events Management',
          fields: [
            {
              name: 'events',
              type: 'array',
              label: 'Church Events (Grid & Detailed Views)',
              defaultValue: DEFAULT_EVENTS,
              labels: {
                singular: 'Event',
                plural: 'Events',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Event Title',
                  required: true,
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'cardPoster',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Card Thumbnail Poster (Top Grid)',
                      admin: { width: '50%' },
                    },
                    {
                      name: 'cardPosterFallback',
                      type: 'text',
                      label: 'Card Poster Fallback Image Path',
                      admin: { width: '50%' },
                    },
                  ],
                },
                {
                  name: 'buttonLabel',
                  type: 'text',
                  label: 'Card Action Button Label',
                  defaultValue: 'See Details',
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'detailPoster',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Detail View Large Poster (Optional, falls back to Card Poster)',
                      admin: { width: '50%' },
                    },
                    {
                      name: 'detailPosterFallback',
                      type: 'text',
                      label: 'Detail Poster Fallback Image Path',
                      admin: { width: '50%' },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'headingGreeting',
                      type: 'text',
                      label: 'Greeting Heading (e.g. HALLELUJAH!!)',
                      defaultValue: 'HALLELUJAH!!',
                      admin: { width: '50%' },
                    },
                    {
                      name: 'subheading',
                      type: 'text',
                      label: 'Event Subtitle / Tagline',
                      admin: { width: '50%' },
                    },
                  ],
                },
                {
                  name: 'announcementParagraph1',
                  type: 'textarea',
                  label: 'Announcement Paragraph 1',
                  required: true,
                },
                {
                  name: 'announcementParagraph2',
                  type: 'textarea',
                  label: 'Announcement Paragraph 2',
                },
                {
                  name: 'announcementParagraph3',
                  type: 'textarea',
                  label: 'Announcement Paragraph 3',
                },
                {
                  name: 'announcementParagraph4',
                  type: 'textarea',
                  label: 'Announcement Paragraph 4',
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'scheduleDay',
                      type: 'text',
                      label: 'Event Day (e.g. Thursday)',
                      admin: { width: '33.3%' },
                    },
                    {
                      name: 'scheduleDate',
                      type: 'text',
                      label: 'Event Date (e.g. 11 June, 2026)',
                      admin: { width: '33.3%' },
                    },
                    {
                      name: 'scheduleTime',
                      type: 'text',
                      label: 'Event Time (e.g. 6:00 PM to 10:00 PM)',
                      admin: { width: '33.3%' },
                    },
                  ],
                },
                {
                  name: 'scheduleVenue',
                  type: 'textarea',
                  label: 'Event Venue Address',
                },
                {
                  name: 'schedulePostedBy',
                  type: 'text',
                  label: 'Posted By Credit',
                  defaultValue: 'By:- Church Media Team',
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'customLinkText',
                      type: 'text',
                      label: 'Optional Hyperlink Label (e.g. Google Maps)',
                      admin: { width: '50%' },
                    },
                    {
                      name: 'customLinkUrl',
                      type: 'text',
                      label: 'Optional Hyperlink URL',
                      admin: { width: '50%' },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

