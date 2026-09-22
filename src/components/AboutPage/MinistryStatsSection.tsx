'use client'

import React from 'react'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/reveal'
import { CountUp } from '@/components/ui/count-up'

export interface StatItem {
  value: string
  label: string
}

export interface MinistryStatsSectionProps {
  headerTitle?: string
  stats?: StatItem[]
}

const DEFAULT_STATS: StatItem[] = [
  { value: '500,000+', label: 'Weekly Attendees' },
  { value: '200+', label: 'Branches Worldwide' },
  { value: '2008', label: 'Year Established' },
]

export const MinistryStatsSection: React.FC<MinistryStatsSectionProps> = ({
  headerTitle = 'Ministry Statistics',
  stats,
}) => {
  const activeStats = stats && stats.length > 0 ? stats : DEFAULT_STATS

  return (
    <section className="relative py-8 sm:py-10 md:py-12 bg-[#122f4a] text-white overflow-hidden my-6 sm:my-10 md:my-14" data-node-id="275:831">
      {/* Section Header with Left & Right Gold Bars */}
      <RevealOnScroll direction="none" duration={0.6} className="w-full flex items-center justify-between">
        <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-r-full shadow-sm flex-shrink-0" />

        <div className="flex items-center justify-center gap-2 sm:gap-4 px-3 sm:px-6 md:px-8 flex-shrink min-w-0">
          <div
            className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04]"
            style={{
              maskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
              WebkitMaskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
          <h2 className="font-poppins font-semibold text-white text-xl sm:text-2xl md:text-[34px] tracking-tight text-center whitespace-nowrap">
            {headerTitle}
          </h2>
          <div
            className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
            style={{
              maskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
              WebkitMaskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
        </div>

        <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-l-full shadow-sm flex-shrink-0" />
      </RevealOnScroll>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Stats Columns */}
        <StaggerContainer
          staggerDelay={0.12}
          className="mt-6 sm:mt-8 md:mt-10 max-w-[1040px] mx-auto grid grid-cols-3 gap-2 sm:gap-4 items-center"
        >
          {activeStats.map((stat, idx) => (
            <StaggerItem
              key={idx}
              direction="up"
              distance={20}
              duration={0.6}
              className={`text-center px-2 sm:px-6 ${
                idx !== activeStats.length - 1 ? 'border-r border-white/20' : ''
              }`}
            >
              <p className="font-poppins font-semibold sm:font-bold text-[#efbf04] text-lg sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[40px] tracking-tight">
                <CountUp
                  value={stat.value}
                  duration={2.0}
                  delay={0.2 + idx * 0.12}
                />
              </p>
              <p className="font-poppins text-slate-200 text-xs sm:text-base md:text-xl lg:text-[24px] mt-1 sm:mt-2 leading-tight">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
