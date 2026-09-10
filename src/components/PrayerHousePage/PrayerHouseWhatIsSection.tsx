'use client'

import React from 'react'

export const PrayerHouseWhatIsSection: React.FC = () => {
  return (
    <section className="bg-transparent py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12 select-none" data-node-id="282:2369">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Block 1: What is Prayer House? Card (Figma 282:2369 / 282:2285) */}
        <div className="bg-[#122f4a] rounded-[24px] sm:rounded-[32px] overflow-hidden text-white shadow-xl max-w-[1140px] mx-auto border border-white/5">
          {/* Header with Gold Bars touching the card's outer left and right edges */}
          <div className="w-full flex items-center justify-between pt-8 sm:pt-10 mb-4 sm:mb-6">
            <div className="w-[60px] sm:w-[160px] md:w-[260px] lg:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

            <h2 className="font-poppins font-semibold text-white text-base sm:text-xl md:text-[26px] text-center px-3 sm:px-6 tracking-tight whitespace-nowrap flex-shrink min-w-0">
              What is Prayer House?
            </h2>

            <div className="w-[60px] sm:w-[160px] md:w-[260px] lg:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
          </div>

          {/* Narrative Text */}
          <div className="px-6 sm:px-12 md:px-16 pb-8 sm:pb-12 text-center">
            <p className="font-poppins text-white text-xs sm:text-base md:text-xl lg:text-[22px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95">
              Prayer House is a sacred space dedicated to prayer, worship, and spiritual renewal. It is a place where believers gather to seek God&apos;s presence, lift up their needs, and grow deeper in faith. Here, individuals and families can encounter God intimately and experience peace, restoration, and encouragement in their spiritual journey.
            </p>
          </div>
        </div>

        {/* Block 2: Purpose & vision Card (Figma 282:2369 / 282:2285) */}
        <div className="bg-[#122f4a] rounded-[24px] sm:rounded-[32px] overflow-hidden text-white shadow-xl max-w-[1140px] mx-auto border border-white/5">
          {/* Header with Gold Bars touching the card's outer left and right edges */}
          <div className="w-full flex items-center justify-between pt-8 sm:pt-10 mb-4 sm:mb-6">
            <div className="w-[60px] sm:w-[160px] md:w-[260px] lg:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

            <h2 className="font-poppins font-semibold text-white text-base sm:text-xl md:text-[26px] text-center px-3 sm:px-6 tracking-tight whitespace-nowrap flex-shrink min-w-0">
              Purpose &amp; vision
            </h2>

            <div className="w-[60px] sm:w-[160px] md:w-[260px] lg:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
          </div>

          {/* Narrative Text */}
          <div className="px-6 sm:px-12 md:px-16 pb-8 sm:pb-12 text-center space-y-4">
            <p className="font-poppins text-white text-xs sm:text-base md:text-xl lg:text-[22px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95">
              The purpose of Prayer House is to provide a peaceful, holy environment where people can come aside from daily distractions and connect with God.
            </p>
            <p className="font-poppins text-white text-xs sm:text-base md:text-xl lg:text-[22px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95">
              Our vision is to build a strong prayer community where lives are transformed, faith is strengthened, and hearts are aligned with God&apos;s will. It is a place where continuous prayer is offered for individuals, families, and the needs of the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
