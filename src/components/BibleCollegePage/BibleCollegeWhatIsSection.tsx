'use client'

import React from 'react'
import { RevealOnScroll } from '@/components/ui/reveal'

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
  purposeParagraph = 'The purpose of Bible College is to provide sound biblical teaching and practical training for spiritual growth and ministry.',
  visionParagraph = "Our vision is to raise strong, grounded believers who are rooted in God's Word, led by the Holy Spirit, and prepared to impact their communities. We aim to develop leaders who carry truth, integrity, and a heart for service.",
}) => {
  return (
    <section className="bg-transparent py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12 select-none" data-node-id="284:2612">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Block 1: What is Bible College? Card */}
        <RevealOnScroll direction="up" distance={24} duration={0.7}>
          <div className="bg-[#122f4a] rounded-[24px] sm:rounded-[32px] overflow-hidden text-white shadow-xl max-w-[1140px] mx-auto border border-white/5 transition-transform duration-300 hover:shadow-2xl">
            {/* Header with Gold Bars touching the card's outer left and right edges */}
            <div className="w-full flex items-center justify-between pt-8 sm:pt-10 mb-4 sm:mb-6">
              <div className="w-[60px] sm:w-[160px] md:w-[260px] lg:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

              <h2 className="font-poppins font-semibold text-white text-base sm:text-xl md:text-[26px] text-center px-3 sm:px-6 tracking-tight whitespace-nowrap flex-shrink min-w-0">
                {whatIsCardTitle}
              </h2>

              <div className="w-[60px] sm:w-[160px] md:w-[260px] lg:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
            </div>

            {/* Narrative Text */}
            <div className="px-6 sm:px-12 md:px-16 pb-8 sm:pb-12 text-center">
              <p className="font-poppins text-white text-xs sm:text-base md:text-xl lg:text-[22px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95">
                {whatIsCardDescription}
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Block 2: Purpose & vision Card */}
        <RevealOnScroll direction="up" distance={24} duration={0.7} delay={0.1}>
          <div className="bg-[#122f4a] rounded-[24px] sm:rounded-[32px] overflow-hidden text-white shadow-xl max-w-[1140px] mx-auto border border-white/5 transition-transform duration-300 hover:shadow-2xl">
            {/* Header with Gold Bars touching the card's outer left and right edges */}
            <div className="w-full flex items-center justify-between pt-8 sm:pt-10 mb-4 sm:mb-6">
              <div className="w-[60px] sm:w-[160px] md:w-[260px] lg:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

              <h2 className="font-poppins font-semibold text-white text-base sm:text-xl md:text-[26px] text-center px-3 sm:px-6 tracking-tight whitespace-nowrap flex-shrink min-w-0">
                {visionCardTitle}
              </h2>

              <div className="w-[60px] sm:w-[160px] md:w-[260px] lg:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
            </div>

            {/* Narrative Text */}
            <div className="px-6 sm:px-12 md:px-16 pb-8 sm:pb-12 text-center space-y-4">
              {purposeParagraph && (
                <p className="font-poppins text-white text-xs sm:text-base md:text-xl lg:text-[22px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95">
                  {purposeParagraph}
                </p>
              )}
              {visionParagraph && (
                <p className="font-poppins text-white text-xs sm:text-base md:text-xl lg:text-[22px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95">
                  {visionParagraph}
                </p>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

