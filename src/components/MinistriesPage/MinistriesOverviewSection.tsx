'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface MinistryCardItem {
  id?: string
  title: string
  subtitle: string
  image?: any
  imageFallback?: string
  linkUrl: string
  buttonLabel?: string
}

export interface MinistriesOverviewSectionProps {
  headerTitle?: string
  cards?: MinistryCardItem[]
}

const DEFAULT_MINISTRIES: MinistryCardItem[] = [
  {
    id: 'prayer-mountain',
    title: 'PRAYER MOUNTAIN',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/figma-assets/36eda1c5a6d082acb6e73e8881c8595815a11a60.png',
    linkUrl: '/prayer-mountain',
    buttonLabel: 'Learn More',
  },
  {
    id: 'prayer-house',
    title: 'PRAYER HOUSE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/figma-assets/55fa90036842a75181669f3a6aec9e0738913aee.png',
    linkUrl: '/prayer-house',
    buttonLabel: 'Learn More',
  },
  {
    id: 'bible-college',
    title: 'BIBLE COLLEGE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/figma-assets/94a1faeb119e4d3406e3e61f9268b121e7b5496f.png',
    linkUrl: '/bible-college',
    buttonLabel: 'Learn More',
  },
  {
    id: 'sophia-institute',
    title: 'SOPHIA INSTITUTE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/figma-assets/38c0e2d311bde0d312937a97c60e92a2e2d34116.png',
    linkUrl: '/sophia-institute',
    buttonLabel: 'Learn More',
  },
  {
    id: 'church-branches',
    title: 'CHURCH BRANCHES',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/figma-assets/9969ab6a5c61f58502b9d0ffdb0cac71eff778d2.png',
    linkUrl: '/church-branches',
    buttonLabel: 'Learn More',
  },
  {
    id: 'sunday-school',
    title: 'SUNDAY SCHOOL',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/figma-assets/dcd3dfff5990d32ed5316ae442144e3f269cdb3e.png',
    linkUrl: '/sunday-school',
    buttonLabel: 'Learn More',
  },
]

export const MinistriesOverviewSection: React.FC<MinistriesOverviewSectionProps> = ({
  headerTitle = 'Ministries of Over View',
  cards,
}) => {
  const activeCards = cards && cards.length > 0 ? cards : DEFAULT_MINISTRIES

  return (
    <section className="relative py-10 sm:py-16 md:py-24 bg-transparent overflow-hidden" data-node-id="277:1632">
      {/* Section Header with Golden Accent Lines and Emblems */}
      <RevealOnScroll direction="none" duration={0.6} className="w-full flex items-center justify-between mb-8 sm:mb-12 md:mb-16">
        {/* Left Gold Bar */}
        <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[5px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm flex-shrink-0" />

        {/* Center Title with Golden Emblems */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 px-2 sm:px-6 flex-shrink min-w-0">
          <div
            className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 bg-[#efbf04] flex-shrink-0"
            style={{
              maskImage: "url('/figma-assets/fef4ed678da919c6b52b3c402e3d3f41e5084014.png')",
              WebkitMaskImage: "url('/figma-assets/fef4ed678da919c6b52b3c402e3d3f41e5084014.png')",
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />

          <h2 className="font-poppins font-semibold text-[#003471] text-base sm:text-2xl md:text-[34px] tracking-tight text-center whitespace-nowrap">
            {headerTitle}
          </h2>

          <div
            className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 bg-[#efbf04] flex-shrink-0 scale-x-[-1]"
            style={{
              maskImage: "url('/figma-assets/fef4ed678da919c6b52b3c402e3d3f41e5084014.png')",
              WebkitMaskImage: "url('/figma-assets/fef4ed678da919c6b52b3c402e3d3f41e5084014.png')",
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
        </div>

        {/* Right Gold Bar */}
        <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[5px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm flex-shrink-0" />
      </RevealOnScroll>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 6-Card Grid: Directly linking to dedicated sub-pages */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1140px] mx-auto justify-items-center"
        >
          {activeCards.map((item, idx) => {
            const resolvedImg = getMediaUrl(item.image, item.imageFallback || '/figma-assets/36eda1c5a6d082acb6e73e8881c8595815a11a60.png')
            const targetUrl = item.linkUrl || `/${item.id || 'ministries'}`
            const btnLabel = item.buttonLabel || 'Learn More'

            return (
              <StaggerItem
                key={item.id || idx}
                direction="up"
                distance={24}
                duration={0.6}
                className="w-full max-w-[380px] md:max-w-[367px] h-auto md:h-[451px] bg-white border border-[#eee] rounded-[20px] p-5 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 group"
              >
                {/* Card Image */}
                <Link href={targetUrl} className="block w-full cursor-pointer">
                  <div className="relative w-full h-[220px] sm:h-[241px] rounded-[12px] overflow-hidden bg-slate-100 mb-4 flex-shrink-0">
                    <Image
                      src={resolvedImg}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Title */}
                <h3 className="font-poppins font-bold text-[#003471] text-base sm:text-[18px] tracking-wide mb-1.5">
                  <Link href={targetUrl} className="hover:text-[#d5582a] transition-colors">
                    {item.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="font-poppins text-[#333333] text-xs sm:text-[16px] leading-relaxed mb-4 max-w-[290px] line-clamp-2">
                  {item.subtitle}
                </p>

                {/* Direct Link Button */}
                <div className="mt-auto pt-1">
                  <Link
                    href={targetUrl}
                    className="w-[138px] h-[44px] bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-poppins font-semibold text-xs sm:text-[14px] rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-95 cursor-pointer flex items-center justify-center"
                  >
                    {btnLabel}
                  </Link>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
