'use client'

import React from 'react'
import Image from 'next/image'

export const BranchesHeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 bg-[#f8fafc]" data-node-id="286:2994">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Exact Figma 1140x620 Rounded Hero Banner with "OUR BRANCHES" embossed visual */}
        <div className="relative w-full aspect-[1140/620] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-xl bg-[#0b0c1c]">
          <Image
            src="/figma-assets/4aed35d9c54e59fca1c3d6581cbb0e996ec31f05.png"
            alt="Our Branches - Ankur Narula Ministries"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
