'use client'

import React from 'react'
import Image from 'next/image'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/reveal'

export interface EventItem {
  id?: string
  title: string
  cardPoster?: any
  cardPosterFallback?: string
  buttonLabel?: string
  detailPoster?: any
  detailPosterFallback?: string
  headingGreeting?: string
  subheading?: string
  announcementParagraph1?: string
  announcementParagraph2?: string
  announcementParagraph3?: string
  announcementParagraph4?: string
  scheduleDay?: string
  scheduleDate?: string
  scheduleTime?: string
  scheduleVenue?: string
  schedulePostedBy?: string
  customLinkText?: string
  customLinkUrl?: string
}

interface RecentEventsSectionProps {
  headerTitle?: string | null
  events?: EventItem[] | null
  selectedIndex?: number
  onSelectEvent?: (index: number) => void
}

const DEFAULT_EVENT_FALLBACKS: EventItem[] = [
  {
    title: 'Masihi Satsang - Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Narula',
    cardPosterFallback: '/figma-assets/9c4cf0e2f9397f119d80dde4d156bbaa56343330.png',
    buttonLabel: 'See Details',
  },
  {
    title: 'Good News in Pathankot - 11 June 2026',
    cardPosterFallback: '/figma-assets/85761e6b2486d02d0c483eb7871b0ab19ace8c46.png',
    buttonLabel: 'See Details',
  },
  {
    title: 'Sunday Live Service - Ankur Narula Ministries',
    cardPosterFallback: '/figma-assets/b3a0bba89e5f05b1a24ecbaec47a6c1170b270dc.png',
    buttonLabel: 'See Details',
  },
]

export const RecentEventsSection: React.FC<RecentEventsSectionProps> = ({
  headerTitle = 'Events',
  events,
  selectedIndex = 0,
  onSelectEvent,
}) => {
  const eventsList = events && events.length > 0 ? events : DEFAULT_EVENT_FALLBACKS

  const handleEventClick = (index: number) => {
    if (onSelectEvent) {
      onSelectEvent(index)
    }
    const element = document.getElementById('upcoming-events-detail')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative pt-28 pb-8 sm:pt-32 md:pt-36 md:pb-12 bg-transparent" data-node-id="224:412">
      {/* Header with Flanking Gold Accent Bars and Emblems */}
      <RevealOnScroll direction="up" delay={0.1}>
        <div className="w-full flex items-center justify-between py-2 sm:py-4">
          {/* Left Decorative Gold Bar */}
          <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm pointer-events-none" />

          {/* Title with Flanking Golden Holy Cross Emblems */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 px-3 sm:px-6 flex-shrink min-w-0">
            <div
              className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 flex-shrink-0 bg-[#efbf04]"
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

            <h1 className="font-poppins font-semibold text-[#003471] text-2xl sm:text-3xl md:text-[34px] tracking-tight text-center">
              {headerTitle || 'Events'}
            </h1>

            <div
              className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
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

          {/* Right Decorative Gold Bar */}
          <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm pointer-events-none" />
        </div>
      </RevealOnScroll>

      {/* 3 Event Cards Showcase */}
      <div className="max-w-[1140px] mx-auto px-3 sm:px-6 lg:px-8 mt-6 sm:mt-10 md:mt-12">
        <StaggerContainer
          className="grid grid-cols-3 gap-2.5 sm:gap-6 md:gap-8 items-start justify-center"
          staggerDelay={0.12}
        >
          {eventsList.map((event, index) => {
            const posterSrc = getMediaUrl(
              event.cardPoster || event.detailPoster,
              event.cardPosterFallback || event.detailPosterFallback || '/figma-assets/9c4cf0e2f9397f119d80dde4d156bbaa56343330.png'
            )
            const isSelected = selectedIndex === index
            const btnText = event.buttonLabel || 'See Details'

            return (
              <StaggerItem key={event.id || `${event.title}-${index}`} className="flex flex-col items-center group w-full">
                {/* Event Poster Card */}
                <button
                  type="button"
                  onClick={() => handleEventClick(index)}
                  className={`relative w-full aspect-[367/647] rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-lg sm:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer text-left block focus:outline-none ${
                    isSelected
                      ? 'border-2 sm:border-[3px] border-[#efbf04] ring-2 ring-[#efbf04]/30'
                      : 'border border-amber-200/40 hover:border-[#efbf04]/60'
                  }`}
                  aria-label={`View details for ${event.title}`}
                >
                  <Image
                    src={posterSrc}
                    alt={event.title}
                    fill
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 30vw, 360px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index === 0}
                  />
                </button>

                {/* "See Details" Action Button */}
                <div className="mt-3 sm:mt-4 md:mt-5 text-center w-full flex justify-center">
                  <button
                    type="button"
                    onClick={() => handleEventClick(index)}
                    className="inline-flex items-center justify-center bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-poppins font-semibold text-[11px] sm:text-xs md:text-[14px] px-3 sm:px-5 md:px-7 h-[30px] sm:h-[36px] md:h-[40px] rounded-full shadow-md hover:shadow-lg transition-all duration-150 transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
                  >
                    {btnText}
                  </button>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}

