'use client'

import React from 'react'
import Image from 'next/image'

export const HeadChurchSection: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-14 md:py-18 bg-transparent">
      {/* Full-width Navy Header Bar matching Figma 245:44 & 245:186 */}
      <div className="w-full bg-[#122f4a] py-3 sm:py-5 md:py-6 shadow-md mb-8 sm:mb-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 sm:gap-6">
          {/* Left Gold Accent Line */}
          <div className="flex-1 max-w-[60px] sm:max-w-[160px] md:max-w-[320px] h-[3px] sm:h-[5px] md:h-[6px] bg-[#efbf04] rounded-full" />

          {/* Heading */}
          <h2 className="font-poppins font-medium text-white text-sm sm:text-xl md:text-2xl lg:text-[28px] tracking-wide text-center whitespace-nowrap">
            Our Head Church Jalandhar
          </h2>

          {/* Right Gold Accent Line */}
          <div className="flex-1 max-w-[60px] sm:max-w-[160px] md:max-w-[320px] h-[3px] sm:h-[5px] md:h-[6px] bg-[#efbf04] rounded-full" />
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Featured Head Church 3D Visual */}
        <div className="relative w-full aspect-[1140/587] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-xl border border-slate-200 bg-slate-950 group">
          <Image
            src="/figma-assets/6b099d6a283f967b4bf3ff1f51411f14a0fee0ac.png"
            alt="Head Church Jalandhar - Ankur Narula Ministries"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-103"
          />
        </div>

        {/* Narrative Description Text */}
        <div className="mt-6 sm:mt-10 md:mt-12 text-center max-w-5xl mx-auto">
          <p className="font-poppins text-[#333333] text-xs sm:text-base md:text-xl lg:text-[22px] leading-relaxed sm:leading-[1.8] text-balance">
            Ankur Narula Ministries (The Church of Signs and Wonders) is the biggest and fastest growing church ministry in Punjab, India. Apostle Ankur Yoseph Narula is the Senior Pastor and Overseer in The Church of Signs and Wonders. The Church has become a channel of Salvation for India. Every Thursday and Sunday, our live services are broadcasted to millions around the globe through Anugrah TV, and the church is always filled more than capacity with overflows of people sitting outside the church on the roads and the empty plots. The church has become the biggest congregation of more than 300,000 people attending weekly services in The Church of Signs and Wonders.
          </p>
        </div>
      </div>
    </section>
  )
}
