'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryItem {
  id: number
  src: string
  alt: string
  isOuter?: boolean
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

  // 4 authentic Figma stage images of Apostle Dr. Ankur Yoseph Narula
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: '/figma-assets/5015189f303ab5f84079babded9d65c9ccc48184.png',
      alt: 'Apostle Dr. Ankur Yoseph Narula Preaching at Pulpit - Left Stage',
      isOuter: true,
    },
    {
      id: 2,
      src: '/figma-assets/6febc49876ea0f4082d17b9f97eb203fb3eef625.png',
      alt: 'Apostle Dr. Ankur Yoseph Narula Preaching - Center Left Stage',
      isOuter: false,
    },
    {
      id: 3,
      src: '/figma-assets/37779cc2b561e1d01c410bf39a3933217872a623.png',
      alt: 'Apostle Dr. Ankur Yoseph Narula at Transparent Podium - Center Right Stage',
      isOuter: false,
    },
    {
      id: 4,
      src: '/figma-assets/a33b36b60d3d30d692518d269fef4f654949cbb1.png',
      alt: 'Apostle Dr. Ankur Yoseph Narula Preaching - Right Stage',
      isOuter: true,
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

  const isMobile = viewportWidth < 640
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024

  const cardGap = isMobile ? 8 : isTablet ? 16 : 24
  let cardWidth: number
  let cardHeight: number
  let sidePadding: number
  let availableWidth: number
  let maxTravel: number

  if (isMobile) {
    // Mobile: 2 center cards visible, outer cards slightly peeking (~125px-135px height)
    cardWidth = Math.round(viewportWidth * 0.44)
    cardHeight = Math.round(cardWidth * 0.78)
    sidePadding = Math.round((viewportWidth - (2 * cardWidth + cardGap)) / 2)
    availableWidth = viewportWidth
    const step = cardWidth + cardGap
    maxTravel = Math.max(0, (galleryItems.length - 2) * step)
  } else if (isTablet) {
    sidePadding = 24
    availableWidth = viewportWidth - 2 * sidePadding
    cardWidth = Math.round((availableWidth - 2 * cardGap) / 3)
    cardHeight = Math.min(Math.round(cardWidth * 0.95), 360)
    const step = cardWidth + cardGap
    maxTravel = Math.max(0, (galleryItems.length - 3) * step)
  } else {
    // Desktop
    sidePadding = 32
    availableWidth = Math.min(1440, viewportWidth)
    cardWidth = Math.round((availableWidth - 3 * cardGap - 2 * sidePadding) / 4)
    cardHeight = Math.min(Math.round(cardWidth * 1.3), 460)
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
    <section className="relative bg-white overflow-hidden" data-node-id="274:3">
      {/* ==================== SECTION HEADER ==================== */}
      {/* Desktop Header: Full-width Dark Navy Bar (Figma Node 274:8, 274:24, 274:26, 274:29) */}
      <div className="hidden md:flex w-full bg-[#122f4a] h-[80px] items-center justify-between px-0 relative z-10 shadow-md">
        {/* Left Gold Bar */}
        <div className="w-[180px] lg:w-[280px] xl:w-[323px] h-[8px] bg-[#efbf04] rounded-r-full shadow-sm" data-node-id="274:24" />

        {/* Center Title Text */}
        <h2 className="font-philosopher font-bold text-white text-2xl lg:text-[34px] xl:text-[38px] tracking-tight text-center px-4 whitespace-nowrap">
          The church of signs and wonders
        </h2>

        {/* Right Gold Bar */}
        <div className="w-[180px] lg:w-[280px] xl:w-[323px] h-[8px] bg-[#efbf04] rounded-l-full shadow-sm" data-node-id="274:26" />
      </div>

      {/* Mobile Header: Gold Bars flanking Title (Figma Node 274:321, 274:324, 274:329) */}
      <div className="md:hidden w-full flex items-center justify-between pt-4 pb-2 px-0">
        <div className="w-[44px] h-[5px] bg-[#efbf04] rounded-r-full" data-node-id="274:321" />
        <h2 className="font-philosopher font-bold text-[#003471] text-base sm:text-lg tracking-tight text-center px-2">
          The church of signs and wonders
        </h2>
        <div className="w-[44px] h-[5px] bg-[#efbf04] rounded-l-full" data-node-id="274:324" />
      </div>

      <div className="pt-2 sm:pt-6 md:pt-12 pb-8 sm:pb-14 md:pb-24">
        {/* Man Of God with Golden Torch / Flare Emblems on both sides (Figma 274:34, 274:331-337) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-6 md:mb-10">
          <div
            className="relative w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04]"
            data-node-id="274:334"
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
          />
          <span className="font-poppins font-bold text-[#d5582a] md:text-[#d5582a] text-base sm:text-2xl md:text-[34px] tracking-wide" data-node-id="274:34">
            Man Of God
          </span>
          <div
            className="relative w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
            data-node-id="274:337"
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
          />
        </div>

        {/* ==================== AMPHITHEATER 3D STAGE CAROUSEL ==================== */}
        <div className="relative w-full py-1 sm:py-3 md:py-4">
          {/* Left Arrow Button (visible if scrollable) */}
          {maxTravel > 0 && (
            <button
              type="button"
              onClick={scrollPrev}
              disabled={currentX <= 5}
              className="absolute left-1 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-sm text-[#003471] border border-slate-200 flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none shadow-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Previous stage photo"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Right Arrow Button (visible if scrollable) */}
          {maxTravel > 0 && (
            <button
              type="button"
              onClick={scrollNext}
              disabled={currentX >= maxTravel - 5}
              className="absolute right-1 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-sm text-[#003471] border border-slate-200 flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none shadow-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Next stage photo"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Amphitheater Strip Container */}
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
              height: `${cardHeight + (isMobile ? 12 : 54)}px`,
              perspective: '1400px',
              perspectiveOrigin: '50% 50%',
            }}
          >
            <div
              className="absolute inset-y-0 flex items-center will-change-transform"
              style={{
                transform: `translate3d(-${currentX}px, 0, 0)`,
                transformStyle: 'preserve-3d',
                paddingLeft: isMobile ? `${sidePadding}px` : '16px',
              }}
            >
              {galleryItems.map((item, idx) => {
                const cardScreenCenter = sidePadding + idx * step + cardWidth / 2 - currentX
                const u = (cardScreenCenter - screenCenter) / (viewportWidth / 2)
                const uSq = Math.min(2.0, u * u)

                const kAngle = isMobile ? 8 : 20
                const rotateY = -u * kAngle

                const kY = isMobile ? 3 : 14
                const translateY = -kY * uSq

                const scale = isMobile ? 0.97 + 0.04 * Math.min(1.0, uSq) : 0.92 + 0.12 * Math.min(1.0, uSq)
                const translateZ = uSq * (isMobile ? 4 : 24)

                const itemHeight = !isMobile && item.isOuter ? cardHeight + 40 : cardHeight

                return (
                  <div
                    key={item.id}
                    onClick={() => scrollToIndex(idx)}
                    className="relative flex-shrink-0 will-change-transform cursor-pointer transition-shadow"
                    style={{
                      width: `${cardWidth}px`,
                      height: `${itemHeight}px`,
                      marginRight: `${cardGap}px`,
                      transform: `translateY(${translateY}px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                      transformOrigin: 'center center',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className="relative w-full h-full bg-slate-900 overflow-hidden shadow-md sm:shadow-2xl rounded-sm">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        draggable={false}
                        className="object-cover object-top pointer-events-none"
                        priority={idx < 4}
                      />

                      {Math.abs(u) > 0.2 && (
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              u < 0
                                ? 'linear-gradient(to right, transparent 30%, rgba(0,0,0,0.25) 100%)'
                                : 'linear-gradient(to left, transparent 30%, rgba(0,0,0,0.25) 100%)',
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
          <div className="flex items-center justify-center gap-2 mt-2 sm:mt-4 md:mt-6">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === i
                    ? 'w-5 sm:w-9 h-1.5 sm:h-2 bg-[#efbf04]'
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to stage photo ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ==================== PASTOR BIO & CTA ==================== */}
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 text-center mt-4 sm:mt-8 md:mt-14">
          <h3 className="font-poppins font-semibold text-[#003471] sm:text-[#d5582a] text-base sm:text-2xl md:text-[28px] tracking-tight" data-node-id="274:35">
            Apostle Dr. Ankur Yoseph Narula
          </h3>
          <p className="font-poppins font-semibold sm:font-medium text-[#122f4a] sm:text-[#8c8c8c] text-xs sm:text-base md:text-[18px] mt-0.5 sm:mt-1.5" data-node-id="274:37">
            Founder &amp; Senior Pastor
          </p>

          <p className="font-poppins font-light sm:font-normal text-[#0b0c1c] text-xs sm:text-sm md:text-[18px] leading-relaxed mt-1.5 sm:mt-3 max-w-2xl mx-auto text-balance" data-node-id="274:38">
            Apostle Dr. Ankur Yoseph Narula is the Founder and Overseer of The Church of Signs and Wonders{' '}
            Ankur Narula Ministries, which is one of the fastest-growing churches in India.
          </p>

          {/* Know More Pill CTA Button (Figma 274:17, 274:19, 274:345) */}
          <div className="mt-3 sm:mt-5 md:mt-7 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-poppins font-semibold text-xs sm:text-base md:text-[18px] w-[140px] sm:w-[174px] h-[38px] sm:h-[48px] rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              data-node-id="274:17"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
