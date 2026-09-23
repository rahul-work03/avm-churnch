'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TextWordReveal, BlurTextReveal, GoldBarReveal } from '@/components/ui/text-reveal'

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
  infoSectionSubtitle = 'The Church of Signs and Wonders is always open to welcoming you. Reach out through our dedicated prayer lines, general queries, or visit us in person.',
  generalInquiriesTitle = 'General inquiries',
  generalInquiriesEmail1 = 'Info@ankurnarula.org',
  generalInquiriesEmail2 = 'Prayer@ankurnarula.org',
  hospitalLineTitle = 'Hospital prayer line',
  hospitalLineEmail = 'anmhospitalprayerline@gmail.com',
  emergencyPrayersTitle = 'Emergency prayers',
  emergencyPrayersEmail = 'anmemergencyprayer@gmail.com',
  phoneSectionTitle = 'Phone & address',
  phoneNumber = '0181 520 7777',
}) => {
  return (
    <section className="relative py-10 sm:py-14 md:py-20 overflow-hidden select-none" data-node-id="235:1361">
      {/* Section Header with Edge-to-Edge Golden Bars */}
      <div className="w-full flex items-center justify-between mb-3 sm:mb-4">
        <GoldBarReveal
          direction="left"
          duration={0.6}
          delay={0.1}
          className="flex-1 self-center h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm"
        />

        <div className="flex-initial self-center max-w-[80%] sm:max-w-none px-2 sm:px-4 md:px-8 text-center">
          <TextWordReveal
            as="h2"
            delay={0.08}
            staggerDelay={0.035}
            className="font-poppins font-bold text-[#1f3a5f] text-xl sm:text-2xl md:text-[28px] text-center tracking-tight justify-center"
            data-node-id="235:1367"
          >
            {infoSectionTitle || 'Contact Information'}
          </TextWordReveal>
        </div>

        <GoldBarReveal
          direction="right"
          duration={0.6}
          delay={0.1}
          className="flex-1 self-center h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm"
        />
      </div>

      {/* Subtitle */}
      {infoSectionSubtitle && (
        <div className="max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-14 px-4 text-center">
          <BlurTextReveal
            as="p"
            delay={0.2}
            className="font-poppins font-normal text-[#667085] text-xs sm:text-sm md:text-[16px] text-center leading-relaxed justify-center"
            data-node-id="235:1382"
          >
            {infoSectionSubtitle}
          </BlurTextReveal>
        </div>
      )}

      {/* Main Card Container */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#122f4a] rounded-[20px] overflow-hidden shadow-2xl border border-[#122f4a]"
          data-node-id="235:1362"
        >
          {/* Decorative Corner Arcs SVG Backdrop */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" data-node-id="235:1363">
            <svg
              className="absolute inset-0 w-full h-full object-cover"
              viewBox="0 0 1140 460"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Top-Left Arcs (Node 235:1364) */}
              <ellipse
                cx="-40"
                cy="-30"
                rx="320"
                ry="240"
                stroke="#ffffff"
                strokeOpacity="0.08"
                strokeWidth="1"
              />
              <ellipse
                cx="-40"
                cy="-30"
                rx="280"
                ry="200"
                stroke="#ffffff"
                strokeOpacity="0.05"
                strokeWidth="1"
              />
              <ellipse
                cx="-40"
                cy="-30"
                rx="240"
                ry="160"
                stroke="#ffffff"
                strokeOpacity="0.04"
                strokeWidth="1"
              />

              {/* Bottom-Right Arcs (Node 235:1365) */}
              <ellipse
                cx="1180"
                cy="490"
                rx="340"
                ry="250"
                stroke="#ffffff"
                strokeOpacity="0.08"
                strokeWidth="1"
              />
              <ellipse
                cx="1180"
                cy="490"
                rx="300"
                ry="210"
                stroke="#ffffff"
                strokeOpacity="0.05"
                strokeWidth="1"
              />
              <ellipse
                cx="1180"
                cy="490"
                rx="250"
                ry="170"
                stroke="#ffffff"
                strokeOpacity="0.04"
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* 2x2 Grid Content Inside Card */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Top-Left: General inquiries */}
            <div className="py-7 px-6 sm:px-8 md:px-12 flex flex-col items-center text-center justify-center min-h-[160px] md:min-h-[170px]">
              <h3
                className="font-poppins font-semibold text-lg sm:text-xl md:text-[26px] text-white mb-2 sm:mb-3 leading-snug"
                data-node-id="235:1368"
              >
                {generalInquiriesTitle || 'General inquiries'}
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

            {/* Top-Right: Hospital prayer line */}
            <div className="py-7 px-6 sm:px-8 md:px-12 flex flex-col items-center text-center justify-center min-h-[160px] md:min-h-[170px]">
              <h3
                className="font-poppins font-semibold text-lg sm:text-xl md:text-[26px] text-white mb-2 sm:mb-3 leading-snug"
                data-node-id="235:1369"
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

            {/* Horizontal Divider Line (Full Width) */}
            <div
              className="col-span-1 md:col-span-2 w-full h-[1px] pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #626262 0%, #ffffff 50%, #474747 100%)',
              }}
              data-node-id="235:1383"
            />

            {/* Bottom-Left: Emergency prayers */}
            <div className="py-7 px-6 sm:px-8 md:px-12 flex flex-col items-center text-center justify-center min-h-[160px] md:min-h-[170px]">
              <h3
                className="font-poppins font-semibold text-lg sm:text-xl md:text-[26px] text-white mb-2 sm:mb-3 leading-snug"
                data-node-id="235:1370"
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
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfoSection
