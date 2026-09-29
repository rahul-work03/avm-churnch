'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

export const SacredCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [cursorText, setCursorText] = useState<string | null>(null)
  const [isTouchDevice, setIsTouchDevice] = useState(true) // default true to avoid SSR flash

  // Direct MotionValues for 60fps+ tracking with zero React re-renders during mouse moves
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Inner Dot: Snappy, precise spring
  const dotSpringConfig = { damping: 45, stiffness: 850, mass: 0.1 }
  const dotX = useSpring(mouseX, dotSpringConfig)
  const dotY = useSpring(mouseY, dotSpringConfig)

  // Outer Aura Ring: Silky, fluid trailing spring
  const ringSpringConfig = { damping: 28, stiffness: 240, mass: 0.55 }
  const ringX = useSpring(mouseX, ringSpringConfig)
  const ringY = useSpring(mouseY, ringSpringConfig)

  useEffect(() => {
    // Detect touch device or reduced motion
    const hasTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (hasTouch || prefersReducedMotion) {
      setIsTouchDevice(true)
      return
    }

    setIsTouchDevice(false)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Interactive element hover detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      const interactive = target.closest<HTMLElement>(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor], .cursor-pointer'
      )

      if (interactive) {
        setIsHovered(true)
        const customText = interactive.getAttribute('data-cursor')
        setCursorText(customText || null)
      } else {
        setIsHovered(false)
        setCursorText(null)
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY, isVisible])

  if (isTouchDevice) return null

  // Ring dimension transitions
  const ringSize = isHovered ? (cursorText ? 64 : 52) : isPressed ? 26 : 34

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* 1. Outer Sacred Aura Ring */}
            <motion.div
              style={{
                x: ringX,
                y: ringY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                width: ringSize,
                height: ringSize,
                scale: 1,
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                width: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                height: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.2 },
              }}
              className={`rounded-full flex items-center justify-center transition-colors duration-300 ${
                isHovered
                  ? 'border-2 border-[#efbf04] bg-[#efbf04]/15 shadow-[0_0_20px_rgba(239,191,4,0.35)] backdrop-blur-[1.5px]'
                  : 'border-[1.5px] border-[#d4af37]/60 bg-[#efbf04]/5 shadow-[0_0_12px_rgba(212,175,55,0.2)]'
              }`}
            >
              {cursorText && (
                <span className="font-poppins font-bold text-[9px] uppercase tracking-wider text-[#003471]">
                  {cursorText}
                </span>
              )}
            </motion.div>

            {/* 2. Inner Radiant Gold Core Dot */}
            <motion.div
              style={{
                x: dotX,
                y: dotY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: isHovered && !cursorText ? 0 : 1,
                scale: isPressed ? 0.7 : isHovered ? 0 : 1,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="w-2 h-2 rounded-full bg-[#efbf04] shadow-[0_0_8px_rgba(239,191,4,0.9),0_0_2px_#ffffff]"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
