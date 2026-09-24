import type { GlobalConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { adminsOrEditors } from '../../access/adminsOrEditors'

const DEFAULT_NATIONAL_BRANCHES = [
  {
    name: 'ANM FEROZEPUR CHURCH',
    line1: 'Ferozepur Faridkot Road, Nurpur Sethha',
    line2: 'near R.S. Selar Ke, opposite.',
    mapLink: 'https://maps.app.goo.gl/2f6LDizaYevDz732A',
  },
  {
    name: 'ANM JALALABAD (FAZILKA) CHURCH',
    line1: 'Village Mahmu Joyia, Jalalabad, near Tool Plaza',
    line2: 'District Fazilka, PIN code 152024.',
    mapLink: 'https://maps.app.goo.gl/2QvRRsnYKHodzuQh8',
  },
  {
    name: 'ANM MANSA CHURCH',
    line1: 'Village Barnala Road, Mansa Kenchiyaan, 1 km ahead of ITI College',
    line2: 'near Renaissance School, District Mansa, PIN code 151505.',
    mapLink: 'https://maps.app.goo.gl/P2Jjp1yWWjFvYfsw5',
  },
  {
    name: 'ANM HOSHIARPUR CHURCH',
    line1: 'Village Fattowal, near Bus Stand Bulhowal Road',
    line2: 'District Hoshiarpur, PIN code 146113.',
    mapLink: 'https://maps.app.goo.gl/Z5D1yi8idNmqNc3G7',
  },
  {
    name: 'ANM LUDHIANA CHURCH',
    line1: 'Village Mohi, Jangpur Road, Mullanpur',
    line2: 'Ludhiana, Punjab.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20LUDHIANA%20CHURCH%2C%20Village%20Mohi%2C%20Jangpur%20Road%2C%20Mullanpur%2C%20Ludhiana%2C%20Punjab.',
  },
  {
    name: 'ANM AMRITSAR CHURCH',
    line1: 'Village Khabe Dogra, Jandiala Road',
    line2: 'Tarn Taran, Amritsar, Punjab.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20AMRITSAR%20CHURCH%2C%20Village%20Khabe%20Dogra%2C%20Jandiala%20Road%2C%20Tarn%20Taran%2C%20Amritsar.',
  },
  {
    name: 'ANM GURDASPUR CHURCH',
    line1: 'Village Dhariwal, Japowal P.O. Sohal',
    line2: 'District Gurdaspur, PIN code 143520.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20GURDASPUR%20CHURCH%2C%20Village%20Dhariwal%2C%20Japowal%20P.O.%20Sohal%2C%20District%20Gurdaspur%2C%20PIN%20code%20143520.',
  },
  {
    name: 'ANM BARNALA CHURCH',
    line1: 'Gupta Marriage Palace, Raikot Road',
    line2: 'near Trident Factory Outlet, Barnala, Punjab.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20BARNALA%20CHURCH%2C%20Gupta%20Marriage%20Palace%2C%20Raikot%20Road%2C%20near%20Trident%20Factory%20Outlet%2C%20Barnala%2C%20Punjab.',
  },
  {
    name: 'ANM PATIALA CHURCH',
    line1: 'Bhadson Road, 500 meters from UK Palace',
    line2: 'Village Lachkani, Patiala.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20PATIALA%20CHURCH%2C%20Bhadson%20Road%2C%20500%20meters%20from%20UK%20Palace%2C%20Village%20Lachkani%2C%20Patiala.',
  },
  {
    name: 'ANM NADALA CHURCH',
    line1: 'Bhulath to Nadala Road, near Christ the King Convent School',
    line2: 'opposite Coca Cola Agency, Bhulath, Kapurthala, PIN code 144622.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20NADALA%20CHURCH%2C%20Bhulath%20to%20Nadala%20Road%2C%20near%20Christ%20the%20King%20Convent%20School%2C%20opposite%20Coca%20Cola%20Agency%2C%20PIN%20code%20144622%2C%20Bhulath%2C%20Kapurthala.',
  },
  {
    name: 'ANM ABOHAR, FAZILKA CHURCH',
    line1: 'Malout Road near Transport Bypass Pull, Abohar City',
    line2: 'District Fazilka, Punjab, PIN code 152116.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20ABOHAR%2C%20FAZILKA%20CHURCH%2C%20Malout%20Road%20near%20Transport%20Bypass%20Pull%2C%20Abohar%20City%2C%20District%20Fazilka%2C%20Punjab%2C%20PIN%20code%20152116.',
  },
  {
    name: 'ANM BATHINDA CHURCH',
    line1: 'Bhucho Mandi, near Toll Plaza, on Bathinda to Barnala Road',
    line2: 'District Bathinda, PIN code 151101.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20BATHINDA%20CHURCH%2C%20Bhucho%20Mandi%2C%20near%20Toll%20Plaza%2C%20on%20Bathinda%20to%20Barnala%20Road%2C%20District%20Bathinda%2C%20PIN%20code%20151101.',
  },
  {
    name: 'ANM MOGA CHURCH',
    line1: 'Opposite side of Dagru Adani Selar',
    line2: 'Ferozepur Road, Moga, Punjab.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20MOGA%20CHURCH%2C%20Opposite%20side%20of%20Dagru%20Adani%20Selar%2C%20Ferozepur%20Road%2C%20Moga.',
  },
  {
    name: 'ANM CHANDIGARH CHURCH',
    line1: 'Arjun Palace Building, on Chunni to Morinda Road',
    line2: '1 km away from Chunni Kalan, District Fatehgarh Sahib, PIN code 140406.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20CHANDIGARH%20CHURCH%2C%20Arjun%20Palace%20Building%2C%20on%20Chunni%20to%20Morinda%20Road%2C%201%20km%20away%20from%20Chunni%20Kalan%2C%20District%20Fatehgarh%20Sahib%2C%20PIN%20code%20140406.',
  },
  {
    name: 'ANM RUPNAGAR CHURCH',
    line1: 'Village Church of Science and Wonders, Bhufra Chowk',
    line2: 'Ajit Palace, Rajpura (Patiala).',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20RUPNAGAR%20CHURCH%2C%20Village%20Church%20of%20Science%20and%20Wonders%2C%20Bhufra%20Chowk%2C%20Ajit%20Palace%2C%20Rajpura%20%28Patiala%29',
  },
  {
    name: 'ANM RAJPURA CHURCH',
    line1: 'Village Uppal Heri, Sirhind to Rajpura Road',
    line2: 'near Bharat Petroleum BPCL pump, Rajpura, Patiala, PIN code 140401.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20RAJPURA%20CHURCH%2C%20Village%20Uppal%20Heri%2C%20Sirhind%20to%20Rajpura%20Road%2C%20near%20Bharat%20Petroleum%20BPCL%20pump%2C%20Rajpura%2C%20Patiala%2C%20PIN%20code%20140401.',
  },
  {
    name: 'ANM SANGRUR CHURCH',
    line1: 'Golden Palace, near Sanskar Velly, Phaguwala Kanchian',
    line2: 'Bhawanigarh, District Sangrur, PIN code 148001.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20SANGRUR%20CHURCH%2C%20Golden%20Palace%2C%20near%20Sanskar%20Velly%2C%20Phaguwala%20Kanchian%2C%20Bhawanigarh%2C%20District%20Sangrur%2C%20PIN%20code%20148001.',
  },
  {
    name: 'ANM BATALA CHURCH',
    line1: 'Sunaiya Aliwal Road, near Petrol Pump',
    line2: 'Batala, District Gurdaspur, PIN code 143505.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20BATALA%20CHURCH%2C%20Sunaiya%20Aliwal%20Road%2C%20near%20Petrol%20Pump%2C%20Batala%2C%20District%20Gurdaspur%2C%20PIN%20code%20143505.',
  },
  {
    name: 'ANM AJNALA CHURCH',
    line1: 'Nijjar International Palace, in front of Dana Mandi',
    line2: 'Chogawan Road, Ajnala, District Amritsar.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20AJNALA%20CHURCH%2C%20Nijjar%20International%20Palace%2C%20in%20front%20of%20Dana%20Mandi%2C%20Chogawan%20Road%2C%20Ajnala%2C%20District%20Amritsar.',
  },
  {
    name: 'ANM FARIDKOT CHURCH',
    line1: 'Chand Palace, Kotkapura, Talwandi Bypass',
    line2: 'opposite Cannal, District Faridkot.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20FARIDKOT%20CHURCH%2C%20Chand%20Palace%2C%20Kotkapura%2C%20Talwandi%20Bypass%2C%20opposite%20Cannal%2C%20District%20Faridkot.',
  },
]

const DEFAULT_INTERNATIONAL_BRANCHES = [
  {
    name: 'ANM OTTAWA, CANADA CHURCH',
    line1: 'West Merivale Plaza, 1489 Merivale Rd, Nepean, ON K2E 5P3',
    line2: 'Sunday Meeting Time: 9:30 AM to 1:30 PM (Canada time)',
    mapLink: 'https://maps.app.goo.gl/9UztU6h7vJgGvmbP7',
  },
  {
    name: 'ANM LONDON CITY, CANADA CHURCH',
    line1: 'Prince William Room, 1057 Oxford Street East, London, Ontario, N5Y3L2',
    line2: 'Sunday Meeting Time: 9:30 AM to 1:30 PM (Canada time)',
    mapLink: 'https://maps.app.goo.gl/crKtfHRRUPhCsDNB7?g_st=aw',
  },
  {
    name: 'ANM CALGARY, CANADA CHURCH',
    line1: '5th Avenue Building, 3016 5 Ave NE, Calgary, AB – T2A 6K4, Canada',
    line2: 'Sunday Meeting Time: 7:30 AM to 11:30 AM (Calgary time)',
    mapLink: 'https://maps.app.goo.gl/f2VKdZWTmCL7oLyc7?g_st=iw',
  },
  {
    name: 'ANM NOVA SCOTIA, CANADA CHURCH',
    line1: 'Hampton Inn and Suites, 65 Cromarty Dr, Dartmouth, NS, B3N 0G2',
    line2: 'Sunday Meeting Time: 10:30 AM to 2:00 PM (Nova Scotia time)',
    mapLink: 'https://maps.app.goo.gl/Hez3mhBHW3EDVeu4A',
  },
  {
    name: 'ANM TORONTO, CANADA CHURCH',
    line1: 'Eros Convention Center, 2360 Lucknow Dr, Mississauga, ON L5S 1H3',
    line2: 'Sunday Meeting Time: 9:30 AM to 1:00 PM (Canada time)',
    mapLink: 'https://maps.app.goo.gl/VE3HMa6TMKzAVXMz8',
  },
  {
    name: 'ANM SURREY, CANADA CHURCH',
    line1: 'Bethany Newton United Church, 14853 60 Avenue, Surrey, BC V35 3H8',
    line2: 'Sunday Meeting Time: 6:30 AM to 10:30 AM (Surrey time)',
    mapLink: 'https://maps.app.goo.gl/jta7KZgJTwwSfUF86',
  },
  {
    name: 'ANM EDMONTON, CANADA CHURCH',
    line1: '9158 23 Ave NW, Edmonton, AB T6N 1H9',
    line2: 'Sunday Meeting Time: 7:30 AM to 11:30 AM (Canada time)',
    mapLink: 'https://maps.app.goo.gl/3EcnwyZjpLVNVMsRA',
  },
  {
    name: 'ANM MONTREAL, CANADA CHURCH',
    line1: '8386 Boul. Saint Laurent, Montreal, QC H2P 2M3',
    line2: 'Sunday Meeting Time: 9:30 AM to 1:00 PM (Montreal time)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20MONTREAL%2C%20CANADA%20CHURCH%2C%208386%20Boul.%20Saint%20Laurent%2C%20Montreal%2C%20QC%20H2P%202M3',
  },
  {
    name: 'ANM WINNIPEG, CANADA CHURCH',
    line1: 'RU Banquet Hall Inc., 56 Keewaten St, Winnipeg, MB R3E 3C4',
    line2: 'Sunday Meeting Time: 7:30 AM to 11:30 AM (Winnipeg time)',
    mapLink: 'https://maps.app.goo.gl/a8uDcBU4VVxNkkKS6',
  },
  {
    name: 'ANM MANCHESTER, UK CHURCH',
    line1: '27-29 Maine Rd, Greater, Rusholme, Manchester M14 4FS',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (Manchester, UK time)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20MANCHESTER%2C%20UK%20CHURCH%2C%2027-29%20Maine%20Rd%2C%20Greater%2C%20Rusholme%2C%20Manchester%20M14%204FS',
  },
  {
    name: 'ANM LEICESTER, UK CHURCH',
    line1: 'The Grove Community Hub, Cort Cres, Leicester LE3 1QZ',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (Leicester time)',
    mapLink: 'https://maps.app.goo.gl/TwH2HSvv8gmtJiYL6',
  },
  {
    name: 'ANM ILFORD, UK CHURCH',
    line1: '1 Cricklefield Place, Ilford IG1 1FY (Near Seven Kings Station)',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (UK time)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20ILFORD%2C%20UK%20CHURCH%2C%201%20Cricklefield%20Place%2C%20Ilford%20IG1%201FY%20%28Near%20Seven%20Kings%20Station%29',
  },
  {
    name: 'ANM BIRMINGHAM, UK CHURCH',
    line1: 'St George’s Community Hub, Great Hampton Row, Birmingham B19 3JG',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (Birmingham, UK time)',
    mapLink: 'https://maps.app.goo.gl/dxFoNqKZZurKpii4A',
  },
  {
    name: 'ANM OXFORD, UK CHURCH',
    line1: 'North Oxford Association, Diamond Place, Summer town, Oxford OX2 7DP',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (Oxford, UK time)',
    mapLink: 'https://maps.app.goo.gl/mYum1EodQVxHGGEv5',
  },
  {
    name: 'ANM SOUTHALL, LONDON, UK CHURCH',
    line1: 'Villiers High School, Boyd Ave, Southall UB1 3BT',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (Southall, UK time)',
    mapLink: 'https://maps.app.goo.gl/BH88Phb4vFovYtbAA',
  },
  {
    name: 'ANM HARROW, LONDON, UK CHURCH',
    line1: 'Masefield Suite, Harrow Leisure Centre, Christ church Ave, Harrow HA3 5BD',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (UK time)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20HARROW%2C%20LONDON%2C%20UK%20CHURCH%2C%20Masefield%20Suite%2C%20Harrow%20Leisure%20Centre%2C%20Christ%20church%20Ave%2C%20Harrow%20HA3%205BD',
  },
  {
    name: 'ANM GLASGOW, SCOTLAND, UK CHURCH',
    line1: 'Destiny Hope Hub, 37 S Portland Street, Glasgow – G5 9JL, United Kingdom',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (Scotland, UK time)',
    mapLink: 'https://maps.app.goo.gl/9Uq1rxtzoGKYszmb6',
  },
  {
    name: 'ANM DALLAS, TEXAS, USA CHURCH',
    line1: '1981 N Central Expy, Richardson, Dallas, TX 75080, USA',
    line2: 'Sunday Meeting Time: 8:30 AM to 1:00 PM (Texas, USA time)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20DALLAS%2C%20TEXAS%2C%20USA%20CHURCH%2C%201981%20N%20Central%20Expy%2C%20Richardson%2C%20Dallas%2C%20TX%2075080%2C%20USA',
  },
  {
    name: 'ANM SEATTLE, WASHINGTON, USA CHURCH',
    line1: '11925 SE 238th Pl, Kent, WA 98031, USA',
    line2: 'Sunday Meeting Time: 5:30 AM to 10:30 AM (Seattle, Washington time)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20SEATTLE%2C%20WASHINGTON%2C%20USA%20CHURCH%2C%2011925%20SE%20238th%20Pl%2C%20Kent%2C%20WA%2098031%2C%20USA',
  },
  {
    name: 'ANM SUGAR LAND, TEXAS, USA CHURCH',
    line1: 'Hilton Garden Inn Sugar Land, 722 Bonaventure Pl',
    line2: 'Sugar Land, TX 77479, Texas, USA.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20SUGAR%20LAND%2C%20TEXAS%2C%20USA%20CHURCH%2C%20Hilton%20Garden%20Inn%20Sugar%20Land%2C%20722%20Bonaventure%20Pl%2C%20Sugar%20Land%2C%20TX%2077479%2C%20SUGARLAND%20TEXAS',
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
