'use client'

import React from 'react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { BlurTextReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { PatternedNavyCard } from '@/components/ui/patterned-navy-card'
import { Compass, Eye, Sparkles } from 'lucide-react'

export interface PrayerHouseWhatIsSectionProps {
  whatIsCardTitle?: string
  whatIsCardDescription?: string
  visionCardTitle?: string
  purposeParagraph?: string
  visionParagraph?: string
}

export const PrayerHouseWhatIsSection: React.FC<PrayerHouseWhatIsSectionProps> = ({
  whatIsCardTitle = 'What is Prayer House?',
  whatIsCardDescription = "Prayer House is a sacred space dedicated to prayer, worship, and spiritual renewal. It is a place where believers gather to seek God's presence, lift up their needs, and grow deeper in faith. Here, individuals and families can encounter God intimately and experience peace, restoration, and encouragement in their spiritual journey.",
  visionCardTitle = 'Purpose & vision',
  purposeParagraph = 'The purpose of Prayer House is to provide a peaceful, holy environment where people can come aside from daily distractions and connect with God.',
  visionParagraph = "Our vision is to build a strong prayer community where lives are transformed, faith is strengthened, and hearts are aligned with God's will. It is a place where continuous prayer is offered for individuals, families, and the needs of the community.",
}) => {
  return (
    <SacredCanvas tone="warm-alabaster" className="py-12 sm:py-16 md:py-20 select-none" data-node-id="282:2369">
      <div className="space-y-14 sm:space-y-16 md:space-y-20">
        {/* ==================== BLOCK 1: WHAT IS PRAYER HOUSE ==================== */}
        <div>
          {/* Full-bleed Editorial Header with Edge-to-Edge Gold Bars */}
          <div className="w-full text-center mb-6 sm:mb-8">
            <EditorialSectionHeader
              eyebrow="SACRED RETREAT"
              title={whatIsCardTitle}
              variant="editorial"
              align="center"
            />
          </div>

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll direction="up" distance={20} duration={0.65} className="max-w-4xl mx-auto">
              <PatternedNavyCard
                patternId="pattern-ph-whatis"
                className="text-center"
                hoverEffect={false}
                badgeText="Sacred Dwelling"
                badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#efbf04]" />}
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
              eyebrow="OUR CALLING & PURPOSE"
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
                    patternId="pattern-ph-purpose"
                    pillarNumber="Pillar 01"
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
                    patternId="pattern-ph-vision"
                    pillarNumber="Pillar 02"
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

