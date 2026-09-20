'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface PrayerHouseSceneItem {
  id?: string
  image?: any
  imageFallback?: string
  src?: string
  alt?: string
}

export interface PrayerHouseScenesSectionProps {
  headerTitle?: string
  row1Photos?: PrayerHouseSceneItem[]
  row2Photos?: PrayerHouseSceneItem[]
}

const DEFAULT_ROW1_PHOTOS: PrayerHouseSceneItem[] = [
  {
    id: 'ph-1',
    src: '/figma-assets/55fa90036842a75181669f3a6aec9e0738913aee.png',
    alt: 'Prayer House Grand Neoclassical Sanctuary',
  },
  {
    id: 'ph-2',
    src: '/figma-assets/6b099d6a283f967b4bf3ff1f51411f14a0fee0ac.png',
    alt: 'Prayer House Lighted Exterior Facade',
  },
  {
    id: 'ph-3',
    src: '/figma-assets/94a1faeb119e4d3406e3e61f9268b121e7b5496f.png',
    alt: 'Paved Tree-Lined Avenues and Grounds',
  },
  {
    id: 'ph-4',
    src: '/figma-assets/38c0e2d311bde0d312937a97c60e92a2e2d34116.png',
    alt: 'Sanctuary Lawns and Open Courtyard',
  },
]

const DEFAULT_ROW2_PHOTOS: PrayerHouseSceneItem[] = [
  {
    id: 'ph-5',
    src: '/figma-assets/36eda1c5a6d082acb6e73e8881c8595815a11a60.png',
    alt: 'Prayer Pavilion and Pathways',
  },
  {
    id: 'ph-6',
    src: '/figma-assets/9969ab6a5c61f58502b9d0ffdb0cac71eff778d2.png',
    alt: 'Greenery and Meditation Walkway',
  },
  {
    id: 'ph-7',
    src: '/figma-assets/74e8182af8627fad3ae428aad2b17d4eca519897.png',
    alt: 'Evening Illuminated Walkway',
  },
  {
    id: 'ph-8',
    src: '/figma-assets/dcd3dfff5990d32ed5316ae442144e3f269cdb3e.png',
    alt: 'Prayer House Retreat Complex',
  },
]

export const PrayerHouseScenesSection: React.FC<PrayerHouseScenesSectionProps> = ({
  headerTitle = 'SCENES OF PRAYER HOUSE',
  row1Photos,
  row2Photos,
}) => {
  const activeRow1 = row1Photos && row1Photos.length > 0 ? row1Photos : DEFAULT_ROW1_PHOTOS
  const activeRow2 = row2Photos && row2Photos.length > 0 ? row2Photos : DEFAULT_ROW2_PHOTOS

  const row1Duplicated = [...activeRow1, ...activeRow1]
  const row2Duplicated = [...activeRow2, ...activeRow2]

  return (
    <section className="py-6 sm:py-10 md:py-14 bg-white overflow-hidden select-none" data-node-id="282:2369">
      {/* Dark Navy Section Header Bar */}
      <RevealOnScroll direction="none" duration={0.6} className="bg-[#122f4a] py-4 sm:py-5 md:py-6 text-white relative shadow-sm mb-6 sm:mb-10 md:mb-12">
        <div className="w-full flex items-center justify-between">
          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

          <h2 className="font-poppins font-semibold text-white text-sm sm:text-2xl md:text-[28px] text-center px-3 sm:px-8 md:px-12 tracking-wide uppercase flex-shrink min-w-0">
            {headerTitle}
          </h2>

          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
        </div>
      </RevealOnScroll>

      {/* 2-Row Opposite Direction Marquee Gallery */}
      <RevealOnScroll direction="up" distance={20} duration={0.7} delay={0.1} className="flex flex-col gap-4 sm:gap-6">
        {/* Row 1: Leftward slider */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-left flex gap-4 sm:gap-6 py-1">
            {row1Duplicated.map((photo, index) => {
              const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/figma-assets/55fa90036842a75181669f3a6aec9e0738913aee.png')

              return (
                <div
                  key={`ph-r1-${photo.id || index}-${index}`}
                  className="relative flex-shrink-0 w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <Image
                    src={photoUrl}
                    alt={photo.alt || 'Prayer House Scene'}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Row 2: Rightward slider */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-right flex gap-4 sm:gap-6 py-1">
            {row2Duplicated.map((photo, index) => {
              const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/figma-assets/36eda1c5a6d082acb6e73e8881c8595815a11a60.png')

              return (
                <div
                  key={`ph-r2-${photo.id || index}-${index}`}
                  className="relative flex-shrink-0 w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <Image
                    src={photoUrl}
                    alt={photo.alt || 'Prayer House Scene'}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

