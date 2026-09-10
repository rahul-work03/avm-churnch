'use client'

import React from 'react'
import { BibleCollegeHeroSection } from './BibleCollegeHeroSection'
import { BibleCollegeScenesSection } from './BibleCollegeScenesSection'
import { BibleCollegeWhatIsSection } from './BibleCollegeWhatIsSection'

export const BibleCollegePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c]">
      {/* 1. Hero / Overview */}
      <div className="bg-[#ffffe9] relative w-full overflow-hidden">
        <BibleCollegeHeroSection />
      </div>

      {/* 2. Scenes of Bible College (Dual Row Smooth Marquee Gallery) */}
      <BibleCollegeScenesSection />

      {/* 3. What is Bible College & Purpose / Vision Cards */}
      <BibleCollegeWhatIsSection />
    </main>
  )
}
