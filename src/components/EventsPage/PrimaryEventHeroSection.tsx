'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'

export interface EventItem {
  id?: string
  title: string
  eventTargetDate?: string | null
  cardBackfaceSummary?: string | null
  landscapePoster?: any
  landscapePosterFallback?: string | null
  cardPoster?: any
  cardPosterFallback?: string | null
  buttonLabel?: string | null
  detailPoster?: any
  detailPosterFallback?: string | null
  headingGreeting?: string | null
  subheading?: string | null
  announcementParagraph1?: string | null
  announcementParagraph2?: string | null
  announcementParagraph3?: string | null
  announcementParagraph4?: string | null
  scheduleDay?: string | null
  scheduleDate?: string | null
  scheduleTime?: string | null
  scheduleVenue?: string | null
  schedulePostedBy?: string | null
  customLinkText?: string | null
  customLinkUrl?: string | null
}

interface PrimaryEventHeroSectionProps {
  sectionTitle?: string | null
  event?: EventItem | null
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

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

function calculateTimeLeft(targetDateStr?: string | null, scheduleDay?: string | null): TimeLeft {
  const target = getNextUpcomingTarget(targetDateStr, scheduleDay)
  const now = Date.now()
  const difference = target - now

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: false }
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / 1000 / 60) % 60)
  const seconds = Math.floor((difference / 1000) % 60)

  return { days, hours, minutes, seconds, isExpired: false }
}

