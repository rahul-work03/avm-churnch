'use client'

import React from 'react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { BlurTextReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { PatternedNavyCard } from '@/components/ui/patterned-navy-card'
import { Compass, Eye } from 'lucide-react'

export interface WhatIsSectionProps {
  whatIsCardTitle?: string
  whatIsCardDescription?: string
  visionCardTitle?: string
  purposeParagraph?: string
  visionParagraph?: string
}

export const WhatIsSection: React.FC<WhatIsSectionProps> = ({
  whatIsCardTitle = 'What is Prayer Mountain?',
  whatIsCardDescription = "Prayer Mountain is a sacred place dedicated to prayer, meditation, and spiritual renewal. It is where believers gather to seek God's presence, intercede for their needs, and grow in faith. Here, individuals can experience deep encounters with God and leave spiritually rejuvenated.",
  visionCardTitle = 'Purpose & Vision',
  purposeParagraph = "The purpose of Prayer Mountain is to provide a quiet, holy space where believers can seek God's direction, receive healing, and find peace in the midst of life's challenges.",
  visionParagraph = 'Our vision is to make it a place where individuals and families connect with God on a deeper level, and where the ministry can pray for the needs of the community.',
}) => {
  return (
    <SacredCanvas tone="warm-alabaster" className="py-12 sm:py-16 md:py-20 select-none" data-node-id="279:2081">
      <div className="space-y-14 sm:space-y-16 md:space-y-20">
        {/* ==================== BLOCK 1: WHAT IS PRAYER MOUNTAIN ==================== */}
        <div>
          {/* Full-bleed Editorial Header with Edge-to-Edge Gold Bars */}
          <div className="w-full text-center mb-6 sm:mb-8">
            <EditorialSectionHeader
              title={whatIsCardTitle}
              variant="editorial"
              align="center"
            />
          </div>

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll direction="up" distance={20} duration={0.65} className="max-w-4xl mx-auto">
              <PatternedNavyCard
                patternId="pattern-whatis"
                className="text-center"
                hoverEffect={false}
              >
                <BlurTextReveal
                  as="p"
                  delay={0.15}
                  duration={0.65}
                  className="font-poppins text-slate-100 text-sm sm:text-base md:text-[18px] leading-relaxed sm:leading-[1.85] text-balance max-w-3xl mx-auto font-light"
                >
                  {whatIsCardDescription}
                </BlurTextReveal>
              </PatternedNavyCard>
            </RevealOnScroll>
          </div>
        </div>

        {/* ==================== BLOCK 2: PURPOSE & VISION ==================== */}
        <div>
          {/* Full-bleed Editorial Header with Edge-to-Edge Gold Bars */}
          <div className="w-full text-center mb-6 sm:mb-8">
            <EditorialSectionHeader
              title={visionCardTitle}
              variant="editorial"
              align="center"
            />
          </div>

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {/* Pillar 1: Purpose Card */}
              {purposeParagraph && (
                <RevealOnScroll direction="up" distance={20} duration={0.65} delay={0.05} className="h-full">
                  <PatternedNavyCard
                    asPillar
                    patternId="pattern-purpose"
                    title="Our Purpose"
                    icon={<Compass className="w-5 h-5 text-[#efbf04]" />}
                    className="h-full"
                  >
                    <p className="font-poppins text-slate-100 text-xs sm:text-sm md:text-[16px] lg:text-[18px] leading-relaxed font-light">
                      {purposeParagraph}
                    </p>
                  </PatternedNavyCard>
                </RevealOnScroll>
              )}

              {/* Pillar 2: Vision Card */}
              {visionParagraph && (
                <RevealOnScroll direction="up" distance={20} duration={0.65} delay={0.12} className="h-full">
                  <PatternedNavyCard
                    asPillar
                    patternId="pattern-vision"
                    title="Our Vision"
                    icon={<Eye className="w-5 h-5 text-[#efbf04]" />}
                    className="h-full"
                  >
                    <p className="font-poppins text-slate-100 text-xs sm:text-sm md:text-[16px] lg:text-[18px] leading-relaxed font-light">
                      {visionParagraph}
                    </p>
                  </PatternedNavyCard>
                </RevealOnScroll>
              )}
            </div>
          </div>
        </div>
      </div>
    </SacredCanvas>
  )
}



