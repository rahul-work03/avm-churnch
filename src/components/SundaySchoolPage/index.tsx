'use client'

import React from 'react'
import { SundaySchoolHeroSection } from './SundaySchoolHeroSection'
import { SundaySchoolScenesSection } from './SundaySchoolScenesSection'
import { SundaySchoolWhatIsSection } from './SundaySchoolWhatIsSection'

export const SundaySchoolPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c]">
      {/* 1. Hero / Overview */}
      <div className="bg-[#ffffe9] relative w-full overflow-hidden">
        <SundaySchoolHeroSection />
      </div>

      {/* 2. Scenes of Sunday School Ministries (Dual Row Smooth Marquee Gallery) */}
      <SundaySchoolScenesSection />

      {/* 3. What is Sunday School & Purpose / Vision Cards */}
      <SundaySchoolWhatIsSection />
    </main>
  )
}
