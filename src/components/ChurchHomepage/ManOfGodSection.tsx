'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryItem {
  id: number
  src: string
  alt: string
}

export const ManOfGodSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [viewportWidth, setViewportWidth] = useState(1440)
  const [currentX, setCurrentX] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  // Target scroll position for buttery smooth LERP
  const targetScrollRef = useRef(0)
  const currentScrollRef = useRef(0)

  // Drag / Swipe tracking
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const startYRef = useRef(0)
  const startScrollRef = useRef(0)
  const isHorizontalSwipeRef = useRef<boolean | null>(null)

  // 8 stage images using the official Man of God portrait
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: '/figma-assets/man_of_god_image_1.jpg',
      alt: 'Apostle Dr. Ankur Yoseph Narula Preaching - Stage 1',
    },
    {
      id: 2,
      src: '/figma-assets/man_of_god_image_1.jpg',
      alt: 'Apostle Dr. Ankur Yoseph Narula Preaching - Stage 2',
    },
    {
      id: 3,
      src: '/figma-assets/man_of_god_image_1.jpg',
      alt: 'Apostle Dr. Ankur Yoseph Narula Preaching - Stage 3',
    },
    {
      id: 4,
      src: '/figma-assets/man_of_god_image_1.jpg',
      alt: 'Apostle Dr. Ankur Yoseph Narula Preaching - Stage 4',
    },
    {
      id: 5,
      src: '/figma-assets/man_of_god_image_1.jpg',
      alt: 'Apostle Dr. Ankur Yoseph Narula Preaching - Stage 5',
    },
    {
      id: 6,
      src: '/figma-assets/man_of_god_image_1.jpg',
      alt: 'Apostle Dr. Ankur Yoseph Narula Preaching - Stage 6',
    },
    {
      id: 7,
      src: '/figma-assets/man_of_god_image_1.jpg',
      alt: 'Apostle Dr. Ankur Yoseph Narula Preaching - Stage 7',
    },
    {
      id: 8,
      src: '/figma-assets/man_of_god_image_1.jpg',
      alt: 'Apostle Dr. Ankur Yoseph Narula Preaching - Stage 8',
    },
  ]

  // Track responsive screen width
  useEffect(() => {
    const updateDimensions = () => {
      setViewportWidth(window.innerWidth)
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Film Reel dimension calculations
  const isMobile = viewportWidth < 640
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024

  const cardGap = isMobile ? 12 : isTablet ? 16 : 20
  let cardWidth: number
  let cardHeight: number
  let sidePadding: number
  let availableWidth: number
  let maxTravel: number

  if (isMobile) {
    // 2 full cards in the center with 1 card half-peeking on left and right
    cardWidth = Math.round(viewportWidth * 0.44)
    cardHeight = Math.round(cardWidth * 0.65)
    sidePadding = Math.round((viewportWidth - (2 * cardWidth + cardGap)) / 2)
    availableWidth = viewportWidth
    const step = cardWidth + cardGap
    maxTravel = Math.max(0, (galleryItems.length - 2) * step)
  } else if (isTablet) {
    sidePadding = 24
    availableWidth = viewportWidth - 2 * sidePadding
    cardWidth = (availableWidth - 2 * cardGap) / 3
    cardHeight = Math.min(Math.round(cardWidth * 0.65), 260)
    const step = cardWidth + cardGap
    maxTravel = Math.max(0, (galleryItems.length - 3) * step)
  } else {
    sidePadding = 32
    availableWidth = viewportWidth - 2 * sidePadding
    cardWidth = (availableWidth - 3 * cardGap) / 4
    cardHeight = Math.min(Math.round(cardWidth * 0.65), 260)
    const step = cardWidth + cardGap
    maxTravel = Math.max(0, (galleryItems.length - 4) * step)
  }

  const step = cardWidth + cardGap
  const screenCenter = viewportWidth / 2

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    targetScrollRef.current = Math.max(0, targetScrollRef.current - step)
  }, [step])

  const scrollNext = useCallback(() => {
    targetScrollRef.current = Math.min(maxTravel, targetScrollRef.current + step)
  }, [maxTravel, step])

  const scrollToIndex = useCallback(
    (index: number) => {
      targetScrollRef.current = Math.min(maxTravel, Math.max(0, index * step))
    },
    [maxTravel, step],
  )

  // Touch & Pointer Gesture Listeners
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    isDraggingRef.current = true
    isHorizontalSwipeRef.current = null
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
    startXRef.current = clientX
    startYRef.current = clientY
    startScrollRef.current = targetScrollRef.current
  }

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDraggingRef.current) return
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
    const deltaX = clientX - startXRef.current
    const deltaY = clientY - startYRef.current

    if (isHorizontalSwipeRef.current === null && (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5)) {
      isHorizontalSwipeRef.current = Math.abs(deltaX) > Math.abs(deltaY)
    }

    if (isHorizontalSwipeRef.current) {
      if ('touches' in e && e.cancelable) {
        e.preventDefault()
      }
      targetScrollRef.current = Math.max(0, Math.min(maxTravel, startScrollRef.current - deltaX * 1.3))
    }
  }

  const handleTouchEnd = () => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    if (isHorizontalSwipeRef.current) {
      targetScrollRef.current = Math.max(0, Math.min(maxTravel, Math.round(targetScrollRef.current / step) * step))
    }
    isHorizontalSwipeRef.current = null
  }

  // Smooth LERP (Linear Interpolation) Loop for Touch/Swipe & Button Navigation
  useEffect(() => {
    let animationFrameId: number

    const lerpLoop = () => {
      const diff = targetScrollRef.current - currentScrollRef.current
      if (Math.abs(diff) > 0.05) {
        currentScrollRef.current += diff * 0.14
        setCurrentX(currentScrollRef.current)
        const currentActive = Math.min(
          galleryItems.length - 1,
          Math.max(0, Math.round(currentScrollRef.current / step)),
        )
        setActiveIndex(currentActive)
      }
      animationFrameId = requestAnimationFrame(lerpLoop)
    }

    animationFrameId = requestAnimationFrame(lerpLoop)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [galleryItems.length, step])

  return (
    <section className="relative py-10 sm:py-14 md:py-20 bg-white overflow-hidden">
      <div className="w-full flex flex-col items-center gap-5 sm:gap-7 md:gap-9">
        {/* Section Header */}
        <div className="w-full flex items-center justify-between flex-shrink-0">
          <div className="flex-1 min-w-[8px] sm:min-w-[32px] h-[3px] sm:h-[5px] xl:h-[6px] bg-[#efbf04] rounded-r-full pointer-events-none" />

          <div className="text-center px-2 sm:px-8 md:px-12 flex-shrink min-w-0">
            <h2 className="font-philosopher font-bold text-[#003471] text-base sm:text-2xl md:text-[32px] leading-tight tracking-tight">
              The church of signs and wonders
            </h2>

            {/* Man Of God with Golden Emblems on both sides */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 mt-0.5 sm:mt-1.5">
              <div className="relative w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0">
                <Image
                  src="/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-poppins font-bold text-[#efbf04] text-sm sm:text-xl md:text-[28px] tracking-wide">
                Man Of God
              </span>
              <div className="relative w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0">
                <Image
                  src="/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png"
                  alt=""
                  fill
                  className="object-contain scale-x-[-1]"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[8px] sm:min-w-[32px] h-[3px] sm:h-[5px] xl:h-[6px] bg-[#efbf04] rounded-l-full pointer-events-none" />
        </div>

        {/* Film Reel 3D Stage Viewport */}
        <div className="relative flex-shrink-0 w-full py-1">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={scrollPrev}
            disabled={currentX <= 5}
            className="absolute left-1 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-sm text-[#003471] border border-slate-200 flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none shadow-sm transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={scrollNext}
            disabled={currentX >= maxTravel - 5}
            className="absolute right-1 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-sm text-[#003471] border border-slate-200 flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none shadow-sm transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Film Reel Strip Container - Clipped precisely to visible cards */}
          <div
            ref={containerRef}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleTouchEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative mx-auto overflow-hidden select-none cursor-grab active:cursor-grabbing touch-pan-y"
            style={{
              width: `${availableWidth}px`,
              maxWidth: '100%',
              height: `${cardHeight + (isMobile ? 16 : 44)}px`,
              perspective: '1200px',
              perspectiveOrigin: '50% 50%',
            }}
          >
            <div
              className="absolute inset-y-0 flex items-center will-change-transform"
              style={{
                transform: `translate3d(-${currentX}px, 0, 0)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {galleryItems.map((item, idx) => {
                // Exact center of this card in screen coordinates
                const cardScreenCenter = sidePadding + idx * step + cardWidth / 2 - currentX

                // Continuous normalized ratio relative to screen center (-1.0 = left edge, 0.0 = center, +1.0 = right edge)
                const u = (cardScreenCenter - screenCenter) / (viewportWidth / 2)
                const uSq = Math.min(2.0, u * u) // Quadratic curve for smooth, unbroken parabolic arc

                // Continuous Tangent 3D Inward Rotation:
                const kAngle = isMobile ? 12 : 28
                const rotateY = -u * kAngle

                // Continuous Unbroken Parabolic Arc Elevation (Y = -Ky * u^2):
                const kY = isMobile ? 6 : 22
                const translateY = -kY * uSq

                // Center scaling: subtle on mobile, amphitheater on desktop
                const scale = isMobile ? 0.96 + 0.08 * Math.min(1.0, uSq) : 0.84 + 0.2 * Math.min(1.0, uSq)

                // Depth adjustment following the amphitheater arc
                const translateZ = uSq * (isMobile ? 4 : 20)

                return (
                  <div
                    key={item.id}
                    onClick={() => scrollToIndex(idx)}
                    className="relative flex-shrink-0 will-change-transform cursor-pointer"
                    style={{
                      width: `${cardWidth}px`,
                      height: `${cardHeight}px`,
                      marginRight: `${cardGap}px`,
                      transform: `translateY(${translateY}px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                      transformOrigin: 'center center',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Clean Non-Overlapping Film Frame: Zero border-radius, pure image panel */}
                    <div className="relative w-full h-full bg-black overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        draggable={false}
                        className="object-cover object-center pointer-events-none"
                        priority={idx < 4}
                      />

                      {/* Subtle angle shading for realistic amphitheater illumination */}
                      {Math.abs(u) > 0.25 && (
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              u < 0
                                ? 'linear-gradient(to right, transparent 20%, rgba(0,0,0,0.3) 100%)'
                                : 'linear-gradient(to left, transparent 20%, rgba(0,0,0,0.3) 100%)',
                          }}
                        />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-2 sm:mt-3">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === i
                    ? 'w-5 sm:w-8 h-1.5 sm:h-2 bg-[#efbf04]'
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Pastor Info & Bio */}
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 text-center flex-shrink-0">
          <h3 className="font-poppins font-bold text-[#003471] text-lg sm:text-2xl md:text-[26px] tracking-tight">
            Apostle Dr. Ankur Yoseph Narula
          </h3>
          <p className="font-poppins font-medium text-[#122f4a] text-sm sm:text-sm md:text-[15px] mt-0.5">
            Founder &amp; Senior Pastor
          </p>

          <p className="font-poppins text-[#334155] text-sm sm:text-sm md:text-[14px] leading-relaxed mt-1.5 sm:mt-2 max-w-xl mx-auto line-clamp-3 sm:line-clamp-none">
            Apostle Dr. Ankur Yoseph Narula is the Founder and Overseer of The Church of Signs and Wonders{' '}
            Ankur Narula Ministries, which is one of the fastest-growing churches in India.
          </p>

          {/* Know More Button */}
          <div className="mt-2.5 sm:mt-3.5">
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-poppins font-semibold text-sm sm:text-sm md:text-base px-7 sm:px-8 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-sm active:scale-95"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}