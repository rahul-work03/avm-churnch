'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/reveal'
import type { EventItem } from './PrimaryEventHeroSection'

interface MoreEventsSectionProps {
  headerTitle?: string | null
  events?: EventItem[] | null
  selectedIndex?: number
  onSelectEvent?: (index: number) => void
}

export const MoreEventsSection: React.FC<MoreEventsSectionProps> = ({
  headerTitle = 'MORE EVENTS',
  events,
  selectedIndex = 0,
  onSelectEvent,
}) => {
  const eventsList = events && events.length > 0 ? events : []

  const handleEventClick = (index: number) => {
    if (onSelectEvent) {
      onSelectEvent(index)
    }
    const heroElem = document.getElementById('primary-event-hero')
    if (heroElem) {
      heroElem.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="more-events-directory" className="relative py-8 sm:py-12 md:py-16 bg-white select-none">
      {/* Full-width Atmospheric Section Header with Edge-to-Edge Golden Wing Bars */}
      <div className="w-full text-center mb-8 sm:mb-12">
        <EditorialSectionHeader
          title={headerTitle || 'MORE EVENTS'}
          subtitle="Discover upcoming live services, spiritual meetings, and regional crusades."
          variant="atmospheric"
          align="center"
        />
      </div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch justify-center"
          staggerDelay={0.1}
        >
          {eventsList.map((event, index) => {
            const posterSrc = getMediaUrl(
              event.cardPoster || event.landscapePoster || event.detailPoster,
              event.cardPosterFallback || event.landscapePosterFallback || event.detailPosterFallback || '/figma-assets/9c4cf0e2f9397f119d80dde4d156bbaa56343330.png'
            )
            const posterAlt = getMediaAlt(event.cardPoster, event.title)
            const isSelected = selectedIndex === index
            const btnText = event.buttonLabel || 'See Details'

            return (
              <StaggerItem
                key={event.id || `${event.title}-${index}`}
                className="flex flex-col justify-between w-full max-w-[367px] mx-auto group"
              >
                {/* Event Poster Card Container */}
                <div
                  onClick={() => handleEventClick(index)}
                  className={`relative w-full aspect-[367/550] rounded-[20px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer bg-slate-950 ${
                    isSelected
                      ? 'border-2 sm:border-[3px] border-[#efbf04] ring-4 ring-[#efbf04]/20'
                      : 'border border-slate-200/90 hover:border-[#d4af37]/60'
                  }`}
                >
                  <Image
                    src={posterSrc}
                    alt={posterAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 367px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-104"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Active Featured Tag */}
                  {isSelected && (
                    <div className="absolute top-3.5 left-3.5 px-3.5 py-1 rounded-full bg-[#efbf04] text-[#003370] font-poppins font-bold text-xs shadow-md tracking-wider uppercase">
                      Currently Viewing
                    </div>
                  )}

                  {/* Bottom Title on Poster */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    {event.scheduleDate && (
                      <p className="text-xs font-semibold text-[#efbf04] tracking-wider uppercase mb-1">
                        {event.scheduleDate}
                      </p>
                    )}
                    <h4 className="font-poppins font-semibold text-base sm:text-lg leading-snug line-clamp-2">
                      {event.title}
                    </h4>
                  </div>
                </div>

                {/* "See Details" Action Button */}
                <div className="mt-4 text-center w-full flex justify-center">
                  <button
                    type="button"
                    onClick={() => handleEventClick(index)}
                    className={`inline-flex items-center justify-center font-poppins font-semibold text-xs sm:text-sm px-7 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer ${
                      isSelected
                        ? 'bg-[#003370] text-[#efbf04] border border-[#d4af37]/40'
                        : 'bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c]'
                    }`}
                  >
                    {isSelected ? 'Viewing Event' : btnText}
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
