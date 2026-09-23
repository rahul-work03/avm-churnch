'use client'

import React from 'react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, BlurTextReveal, GoldBarReveal } from '@/components/ui/text-reveal'

export interface SophiaInstituteWhatIsSectionProps {
  whatIsCardTitle?: string
  whatIsCardDescription?: string
  visionCardTitle?: string
  purposeParagraph?: string
  visionParagraph?: string
}

export const SophiaInstituteWhatIsSection: React.FC<SophiaInstituteWhatIsSectionProps> = ({
  whatIsCardTitle = 'What is Sophia Institute?',
  whatIsCardDescription = "Sophia Institute is a place of learning, spiritual growth, and deeper understanding of God's Word. Through biblical teaching, prayer, study, and fellowship, it encourages believers to grow in wisdom and faith. The institute seeks to connect Scripture with everyday life, helping individuals develop a stronger relationship with God and live out their faith with purpose.",
  visionCardTitle = 'Purpose & vision',
  purposeParagraph = 'The purpose of Sophia Institute is to nurture spiritual and intellectual growth through Christ-centered teaching and the truth of Scripture.',
  visionParagraph = "Our vision is to raise a generation grounded in God's Word, growing in wisdom, character, and faith. We seek to equip believers to understand their calling, strengthen their relationship with Christ, and become a light in their families, churches, and communities.",
}) => {
  return (
    <section className="bg-transparent py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12 select-none" data-node-id="sophia-what-is">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Block 1: What is Sophia Institute? Card */}
        <RevealOnScroll direction="up" distance={24} duration={0.7}>
          <div className="bg-[#122f4a] rounded-[24px] sm:rounded-[32px] overflow-hidden text-white shadow-xl max-w-[1140px] mx-auto border border-white/5 transition-transform duration-300 hover:shadow-2xl">
            {/* Header with Gold Bars touching the card's outer left and right edges */}
            <div className="w-full flex items-center justify-between pt-6 sm:pt-8 md:pt-10 mb-4 sm:mb-6 overflow-hidden">
              <GoldBarReveal
                direction="left"
                className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[260px] xl:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-r-full flex-shrink-0"
              />

              <div className="flex-1 min-w-0 px-2 sm:px-4 md:px-6 text-center">
                <TextWordReveal
                  as="h2"
                  delay={0.05}
                  staggerDelay={0.035}
                  className="font-poppins font-semibold text-white text-xs xs:text-sm sm:text-lg md:text-[22px] lg:text-[26px] tracking-tight uppercase leading-tight line-clamp-2"
                >
                  {whatIsCardTitle}
                </TextWordReveal>
              </div>

              <GoldBarReveal
                direction="right"
                className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[260px] xl:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-l-full flex-shrink-0"
              />
            </div>

            {/* Narrative Text */}
            <div className="px-6 sm:px-12 md:px-16 pb-8 sm:pb-12 text-center">
              <BlurTextReveal
                as="p"
                delay={0.2}
                duration={0.7}
                className="font-poppins text-white text-xs sm:text-base md:text-xl lg:text-[22px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95"
              >
                {whatIsCardDescription}
              </BlurTextReveal>
            </div>
          </div>
        </RevealOnScroll>

        {/* Block 2: Purpose & vision Card */}
        <RevealOnScroll direction="up" distance={24} duration={0.7} delay={0.1}>
          <div className="bg-[#122f4a] rounded-[24px] sm:rounded-[32px] overflow-hidden text-white shadow-xl max-w-[1140px] mx-auto border border-white/5 transition-transform duration-300 hover:shadow-2xl">
            {/* Header with Gold Bars touching the card's outer left and right edges */}
            <div className="w-full flex items-center justify-between pt-6 sm:pt-8 md:pt-10 mb-4 sm:mb-6 overflow-hidden">
              <GoldBarReveal
                direction="left"
                className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[260px] xl:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-r-full flex-shrink-0"
              />

              <div className="flex-1 min-w-0 px-2 sm:px-4 md:px-6 text-center">
                <TextWordReveal
                  as="h2"
                  delay={0.05}
                  staggerDelay={0.035}
                  className="font-poppins font-semibold text-white text-xs xs:text-sm sm:text-lg md:text-[22px] lg:text-[26px] tracking-tight uppercase leading-tight line-clamp-2"
                >
                  {visionCardTitle}
                </TextWordReveal>
              </div>

              <GoldBarReveal
                direction="right"
                className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[260px] xl:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-l-full flex-shrink-0"
              />
            </div>

            {/* Narrative Text */}
            <div className="px-6 sm:px-12 md:px-16 pb-8 sm:pb-12 text-center space-y-4">
              {purposeParagraph && (
                <BlurTextReveal
                  as="p"
                  delay={0.2}
                  duration={0.7}
                  className="font-poppins text-white text-xs sm:text-base md:text-xl lg:text-[22px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95"
                >
                  {purposeParagraph}
                </BlurTextReveal>
              )}
              {visionParagraph && (
                <BlurTextReveal
                  as="p"
                  delay={0.35}
                  duration={0.7}
                  className="font-poppins text-white text-xs sm:text-base md:text-xl lg:text-[22px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95"
                >
                  {visionParagraph}
                </BlurTextReveal>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default SophiaInstituteWhatIsSection

