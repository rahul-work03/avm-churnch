import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_NATIONAL_BRANCHES = [
  {
    name: 'ANM FEROZEPUR CHURCH',
    line1: 'Ferozepur Faridkot Road, Nurpur Sethha',
    line2: 'near R.S. Selar Ke, opposite.',
  },
  {
    name: 'ANM AMRITSAR CHURCH',
    line1: 'Opposite Celebration Mall, Batala Road',
    line2: 'Amritsar, Punjab.',
  },
  {
    name: 'ANM LUDHIANA CHURCH',
    line1: 'Near Aarti Cinema, Ferozepur Road',
    line2: 'Ludhiana, Punjab.',
  },
  {
    name: 'ANM PATIALA CHURCH',
    line1: 'Near Thapar University, Bhupindra Road',
    line2: 'Patiala, Punjab.',
  },
  {
    name: 'ANM BATHINDA CHURCH',
    line1: 'Goniana Road, Near Lake View',
    line2: 'Bathinda, Punjab.',
  },
  {
    name: 'ANM JALANDHAR CANTT CHURCH',
    line1: 'Near Rama Mandi Chowk, Hoshiarpur Road',
    line2: 'Jalandhar Cantt, Punjab.',
  },
  {
    name: 'ANM HOSHIARPUR CHURCH',
    line1: 'Near Shimla By-pass, Chandigarh Road',
    line2: 'Hoshiarpur, Punjab.',
  },
  {
    name: 'ANM CHANDIGARH / MOHALI CHURCH',
    line1: 'Phase 7, Industrial Area, Sector 73',
    line2: 'Mohali, Punjab.',
  },
  {
    name: 'ANM DELHI NCR CHURCH',
    line1: 'Near Rohini West Metro Station, Sector 11',
    line2: 'Rohini, New Delhi.',
  },
  {
    name: 'ANM GURDASPUR CHURCH',
    line1: 'Tibri Road, Near Civil Hospital',
    line2: 'Gurdaspur, Punjab.',
  },
  {
    name: 'ANM PATHANKOT CHURCH',
    line1: 'Dalhousie Road, Near Mamun Cantt',
    line2: 'Pathankot, Punjab.',
  },
  {
    name: 'ANM KAPURTHALA CHURCH',
    line1: 'Sultanpur Lodhi Road',
    line2: 'Kapurthala, Punjab.',
  },
  {
    name: 'ANM TARN TARAN CHURCH',
    line1: 'Near Bye Pass Chowk, Jandiala Road',
    line2: 'Tarn Taran, Punjab.',
  },
  {
    name: 'ANM MOGA CHURCH',
    line1: 'GT Road, Near Nature Park',
    line2: 'Moga, Punjab.',
  },
  {
    name: 'ANM SANGRUR CHURCH',
    line1: 'Patiala Bypass Road, Near Bus Stand',
    line2: 'Sangrur, Punjab.',
  },
  {
    name: 'ANM MUKTSAR CHURCH',
    line1: 'Kotkapura Road, Near Civil Hospital',
    line2: 'Sri Muktsar Sahib, Punjab.',
  },
  {
    name: 'ANM FAZILKA CHURCH',
    line1: 'Malout Road, Near Grain Market',
    line2: 'Fazilka, Punjab.',
  },
  {
    name: 'ANM BARNALA CHURCH',
    line1: 'Handiaya Road, Near Railway Crossing',
    line2: 'Barnala, Punjab.',
  },
  {
    name: 'ANM MANSA CHURCH',
    line1: 'Cinema Road, Near Water Works',
    line2: 'Mansa, Punjab.',
  },
  {
    name: 'ANM FARIDKOT CHURCH',
    line1: 'Talwandi Road, Near Medical College',
    line2: 'Faridkot, Punjab.',
  },
  {
    name: 'ANM ROPAR CHURCH',
    line1: 'Bela Road, Near Haveli',
    line2: 'Rupnagar, Punjab.',
  },
  {
    name: 'ANM NAWANSHAHR CHURCH',
    line1: 'Chandigarh Road, Near ITI',
    line2: 'Shaheed Bhagat Singh Nagar, Punjab.',
  },
  {
    name: 'ANM FATEHGARH SAHIB CHURCH',
    line1: 'Sirhind - Morinda Road',
    line2: 'Fatehgarh Sahib, Punjab.',
  },
  {
    name: 'ANM MALERKOTLA CHURCH',
    line1: 'Ludhiana Bypass, Near Jamia',
    line2: 'Malerkotla, Punjab.',
  },
  {
    name: 'ANM BATALA CHURCH',
    line1: 'Jalandhar Road, Near Gandhi Chowk',
    line2: 'Batala, Punjab.',
  },
  {
    name: 'ANM KHANNA CHURCH',
    line1: 'GT Road, Near City Center',
    line2: 'Khanna, Punjab.',
  },
  {
    name: 'ANM PHAGWARA CHURCH',
    line1: 'Hoshiarpur Road, Near Sugar Mill',
    line2: 'Phagwara, Punjab.',
  },
]

