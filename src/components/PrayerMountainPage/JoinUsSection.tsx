'use client'

import React from 'react'
import { Clock, MapPin } from 'lucide-react'

export const JoinUsSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white overflow-hidden select-none" data-node-id="279:2081">
      {/* Dark Navy Section Header Bar (Figma 279:2101, 279:2104, 279:2134, 279:2137) */}
      <div className="bg-[#122f4a] py-4 sm:py-5 md:py-6 text-white relative shadow-sm mb-8 sm:mb-12">
        <div className="w-full flex items-center justify-between">
          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

          <h2 className="font-poppins font-semibold text-white text-sm sm:text-2xl md:text-[28px] text-center px-3 sm:px-8 md:px-12 tracking-wide uppercase flex-shrink min-w-0">
            JOIN US IN PRAYERS
          </h2>

          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2 Information Cards: Time & Location (Figma 279:2138 - 279:2155: 367px x 185px rounded-[20px] bg-[#e2e8f0]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[800px] mx-auto justify-items-center">
          {/* Card 1: Time */}
          <div className="w-full max-w-[367px] min-h-[185px] bg-[#e2e8f0] rounded-[20px] p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
            {/* Clock Icon Circle (Figma 279:2146: 51px x 51px) */}
            <div className="w-[51px] h-[51px] rounded-full bg-[#122f4a] flex items-center justify-center text-white mb-3 group-hover:scale-105 transition-transform">
              <Clock className="w-6 h-6 text-white" />
            </div>

            {/* Title */}
            <h3 className="font-poppins font-semibold text-[#003370] text-[18px] sm:text-[20px] tracking-tight mb-1">
              Time - Every Day at 8 PM
            </h3>

            {/* Description */}
            <p className="font-poppins text-[#08091b] text-xs sm:text-[16px] leading-relaxed max-w-[274px]">
              Join in Person or Connect with The Ministry Broadcast Schedule.
            </p>
          </div>

          {/* Card 2: Location */}
          <div className="w-full max-w-[367px] min-h-[185px] bg-[#e2e8f0] rounded-[20px] p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
            {/* MapPin Icon Circle (Figma 279:2147: 51px x 51px) */}
            <div className="w-[51px] h-[51px] rounded-full bg-[#122f4a] flex items-center justify-center text-white mb-3 group-hover:scale-105 transition-transform">
              <MapPin className="w-6 h-6 text-white" />
            </div>

            {/* Title */}
            <h3 className="font-poppins font-semibold text-[#003370] text-[18px] sm:text-[20px] tracking-tight mb-1">
              LOCATION
            </h3>

            {/* Description */}
            <p className="font-poppins text-[#08091b] text-xs sm:text-[16px] leading-relaxed max-w-[241px]">
              Prayer Mountain, Ankur Narula Ministries, Punjab, India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
