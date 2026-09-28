'use client'

import React from 'react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, BlurTextReveal, GoldBarReveal } from '@/components/ui/text-reveal'

import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'

export interface VisionMissionSectionProps {
  identityBadge?: string
  headerTitle?: string
  visionTitle?: string
  visionDescription?: string
  missionTitle?: string
  missionDescription?: string
}

export const VisionMissionSection: React.FC<VisionMissionSectionProps> = ({
  identityBadge = 'Our Identity',
  headerTitle = 'Our Vision and Our Mission',
  visionTitle = 'Our Vision',
  visionDescription = '“Not one soul would be lost” — The ministry aims to see a global revival of faith, hope, and love through the transformative power of Jesus Christ.',
  missionTitle = 'Our Mission',
  missionDescription = 'Spreading the Gospel of Jesus Christ. Leading people into a personal relationship with God. Demonstrating His power through healing, deliverance, and transformation.',
}) => {
  return (
    <section className="relative pt-2 pb-8 sm:pb-12 md:pb-14 bg-transparent" data-node-id="275:810">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Identity & Vision Header Plaque */}
        <EditorialSectionHeader
          eyebrow={identityBadge}
          title={headerTitle}
          variant="plaque"
          className="-mb-5 sm:-mb-10 md:-mb-12"
        />

        {/* Mobile View: 2 Distinct Stacked Cards */}
        <div className="md:hidden space-y-3 pt-8">
          <RevealOnScroll direction="up" distance={20} duration={0.5}>
            <div className="bg-white border border-[#e7e7e7] rounded-[18px] p-5 shadow-sm text-left">
              <TextWordReveal
                as="h3"
                delay={0.05}
                className="font-poppins font-semibold text-[#003471] text-[18px]"
              >
                {visionTitle}
              </TextWordReveal>
              <BlurTextReveal
                as="p"
                delay={0.15}
                duration={0.6}
                className="font-poppins text-[#333333] text-[12px] leading-relaxed mt-2"
              >
                {visionDescription}
              </BlurTextReveal>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" distance={20} duration={0.5} delay={0.1}>
            <div className="bg-white border border-[#e7e7e7] rounded-[18px] p-5 shadow-sm text-left">
              <TextWordReveal
                as="h3"
                delay={0.05}
                className="font-poppins font-semibold text-[#003471] text-[18px]"
              >
                {missionTitle}
              </TextWordReveal>
              <BlurTextReveal
                as="p"
                delay={0.15}
                duration={0.6}
                className="font-poppins text-[#333333] text-[12px] leading-relaxed mt-2"
              >
                {missionDescription}
              </BlurTextReveal>
            </div>
          </RevealOnScroll>
        </div>

        {/* Desktop View: Unified 2-Column Vision & Mission Card */}
        <RevealOnScroll direction="up" distance={24} duration={0.7} delay={0.1} className="hidden md:block">
          <div className="bg-white rounded-[44px] shadow-2xl pt-16 lg:pt-20 pb-8 lg:pb-12 px-8 lg:px-14 border border-slate-100 relative z-10">
            <div className="grid grid-cols-2 gap-8 lg:gap-12 relative">
              {/* Column 1: Our Vision */}
              <div className="text-left flex flex-col justify-start">
                <TextWordReveal
                  as="h3"
                  delay={0.1}
                  staggerDelay={0.04}
                  className="font-poppins font-semibold text-[#d5582a] text-[26px] lg:text-[32px] tracking-tight"
                >
                  {visionTitle}
                </TextWordReveal>
                <BlurTextReveal
                  as="p"
                  delay={0.25}
                  duration={0.65}
                  className="font-poppins text-[#333333] text-[15px] lg:text-[17px] leading-relaxed mt-3 lg:mt-4"
                >
                  {visionDescription}
                </BlurTextReveal>
              </div>

              {/* Vertical Divider */}
              <div className="absolute left-1/2 top-2 bottom-2 w-px bg-slate-200 -translate-x-1/2" />

              {/* Column 2: Our Mission */}
              <div className="text-left flex flex-col justify-start pl-2">
                <TextWordReveal
                  as="h3"
                  delay={0.15}
                  staggerDelay={0.04}
                  className="font-poppins font-semibold text-[#d5582a] text-[26px] lg:text-[32px] tracking-tight"
                >
                  {missionTitle}
                </TextWordReveal>
                <BlurTextReveal
                  as="p"
                  delay={0.3}
                  duration={0.65}
                  className="font-poppins text-[#333333] text-[15px] lg:text-[17px] leading-relaxed mt-3 lg:mt-4"
                >
                  {missionDescription}
                </BlurTextReveal>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
