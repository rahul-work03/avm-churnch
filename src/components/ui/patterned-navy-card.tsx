'use client'

import React, { useId } from 'react'
import { motion } from 'framer-motion'

export interface SacredLatticePatternProps {
  id?: string
  opacity?: number
  className?: string
}

export const SacredLatticePattern: React.FC<SacredLatticePatternProps> = ({
  id,
  opacity = 0.14,
  className = '',
}) => {
  const generatedId = useId().replace(/:/g, '_')
  const patternId = id || `sacred-pattern-${generatedId}`

  return (
    <>
      {/* Deep Navy/Sapphire Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#051326] to-[#020b14] pointer-events-none" />

      {/* Subtle Specular Radial Sheen */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_-10%,rgba(212,175,55,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_100%,rgba(30,58,138,0.25),transparent_60%)] pointer-events-none" />

      {/* Elegant Sacred Lattice SVG Pattern */}
      <svg
        className={`absolute inset-0 w-full h-full pointer-events-none mix-blend-screen ${className}`}
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={patternId} width="48" height="48" patternUnits="userSpaceOnUse">
            {/* Outer Diamond */}
            <path d="M24 0 L48 24 L24 48 L0 24 Z" fill="none" stroke="#efbf04" strokeWidth="0.75" />
            {/* Inner Accent Cross / Diamond */}
            <path d="M24 8 L40 24 L24 40 L8 24 Z" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.4" />
            <circle cx="24" cy="24" r="2" fill="#efbf04" />
            {/* Subtle Corner Dots */}
            <circle cx="0" cy="0" r="1.5" fill="#efbf04" fillOpacity="0.5" />
            <circle cx="48" cy="0" r="1.5" fill="#efbf04" fillOpacity="0.5" />
            <circle cx="0" cy="48" r="1.5" fill="#efbf04" fillOpacity="0.5" />
            <circle cx="48" cy="48" r="1.5" fill="#efbf04" fillOpacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {/* Fine Glass Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/[0.04] pointer-events-none" />
    </>
  )
}

export interface PatternedNavyCardProps {
  children?: React.ReactNode
  className?: string
  patternId?: string
  patternOpacity?: number
  hoverEffect?: boolean
  topGoldBar?: boolean
  asPillar?: boolean
  pillarNumber?: string
  title?: string
  icon?: React.ReactNode
  badgeText?: string
  badgeIcon?: React.ReactNode
}

export const PatternedNavyCard: React.FC<PatternedNavyCardProps> = ({
  children,
  className = '',
  patternId,
  patternOpacity = 0.14,
  hoverEffect = true,
  topGoldBar = true,
  asPillar = false,
  pillarNumber,
  title,
  icon,
  badgeText,
  badgeIcon,
}) => {
  const CardWrapper = hoverEffect ? motion.div : 'div'
  const motionProps = hoverEffect
    ? {
        whileHover: { y: -5, transition: { duration: 0.25 } },
      }
    : {}

  return (
    <CardWrapper
      {...(motionProps as any)}
      className={`relative rounded-[22px] sm:rounded-[26px] md:rounded-[28px] p-7 sm:p-9 md:p-11 shadow-2xl border border-[#d4af37]/35 ring-1 ring-white/10 overflow-hidden text-left group transition-all duration-300 ${className}`}
    >
      <SacredLatticePattern id={patternId} opacity={patternOpacity} />

      {/* Top Gold Metallic Accent Line */}
      {topGoldBar && (
        <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-[#d4af37] via-[#efbf04] to-transparent pointer-events-none" />
      )}

      {/* Content Container */}
      <div className="relative z-10 w-full">
        {/* Optional Badge Header */}
        {badgeText && (
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-[#efbf04]/10 border border-[#efbf04]/30 text-[#efbf04] text-xs font-poppins font-medium tracking-widest uppercase">
            {badgeIcon}
            <span>{badgeText}</span>
          </div>
        )}

        {/* Pillar Header (Icon + Title + Label) */}
        {asPillar && (title || icon || pillarNumber) && (
          <div className="flex items-center gap-3.5 mb-5">
            {icon && (
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#efbf04]/5 border border-[#efbf04]/40 text-[#efbf04] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                {icon}
              </div>
            )}
            <div>
              {pillarNumber && (
                <span className="text-[11px] font-poppins uppercase tracking-wider text-[#efbf04] font-medium block">
                  {pillarNumber}
                </span>
              )}
              {title && (
                <h3 className="font-philosopher font-bold text-white text-xl sm:text-2xl tracking-tight">
                  {title}
                </h3>
              )}
            </div>
          </div>
        )}

        {/* Card Body */}
        {children}
      </div>

      {/* Bottom Subtle Gold Accent Hairline */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-[#d4af37]/40 via-transparent to-transparent pointer-events-none" />
    </CardWrapper>
  )
}
