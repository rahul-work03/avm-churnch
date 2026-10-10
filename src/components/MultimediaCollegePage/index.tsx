'use client'

import React from 'react'
import { MultimediaCollegeHeroSection } from './MultimediaCollegeHeroSection'
import { MultimediaCollegeScenesSection } from './MultimediaCollegeScenesSection'
import { MultimediaCollegeWhatIsSection } from './MultimediaCollegeWhatIsSection'

export interface MultimediaCollegePageProps {
  data?: any
}

export const MultimediaCollegePage: React.FC<MultimediaCollegePageProps> = ({ data }) => {
  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c]">
      {/* 1. Hero / Overview */}
      <div className="bg-white relative w-full overflow-hidden">
        <MultimediaCollegeHeroSection
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
      </div>

      {/* 2. Scenes of Multimedia College (Dual Row Smooth Marquee Gallery) */}
      <MultimediaCollegeScenesSection
        headerTitle={data?.scenesHeaderTitle}
        row1Photos={data?.scenesRow1}
        row2Photos={data?.scenesRow2}
      />

      {/* 3. What is Multimedia College & Purpose / Vision Cards */}
      <MultimediaCollegeWhatIsSection
        whatIsCardTitle={data?.whatIsCardTitle}
        whatIsCardDescription={data?.whatIsCardDescription}
        visionCardTitle={data?.visionCardTitle}
        purposeParagraph={data?.purposeParagraph}
        visionParagraph={data?.visionParagraph}
      />
    </main>
  )
}
