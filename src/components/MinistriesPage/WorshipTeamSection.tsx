'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/reveal'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'

export interface WorshipTeamSectionProps {
  headerTitle?: string
  image?: any
  imageFallback?: string
  alt?: string
  narrative?: string
}

export const WorshipTeamSection: React.FC<WorshipTeamSectionProps> = ({
  headerTitle = 'Our Worship Team',
  image,
  imageFallback = '/figma-assets/74e8182af8627fad3ae428aad2b17d4eca519897.png',
  alt = 'ANM Worship Team Leading Spirit-Filled Praise',
  narrative = 'Our Worship Team leads the church in powerful and spirit-filled praise and worship. With dedication and passion, they help create an atmosphere where everyone can encounter God, express their faith, and grow deeper in their relationship with Christ.',
}) => {
  const resolvedImg = getMediaUrl(image, imageFallback)
  const resolvedAlt = getMediaAlt(image, alt)

  return (
    <section className="relative pt-4 pb-16 sm:pb-20 md:pb-24 bg-transparent" data-node-id="277:1632">
      {/* Full-width Navy Header Bar */}
      <RevealOnScroll direction="none" duration={0.6} className="w-full bg-[#122f4a] py-4 sm:py-5 md:py-6 text-white relative shadow-sm mb-8 sm:mb-12">
        <div className="w-full flex items-center justify-between">
          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

          <h2 className="font-poppins font-medium text-white text-sm sm:text-xl md:text-2xl lg:text-[28px] tracking-wide text-center px-3 sm:px-8 md:px-12 flex-shrink min-w-0">
            {headerTitle}
          </h2>

          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
        </div>
      </RevealOnScroll>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Featured Worship Team Stage Visual */}
        <RevealOnScroll direction="up" distance={24} duration={0.8} delay={0.1}>
          <div className="relative w-full aspect-[1140/534] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-2xl border border-[#d4af37]/30 bg-slate-950 group">
            <Image
              src={resolvedImg}
              alt={resolvedAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-103"
            />
          </div>
        </RevealOnScroll>

        {/* Narrative Description Text */}
        <RevealOnScroll direction="up" distance={20} duration={0.7} delay={0.2} className="mt-6 sm:mt-10 md:mt-12 text-center max-w-5xl mx-auto">
          <p className="font-poppins text-[#333333] text-xs sm:text-base md:text-xl lg:text-[24px] leading-relaxed sm:leading-[1.8] text-balance">
            {narrative}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
