'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { RevealOnScroll } from '@/components/ui/reveal'
import { PerspectiveFlipCard } from '@/components/ui/card-14'
import type { EventItem } from './RecentEventsSection'

interface UpcomingEventsSectionProps {
  upcomingHeaderTitle?: string | null
  event?: EventItem | null
}

const DEFAULT_EVENT_DETAIL: EventItem = {
  title: 'Good News in Pathankot - 11 June 2026',
  eventTargetDate: '2026-06-11T18:00:00',
  cardBackfaceSummary:
    'Join Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula in Pathankot for a supernatural gathering filled with salvation, healing, and the mighty power of Christ.',
  detailPosterFallback: '/figma-assets/85761e6b2486d02d0c483eb7871b0ab19ace8c46.png',
  headingGreeting: 'HALLELUJAH!!',
  subheading: 'Grand Mega Crusade 2026',
  announcementParagraph1:
    'We are delighted to share this blessed Good News that the anointed Man of God, Apostle Dr. Ankur Yoseph Narula, and Woman of God, Pastor Sonia Yoseph Narula will be coming to Pathankot on 11 June 2026 with the life-changing Gospel of Lord Jesus Christ.',
  announcementParagraph2:
    'These powerful and grace-filled gatherings will be filled with the mighty presence of the Living God. As the Word of God is preached under the anointing of the Holy Spirit, many lives will experience divine healing, restoration, deliverance, peace, and freedom in Christ. Every chain of darkness shall be broken, hearts will be renewed, and many testimonies will arise through the power of Jesus Christ.',
  announcementParagraph3:
    'This is not just a meeting, but a divine encounter with the Lord. You and your family are warmly invited to come with faith and expectation to witness the miraculous move and overflowing glory of God in Pathankot.✨',
  announcementParagraph4:
    'Don’t miss this opportunity—bring your family, friends, relatives, and loved ones. Because when Jesus enters your life, everything changes for the better.',
  scheduleDay: 'Thursday',
  scheduleDate: '11 June, 2026',
  scheduleTime: '6:00 PM to 10:00 PM',
  scheduleVenue:
    'Growth Center, Village Chacheli, Industrial Area, Near Pepsi Plant (Sujanpur), District Pathankot',
  schedulePostedBy: 'By:- Church Media Team',
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

function useCountdown(targetDateString?: string): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  })

  useEffect(() => {
    if (!targetDateString) {
      // Fallback target: 30 days from now if not specified
      const fallbackTarget = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).getTime()
      const updateFallback = () => {
        const diff = fallbackTarget - Date.now()
        if (diff <= 0) {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true })
          return
        }
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          isExpired: false,
        })
      }
      updateFallback()
      const interval = setInterval(updateFallback, 1000)
      return () => clearInterval(interval)
    }

    const targetTime = new Date(targetDateString).getTime()

    const calculateTime = () => {
      const difference = targetTime - Date.now()
      if (isNaN(difference) || difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true })
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

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [targetDateString])

  return timeLeft
}

