'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CrusadeItem {
  id: number
  src: string
  alt: string
  title?: string
  location?: string
}

export const CrusadesSection: React.FC = () => {
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

  // 9 Crusade Showcase Images matching Figma nodes 218-2522 to 218-2530
  const crusadeImages: CrusadeItem[] = [
    {
      id: 1,
      src: '/figma-assets/c3f796c837b9ba4d7a0433d9285f5eb6000aef3e.png',
      alt: 'Massive Miracle Crusade - Sea of Believers Gathering',
      title: 'Global Miracle Crusade',
      location: 'Main Stadium Grounds',
    },
    {
      id: 2,
      src: '/figma-assets/ff7b25464623ab07ec009c6cc6d0508eb168c5a7.png',
      alt: 'Atmosphere of Fire and Deliverance Night',
      title: 'Night of Deliverance',
      location: 'Mega Arena Assembly',
    },
    {
      id: 3,
      src: '/figma-assets/1ada0f49bc0906e341e695f4fbc1eb1ad22d494a.png',
      alt: 'Supernatural Gathering & Holy Spirit Outpouring',
      title: 'Revival Fire Outreach',
      location: 'Grand Stadium',
    },
    {
      id: 4,
      src: '/figma-assets/29c9c3a1ebaf7d9b300e03952a2750d7b8131f18.png',
      alt: 'Multitude of Souls Worshipping in Power',
      title: 'Signs & Wonders Convention',
      location: 'National Sports Complex',
    },
    {
      id: 5,
      src: '/figma-assets/e3e25b6c010b5aa006f29088b8dae7f2466bf8f3.png',
      alt: 'Historic Ankur Narula Ministries Crusade',
      title: 'Historic Revival Gathering',
      location: 'International Stadium',
    },
    {
      id: 6,
      src: '/figma-assets/f1c7c30e211dc39094fc986db7a7e7d876202f58.png',
      alt: 'Praise and Worship Unbroken Multitude',
      title: 'Atmosphere of Praise',
      location: 'Revival Pavilion',
    },
    {
      id: 7,
      src: '/figma-assets/a12f7a8578aca49746f879f50d3567e9cc929dad.png',
      alt: 'Apostle Dr. Ankur Yoseph Narula Preaching to Hundred Thousands',
      title: 'Gospel Proclamation',
      location: 'Global Outreach Field',
    },
    {
      id: 8,
      src: '/figma-assets/457a3354faefcf652c2110710588f40233c79c64.png',
      alt: 'Unprecedented Healing & Miracles Encounter',
      title: 'Supernatural Healing Day',
      location: 'Convention Center Arena',
    },
    {
      id: 9,
      src: '/figma-assets/1293a243cd5f4ddaa9c70378ddffe38c61e7ffb6.png',
      alt: 'Overflowing Joy in the Holy Presence',
      title: 'Festival of Life',
      location: 'City Arena Grounds',
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

  // Panoramic geometry calculations
  const isMobile = viewportWidth < 640
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024

  const cardGap = isMobile ? 12 : isTablet ? 18 : 24
  let cardWidth: number
  let cardHeight: number
  let sidePadding: number
  let availableWidth: number
  let maxTravel: number

  if (isMobile) {
    // 2 full cards in the center with peek on sides
    cardWidth = Math.round(viewportWidth * 0.52)
    cardHeight = Math.round(cardWidth * 1.25)
    sidePadding = Math.round((viewportWidth - (cardWidth + cardGap)) / 2)
    availableWidth = viewportWidth
    const step = cardWidth + cardGap
    maxTravel = Math.max(0, (crusadeImages.length - 1) * step)
  } else if (isTablet) {
    sidePadding = 24
    availableWidth = viewportWidth - 2 * sidePadding
    cardWidth = Math.round((availableWidth - 2 * cardGap) / 2.6)
    cardHeight = Math.min(Math.round(cardWidth * 1.15), 420)
    const step = cardWidth + cardGap
    maxTravel = Math.max(0, (crusadeImages.length - 2) * step)
  } else {
    sidePadding = 32
    availableWidth = Math.min(viewportWidth - 2 * sidePadding, 1400)
    cardWidth = Math.round((availableWidth - 3 * cardGap) / 3.4)
    cardHeight = Math.min(Math.round(cardWidth * 1.22), 480)
    const step = cardWidth + cardGap
    maxTravel = Math.max(0, (crusadeImages.length - 3) * step)
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
      targetScrollRef.current = Math.max(0, Math.min(maxTravel, startScrollRef.current - deltaX * 1.2))
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

  // Smooth LERP Loop
  useEffect(() => {
    let animationFrameId: number

    const lerpLoop = () => {
      const diff = targetScrollRef.current - currentScrollRef.current
      if (Math.abs(diff) > 0.05) {
        currentScrollRef.current += diff * 0.12
        setCurrentX(currentScrollRef.current)
        const currentActive = Math.min(
          crusadeImages.length - 1,
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
  }, [crusadeImages.length, step])

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden select-none">
      {/* Dark Navy Crusade Header Bar */}
      <div className="bg-[#122f4a] py-6 sm:py-8 text-white relative shadow-sm">
        <div className="w-full flex items-center justify-between">
          <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-r-full" />

          <h2 className="font-poppins font-semibold text-white text-base sm:text-2xl md:text-[28px] text-center px-4 sm:px-8 md:px-12 tracking-wide flex-shrink min-w-0">
            The Largest ankur narula ministries Crusades
          </h2>

          <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-l-full" />
        </div>
      </div>

      {/* Panoramic 3D Stage Viewport */}
      <div className="relative mt-8 sm:mt-12 w-full py-4">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={scrollPrev}
          disabled={currentX <= 5}
          className="absolute left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-[#122f4a] border border-slate-200 shadow-xl flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none hover:bg-[#efbf04] hover:text-[#0b0c1c] transition-all duration-300 active:scale-95"
          aria-label="Previous crusade image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={scrollNext}
          disabled={currentX >= maxTravel - 5}
          className="absolute right-2 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-[#122f4a] border border-slate-200 shadow-xl flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none hover:bg-[#efbf04] hover:text-[#0b0c1c] transition-all duration-300 active:scale-95"
          aria-label="Next crusade image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Panoramic 3D Strip Container */}
        <div
          ref={containerRef}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative mx-auto overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
          style={{
            width: `${availableWidth}px`,
            maxWidth: '100%',
            height: `${cardHeight + (isMobile ? 24 : 50)}px`,
            perspective: '1300px',
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
            {crusadeImages.map((item, idx) => {
              // Exact center of this card in screen coordinates
              const cardScreenCenter = sidePadding + idx * step + cardWidth / 2 - currentX

              // Continuous normalized ratio relative to screen center (-1.0 = left edge, 0.0 = center, +1.0 = right edge)
              const u = (cardScreenCenter - screenCenter) / (viewportWidth / 2)
              const uSq = Math.min(2.0, u * u) // Quadratic curve for parabolic arc

              // Continuous Tangent 3D Inward Rotation:
              const kAngle = isMobile ? 14 : 26
              const rotateY = -u * kAngle

              // Continuous Parabolic Arc Elevation (Y = -Ky * u^2):
              const kY = isMobile ? 8 : 20
              const translateY = -kY * uSq

              // Center scaling
              const scale = isMobile ? 0.94 + 0.1 * Math.min(1.0, uSq) : 0.86 + 0.18 * Math.min(1.0, uSq)

              // Depth adjustment following the panoramic arc
              const translateZ = uSq * (isMobile ? 6 : 24)

              return (
                <div
                  key={item.id}
                  onClick={() => scrollToIndex(idx)}
                  className="relative flex-shrink-0 will-change-transform cursor-pointer group"
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    marginRight: `${cardGap}px`,
                    transform: `translateY(${translateY}px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                    transformOrigin: 'center center',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Card Container with Rounded Borders & Shadow */}
                  <div className="relative w-full h-full rounded-[16px] sm:rounded-[22px] overflow-hidden shadow-xl border border-slate-200/60 bg-slate-900 transition-all duration-300 group-hover:shadow-2xl">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      draggable={false}
                      className="object-cover object-center pointer-events-none transition-transform duration-700 group-hover:scale-105"
                      priority={idx < 4}
                    />

                    {/* Gradient Overlay for visual depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Subtle angle shading for realistic amphitheater illumination */}
                    {Math.abs(u) > 0.25 && (
                      <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                        style={{
                          background:
                            u < 0
                              ? 'linear-gradient(to right, transparent 20%, rgba(0,0,0,0.35) 100%)'
                              : 'linear-gradient(to left, transparent 20%, rgba(0,0,0,0.35) 100%)',
                        }}
                      />
                    )}

                    {/* Bottom Caption Pill */}
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
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {crusadeImages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === i
                  ? 'w-6 sm:w-9 h-1.5 sm:h-2 bg-[#efbf04]'
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to crusade slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
