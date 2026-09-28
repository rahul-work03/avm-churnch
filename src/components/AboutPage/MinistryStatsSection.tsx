'use client'

import React from 'react'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/reveal'
import { TextWordReveal, GoldBarReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
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
    <section className="relative overflow-hidden mb-8 sm:mb-12 md:mb-14 shadow-lg" data-node-id="275:831">
      <SacredCanvas tone="midnight-sapphire" className="py-8 sm:py-10 md:py-12">
        {/* Section Header */}
        <EditorialSectionHeader
          eyebrow="GLOBAL MINISTRY IMPACT"
          title={headerTitle}
          variant="atmospheric"
          className="mb-6 sm:mb-8"
        />

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
                  idx !== activeStats.length - 1 ? 'border-r border-amber-400/25' : ''
                }`}
              >
                <p className="font-philosopher font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffe787] via-[#efbf04] to-[#d4a302] text-xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] tracking-tight">
                  <CountUp
                    value={stat.value}
                    duration={2.0}
                    delay={0.2 + idx * 0.12}
                  />
                </p>
                <p className="font-poppins text-slate-200 text-xs sm:text-base md:text-xl lg:text-[22px] mt-1 sm:mt-2 leading-tight">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SacredCanvas>
    </section>
  )
}
