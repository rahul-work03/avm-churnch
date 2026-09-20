'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/reveal'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'

export interface SermonCardItem {
  id?: string
  title: string
  thumbnail?: any
  thumbnailFallback?: string
  youtubeUrl?: string
  href?: string
}

export interface SermonsSectionProps {
  headerTitle?: string
  featuredBannerImage?: any
  featuredBannerFallback?: string
  featuredBannerAlt?: string
  featuredBannerUrl?: string
  sermons?: SermonCardItem[]
}

const DEFAULT_SERMONS: SermonCardItem[] = [
  {
    id: '274:47',
    thumbnailFallback: '/figma-assets/48f12ed5d9b6840b88f39ce9bb043aec1ccb6a56.png',
    title: 'UK BIRMINGHAM BIGGEST CRUSADE 2026 | DAY-1 | @AnkurNarulaMinistries',
    youtubeUrl: 'https://www.youtube.com/@AnkurNarulaMinistries',
  },
  {
    id: '274:57',
    thumbnailFallback: '/figma-assets/cc53996176557069c904f11dc953b5577515397e.png',
    title: 'Get Ready for Full Night Thursday Prayer Meeting (27-08-2026) #ankurnarulaministries',
    youtubeUrl: 'https://www.youtube.com/hashtag/ankurnarulaministries',
  },
  {
    id: '274:66',
    thumbnailFallback: '/figma-assets/48f12ed5d9b6840b88f39ce9bb043aec1ccb6a56.png',
    title: 'A FRESH ENCOUNTER WITH JESUS | MORNING WORSHIP | 27-08-2026 @AnkurNarulaMinistries',
    youtubeUrl: 'https://www.youtube.com/@AnkurNarulaMinistries',
  },
  {
    id: '274:52',
    thumbnailFallback: '/figma-assets/48f12ed5d9b6840b88f39ce9bb043aec1ccb6a56.png',
    title: 'Marriage के 18 साल बाद मिली बच्चे की आशीष! | Powerful Testimony #ankurnarulaministries',
    youtubeUrl: 'https://www.youtube.com/hashtag/ankurnarulaministries',
  },
  {
    id: '274:61',
    thumbnailFallback: '/figma-assets/48f12ed5d9b6840b88f39ce9bb043aec1ccb6a56.png',
    title: 'MAGNIFY THE NAME OF THE LORD | MORNING WORSHIP | 25-08-2026 @AnkurNarulaMinistries',
    youtubeUrl: 'https://www.youtube.com/@AnkurNarulaMinistries',
  },
  {
    id: '274:71',
    thumbnailFallback: '/figma-assets/48f12ed5d9b6840b88f39ce9bb043aec1ccb6a56.png',
    title: 'PRAYER MOUNTAIN | 🔴LIVE SPECIAL PRAYER FOR FAMILY PEACE | 25-08-2026 | @AnkurNarulaMinistries',
    youtubeUrl: 'https://www.youtube.com/@AnkurNarulaMinistries',
  },
]

export const SermonsSection: React.FC<SermonsSectionProps> = ({
  headerTitle = 'Watch Our Latest Sermons',
  featuredBannerImage,
  featuredBannerFallback = '/figma-assets/7943a96b8cbd9a1d629265528efec1a38a3d4265.png',
  featuredBannerAlt = 'Thursday Full Night Prayer Service',
  featuredBannerUrl = 'https://www.youtube.com/@AnkurNarulaMinistries',
  sermons,
}) => {
  const activeSermons = sermons && sermons.length > 0 ? sermons : DEFAULT_SERMONS
  const bannerImgUrl = getMediaUrl(featuredBannerImage, featuredBannerFallback)
  const bannerImgAlt = getMediaAlt(featuredBannerImage, featuredBannerAlt)

  return (
    <section className="relative bg-[#f8fafc] overflow-hidden" data-node-id="274:3">
      {/* Upper Dark Background Container for Sermon Header & Big Banner */}
      <div className="bg-[#0b131d] pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 text-white">
        {/* Section Header with Left & Right Gold Bars */}
        <RevealOnScroll direction="up" distance={16} duration={0.6} className="w-full flex items-center justify-between mb-8 sm:mb-12">
          <div className="w-[180px] lg:w-[280px] xl:w-[323px] h-[8px] bg-[#efbf04] rounded-r-full shadow-sm" />

          <div className="text-center px-4 sm:px-10 flex-shrink-0">
            <h2 className="font-poppins font-medium text-white text-xl sm:text-3xl md:text-[38px] lg:text-[40px] leading-tight">
              {headerTitle}
            </h2>
          </div>

          <div className="w-[180px] lg:w-[280px] xl:w-[323px] h-[8px] bg-[#efbf04] rounded-l-full shadow-sm" />
        </RevealOnScroll>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Big Featured Worship Banner */}
          <RevealOnScroll direction="up" distance={24} duration={0.8} delay={0.1} className="max-w-[1140px] mx-auto">
            <a
              href={featuredBannerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full aspect-[16/9] sm:aspect-[1140/625] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl border border-white/10 bg-black group cursor-pointer"
            >
              <Image
                src={bannerImgUrl}
                alt={bannerImgAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </a>
          </RevealOnScroll>
        </div>
      </div>

      {/* Grid of Sermon Video Cards with spacious layout */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 relative z-10">
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 justify-items-center"
        >
          {activeSermons.map((card, idx) => {
            const thumbUrl = getMediaUrl(card.thumbnail, card.thumbnailFallback || '/figma-assets/48f12ed5d9b6840b88f39ce9bb043aec1ccb6a56.png')
            const targetHref = card.youtubeUrl || card.href || 'https://www.youtube.com/@AnkurNarulaMinistries'

            return (
              <StaggerItem
                key={card.id || idx}
                direction="up"
                distance={24}
                duration={0.5}
                className="w-full max-w-[380px] md:max-w-[367px] bg-white border border-[#f3f3f3] rounded-[20px] p-5 sm:p-6 shadow-[0px_12px_24px_rgba(0,0,0,0.06)] flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                data-node-id={card.id}
              >
                {/* Thumbnail with Play Button Overlay */}
                <div className="relative w-full h-[185px] sm:h-[195px] rounded-[16px] overflow-hidden bg-slate-900 flex-shrink-0">
                  <Image
                    src={thumbUrl}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/30">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Image
                        src="/figma-assets/b78e00c8c2faa3d5aa95a6dbe2b20e4da4041458.png"
                        alt="Play"
                        width={48}
                        height={48}
                        className="drop-shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="my-5 text-center px-1 min-h-[52px] flex items-center justify-center">
                  <h4 className="font-poppins font-bold text-[#1f3a5f] text-xs sm:text-sm md:text-[15px] leading-snug line-clamp-2">
                    {card.title}
                  </h4>
                </div>

                {/* Gold Watch Now CTA Button */}
                <div className="mt-auto flex justify-center pt-2">
                  <a
                    href={targetHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[174px] h-[42px] bg-[#efbf04] hover:bg-[#dfaf00] text-[#0f121e] font-poppins font-semibold text-xs sm:text-[14px] rounded-full flex items-center justify-center shadow-sm transition-all duration-200 hover:shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Watch Now</span>
                  </a>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
