'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/reveal'
import { BlurTextReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'

export interface SophiaInstituteHeroSectionProps {
  headerTitle?: string
  description?: string
  heroVideo?: any
  heroVideoFallback?: string
  bannerVideoUrl?: string
  bannerImage?: any
  bannerImageFallback?: string
  bannerAlt?: string
  subtitle?: string
}

export const SophiaInstituteHeroSection: React.FC<SophiaInstituteHeroSectionProps> = ({
  headerTitle = 'Sophia Institute',
  description = 'Welcome to Sophia Institute, a place dedicated to nurturing faith, wisdom, and a deeper understanding of the Word of God. Through Scripture, prayer, teaching, and fellowship, we seek to encourage believers to grow in their relationship with Christ and live out their faith with love, truth, and purpose.',
  heroVideo,
  heroVideoFallback,
  bannerVideoUrl,
  bannerImage,
  bannerImageFallback = '/sophia_institute_hero.png',
  bannerAlt = 'Sophia Institute - Learning and Theological Wisdom',
  subtitle = "Nurturing faith, wisdom, and purpose through the truth of God's Word.",
}) => {
  const resolvedVideoUrl = bannerVideoUrl || (heroVideo ? getMediaUrl(heroVideo, heroVideoFallback || '/ministries_hero_video.mp4') : null)
  const resolvedBannerUrl = getMediaUrl(bannerImage, bannerImageFallback)
  const resolvedBannerAlt = getMediaAlt(bannerImage, bannerAlt)

  return (
    <section className="relative pt-28 pb-8 sm:pt-32 sm:pb-12 md:pt-36 md:pb-14 bg-transparent select-none" data-node-id="sophia-hero">
      <SacredCanvas tone="warm-alabaster" className="py-2">
        {/* Full-bleed Editorial Section Header */}
        <div className="w-full text-center pt-2 sm:pt-4 mb-4 sm:mb-6">
          <EditorialSectionHeader
            eyebrow="WISDOM & SCRIPTURAL LEARNING"
            title={headerTitle}
            subtitle={description}
            variant="editorial"
            align="center"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Large Hero Video or Photo Container */}
          <RevealOnScroll direction="up" distance={24} duration={0.8} delay={0.15} className="mt-4 sm:mt-8 md:mt-10 max-w-[1140px] mx-auto">
            <div className="relative w-full aspect-[16/9] sm:aspect-[1140/580] rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-950 group">
              {resolvedVideoUrl ? (
                <video
                  src={resolvedVideoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <Image
                  src={resolvedBannerUrl}
                  alt={resolvedBannerAlt}
                  fill
                  className="object-cover object-center sm:object-top transition-transform duration-700 group-hover:scale-103"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1140px"
                />
              )}
              {/* Subtle ambient gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtitle Below Hero */}
            {subtitle && (
              <div className="mt-5 sm:mt-7 text-center">
                <BlurTextReveal
                  as="p"
                  delay={0.25}
                  duration={0.6}
                  className="font-poppins font-semibold text-[#1f3a5f] text-xs sm:text-base md:text-lg lg:text-[20px] tracking-wide max-w-3xl mx-auto"
                >
                  {subtitle}
                </BlurTextReveal>
              </div>
            )}
          </RevealOnScroll>
        </div>
      </SacredCanvas>
    </section>
  )
}

export default SophiaInstituteHeroSection

