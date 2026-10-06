'use client'

import React, { useEffect, useRef, useState, useCallback, useLayoutEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, GoldBarReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl } from '@/utilities/getMediaUrl'

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export interface CrusadeItem {
  id?: number | string
  image?: any
  imageFallback?: string
  src?: string
  alt: string
  title?: string
  location?: string
}

export interface CrusadesSectionProps {
  headerTitle?: string
  crusadeImages?: CrusadeItem[]
}

const DEFAULT_CRUSADES: CrusadeItem[] = [
  {
    id: 1,
    src: '/crusades/image_1.png',
    alt: 'Massive Miracle Crusade - Sea of Believers Gathering',
  },
  {
    id: 2,
    src: '/crusades/image_2.png',
    alt: 'Atmosphere of Fire and Deliverance Night',
  },
  {
    id: 3,
    src: '/crusades/image_3.png',
    alt: 'Supernatural Gathering & Holy Spirit Outpouring',
  },
  {
    id: 4,
    src: '/crusades/image_4.png',
    alt: 'Multitude of Souls Worshipping in Power',
  },
  {
    id: 5,
    src: '/crusades/image_5.png',
    alt: 'Historic Ankur Narula Ministries Crusade',
  },
]

export const CrusadesSection: React.FC<CrusadesSectionProps> = ({
  headerTitle = 'The Largest ankur narula ministries Crusades',
  crusadeImages,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [viewportWidth, setViewportWidth] = useState(1440)
  const [activeIndex, setActiveIndex] = useState(0)

  const activeCrusades = crusadeImages && crusadeImages.length > 0 ? crusadeImages : DEFAULT_CRUSADES
  const count = activeCrusades.length

  // Fractional continuous position around the circular loop
  const posRef = useRef(0)
  const targetRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const isHoveredRef = useRef(false)

  // Drag & touch tracking
  const dragRef = useRef<{
    id: number
    startX: number
    startY: number
    startPos: number
    v: number
    time: number
    isHorizontal: boolean | null
  } | null>(null)

  // Track responsive viewport width
  useEffect(() => {
    const updateDimensions = () => {
      setViewportWidth(window.innerWidth)
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Responsive 3-Card Landscape Geometry (16:9 Aspect Ratio)
  const isMobile = viewportWidth < 640
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024

  let cardWidth: number
  let pitchFactor: number

  if (isMobile) {
    // Mobile: Center card occupies ~76% width, left and right flanking cards peek in on sides
    cardWidth = Math.round(viewportWidth * 0.74)
    pitchFactor = 0.82
  } else if (isTablet) {
    // Tablet: Center card occupies ~64% width
    cardWidth = Math.min(Math.round(viewportWidth * 0.62), 620)
    pitchFactor = 0.76
  } else {
    // Desktop: Center card max 720px width in landscape 16:9
    cardWidth = Math.min(Math.round(viewportWidth * 0.5), 720)
    pitchFactor = 0.74
  }

  // Exact 16:9 Landscape Aspect Ratio
  const cardHeight = Math.round(cardWidth / (16 / 9))
  const pitch = Math.round(cardWidth * pitchFactor)
  const stageHeight = cardHeight + (isMobile ? 24 : 40)

  const indexAt = useCallback(
    (pos: number) => ((Math.round(pos) % count) + count) % count,
    [count],
  )

  // Direct GPU Paint Loop: Projects 3 landscape cards (1 sharp center, 2 flanking with depth/blur)
  const paint = useCallback(() => {
    if (!pitch || count === 0) return
    const pos = posRef.current

    cardRefs.current.forEach((card, idx) => {
      if (!card) return

      // Wrap offset into shortest circular distance [-count/2, count/2]
      let offset = idx - pos
      offset = ((offset % count) + count) % count
      if (offset > count / 2) offset -= count

      const absOffset = Math.abs(offset)

      // Cull cards outside the 3 visible positions (strictly 3 cards visible)
      if (absOffset > 1.45) {
        card.style.opacity = '0'
        card.style.pointerEvents = 'none'
        card.style.transform = 'translateX(-50%) translateY(-50%) translateZ(-999px) scale(0.6)'
        return
      }

      // Card 3D Depth, Scaling & Inward Y-Rotation facing towards center
      const rotateAngle = isMobile ? 22 : 28
      const rotateY = -offset * rotateAngle
      const scale = Math.max(0.78, 1 - absOffset * 0.16)
      const translateX = offset * pitch
      const translateZ = -absOffset * (isMobile ? 50 : 80)

      card.style.transform = `translateX(calc(-50% + ${translateX}px)) translateY(-50%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`
      card.style.zIndex = String(Math.round(50 - absOffset * 20))

      // Clean opacity & interaction
      const opacity = Math.max(0, 1 - absOffset * 0.22)
      card.style.opacity = String(opacity)
      card.style.pointerEvents = absOffset < 1.3 ? 'auto' : 'none'

      // Inner card visual effects (blur & dark vignette for side cards facing inward)
      const innerCard = card.firstElementChild as HTMLElement | null
      if (innerCard) {
        if (absOffset > 0.3) {
          innerCard.style.filter = `blur(${Math.min(2.8, absOffset * 2.5)}px) brightness(${Math.max(0.55, 1 - absOffset * 0.4)})`
        } else {
          innerCard.style.filter = 'blur(0px) brightness(1)'
        }
      }
    })
  }, [count, isMobile, pitch])

  // Smooth Settle Animation
  const settle = useCallback(
    (target: number) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      targetRef.current = target
      setActiveIndex(indexAt(target))

      const step = () => {
        const diff = targetRef.current - posRef.current
        if (Math.abs(diff) < 0.001) {
          posRef.current = targetRef.current
          const norm = ((targetRef.current % count) + count) % count
          posRef.current = norm
          targetRef.current = norm
          paint()
          rafRef.current = null
          return
        }
        posRef.current += diff * 0.15
        paint()
        rafRef.current = requestAnimationFrame(step)
      }
      rafRef.current = requestAnimationFrame(step)
    },
    [count, indexAt, paint],
  )

  const nudge = useCallback(
    (delta: number) => {
      settle(Math.round(targetRef.current) + delta)
    },
    [settle],
  )

  const scrollToIndex = useCallback(
    (index: number) => {
      const currentNorm = ((Math.round(posRef.current) % count) + count) % count
      let diff = index - currentNorm
      if (diff > count / 2) diff -= count
      if (diff < -count / 2) diff += count
      settle(posRef.current + diff)
    },
    [count, settle],
  )

  // Auto-scroll loop with pause on hover/interaction
  useEffect(() => {
    if (count <= 1) return

    const timer = setInterval(() => {
      if (dragRef.current !== null || isHoveredRef.current) return
      nudge(1)
    }, 3600)

    return () => clearInterval(timer)
  }, [count, nudge])

  // Sync paint on dimension / pitch changes
  useIsoLayoutEffect(() => {
    paint()
  }, [paint, viewportWidth])

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  // Pointer drag/swipe gesture handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    e.currentTarget.setPointerCapture(e.pointerId)
    targetRef.current = posRef.current
    dragRef.current = {
      id: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      startPos: posRef.current,
      v: 0,
      time: performance.now(),
      isHorizontal: null,
    }
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || drag.id !== e.pointerId || !pitch) return

    const deltaX = e.clientX - drag.startX
    const deltaY = e.clientY - drag.startY

    if (drag.isHorizontal === null && (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6)) {
      drag.isHorizontal = Math.abs(deltaX) > Math.abs(deltaY)
    }

    if (drag.isHorizontal) {
      const now = performance.now()
      const prevPos = posRef.current
      posRef.current = drag.startPos - deltaX / pitch
      drag.v = ((posRef.current - prevPos) / Math.max(now - drag.time, 1)) * 1000
      drag.time = now

      const currentIdx = indexAt(posRef.current)
      if (currentIdx !== activeIndex) {
        setActiveIndex(currentIdx)
      }
      paint()
    }
  }

  const handlePointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || drag.id !== e.pointerId) return
    dragRef.current = null

    if (drag.isHorizontal) {
      const momentum = Math.max(-1.5, Math.min(1.5, drag.v * 0.14))
      settle(Math.round(posRef.current + momentum))
    } else {
      settle(Math.round(posRef.current))
    }
  }

  return (
    <section className="relative overflow-hidden select-none" data-node-id="275:810">
      {/* Luminous Sapphire Crusade Header Bar */}
      <EditorialSectionHeader
        title={headerTitle}
        variant="atmospheric"
      />

      <SacredCanvas tone="warm-alabaster" className="pt-4 sm:pt-6 pb-10 sm:pb-14 md:pb-16">
        {/* 3-Card Landscape Carousel Stage */}
        <RevealOnScroll direction="up" distance={20} duration={0.8} delay={0.1} className="relative mt-4 sm:mt-6 md:mt-8 w-full overflow-hidden">
          {/* Relative Carousel Stage Wrapper */}
          <div className="relative mx-auto max-w-[1440px] px-2 sm:px-4">
          {/* Left Arrow Button (Floats on left flank) */}
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              nudge(-1)
            }}
            className="absolute left-2 sm:left-6 md:left-10 lg:left-14 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#481a3d]/90 hover:bg-[#5a204d] text-white backdrop-blur-md shadow-2xl border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous crusade"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button (Floats on right flank) */}
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              nudge(1)
            }}
            className="absolute right-2 sm:right-6 md:right-10 lg:right-14 top-1/2 -translate-y-1/2 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#481a3d]/90 hover:bg-[#5a204d] text-white backdrop-blur-md shadow-2xl border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next crusade"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Drag Container */}
          <div
            ref={containerRef}
            onMouseEnter={() => {
              isHoveredRef.current = true
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            className="relative mx-auto overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
            style={{
              width: '100%',
              height: `${stageHeight}px`,
              perspective: '1200px',
              perspectiveOrigin: '50% 50%',
            }}
          >
            {/* Card Stage Wrapper */}
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {activeCrusades.map((item, idx) => {
                const resolvedSrc = getMediaUrl(item.image, item.imageFallback || item.src || '/crusades/image_1.jpeg')

                return (
                  <div
                    key={item.id || idx}
                    ref={(el) => {
                      cardRefs.current[idx] = el
                    }}
                    onClick={() => scrollToIndex(idx)}
                    className="absolute left-1/2 top-1/2 will-change-transform cursor-pointer group select-none"
                    style={{
                      width: `${cardWidth}px`,
                      height: `${cardHeight}px`,
                      transformOrigin: 'center center',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950 transition-all duration-300">
                      <Image
                        src={resolvedSrc}
                        alt={item.alt || item.title || 'Crusade'}
                        fill
                        draggable={false}
                        className="object-cover object-center pointer-events-none transition-transform duration-700 group-hover:scale-105"
                        priority={idx < 3}
                        sizes="(max-width: 640px) 76vw, (max-width: 1024px) 62vw, 720px"
                      />

                      {/* Gradient Overlay & Captions */}
                      {(item.title || item.location) && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                      )}

                      {(item.title || item.location) && (
                        <div className="absolute bottom-0 inset-x-0 p-3 sm:p-5 text-white pointer-events-none">
                          {item.title && (
                            <p className="font-poppins font-semibold text-xs sm:text-sm md:text-base text-[#efbf04] tracking-wide line-clamp-1">
                              {item.title}
                            </p>
                          )}
                          {item.location && (
                            <p className="font-poppins text-[10px] sm:text-xs text-white/80 line-clamp-1 mt-0.5">
                              {item.location}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {activeCrusades.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === i
                  ? 'w-7 sm:w-9 h-1.5 sm:h-2 bg-[#efbf04]'
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to crusade slide ${i + 1}`}
            />
          ))}
        </div>
        </RevealOnScroll>
      </SacredCanvas>
    </section>
  )
}