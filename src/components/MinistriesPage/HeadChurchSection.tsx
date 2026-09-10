'use client'

import React from 'react'
import Image from 'next/image'

export const HeadChurchSection: React.FC = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 bg-transparent" data-node-id="277:1632">
      {/* Full-width Navy Header Bar matching Figma 277:1632 (Desktop) & 277:1740 (Mobile) */}
      <div className="w-full bg-[#122f4a] py-4 sm:py-5 md:py-6 text-white relative shadow-sm mb-8 sm:mb-12">
        <div className="w-full flex items-center justify-between">
          {/* Left Gold Accent Bar */}
          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

          {/* Heading */}
          <h2 className="font-poppins font-medium text-white text-sm sm:text-xl md:text-2xl lg:text-[28px] tracking-wide text-center px-3 sm:px-8 md:px-12 flex-shrink min-w-0">
            Our Head Church Jalandhar
          </h2>

          {/* Right Gold Accent Bar */}
          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Featured Head Church 3D Visual */}
        <div className="relative w-full aspect-[1140/587] rounded-[14px] sm:rounded-[18px] md:rounded-[20px] overflow-hidden shadow-2xl border border-[#d4af37]/30 bg-slate-950 group">
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
