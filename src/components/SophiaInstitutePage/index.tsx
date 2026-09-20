'use client'

import React from 'react'
import { SophiaInstituteHeroSection } from './SophiaInstituteHeroSection'
import { SophiaInstituteScenesSection } from './SophiaInstituteScenesSection'
import { SophiaInstituteWhatIsSection } from './SophiaInstituteWhatIsSection'

export interface SophiaInstitutePageProps {
  data?: any
}

export const SophiaInstitutePage: React.FC<SophiaInstitutePageProps> = ({ data }) => {
  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c]">
      {/* 1. Hero / Overview */}
      <div className="bg-[#ffffe9] relative w-full overflow-hidden">
        <SophiaInstituteHeroSection
          headerTitle={data?.heroHeaderTitle}
          description={data?.heroDescription}
          bannerImage={data?.heroBannerImage}
          bannerImageFallback={data?.heroBannerFallback}
          bannerAlt={data?.heroBannerAlt}
          subtitle={data?.heroSubtitle}
        />
      </div>

      {/* 2. Scenes of Sophia Institute (Dual Row Smooth Marquee Gallery) */}
      <SophiaInstituteScenesSection
        headerTitle={data?.scenesHeaderTitle}
        row1Photos={data?.scenesRow1}
        row2Photos={data?.scenesRow2}
      />

      {/* 3. What is Sophia Institute & Purpose / Vision Cards */}
      <SophiaInstituteWhatIsSection
        whatIsCardTitle={data?.whatIsCardTitle}
        whatIsCardDescription={data?.whatIsCardDescription}
        visionCardTitle={data?.visionCardTitle}
        purposeParagraph={data?.purposeParagraph}
        visionParagraph={data?.visionParagraph}
      />
    </main>
  )
}

export default SophiaInstitutePage

