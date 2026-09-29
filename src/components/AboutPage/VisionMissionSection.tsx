'use client'

import React from 'react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredLatticePattern } from '@/components/ui/patterned-navy-card'

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
    <section className="relative pt-2 pb-8 sm:pb-12 md:pb-14 bg-transparent select-none" data-node-id="275:810">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Identity & Vision Header Plaque */}
        <EditorialSectionHeader
          eyebrow={identityBadge}
          title={headerTitle}
          variant="plaque"
          className="-mb-5 sm:-mb-10 md:-mb-12 relative z-20"
        />

        {/* Mobile View: 2 Distinct Stacked Sacred Patterned Navy Cards */}
        <div className="md:hidden space-y-4 pt-8">
          <RevealOnScroll direction="up" distance={20} duration={0.5}>
            <div className="relative rounded-[22px] p-6 sm:p-7 shadow-2xl border border-[#d4af37]/35 ring-1 ring-white/10 overflow-hidden text-left">
              <SacredLatticePattern id="pattern-about-vision-m" opacity={0.14} />
              {/* Top Gold Metallic Accent Line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#d4af37] via-[#efbf04] to-transparent pointer-events-none" />

              <div className="relative z-10">
                <TextWordReveal
                  as="h3"
                  delay={0.05}
                  className="font-philosopher font-bold text-[#efbf04] text-xl tracking-tight"
                >
                  {visionTitle}
                </TextWordReveal>
                <BlurTextReveal
                  as="p"
                  delay={0.15}
                  duration={0.6}
                  className="font-poppins text-slate-100 text-sm leading-relaxed mt-2.5 font-light"
                >
                  {visionDescription}
                </BlurTextReveal>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" distance={20} duration={0.5} delay={0.1}>
            <div className="relative rounded-[22px] p-6 sm:p-7 shadow-2xl border border-[#d4af37]/35 ring-1 ring-white/10 overflow-hidden text-left">
              <SacredLatticePattern id="pattern-about-mission-m" opacity={0.14} />
              {/* Top Gold Metallic Accent Line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#d4af37] via-[#efbf04] to-transparent pointer-events-none" />

              <div className="relative z-10">
                <TextWordReveal
                  as="h3"
                  delay={0.05}
                  className="font-philosopher font-bold text-[#efbf04] text-xl tracking-tight"
                >
                  {missionTitle}
                </TextWordReveal>
                <BlurTextReveal
                  as="p"
                  delay={0.15}
                  duration={0.6}
                  className="font-poppins text-slate-100 text-sm leading-relaxed mt-2.5 font-light"
                >
                  {missionDescription}
                </BlurTextReveal>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Desktop View: Unified 2-Column Vision & Mission Card with Sacred Lattice Navy Background */}
        <RevealOnScroll direction="up" distance={24} duration={0.7} delay={0.1} className="hidden md:block">
          <div className="relative rounded-[36px] lg:rounded-[44px] shadow-2xl pt-16 lg:pt-20 pb-8 lg:pb-12 px-8 lg:px-14 border border-[#d4af37]/35 ring-1 ring-white/10 overflow-hidden z-10">
            <SacredLatticePattern id="pattern-about-vm-desktop" opacity={0.14} />

            {/* Top Gold Metallic Accent Line */}
            <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-[#d4af37] via-[#efbf04] to-transparent pointer-events-none" />

            <div className="relative z-10 grid grid-cols-2 gap-8 lg:gap-12">
              {/* Column 1: Our Vision */}
              <div className="text-left flex flex-col justify-start">
                <TextWordReveal
                  as="h3"
                  delay={0.1}
                  staggerDelay={0.04}
                  className="font-philosopher font-bold text-[#efbf04] text-[26px] lg:text-[32px] tracking-tight"
                >
                  {visionTitle}
                </TextWordReveal>
                <BlurTextReveal
                  as="p"
                  delay={0.25}
                  duration={0.65}
                  className="font-poppins text-slate-100 text-[15px] lg:text-[17px] leading-relaxed mt-3 lg:mt-4 font-light"
                >
                  {visionDescription}
                </BlurTextReveal>
              </div>

              {/* Vertical Golden Divider */}
              <div className="absolute left-1/2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent -translate-x-1/2" />

              {/* Column 2: Our Mission */}
              <div className="text-left flex flex-col justify-start pl-2">
                <TextWordReveal
                  as="h3"
                  delay={0.15}
                  staggerDelay={0.04}
                  className="font-philosopher font-bold text-[#efbf04] text-[26px] lg:text-[32px] tracking-tight"
                >
                  {missionTitle}
                </TextWordReveal>
                <BlurTextReveal
                  as="p"
                  delay={0.3}
                  duration={0.65}
                  className="font-poppins text-slate-100 text-[15px] lg:text-[17px] leading-relaxed mt-3 lg:mt-4 font-light"
                >
                  {missionDescription}
                </BlurTextReveal>
              </div>
            </div>

            {/* Bottom Subtle Gold Accent Hairline */}
            <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-[#d4af37]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

