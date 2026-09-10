'use client'

import React from 'react'
import Image from 'next/image'

export const MinistriesHeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-6 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 bg-transparent" data-node-id="277:1632">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Golden-Bordered Hero Banner (Figma 277:1632 / 277:1740) */}
        <div className="relative w-full max-w-[1140px] mx-auto aspect-[16/9] sm:aspect-[1140/580] min-h-[220px] sm:min-h-[340px] md:min-h-[460px] lg:min-h-[560px] rounded-[16px] sm:rounded-[20px] overflow-hidden border border-[#d4af37]/70 shadow-2xl bg-slate-950 group">
          {/* Hero Background Image */}
          <Image
            src="/figma-assets/1293a243cd5f4ddaa9c70378ddffe38c61e7ffb6.png"
            alt="Our Ministries - Ankur Narula Ministries"
            fill
            priority
            className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Gradient Overlays for readable title badge */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/30 pointer-events-none" />

          {/* Top Left Floating Pill Badge & Subtitle */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 md:top-10 md:left-10 z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center justify-center bg-[#071d36]/90 backdrop-blur-md border border-[#d4af37]/80 rounded-full px-4 py-1.5 sm:px-7 sm:py-2 shadow-lg">
              <span className="font-philosopher font-bold text-white text-sm sm:text-2xl md:text-3xl lg:text-[32px] tracking-wider uppercase drop-shadow">
                OUR MINISTRIES
              </span>
            </div>

            {/* Subtitle */}
            <p className="mt-2 sm:mt-3 font-philosopher italic text-[#efbf04] text-xs sm:text-base md:text-xl lg:text-[22px] tracking-wide drop-shadow-md">
              Transforming Lives Through Service
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
