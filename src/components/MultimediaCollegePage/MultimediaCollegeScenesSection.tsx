'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface MultimediaCollegeSceneItem {
  id?: string
  image?: any
  imageFallback?: string
  src?: string
  alt?: string
}

export interface MultimediaCollegeScenesSectionProps {
  headerTitle?: string
  row1Photos?: MultimediaCollegeSceneItem[]
  row2Photos?: MultimediaCollegeSceneItem[]
}

const DEFAULT_ROW1_PHOTOS: MultimediaCollegeSceneItem[] = [
  { id: 'mc-1', src: '/scenes_of_multimedia/image_1.png', alt: 'Multimedia College Studio 1' },
  { id: 'mc-2', src: '/scenes_of_multimedia/image_2.png', alt: 'Multimedia College Production 2' },
  { id: 'mc-3', src: '/scenes_of_multimedia/image_3.png', alt: 'Multimedia College Creative Lab 3' },
  { id: 'mc-4', src: '/scenes_of_multimedia/image_4.png', alt: 'Multimedia College Media Tools 4' },
  { id: 'mc-5', src: '/scenes_of_multimedia/image_5.png', alt: 'Multimedia College Broadcasting 5' },
  { id: 'mc-6', src: '/scenes_of_multimedia/image_6.png', alt: 'Multimedia College Practical Work 6' },
  { id: 'mc-7', src: '/scenes_of_multimedia/image_7.png', alt: 'Multimedia College Digital Arts 7' },
  { id: 'mc-8', src: '/scenes_of_multimedia/image_8.png', alt: 'Multimedia College Creative Team 8' },
]

const DEFAULT_ROW2_PHOTOS: MultimediaCollegeSceneItem[] = [
  { id: 'mc-9', src: '/scenes_of_multimedia/image_9.png', alt: 'Multimedia College Editing 9' },
  { id: 'mc-10', src: '/scenes_of_multimedia/image_10.png', alt: 'Multimedia College Audio & Video 10' },
  { id: 'mc-11', src: '/scenes_of_multimedia/image_11.png', alt: 'Multimedia College Control Room 11' },
  { id: 'mc-12', src: '/scenes_of_multimedia/image_12.png', alt: 'Multimedia College Workshop 12' },
  { id: 'mc-13', src: '/scenes_of_multimedia/image_13.png', alt: 'Multimedia College Visual Design 13' },
  { id: 'mc-14', src: '/scenes_of_multimedia/image_14.png', alt: 'Multimedia College Camera Equipment 14' },
  { id: 'mc-15', src: '/scenes_of_multimedia/image_15.png', alt: 'Multimedia College Technical Session 15' },
  { id: 'mc-16', src: '/scenes_of_multimedia/image_16.png', alt: 'Multimedia College Media Impact 16' },
]

const buildSeamlessMarquee = (items: MultimediaCollegeSceneItem[], minHalfCount = 8) => {
  if (!items || items.length === 0) return []
  let oneHalf: MultimediaCollegeSceneItem[] = []
  while (oneHalf.length < minHalfCount) {
    oneHalf = [...oneHalf, ...items]
  }
  return [...oneHalf, ...oneHalf]
}

export const MultimediaCollegeScenesSection: React.FC<MultimediaCollegeScenesSectionProps> = ({
  headerTitle = 'SCENES OF MULTIMEDIA COLLEGE',
  row1Photos,
  row2Photos,
}) => {
  const activeRow1 = row1Photos && row1Photos.length > 0 ? row1Photos : DEFAULT_ROW1_PHOTOS
  const activeRow2 = row2Photos && row2Photos.length > 0 ? row2Photos : DEFAULT_ROW2_PHOTOS

  const row1Duplicated = buildSeamlessMarquee(activeRow1)
  const row2Duplicated = buildSeamlessMarquee(activeRow2)

  return (
    <section className="relative overflow-hidden select-none" data-node-id="multimedia-college-scenes">
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
                const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/scenes_of_multimedia/image_1.png')

                return (
                  <div
                    key={`mc-r1-${photo.id || index}-${index}`}
                    className="relative flex-shrink-0 w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <Image
                      src={photoUrl}
                      alt={photo.alt || 'Multimedia College Scene'}
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
                const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/scenes_of_multimedia/image_9.png')

                return (
                  <div
                    key={`mc-r2-${photo.id || index}-${index}`}
                    className="relative flex-shrink-0 w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <Image
                      src={photoUrl}
                      alt={photo.alt || 'Multimedia College Scene'}
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
