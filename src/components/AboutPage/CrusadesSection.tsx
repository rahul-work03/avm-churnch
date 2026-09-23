'use client'

import React, { useEffect, useRef, useState, useCallback, useLayoutEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, GoldBarReveal } from '@/components/ui/text-reveal'
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
    src: '/crusades/image_1.jpeg',
    alt: 'Massive Miracle Crusade - Sea of Believers Gathering',
  },
  {
    id: 2,
    src: '/crusades/image_2.jpeg',
    alt: 'Atmosphere of Fire and Deliverance Night',
  },
  {
    id: 3,
    src: '/crusades/image_3.jpeg',
    alt: 'Supernatural Gathering & Holy Spirit Outpouring',
  },
  {
    id: 4,
    src: '/crusades/image_4.jpeg',
    alt: 'Multitude of Souls Worshipping in Power',
  },
  {
    id: 5,
    src: '/crusades/image_5.jpeg',
    alt: 'Historic Ankur Narula Ministries Crusade',
  },
  {
    id: 6,
    src: '/crusades/image_6.jpeg',
    alt: 'Praise and Worship Unbroken Multitude',
  },
  {
    id: 7,
    src: '/crusades/image_7.jpeg',
    alt: 'Apostle Dr. Ankur Yoseph Narula Preaching to Hundred Thousands',
  },
  {
    id: 8,
    src: '/crusades/image_8.jpeg',
    alt: 'Unprecedented Healing & Miracles Encounter',
  },
  {
    id: 9,
    src: '/crusades/image_9.jpeg',
    alt: 'Overflowing Joy in the Holy Presence',
  },
  {
    id: 10,
    src: '/crusades/image_10.jpeg',
    alt: 'Holy Spirit Fire Crusade',
  },
  {
    id: 11,
    src: '/crusades/image_11.jpeg',
    alt: 'Great Harvest Crusade',
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

  // Fractional continuous position around the infinite loop
  const posRef = useRef(0)
  const targetRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const isHoveredRef = useRef(false)

  // Drag tracking
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

  // Panoramic sizing calculations: exactly 4 cards on desktop (2 center, 2 outer), 2 cards on mobile/tablet
  const isMobile = viewportWidth < 640
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024

  const cardGap = isMobile ? 12 : isTablet ? 16 : 20
  let cardWidth: number
  let cardHeight: number
  let availableWidth: number

  if (isMobile) {
    availableWidth = viewportWidth - 24
    cardWidth = Math.round((availableWidth - cardGap) / 2.05)
    cardHeight = Math.round(cardWidth * 1.25)
  } else if (isTablet) {
    availableWidth = viewportWidth - 48
    cardWidth = Math.round((availableWidth - cardGap) / 2.1)
    cardHeight = Math.min(Math.round(cardWidth * 1.22), 430)
  } else {
    availableWidth = Math.min(viewportWidth - 64, 1380)
    cardWidth = Math.round((availableWidth - 3 * cardGap) / 4)
    cardHeight = Math.min(Math.round(cardWidth * 1.22), 460)
  }

  const pitch = cardWidth + cardGap

  const indexAt = useCallback(
    (pos: number) => ((Math.round(pos) % count) + count) % count,
    [count],
  )

  // GPU paint function: projects cards in a symmetrical 2-in-middle concave amphitheater
  const paint = useCallback(() => {
    if (!pitch || count === 0) return
    const pos = posRef.current
    const kAngle = isMobile ? 12 : 16
    const maxVisibleOffset = isMobile ? 0.9 : 1.9

    cardRefs.current.forEach((card, idx) => {
      if (!card) return

      // Wrap offset into shortest circular distance [-count/2, count/2]
      let offset = idx - pos
      offset = ((offset % count) + count) % count
      if (offset > count / 2) offset -= count

      // Shift by -0.5 so two cards are centered symmetrically around the middle (relOffset: -0.5 and +0.5)
      const relOffset = offset - 0.5
      const absRel = Math.abs(relOffset)

      // Cull cards outside the visible 4-card stage (or 2 on mobile) to eliminate any odd slivers/edges
      if (absRel > maxVisibleOffset + 0.6) {
        card.style.opacity = '0'
        card.style.pointerEvents = 'none'
        card.style.transform = 'translateX(-50%) translateZ(-999px)'
        return
      }

      // Symmetrical concave amphitheater curve:
      // Center cards (absRel = 0.5): scale 0.90, translateZ 0px (receded)
      // Outer flanking cards (absRel = 1.5): scale 1.02, translateZ 42px (forward)
      const curveRamp = Math.max(0, Math.min(1.0, (absRel - 0.5) / 1.0))
      const scale = isMobile ? 0.94 + 0.06 * curveRamp : 0.90 + 0.12 * curveRamp
      const translateZ = curveRamp * (isMobile ? 16 : 42)
      const translateY = (1 - curveRamp) * (isMobile ? 3 : 8)
      const rotateY = -relOffset * kAngle

      const xPos = relOffset * pitch

      card.style.transform = `translateX(calc(-50% + ${xPos}px)) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`
      card.style.zIndex = String(Math.round(50 + (1 - curveRamp) * 10))

      // Clean opacity clamping so no partial slivers bleed through when stationary
      const edgeOpacity = Math.max(0, Math.min(1, (maxVisibleOffset + 0.3 - absRel) / 0.3))
      card.style.opacity = String(edgeOpacity)
      card.style.pointerEvents = edgeOpacity > 0.4 ? 'auto' : 'none'
    })
  }, [count, isMobile, pitch])

  // Settle animation loop with smooth damping
  const settle = useCallback(
    (target: number) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      targetRef.current = target
      setActiveIndex(indexAt(target))

      const step = () => {
        const diff = targetRef.current - posRef.current
        if (Math.abs(diff) < 0.001) {
          posRef.current = targetRef.current
          // Keep bounded within 0..count
          const norm = ((targetRef.current % count) + count) % count
          posRef.current = norm
          targetRef.current = norm
          paint()
          rafRef.current = null
          return
        }
        posRef.current += diff * 0.12
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

  // Auto-scroll loop with infinite continuous rotation
  useEffect(() => {
    const timer = setInterval(() => {
      if (dragRef.current !== null || isHoveredRef.current) return
      nudge(1)
    }, 3200)

    return () => clearInterval(timer)
  }, [nudge])

  // Sync paint on dimension changes
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
      const momentum = Math.max(-1.5, Math.min(1.5, drag.v * 0.12))
      settle(Math.round(posRef.current + momentum))
    } else {
      settle(Math.round(posRef.current))
    }
  }

  return (
    <section className="py-8 sm:py-14 md:py-20 bg-white overflow-hidden select-none" data-node-id="275:810">
      {/* Dark Navy Crusade Header Bar */}
      <div className="bg-[#122f4a] py-5 sm:py-7 md:py-8 text-white relative shadow-sm">
        <div className="w-full flex items-center justify-between">
          <GoldBarReveal
            direction="left"
            duration={0.7}
            delay={0.1}
            className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0"
          />

          <TextWordReveal
            as="h2"
            delay={0.15}
            staggerDelay={0.04}
            className="font-poppins font-medium text-white text-sm sm:text-2xl md:text-[28px] text-center px-3 sm:px-8 md:px-12 tracking-wide flex-shrink min-w-0"
          >
            {headerTitle}
          </TextWordReveal>

          <GoldBarReveal
            direction="right"
            duration={0.7}
            delay={0.1}
            className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0"
          />
        </div>
      </div>

      {/* Panoramic 3D Stage Viewport */}
      <RevealOnScroll direction="up" distance={24} duration={0.8} delay={0.1} className="relative mt-6 sm:mt-10 md:mt-12 w-full py-2 sm:py-4">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={() => nudge(-1)}
          className="absolute left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-[#122f4a] border border-slate-200 shadow-xl flex items-center justify-center hover:bg-[#efbf04] hover:text-[#0b0c1c] transition-all duration-300 active:scale-95 cursor-pointer"
          aria-label="Previous crusade image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={() => nudge(1)}
          className="absolute right-2 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-[#122f4a] border border-slate-200 shadow-xl flex items-center justify-center hover:bg-[#efbf04] hover:text-[#0b0c1c] transition-all duration-300 active:scale-95 cursor-pointer"
          aria-label="Next crusade image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Panoramic 3D Stage Container */}
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
            width: `${availableWidth}px`,
            maxWidth: '100%',
            height: `${cardHeight + (isMobile ? 26 : 56)}px`,
            perspective: '1400px',
            perspectiveOrigin: '50% 50%',
          }}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
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
                  className="absolute left-1/2 top-1/2 -translate-y-1/2 will-change-transform cursor-pointer group select-none"
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    transformOrigin: 'center center',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="relative w-full h-full rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-lg border border-slate-200/70 bg-slate-900 transition-shadow duration-300 group-hover:shadow-2xl">
                    <Image
                      src={resolvedSrc}
                      alt={item.alt || item.title || 'Crusade'}
                      fill
                      draggable={false}
                      className="object-cover object-center pointer-events-none transition-transform duration-700 group-hover:scale-105"
                      priority={idx < 4}
                      sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 30vw"
                    />

                    {(item.title || item.location) && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    )}

                    {(item.title || item.location) && (
                      <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white pointer-events-none">
                        {item.title && (
                          <p className="font-poppins font-semibold text-xs sm:text-sm md:text-[15px] text-[#efbf04] tracking-wide line-clamp-1">
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

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-5">
          {activeCrusades.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === i
                  ? 'w-6 sm:w-9 h-1.5 sm:h-2 bg-[#efbf04]'
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to crusade slide ${i + 1}`}
            />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  )
}