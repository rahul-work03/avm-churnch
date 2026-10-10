'use client'

import React from 'react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { BlurTextReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { PatternedNavyCard } from '@/components/ui/patterned-navy-card'
import { BookOpen, Eye } from 'lucide-react'

export interface BibleCollegeWhatIsSectionProps {
  whatIsCardTitle?: string
  whatIsCardDescription?: string
  visionCardTitle?: string
  purposeParagraph?: string
  visionParagraph?: string
}

export const BibleCollegeWhatIsSection: React.FC<BibleCollegeWhatIsSectionProps> = ({
  whatIsCardTitle = 'What is Bible College?',
  whatIsCardDescription = "Bible College is a dedicated place of learning where individuals are trained in the Word of God, spiritual disciplines, and Christian leadership. It is designed to equip believers with a deeper understanding of Scripture, helping them grow in faith, wisdom, and maturity. Here, students are nurtured to live out God's calling and serve effectively in ministry and everyday life.",
  visionCardTitle = 'Purpose & vision',
  purposeParagraph = 'The purpose of The Christ Bible College is to raise and train strong, faithful, and committed workers for the Kingdom of God. To walk in obedience, humility, love, and holiness, while growing in spiritual maturity, biblical understanding, and godly character.',
  visionParagraph = 'The vision of The Christ Bible College is to raise a generation that will make disciples, impact communities, reach the nations, and reflect the love of Jesus wherever God calls them. To carry the heart, character, and message of Jesus Christ to the world.',
}) => {
  return (
    <SacredCanvas tone="warm-alabaster" className="py-12 sm:py-16 md:py-20 select-none" data-node-id="284:2612">
      <div className="space-y-14 sm:space-y-16 md:space-y-20">
        {/* ==================== BLOCK 1: WHAT IS BIBLE COLLEGE ==================== */}
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
                patternId="pattern-bc-whatis"
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
                    patternId="pattern-bc-purpose"
                    title="Our Purpose"
                    icon={<BookOpen className="w-5 h-5 text-[#efbf04]" />}
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
                    patternId="pattern-bc-vision"
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

