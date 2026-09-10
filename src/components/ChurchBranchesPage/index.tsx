'use client'

import React from 'react'
import { BranchesHeroSection } from './BranchesHeroSection'
import { HeadBranchSection } from './HeadBranchSection'
import { BranchesDirectorySection } from './BranchesDirectorySection'

export const ChurchBranchesPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] pb-16 sm:pb-24">
      {/* 1. Hero / Overview (1140x620 Rounded Hero Banner) */}
      <BranchesHeroSection />

      {/* 2. Head Branch Punjab Khambra (Full-width Navy header with edge-to-edge Gold Bars + 1140x620 Map + Pin text) */}
      <HeadBranchSection />

      {/* 3. National & International Church Branches Directory (Search + 560px Switcher + 367x185 Cards Grid) */}
      <BranchesDirectorySection />
    </main>
  )
}
