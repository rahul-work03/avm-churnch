'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface ScenePhotoItem {
  id?: string
  image?: any
  imageFallback?: string
  src?: string
  alt?: string
}

export interface ScenesSectionProps {
  headerTitle?: string
  row1Photos?: ScenePhotoItem[]
  row2Photos?: ScenePhotoItem[]
}

const DEFAULT_ROW1_PHOTOS: ScenePhotoItem[] = [
  {
    id: 'sc-1',
    src: '/scenes_of_prayer_mountain/image_1.png',
    alt: 'Prayer Mountain Scenic View 1',
  },
  {
    id: 'sc-2',
    src: '/scenes_of_prayer_mountain/image_2.png',
    alt: 'Prayer Mountain Scenic View 2',
  },
  {
    id: 'sc-3',
    src: '/scenes_of_prayer_mountain/image_3.png',
    alt: 'Prayer Mountain Scenic View 3',
  },
  {
    id: 'sc-4',
    src: '/scenes_of_prayer_mountain/image_4.png',
    alt: 'Prayer Mountain Scenic View 4',
  },
  {
    id: 'sc-5',
    src: '/scenes_of_prayer_mountain/image_5.png',
    alt: 'Prayer Mountain Scenic View 5',
  },
]

const DEFAULT_ROW2_PHOTOS: ScenePhotoItem[] = [
  {
    id: 'sc-6',
    src: '/scenes_of_prayer_mountain/image_6.png',
    alt: 'Prayer Mountain Scenic View 6',
  },
  {
    id: 'sc-7',
    src: '/scenes_of_prayer_mountain/image_7.png',
    alt: 'Prayer Mountain Scenic View 7',
  },
  {
    id: 'sc-8',
    src: '/scenes_of_prayer_mountain/image_8.png',
    alt: 'Prayer Mountain Scenic View 8',
  },
  {
    id: 'sc-9',
    src: '/scenes_of_prayer_mountain/image_9.png',
    alt: 'Prayer Mountain Scenic View 9',
  },
  {
    id: 'sc-10',
    src: '/scenes_of_prayer_mountain/image_10.png',
    alt: 'Prayer Mountain Scenic View 10',
  },
]

const buildSeamlessMarquee = (items: ScenePhotoItem[], minHalfCount = 8) => {
  if (!items || items.length === 0) return []
  let oneHalf: ScenePhotoItem[] = []
  while (oneHalf.length < minHalfCount) {
    oneHalf = [...oneHalf, ...items]
  }
  return [...oneHalf, ...oneHalf]
}

export const ScenesSection: React.FC<ScenesSectionProps> = ({
  headerTitle = 'SCENES OF PRAYER MOUNTAIN',
  row1Photos,
  row2Photos,
}) => {
  const activeRow1 = row1Photos && row1Photos.length > 0 ? row1Photos : DEFAULT_ROW1_PHOTOS
  const activeRow2 = row2Photos && row2Photos.length > 0 ? row2Photos : DEFAULT_ROW2_PHOTOS

  const row1Duplicated = buildSeamlessMarquee(activeRow1)
  const row2Duplicated = buildSeamlessMarquee(activeRow2)

  return (
    <section className="relative overflow-hidden select-none" data-node-id="279:2081">
      {/* Luminous Sapphire Header Bar */}
      <EditorialSectionHeader
        eyebrow="HOLY GROUNDS & VISTAS"
        title={headerTitle}
        variant="atmospheric"
      />

      <SacredCanvas tone="pure-light" className="pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-14 md:pb-16">
        {/* 2-Row Opposite Direction Marquee Gallery */}
        <RevealOnScroll direction="up" distance={20} duration={0.7} delay={0.1} className="flex flex-col gap-4 sm:gap-6">
        {/* Row 1: Leftward slider */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-left flex gap-4 sm:gap-6 py-1">
            {row1Duplicated.map((photo, index) => {
              const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/figma-assets/36eda1c5a6d082acb6e73e8881c8595815a11a60.png')

              return (
                <div
                  key={`r1-${photo.id || index}-${index}`}
                  className="relative flex-shrink-0 w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <Image
                    src={photoUrl}
                    alt={photo.alt || 'Prayer Mountain Scene'}
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
              const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/figma-assets/38c0e2d311bde0d312937a97c60e92a2e2d34116.png')

              return (
                <div
                  key={`r2-${photo.id || index}-${index}`}
                  className="relative flex-shrink-0 w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <Image
                    src={photoUrl}
                    alt={photo.alt || 'Prayer Mountain Scene'}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </RevealOnScroll>
      </SacredCanvas>
    </section>
  )
}
