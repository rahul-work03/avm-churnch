'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/reveal'
import { TextWordReveal, GoldBarReveal } from '@/components/ui/text-reveal'
import { getYouTubeEmbedUrl } from '@/utilities/getYouTubeEmbedUrl'

export interface SermonCardItem {
  id?: string | number
  title?: string
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
    id: 'sermon-1',
    title: 'To Reach The Mountain Top You Have to Go Through the Valley #ankurnarulaministries #powerfulsermons',
    youtubeUrl: 'https://www.youtube.com/embed/uho9yd6qOwk?si=DwZIXkJ5U-D-RJqN',
    href: 'https://youtu.be/uho9yd6qOwk?si=kpPWYX9PuOuOtQnK',
  },
  {
    id: 'sermon-2',
    title: 'अत्मिक जीवन की नींव कैसे मजबूत करें? Powerful Sermon By #apostleankuryosephnarula | ANM',
    youtubeUrl: 'https://www.youtube.com/embed/3Yf7o0ZFtrs?si=BL9NAPEplT-wiPJq',
    href: 'https://youtu.be/3Yf7o0ZFtrs?si=-WvKrgbmeTMYtCGK',
  },
  {
    id: 'sermon-3',
    title: 'बिना कर्म के परमेश्वर आपके जीवन में बदलाव नहीं करता | Ankur Narula Ministries #sermon #bibleteaching',
    youtubeUrl: 'https://www.youtube.com/embed/paFWE9SEnp0?si=RB4kHM50rb_2Mvt7',
    href: 'https://youtu.be/paFWE9SEnp0?si=ePvuE2uJUya5c3MS',
  },
  {
    id: 'sermon-4',
    title: 'Spiritual Life में Discipline ज़रूरी है | Powerful Sermon by Apostle Dr. Ankur Yoseph Narula',
    youtubeUrl: 'https://www.youtube.com/embed/C4BZnGqs6OM?si=sthKoaBVcQweue-R',
    href: 'https://youtu.be/C4BZnGqs6OM?si=OHxDh8pK43tRw3N3',
  },
  {
    id: 'sermon-5',
    title: '5 STEPS TO STAND FIRM IN FAITH #apostleankuryosephnarula #ankurnarulaministries',
    youtubeUrl: 'https://www.youtube.com/embed/WzCmeeKme_A?si=FRuREVC4cNpu_7Sc',
    href: 'https://youtu.be/WzCmeeKme_A?si=6Mj2EkozyZsVYaUN',
  },
  {
    id: 'sermon-6',
    title: 'परमेश्वर अभिमानियों का विरोध और दीनों पर अनुग्रह करता है | Powerful Message by Ankur Yoseph Narula',
    youtubeUrl: 'https://www.youtube.com/embed/TMQW9sIjHEI?si=W8AJjYIszp0XVQcO',
    href: 'https://youtu.be/TMQW9sIjHEI?si=7WxEkpgSUFyNviqt',
  },
]

