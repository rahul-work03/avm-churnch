'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { GoldBarReveal, TextWordReveal } from '@/components/ui/text-reveal'

interface ChurchBranch {
  id?: string
  name: string
  category?: 'national' | 'international'
  line1: string
  line2: string
  mapLink?: string | null
}

function getBranchMapUrl(branch: ChurchBranch): string {
  if (branch.mapLink && branch.mapLink.trim()) {
    return branch.mapLink.trim()
  }
  const query = `${branch.name}, ${branch.line1}, ${branch.line2}`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

interface BranchesDirectorySectionProps {
  directoryHeaderTitle?: string | null
  nationalBranches?: ChurchBranch[] | null
  internationalBranches?: ChurchBranch[] | null
}

const DEFAULT_NATIONAL_BRANCHES: ChurchBranch[] = [
  {
    id: 'in-1',
    name: 'ANM FEROZEPUR CHURCH',
    category: 'national',
    line1: 'Ferozepur Faridkot Road, Nurpur Sethha',
    line2: 'near R.S. Selar Ke, opposite.',
    mapLink: 'https://maps.app.goo.gl/2f6LDizaYevDz732A',
  },
  {
    id: 'in-2',
    name: 'ANM JALALABAD (FAZILKA) CHURCH',
    category: 'national',
    line1: 'Village Mahmu Joyia, Jalalabad, near Tool Plaza',
    line2: 'District Fazilka, PIN code 152024.',
    mapLink: 'https://maps.app.goo.gl/2QvRRsnYKHodzuQh8',
  },
  {
    id: 'in-3',
    name: 'ANM MANSA CHURCH',
    category: 'national',
    line1: 'Village Barnala Road, Mansa Kenchiyaan, 1 km ahead of ITI College',
    line2: 'near Renaissance School, District Mansa, PIN code 151505.',
    mapLink: 'https://maps.app.goo.gl/P2Jjp1yWWjFvYfsw5',
  },
  {
    id: 'in-4',
    name: 'ANM HOSHIARPUR CHURCH',
    category: 'national',
    line1: 'Village Fattowal, near Bus Stand Bulhowal Road',
    line2: 'District Hoshiarpur, PIN code 146113.',
    mapLink: 'https://maps.app.goo.gl/Z5D1yi8idNmqNc3G7',
  },
  {
    id: 'in-5',
    name: 'ANM LUDHIANA CHURCH',
    category: 'national',
    line1: 'Village Mohi, Jangpur Road, Mullanpur',
    line2: 'Ludhiana, Punjab.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20LUDHIANA%20CHURCH%2C%20Village%20Mohi%2C%20Jangpur%20Road%2C%20Mullanpur%2C%20Ludhiana%2C%20Punjab.',
  },
  {
    id: 'in-6',
    name: 'ANM AMRITSAR CHURCH',
    category: 'national',
    line1: 'Village Khabe Dogra, Jandiala Road',
    line2: 'Tarn Taran, Amritsar, Punjab.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20AMRITSAR%20CHURCH%2C%20Village%20Khabe%20Dogra%2C%20Jandiala%20Road%2C%20Tarn%20Taran%2C%20Amritsar.',
  },
  {
    id: 'in-7',
    name: 'ANM GURDASPUR CHURCH',
    category: 'national',
    line1: 'Village Dhariwal, Japowal P.O. Sohal',
    line2: 'District Gurdaspur, PIN code 143520.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20GURDASPUR%20CHURCH%2C%20Village%20Dhariwal%2C%20Japowal%20P.O.%20Sohal%2C%20District%20Gurdaspur%2C%20PIN%20code%20143520.',
  },
  {
    id: 'in-8',
    name: 'ANM BARNALA CHURCH',
    category: 'national',
    line1: 'Gupta Marriage Palace, Raikot Road',
    line2: 'near Trident Factory Outlet, Barnala, Punjab.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20BARNALA%20CHURCH%2C%20Gupta%20Marriage%20Palace%2C%20Raikot%20Road%2C%20near%20Trident%20Factory%20Outlet%2C%20Barnala%2C%20Punjab.',
  },
  {
    id: 'in-9',
    name: 'ANM PATIALA CHURCH',
    category: 'national',
    line1: 'Bhadson Road, 500 meters from UK Palace',
    line2: 'Village Lachkani, Patiala.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20PATIALA%20CHURCH%2C%20Bhadson%20Road%2C%20500%20meters%20from%20UK%20Palace%2C%20Village%20Lachkani%2C%20Patiala.',
  },
  {
    id: 'in-10',
    name: 'ANM NADALA CHURCH',
    category: 'national',
    line1: 'Bhulath to Nadala Road, near Christ the King Convent School',
    line2: 'opposite Coca Cola Agency, Bhulath, Kapurthala, PIN code 144622.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20NADALA%20CHURCH%2C%20Bhulath%20to%20Nadala%20Road%2C%20near%20Christ%20the%20King%20Convent%20School%2C%20opposite%20Coca%20Cola%20Agency%2C%20PIN%20code%20144622%2C%20Bhulath%2C%20Kapurthala.',
  },
  {
    id: 'in-11',
    name: 'ANM ABOHAR, FAZILKA CHURCH',
    category: 'national',
    line1: 'Malout Road near Transport Bypass Pull, Abohar City',
    line2: 'District Fazilka, Punjab, PIN code 152116.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20ABOHAR%2C%20FAZILKA%20CHURCH%2C%20Malout%20Road%20near%20Transport%20Bypass%20Pull%2C%20Abohar%20City%2C%20District%20Fazilka%2C%20Punjab%2C%20PIN%20code%20152116.',
  },
  {
    id: 'in-12',
    name: 'ANM BATHINDA CHURCH',
    category: 'national',
    line1: 'Bhucho Mandi, near Toll Plaza, on Bathinda to Barnala Road',
    line2: 'District Bathinda, PIN code 151101.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20BATHINDA%20CHURCH%2C%20Bhucho%20Mandi%2C%20near%20Toll%20Plaza%2C%20on%20Bathinda%20to%20Barnala%20Road%2C%20District%20Bathinda%2C%20PIN%20code%20151101.',
  },
  {
    id: 'in-13',
    name: 'ANM MOGA CHURCH',
    category: 'national',
    line1: 'Opposite side of Dagru Adani Selar',
    line2: 'Ferozepur Road, Moga, Punjab.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20MOGA%20CHURCH%2C%20Opposite%20side%20of%20Dagru%20Adani%20Selar%2C%20Ferozepur%20Road%2C%20Moga.',
  },
  {
    id: 'in-14',
    name: 'ANM CHANDIGARH CHURCH',
    category: 'national',
    line1: 'Arjun Palace Building, on Chunni to Morinda Road',
    line2: '1 km away from Chunni Kalan, District Fatehgarh Sahib, PIN code 140406.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20CHANDIGARH%20CHURCH%2C%20Arjun%20Palace%20Building%2C%20on%20Chunni%20to%20Morinda%20Road%2C%201%20km%20away%20from%20Chunni%20Kalan%2C%20District%20Fatehgarh%20Sahib%2C%20PIN%20code%20140406.',
  },
  {
    id: 'in-15',
    name: 'ANM RUPNAGAR CHURCH',
    category: 'national',
    line1: 'Village Church of Science and Wonders, Bhufra Chowk',
    line2: 'Ajit Palace, Rajpura (Patiala).',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20RUPNAGAR%20CHURCH%2C%20Village%20Church%20of%20Science%20and%20Wonders%2C%20Bhufra%20Chowk%2C%20Ajit%20Palace%2C%20Rajpura%20%28Patiala%29',
  },
  {
    id: 'in-16',
    name: 'ANM RAJPURA CHURCH',
    category: 'national',
    line1: 'Village Uppal Heri, Sirhind to Rajpura Road',
    line2: 'near Bharat Petroleum BPCL pump, Rajpura, Patiala, PIN code 140401.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20RAJPURA%20CHURCH%2C%20Village%20Uppal%20Heri%2C%20Sirhind%20to%20Rajpura%20Road%2C%20near%20Bharat%20Petroleum%20BPCL%20pump%2C%20Rajpura%2C%20Patiala%2C%20PIN%20code%20140401.',
  },
  {
    id: 'in-17',
    name: 'ANM SANGRUR CHURCH',
    category: 'national',
    line1: 'Golden Palace, near Sanskar Velly, Phaguwala Kanchian',
    line2: 'Bhawanigarh, District Sangrur, PIN code 148001.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20SANGRUR%20CHURCH%2C%20Golden%20Palace%2C%20near%20Sanskar%20Velly%2C%20Phaguwala%20Kanchian%2C%20Bhawanigarh%2C%20District%20Sangrur%2C%20PIN%20code%20148001.',
  },
  {
    id: 'in-18',
    name: 'ANM BATALA CHURCH',
    category: 'national',
    line1: 'Sunaiya Aliwal Road, near Petrol Pump',
    line2: 'Batala, District Gurdaspur, PIN code 143505.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20BATALA%20CHURCH%2C%20Sunaiya%20Aliwal%20Road%2C%20near%20Petrol%20Pump%2C%20Batala%2C%20District%20Gurdaspur%2C%20PIN%20code%20143505.',
  },
  {
    id: 'in-19',
    name: 'ANM AJNALA CHURCH',
    category: 'national',
    line1: 'Nijjar International Palace, in front of Dana Mandi',
    line2: 'Chogawan Road, Ajnala, District Amritsar.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20AJNALA%20CHURCH%2C%20Nijjar%20International%20Palace%2C%20in%20front%20of%20Dana%20Mandi%2C%20Chogawan%20Road%2C%20Ajnala%2C%20District%20Amritsar.',
  },
  {
    id: 'in-20',
    name: 'ANM FARIDKOT CHURCH',
    category: 'national',
    line1: 'Chand Palace, Kotkapura, Talwandi Bypass',
    line2: 'opposite Cannal, District Faridkot.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20FARIDKOT%20CHURCH%2C%20Chand%20Palace%2C%20Kotkapura%2C%20Talwandi%20Bypass%2C%20opposite%20Cannal%2C%20District%20Faridkot.',
  },
]

const DEFAULT_INTERNATIONAL_BRANCHES: ChurchBranch[] = [
  {
    id: 'intl-1',
    name: 'ANM OTTAWA, CANADA CHURCH',
    category: 'international',
    line1: 'West Merivale Plaza, 1489 Merivale Rd, Nepean, ON K2E 5P3',
    line2: 'Sunday Meeting Time: 9:30 AM to 1:30 PM (Canada time)',
    mapLink: 'https://maps.app.goo.gl/9UztU6h7vJgGvmbP7',
  },
  {
    id: 'intl-2',
    name: 'ANM LONDON CITY, CANADA CHURCH',
    category: 'international',
    line1: 'Prince William Room, 1057 Oxford Street East, London, Ontario, N5Y3L2',
    line2: 'Sunday Meeting Time: 9:30 AM to 1:30 PM (Canada time)',
    mapLink: 'https://maps.app.goo.gl/crKtfHRRUPhCsDNB7?g_st=aw',
  },
  {
    id: 'intl-3',
    name: 'ANM CALGARY, CANADA CHURCH',
    category: 'international',
    line1: '5th Avenue Building, 3016 5 Ave NE, Calgary, AB – T2A 6K4, Canada',
    line2: 'Sunday Meeting Time: 7:30 AM to 11:30 AM (Calgary time)',
    mapLink: 'https://maps.app.goo.gl/f2VKdZWTmCL7oLyc7?g_st=iw',
  },
  {
    id: 'intl-4',
    name: 'ANM NOVA SCOTIA, CANADA CHURCH',
    category: 'international',
    line1: 'Hampton Inn and Suites, 65 Cromarty Dr, Dartmouth, NS, B3N 0G2',
    line2: 'Sunday Meeting Time: 10:30 AM to 2:00 PM (Nova Scotia time)',
    mapLink: 'https://maps.app.goo.gl/Hez3mhBHW3EDVeu4A',
  },
  {
    id: 'intl-5',
    name: 'ANM TORONTO, CANADA CHURCH',
    category: 'international',
    line1: 'Eros Convention Center, 2360 Lucknow Dr, Mississauga, ON L5S 1H3',
    line2: 'Sunday Meeting Time: 9:30 AM to 1:00 PM (Canada time)',
    mapLink: 'https://maps.app.goo.gl/VE3HMa6TMKzAVXMz8',
  },
  {
    id: 'intl-6',
    name: 'ANM SURREY, CANADA CHURCH',
    category: 'international',
    line1: 'Bethany Newton United Church, 14853 60 Avenue, Surrey, BC V35 3H8',
    line2: 'Sunday Meeting Time: 6:30 AM to 10:30 AM (Surrey time)',
    mapLink: 'https://maps.app.goo.gl/jta7KZgJTwwSfUF86',
  },
  {
    id: 'intl-7',
    name: 'ANM EDMONTON, CANADA CHURCH',
    category: 'international',
    line1: '9158 23 Ave NW, Edmonton, AB T6N 1H9',
    line2: 'Sunday Meeting Time: 7:30 AM to 11:30 AM (Canada time)',
    mapLink: 'https://maps.app.goo.gl/3EcnwyZjpLVNVMsRA',
  },
  {
    id: 'intl-8',
    name: 'ANM MONTREAL, CANADA CHURCH',
    category: 'international',
    line1: '8386 Boul. Saint Laurent, Montreal, QC H2P 2M3',
    line2: 'Sunday Meeting Time: 9:30 AM to 1:00 PM (Montreal time)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20MONTREAL%2C%20CANADA%20CHURCH%2C%208386%20Boul.%20Saint%20Laurent%2C%20Montreal%2C%20QC%20H2P%202M3',
  },
  {
    id: 'intl-9',
    name: 'ANM WINNIPEG, CANADA CHURCH',
    category: 'international',
    line1: 'RU Banquet Hall Inc., 56 Keewaten St, Winnipeg, MB R3E 3C4',
    line2: 'Sunday Meeting Time: 7:30 AM to 11:30 AM (Winnipeg time)',
    mapLink: 'https://maps.app.goo.gl/a8uDcBU4VVxNkkKS6',
  },
  {
    id: 'intl-10',
    name: 'ANM MANCHESTER, UK CHURCH',
    category: 'international',
    line1: '27-29 Maine Rd, Greater, Rusholme, Manchester M14 4FS',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (Manchester, UK time)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20MANCHESTER%2C%20UK%20CHURCH%2C%2027-29%20Maine%20Rd%2C%20Greater%2C%20Rusholme%2C%20Manchester%20M14%204FS',
  },
  {
    id: 'intl-11',
    name: 'ANM LEICESTER, UK CHURCH',
    category: 'international',
    line1: 'The Grove Community Hub, Cort Cres, Leicester LE3 1QZ',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (Leicester time)',
    mapLink: 'https://maps.app.goo.gl/TwH2HSvv8gmtJiYL6',
  },
  {
    id: 'intl-12',
    name: 'ANM ILFORD, UK CHURCH',
    category: 'international',
    line1: '1 Cricklefield Place, Ilford IG1 1FY (Near Seven Kings Station)',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (UK time)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20ILFORD%2C%20UK%20CHURCH%2C%201%20Cricklefield%20Place%2C%20Ilford%20IG1%201FY%20%28Near%20Seven%20Kings%20Station%29',
  },
  {
    id: 'intl-13',
    name: 'ANM BIRMINGHAM, UK CHURCH',
    category: 'international',
    line1: 'St George’s Community Hub, Great Hampton Row, Birmingham B19 3JG',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (Birmingham, UK time)',
    mapLink: 'https://maps.app.goo.gl/dxFoNqKZZurKpii4A',
  },
  {
    id: 'intl-14',
    name: 'ANM OXFORD, UK CHURCH',
    category: 'international',
    line1: 'North Oxford Association, Diamond Place, Summer town, Oxford OX2 7DP',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (Oxford, UK time)',
    mapLink: 'https://maps.app.goo.gl/mYum1EodQVxHGGEv5',
  },
  {
    id: 'intl-15',
    name: 'ANM SOUTHALL, LONDON, UK CHURCH',
    category: 'international',
    line1: 'Villiers High School, Boyd Ave, Southall UB1 3BT',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (Southall, UK time)',
    mapLink: 'https://maps.app.goo.gl/BH88Phb4vFovYtbAA',
  },
  {
    id: 'intl-16',
    name: 'ANM HARROW, LONDON, UK CHURCH',
    category: 'international',
    line1: 'Masefield Suite, Harrow Leisure Centre, Christ church Ave, Harrow HA3 5BD',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (UK time)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20HARROW%2C%20LONDON%2C%20UK%20CHURCH%2C%20Masefield%20Suite%2C%20Harrow%20Leisure%20Centre%2C%20Christ%20church%20Ave%2C%20Harrow%20HA3%205BD',
  },
  {
    id: 'intl-17',
    name: 'ANM GLASGOW, SCOTLAND, UK CHURCH',
    category: 'international',
    line1: 'Destiny Hope Hub, 37 S Portland Street, Glasgow – G5 9JL, United Kingdom',
    line2: 'Sunday Meeting Time: 2:30 PM to 6:30 PM (Scotland, UK time)',
    mapLink: 'https://maps.app.goo.gl/9Uq1rxtzoGKYszmb6',
  },
  {
    id: 'intl-18',
    name: 'ANM DALLAS, TEXAS, USA CHURCH',
    category: 'international',
    line1: '1981 N Central Expy, Richardson, Dallas, TX 75080, USA',
    line2: 'Sunday Meeting Time: 8:30 AM to 1:00 PM (Texas, USA time)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20DALLAS%2C%20TEXAS%2C%20USA%20CHURCH%2C%201981%20N%20Central%20Expy%2C%20Richardson%2C%20Dallas%2C%20TX%2075080%2C%20USA',
  },
  {
    id: 'intl-19',
    name: 'ANM SEATTLE, WASHINGTON, USA CHURCH',
    category: 'international',
    line1: '11925 SE 238th Pl, Kent, WA 98031, USA',
    line2: 'Sunday Meeting Time: 5:30 AM to 10:30 AM (Seattle, Washington time)',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20SEATTLE%2C%20WASHINGTON%2C%20USA%20CHURCH%2C%2011925%20SE%20238th%20Pl%2C%20Kent%2C%20WA%2098031%2C%20USA',
  },
  {
    id: 'intl-20',
    name: 'ANM SUGAR LAND, TEXAS, USA CHURCH',
    category: 'international',
    line1: 'Hilton Garden Inn Sugar Land, 722 Bonaventure Pl',
    line2: 'Sugar Land, TX 77479, Texas, USA.',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=ANM%20SUGAR%20LAND%2C%20TEXAS%2C%20USA%20CHURCH%2C%20Hilton%20Garden%20Inn%20Sugar%20Land%2C%20722%20Bonaventure%20Pl%2C%20Sugar%20Land%2C%20TX%2077479%2C%20SUGARLAND%20TEXAS',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const BranchesDirectorySection: React.FC<BranchesDirectorySectionProps> = ({
  directoryHeaderTitle = 'ANM CHURCHES IN INDIA',
  nationalBranches,
  internationalBranches,
}) => {
  const [activeTab, setActiveTab] = useState<'national' | 'international'>('national')
  const [searchQuery, setSearchQuery] = useState('')

  const natList = nationalBranches && nationalBranches.length > 0 ? nationalBranches : DEFAULT_NATIONAL_BRANCHES
  const intlList = internationalBranches && internationalBranches.length > 0 ? internationalBranches : DEFAULT_INTERNATIONAL_BRANCHES

  const currentDataset = activeTab === 'national' ? natList : intlList

  const filteredBranches = useMemo(() => {
    if (!searchQuery.trim()) return currentDataset
    const query = searchQuery.toLowerCase()
    return currentDataset.filter(
      (b) =>
        b.name?.toLowerCase().includes(query) ||
        b.line1?.toLowerCase().includes(query) ||
        b.line2?.toLowerCase().includes(query)
    )
  }, [currentDataset, searchQuery])

  return (
    <section className="relative py-4 sm:py-8 md:py-10 bg-white" data-node-id="286:2998">
      {/* Full-width Navy Header Bar with edge-to-edge Gold Accent Bars (Figma 286:3011) */}
      <div className="w-full bg-[#122f4a] h-[60px] sm:h-[70px] md:h-[80px] text-white relative shadow-sm mb-8 sm:mb-12 flex items-center">
        <div className="w-full flex items-center justify-between">
          {/* Left Gold Accent Bar */}
          <GoldBarReveal
            direction="left"
            delay={0.1}
            className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[10px] sm:h-[16px] md:h-[20px] bg-[#efbf04] flex-shrink-0"
          />

          {/* Heading (Figma 286:3019: Poppins SemiBold 34px) */}
          <TextWordReveal
            as="h2"
            delay={0.15}
            className="font-poppins font-semibold text-white text-base sm:text-2xl md:text-[30px] lg:text-[34px] tracking-wide text-center px-2 sm:px-6 flex-shrink min-w-0 uppercase"
          >
            {directoryHeaderTitle || 'ANM CHURCHES IN INDIA'}
          </TextWordReveal>

          {/* Right Gold Accent Bar */}
          <GoldBarReveal
            direction="right"
            delay={0.1}
            className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[10px] sm:h-[16px] md:h-[20px] bg-[#efbf04] flex-shrink-0"
          />
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Controls Row: Search Input (560px) + Switcher Pill (560px) (Figma 286:3020, 286:3021) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 mb-10 sm:mb-14"
        >
          {/* Search Box */}
          <div className="w-full lg:w-[560px] h-[64px] sm:h-[79px] rounded-[100px] border border-[#c3c3c3] bg-white px-5 sm:px-8 flex items-center gap-3 sm:gap-4 shadow-sm transition-all focus-within:border-[#efbf04] focus-within:ring-2 focus-within:ring-[#efbf04]/20">
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
              <Image
                src="/figma-assets/4fd5f898eb3b4b7bbeeaaf6c3f1ebf7aa6384c08.svg"
                alt="Search"
                fill
                className="object-contain"
              />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search our churches in all locations..........."
              className="w-full bg-transparent font-poppins text-[#08091b] placeholder-[#6b6b6b] text-sm sm:text-[18px] focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs font-semibold text-slate-400 hover:text-slate-600 uppercase font-poppins"
              >
                Clear
              </button>
            )}
          </div>

          {/* National / International Pill Switcher Container (Figma 286:3021: 560px x 79px) */}
          <div className="w-full lg:w-[560px] h-[64px] sm:h-[79px] rounded-[100px] bg-[#122f4a] p-1.5 sm:p-[10px] flex items-center justify-between shadow-md relative">
            {/* National Tab */}
            <button
              type="button"
              onClick={() => setActiveTab('national')}
              className={`relative z-10 w-1/2 h-[52px] sm:h-[59px] rounded-[100px] flex items-center justify-center font-poppins font-semibold text-base sm:text-[20px] transition-colors duration-300 ${
                activeTab === 'national' ? 'text-[#003370]' : 'text-[#5b718b] hover:text-white'
              }`}
            >
              {activeTab === 'national' && (
                <motion.div
                  layoutId="activeBranchTabPill"
                  className="absolute inset-0 rounded-[100px] bg-[#efbf04] shadow-sm -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              National
            </button>

            {/* International Tab */}
            <button
              type="button"
              onClick={() => setActiveTab('international')}
              className={`relative z-10 w-1/2 h-[52px] sm:h-[59px] rounded-[100px] flex items-center justify-center font-poppins font-semibold text-base sm:text-[20px] transition-colors duration-300 ${
                activeTab === 'international' ? 'text-[#003370]' : 'text-[#5b718b] hover:text-white'
              }`}
            >
              {activeTab === 'international' && (
                <motion.div
                  layoutId="activeBranchTabPill"
                  className="absolute inset-0 rounded-[100px] bg-[#efbf04] shadow-sm -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              International
            </button>
          </div>
        </motion.div>

        {/* Exact Figma 3-Column Card Grid (Figma 286:3024 - 286:3190) */}
        <AnimatePresence mode="wait">
          {filteredBranches.length > 0 ? (
            <motion.div
              key={`${activeTab}-${searchQuery ? 'search' : 'all'}`}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[20px] sm:gap-y-[25px] gap-x-[16px] sm:gap-x-[19px] items-stretch"
            >
              {filteredBranches.map((branch, index) => {
                const mapUrl = getBranchMapUrl(branch)
                return (
                  <motion.div
                    key={branch.id || `${branch.name}-${index}`}
                    variants={itemVariants}
                    className="w-full max-w-[367px] mx-auto h-full flex"
                  >
                    <motion.a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="group flex flex-col w-full h-full min-h-[180px] sm:min-h-[195px] bg-[#e2e8f0] hover:bg-[#d8e2ed] rounded-[20px] p-5 sm:p-6 text-center shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                      title={`Open ${branch.name} location in Google Maps`}
                    >
                      {/* Circular Navy Pin Icon (Figma 286:3133: 51px x 51px) */}
                      <div className="w-[44px] h-[44px] sm:w-[51px] sm:h-[51px] rounded-full bg-[#003370] group-hover:bg-[#122f4a] group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-2.5 sm:mb-3 mx-auto shadow-inner flex-shrink-0">
                        <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                          <Image
                            src="/figma-assets/cea6bf075d6de355f7c9db3e3cbd7c2bbf60a068.svg"
                            alt="Pin"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Branch Title (Figma 286:3104: Poppins SemiBold 20px #003370) */}
                      <h3 className="font-poppins font-semibold text-[#003370] group-hover:text-[#0a274c] text-base sm:text-[20px] leading-snug mb-1.5 uppercase tracking-tight">
                        {branch.name}
                      </h3>

                      {/* Address (Figma 286:3160: Poppins Regular 16px #08091b) */}
                      <p className="font-poppins font-normal text-[#08091b] text-xs sm:text-[15px] leading-relaxed">
                        {branch.line1}
                        <br />
                        {branch.line2}
                      </p>
                    </motion.a>
                  </motion.div>
                )
              })}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 bg-[#e2e8f0] rounded-[20px] max-w-lg mx-auto p-8"
            >
              <h4 className="font-poppins font-semibold text-[#003370] text-lg mb-1">No Branches Found</h4>
              <p className="font-poppins text-slate-600 text-sm mb-4">
                We couldn&apos;t find any church branch matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-2 rounded-full bg-[#122f4a] text-white text-xs font-semibold hover:bg-[#003370] hover:text-[#efbf04] transition-all"
              >
                Reset Search
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

