'use client'

import React from 'react'
import Image from 'next/image'

export const WorshipTeamSection: React.FC = () => {
  return (
    <section className="relative pt-6 pb-16 sm:pb-20 md:pb-24 bg-transparent">
      {/* Full-width Navy Header Bar matching Figma 245:49 & 245:187 */}
      <div className="w-full bg-[#122f4a] py-3 sm:py-5 md:py-6 shadow-md mb-8 sm:mb-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 sm:gap-6">
          {/* Left Gold Accent Line */}
          <div className="flex-1 max-w-[60px] sm:max-w-[160px] md:max-w-[320px] h-[3px] sm:h-[5px] md:h-[6px] bg-[#efbf04] rounded-full" />

          {/* Heading */}
          <h2 className="font-poppins font-medium text-white text-sm sm:text-xl md:text-2xl lg:text-[28px] tracking-wide text-center whitespace-nowrap">
            Our Worship Team
          </h2>

          {/* Right Gold Accent Line */}
          <div className="flex-1 max-w-[60px] sm:max-w-[160px] md:max-w-[320px] h-[3px] sm:h-[5px] md:h-[6px] bg-[#efbf04] rounded-full" />
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Featured Worship Team Stage Visual */}
        <div className="relative w-full aspect-[1140/534] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-xl border border-slate-200 bg-slate-950 group">
          <Image
            src="/figma-assets/74e8182af8627fad3ae428aad2b17d4eca519897.png"
            alt="ANM Worship Team Leading Spirit-Filled Praise"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-103"
          />
        </div>

        {/* Narrative Description Text */}
        <div className="mt-6 sm:mt-10 md:mt-12 text-center max-w-5xl mx-auto">
          <p className="font-poppins text-[#333333] text-xs sm:text-base md:text-xl lg:text-[24px] leading-relaxed sm:leading-[1.8] text-balance">
            Our Worship Team leads the church in powerful and spirit-filled praise and worship. With dedication and passion, they help create an atmosphere where everyone can encounter God, express their faith, and grow deeper in their relationship with Christ.
          </p>
        </div>
      </div>
    </section>
  )
}
