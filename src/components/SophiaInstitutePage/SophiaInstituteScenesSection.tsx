'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, GoldBarReveal } from '@/components/ui/text-reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface SophiaInstituteSceneItem {
  id?: string
  image?: any
  imageFallback?: string
  src?: string
  alt?: string
}

export interface SophiaInstituteScenesSectionProps {
  headerTitle?: string
  row1Photos?: SophiaInstituteSceneItem[]
  row2Photos?: SophiaInstituteSceneItem[]
}

const DEFAULT_ROW1_PHOTOS: SophiaInstituteSceneItem[] = [
  {
    id: 'si-1',
    src: '/scenes_of_sophia_institute/image_1.png',
    alt: 'Sophia Institute Theological Lecture Hall & Classroom',
  },
  {
    id: 'si-2',
    src: '/scenes_of_sophia_institute/image_2.png',
    alt: 'Study & Scripture Research Center',
  },
  {
    id: 'si-3',
    src: '/scenes_of_sophia_institute/image_3.png',
    alt: 'Scriptural Library & Resource Archives',
  },
]

const DEFAULT_ROW2_PHOTOS: SophiaInstituteSceneItem[] = [
  {
    id: 'si-4',
    src: '/scenes_of_sophia_institute/image_4.png',
    alt: 'Digital Study & Computer Lab Stations',
  },
  {
    id: 'si-5',
    src: '/scenes_of_sophia_institute/image_5.png',
    alt: 'Student Fellowship & Discussion Space',
  },
  {
    id: 'si-6',
    src: '/scenes_of_sophia_institute/image_6.png',
    alt: 'Institute Campus & Meditation Sanctuary',
  },
]

const buildSeamlessMarquee = (items: SophiaInstituteSceneItem[], minHalfCount = 8) => {
  if (!items || items.length === 0) return []
  let oneHalf: SophiaInstituteSceneItem[] = []
  while (oneHalf.length < minHalfCount) {
    oneHalf = [...oneHalf, ...items]
  }
  return [...oneHalf, ...oneHalf]
}

export const SophiaInstituteScenesSection: React.FC<SophiaInstituteScenesSectionProps> = ({
  headerTitle = 'SCENES OF SOPHIA INSTITUTE',
  row1Photos,
  row2Photos,
}) => {
  const activeRow1 = row1Photos && row1Photos.length > 0 ? row1Photos : DEFAULT_ROW1_PHOTOS
  const activeRow2 = row2Photos && row2Photos.length > 0 ? row2Photos : DEFAULT_ROW2_PHOTOS

  const row1Duplicated = buildSeamlessMarquee(activeRow1)
  const row2Duplicated = buildSeamlessMarquee(activeRow2)

  return (
    <section className="py-6 sm:py-10 md:py-14 bg-white overflow-hidden select-none" data-node-id="sophia-scenes">
      {/* Dark Navy Section Header Bar */}
      <div className="bg-[#122f4a] py-4 sm:py-5 md:py-6 text-white relative shadow-sm mb-6 sm:mb-10 md:mb-12">
        <div className="w-full flex items-center justify-between">
          <GoldBarReveal
            direction="left"
            className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0"
          />

          <TextWordReveal
            as="h2"
            delay={0.05}
            staggerDelay={0.035}
            className="font-poppins font-semibold text-white text-sm sm:text-2xl md:text-[28px] text-center px-3 sm:px-8 md:px-12 tracking-wide uppercase flex-shrink min-w-0"
          >
            {headerTitle}
          </TextWordReveal>

          <GoldBarReveal
            direction="right"
            className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0"
          />
        </div>
      </div>

      {/* 2-Row Opposite Direction Marquee Gallery */}
      <RevealOnScroll direction="up" distance={20} duration={0.7} delay={0.1} className="flex flex-col gap-4 sm:gap-6">
        {/* Row 1: Leftward slider */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-left flex gap-4 sm:gap-6 py-1">
            {row1Duplicated.map((photo, index) => {
              const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/scenes_of_sophia_institute/image_1.png')

              return (
                <div
                  key={`si-r1-${photo.id || index}-${index}`}
                  className="relative flex-shrink-0 w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <Image
                    src={photoUrl}
                    alt={photo.alt || 'Sophia Institute Scene'}
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
              const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/scenes_of_sophia_institute/image_4.png')

              return (
                <div
                  key={`si-r2-${photo.id || index}-${index}`}
                  className="relative flex-shrink-0 w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <Image
                    src={photoUrl}
                    alt={photo.alt || 'Sophia Institute Scene'}
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

export default SophiaInstituteScenesSection

