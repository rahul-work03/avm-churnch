'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, BlurTextReveal, GoldBarReveal } from '@/components/ui/text-reveal'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'

export interface HeroSectionProps {
  headline1?: string
  headline2?: string
  mobileHeadline2?: string
  description?: string
  bannerImage?: any
  bannerImageFallback?: string
  bannerAlt?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  headline1 = 'Welcome to Ankur Narula Ministries',
  headline2 = 'The Church Of Signs and Wonders',
  mobileHeadline2 = 'Jesus Christ’s Power in Signs and Wonders',
  description = 'Experience the power of Jesus Christ through signs, wonders, and faith. We believe in the living Word of God and in His mighty works among those who believe.',
  bannerImage,
  bannerImageFallback = '/homepage_banner.png',
  bannerAlt = '200+ ANM Churches',
}) => {
  const resolvedBannerUrl = getMediaUrl(bannerImage, bannerImageFallback)
  const resolvedBannerAlt = getMediaAlt(bannerImage, bannerAlt)

  return (
    <section className="relative pt-28 pb-8 sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 overflow-hidden" data-node-id="274:3">
      {/* Header Title with Flanking Gold Bars */}
      <div className="w-full flex items-center justify-between py-2 sm:py-3 md:py-4">
        {/* Left Decorative Gold Bar */}
        <GoldBarReveal
          direction="left"
          duration={0.7}
          delay={0.1}
          className="w-[48px] sm:w-[100px] md:w-[140px] lg:w-[164px] h-[6px] sm:h-[10px] lg:h-[14px] bg-[#efbf04] rounded-r-full shadow-sm pointer-events-none flex-shrink-0"
          data-node-id="274:23"
        />

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto px-2 sm:px-6 md:px-10 flex-shrink min-w-0">
          {/* Desktop Headline */}
          <div className="hidden sm:block">
            <TextWordReveal
              as="h1"
              delay={0.05}
              staggerDelay={0.04}
              className="font-philosopher font-bold text-[#003471] text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] leading-tight tracking-tight"
            >
              {headline1}
            </TextWordReveal>
            <TextWordReveal
              as="span"
              delay={0.25}
              staggerDelay={0.04}
              className="text-[#003471] block mt-1 font-philosopher font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] leading-tight tracking-tight"
            >
              {headline2}
            </TextWordReveal>
          </div>

          {/* Mobile Headline */}
          <div className="sm:hidden">
            <TextWordReveal
              as="h1"
              delay={0.05}
              staggerDelay={0.035}
              className="font-philosopher font-bold text-[#003471] text-[22px] sm:text-[24px] leading-tight tracking-tight"
            >
              {headline1}
            </TextWordReveal>
            <TextWordReveal
              as="span"
              delay={0.2}
              staggerDelay={0.035}
              className="text-[#003471] block mt-0.5 font-philosopher font-bold text-[22px] sm:text-[24px] leading-tight tracking-tight"
            >
              {mobileHeadline2 || headline2}
            </TextWordReveal>
          </div>

          {/* Subtitle */}
          <BlurTextReveal
            as="p"
            delay={0.4}
            duration={0.7}
            distance={14}
            className="font-poppins font-light sm:font-normal text-[#0b0c1c] sm:text-[#8c8c8c] text-[12px] sm:text-base md:text-[18px] leading-relaxed max-w-3xl mx-auto mt-2 sm:mt-3 md:mt-4 text-balance px-1"
          >
            {description}
          </BlurTextReveal>
        </div>

        {/* Right Decorative Gold Bar */}
        <GoldBarReveal
          direction="right"
          duration={0.7}
          delay={0.1}
          className="w-[48px] sm:w-[100px] md:w-[140px] lg:w-[164px] h-[6px] sm:h-[10px] lg:h-[14px] bg-[#efbf04] rounded-l-full shadow-sm pointer-events-none flex-shrink-0"
          data-node-id="274:28"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured 200+ ANM Churches Banner Card */}
        <RevealOnScroll direction="up" distance={28} delay={0.15} duration={0.8} className="mt-4 sm:mt-8 md:mt-10 max-w-[1140px] mx-auto">
          <div
            className="relative w-full aspect-[380/206] sm:aspect-[1140/620] rounded-[20px] sm:rounded-[36px] md:rounded-[51px] overflow-hidden shadow-xl sm:shadow-2xl border border-amber-200/40 bg-slate-900 group"
            data-node-id="274:6"
          >
            <Image
              src={resolvedBannerUrl}
              alt={resolvedBannerAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Carousel Pagination Dots */}
            <div className="absolute bottom-2.5 sm:bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-2.5 z-20">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white shadow-md cursor-pointer transition transform hover:scale-125" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/40 backdrop-blur-sm cursor-pointer transition transform hover:scale-125 hover:bg-white/70" />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
