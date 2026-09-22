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
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c]">
      {/* 1. Hero / Overview */}
      <div className="bg-white relative w-full overflow-hidden">
        <PrayerMountainHeroSection
          headerTitle={data?.heroHeaderTitle}
          description={data?.heroDescription}
          bannerImage={data?.heroBannerImage}
          bannerImageFallback={data?.heroBannerFallback}
          bannerAlt={data?.heroBannerAlt}
          subtitle={data?.heroSubtitle}
        />
      </div>

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

      {/* 4. Testimonies of Prayer Mountain */}
      <TestimoniesSection
        headerTitle={data?.testimoniesHeaderTitle}
        testimonies={data?.testimonies}
      />

      {/* 5. Join Us in Prayers (Schedule & Location) */}
      <JoinUsSection
        joinHeaderTitle={data?.joinHeaderTitle}
        timeCardTitle={data?.timeCardTitle}
        timeCardDescription={data?.timeCardDescription}
        locationCardTitle={data?.locationCardTitle}
        locationCardDescription={data?.locationCardDescription}
        locationUrl={data?.locationUrl}
      />
    </main>
  )
}