const DEFAULT_INTERNATIONAL_BRANCHES = [
  {
    name: 'ANM UNITED KINGDOM CHURCH',
    line1: 'The Green, Southall / Slough Region',
    line2: 'Greater London, United Kingdom.',
  },
  {
    name: 'ANM CANADA CHURCH',
    line1: 'Steeles Ave East, Brampton',
    line2: 'Greater Toronto Area, Ontario, Canada.',
  },
  {
    name: 'ANM UNITED STATES CHURCH',
    line1: 'South Bay Boulevard, Silicon Valley Area',
    line2: 'California, USA.',
  },
  {
    name: 'ANM UAE DUBAI CHURCH',
    line1: 'Al Quoz Industrial Area 3',
    line2: 'Dubai, United Arab Emirates.',
  },
  {
    name: 'ANM AUSTRALIA CHURCH',
    line1: 'Western Highway, Caroline Springs',
    line2: 'Melbourne, Victoria, Australia.',
  },
  {
    name: 'ANM ITALY CHURCH',
    line1: 'Via Milano, Brescia',
    line2: 'Lombardy, Italy.',
  },
  {
    name: 'ANM GERMANY CHURCH',
    line1: 'Mainzer Landstraße',
    line2: 'Frankfurt am Main, Germany.',
  },
  {
    name: 'ANM NEW ZEALAND CHURCH',
    line1: 'Great South Road, Manukau',
    line2: 'Auckland, New Zealand.',
  },
  {
    name: 'ANM FRANCE CHURCH',
    line1: 'Avenue de Paris, Saint-Denis',
    line2: 'Greater Paris, France.',
  },
]

export const ChurchBranchesPageGlobal: GlobalConfig = {
  slug: 'church-branches-page',
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
          nationalBranches:
            doc.nationalBranches && doc.nationalBranches.length > 0
              ? doc.nationalBranches
              : DEFAULT_NATIONAL_BRANCHES,
          internationalBranches:
            doc.internationalBranches && doc.internationalBranches.length > 0
              ? doc.internationalBranches
              : DEFAULT_INTERNATIONAL_BRANCHES,
        }
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero & Banner',
          fields: [
            {
              name: 'heroBannerImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Hero Banner Image',
            },
            {
              name: 'heroBannerFallback',
              type: 'text',
              label: 'Fallback Banner Path',
              defaultValue: '/church_branches_hero.png',
            },
            {
              name: 'heroBannerAlt',
              type: 'text',
              label: 'Banner Alt Text',
              defaultValue: 'Our Branches - Ankur Narula Ministries',
            },
          ],
        },
        {
          label: 'Head Branch Spotlight',
          fields: [
            {
              name: 'headBranchTitle',
              type: 'text',
              label: 'Head Branch Title',
              defaultValue: 'Head Branch Punjab Khambra',
            },
            {
              name: 'headBranchMapIframe',
              type: 'textarea',
              label: 'Google Maps Embed URL or <iframe> Code',
              admin: {
                description:
                  'Enter a Google Maps embed URL (https://www.google.com/maps/embed?...) or full <iframe> code. If provided, an interactive Google Map will be displayed.',
              },
              defaultValue:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.825651913988!2d75.54516317628807!3d31.308573957597147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b8f6735c249%3A0x28eb2b90b8f10825!2sThe%20Church%20Of%20Signs%20And%20Wonders!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
            },
            {
              name: 'headBranchMapImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Map / Satellite Photo (Fallback)',
            },
            {
              name: 'headBranchMapFallback',
              type: 'text',
              label: 'Fallback Map Image Path',
              defaultValue: '/figma-assets/6627c47caaf2724af326c71d68ab4ef85b4bc42c.png',
            },
            {
              name: 'headBranchHelperText',
              type: 'text',
              label: 'Helper Text Below Map',
              defaultValue: 'Here is a location pin to help you find us!',
            },
          ],
        },
        {
          label: 'Branches Directory',
          fields: [
            {
              name: 'directoryHeaderTitle',
              type: 'text',
              label: 'Directory Section Heading',
              defaultValue: 'ANM CHURCHES IN INDIA',
            },
            {
              name: 'nationalBranches',
              type: 'array',
              label: 'National Branches (India)',
              defaultValue: DEFAULT_NATIONAL_BRANCHES,
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Branch Name',
                  required: true,
                },
                {
                  name: 'line1',
                  type: 'text',
                  label: 'Address Line 1',
                  required: true,
                },
                {
                  name: 'line2',
                  type: 'text',
                  label: 'Address Line 2',
                  required: true,
                },
                {
                  name: 'mapLink',
                  type: 'text',
                  label: 'Google Maps Link / URL',
                  admin: {
                    description:
                      'Custom Google Maps link for this branch. If empty, an automatic search link will be generated when clicked.',
                  },
                },
              ],
            },
            {
              name: 'internationalBranches',
              type: 'array',
              label: 'International Branches',
              defaultValue: DEFAULT_INTERNATIONAL_BRANCHES,
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Branch Name',
                  required: true,
                },
                {
                  name: 'line1',
                  type: 'text',
                  label: 'Address Line 1',
                  required: true,
                },
                {
                  name: 'line2',
                  type: 'text',
                  label: 'Address Line 2',
                  required: true,
                },
                {
                  name: 'mapLink',
                  type: 'text',
                  label: 'Google Maps Link / URL',
                  admin: {
                    description:
                      'Custom Google Maps link for this branch. If empty, an automatic search link will be generated when clicked.',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
