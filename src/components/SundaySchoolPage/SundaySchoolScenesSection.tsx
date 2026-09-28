'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface SundaySchoolSceneItem {
  id?: string
  image?: any
  imageFallback?: string
  src?: string
  alt?: string
}

export interface SundaySchoolScenesSectionProps {
  headerTitle?: string | null
  scenesHeaderTitle?: string | null
  row1Photos?: SundaySchoolSceneItem[] | null
  scenesRow1?: SundaySchoolSceneItem[] | null
  row2Photos?: SundaySchoolSceneItem[] | null
  scenesRow2?: SundaySchoolSceneItem[] | null
}

const DEFAULT_ROW1_PHOTOS: SundaySchoolSceneItem[] = [
  {
    id: 'ss-1',
    src: '/scenes_of_sunday_school/image_1.png',
    alt: 'Sunday School Children Bible Activity 1',
  },
  {
    id: 'ss-2',
    src: '/scenes_of_sunday_school/image_2.png',
    alt: 'Sunday School Bible Learning and Worship 2',
  },
  {
    id: 'ss-3',
    src: '/scenes_of_sunday_school/image_3.png',
    alt: 'Sunday School Fellowship and Prayer 3',
  },
  {
    id: 'ss-4',
    src: '/scenes_of_sunday_school/image_4.png',
    alt: 'Sunday School Young Believers Classroom 4',
  },
]

const DEFAULT_ROW2_PHOTOS: SundaySchoolSceneItem[] = [
  {
    id: 'ss-5',
    src: '/scenes_of_sunday_school/image_5.png',
    alt: 'Sunday School Scripture Recitation 5',
  },
  {
    id: 'ss-6',
    src: '/scenes_of_sunday_school/image_6.png',
    alt: 'Sunday School Branch Students 6',
  },
  {
    id: 'ss-7',
    src: '/scenes_of_sunday_school/image_7.png',
    alt: 'Sunday School Youth Mentorship 7',
  },
  {
    id: 'ss-8',
    src: '/scenes_of_sunday_school/image_8.png',
    alt: 'Sunday School Praise and Fellowship 8',
  },
]

const buildSeamlessMarquee = (items: SundaySchoolSceneItem[], minHalfCount = 8) => {
  if (!items || items.length === 0) return []
  let oneHalf: SundaySchoolSceneItem[] = []
  while (oneHalf.length < minHalfCount) {
    oneHalf = [...oneHalf, ...items]
  }
  return [...oneHalf, ...oneHalf]
}

export const SundaySchoolScenesSection: React.FC<SundaySchoolScenesSectionProps> = ({
  headerTitle,
  scenesHeaderTitle,
  row1Photos,
  scenesRow1,
  row2Photos,
  scenesRow2,
}) => {
  const displayTitle = scenesHeaderTitle || headerTitle || 'SCENES OF SUNDAY SCHOOL MINISTRIES'
  const list1 = scenesRow1 || row1Photos
  const list2 = scenesRow2 || row2Photos
  const activeRow1 = list1 && list1.length > 0 ? list1 : DEFAULT_ROW1_PHOTOS
  const activeRow2 = list2 && list2.length > 0 ? list2 : DEFAULT_ROW2_PHOTOS

  const row1Duplicated = buildSeamlessMarquee(activeRow1)
  const row2Duplicated = buildSeamlessMarquee(activeRow2)

  return (
    <section className="relative overflow-hidden select-none" data-node-id="289:3779">
      {/* Luminous Atmospheric Header Bar */}
      <EditorialSectionHeader
        eyebrow="YOUTH FELLOWSHIP & CLASSROOMS"
        title={displayTitle}
        variant="atmospheric"
      />

      <SacredCanvas tone="pure-light" className="pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-14 md:pb-16">
        {/* 2-Row Opposite Direction Marquee Gallery */}
        <RevealOnScroll direction="up" distance={20} duration={0.7} delay={0.1} className="flex flex-col gap-4 sm:gap-6">
          {/* Row 1: Leftward slider */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee-left flex gap-4 sm:gap-6 py-1">
              {row1Duplicated.map((photo, index) => {
                const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/scenes_of_sunday_school/image_1.png')

                return (
                  <div
                    key={`ss-r1-${photo.id || index}-${index}`}
                    className="relative flex-shrink-0 w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <Image
                      src={photoUrl}
                      alt={photo.alt || 'Sunday School Scene'}
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
                const photoUrl = getMediaUrl(photo.image, photo.imageFallback || photo.src || '/scenes_of_sunday_school/image_5.png')

                return (
                  <div
                    key={`ss-r2-${photo.id || index}-${index}`}
                    className="relative flex-shrink-0 w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <Image
                      src={photoUrl}
                      alt={photo.alt || 'Sunday School Scene'}
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

