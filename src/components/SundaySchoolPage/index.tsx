'use client'

import React from 'react'
import { SundaySchoolHeroSection } from './SundaySchoolHeroSection'
import { SundaySchoolScenesSection } from './SundaySchoolScenesSection'
import { SundaySchoolWhatIsSection } from './SundaySchoolWhatIsSection'

interface SundaySchoolPageProps {
  data?: any
}

export const SundaySchoolPage: React.FC<SundaySchoolPageProps> = ({ data }) => {
  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c]">
      {/* 1. Hero / Overview */}
      <div className="bg-white relative w-full overflow-hidden">
        <SundaySchoolHeroSection
          heroHeaderTitle={data?.heroHeaderTitle}
          heroDescription={data?.heroDescription}
          heroBannerImage={data?.heroBannerImage}
          heroBannerFallback={data?.heroBannerFallback}
          heroBannerAlt={data?.heroBannerAlt}
          heroVideoUrl={data?.heroVideoUrl}
          heroSubtitle={data?.heroSubtitle}
        />
      </div>

      {/* 2. Scenes of Sunday School Ministries (Dual Row Smooth Marquee Gallery) */}
      <SundaySchoolScenesSection
        scenesHeaderTitle={data?.scenesHeaderTitle}
        scenesRow1={data?.scenesRow1}
        scenesRow2={data?.scenesRow2}
      />

      {/* 3. What is Sunday School & Purpose / Vision Cards */}
      <SundaySchoolWhatIsSection
        whatIsCardTitle={data?.whatIsCardTitle}
        whatIsCardDescription={data?.whatIsCardDescription}
        visionCardTitle={data?.visionCardTitle}
        purposeParagraph={data?.purposeParagraph}
        visionParagraph={data?.visionParagraph}
      />
    </main>
  )
}
