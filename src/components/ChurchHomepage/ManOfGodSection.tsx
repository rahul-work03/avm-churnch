'use client'

import React from 'react'
import Link from 'next/link'
import { CoverflowCarousel, type CoverflowSlide } from '@/components/ui/coverflow-carousel'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, BlurTextReveal, GoldBarReveal } from '@/components/ui/text-reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface ManOfGodSectionProps {
  headerTitle?: string
  badgeTitle?: string
  slides?: Array<{
    image?: any
    imageFallback?: string
    title?: string
    subtitle?: string
    alt?: string
  }>
  leaderName?: string
  leaderRole?: string
  leaderBio?: string
  knowMoreLink?: string
  knowMoreLabel?: string
}

const DEFAULT_SLIDES: CoverflowSlide[] = [
  {
    src: '/man_of_god/image_1.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula Ministering at Pulpit',
  },
  {
    src: '/man_of_god/image_2.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula at Main Stage',
  },
  {
    src: '/man_of_god/image_3.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula',
  },
  {
    src: '/man_of_god/image_4.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula in Ministry Attire',
  },
  {
    src: '/man_of_god/image_5.png',
    alt: 'Prophetic Impartation & Deliverance Ministry',
  },
]

export const ManOfGodSection: React.FC<ManOfGodSectionProps> = ({
  headerTitle = 'The church of signs and wonders',
  badgeTitle = 'Man Of God',
  slides,
  leaderName = 'Apostle Dr. Ankur Yoseph Narula',
  leaderRole = 'Founder & Senior Pastor',
  leaderBio = 'Apostle Dr. Ankur Yoseph Narula is the Founder and Overseer of The Church of Signs and Wonders Ankur Narula Ministries, which is one of the fastest-growing churches in India.',
  knowMoreLink = '/about',
  knowMoreLabel = 'Know More',
}) => {
  // Format dynamic slides or use default authentic slides
  const formattedSlides: CoverflowSlide[] =
    slides && slides.length > 0
      ? slides.map((s) => ({
          src: getMediaUrl(s.image, s.imageFallback || '/man_of_god/image_1.png'),
          alt: s.alt || s.title || leaderName,
          title: s.title || undefined,
          subtitle: s.subtitle || undefined,
        }))
      : DEFAULT_SLIDES

  return (
    <section className="relative bg-white overflow-hidden select-none" data-node-id="274:3">
      {/* ==================== SECTION HEADER ==================== */}
      {/* Full-width Dark Navy Bar with Edge-to-Edge Gold Bars */}
      <div className="w-full bg-[#122f4a] h-[52px] sm:h-[64px] md:h-[76px] lg:h-[80px] flex items-center justify-between px-0 relative z-10 shadow-md overflow-hidden">
        {/* Left Gold Bar */}
        <GoldBarReveal
          direction="left"
          duration={0.7}
          delay={0.1}
          className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[240px] xl:w-[323px] h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm flex-shrink-0"
          data-node-id="274:24"
        />

        {/* Center Title Text */}
        <div className="flex-1 min-w-0 px-2 sm:px-4 md:px-6 text-center">
          <TextWordReveal
            as="h2"
            delay={0.15}
            staggerDelay={0.035}
            className="font-philosopher font-bold text-white text-lg lg:text-[32px] xl:text-[36px] tracking-tight text-center px-4 whitespace-nowrap"
          >
            {headerTitle}
          </TextWordReveal>
        </div>

        {/* Right Gold Bar */}
        <GoldBarReveal
          direction="right"
          duration={0.7}
          delay={0.1}
          className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[240px] xl:w-[323px] h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm flex-shrink-0"
          data-node-id="274:26"
        />
      </div>

      <div className="pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-12 md:pb-16">
        {/* Man Of God with Golden Torch / Flare Emblems on both sides */}
        <RevealOnScroll direction="up" distance={16} duration={0.6} className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-4 md:mb-6">
          <div
            className="relative w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04]"
            data-node-id="274:334"
            style={{
              maskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
              WebkitMaskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
          <TextWordReveal
            as="span"
            delay={0.1}
            staggerDelay={0.06}
            className="font-poppins font-bold text-[#d5582a] text-lg sm:text-2xl md:text-[34px] tracking-wide"
            data-node-id="274:34"
          >
            {badgeTitle}
          </TextWordReveal>
          <div
            className="relative w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
            data-node-id="274:337"
            style={{
              maskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
              WebkitMaskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
        </RevealOnScroll>

        {/* ==================== COVERFLOW CAROUSEL ==================== */}
        <RevealOnScroll direction="up" distance={24} duration={0.8} delay={0.1} className="w-full">
          <CoverflowCarousel
            slides={formattedSlides}
            autoPlay={true}
            autoPlayInterval={3000}
            pauseOnHover={true}
            loop={true}
            showNavigation={true}
            showPagination={true}
            rotate={38}
            depth={0.5}
            perspective={3}
            cardWidth="clamp(210px, 24vw, 290px)"
            cardHeight="clamp(290px, 33vw, 400px)"
          />
        </RevealOnScroll>

        {/* ==================== PASTOR BIO & CTA ==================== */}
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 text-center mt-6 sm:mt-8 md:mt-10">
          <TextWordReveal
            as="h3"
            delay={0.1}
            staggerDelay={0.04}
            className="font-poppins font-semibold text-[#003471] sm:text-[#d5582a] text-lg sm:text-2xl md:text-[28px] tracking-tight"
            data-node-id="274:35"
          >
            {leaderName}
          </TextWordReveal>

          <BlurTextReveal
            as="p"
            delay={0.25}
            duration={0.6}
            className="font-poppins font-semibold sm:font-medium text-[#122f4a] sm:text-[#8c8c8c] text-xs sm:text-base md:text-[18px] mt-0.5 sm:mt-1"
            data-node-id="274:37"
          >
            {leaderRole}
          </BlurTextReveal>

          <BlurTextReveal
            as="p"
            delay={0.35}
            duration={0.7}
            className="font-poppins font-light sm:font-normal text-[#0b0c1c] text-xs sm:text-sm md:text-[18px] leading-relaxed mt-2 sm:mt-3 max-w-2xl mx-auto text-balance"
            data-node-id="274:38"
          >
            {leaderBio}
          </BlurTextReveal>

          {/* Know More Pill CTA Button */}
          <RevealOnScroll direction="up" distance={16} delay={0.45} duration={0.6} className="mt-4 sm:mt-6 flex justify-center">
            <Link
              href={knowMoreLink}
              className="inline-flex items-center justify-center bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-poppins font-semibold text-xs sm:text-base md:text-[18px] w-[140px] sm:w-[174px] h-[38px] sm:h-[48px] rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              data-node-id="274:17"
            >
              {knowMoreLabel}
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