export const PrimaryEventHeroSection: React.FC<PrimaryEventHeroSectionProps> = ({
  sectionTitle = 'UPCOMING PRIMARY EVENT',
  event,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(event?.eventTargetDate, event?.scheduleDay)
  )

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(event?.eventTargetDate, event?.scheduleDay))
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(event?.eventTargetDate, event?.scheduleDay))
    }, 1000)
    return () => clearInterval(timer)
  }, [event?.eventTargetDate, event?.scheduleDay])

  if (!event) return null

  const landscapeSrc = getMediaUrl(
    event.landscapePoster || event.cardPoster || event.detailPoster,
    event.landscapePosterFallback || event.cardPosterFallback || event.detailPosterFallback || '/figma-assets/85761e6b2486d02d0c483eb7871b0ab19ace8c46.png'
  )
  const landscapeAlt = getMediaAlt(event.landscapePoster || event.cardPoster, event.title)

  return (
    <section id="primary-event-hero" className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 bg-transparent select-none">
      <SacredCanvas tone="warm-alabaster" className="py-2">
        {/* Full-bleed Editorial Section Header */}
        <div className="w-full text-center pt-2 sm:pt-4 mb-4 sm:mb-6">
          <EditorialSectionHeader
            key={event.id || event.title}
            title={event.title}
            subtitle={event.subheading || 'Join us for a divine encounter of healing, deliverance, and powerful apostolic ministry.'}
            variant="editorial"
            align="center"
          />
        </div>

        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={event.id || event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Cinematic Wide Landscape Event Banner */}
              <div className="relative w-full aspect-[16/9] rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-2xl border border-slate-200/90 hover:border-[#d4af37]/40 transition-colors duration-500 bg-slate-950 group">
                <Image
                  src={landscapeSrc}
                  alt={landscapeAlt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-102"
                  priority
                  sizes="(max-width: 768px) 100vw, 1140px"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />
              </div>

              {/* Live Countdown Timer Bar */}
              {!timeLeft.isExpired && (
                <div className="mt-8 sm:mt-10 md:mt-12">
                  <div className="text-center mb-3 sm:mb-4">
                    <span className="font-poppins font-semibold text-xs sm:text-sm tracking-widest uppercase text-[#003471]">
                      EVENT COUNTDOWN
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 max-w-2xl mx-auto">
                    {[
                      { label: 'DAYS', value: timeLeft.days },
                      { label: 'HOURS', value: timeLeft.hours },
                      { label: 'MINUTES', value: timeLeft.minutes },
                      { label: 'SECONDS', value: timeLeft.seconds },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-[16px] sm:rounded-[22px] bg-gradient-to-br from-[#0a192f] via-[#122f4a] to-[#0a192f] text-white border border-[#d4af37]/35 shadow-xl relative overflow-hidden"
                      >
                        <span className="font-serif font-bold text-2xl sm:text-4xl md:text-5xl text-[#efbf04] tracking-tight leading-none">
                          {String(item.value).padStart(2, '0')}
                        </span>
                        <span className="text-[9px] sm:text-[11px] md:text-xs font-semibold tracking-wider text-slate-300 uppercase mt-1.5 sm:mt-2">
                          {item.label}
                        </span>
                        {/* Internal gold shine */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#efbf04] to-transparent" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Announcement Narrative & Schedule Details */}
              <div className="mt-10 sm:mt-14 max-w-4xl mx-auto text-center px-2 sm:px-6 space-y-4 sm:space-y-6 font-poppins text-[#0e0d1b]">
                {event.headingGreeting && (
                  <div className="inline-block px-5 py-1.5 rounded-full bg-[#efbf04]/20 border border-[#efbf04]/50 text-[#003471] font-bold text-sm sm:text-base tracking-widest uppercase mb-1">
                    {event.headingGreeting}
                  </div>
                )}

                {event.subheading && (
                  <h3 className="font-semibold text-lg sm:text-2xl md:text-[26px] text-[#003471] leading-snug">
                    {event.subheading}
                  </h3>
                )}

                {event.announcementParagraph1 && (
                  <p className="text-sm sm:text-base md:text-[18px] leading-relaxed text-slate-700">
                    {event.announcementParagraph1}
                  </p>
                )}

                {event.announcementParagraph2 && (
                  <p className="text-sm sm:text-base md:text-[18px] leading-relaxed text-slate-700">
                    {event.announcementParagraph2}
                  </p>
                )}

                {event.announcementParagraph3 && (
                  <p className="text-sm sm:text-base md:text-[18px] leading-relaxed text-slate-700">
                    {event.announcementParagraph3}
                  </p>
                )}

                {event.announcementParagraph4 && (
                  <p className="text-sm sm:text-base md:text-[18px] leading-relaxed text-slate-700">
                    {event.announcementParagraph4}
                  </p>
                )}

                {/* Structured Schedule Card */}
                <div className="mt-8 pt-6 pb-6 px-6 sm:px-10 rounded-[22px] bg-gradient-to-b from-[#f8f9fa] to-[#f1f4f8] border border-slate-200/90 shadow-sm max-w-3xl mx-auto space-y-3 sm:space-y-4 text-xs sm:text-base md:text-[17px] leading-relaxed">
                  {event.scheduleDay && (
                    <p className="text-slate-800">
                      <strong className="font-semibold text-[#003471]">Day:</strong> {event.scheduleDay}
                    </p>
                  )}
                  {event.scheduleDate && (
                    <p className="text-slate-800">
                      <strong className="font-semibold text-[#003471]">Date:</strong> {event.scheduleDate}
                    </p>
                  )}
                  {event.scheduleTime && (
                    <p className="text-slate-800">
                      <strong className="font-semibold text-[#003471]">Time:</strong> {event.scheduleTime}
                    </p>
                  )}
                  {event.scheduleVenue && (
                    <p className="text-slate-800 max-w-2xl mx-auto">
                      <strong className="font-semibold text-[#003471]">Venue:</strong> {event.scheduleVenue}
                    </p>
                  )}
                  {event.schedulePostedBy && (
                    <p className="pt-2 text-slate-500 font-medium text-xs sm:text-sm">{event.schedulePostedBy}</p>
                  )}

                  {/* Optional Custom Action Link */}
                  {event.customLinkUrl && event.customLinkText && (
                    <div className="pt-3">
                      <Link
                        href={event.customLinkUrl}
                        target={event.customLinkUrl.startsWith('http') ? '_blank' : undefined}
                        rel={event.customLinkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center justify-center bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-poppins font-semibold text-xs sm:text-[14px] px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        {event.customLinkText}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </SacredCanvas>
    </section>
  )
}
