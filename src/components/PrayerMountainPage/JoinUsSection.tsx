'use client'

import React from 'react'
import { Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/ui/reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'

export interface JoinUsSectionProps {
  joinHeaderTitle?: string
  timeCardTitle?: string
  timeCardDescription?: string
}

export const JoinUsSection: React.FC<JoinUsSectionProps> = ({
  joinHeaderTitle = 'JOIN US IN PRAYERS',
  timeCardTitle = 'Time - Every Day at 8 PM',
  timeCardDescription = 'Join in Person or Connect with The Ministry Broadcast Schedule.',
}) => {
  return (
    <section className="relative overflow-hidden select-none" data-node-id="279:2081">
      {/* Luminous Sapphire Header Bar */}
      <EditorialSectionHeader
        title={joinHeaderTitle}
        variant="atmospheric"
      />

      <SacredCanvas tone="warm-alabaster" className="pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          {/* Centered Schedule / Time Card */}
          <RevealOnScroll direction="up" distance={20} duration={0.6} className="w-full max-w-md">
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="w-full bg-white border border-slate-200/90 rounded-[24px] p-7 sm:p-9 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 group ring-1 ring-black/5"
            >
              {/* Clock Icon Circle with Rich Sapphire & Gold Ring */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0c2238] to-[#122f4a] flex items-center justify-center text-white mb-4 shadow-md border-2 border-[#efbf04]/70 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-[#efbf04]" />
              </div>

              {/* Title */}
              <h3 className="font-philosopher font-bold text-[#003370] text-xl sm:text-2xl tracking-tight mb-2">
                {timeCardTitle}
              </h3>

              {/* Description */}
              <p className="font-poppins text-slate-600 text-xs sm:text-[15px] leading-relaxed max-w-[320px]">
                {timeCardDescription}
              </p>
            </motion.div>
          </RevealOnScroll>
        </div>
      </SacredCanvas>
    </section>
  )
}


