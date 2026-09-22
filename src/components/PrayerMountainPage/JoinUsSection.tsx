'use client'

import React from 'react'
import { Clock, MapPin, ExternalLink } from 'lucide-react'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/reveal'

export interface JoinUsSectionProps {
  joinHeaderTitle?: string
  timeCardTitle?: string
  timeCardDescription?: string
  locationCardTitle?: string
  locationCardDescription?: string
  locationUrl?: string
}

export const JoinUsSection: React.FC<JoinUsSectionProps> = ({
  joinHeaderTitle = 'JOIN US IN PRAYERS',
  timeCardTitle = 'Time - Every Day at 8 PM',
  timeCardDescription = 'Join in Person or Connect with The Ministry Broadcast Schedule.',
  locationCardTitle = 'LOCATION',
  locationCardDescription = 'Prayer Mountain, Ankur Narula Ministries, Punjab, India',
  locationUrl = 'https://maps.google.com/?q=The+Church+of+Signs+and+Wonders+Khambra+Jalandhar+Punjab+India',
}) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white overflow-hidden select-none" data-node-id="279:2081">
      {/* Dark Navy Section Header Bar */}
      <RevealOnScroll direction="none" duration={0.6} className="bg-[#122f4a] py-4 sm:py-5 md:py-6 text-white relative shadow-sm mb-8 sm:mb-12">
        <div className="w-full flex items-center justify-between">
          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

          <h2 className="font-poppins font-semibold text-white text-sm sm:text-2xl md:text-[28px] text-center px-3 sm:px-8 md:px-12 tracking-wide uppercase flex-shrink min-w-0">
            {joinHeaderTitle}
          </h2>

          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
        </div>
      </RevealOnScroll>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2 Information Cards: Time & Location */}
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[800px] mx-auto justify-items-center"
        >
          {/* Card 1: Time */}
          <StaggerItem className="w-full max-w-[367px]">
            <div className="w-full min-h-[185px] bg-[#e2e8f0] rounded-[20px] p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 group">
              {/* Clock Icon Circle */}
              <div className="w-[51px] h-[51px] rounded-full bg-[#122f4a] flex items-center justify-center text-white mb-3 group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-poppins font-semibold text-[#003370] text-[18px] sm:text-[20px] tracking-tight mb-1">
                {timeCardTitle}
              </h3>

              {/* Description */}
              <p className="font-poppins text-[#08091b] text-xs sm:text-[16px] leading-relaxed max-w-[274px]">
                {timeCardDescription}
              </p>
            </div>
          </StaggerItem>

          {/* Card 2: Location (Clickable Link with target blank) */}
          <StaggerItem className="w-full max-w-[367px]">
            <a
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[185px] bg-[#e2e8f0] hover:bg-[#d8e2ee] rounded-[20px] p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer block border border-transparent hover:border-[#122f4a]/20"
              title="Open Location in Google Maps"
            >
              {/* MapPin Icon Circle */}
              <div className="w-[51px] h-[51px] rounded-full bg-[#122f4a] group-hover:bg-[#efbf04] group-hover:text-[#003370] flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-all duration-300 shadow-sm">
                <MapPin className="w-6 h-6 transition-colors" />
              </div>

              {/* Title */}
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <h3 className="font-poppins font-semibold text-[#003370] text-[18px] sm:text-[20px] tracking-tight">
                  {locationCardTitle}
                </h3>
                <ExternalLink className="w-4 h-4 text-[#003370]/60 group-hover:text-[#003370] transition-colors" />
              </div>

              {/* Description */}
              <p className="font-poppins text-[#08091b] text-xs sm:text-[16px] leading-relaxed max-w-[241px] group-hover:text-[#003370] transition-colors">
                {locationCardDescription}
              </p>
            </a>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}

