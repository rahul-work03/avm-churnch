'use client'

import React from 'react'
import { RevealOnScroll } from '@/components/ui/reveal'

interface GiveHeroSectionProps {
  heroTitle?: string | null
  scriptureVerse?: string | null
  purposeStatement?: string | null
}

export const GiveHeroSection: React.FC<GiveHeroSectionProps> = ({
  heroTitle = 'Give your Tithe & Offerings to the Lord',
  scriptureVerse = 'The Bible says, “Give, and it shall be given unto you” (Luke 6:38). In God’s Kingdom, giving is a seed that brings a multiplied harvest.',
  purposeStatement = 'At Ankur Narula Ministries, your tithes, offerings, and seeds are used for God’s kingdom— spreading the Gospel, building the house of God, restoring broken families, and helping the poor, widows, and orphans through charity and compassion.',
}) => {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-36 pb-6 sm:pb-8 text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <RevealOnScroll direction="none" duration={0.6}>
          <h1 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#003471] leading-tight md:leading-[80px] tracking-[-1px] sm:tracking-[-2px] md:tracking-[-2.4px] text-center max-w-[900px]">
            {heroTitle || 'Give your Tithe & Offerings to the Lord'}
          </h1>
        </RevealOnScroll>

        {/* Scripture Quotation */}
        {scriptureVerse && (
          <RevealOnScroll direction="up" delay={0.1}>
            <p className="mt-6 sm:mt-8 font-poppins text-[#333333] text-base sm:text-lg md:text-[20px] leading-relaxed max-w-[747px] text-center font-normal">
              {scriptureVerse}
            </p>
          </RevealOnScroll>
        )}

        {/* Ministry Purpose Statement */}
        {purposeStatement && (
          <RevealOnScroll direction="up" delay={0.2}>
            <p className="mt-4 sm:mt-6 font-poppins text-[#333333] text-base sm:text-lg md:text-[20px] leading-relaxed max-w-[732px] text-center font-normal">
              {purposeStatement}
            </p>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}
