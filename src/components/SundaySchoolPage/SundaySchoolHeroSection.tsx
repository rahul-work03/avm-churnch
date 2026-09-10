'use client'

import React from 'react'
import Image from 'next/image'

export const SundaySchoolHeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-8 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 bg-transparent" data-node-id="289:3761">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* "SUNDAY SCHOOL MINISTRIES" Header with Golden Emblems on both sides (Figma 289:3777, 289:3786, 289:3789) */}
        <div className="text-center px-2 pt-2 sm:pt-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <div
              className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04]"
              style={{
                maskImage: "url('/figma-assets/b3900b0c6d076c8791d4705df6a60f73f2821e51.png')",
                WebkitMaskImage: "url('/figma-assets/b3900b0c6d076c8791d4705df6a60f73f2821e51.png')",
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
            <h1 className="font-poppins font-semibold text-[#003471] text-2xl sm:text-3xl md:text-[38px] tracking-tight uppercase">
              SUNDAY SCHOOL MINISTRIES
            </h1>
            <div
              className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
              style={{
                maskImage: "url('/figma-assets/b3900b0c6d076c8791d4705df6a60f73f2821e51.png')",
                WebkitMaskImage: "url('/figma-assets/b3900b0c6d076c8791d4705df6a60f73f2821e51.png')",
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
          </div>

          <p className="font-poppins text-[#0b0c1c] text-xs sm:text-base md:text-[18px] leading-relaxed max-w-4xl mx-auto mt-2.5 sm:mt-5 text-balance">
            Welcome to Sunday School, a place where the Word of God is taught with simplicity, love, and truth, helping hearts of all ages experience the presence of God in a personal way. Here, children, youth, and believers grow together in faith as the Scriptures come alive through teaching, stories, and fellowship.
          </p>
        </div>

        {/* Featured Large Hero Video / Photo Container (Figma 289:3778: 1140px x 583px) */}
        <div className="mt-6 sm:mt-10 md:mt-12 max-w-[1140px] mx-auto">
          <div className="relative w-full aspect-[16/9] sm:aspect-[1140/583] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
            <video
              src="/figma-assets/schedule_banner.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
          </div>

          {/* Subtitle Below Hero (Figma 289:3767: 22px #1f3a5f) */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="font-poppins font-normal text-[#1f3a5f] text-xs sm:text-base md:text-[22px] tracking-wide max-w-3xl mx-auto">
              Empowering the next generation to walk in faith, truth, and the power of God.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
