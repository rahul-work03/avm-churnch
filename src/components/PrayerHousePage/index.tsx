'use client'

import React from 'react'
import { PrayerHouseHeroSection } from './PrayerHouseHeroSection'
import { PrayerHouseScenesSection } from './PrayerHouseScenesSection'
import { PrayerHouseWhatIsSection } from './PrayerHouseWhatIsSection'

export interface PrayerHousePageProps {
  data?: any
}

export const PrayerHousePage: React.FC<PrayerHousePageProps> = ({ data }) => {
  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c]">
      {/* 1. Hero / Overview */}
      <div className="bg-[#ffffe9] relative w-full overflow-hidden">
        <PrayerHouseHeroSection
          headerTitle={data?.heroHeaderTitle}
          description={data?.heroDescription}
          bannerImage={data?.heroBannerImage}
          bannerImageFallback={data?.heroBannerFallback}
          bannerAlt={data?.heroBannerAlt}
          subtitle={data?.heroSubtitle}
        />
      </div>

      {/* 2. Scenes of Prayer House (Dual Row Smooth Marquee Gallery) */}
      <PrayerHouseScenesSection
        headerTitle={data?.scenesHeaderTitle}
        row1Photos={data?.scenesRow1}
        row2Photos={data?.scenesRow2}
      />

      {/* 3. What is Prayer House & Purpose / Vision Cards */}
      <PrayerHouseWhatIsSection
        whatIsCardTitle={data?.whatIsCardTitle}
        whatIsCardDescription={data?.whatIsCardDescription}
        visionCardTitle={data?.visionCardTitle}
        purposeParagraph={data?.purposeParagraph}
        visionParagraph={data?.visionParagraph}
      />
    </main>
  )
}

