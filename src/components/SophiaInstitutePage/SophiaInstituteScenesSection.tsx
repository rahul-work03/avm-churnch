'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll } from '@/components/ui/reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
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
    <section className="relative overflow-hidden select-none" data-node-id="sophia-scenes">
      {/* Luminous Atmospheric Header Bar */}
      <EditorialSectionHeader
        eyebrow="CAMPUS & RESEARCH ARCHIVES"
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
      </SacredCanvas>
    </section>
  )
}

export default SophiaInstituteScenesSection

