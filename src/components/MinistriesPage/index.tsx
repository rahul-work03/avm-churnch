'use client'

import React from 'react'
import { MinistriesHeroSection } from './MinistriesHeroSection'
import { MinistriesOverviewSection } from './MinistriesOverviewSection'
import { HeadChurchSection } from './HeadChurchSection'
import { WorshipTeamSection } from './WorshipTeamSection'

export const MinistriesPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative w-full overflow-hidden">
      {/* 1. Ministries Hero Banner */}
      <MinistriesHeroSection />

      {/* 2. Ministries Overview 6-Card Grid */}
      <MinistriesOverviewSection />

      {/* 3. Head Church Jalandhar Showcase */}
      <HeadChurchSection />

      {/* 4. Worship Team Showcase */}
      <WorshipTeamSection />
    </main>
  )
}
