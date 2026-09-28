'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'

export interface ManOfGodSectionProps {
  headerTitle?: string
  badgeTitle?: string
  singleImage?: any
  singleImageFallback?: string
  singleImageAlt?: string
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

export const ManOfGodSection: React.FC<ManOfGodSectionProps> = ({
  headerTitle = 'The Church of Signs and Wonders',
  badgeTitle = 'Man Of God',
  singleImage,
  singleImageFallback,
  singleImageAlt,
  slides,
  leaderName = 'Apostle Dr. Ankur Yoseph Narula',
  leaderRole = 'Founder & Senior Pastor',
  leaderBio = 'Apostle Dr. Ankur Yoseph Narula is the Founder and Overseer of The Church of Signs and Wonders Ankur Narula Ministries, which is one of the fastest-growing churches in India.',
  knowMoreLink = '/about',
  knowMoreLabel = 'Know More',
}) => {
  // Resolve single framed image URL with fallback to slides[0] or default asset
  const firstSlide = slides && slides.length > 0 ? slides[0] : null
  const resolvedImage = singleImage || firstSlide?.image
  const fallbackSrc = singleImageFallback || firstSlide?.imageFallback || '/man_of_god/image_1.png'
  const imageUrl = getMediaUrl(resolvedImage, fallbackSrc)
  const imageAlt = singleImageAlt || getMediaAlt(resolvedImage, firstSlide?.alt || `${leaderName} - Man of God`)

  return (
    <section className="relative overflow-hidden select-none" data-node-id="274:3">
      <SacredCanvas tone="warm-alabaster" className="py-10 sm:py-14 md:py-16">
        {/* ==================== EDITORIAL SECTION HEADER (Full width edge-to-edge gold bars) ==================== */}
        <div className="w-full mb-6 sm:mb-8 md:mb-10">
          <EditorialSectionHeader
            eyebrow="GLOBAL APOSTOLIC REVIVAL"
            title={headerTitle}
            variant="editorial"
            align="center"
          />
        </div>

        {/* Man Of God Sub-badge */}
        <RevealOnScroll direction="up" distance={16} duration={0.6} className="text-center mb-4 sm:mb-6">
          <span className="font-poppins font-bold text-[#d5582a] text-sm sm:text-base md:text-lg uppercase tracking-widest px-4 py-1 rounded-full bg-orange-50 border border-orange-200/60 inline-block shadow-sm">
            {badgeTitle}
          </span>
        </RevealOnScroll>

        {/* ==================== RECTANGULAR HERO CONTINUATION FRAME ==================== */}
        <RevealOnScroll direction="up" distance={20} duration={0.8} delay={0.1} className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/7] min-h-[220px] sm:min-h-[300px] md:min-h-[380px] max-h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-950 group ring-1 ring-black/5">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
              className="object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Cinematic subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </RevealOnScroll>

        {/* ==================== PASTOR BIO & CTA ==================== */}
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 text-center mt-5 sm:mt-7 md:mt-8">
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
      </SacredCanvas>
    </section>
  )
}
