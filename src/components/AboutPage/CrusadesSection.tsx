'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

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
    title: 'Global Miracle Crusade',
    location: 'Main Stadium Grounds',
  },
  {
    id: 2,
    src: '/crusades/image_2.jpeg',
    alt: 'Atmosphere of Fire and Deliverance Night',
    title: 'Night of Deliverance',
    location: 'Mega Arena Assembly',
  },
  {
    id: 3,
    src: '/crusades/image_3.jpeg',
    alt: 'Supernatural Gathering & Holy Spirit Outpouring',
    title: 'Revival Fire Outreach',
    location: 'Grand Stadium',
  },
  {
    id: 4,
    src: '/crusades/image_4.jpeg',
    alt: 'Multitude of Souls Worshipping in Power',
    title: 'Signs & Wonders Convention',
    location: 'National Sports Complex',
  },
  {
    id: 5,
    src: '/crusades/image_5.jpeg',
    alt: 'Historic Ankur Narula Ministries Crusade',
    title: 'Historic Revival Gathering',
    location: 'International Stadium',
  },
  {
    id: 6,
    src: '/crusades/image_6.jpeg',
    alt: 'Praise and Worship Unbroken Multitude',
    title: 'Atmosphere of Praise',
    location: 'Revival Pavilion',
  },
  {
    id: 7,
    src: '/crusades/image_7.jpeg',
    alt: 'Apostle Dr. Ankur Yoseph Narula Preaching to Hundred Thousands',
    title: 'Gospel Proclamation',
    location: 'Global Outreach Field',
  },
  {
    id: 8,
    src: '/crusades/image_8.jpeg',
    alt: 'Unprecedented Healing & Miracles Encounter',
    title: 'Supernatural Healing Day',
    location: 'Convention Center Arena',
  },
  {
    id: 9,
    src: '/crusades/image_9.jpeg',
    alt: 'Overflowing Joy in the Holy Presence',
    title: 'Festival of Life',
    location: 'City Arena Grounds',
  },
  {
    id: 10,
    src: '/crusades/image_10.jpeg',
    alt: 'Overflowing Joy in the Holy Presence',
    title: 'Festival of Life',
    location: 'City Arena Grounds',
  },
  {
    id: 11,
    src: '/crusades/image_11.jpeg',
    alt: 'Overflowing Joy in the Holy Presence',
    title: 'Festival of Life',
    location: 'City Arena Grounds',
  },
]

export const CrusadesSection: React.FC<CrusadesSectionProps> = ({
  headerTitle = 'The Largest ankur narula ministries Crusades',
  crusadeImages,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [viewportWidth, setViewportWidth] = useState(1440)
  const [currentX, setCurrentX] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const activeCrusades = crusadeImages && crusadeImages.length > 0 ? crusadeImages : DEFAULT_CRUSADES

  // Target scroll position for buttery smooth LERP
  const targetScrollRef = useRef(0)
  const currentScrollRef = useRef(0)

  // Drag / Swipe tracking
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const startYRef = useRef(0)
  const startScrollRef = useRef(0)
  const isHorizontalSwipeRef = useRef<boolean | null>(null)

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

  const cardGap = isMobile ? 10 : isTablet ? 16 : 22
  let cardWidth: number
  let cardHeight: number
  let sidePadding: number
  let availableWidth: number
  let maxTravel: number

  if (isMobile) {
    cardWidth = Math.round(viewportWidth * 0.48)
    cardHeight = Math.round(cardWidth * 1.25)
    sidePadding = Math.round((viewportWidth - (cardWidth + cardGap)) / 2)
    availableWidth = viewportWidth
    const step = cardWidth + cardGap
    maxTravel = Math.max(0, (activeCrusades.length - 1) * step)
  } else if (isTablet) {
    sidePadding = 24
    availableWidth = viewportWidth - 2 * sidePadding
    cardWidth = Math.round((availableWidth - 2 * cardGap) / 2.6)
    cardHeight = Math.min(Math.round(cardWidth * 1.15), 420)
    const step = cardWidth + cardGap
    maxTravel = Math.max(0, (activeCrusades.length - 2) * step)
  } else {
    sidePadding = 32
    availableWidth = Math.min(viewportWidth - 2 * sidePadding, 1400)
    cardWidth = Math.round((availableWidth - 3 * cardGap) / 3.4)
    cardHeight = Math.min(Math.round(cardWidth * 1.22), 480)
    const step = cardWidth + cardGap
    maxTravel = Math.max(0, (activeCrusades.length - 3) * step)
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
          activeCrusades.length - 1,
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
  }, [activeCrusades.length, step])

  return (
    <section className="py-8 sm:py-14 md:py-20 bg-white overflow-hidden select-none" data-node-id="275:810">
      {/* Dark Navy Crusade Header Bar */}
      <RevealOnScroll direction="none" duration={0.6} className="bg-[#122f4a] py-5 sm:py-7 md:py-8 text-white relative shadow-sm">
        <div className="w-full flex items-center justify-between">
          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

          <h2 className="font-poppins font-medium text-white text-sm sm:text-2xl md:text-[28px] text-center px-3 sm:px-8 md:px-12 tracking-wide flex-shrink min-w-0">
            {headerTitle}
          </h2>

          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
        </div>
      </RevealOnScroll>

      {/* Panoramic 3D Stage Viewport */}
      <RevealOnScroll direction="up" distance={24} duration={0.8} delay={0.1} className="relative mt-6 sm:mt-10 md:mt-12 w-full py-2 sm:py-4">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={scrollPrev}
          disabled={currentX <= 5}
          className="absolute left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-[#122f4a] border border-slate-200 shadow-xl flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none hover:bg-[#efbf04] hover:text-[#0b0c1c] transition-all duration-300 active:scale-95 cursor-pointer"
          aria-label="Previous crusade image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={scrollNext}
          disabled={currentX >= maxTravel - 5}
          className="absolute right-2 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-[#122f4a] border border-slate-200 shadow-xl flex items-center justify-center disabled:opacity-0 disabled:pointer-events-none hover:bg-[#efbf04] hover:text-[#0b0c1c] transition-all duration-300 active:scale-95 cursor-pointer"
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
            height: `${cardHeight + (isMobile ? 18 : 46)}px`,
            perspective: '1300px',
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
            {activeCrusades.map((item, idx) => {
              const cardScreenCenter = sidePadding + idx * step + cardWidth / 2 - currentX
              const u = (cardScreenCenter - screenCenter) / (viewportWidth / 2)
              const uSq = Math.min(2.0, u * u)

              const kAngle = isMobile ? 12 : 24
              const rotateY = -u * kAngle

              const kY = isMobile ? 6 : 18
              const translateY = -kY * uSq

              const scale = isMobile ? 0.95 + 0.08 * Math.min(1.0, uSq) : 0.88 + 0.16 * Math.min(1.0, uSq)
              const translateZ = uSq * (isMobile ? 5 : 22)
              const resolvedSrc = getMediaUrl(item.image, item.imageFallback || item.src || '/figma-assets/c3f796c837b9ba4d7a0433d9285f5eb6000aef3e.png')

              return (
                <div
                  key={item.id || idx}
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
                  <div className="relative w-full h-full rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-xl border border-slate-200/60 bg-slate-900 transition-all duration-300 group-hover:shadow-2xl">
                    <Image
                      src={resolvedSrc}
                      alt={item.alt || item.title || 'Crusade'}
                      fill
                      draggable={false}
                      className="object-cover object-center pointer-events-none transition-transform duration-700 group-hover:scale-105"
                      priority={idx < 4}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

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