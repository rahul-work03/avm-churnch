'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Calendar, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { StaggerContainer, StaggerItem } from '@/components/ui/reveal'
import { PerspectiveFlipCard } from '@/components/ui/card-14'
import type { EventItem } from './PrimaryEventHeroSection'

interface MoreEventsSectionProps {
  headerTitle?: string | null
  events?: EventItem[] | null
  selectedIndex?: number
  onSelectEvent?: (index: number) => void
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

/**
 * Calculates the next upcoming occurrence for an event date.
 * If targetDate is future, uses it. Otherwise calculates next recurring weekly slot
 * based on scheduleDay / scheduleDate to ensure countdown always displays real upcoming time.
 */
function getNextUpcomingTarget(targetDateStr?: string | null, scheduleDay?: string | null): number {
  const now = new Date()

  if (targetDateStr) {
    const parsed = new Date(targetDateStr).getTime()
    if (!isNaN(parsed) && parsed > now.getTime()) {
      return parsed
    }
  }

  // Calculate next recurrence based on scheduleDay
  const dayLower = (scheduleDay || '').toLowerCase()
  let targetDayOfWeek = 4 // Default Thursday (0 = Sun, 4 = Thu)
  let targetHour = 18 // 6:00 PM
  let targetMinute = 0

  if (dayLower.includes('sun')) {
    targetDayOfWeek = 0
    targetHour = 8
    targetMinute = 30
  } else if (dayLower.includes('wed')) {
    targetDayOfWeek = 3
    targetHour = 10
    targetMinute = 0
  } else if (dayLower.includes('thu')) {
    targetDayOfWeek = 4
    targetHour = 18
    targetMinute = 0
  }

  const currentDay = now.getDay()
  let daysUntil = targetDayOfWeek - currentDay
  if (daysUntil < 0 || (daysUntil === 0 && now.getHours() >= targetHour)) {
    daysUntil += 7
  }
  if (daysUntil === 0 && now.getHours() < targetHour) {
    daysUntil = 0
  }

  const targetDate = new Date(now)
  targetDate.setDate(now.getDate() + daysUntil)
  targetDate.setHours(targetHour, targetMinute, 0, 0)

  return targetDate.getTime()
}

function useCountdown(targetDateStr?: string | null, scheduleDay?: string | null): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const target = getNextUpcomingTarget(targetDateStr, scheduleDay)
      const now = Date.now()
      const difference = target - now

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: false })
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false,
      })
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [targetDateStr, scheduleDay])

  return timeLeft
}

