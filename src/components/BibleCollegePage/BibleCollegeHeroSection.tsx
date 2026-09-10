'use client'

import React from 'react'
import Image from 'next/image'

export const BibleCollegeHeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-8 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 bg-transparent" data-node-id="284:2612">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* "BIBLE COLLEGE" Header with Golden Emblems on both sides (Figma 284:2612 / 284:2528) */}
        <div className="text-center px-2 pt-2 sm:pt-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <div
              className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04]"
              style={{
                maskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
                WebkitMaskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
            <h1 className="font-poppins font-semibold text-[#003471] text-2xl sm:text-3xl md:text-[38px] tracking-tight uppercase">
              BIBLE COLLEGE
            </h1>
            <div
              className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
              style={{
                maskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
                WebkitMaskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
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
            Welcome to a place where the Word of God comes alive and transforms lives from within. Here, you will be grounded in truth, strengthened in faith, and equipped with spiritual wisdom to walk in God&apos;s purpose. Through dedicated teaching, revelation, and guidance, you will grow deeper in your relationship with Christ and discover the power of His Word working in your life. This is more than learning—it is a journey of becoming who God has called you to be.
          </p>
        </div>

        {/* Featured Large Hero Photo / Bible College Learning Environment (Figma 1140px x 583px) */}
        <div className="mt-6 sm:mt-10 md:mt-12 max-w-[1140px] mx-auto">
          <div className="relative w-full aspect-[16/9] sm:aspect-[1140/583] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
            <Image
              src="/figma-assets/94a1faeb119e4d3406e3e61f9268b121e7b5496f.png"
              alt="Bible College - Ankur Narula Ministries"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>

          {/* Bold Statement Below Hero */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="font-poppins font-semibold text-[#1f3a5f] text-xs sm:text-base md:text-[22px] tracking-wide max-w-3xl mx-auto">
              Equipping believers with the Word of God to walk in truth, power, and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