export const UpcomingEventsSection: React.FC<UpcomingEventsSectionProps> = ({
  upcomingHeaderTitle = 'Upcoming Events',
  event,
}) => {
  const currentEvent = event || DEFAULT_EVENT_DETAIL
  const posterSrc = getMediaUrl(
    currentEvent.detailPoster || currentEvent.cardPoster,
    currentEvent.detailPosterFallback || currentEvent.cardPosterFallback || '/figma-assets/85761e6b2486d02d0c483eb7871b0ab19ace8c46.png'
  )

  const countdown = useCountdown(currentEvent.eventTargetDate)

  // Front Face Component for 3D Perspective Card (Full bleed poster)
  const eventCardFront = (
    <div className="relative size-full rounded-2xl overflow-hidden [transform-style:preserve-3d] select-none">
      {/* Full-bleed Background Poster Image */}
      <Image
        src={posterSrc}
        alt={currentEvent.title || 'Upcoming Event'}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 513px"
        className="object-cover object-top transition-transform duration-700 group-hover/p-card:scale-105"
        priority
      />
      {/* Smooth Dark Gradient Vignette for bottom text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent pointer-events-none" />

      {/* Floating 3D Content Overlay */}
      <div className="relative z-10 size-full flex flex-col justify-between p-4 sm:p-6 [transform-style:preserve-3d]">
        {/* Top spacer for 3D overlay */}
        <div className="flex justify-between items-start [transform-style:preserve-3d] [transform:translateZ(60px)]" />

        {/* Bottom Information (Z: 50px) */}
        <div className="[transform-style:preserve-3d] [transform:translateZ(50px)] space-y-1.5 sm:space-y-2">
          {currentEvent.scheduleDate && (
            <p className="text-[#efbf04] text-xs sm:text-sm font-semibold flex items-center gap-1.5 drop-shadow-sm [transform:translateZ(15px)]">
              <Calendar className="size-3.5" />
              <span>{currentEvent.scheduleDate} {currentEvent.scheduleTime ? `• ${currentEvent.scheduleTime}` : ''}</span>
            </p>
          )}
          <h3 className="text-white font-poppins font-bold text-lg sm:text-xl md:text-2xl leading-snug line-clamp-2 drop-shadow-md [transform:translateZ(20px)]">
            {currentEvent.title}
          </h3>
        </div>
      </div>
    </div>
  )

  // Back Face Component for 3D Perspective Card (Countdown + Highlights)
  const eventCardBack = (
    <div className="size-full flex flex-col justify-between items-center text-center [transform-style:preserve-3d]">
      {/* Backface Header Greeting (Z: 40px) */}
      <div className="[transform-style:preserve-3d] [transform:translateZ(40px)] w-full">
        <p className="text-[#efbf04] text-xs font-bold uppercase tracking-widest">
          {currentEvent.headingGreeting || 'HALLELUJAH!!'}
        </p>
        <h4 className="text-white font-poppins font-bold text-base sm:text-lg tracking-tight mt-1 line-clamp-1">
          {currentEvent.title}
        </h4>
        <div className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-[#efbf04] to-transparent mx-auto mt-2 opacity-80" />
      </div>

      {/* 4 Countdown Timer Tiles (Z: 70px) */}
      <div className="w-full [transform-style:preserve-3d] [transform:translateZ(70px)] my-2">
        <p className="text-slate-300 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider mb-2.5">
          {countdown.isExpired ? 'Event In Progress / Concluded' : 'Live Event Countdown'}
        </p>
        <div className="grid grid-cols-4 gap-2 sm:gap-2.5 max-w-[340px] mx-auto [transform-style:preserve-3d]">
          {/* Days */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/10 border border-amber-400/30 backdrop-blur-md shadow-xl [transform:translateZ(25px)] [transform-style:preserve-3d]">
            <span className="text-lg sm:text-2xl font-bold font-poppins text-[#efbf04] leading-none [transform:translateZ(15px)]">
              {String(countdown.days).padStart(2, '0')}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-300 mt-1">Days</span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/10 border border-amber-400/30 backdrop-blur-md shadow-xl [transform:translateZ(25px)] [transform-style:preserve-3d]">
            <span className="text-lg sm:text-2xl font-bold font-poppins text-[#efbf04] leading-none [transform:translateZ(15px)]">
              {String(countdown.hours).padStart(2, '0')}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-300 mt-1">Hours</span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/10 border border-amber-400/30 backdrop-blur-md shadow-xl [transform:translateZ(25px)] [transform-style:preserve-3d]">
            <span className="text-lg sm:text-2xl font-bold font-poppins text-[#efbf04] leading-none [transform:translateZ(15px)]">
              {String(countdown.minutes).padStart(2, '0')}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-300 mt-1">Mins</span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/10 border border-amber-400/30 backdrop-blur-md shadow-xl [transform:translateZ(25px)] [transform-style:preserve-3d]">
            <span className="text-lg sm:text-2xl font-bold font-poppins text-[#efbf04] leading-none [transform:translateZ(15px)]">
              {String(countdown.seconds).padStart(2, '0')}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-300 mt-1">Secs</span>
          </div>
        </div>
      </div>

      {/* CMS Highlights / Backface Summary Narrative (Z: 40px) */}
      <div className="space-y-2 [transform-style:preserve-3d] [transform:translateZ(40px)] px-2 max-w-[320px]">
        <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed line-clamp-3 font-poppins">
          {currentEvent.cardBackfaceSummary || currentEvent.announcementParagraph1}
        </p>
      </div>

      {/* Schedule Meta Badges (Z: 50px) */}
      <div className="w-full space-y-1.5 text-[11px] sm:text-xs text-slate-300 border-t border-white/10 pt-3 [transform-style:preserve-3d] [transform:translateZ(50px)]">
        {currentEvent.scheduleDay && currentEvent.scheduleDate && (
          <div className="flex items-center justify-center gap-1.5 text-slate-200">
            <Calendar className="size-3.5 text-[#efbf04] flex-shrink-0" />
            <span className="font-medium">{currentEvent.scheduleDay}, {currentEvent.scheduleDate}</span>
          </div>
        )}
        {currentEvent.scheduleTime && (
          <div className="flex items-center justify-center gap-1.5 text-slate-200">
            <Clock className="size-3.5 text-[#efbf04] flex-shrink-0" />
            <span className="font-medium">{currentEvent.scheduleTime}</span>
          </div>
        )}
        {currentEvent.scheduleVenue && (
          <div className="flex items-center justify-center gap-1.5 text-slate-300 line-clamp-1">
            <MapPin className="size-3.5 text-[#efbf04] flex-shrink-0" />
            <span className="truncate">{currentEvent.scheduleVenue}</span>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <section id="upcoming-events-detail" className="relative py-12 md:py-20 bg-transparent scroll-mt-20" data-node-id="224:412">
      {/* Section Header with Left & Right Gold Accent Bars and Emblems */}
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

            <h2 className="font-poppins font-semibold text-[#003471] text-2xl sm:text-3xl md:text-[34px] tracking-tight text-center">
              {upcomingHeaderTitle || 'Upcoming Events'}
            </h2>

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

      {/* Featured Upcoming Event Showcase */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 md:mt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEvent.id || currentEvent.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* 3D Perspective Flip Poster Card with Live Countdown Backface */}
            <div className="flex justify-center w-full">
              <PerspectiveFlipCard
                front={eventCardFront}
                back={eventCardBack}
                w="w-full max-w-[360px] sm:max-w-[440px] md:max-w-[480px]"
                h="h-[520px] sm:h-[580px] md:h-[610px]"
                className="mx-auto"
              />
            </div>

            {/* Detailed Announcement & Schedule Narrative */}
            <div className="mt-8 sm:mt-12 md:mt-14 max-w-4xl mx-auto text-center px-2 sm:px-6 space-y-4 sm:space-y-6 font-poppins text-[#0e0d1b]">
              {currentEvent.headingGreeting && (
                <p className="font-bold text-base sm:text-lg md:text-xl tracking-wide uppercase text-[#003471]">
                  {currentEvent.headingGreeting}
                </p>
              )}

              {currentEvent.subheading && (
                <p className="font-semibold text-sm sm:text-base md:text-lg text-[#d5582a]">
                  {currentEvent.subheading}
                </p>
              )}

              {currentEvent.announcementParagraph1 && (
                <p className="text-xs sm:text-base md:text-[18px] leading-relaxed">
                  {currentEvent.announcementParagraph1}
                </p>
              )}

              {currentEvent.announcementParagraph2 && (
                <p className="text-xs sm:text-base md:text-[18px] leading-relaxed">
                  {currentEvent.announcementParagraph2}
                </p>
              )}

              {currentEvent.announcementParagraph3 && (
                <p className="text-xs sm:text-base md:text-[18px] leading-relaxed">
                  {currentEvent.announcementParagraph3}
                </p>
              )}

              {currentEvent.announcementParagraph4 && (
                <p className="text-xs sm:text-base md:text-[18px] leading-relaxed">
                  {currentEvent.announcementParagraph4}
                </p>
              )}

              {/* Schedule Breakdown Box */}
              <div className="pt-4 sm:pt-6 space-y-1.5 sm:space-y-2.5 text-xs sm:text-base md:text-[17px] leading-relaxed font-medium">
                {currentEvent.headingGreeting && (
                  <p className="font-bold text-sm sm:text-base md:text-lg uppercase text-[#003471] mb-2">
                    {currentEvent.headingGreeting}
                  </p>
                )}
                {currentEvent.scheduleDay && (
                  <p>
                    <span className="font-semibold text-slate-900">Day:</span> {currentEvent.scheduleDay}
                  </p>
                )}
                {currentEvent.scheduleDate && (
                  <p>
                    <span className="font-semibold text-slate-900">Date:</span> {currentEvent.scheduleDate}
                  </p>
                )}
                {currentEvent.scheduleTime && (
                  <p>
                    <span className="font-semibold text-slate-900">Time:</span> {currentEvent.scheduleTime}
                  </p>
                )}
                {currentEvent.scheduleVenue && (
                  <p className="max-w-2xl mx-auto">
                    <span className="font-semibold text-slate-900">Venue:</span> {currentEvent.scheduleVenue}
                  </p>
                )}
                {currentEvent.schedulePostedBy && (
                  <p className="pt-2 text-slate-700 font-semibold">{currentEvent.schedulePostedBy}</p>
                )}

                {/* Optional Custom Link */}
                {currentEvent.customLinkUrl && currentEvent.customLinkText && (
                  <div className="pt-4">
                    <Link
                      href={currentEvent.customLinkUrl}
                      target={currentEvent.customLinkUrl.startsWith('http') ? '_blank' : undefined}
                      rel={currentEvent.customLinkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center justify-center bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-poppins font-semibold text-xs sm:text-[14px] px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      {currentEvent.customLinkText}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
