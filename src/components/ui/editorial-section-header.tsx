'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'
import { GoldEmblem, GoldWingBar } from '@/components/ui/gold-flourish'

export interface EditorialSectionHeaderProps {
  title: string
  eyebrow?: string
  subtitle?: string
  variant?: 'editorial' | 'plaque' | 'atmospheric'
  align?: 'center' | 'left'
  className?: string
  titleClassName?: string
  delay?: number
}

export const EditorialSectionHeader: React.FC<EditorialSectionHeaderProps> = ({
  title,
  eyebrow,
  subtitle,
  variant = 'editorial',
  align = 'center',
  className = '',
  titleClassName = '',
  delay = 0.1,
}) => {
  // ==================== VARIANT B: PLAQUE (Floating Curved Royal Sapphire Plaque) ====================
  if (variant === 'plaque') {
    return (
      <div className={`relative max-w-[840px] mx-auto z-20 ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-gradient-to-r from-[#0d1e30] via-[#122f4a] to-[#0d1e30] rounded-[22px] sm:rounded-[36px] md:rounded-[44px] py-4 sm:py-5 md:py-6 px-4 sm:px-8 text-center text-white shadow-xl border border-white/15 overflow-hidden flex items-center justify-between gap-3 sm:gap-6"
        >
          {/* Decorative Gold Side Wing - Left */}
          <GoldWingBar
            direction="left"
            className="flex-1 h-[4px] sm:h-[6px]"
            delay={delay}
          />

          <div className="px-2 sm:px-4 flex-shrink min-w-0">
            {eyebrow && (
              <p className="font-poppins font-semibold uppercase tracking-[0.22em] text-[#efbf04] text-[10px] sm:text-xs md:text-sm">
                {eyebrow}
              </p>
            )}
            <h2 className={`font-philosopher font-bold text-white text-base sm:text-xl md:text-[26px] lg:text-[30px] leading-tight tracking-tight mt-1 ${titleClassName}`}>
              {title}
            </h2>
          </div>

          {/* Decorative Gold Side Wing - Right */}
          <GoldWingBar
            direction="right"
            className="flex-1 h-[4px] sm:h-[6px]"
            delay={delay}
          />
        </motion.div>
      </div>
    )
  }

  // ==================== VARIANT C: ATMOSPHERIC (Luminous Sapphire Gradient Band) ====================
  if (variant === 'atmospheric') {
    return (
      <div className={`w-full relative overflow-hidden bg-gradient-to-r from-[#0a1724] via-[#122f4a] to-[#0a1724] py-4 sm:py-6 md:py-7 text-white shadow-sm border-y border-white/10 ${className}`}>
        <div className="relative z-10 w-full flex items-center justify-between gap-2 sm:gap-4 md:gap-6">
          {/* Left Golden Wing Bar - Bleeds to left edge */}
          <GoldWingBar
            direction="left"
            className="flex-1 h-[5px] sm:h-[7px] md:h-[9px]"
            delay={delay}
          />

          <div className="flex items-center justify-center gap-2 sm:gap-4 px-2 sm:px-6 flex-shrink min-w-0">
            <GoldEmblem size="md" />

            <div className="text-center">
              {eyebrow && (
                <p className="font-poppins font-semibold uppercase tracking-[0.25em] text-[#efbf04] text-[10px] sm:text-xs">
                  {eyebrow}
                </p>
              )}
              <TextWordReveal
                as="h2"
                delay={delay}
                staggerDelay={0.035}
                className={`font-philosopher font-bold text-white text-base sm:text-2xl md:text-[30px] lg:text-[34px] tracking-tight uppercase leading-tight text-center ${titleClassName}`}
              >
                {title}
              </TextWordReveal>
            </div>

            <GoldEmblem size="md" flipped={true} />
          </div>

          {/* Right Golden Wing Bar - Bleeds to right edge */}
          <GoldWingBar
            direction="right"
            className="flex-1 h-[5px] sm:h-[7px] md:h-[9px]"
            delay={delay}
          />
        </div>
      </div>
    )
  }

  // ==================== VARIANT A: EDITORIAL (Light Canvas with Edge-to-Edge Gold Bars on Both Sides) ====================
  const isCentered = align === 'center'

  return (
    <div className={`relative w-full ${isCentered ? 'text-center' : 'text-left'} ${className}`}>
      {/* Eyebrow Ribbon */}
      {eyebrow && (
        <div className="flex justify-center mb-2.5 sm:mb-3.5">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay - 0.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100/90 border border-slate-200/90 text-[#003471] shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#efbf04]" />
            <span className="font-poppins uppercase tracking-[0.22em] text-[10px] sm:text-xs font-semibold text-[#003471]">
              {eyebrow}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#efbf04]" />
          </motion.div>
        </div>
      )}

      {/* Main Title Row with Edge-to-Edge Gold Bars and Emblems on BOTH sides */}
      <div className="w-full flex items-center justify-between gap-2 sm:gap-4 md:gap-6">
        {/* Left Gold Wing Bar (Starts from left screen edge) */}
        <GoldWingBar
          direction="left"
          className="flex-1 h-[5px] sm:h-[6px] md:h-[8px] min-w-[16px]"
          delay={delay}
        />

        {/* Center Title + Emblems */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 px-1 sm:px-3 flex-shrink min-w-0 max-w-[88vw] sm:max-w-3xl md:max-w-4xl">
          <GoldEmblem size="md" />

          <TextWordReveal
            as="h2"
            delay={delay}
            staggerDelay={0.035}
            className={`font-philosopher font-bold text-[#122f4a] text-lg sm:text-2xl md:text-[30px] lg:text-[34px] tracking-tight leading-tight text-center ${titleClassName}`}
          >
            {title}
          </TextWordReveal>

          <GoldEmblem size="md" flipped={true} />
        </div>

        {/* Right Gold Wing Bar (Extends all the way to right screen edge) */}
        <GoldWingBar
          direction="right"
          className="flex-1 h-[5px] sm:h-[6px] md:h-[8px] min-w-[16px]"
          delay={delay}
        />
      </div>

      {/* Optional Subtitle */}
      {subtitle && (
        <BlurTextReveal
          as="p"
          delay={delay + 0.15}
          duration={0.65}
          className="font-poppins text-slate-700 text-xs sm:text-sm md:text-[17px] leading-relaxed max-w-3xl mx-auto mt-3 sm:mt-4 px-4"
        >
          {subtitle}
        </BlurTextReveal>
      )}
    </div>
  )
}
