'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, BlurTextReveal, GoldBarReveal } from '@/components/ui/text-reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface PresencePhotoItem {
  id?: string
  image?: any
  imageFallback?: string
  src?: string
  alt?: string
  title?: string
  country?: string
}

export interface InternationalPresenceSectionProps {
  headerTitle?: string
  subtitle?: string
  row1Photos?: PresencePhotoItem[]
  row2Photos?: PresencePhotoItem[]
}

const DEFAULT_ROW1_PHOTOS: PresencePhotoItem[] = [
  {
    id: 'r1-1',
    src: '/man_of_god_international_presence/image_1.png',
    alt: 'Man of God International Presence 1',
  },
  {
    id: 'r1-2',
    src: '/man_of_god_international_presence/image_2.png',
    alt: 'Man of God International Presence 2',
  },
  {
    id: 'r1-3',
    src: '/man_of_god_international_presence/image_3.png',
    alt: 'Man of God International Presence 3',
  },
  {
    id: 'r1-4',
    src: '/man_of_god_international_presence/image_4.png',
    alt: 'Man of God International Presence 4',
  },
  {
    id: 'r1-5',
    src: '/man_of_god_international_presence/image_5.png',
    alt: 'Man of God International Presence 5',
  },
]

const DEFAULT_ROW2_PHOTOS: PresencePhotoItem[] = [
  {
    id: 'r2-1',
    src: '/man_of_god_international_presence/image_6.png',
    alt: 'Man of God International Presence 6',
  },
  {
    id: 'r2-2',
    src: '/man_of_god_international_presence/image_7.png',
    alt: 'Man of God International Presence 7',
  },
  {
    id: 'r2-3',
    src: '/man_of_god_international_presence/image_8.png',
    alt: 'Man of God International Presence 8',
  },
  {
    id: 'r2-4',
    src: '/man_of_god_international_presence/image_9.png',
    alt: 'Man of God International Presence 9',
  },
]

const buildSeamlessMarquee = (items: PresencePhotoItem[], minHalfCount = 8) => {
  if (!items || items.length === 0) return []
  let oneHalf: PresencePhotoItem[] = []
  while (oneHalf.length < minHalfCount) {
    oneHalf = [...oneHalf, ...items]
  }
  return [...oneHalf, ...oneHalf]
}

export const InternationalPresenceSection: React.FC<InternationalPresenceSectionProps> = ({
  headerTitle = 'Man Of God International Presence',
  subtitle = 'Spreading the revival fire, establishing branches, and connecting with global leadership across continents.',
  row1Photos,
  row2Photos,
}) => {
  const activeRow1 = row1Photos && row1Photos.length > 0 ? row1Photos : DEFAULT_ROW1_PHOTOS
  const activeRow2 = row2Photos && row2Photos.length > 0 ? row2Photos : DEFAULT_ROW2_PHOTOS

  const row1Duplicated = buildSeamlessMarquee(activeRow1)
  const row2Duplicated = buildSeamlessMarquee(activeRow2)

  return (
    <section className="pb-12 sm:pb-16 md:pb-24 bg-[#fdfbf3] overflow-hidden select-none" data-node-id="275:810">
      {/* Dark Navy Section Header Bar */}
      <div className="bg-[#122f4a] py-5 sm:py-7 md:py-8 text-white relative shadow-sm">
        <div className="w-full flex items-center justify-between">
          <GoldBarReveal
            direction="left"
            duration={0.7}
            delay={0.1}
            className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0"
          />

          <TextWordReveal
            as="h2"
            delay={0.15}
            staggerDelay={0.04}
            className="font-poppins font-bold text-white text-sm sm:text-2xl md:text-[28px] text-center px-3 sm:px-8 md:px-12 tracking-wide flex-shrink min-w-0"
          >
            {headerTitle}
          </TextWordReveal>

          <GoldBarReveal
            direction="right"
            duration={0.7}
            delay={0.1}
            className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0"
          />
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 sm:pt-8">
        <BlurTextReveal
          as="p"
          delay={0.1}
          duration={0.6}
          className="font-poppins text-slate-600 text-xs sm:text-base md:text-[17px] max-w-2xl mx-auto"
        >
          {subtitle}
        </BlurTextReveal>
      </div>

      {/* Bidirectional Infinite Moving Sliders */}
      <RevealOnScroll direction="up" distance={24} duration={0.8} delay={0.1} className="relative mt-6 sm:mt-10 md:mt-12 w-full overflow-hidden space-y-4 sm:space-y-6">
        {/* Row 1: Moving LEFT */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-left flex gap-4 sm:gap-6 py-1">
            {row1Duplicated.map((photo, idx) => {
              const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/man_of_god_international_presence/image_1.png')

              return (
                <div
                  key={`${photo.id || idx}-${idx}`}
                  className="relative flex-shrink-0 w-[240px] sm:w-[320px] md:w-[380px] h-[155px] sm:h-[210px] md:h-[240px] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-md sm:shadow-lg border border-amber-200/50 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <Image
                    src={photoUrl}
                    alt={photo.alt || photo.title || 'International Presence'}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={idx < 3}
                  />
                  {(photo.country || photo.title) && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                      {/* Card Caption Tag */}
                      <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-left pointer-events-none">
                        {photo.country && (
                          <span className="inline-block px-2 py-0.5 rounded-full bg-[#efbf04] text-[#0b0c1c] font-poppins font-semibold text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                            {photo.country}
                          </span>
                        )}
                        {photo.title && (
                          <p className="font-poppins font-medium text-white text-xs sm:text-sm line-clamp-1">
                            {photo.title}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Row 2: Moving RIGHT */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-right flex gap-4 sm:gap-6 py-1">
            {row2Duplicated.map((photo, idx) => {
              const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/man_of_god_international_presence/image_6.png')

              return (
                <div
                  key={`${photo.id || idx}-${idx}`}
                  className="relative flex-shrink-0 w-[240px] sm:w-[320px] md:w-[380px] h-[155px] sm:h-[210px] md:h-[240px] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-md sm:shadow-lg border border-amber-200/50 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <Image
                    src={photoUrl}
                    alt={photo.alt || photo.title || 'International Presence'}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={idx < 3}
                  />
                  {(photo.country || photo.title) && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                      {/* Card Caption Tag */}
                      <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-left pointer-events-none">
                        {photo.country && (
                          <span className="inline-block px-2 py-0.5 rounded-full bg-[#efbf04] text-[#0b0c1c] font-poppins font-semibold text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                            {photo.country}
                          </span>
                        )}
                        {photo.title && (
                          <p className="font-poppins font-medium text-white text-xs sm:text-sm line-clamp-1">
                            {photo.title}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
