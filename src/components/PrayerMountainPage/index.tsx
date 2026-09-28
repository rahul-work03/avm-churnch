'use client'

import React from 'react'
import { PrayerMountainHeroSection } from './PrayerMountainHeroSection'
import { ScenesSection } from './ScenesSection'
import { WhatIsSection } from './WhatIsSection'
import { TestimoniesSection } from './TestimoniesSection'
import { JoinUsSection } from './JoinUsSection'

export interface PrayerMountainPageProps {
  data?: any
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
        whatIsCardTitle={data?.whatIsCardTitle}
        whatIsCardDescription={data?.whatIsCardDescription}
        visionCardTitle={data?.visionCardTitle}
        purposeParagraph={data?.purposeParagraph}
        visionParagraph={data?.visionParagraph}
      />

      {/* 4. Testimonies of Prayer Mountain (Auto-Sliding 6-Item Carousel) */}
      <TestimoniesSection
        headerTitle={data?.testimoniesHeaderTitle}
        testimonies={data?.testimonies}
      />

      {/* 5. Join Us in Prayers (Schedule & Daily Gatherings) */}
      <JoinUsSection
        joinHeaderTitle={data?.joinHeaderTitle}
        timeCardTitle={data?.timeCardTitle}
        timeCardDescription={data?.timeCardDescription}
      />
    </main>
  )
}


