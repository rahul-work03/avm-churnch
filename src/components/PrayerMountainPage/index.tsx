'use client'

import React from 'react'
import { PrayerMountainHeroSection } from './PrayerMountainHeroSection'
import { ScenesSection } from './ScenesSection'
import { WhatIsSection } from './WhatIsSection'
import { TestimoniesSection } from './TestimoniesSection'
import { JoinUsSection } from './JoinUsSection'

export const PrayerMountainPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c]">
      {/* 1. Hero / Overview */}
      <div className="bg-[#ffffe9] relative w-full overflow-hidden">
        <PrayerMountainHeroSection />
      </div>

      {/* 2. Scenes of Prayer Mountain (Dual Row Smooth Marquee Gallery) */}
      <ScenesSection />

      {/* 3. What is Prayer Mountain & Purpose / Vision */}
      <WhatIsSection />

      {/* 4. Testimonies of Prayer Mountain */}
      <TestimoniesSection />

      {/* 5. Join Us in Prayers (Schedule & Location) */}
      <JoinUsSection />
    </main>
  )
}
