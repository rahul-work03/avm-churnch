'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface MinistriesHeroSectionProps {
  badgeText?: string
  subtitle?: string
  heroVideo?: any
  heroVideoFallback?: string
  bannerVideoUrl?: string
  bannerImage?: any
  bannerImageFallback?: string
  bannerAlt?: string
}

export const MinistriesHeroSection: React.FC<MinistriesHeroSectionProps> = ({
  badgeText = 'OUR MINISTRIES',
  subtitle = 'Transforming Lives Through Service',
  heroVideo,
  heroVideoFallback = '/ministries_hero_video.mp4',
  bannerVideoUrl,
}) => {
  const resolvedVideoUrl =
    bannerVideoUrl ||
    getMediaUrl(heroVideo, heroVideoFallback || '/ministries_hero_video.mp4')

  return (
    <section className="relative pt-28 pb-6 sm:pt-32 sm:pb-10 md:pt-36 md:pb-12 bg-transparent" data-node-id="277:1632">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" distance={24} duration={0.8}>
          {/* Large Golden-Bordered Hero Banner Video Container */}
          <div className="relative w-full max-w-[1140px] mx-auto aspect-[1140/580] rounded-[16px] sm:rounded-[20px] overflow-hidden border border-[#d4af37]/70 shadow-2xl bg-slate-950 group">
            {/* Hero Background Infinite Autoplay Video */}
            <video
              src={resolvedVideoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-center"
            />

            {/* Gradient Overlays for readable title badge */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/30 pointer-events-none" />

            {/* Top Left Floating Pill Badge & Subtitle */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-4 left-4 sm:top-8 sm:left-8 md:top-10 md:left-10 z-10"
            >
              {/* Pill Badge */}
              <div className="inline-flex items-center justify-center bg-[#071d36]/90 backdrop-blur-md border border-[#d4af37]/80 rounded-full px-4 py-1.5 sm:px-7 sm:py-2 shadow-lg">
                <TextWordReveal
                  as="span"
                  delay={0.25}
                  staggerDelay={0.05}
                  className="font-philosopher font-bold text-white text-sm sm:text-2xl md:text-3xl lg:text-[32px] tracking-wider uppercase drop-shadow inline-block"
                >
                  {badgeText}
                </TextWordReveal>
              </div>

              {/* Subtitle */}
              <BlurTextReveal
                as="p"
                delay={0.45}
                duration={0.6}
                className="mt-2 sm:mt-3 font-philosopher italic text-[#efbf04] text-xs sm:text-base md:text-xl lg:text-[22px] tracking-wide drop-shadow-md"
              >
                {subtitle}
              </BlurTextReveal>
            </motion.div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

