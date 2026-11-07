'use client'

import React from 'react'
import type { PrayerMountainPage as PrayerMountainPageData } from '@/payload-types'
import { PrayerMountainHeroSection } from './PrayerMountainHeroSection'
import { ScenesSection } from './ScenesSection'
import { WhatIsSection } from './WhatIsSection'
import { TestimoniesSection } from './TestimoniesSection'
import { JoinUsSection } from './JoinUsSection'

export interface PrayerMountainPageProps {
  data?: PrayerMountainPageData | null
}

export const PrayerMountainPage: React.FC<PrayerMountainPageProps> = ({ data }) => {
  return (
    <main className="min-h-screen bg-[#fcfbf9] text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative w-full overflow-hidden">
      {/* 1. Hero / Overview (With Video Banner Support) */}
      <PrayerMountainHeroSection
        headerTitle={data?.heroHeaderTitle}
        description={data?.heroDescription}
        heroVideo={data?.heroVideo}
        heroVideoFallback={data?.heroVideoFallback}
        bannerVideoUrl={data?.bannerVideoUrl}
        bannerImage={data?.heroBannerImage}
        bannerImageFallback={data?.heroBannerFallback}
        bannerAlt={data?.heroBannerAlt}
        subtitle={data?.heroSubtitle}
      />

      {/* 2. Scenes of Prayer Mountain (Dual Row Smooth Marquee Gallery) */}
      <ScenesSection
        headerTitle={data?.scenesHeaderTitle}
        row1Photos={data?.scenesRow1}
        row2Photos={data?.scenesRow2}
      />

      {/* 3. What is Prayer Mountain & Purpose / Vision */}
      <WhatIsSection
        whatIsCardTitle={data?.whatIsCardTitle ?? undefined}
        whatIsCardDescription={data?.whatIsCardDescription ?? undefined}
        visionCardTitle={data?.visionCardTitle ?? undefined}
        purposeParagraph={data?.purposeParagraph ?? undefined}
        visionParagraph={data?.visionParagraph ?? undefined}
      />

      {/* 4. Testimonies of Prayer Mountain (Auto-Sliding 6-Item Carousel) */}
      <TestimoniesSection
        headerTitle={data?.testimoniesHeaderTitle}
        testimonies={data?.testimonies}
      />

      {/* 5. Join Us in Prayers (Schedule & Daily Gatherings) */}
      <JoinUsSection
        joinHeaderTitle={data?.joinHeaderTitle ?? undefined}
        timeCardTitle={data?.timeCardTitle ?? undefined}
        timeCardDescription={data?.timeCardDescription ?? undefined}
      />
    </main>
  )
}


