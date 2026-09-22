"use client"

import React, { useEffect, useRef, useState, useCallback, useLayoutEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

export interface CardCarouselItem {
  src: string
  alt: string
  title?: string
  subtitle?: string
}

export interface CardCarouselProps {
  images: CardCarouselItem[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
  pitchFactor?: number
  className?: string
}

export const CardCarousel: React.FC<CardCarouselProps> = ({
  images,
  autoplayDelay = 3000,
  showPagination = true,
  showNavigation = true,
  pitchFactor = 1.08,
  className,
}) => {
  const count = images.length
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const posRef = useRef(0)
  const targetRef = useRef(0)
  const cardWidthRef = useRef(280)
  const rafRef = useRef<number | null>(null)
  const isHoveredRef = useRef(false)

  const dragRef = useRef<{
    startX: number
    startPos: number
    pointerId: number
    lastX: number
    lastTime: number
    velocity: number
  } | null>(null)

  const [activeIndex, setActiveIndex] = useState(0)

  const getNormalizedIndex = useCallback(
    (pos: number) => ((Math.round(pos) % count) + count) % count,
    [count],
  )

  // Direct GPU Paint Loop
  const paint = useCallback(() => {
    const cardW = cardWidthRef.current
    if (!cardW || count === 0) return

    // Card pitch spacing with clean clearance between cards
    const pitch = cardW * pitchFactor
    const currentPos = posRef.current

    cardRefs.current.forEach((card, index) => {
      if (!card) return

      // Wrap-around shortest ring offset
      let offset = index - currentPos
      offset = ((offset % count) + count) % count
      if (offset > count / 2) offset -= count

      const absOffset = Math.abs(offset)

      // Clean Flat Scaling & Depth (No sideways tilt)
      const scale = Math.max(0.68, 1 - absOffset * 0.14)
      const translateX = offset * pitch
      const translateZ = -absOffset * 60
      const opacity = Math.max(0, 1 - absOffset * 0.25)

      card.style.transform = `translateX(calc(-50% + ${translateX}px)) translateZ(${translateZ}px) scale(${scale})`
      card.style.opacity = String(opacity)
      card.style.zIndex = String(100 - Math.round(absOffset * 10))
    })
  }, [count, pitchFactor])

  // Smooth Settle Animation
  const settle = useCallback(
    (target: number) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      targetRef.current = target
      setActiveIndex(getNormalizedIndex(target))

      const step = () => {
        const remaining = targetRef.current - posRef.current
        if (Math.abs(remaining) < 0.001) {
          posRef.current = targetRef.current
          // Keep pos bounded in 0..count
          const norm = ((targetRef.current % count) + count) % count
          posRef.current = norm
          targetRef.current = norm
          paint()
          rafRef.current = null
          return
        }
        posRef.current += remaining * 0.16
        paint()
        rafRef.current = requestAnimationFrame(step)
      };

      rafRef.current = requestAnimationFrame(step)
    },
    [count, getNormalizedIndex, paint],
  )

  const goTo = useCallback(
    (targetIndex: number) => {
      const currentNorm = ((Math.round(posRef.current) % count) + count) % count
      let diff = targetIndex - currentNorm
      if (diff > count / 2) diff -= count
      if (diff < -count / 2) diff += count
      settle(posRef.current + diff)
    },
    [count, settle],
  )

  const nudge = useCallback(
    (by: number) => {
      settle(Math.round(targetRef.current) + by)
    },
    [settle],
  )

  // Measure card width on mount & resize
  useIsoLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateSize = () => {
      const firstCard = cardRefs.current[0]
      if (firstCard) {
        cardWidthRef.current = firstCard.offsetWidth
        paint()
      }
    }

    updateSize()
    const observer = new ResizeObserver(updateSize)
    observer.observe(container)
    return () => observer.disconnect()
  }, [paint])

  // Auto-scroll loop
  useEffect(() => {
    if (count <= 1) return

    const interval = setInterval(() => {
      if (!isHoveredRef.current && dragRef.current === null) {
        nudge(1)
      }
    }, autoplayDelay)

    return () => clearInterval(interval)
  }, [autoplayDelay, count, nudge])

  // Touch / Drag Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    e.currentTarget.setPointerCapture(e.pointerId)
    targetRef.current = posRef.current
    dragRef.current = {
      startX: e.clientX,
      startPos: posRef.current,
      pointerId: e.pointerId,
      lastX: e.clientX,
      lastTime: performance.now(),
      velocity: 0,
    }
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== e.pointerId) return

    const cardW = cardWidthRef.current || 280
    const pitch = cardW * pitchFactor
    const now = performance.now()
    const deltaX = e.clientX - drag.startX
    const dt = Math.max(1, now - drag.lastTime)
    
    drag.velocity = ((e.clientX - drag.lastX) / dt) * 1000
    drag.lastX = e.clientX
    drag.lastTime = now

    posRef.current = drag.startPos - deltaX / pitch
    setActiveIndex(getNormalizedIndex(posRef.current))
    paint()
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== e.pointerId) return
    dragRef.current = null

    // Momentum throw
    const cardW = cardWidthRef.current || 280
    const flick = Math.max(-1.5, Math.min(1.5, -(drag.velocity / cardW) * 0.3))
    settle(Math.round(posRef.current + flick))
  }

  return (
    <div
      className={cn("relative w-full max-w-[1360px] mx-auto px-2 sm:px-6 select-none", className)}
      onMouseEnter={() => {
        isHoveredRef.current = true
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false
      }}
    >
      <div className="relative w-full">
        {/* Navigation Arrows */}
        {showNavigation && (
          <>
            <button
              type="button"
              onClick={() => nudge(-1)}
              className="absolute left-1 sm:left-2 lg:left-3 top-1/2 -translate-y-1/2 z-50 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md text-[#003471] shadow-xl border border-slate-200/80 flex items-center justify-center transition-all duration-200 hover:bg-[#efbf04] hover:text-[#0b0c1c] hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous leadership card"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              className="absolute right-1 sm:right-2 lg:right-3 top-1/2 -translate-y-1/2 z-50 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md text-[#003471] shadow-xl border border-slate-200/80 flex items-center justify-center transition-all duration-200 hover:bg-[#efbf04] hover:text-[#0b0c1c] hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next leadership card"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        {/* 3D Carousel Stage */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative w-full h-[360px] sm:h-[430px] md:h-[480px] overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
          style={{
            perspective: "1200px",
          }}
        >
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {images.map((item, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  cardRefs.current[idx] = el
                }}
                onClick={() => goTo(idx)}
                className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[220px] sm:w-[270px] md:w-[310px] h-[310px] sm:h-[380px] md:h-[440px] rounded-[22px] overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 will-change-transform cursor-pointer group"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                  isolation: "isolate",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 270px, 310px"
                  className="object-cover object-top pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  priority={idx < 3}
                />
                {(item.title || item.subtitle) && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-5 text-white pointer-events-none">
                      {item.title && (
                        <p className="font-poppins font-semibold text-xs sm:text-sm md:text-base text-[#efbf04] leading-snug">
                          {item.title}
                        </p>
                      )}
                      {item.subtitle && (
                        <p className="font-poppins text-[11px] sm:text-xs md:text-sm text-slate-200 mt-0.5">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Custom Pagination Indicator Pills */}
        {showPagination && (
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-1.5 sm:gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer",
                  activeIndex === i
                    ? "w-7 sm:w-9 bg-[#efbf04]"
                    : "w-1.5 sm:w-2 bg-slate-300 hover:bg-slate-400",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
