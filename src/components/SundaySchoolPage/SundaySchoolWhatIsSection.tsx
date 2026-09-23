'use client'

import React from 'react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, BlurTextReveal, GoldBarReveal } from '@/components/ui/text-reveal'

interface SundaySchoolWhatIsSectionProps {
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
    <section className="bg-transparent py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12 select-none" data-node-id="289:3800">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Block 1: What is Sunday School? Card (Figma 289:3800 / 289:3802 / 289:3804) */}
        <RevealOnScroll direction="up" delay={0.1}>
          <div className="bg-[#122f4a] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden text-white shadow-xl max-w-[1140px] mx-auto border border-white/5 transition-all duration-300 hover:shadow-2xl">
            {/* Header with Gold Bars touching the card's outer left and right edges */}
            <div className="w-full flex items-center justify-between pt-6 sm:pt-8 md:pt-10 mb-4 sm:mb-6 overflow-hidden">
              <GoldBarReveal
                direction="left"
                delay={0.1}
                className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[280px] xl:w-[377px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-r-full flex-shrink-0"
              />

              <div className="flex-1 min-w-0 px-2 sm:px-4 md:px-6 text-center">
                <TextWordReveal
                  as="h2"
                  delay={0.1}
                  className="font-poppins font-semibold text-white text-xs xs:text-sm sm:text-lg md:text-[22px] lg:text-[26px] tracking-tight uppercase leading-tight line-clamp-2"
                >
                  {whatIsCardTitle || 'What is Sunday School?'}
                </TextWordReveal>
              </div>

              <GoldBarReveal
                direction="right"
                delay={0.1}
                className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[280px] xl:w-[377px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-l-full flex-shrink-0"
              />
            </div>

            {/* Narrative Text */}
            <div className="px-6 sm:px-12 md:px-16 pb-8 sm:pb-12 text-center">
              <BlurTextReveal
                as="p"
                delay={0.2}
                duration={0.7}
                className="font-poppins text-white text-xs sm:text-base md:text-lg lg:text-[18px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95"
              >
                {whatIsCardDescription}
              </BlurTextReveal>
            </div>
          </div>
        </RevealOnScroll>

        {/* Block 2: Purpose & vision Card (Figma 289:3801 / 289:3803 / 289:3805) */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="bg-[#122f4a] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden text-white shadow-xl max-w-[1140px] mx-auto border border-white/5 transition-all duration-300 hover:shadow-2xl">
            {/* Header with Gold Bars touching the card's outer left and right edges */}
            <div className="w-full flex items-center justify-between pt-6 sm:pt-8 md:pt-10 mb-4 sm:mb-6 overflow-hidden">
              <GoldBarReveal
                direction="left"
                delay={0.1}
                className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[280px] xl:w-[377px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-r-full flex-shrink-0"
              />

              <div className="flex-1 min-w-0 px-2 sm:px-4 md:px-6 text-center">
                <TextWordReveal
                  as="h2"
                  delay={0.1}
                  className="font-poppins font-semibold text-white text-xs xs:text-sm sm:text-lg md:text-[22px] lg:text-[26px] tracking-tight uppercase leading-tight line-clamp-2"
                >
                  {visionCardTitle || 'Purpose & vision'}
                </TextWordReveal>
              </div>

              <GoldBarReveal
                direction="right"
                delay={0.1}
                className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[280px] xl:w-[377px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-l-full flex-shrink-0"
              />
            </div>

            {/* Narrative Text */}
            <div className="px-6 sm:px-12 md:px-16 pb-8 sm:pb-12 text-center space-y-4">
              {purposeParagraph && (
                <BlurTextReveal
                  as="p"
                  delay={0.2}
                  duration={0.7}
                  className="font-poppins text-white text-xs sm:text-base md:text-lg lg:text-[18px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95"
                >
                  {purposeParagraph}
                </BlurTextReveal>
              )}
              {visionParagraph && (
                <BlurTextReveal
                  as="p"
                  delay={0.3}
                  duration={0.7}
                  className="font-poppins text-white text-xs sm:text-base md:text-lg lg:text-[18px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95"
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

