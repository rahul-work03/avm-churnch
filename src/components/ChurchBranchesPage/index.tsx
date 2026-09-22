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
      {/* 1. Hero / Overview (1140x620 Rounded Hero Banner) */}
      <BranchesHeroSection
        heroBannerImage={data?.heroBannerImage}
        heroBannerFallback={data?.heroBannerFallback}
        heroBannerAlt={data?.heroBannerAlt}
      />

      {/* 2. Head Branch Punjab Khambra (Full-width Navy header with edge-to-edge Gold Bars + 1140x620 Map / Iframe + Pin text) */}
      <HeadBranchSection
        headBranchTitle={data?.headBranchTitle}
        headBranchMapIframe={data?.headBranchMapIframe}
        headBranchMapImage={data?.headBranchMapImage}
        headBranchMapFallback={data?.headBranchMapFallback}
        headBranchHelperText={data?.headBranchHelperText}
      />

      {/* 3. National & International Church Branches Directory (Search + 560px Switcher + 367x185 Cards Grid) */}
      <BranchesDirectorySection
        directoryHeaderTitle={data?.directoryHeaderTitle}
        nationalBranches={data?.nationalBranches}
        internationalBranches={data?.internationalBranches}
      />
    </main>
  )
}

