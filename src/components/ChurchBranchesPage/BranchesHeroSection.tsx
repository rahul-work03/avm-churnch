'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/reveal'
import { BlurTextReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'

export interface BranchesHeroSectionProps {
  heroHeaderTitle?: string | null
  heroSubtitle?: string | null
  heroDescription?: string | null
  heroVideo?: any
  heroVideoFallback?: string | null
  bannerVideoUrl?: string | null
  heroBannerImage?: any
  heroBannerFallback?: string | null
  heroBannerAlt?: string | null
}

export const BranchesHeroSection: React.FC<BranchesHeroSectionProps> = ({
  heroHeaderTitle = 'OUR CHURCH BRANCHES',
  heroSubtitle = 'GLOBAL WORSHIP CENTERS',
  heroDescription = 'Connecting believers worldwide in worship, faith, and apostolic power. Locate our Apostolic Headquarters or find a church branch near you.',
  heroVideo,
  heroVideoFallback,
  bannerVideoUrl,
  heroBannerImage,
  heroBannerFallback = '/church_branches_hero.png',
  heroBannerAlt = 'Our Branches - Ankur Narula Ministries',
}) => {
  const resolvedVideoUrl = bannerVideoUrl || (heroVideo ? getMediaUrl(heroVideo, heroVideoFallback || '/church_branches_hero.mp4') : null)
  const resolvedBannerUrl = getMediaUrl(heroBannerImage, heroBannerFallback || '/church_branches_hero.png')
  const resolvedBannerAlt = getMediaAlt(heroBannerImage, heroBannerAlt || 'Our Branches')

  return (
    <section className="relative pt-28 pb-8 sm:pt-32 sm:pb-12 md:pt-36 md:pb-14 bg-transparent select-none" data-node-id="286:2994">
      <SacredCanvas tone="warm-alabaster" className="py-2">
        {/* Full-bleed Editorial Section Header */}
        <div className="w-full text-center pt-2 sm:pt-4 mb-4 sm:mb-6">
          <EditorialSectionHeader
            title={heroHeaderTitle || 'OUR CHURCH BRANCHES'}
            subtitle={heroDescription || undefined}
            variant="editorial"
            align="center"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured 1140x620 Rounded Hero Video or Photo Container */}
          <RevealOnScroll direction="up" distance={24} duration={0.8} delay={0.15} className="mt-4 sm:mt-8 md:mt-10 max-w-[1140px] mx-auto">
            <div className="relative w-full aspect-[16/9] rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-950 group">
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
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1140px"
                />
              )}
              {/* Ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </RevealOnScroll>
        </div>
      </SacredCanvas>
    </section>
  )
}

