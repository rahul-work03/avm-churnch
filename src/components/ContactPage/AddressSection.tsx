'use client'

import React from 'react'
import { MapPin, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { TextWordReveal, GoldBarReveal } from '@/components/ui/text-reveal'

interface AddressSectionProps {
  addressSectionTitle?: string | null
  fullAddress?: string | null
  googleMapsUrl?: string | null
}

export const AddressSection: React.FC<AddressSectionProps> = ({
  addressSectionTitle = 'Address',
  fullAddress = 'Ankur Narula Ministries, Village Khambra, Nakodar Rd, Near T.V tower, Jalandhar-Punjab 144026',
  googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Ankur+Narula+Ministries+Village+Khambra+Nakodar+Rd+Near+TV+tower+Jalandhar+Punjab+144026',
}) => {
  const mapUrl =
    googleMapsUrl ||
    'https://www.google.com/maps/search/?api=1&query=Ankur+Narula+Ministries+Village+Khambra+Nakodar+Rd+Near+TV+tower+Jalandhar+Punjab+144026'

  return (
    <section className="relative py-8 sm:py-12 md:py-16 pb-16 sm:pb-24 md:pb-32 overflow-hidden select-none">
      {/* Section Header with Edge-to-Edge Golden Bars */}
      <div className="w-full flex items-center justify-between mb-6 sm:mb-10">
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
            data-node-id="235:1368"
          >
            {addressSectionTitle || 'Address'}
          </TextWordReveal>
        </div>

        <GoldBarReveal
          direction="right"
          duration={0.6}
          delay={0.1}
          className="flex-1 self-center h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm"
        />
      </div>

      {/* Address Text & Interactive Map Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-wrap items-center justify-center gap-2 group font-poppins text-[#333333] hover:text-[#003471] text-base sm:text-lg md:text-[22px] leading-relaxed transition-colors underline decoration-slate-300 hover:decoration-[#efbf04] underline-offset-4"
          >
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#efbf04] flex-shrink-0 group-hover:scale-110 transition-transform" />
            <span>
              {fullAddress ||
                'Ankur Narula Ministries, Village Khambra, Nakodar Rd, Near T.V tower, Jalandhar-Punjab 144026'}
            </span>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#003471] transition-colors ml-1 inline-block" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
