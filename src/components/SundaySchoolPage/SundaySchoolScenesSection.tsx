'use client'

import React from 'react'
import Image from 'next/image'

interface ScenePhoto {
  id: string
  src: string
  alt: string
}

export const SundaySchoolScenesSection: React.FC = () => {
  // Top Row: 5 authentic Sunday School scenes from Figma
  const row1Photos: ScenePhoto[] = [
    {
      id: 'ss-1',
      src: '/figma-assets/4d4761196131ce8961488f09c189e5a63809c918.png',
      alt: 'Sunday School Children Reciting Scripture',
    },
    {
      id: 'ss-2',
      src: '/figma-assets/64e93a20b8fe749de6236fe02d70cbc7c38054f7.png',
      alt: 'Sunday School Hall and Young Learners',
    },
    {
      id: 'ss-3',
      src: '/figma-assets/fc5850061a1b97083923002e17103dce8dbe7575.png',
      alt: 'Greater Branch Sydney Sunday School Activity',
    },
    {
      id: 'ss-4',
      src: '/figma-assets/53cc1f23c0f197687452e0f24311e5e825b9c472.png',
      alt: 'Kapurthala & Kharagpur Sunday School Group',
    },
    {
      id: 'ss-5',
      src: '/figma-assets/b806995f5a4cbef8775c01600f58b10ee5f1bab1.png',
      alt: 'Sunday School Bible Learning & Singing',
    },
  ]

  // Bottom Row: 5 authentic Sunday School scenes from Figma
  const row2Photos: ScenePhoto[] = [
    {
      id: 'ss-6',
      src: '/figma-assets/46d77c804e9de83f316fa73a692abe284168ec06.png',
      alt: 'Fatehabad & Gaya Bihar Sunday School Branch',
    },
    {
      id: 'ss-7',
      src: '/figma-assets/eaf236190a0ded0162d655e3e94bd1278f7f66b3.png',
      alt: 'Chandigarh & Chapra Bihar Sunday School Students',
    },
    {
      id: 'ss-8',
      src: '/figma-assets/53b701f138eda24b90a19105652d30788c7a52f5.png',
      alt: 'Birmingham Sunday School Class',
    },
    {
      id: 'ss-9',
      src: '/figma-assets/7ac5e154d17617ec8deccc6a8263eee659bf249a.png',
      alt: 'Mandi Dabwali & Rayya Sunday School Children',
    },
  ]

  const row1Duplicated = [...row1Photos, ...row1Photos, ...row1Photos]
  const row2Duplicated = [...row2Photos, ...row2Photos, ...row2Photos]

  return (
    <section className="py-6 sm:py-10 md:py-14 bg-white overflow-hidden select-none" data-node-id="289:3779">
      {/* Full-width Dark Navy Header Bar with edge-to-edge Gold Accent Bars (Figma 289:3779 / 289:3780) */}
      <div className="bg-[#122f4a] py-4 sm:py-5 md:py-6 text-white relative shadow-sm mb-6 sm:mb-10 md:mb-12">
        <div className="w-full flex items-center justify-between">
          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

          <h2 className="font-poppins font-semibold text-white text-sm sm:text-2xl md:text-[28px] text-center px-3 sm:px-8 md:px-12 tracking-wide uppercase flex-shrink min-w-0">
            SCENES OF SUNDAY SCHOOL MINISTRIES
          </h2>

          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
        </div>
      </div>

      {/* 2-Row Smooth Marquee Gallery */}
      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Row 1: Leftward slider */}
        <div className="relative w-full overflow-hidden flex">
          <div className="flex gap-4 sm:gap-6 animate-marquee flex-nowrap shrink-0 hover:[animation-play-state:paused]">
            {row1Duplicated.map((photo, index) => (
              <div
                key={`ss-r1-${photo.id}-${index}`}
                className="relative w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 shrink-0 group transform transition-transform duration-300 hover:scale-103"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward slider */}
        <div className="relative w-full overflow-hidden flex">
          <div className="flex gap-4 sm:gap-6 animate-marquee-reverse flex-nowrap shrink-0 hover:[animation-play-state:paused]">
            {row2Duplicated.map((photo, index) => (
              <div
                key={`ss-r2-${photo.id}-${index}`}
                className="relative w-[220px] sm:w-[300px] md:w-[367px] h-[140px] sm:h-[180px] md:h-[220px] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-md border border-slate-200 bg-slate-900 shrink-0 group transform transition-transform duration-300 hover:scale-103"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
