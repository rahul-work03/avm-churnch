'use client'

import React from 'react'
import { BranchesHeroSection } from './BranchesHeroSection'
import { HeadBranchSection } from './HeadBranchSection'
import { BranchesDirectorySection } from './BranchesDirectorySection'

interface ChurchBranchesPageProps {
  data?: any
}

export const ChurchBranchesPage: React.FC<ChurchBranchesPageProps> = ({ data }) => {
  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] pb-16 sm:pb-24">
      {/* 1. Hero / Overview (SacredCanvas + 1140x620 Video/Image Hero Banner) */}
      <BranchesHeroSection
        heroHeaderTitle={data?.heroHeaderTitle}
        heroSubtitle={data?.heroSubtitle}
        heroDescription={data?.heroDescription}
        heroVideo={data?.heroVideo}
        heroVideoFallback={data?.heroVideoFallback}
        bannerVideoUrl={data?.bannerVideoUrl}
        heroBannerImage={data?.heroBannerImage}
        heroBannerFallback={data?.heroBannerFallback}
        heroBannerAlt={data?.heroBannerAlt}
      />

      {/* 2. Head Branch Punjab Khambra (Atmospheric header with edge-to-edge Gold Bars + Luxury Framed Map + Directions Action Pill) */}
      <HeadBranchSection
        headBranchTitle={data?.headBranchTitle}
        headBranchSubtitle={data?.headBranchSubtitle}
        headBranchMapIframe={data?.headBranchMapIframe}
        headBranchMapImage={data?.headBranchMapImage}
        headBranchMapFallback={data?.headBranchMapFallback}
        headBranchHelperText={data?.headBranchHelperText}
      />

      {/* 3. National & International Church Branches Directory (Search + Pill Switcher + Luxury Cards Grid) */}
      <BranchesDirectorySection
        directoryHeaderTitle={data?.directoryHeaderTitle}
        nationalBranches={data?.nationalBranches}
        internationalBranches={data?.internationalBranches}
      />
    </main>
  )
}

