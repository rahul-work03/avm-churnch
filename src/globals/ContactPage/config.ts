import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

export const ContactPageGlobal: GlobalConfig = {
  slug: 'contact-page',
  access: {
    read: anyone,
    update: adminsOrEditors,
  },
  admin: {
    group: 'Website Settings',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero & Form',
          fields: [
            {
              name: 'heroTitle',
              type: 'text',
              label: 'Hero Main Title',
              defaultValue: 'We Love To Hear From You.',
            },
            {
              name: 'heroSubtitle',
              type: 'text',
              label: 'Hero Subtitle',
              defaultValue: 'Stay Connected With Us',
            },
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Hero Image',
            },
            {
              name: 'heroImageFallback',
              type: 'text',
              label: 'Hero Fallback Image Path',
              defaultValue: '/contact_us_hero.png',
            },
            {
              name: 'heroImageBadgeTitle',
              type: 'text',
              label: 'Hero Image Badge Title',
              defaultValue: 'Ankur Narula Ministries',
            },
            {
              name: 'heroImageBadgeSubtitle',
              type: 'text',
              label: 'Hero Image Badge Subtitle',
              defaultValue: 'The Church of Signs and Wonders',
            },
            {
              name: 'formSuccessTitle',
              type: 'text',
              label: 'Form Submission Success Title',
              defaultValue: 'Message Sent Successfully!',
            },
            {
              name: 'formSuccessMessage',
              type: 'textarea',
              label: 'Form Submission Success Message',
              defaultValue:
                'Thank you for contacting Ankur Narula Ministries. Our ministry team will connect with you soon.',
            },
          ],
        },
        {
          label: 'Contact Info',
          fields: [
            {
              name: 'infoSectionTitle',
              type: 'text',
              label: 'Section Header Title',
              defaultValue: 'Contact Information',
            },
            {
              name: 'infoSectionSubtitle',
              type: 'textarea',
              label: 'Section Subtitle',
              defaultValue:
                'Send Us Your Prayer Request Believing for God’s Urgent Intervention and Miracles.',
            },
            {
              name: 'generalInquiriesTitle',
              type: 'text',
              label: 'General Inquiries Title',
              defaultValue: 'General inquiries & prayer',
            },
            {
              name: 'generalInquiriesEmail1',
              type: 'text',
              label: 'General Inquiries Primary Email',
              defaultValue: 'info@ankurnarula.org',
            },
            {
              name: 'generalInquiriesEmail2',
              type: 'text',
              label: 'General Inquiries Secondary Email',
              defaultValue: 'Prayer@ankurnarula.org',
            },
            {
              name: 'hospitalLineTitle',
              type: 'text',
              label: 'Hospital Prayer Line Title',
              defaultValue: 'Hospital prayer line',
            },
            {
              name: 'hospitalLineEmail',
              type: 'text',
              label: 'Hospital Prayer Line Email',
              defaultValue: 'anmhospitalprayerline@gmail.com',
            },
            {
              name: 'emergencyPrayersTitle',
              type: 'text',
              label: 'Emergency Prayers Title',
              defaultValue: 'Emergency prayers',
            },
            {
              name: 'emergencyPrayersEmail',
              type: 'text',
              label: 'Emergency Prayers Email',
              defaultValue: 'anmemergencyprayer@gmail.com',
            },
            {
              name: 'phoneSectionTitle',
              type: 'text',
              label: 'Phone Section Title',
              defaultValue: 'Phone & address',
            },
            {
              name: 'phoneNumber',
              type: 'text',
              label: 'Contact Phone Number',
              defaultValue: '0181 520 7777',
            },
          ],
        },
        {
          label: 'Address & Map',
          fields: [
            {
              name: 'addressSectionTitle',
              type: 'text',
              label: 'Address Section Header Title',
              defaultValue: 'Address',
            },
            {
              name: 'fullAddress',
              type: 'textarea',
              label: 'Church Address Full Text',
              defaultValue:
                'Ankur Narula Ministries, Village Khambra, Nakodar Rd, Near T.V tower, Jalandhar-Punjab 144026',
            },
            {
              name: 'googleMapsUrl',
              type: 'text',
              label: 'Google Maps Location / Directions URL',
              defaultValue:
                'https://www.google.com/maps/search/?api=1&query=Ankur+Narula+Ministries+Village+Khambra+Nakodar+Rd+Near+TV+tower+Jalandhar+Punjab+144026',
            },
          ],
        },
      ],
    },
  ],
}
