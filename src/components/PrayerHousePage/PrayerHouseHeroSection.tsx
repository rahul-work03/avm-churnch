'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'

export interface PrayerHouseHeroSectionProps {
  headerTitle?: string
  description?: string
  bannerImage?: any
  bannerImageFallback?: string
  bannerAlt?: string
  subtitle?: string
}

export const PrayerHouseHeroSection: React.FC<PrayerHouseHeroSectionProps> = ({
  headerTitle = 'PRAYER HOUSE',
  description = 'Welcome to a dwelling of divine presence, where every soul finds rest and every prayer rises to heaven. This is not just a place, but a powerful encounter with the living God, where broken hearts are healed and weary spirits are strengthened. As you seek Him here, you will discover His love, His peace, and His transforming power working in your life. Come with expectation, and leave with a testimony of His goodness.',
  bannerImage,
  bannerImageFallback = '/prayer_house_hero.png',
  bannerAlt = 'Prayer House - Ankur Narula Ministries',
  subtitle = 'Encounter God. Experience Healing. Walk in His Presence.',
}) => {
  const resolvedBannerUrl = getMediaUrl(bannerImage, bannerImageFallback)
  const resolvedBannerAlt = getMediaAlt(bannerImage, bannerAlt)

  return (
    <section className="relative pt-28 pb-8 sm:pt-32 sm:pb-12 md:pt-36 md:pb-14 bg-transparent" data-node-id="282:2369">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* "PRAYER HOUSE" Header with Golden Emblems on both sides */}
        <div className="text-center px-2 pt-2 sm:pt-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04]"
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
              as="h1"
              delay={0.05}
              staggerDelay={0.04}
              className="font-poppins font-semibold text-[#003471] text-2xl sm:text-3xl md:text-[38px] tracking-tight uppercase"
            >
              {headerTitle}
            </TextWordReveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
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
          </div>

          <BlurTextReveal
            as="p"
            delay={0.2}
            duration={0.7}
            className="font-poppins text-[#0b0c1c] text-xs sm:text-base md:text-[18px] leading-relaxed max-w-4xl mx-auto mt-2.5 sm:mt-5 text-balance"
          >
            {description}
          </BlurTextReveal>
        </div>

        {/* Featured Large Hero Photo / Prayer House Facility */}
        <RevealOnScroll direction="up" distance={28} duration={0.8} delay={0.15} className="mt-6 sm:mt-10 md:mt-12 max-w-[1140px] mx-auto">
          <div className="relative w-full aspect-[1140/583] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
            <Image
              src={resolvedBannerUrl}
              alt={resolvedBannerAlt}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
              priority
            />
          </div>

          {/* Bold Statement Below Hero */}
          {subtitle && (
            <div className="mt-4 sm:mt-6 text-center">
              <BlurTextReveal
                as="p"
                delay={0.3}
                duration={0.6}
                className="font-poppins font-semibold text-[#1f3a5f] text-xs sm:text-base md:text-[22px] tracking-wide max-w-3xl mx-auto"
              >
                {subtitle}
              </BlurTextReveal>
            </div>
          )}
        </RevealOnScroll>
      </div>
    </section>
  )
}

