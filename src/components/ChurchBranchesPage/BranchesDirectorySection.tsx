'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/reveal'

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
  },
  {
    id: 'in-2',
    name: 'ANM AMRITSAR CHURCH',
    category: 'national',
    line1: 'Opposite Celebration Mall, Batala Road',
    line2: 'Amritsar, Punjab.',
  },
  {
    id: 'in-3',
    name: 'ANM LUDHIANA CHURCH',
    category: 'national',
    line1: 'Near Aarti Cinema, Ferozepur Road',
    line2: 'Ludhiana, Punjab.',
  },
  {
    id: 'in-4',
    name: 'ANM PATIALA CHURCH',
    category: 'national',
    line1: 'Near Thapar University, Bhupindra Road',
    line2: 'Patiala, Punjab.',
  },
  {
    id: 'in-5',
    name: 'ANM BATHINDA CHURCH',
    category: 'national',
    line1: 'Goniana Road, Near Lake View',
    line2: 'Bathinda, Punjab.',
  },
  {
    id: 'in-6',
    name: 'ANM JALANDHAR CANTT CHURCH',
    category: 'national',
    line1: 'Near Rama Mandi Chowk, Hoshiarpur Road',
    line2: 'Jalandhar Cantt, Punjab.',
  },
  {
    id: 'in-7',
    name: 'ANM HOSHIARPUR CHURCH',
    category: 'national',
    line1: 'Near Shimla By-pass, Chandigarh Road',
    line2: 'Hoshiarpur, Punjab.',
  },
  {
    id: 'in-8',
    name: 'ANM CHANDIGARH / MOHALI CHURCH',
    category: 'national',
    line1: 'Phase 7, Industrial Area, Sector 73',
    line2: 'Mohali, Punjab.',
  },
  {
    id: 'in-9',
    name: 'ANM DELHI NCR CHURCH',
    category: 'national',
    line1: 'Near Rohini West Metro Station, Sector 11',
    line2: 'Rohini, New Delhi.',
  },
  {
    id: 'in-10',
    name: 'ANM GURDASPUR CHURCH',
    category: 'national',
    line1: 'Tibri Road, Near Civil Hospital',
    line2: 'Gurdaspur, Punjab.',
  },
  {
    id: 'in-11',
    name: 'ANM PATHANKOT CHURCH',
    category: 'national',
    line1: 'Dalhousie Road, Near Mamun Cantt',
    line2: 'Pathankot, Punjab.',
  },
  {
    id: 'in-12',
    name: 'ANM KAPURTHALA CHURCH',
    category: 'national',
    line1: 'Sultanpur Lodhi Road',
    line2: 'Kapurthala, Punjab.',
  },
  {
    id: 'in-13',
    name: 'ANM TARN TARAN CHURCH',
    category: 'national',
    line1: 'Near Bye Pass Chowk, Jandiala Road',
    line2: 'Tarn Taran, Punjab.',
  },
  {
    id: 'in-14',
    name: 'ANM MOGA CHURCH',
    category: 'national',
    line1: 'GT Road, Near Nature Park',
    line2: 'Moga, Punjab.',
  },
  {
    id: 'in-15',
    name: 'ANM SANGRUR CHURCH',
    category: 'national',
    line1: 'Patiala Bypass Road, Near Bus Stand',
    line2: 'Sangrur, Punjab.',
  },
  {
    id: 'in-16',
    name: 'ANM MUKTSAR CHURCH',
    category: 'national',
    line1: 'Kotkapura Road, Near Civil Hospital',
    line2: 'Sri Muktsar Sahib, Punjab.',
  },
  {
    id: 'in-17',
    name: 'ANM FAZILKA CHURCH',
    category: 'national',
    line1: 'Malout Road, Near Grain Market',
    line2: 'Fazilka, Punjab.',
  },
  {
    id: 'in-18',
    name: 'ANM BARNALA CHURCH',
    category: 'national',
    line1: 'Handiaya Road, Near Railway Crossing',
    line2: 'Barnala, Punjab.',
  },
  {
    id: 'in-19',
    name: 'ANM MANSA CHURCH',
    category: 'national',
    line1: 'Cinema Road, Near Water Works',
    line2: 'Mansa, Punjab.',
  },
  {
    id: 'in-20',
    name: 'ANM FARIDKOT CHURCH',
    category: 'national',
    line1: 'Talwandi Road, Near Medical College',
    line2: 'Faridkot, Punjab.',
  },
  {
    id: 'in-21',
    name: 'ANM ROPAR CHURCH',
    category: 'national',
    line1: 'Bela Road, Near Haveli',
    line2: 'Rupnagar, Punjab.',
  },
  {
    id: 'in-22',
    name: 'ANM NAWANSHAHR CHURCH',
    category: 'national',
    line1: 'Chandigarh Road, Near ITI',
    line2: 'Shaheed Bhagat Singh Nagar, Punjab.',
  },
  {
    id: 'in-23',
    name: 'ANM FATEHGARH SAHIB CHURCH',
    category: 'national',
    line1: 'Sirhind - Morinda Road',
    line2: 'Fatehgarh Sahib, Punjab.',
  },
  {
    id: 'in-24',
    name: 'ANM MALERKOTLA CHURCH',
    category: 'national',
    line1: 'Ludhiana Bypass, Near Jamia',
    line2: 'Malerkotla, Punjab.',
  },
  {
    id: 'in-25',
    name: 'ANM BATALA CHURCH',
    category: 'national',
    line1: 'Jalandhar Road, Near Gandhi Chowk',
    line2: 'Batala, Punjab.',
  },
  {
    id: 'in-26',
    name: 'ANM KHANNA CHURCH',
    category: 'national',
    line1: 'GT Road, Near City Center',
    line2: 'Khanna, Punjab.',
  },
  {
    id: 'in-27',
    name: 'ANM PHAGWARA CHURCH',
    category: 'national',
    line1: 'Hoshiarpur Road, Near Sugar Mill',
    line2: 'Phagwara, Punjab.',
  },
]

