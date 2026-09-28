'use client'

import React from 'react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { BlurTextReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { PatternedNavyCard } from '@/components/ui/patterned-navy-card'
import { HeartHandshake, Sparkles } from 'lucide-react'

export interface SundaySchoolWhatIsSectionProps {
  whatIsCardTitle?: string | null
  whatIsCardDescription?: string | null
  visionCardTitle?: string | null
  purposeParagraph?: string | null
  visionParagraph?: string | null
}

export const SundaySchoolWhatIsSection: React.FC<SundaySchoolWhatIsSectionProps> = ({
  whatIsCardTitle = 'What is Sunday School?',
  whatIsCardDescription = 'Sunday School is a dedicated time of learning and spiritual growth where children, youth, and adults are taught the Word of God in a simple and meaningful way. It is designed to help believers understand Bible stories, Christian values, and the love of Jesus Christ in a way that is easy to apply in daily life. Through teaching, activities, and fellowship, Sunday School builds a strong foundation of faith from an early age.',
  visionCardTitle = 'Purpose & vision',
  purposeParagraph = 'The purpose of Sunday School is to nurture spiritual growth through Bible-based teaching, helping individuals develop a personal relationship with God. It focuses on building strong moral values, prayer life, and understanding of Scripture in a practical and engaging way.',
  visionParagraph = 'Our vision is to raise a generation rooted in God’s Word, filled with the knowledge of Jesus Christ, and guided by the Holy Spirit. We aim to prepare children and believers of all ages to live out their faith boldly, grow in godly character, and become light in their families, schools, and communities.',
}) => {
  return (
    <SacredCanvas tone="warm-alabaster" className="py-12 sm:py-16 md:py-20 select-none" data-node-id="289:3800">
      <div className="space-y-14 sm:space-y-16 md:space-y-20">
        {/* ==================== BLOCK 1: WHAT IS SUNDAY SCHOOL ==================== */}
        <div>
          {/* Full-bleed Editorial Header with Edge-to-Edge Gold Bars */}
          <div className="w-full text-center mb-6 sm:mb-8">
            <EditorialSectionHeader
              eyebrow="NURTURING FAITH & TRUTH"
              title={whatIsCardTitle || 'What is Sunday School?'}
              variant="editorial"
              align="center"
            />
          </div>

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll direction="up" distance={20} duration={0.65} className="max-w-4xl mx-auto">
              <PatternedNavyCard
                patternId="pattern-ss-whatis"
                className="text-center"
                hoverEffect={false}
                badgeText="Youth & Children Ministry"
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
              eyebrow="OUR CALLING & MISSION"
              title={visionCardTitle || 'Purpose & vision'}
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
                    patternId="pattern-ss-purpose"
                    pillarNumber="Pillar 01"
                    title="Our Purpose"
                    icon={<HeartHandshake className="w-5 h-5 text-[#efbf04]" />}
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
                    patternId="pattern-ss-vision"
                    pillarNumber="Pillar 02"
                    title="Our Vision"
                    icon={<Sparkles className="w-5 h-5 text-[#efbf04]" />}
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

