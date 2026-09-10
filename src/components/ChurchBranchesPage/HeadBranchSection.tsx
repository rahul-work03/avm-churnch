'use client'

import React from 'react'
import Image from 'next/image'

export const HeadBranchSection: React.FC = () => {
  return (
    <section className="relative py-4 sm:py-8 md:py-10 bg-[#f8fafc]" data-node-id="286:2996">
      {/* Full-width Navy Header Bar with edge-to-edge Gold Accent Bars (Figma 286:3010) */}
      <div className="w-full bg-[#122f4a] h-[60px] sm:h-[70px] md:h-[80px] text-white relative shadow-sm mb-8 sm:mb-12 flex items-center">
        <div className="w-full flex items-center justify-between">
          {/* Left Gold Accent Bar */}
          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[10px] sm:h-[16px] md:h-[20px] bg-[#efbf04] flex-shrink-0" />

          {/* Heading (Figma 286:3012: Poppins SemiBold 28px) */}
          <h2 className="font-poppins font-semibold text-white text-base sm:text-xl md:text-2xl lg:text-[28px] tracking-wide text-center px-2 sm:px-6 flex-shrink min-w-0">
            Head Branch Punjab Khambra
          </h2>

          {/* Right Gold Accent Bar */}
          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[10px] sm:h-[16px] md:h-[20px] bg-[#efbf04] flex-shrink-0" />
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Exact Figma 1140x620 Map Satellite Container (Figma 286:3009) */}
        <div className="relative w-full aspect-[1140/620] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
          <Image
            src="/figma-assets/6627c47caaf2724af326c71d68ab4ef85b4bc42c.png"
            alt="The Church of Signs and Wonders - Head Branch Punjab Khambra Map"
            fill
            className="object-cover"
          />
        </div>

        {/* Location Pin Helper Text (Figma 286:3017: 29px #003471) */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center">
          <p className="font-poppins text-[#003471] text-base sm:text-2xl md:text-[29px] leading-tight flex items-center justify-center gap-2">
            <span>📍</span>
            <span>Here is a location pin to help you find us!</span>
          </p>
        </div>
      </div>
    </section>
  )
}
