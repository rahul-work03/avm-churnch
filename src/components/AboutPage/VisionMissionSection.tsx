'use client'

import React from 'react'
import { RevealOnScroll } from '@/components/ui/reveal'

export interface VisionMissionSectionProps {
  identityBadge?: string
  headerTitle?: string
  visionTitle?: string
  visionDescription?: string
  missionTitle?: string
  missionDescription?: string
}

export const VisionMissionSection: React.FC<VisionMissionSectionProps> = ({
  identityBadge = 'Our Identity',
  headerTitle = 'Our Vision and Our mission',
  visionTitle = 'Our Vision',
  visionDescription = '“Not one soul would be lost” — The ministry aims to see a global revival of faith, hope, and love through the transformative power of Jesus Christ.',
  missionTitle = 'Our Mission',
  missionDescription = 'Spreading the Gospel of Jesus Christ. Leading people into a personal relationship with God. Demonstrating His power through healing, deliverance, and transformation.',
}) => {
  return (
    <section className="relative pt-4 pb-12 sm:pb-16 md:pb-24 bg-transparent" data-node-id="275:810">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Identity & Vision Header Badge */}
        <RevealOnScroll direction="up" distance={20} duration={0.6} className="relative z-20">
          <div className="relative max-w-[754px] mx-auto bg-[#122f4a] rounded-[18px] sm:rounded-[36px] md:rounded-[44px] py-3.5 sm:py-5 md:py-6 px-0 text-center text-white shadow-xl -mb-6 sm:-mb-12 md:-mb-14 overflow-hidden flex items-center justify-between">
            {/* Decorative Gold Side Bar - Left */}
            <div className="w-[36px] sm:w-[60px] md:w-[77px] h-[4px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-r-full pointer-events-none flex-shrink-0" />

            <div className="px-3 sm:px-6 md:px-8 flex-shrink min-w-0">
              <p className="font-poppins font-medium text-slate-200 text-xs sm:text-lg md:text-[24px] lg:text-[28px]">
                {identityBadge}
              </p>
              <h2 className="font-poppins font-semibold text-white text-sm sm:text-xl md:text-[28px] lg:text-[32px] mt-0.5 sm:mt-1">
                {headerTitle}
              </h2>
            </div>

            {/* Decorative Gold Side Bar - Right */}
            <div className="w-[36px] sm:w-[60px] md:w-[77px] h-[4px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-l-full pointer-events-none flex-shrink-0" />
          </div>
        </RevealOnScroll>

        {/* Mobile View: 2 Distinct Stacked Cards */}
        <div className="md:hidden space-y-3 pt-10">
          <RevealOnScroll direction="up" distance={20} duration={0.5}>
            <div className="bg-white border border-[#e7e7e7] rounded-[18px] p-5 shadow-sm text-left">
              <h3 className="font-poppins font-semibold text-[#003471] text-[18px]">
                {visionTitle}
              </h3>
              <p className="font-poppins text-[#333333] text-[12px] leading-relaxed mt-2">
                {visionDescription}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" distance={20} duration={0.5} delay={0.1}>
            <div className="bg-white border border-[#e7e7e7] rounded-[18px] p-5 shadow-sm text-left">
              <h3 className="font-poppins font-semibold text-[#003471] text-[18px]">
                {missionTitle}
              </h3>
              <p className="font-poppins text-[#333333] text-[12px] leading-relaxed mt-2">
                {missionDescription}
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Desktop View: Unified 2-Column Vision & Mission Card */}
        <RevealOnScroll direction="up" distance={24} duration={0.7} delay={0.1} className="hidden md:block">
          <div className="bg-white rounded-[44px] shadow-2xl pt-20 lg:pt-24 pb-12 lg:pb-14 px-8 lg:px-16 border border-slate-100 relative z-10">
            <div className="grid grid-cols-2 gap-8 lg:gap-12 relative">
              {/* Column 1: Our Vision */}
              <div className="text-left flex flex-col justify-start">
                <h3 className="font-poppins font-semibold text-[#d5582a] text-[26px] lg:text-[32px] tracking-tight">
                  {visionTitle}
                </h3>
                <p className="font-poppins text-[#333333] text-[15px] lg:text-[17px] leading-relaxed mt-3 lg:mt-4">
                  {visionDescription}
                </p>
              </div>

              {/* Vertical Divider */}
              <div className="absolute left-1/2 top-2 bottom-2 w-px bg-slate-200 -translate-x-1/2" />

              {/* Column 2: Our Mission */}
              <div className="text-left flex flex-col justify-start pl-2">
                <h3 className="font-poppins font-semibold text-[#d5582a] text-[26px] lg:text-[32px] tracking-tight">
                  {missionTitle}
                </h3>
                <p className="font-poppins text-[#333333] text-[15px] lg:text-[17px] leading-relaxed mt-3 lg:mt-4">
                  {missionDescription}
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
