'use client'

import React from 'react'

export const SophiaInstituteWhatIsSection: React.FC = () => {
  return (
    <section className="bg-transparent py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-12 select-none" data-node-id="sophia-what-is">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Block 1: What is Sophia Institute? Card */}
        <div className="bg-[#122f4a] rounded-[24px] sm:rounded-[32px] overflow-hidden text-white shadow-xl max-w-[1140px] mx-auto border border-white/5">
          {/* Header with Gold Bars touching the card's outer left and right edges */}
          <div className="w-full flex items-center justify-between pt-8 sm:pt-10 mb-4 sm:mb-6">
            <div className="w-[60px] sm:w-[160px] md:w-[260px] lg:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

            <h2 className="font-poppins font-semibold text-white text-base sm:text-xl md:text-[26px] text-center px-3 sm:px-6 tracking-tight whitespace-nowrap flex-shrink min-w-0">
              What is Sophia Institute?
            </h2>

            <div className="w-[60px] sm:w-[160px] md:w-[260px] lg:w-[320px] h-[5px] sm:h-[8px] md:h-[10px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
          </div>

          {/* Narrative Text */}
          <div className="px-6 sm:px-12 md:px-16 pb-8 sm:pb-12 text-center">
            <p className="font-poppins text-white text-xs sm:text-base md:text-xl lg:text-[22px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95">
              Sophia Institute is a place of learning, spiritual growth, and deeper understanding of God&apos;s Word. Through biblical teaching, prayer, study, and fellowship, it encourages believers to grow in wisdom and faith. The institute seeks to connect Scripture with everyday life, helping individuals develop a stronger relationship with God and live out their faith with purpose.
            </p>
          </div>
        </div>

        {/* Block 2: Purpose & vision Card */}
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
              The purpose of Sophia Institute is to nurture spiritual and intellectual growth through Christ-centered teaching and the truth of Scripture.
            </p>
            <p className="font-poppins text-white text-xs sm:text-base md:text-xl lg:text-[22px] leading-relaxed max-w-4xl mx-auto text-balance font-normal opacity-95">
              Our vision is to raise a generation grounded in God&apos;s Word, growing in wisdom, character, and faith. We seek to equip believers to understand their calling, strengthen their relationship with Christ, and become a light in their families, churches, and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SophiaInstituteWhatIsSection
