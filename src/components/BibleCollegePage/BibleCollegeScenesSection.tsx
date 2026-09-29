'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface BibleCollegeSceneItem {
  id?: string
  image?: any
  imageFallback?: string
  src?: string
  alt?: string
}

export interface BibleCollegeScenesSectionProps {
  headerTitle?: string
  row1Photos?: BibleCollegeSceneItem[]
  row2Photos?: BibleCollegeSceneItem[]
}

const DEFAULT_ROW1_PHOTOS: BibleCollegeSceneItem[] = [
  {
    id: 'bc-1',
    src: '/scenes_of_bible_college/image_1.png',
    alt: 'Bible College Scenic View 1',
  },
  {
    id: 'bc-2',
    src: '/scenes_of_bible_college/image_2.png',
    alt: 'Bible College Scenic View 2',
  },
  {
    id: 'bc-3',
    src: '/scenes_of_bible_college/image_3.png',
    alt: 'Bible College Scenic View 3',
  },
  {
    id: 'bc-4',
    src: '/scenes_of_bible_college/image_4.png',
    alt: 'Bible College Scenic View 4',
  },
  {
    id: 'bc-5',
    src: '/scenes_of_bible_college/image_5.png',
    alt: 'Bible College Scenic View 5',
  },
]

const DEFAULT_ROW2_PHOTOS: BibleCollegeSceneItem[] = [
  {
    id: 'bc-6',
    src: '/scenes_of_bible_college/image_6.png',
    alt: 'Bible College Scenic View 6',
  },
  {
    id: 'bc-7',
    src: '/scenes_of_bible_college/image_7.png',
    alt: 'Bible College Scenic View 7',
  },
  {
    id: 'bc-8',
    src: '/scenes_of_bible_college/image_8.png',
    alt: 'Bible College Scenic View 8',
  },
  {
    id: 'bc-9',
    src: '/scenes_of_bible_college/image_9.png',
    alt: 'Bible College Scenic View 9',
  },
]

const buildSeamlessMarquee = (items: BibleCollegeSceneItem[], minHalfCount = 8) => {
  if (!items || items.length === 0) return []
  let oneHalf: BibleCollegeSceneItem[] = []
  while (oneHalf.length < minHalfCount) {
    oneHalf = [...oneHalf, ...items]
  }
  return [...oneHalf, ...oneHalf]
}

export const BibleCollegeScenesSection: React.FC<BibleCollegeScenesSectionProps> = ({
  headerTitle = 'SCENES OF BIBLE COLLEGE',
  row1Photos,
  row2Photos,
}) => {
  const activeRow1 = row1Photos && row1Photos.length > 0 ? row1Photos : DEFAULT_ROW1_PHOTOS
  const activeRow2 = row2Photos && row2Photos.length > 0 ? row2Photos : DEFAULT_ROW2_PHOTOS

  const row1Duplicated = buildSeamlessMarquee(activeRow1)
  const row2Duplicated = buildSeamlessMarquee(activeRow2)

  return (
    <section className="relative overflow-hidden select-none" data-node-id="284:2612">
      {/* Luminous Atmospheric Header Bar */}
      <EditorialSectionHeader
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
                const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/scenes_of_bible_college/image_1.png')

                return (
                  <div
                    key={`bc-r1-${photo.id || index}-${index}`}
                    className="relative flex-shrink-0 w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <Image
                      src={photoUrl}
                      alt={photo.alt || 'Bible College Scene'}
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
                const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/scenes_of_bible_college/image_6.png')

                return (
                  <div
                    key={`bc-r2-${photo.id || index}-${index}`}
                    className="relative flex-shrink-0 w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <Image
                      src={photoUrl}
                      alt={photo.alt || 'Bible College Scene'}
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