const DEFAULT_INTERNATIONAL_BRANCHES: ChurchBranch[] = [
  {
    id: 'intl-1',
    name: 'ANM UNITED KINGDOM CHURCH',
    category: 'international',
    line1: 'The Green, Southall / Slough Region',
    line2: 'Greater London, United Kingdom.',
  },
  {
    id: 'intl-2',
    name: 'ANM CANADA CHURCH',
    category: 'international',
    line1: 'Steeles Ave East, Brampton',
    line2: 'Greater Toronto Area, Ontario, Canada.',
  },
  {
    id: 'intl-3',
    name: 'ANM UNITED STATES CHURCH',
    category: 'international',
    line1: 'South Bay Boulevard, Silicon Valley Area',
    line2: 'California, USA.',
  },
  {
    id: 'intl-4',
    name: 'ANM UAE DUBAI CHURCH',
    category: 'international',
    line1: 'Al Quoz Industrial Area 3',
    line2: 'Dubai, United Arab Emirates.',
  },
  {
    id: 'intl-5',
    name: 'ANM AUSTRALIA CHURCH',
    category: 'international',
    line1: 'Western Highway, Caroline Springs',
    line2: 'Melbourne, Victoria, Australia.',
  },
  {
    id: 'intl-6',
    name: 'ANM ITALY CHURCH',
    category: 'international',
    line1: 'Via Milano, Brescia',
    line2: 'Lombardy, Italy.',
  },
  {
    id: 'intl-7',
    name: 'ANM GERMANY CHURCH',
    category: 'international',
    line1: 'Mainzer Landstraße',
    line2: 'Frankfurt am Main, Germany.',
  },
  {
    id: 'intl-8',
    name: 'ANM NEW ZEALAND CHURCH',
    category: 'international',
    line1: 'Great South Road, Manukau',
    line2: 'Auckland, New Zealand.',
  },
  {
    id: 'intl-9',
    name: 'ANM FRANCE CHURCH',
    category: 'international',
    line1: 'Avenue de Paris, Saint-Denis',
    line2: 'Greater Paris, France.',
  },
]

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
    <section className="relative py-4 sm:py-8 md:py-10 bg-[#f8fafc]" data-node-id="286:2998">
      {/* Full-width Navy Header Bar with edge-to-edge Gold Accent Bars (Figma 286:3011) */}
      <RevealOnScroll direction="up" delay={0.1}>
        <div className="w-full bg-[#122f4a] h-[60px] sm:h-[70px] md:h-[80px] text-white relative shadow-sm mb-8 sm:mb-12 flex items-center">
          <div className="w-full flex items-center justify-between">
            {/* Left Gold Accent Bar */}
            <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[10px] sm:h-[16px] md:h-[20px] bg-[#efbf04] flex-shrink-0" />

            {/* Heading (Figma 286:3019: Poppins SemiBold 34px) */}
            <h2 className="font-poppins font-semibold text-white text-base sm:text-2xl md:text-[30px] lg:text-[34px] tracking-wide text-center px-2 sm:px-6 flex-shrink min-w-0 uppercase">
              {directoryHeaderTitle || 'ANM CHURCHES IN INDIA'}
            </h2>

            {/* Right Gold Accent Bar */}
            <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[10px] sm:h-[16px] md:h-[20px] bg-[#efbf04] flex-shrink-0" />
          </div>
        </div>
      </RevealOnScroll>


      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Controls Row: Search Input (560px) + Switcher Pill (560px) (Figma 286:3020, 286:3021) */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
            {/* Search Box */}
            <div className="w-full lg:w-[560px] h-[64px] sm:h-[79px] rounded-[100px] border border-[#c3c3c3] bg-white px-5 sm:px-8 flex items-center gap-3 sm:gap-4 shadow-sm">
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
            <div className="w-full lg:w-[560px] h-[64px] sm:h-[79px] rounded-[100px] bg-[#122f4a] p-1.5 sm:p-[10px] flex items-center justify-between shadow-md">
              {/* National Tab */}
              <button
                type="button"
                onClick={() => setActiveTab('national')}
                className={`w-1/2 h-[52px] sm:h-[59px] rounded-[100px] flex items-center justify-center font-poppins font-semibold text-base sm:text-[20px] transition-all duration-300 ${
                  activeTab === 'national'
                    ? 'bg-[#efbf04] text-[#003370] shadow-sm'
                    : 'text-[#5b718b] hover:text-white'
                }`}
              >
                National
              </button>

              {/* International Tab */}
              <button
                type="button"
                onClick={() => setActiveTab('international')}
                className={`w-1/2 h-[52px] sm:h-[59px] rounded-[100px] flex items-center justify-center font-poppins font-semibold text-base sm:text-[20px] transition-all duration-300 ${
                  activeTab === 'international'
                    ? 'bg-[#efbf04] text-[#003370] shadow-sm'
                    : 'text-[#5b718b] hover:text-white'
                }`}
              >
                International
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Exact Figma 3-Column Card Grid (Figma 286:3024 - 286:3190) */}
        {filteredBranches.length > 0 ? (
          <StaggerContainer
            key={`${activeTab}-${searchQuery}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[20px] sm:gap-y-[25px] gap-x-[16px] sm:gap-x-[19px]"
            staggerDelay={0.04}
          >
            {filteredBranches.map((branch, index) => {
              const mapUrl = getBranchMapUrl(branch)
              return (
                <StaggerItem
                  key={branch.id || `${branch.name}-${index}`}
                  className="w-full max-w-[367px] mx-auto"
                >
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full min-h-[175px] sm:min-h-[185px] bg-[#e2e8f0] hover:bg-[#d8e2ed] rounded-[20px] p-5 sm:p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    title={`Open ${branch.name} location in Google Maps`}
                  >
                    {/* Circular Navy Pin Icon (Figma 286:3133: 51px x 51px) */}
                    <div className="w-[44px] h-[44px] sm:w-[51px] sm:h-[51px] rounded-full bg-[#003370] group-hover:bg-[#122f4a] group-hover:scale-110 transition-all flex items-center justify-center mb-2.5 sm:mb-3 mx-auto shadow-inner">
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
                    <h3 className="font-poppins font-semibold text-[#003370] group-hover:text-[#0a274c] text-base sm:text-[20px] leading-tight mb-1 uppercase tracking-tight">
                      {branch.name}
                    </h3>

                    {/* Address (Figma 286:3160: Poppins Regular 16px #08091b) */}
                    <p className="font-poppins font-normal text-[#08091b] text-xs sm:text-[16px] leading-[1.35]">
                      {branch.line1}
                      <br />
                      {branch.line2}
                    </p>
                  </a>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        ) : (
          <div className="text-center py-16 bg-[#e2e8f0] rounded-[20px] max-w-lg mx-auto p-8">
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
          </div>
        )}
      </div>
    </section>
  )
}