function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:embed\/|v=|youtu\.be\/|\/v\/)([^"&?\/\s]{11})/i)
  return match ? match[1] : null
}

const SermonVideoPlayer: React.FC<{
  embedUrl: string
  title: string
}> = ({ embedUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = extractYouTubeId(embedUrl)
  const thumbUrl = videoId
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : '/figma-assets/48f12ed5d9b6840b88f39ce9bb043aec1ccb6a56.png'

  if (isPlaying) {
    const autoplayUrl = embedUrl.includes('?') ? `${embedUrl}&autoplay=1` : `${embedUrl}?autoplay=1`
    return (
      <iframe
        src={autoplayUrl}
        title={title}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    )
  }

  return (
    <div
      onClick={() => setIsPlaying(true)}
      className="relative w-full h-full bg-slate-950 cursor-pointer group flex items-center justify-center overflow-hidden"
      role="button"
      tabIndex={0}
      aria-label={`Play sermon video: ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setIsPlaying(true)
      }}
    >
      <Image
        src={thumbUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 367px"
      />
      <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition-colors group-hover:bg-black/15">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#efbf04] text-[#0f121e] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export const SermonsSection: React.FC<SermonsSectionProps> = ({
  headerTitle = 'Watch Our Latest Sermons',
  featuredBannerUrl = 'https://www.youtube.com/embed/CPIhQW-8bgo?si=cZrZoi8mfbTqkTYg',
  sermons,
}) => {
  const activeSermons = sermons && sermons.length > 0 ? sermons : DEFAULT_SERMONS
  const bannerEmbedUrl = getYouTubeEmbedUrl(
    featuredBannerUrl,
    'https://www.youtube.com/embed/CPIhQW-8bgo?si=cZrZoi8mfbTqkTYg',
  )

  return (
    <section className="relative bg-[#f8fafc] overflow-hidden" data-node-id="274:3">
      {/* Upper Dark Background Container for Sermon Header & Big Banner */}
      <div className="bg-[#0b131d] pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 text-white">
        {/* Section Header with Left & Right Gold Bars */}
        <div className="w-full flex items-center justify-between mb-8 sm:mb-12 overflow-hidden">
          <GoldBarReveal
            direction="left"
            duration={0.6}
            delay={0.1}
            className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[240px] xl:w-[323px] h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm flex-shrink-0"
          />

          <div className="flex-1 min-w-0 px-2 sm:px-4 md:px-8 text-center">
            <TextWordReveal
              as="h2"
              delay={0.12}
              staggerDelay={0.035}
              className="font-poppins font-medium text-white  sm:text-xl md:text-3xl lg:text-[38px] xl:text-[40px] leading-tight tracking-tight uppercase line-clamp-2"
            >
              {headerTitle}
            </TextWordReveal>
          </div>

          <GoldBarReveal
            direction="right"
            duration={0.6}
            delay={0.1}
            className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[240px] xl:w-[323px] h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm flex-shrink-0"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Big Featured Worship Banner iFrame */}
          <RevealOnScroll direction="up" distance={20} duration={0.6} delay={0.1} className="max-w-[1140px] mx-auto">
            <div className="relative w-full aspect-[16/9] sm:aspect-[1140/625] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl border border-white/10 bg-black">
              <iframe
                src={bannerEmbedUrl}
                title={headerTitle || 'Featured Sermon Video'}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Grid of Sermon Video Cards with spacious layout */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24 relative z-10">
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 justify-items-center"
        >
          {activeSermons.map((card, idx) => {
            const defaultItem = DEFAULT_SERMONS[idx % DEFAULT_SERMONS.length]
            const defaultFallback =
              defaultItem?.youtubeUrl ||
              'https://www.youtube.com/embed/uho9yd6qOwk?si=DwZIXkJ5U-D-RJqN'
            const defaultRedirect = defaultItem?.href || defaultFallback
            const embedUrl = getYouTubeEmbedUrl(card.youtubeUrl || card.href, defaultFallback)
            const targetHref = card.href || card.youtubeUrl || defaultRedirect
            const title = card.title || `Sermon Video ${idx + 1}`

            return (
              <StaggerItem
                key={card.id || idx}
                direction="up"
                distance={20}
                duration={0.4}
                className="w-full max-w-[380px] md:max-w-[367px] bg-white border border-[#f3f3f3] rounded-[20px] p-5 sm:p-6 shadow-[0px_12px_24px_rgba(0,0,0,0.06)] flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                data-node-id={card.id}
              >
                {/* Embedded Responsive YouTube Player / Thumbnail Facade */}
                <div className="relative w-full aspect-[16/9] rounded-[16px] overflow-hidden bg-black flex-shrink-0 shadow-inner">
                  <SermonVideoPlayer embedUrl={embedUrl} title={title} />
                </div>

                {/* Title */}
                {card.title && (
                  <div className="my-4 text-center px-1 min-h-[48px] flex items-center justify-center">
                    <h4 className="font-poppins font-bold text-[#1f3a5f] text-xs sm:text-sm md:text-[15px] leading-snug line-clamp-2">
                      {card.title}
                    </h4>
                  </div>
                )}

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
