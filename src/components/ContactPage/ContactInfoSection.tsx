'use client'

import React from 'react'
import { RevealOnScroll } from '@/components/ui/reveal'

interface ContactInfoSectionProps {
  infoSectionTitle?: string | null
  infoSectionSubtitle?: string | null
  generalInquiriesTitle?: string | null
  generalInquiriesEmail1?: string | null
  generalInquiriesEmail2?: string | null
  hospitalLineTitle?: string | null
  hospitalLineEmail?: string | null
  emergencyPrayersTitle?: string | null
  emergencyPrayersEmail?: string | null
  phoneSectionTitle?: string | null
  phoneNumber?: string | null
}

export const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({
  infoSectionTitle = 'Contact Information',
  infoSectionSubtitle = 'Send Us Your Prayer Request Believing for God’s Urgent Intervention and Miracles.',
  generalInquiriesTitle = 'General inquiries & prayer',
  generalInquiriesEmail1 = 'info@ankurnarula.org',
  generalInquiriesEmail2 = 'Prayer@ankurnarula.org',
  hospitalLineTitle = 'Hospital prayer line',
  hospitalLineEmail = 'anmhospitalprayerline@gmail.com',
  emergencyPrayersTitle = 'Emergency prayers',
  emergencyPrayersEmail = 'anmemergencyprayer@gmail.com',
  phoneSectionTitle = 'Phone & address',
  phoneNumber = '0181 520 7777',
}) => {
  return (
    <section className="relative py-10 sm:py-14 md:py-20 overflow-hidden" data-node-id="235:1361">
      {/* Section Header with Edge-to-Edge Golden Bars */}
      <RevealOnScroll direction="none" duration={0.6} className="w-full flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-r-full shadow-xs pointer-events-none" />

        <h2 className="font-poppins font-bold text-[#1f3a5f] text-xl sm:text-2xl md:text-[28px] text-center px-4 sm:px-8 tracking-tight whitespace-nowrap" data-node-id="235:1367">
          {infoSectionTitle || 'Contact Information'}
        </h2>

        <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-l-full shadow-xs pointer-events-none" />
      </RevealOnScroll>

      {/* Subtitle */}
      {infoSectionSubtitle && (
        <RevealOnScroll direction="up" delay={0.1}>
          <p className="font-poppins font-normal text-[#667085] text-xs sm:text-sm md:text-[16px] text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-14 px-4 leading-relaxed" data-node-id="235:1382">
            {infoSectionSubtitle}
          </p>
        </RevealOnScroll>
      )}

      {/* Main Card Container */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up" duration={0.6}>
          <div
            className="relative bg-[#122f4a] rounded-[20px] overflow-hidden shadow-2xl border border-[#122f4a]"
            data-node-id="235:1362"
          >
            {/* Decorative Corner Arcs SVG Backdrop */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" data-node-id="235:1363">
              <svg
                className="absolute inset-0 w-full h-full object-cover"
                viewBox="0 0 1140 340"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Top-Left Arc */}
                <path
                  d="M-31.3857 -122.978C24.2065 -159.196 88.468 -143.649 112.477 -89.2902C136.487 -34.9315 111.608 38.6881 56.016 74.9055C0.423748 111.123 -63.8377 95.5762 -87.847 41.2175C-111.856 -13.1413 -86.978 -86.7609 -31.3857 -122.978Z"
                  stroke="white"
                  strokeOpacity="0.3"
                  strokeWidth="7"
                />
                {/* Bottom-Right Arc */}
                <path
                  d="M1130.32 265.235C1195.92 265.235 1249.09 318.432 1249.09 384.057C1249.09 449.681 1195.92 502.878 1130.32 502.878C1064.73 502.878 1011.56 449.681 1011.56 384.057C1011.56 318.432 1064.73 265.235 1130.32 265.235Z"
                  stroke="white"
                  strokeWidth="7"
                />
              </svg>
            </div>

            {/* ===================== TOP ROW ===================== */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 z-10">
              {/* Top-Left: General inquiries & prayer */}
              <div className="py-7 px-6 sm:px-8 md:px-12 flex flex-col items-center text-center justify-center min-h-[160px] md:min-h-[170px]">
                <h3
                  className="font-poppins font-semibold text-lg sm:text-xl md:text-[26px] text-white mb-2 sm:mb-3 leading-snug"
                  data-node-id="235:1369"
                >
                  {generalInquiriesTitle || 'General inquiries & prayer'}
                </h3>
                <div className="space-y-1 font-poppins font-normal text-white text-sm sm:text-[16px] leading-normal">
                  {generalInquiriesEmail1 && (
                    <p>
                      <a
                        href={`mailto:${generalInquiriesEmail1}`}
                        className="hover:text-[#efbf04] transition-colors"
                        data-node-id="235:1377"
                      >
                        {generalInquiriesEmail1}
                      </a>
                    </p>
                  )}
                  {generalInquiriesEmail2 && (
                    <p>
                      <a
                        href={`mailto:${generalInquiriesEmail2}`}
                        className="hover:text-[#efbf04] transition-colors"
                        data-node-id="235:1378"
                      >
                        {generalInquiriesEmail2}
                      </a>
                    </p>
                  )}
                </div>
              </div>

              {/* Top Vertical Divider */}
              <div
                className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[116px] pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, #626262 0%, #ffffff 52.4%, #474747 100%)',
                }}
                data-node-id="235:1384"
              />

              {/* Top-Right: Hospital prayer line */}
              <div className="py-7 px-6 sm:px-8 md:px-12 flex flex-col items-center text-center justify-center min-h-[160px] md:min-h-[170px] border-t md:border-t-0 border-white/10">
                <h3
                  className="font-poppins font-semibold text-lg sm:text-xl md:text-[26px] text-white mb-2 sm:mb-3 leading-snug"
                  data-node-id="235:1370"
                >
                  {hospitalLineTitle || 'Hospital prayer line'}
                </h3>
                <div className="space-y-1 font-poppins font-normal text-white text-sm sm:text-[16px] leading-normal">
                  {hospitalLineEmail && (
                    <p>
                      <a
                        href={`mailto:${hospitalLineEmail}`}
                        className="hover:text-[#efbf04] transition-colors"
                        data-node-id="235:1379"
                      >
                        {hospitalLineEmail}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ===================== MIDDLE HORIZONTAL DIVIDER ===================== */}
            <div className="w-full h-[1px] bg-white/20 relative z-10" data-node-id="235:1383" />

            {/* ===================== BOTTOM ROW ===================== */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 z-10">
              {/* Bottom-Left: Emergency prayers */}
              <div className="py-7 px-6 sm:px-8 md:px-12 flex flex-col items-center text-center justify-center min-h-[160px] md:min-h-[170px]">
                <h3
                  className="font-poppins font-semibold text-lg sm:text-xl md:text-[26px] text-white mb-2 sm:mb-3 leading-snug"
                  data-node-id="235:1372"
                >
                  {emergencyPrayersTitle || 'Emergency prayers'}
                </h3>
                <div className="space-y-1 font-poppins font-normal text-white text-sm sm:text-[16px] leading-normal">
                  {emergencyPrayersEmail && (
                    <p>
                      <a
                        href={`mailto:${emergencyPrayersEmail}`}
                        className="hover:text-[#efbf04] transition-colors"
                        data-node-id="235:1381"
                      >
                        {emergencyPrayersEmail}
                      </a>
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Vertical Divider */}
              <div
                className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[116px] pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, #626262 0%, #ffffff 52.4%, #474747 100%)',
                }}
                data-node-id="235:1385"
              />

              {/* Bottom-Right: Phone & address */}
              <div className="py-7 px-6 sm:px-8 md:px-12 flex flex-col items-center text-center justify-center min-h-[160px] md:min-h-[170px] border-t md:border-t-0 border-white/10">
                <h3
                  className="font-poppins font-semibold text-lg sm:text-xl md:text-[26px] text-white mb-2 sm:mb-3 leading-snug"
                  data-node-id="235:1371"
                >
                  {phoneSectionTitle || 'Phone & address'}
                </h3>
                <div className="space-y-1 font-poppins font-normal text-white text-sm sm:text-[16px] leading-normal">
                  {phoneNumber && (
                    <p>
                      <a
                        href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                        className="hover:text-[#efbf04] transition-colors font-medium tracking-wide"
                        data-node-id="235:1380"
                      >
                        {phoneNumber}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