function EventCardItemComponent({
  event,
  index,
  isSelected,
  onSelect,
}: {
  event: EventItem
  index: number
  isSelected: boolean
  onSelect: (index: number) => void
}) {
  const posterSrc = getMediaUrl(
    event.cardPoster || event.landscapePoster || event.detailPoster,
    event.cardPosterFallback || event.landscapePosterFallback || event.detailPosterFallback || '/figma-assets/9c4cf0e2f9397f119d80dde4d156bbaa56343330.png'
  )
  const posterAlt = getMediaAlt(event.cardPoster, event.title)
  const countdown = useCountdown(event.eventTargetDate, event.scheduleDay)
  const btnText = event.buttonLabel || 'See Details'

  // Front Face Component for 3D Perspective Card (Full bleed poster)
  const frontFace = (
    <div
      onClick={() => onSelect(index)}
      className="relative size-full rounded-2xl overflow-hidden [transform-style:preserve-3d] select-none cursor-pointer"
    >
      {/* Full-bleed Background Poster Image */}
      <Image
        src={posterSrc}
        alt={posterAlt}
        fill
        sizes="(max-width: 768px) 100vw, 367px"
        className="object-cover object-top transition-transform duration-700 group-hover/p-card:scale-106"
      />
      {/* Smooth Dark Gradient Vignette for bottom text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent pointer-events-none" />

      {/* Floating 3D Content Overlay */}
      <div className="relative z-10 size-full flex flex-col justify-between p-4 [transform-style:preserve-3d]">
        {/* Top Floating Badge (Z: 60px) - Only shown when Currently Viewing */}
        <div className="flex justify-between items-start [transform-style:preserve-3d] [transform:translateZ(60px)]">
          {isSelected && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#efbf04] text-[#003471] font-poppins font-bold text-[11px] shadow-lg tracking-wider uppercase [transform:translateZ(20px)]">
              <Sparkles className="size-3" />
              <span>Currently Viewing</span>
            </div>
          )}
        </div>

        {/* Bottom Information (Z: 50px) */}
        <div className="[transform-style:preserve-3d] [transform:translateZ(50px)] space-y-1.5">
          {event.scheduleDate && (
            <p className="text-[#efbf04] text-xs font-semibold flex items-center gap-1.5 drop-shadow-sm [transform:translateZ(15px)]">
              <Calendar className="size-3.5" />
              <span>{event.scheduleDate}</span>
            </p>
          )}
          <h4 className="text-white font-poppins font-bold text-base sm:text-lg leading-snug line-clamp-2 drop-shadow-md [transform:translateZ(20px)]">
            {event.title}
          </h4>
        </div>
      </div>
    </div>
  )

  // Back Face
  const backFace = (
    <div
      onClick={() => onSelect(index)}
      className="size-full flex flex-col justify-between items-center text-center [transform-style:preserve-3d] cursor-pointer"
    >
      {/* Header Greeting (Z: 40px) */}
      <div className="[transform-style:preserve-3d] [transform:translateZ(40px)] w-full">
        <p className="text-[#efbf04] text-[11px] font-bold uppercase tracking-widest">
          {event.headingGreeting || 'HALLELUJAH!!'}
        </p>
        <h4 className="text-white font-poppins font-semibold text-sm sm:text-base tracking-tight mt-1 line-clamp-1">
          {event.title}
        </h4>
        <div className="w-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#efbf04] to-transparent mx-auto mt-1.5 opacity-80" />
      </div>

      {/* 4 Countdown Timer Tiles (Z: 70px) */}
      <div className="w-full [transform-style:preserve-3d] [transform:translateZ(70px)] my-1">
        <p className="text-slate-300 text-[10px] font-semibold uppercase tracking-wider mb-2">
          {countdown.isExpired ? 'Event Live / In Progress' : 'Live Event Countdown'}
        </p>
        <div className="grid grid-cols-4 gap-1.5 max-w-[300px] mx-auto [transform-style:preserve-3d]">
          {/* Days */}
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/10 border border-amber-400/30 backdrop-blur-md shadow-md [transform:translateZ(25px)] [transform-style:preserve-3d]">
            <span className="text-base sm:text-lg font-bold font-poppins text-[#efbf04] leading-none [transform:translateZ(12px)]">
              {String(countdown.days).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase font-semibold text-slate-300 mt-0.5">Days</span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/10 border border-amber-400/30 backdrop-blur-md shadow-md [transform:translateZ(25px)] [transform-style:preserve-3d]">
            <span className="text-base sm:text-lg font-bold font-poppins text-[#efbf04] leading-none [transform:translateZ(12px)]">
              {String(countdown.hours).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase font-semibold text-slate-300 mt-0.5">Hours</span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/10 border border-amber-400/30 backdrop-blur-md shadow-md [transform:translateZ(25px)] [transform-style:preserve-3d]">
            <span className="text-base sm:text-lg font-bold font-poppins text-[#efbf04] leading-none [transform:translateZ(12px)]">
              {String(countdown.minutes).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase font-semibold text-slate-300 mt-0.5">Mins</span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/10 border border-amber-400/30 backdrop-blur-md shadow-md [transform:translateZ(25px)] [transform-style:preserve-3d]">
            <span className="text-base sm:text-lg font-bold font-poppins text-[#efbf04] leading-none [transform:translateZ(12px)]">
              {String(countdown.seconds).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase font-semibold text-slate-300 mt-0.5">Secs</span>
          </div>
        </div>
      </div>

      {/* Highlights / Backface Summary Narrative (Z: 40px) */}
      <div className="space-y-1.5 [transform-style:preserve-3d] [transform:translateZ(40px)] px-1 max-w-[280px]">
        <p className="text-slate-200 text-xs leading-relaxed line-clamp-3 font-poppins">
          {event.cardBackfaceSummary || event.announcementParagraph1}
        </p>
      </div>

      {/* Schedule Meta Badges (Z: 50px) */}
      <div className="w-full space-y-1 text-[11px] text-slate-300 border-t border-white/10 pt-2.5 [transform-style:preserve-3d] [transform:translateZ(50px)]">
        {event.scheduleDate && (
          <div className="flex items-center justify-center gap-1 text-slate-200">
            <Calendar className="size-3 text-[#efbf04] flex-shrink-0" />
            <span className="font-medium truncate">{event.scheduleDay ? `${event.scheduleDay}, ` : ''}{event.scheduleDate}</span>
          </div>
        )}
        {event.scheduleTime && (
          <div className="flex items-center justify-center gap-1 text-slate-200">
            <Clock className="size-3 text-[#efbf04] flex-shrink-0" />
            <span className="font-medium">{event.scheduleTime}</span>
          </div>
        )}
        {event.scheduleVenue && (
          <div className="flex items-center justify-center gap-1 text-slate-300 line-clamp-1">
            <MapPin className="size-3 text-[#efbf04] flex-shrink-0" />
            <span className="truncate">{event.scheduleVenue}</span>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <StaggerItem className="flex flex-col justify-between w-full max-w-[367px] mx-auto">
      {/* 3D Perspective Flip Card Container */}
      <div className="w-full">
        <PerspectiveFlipCard
          front={frontFace}
          back={backFace}
          w="w-full"
          h="h-[480px] sm:h-[500px]"
          className={isSelected ? 'ring-4 ring-[#efbf04]/30 rounded-2xl' : ''}
        />
      </div>

      {/* "See Details" Action Button */}
      <div className="mt-4 text-center w-full flex justify-center">
        <button
          type="button"
          onClick={() => onSelect(index)}
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
          {eventsList.map((event, index) => (
            <EventCardItemComponent
              key={event.id || `${event.title}-${index}`}
              event={event}
              index={index}
              isSelected={selectedIndex === index}
              onSelect={handleEventClick}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
