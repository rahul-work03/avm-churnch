'use client'

import React from 'react'
import { motion } from 'framer-motion'

export interface GoldEmblemProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  flipped?: boolean
}

export const GoldEmblem: React.FC<GoldEmblemProps> = ({
  className = '',
  size = 'md',
  flipped = false,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 sm:w-5 sm:h-5',
    md: 'w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8',
    lg: 'w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10',
  }

  return (
    <div
      className={`relative flex-shrink-0 bg-[#efbf04] ${sizeClasses[size]} ${
        flipped ? 'scale-x-[-1]' : ''
      } ${className}`}
      style={{
        maskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
        WebkitMaskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
      aria-hidden="true"
    />
  )
}

export interface TaperedGoldRuleProps {
  className?: string
  width?: string
  height?: number
  delay?: number
}

export const TaperedGoldRule: React.FC<TaperedGoldRuleProps> = ({
  className = '',
  width = 'w-32 sm:w-48 md:w-64',
  height = 2,
  delay = 0.2,
}) => {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative mx-auto rounded-full bg-gradient-to-r from-transparent via-[#efbf04] to-transparent ${width} ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    />
  )
}

export interface GoldWingBarProps {
  direction?: 'left' | 'right'
  className?: string
  delay?: number
}

export const GoldWingBar: React.FC<GoldWingBarProps> = ({
  direction = 'left',
  className = '',
  delay = 0.1,
}) => {
  const originClass = direction === 'left' ? 'origin-left' : 'origin-right'
  const roundedClass = direction === 'left' ? 'rounded-r-full' : 'rounded-l-full'

  return (
    <div
      style={{
        animationDelay: `${delay}s`,
      }}
      className={`h-[5px] sm:h-[6px] md:h-[8px] bg-[#efbf04] shadow-xs flex-1 min-w-[24px] animate-gold-bar ${originClass} ${roundedClass} ${className}`}
      aria-hidden="true"
    />
  )
}
