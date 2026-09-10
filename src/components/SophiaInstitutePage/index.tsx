'use client'

import React from 'react'
import { SophiaInstituteHeroSection } from './SophiaInstituteHeroSection'
import { SophiaInstituteScenesSection } from './SophiaInstituteScenesSection'
import { SophiaInstituteWhatIsSection } from './SophiaInstituteWhatIsSection'

export const SophiaInstitutePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c]">
      {/* 1. Hero / Overview */}
      <div className="bg-[#ffffe9] relative w-full overflow-hidden">
        <SophiaInstituteHeroSection />
      </div>

      {/* 2. Scenes of Sophia Institute (Dual Row Smooth Marquee Gallery) */}
      <SophiaInstituteScenesSection />

      {/* 3. What is Sophia Institute & Purpose / Vision Cards */}
      <SophiaInstituteWhatIsSection />
    </main>
  )
}

export default SophiaInstitutePage
