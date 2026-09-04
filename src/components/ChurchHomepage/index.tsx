import React from 'react'
import { ChurchNavbar } from './Navbar'
import { HeroSection } from './HeroSection'
import { ManOfGodSection } from './ManOfGodSection'
import { ActionCardsSection } from './ActionCardsSection'
import { ScheduleSection } from './ScheduleSection'
import { SocialSection } from './SocialSection'
import { SermonsSection } from './SermonsSection'
import { FooterSection } from './FooterSection'

export const ChurchHomepage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#efbf04] selection:text-black">
      {/* Top Hero Container with Group 1 (1440px x 1106px Golden Silk Waves Background) */}
      <div
        className="relative overflow-hidden bg-no-repeat bg-top bg-[#fdfbf3]"
        style={{
          backgroundImage: "url('/figma-assets/hero_golden_silk_bg.png')",
          backgroundSize: '100% 1106px',
        }}
      >
        {/* Floating Pill Navigation */}
        <ChurchNavbar />

        {/* Hero Headline & 200+ Churches Banner */}
        <HeroSection />
      </div>

      {/* The Church of Signs & Wonders / Man of God Showcase */}
      <ManOfGodSection />

      {/* Action Cards: Prayer Request, Offerings, Zoom Lay Hand */}
      <ActionCardsSection />

      {/* Live Prayer & Worship Schedule */}
      <ScheduleSection />

      {/* Our Social Media Platforms */}
      <SocialSection />

      {/* Watch Our Latest Sermons */}
      <SermonsSection />

      {/* Official 4-Column Church Footer */}
      <FooterSection />
    </main>
  )
}
