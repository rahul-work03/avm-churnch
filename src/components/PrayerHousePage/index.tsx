'use client'

import React from 'react'
import { PrayerHouseHeroSection } from './PrayerHouseHeroSection'
import { PrayerHouseScenesSection } from './PrayerHouseScenesSection'
import { PrayerHouseWhatIsSection } from './PrayerHouseWhatIsSection'

export const PrayerHousePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c]">
      {/* 1. Hero / Overview */}
      <div className="bg-[#ffffe9] relative w-full overflow-hidden">
        <PrayerHouseHeroSection />
      </div>

      {/* 2. Scenes of Prayer House (Dual Row Smooth Marquee Gallery) */}
      <PrayerHouseScenesSection />

      {/* 3. What is Prayer House & Purpose / Vision Cards */}
      <PrayerHouseWhatIsSection />
    </main>
  )
}
