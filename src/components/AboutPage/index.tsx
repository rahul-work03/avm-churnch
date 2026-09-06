'use client'

import React from 'react'
import { AboutHeroSection } from './AboutHeroSection'
import { VisionMissionSection } from './VisionMissionSection'
import { OurLeadersSection } from './OurLeadersSection'
import { MinistryStatsSection } from './MinistryStatsSection'
import { ScheduleSection } from '@/components/ChurchHomepage/ScheduleSection'
import { FaithResourcesSection } from './FaithResourcesSection'
import { CrusadesSection } from './CrusadesSection'
import { InternationalPresenceSection } from './InternationalPresenceSection'

export const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c]">
      {/* Top Container: Warm Butter Cream Background (#ffffe9) spanning Hero & Vision/Mission */}
      <div className="bg-[#ffffe9] relative w-full overflow-hidden">
        {/* 1. Hero / Overview */}
        <AboutHeroSection />

        {/* 2. Our Identity / Vision & Mission */}
        <VisionMissionSection />
      </div>

      {/* 3. Our Leaders */}
      <OurLeadersSection />

      {/* 4. Ministry Statistics */}
      <MinistryStatsSection />

      {/* 5. Live Services Schedule */}
      <ScheduleSection />

      {/* 6. Faith Resources (Books & Media) */}
      <FaithResourcesSection />

      {/* 7. Largest Crusades */}
      <CrusadesSection />

      {/* 8. International Presence */}
      <InternationalPresenceSection />
    </main>
  )
}
