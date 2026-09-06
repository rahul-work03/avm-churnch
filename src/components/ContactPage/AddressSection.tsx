import React from 'react'
import { MapPin, ExternalLink } from 'lucide-react'

export const AddressSection: React.FC = () => {
  const mapUrl =
    'https://www.google.com/maps/search/?api=1&query=Ankur+Narula+Ministries+Village+Khambra+Nakodar+Rd+Near+TV+tower+Jalandhar+Punjab+144026'

  return (
    <section className="relative py-8 sm:py-12 md:py-16 pb-16 sm:pb-24 md:pb-32 overflow-hidden">
      {/* Section Header with Edge-to-Edge Golden Bars (Figma 235:1375 & 235:1376) */}
      <div className="w-full flex items-center justify-between mb-6 sm:mb-10">
        <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-r-full shadow-xs pointer-events-none" />

        <h2 className="font-poppins font-bold text-[#1f3a5f] text-xl sm:text-2xl md:text-[28px] text-center px-4 sm:px-8 tracking-tight whitespace-nowrap" data-node-id="235:1368">
          Address
        </h2>

        <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-l-full shadow-xs pointer-events-none" />
      </div>

      {/* Address Text & Interactive Map Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-wrap items-center justify-center gap-2 group font-poppins text-[#333333] hover:text-[#003471] text-base sm:text-lg md:text-[22px] leading-relaxed transition-colors underline decoration-slate-300 hover:decoration-[#efbf04] underline-offset-4"
        >
          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#efbf04] flex-shrink-0 group-hover:scale-110 transition-transform" />
          <span>
            Ankur Narula Ministries, Village Khambra, Nakodar Rd, Near T.V tower, Jalandhar-Punjab 144026
          </span>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#003471] transition-colors ml-1 inline-block" />
        </a>
      </div>
    </section>
  )
}
