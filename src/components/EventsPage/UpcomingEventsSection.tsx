'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { RevealOnScroll } from '@/components/ui/reveal'
import type { EventItem } from './RecentEventsSection'

interface UpcomingEventsSectionProps {
  upcomingHeaderTitle?: string | null
  event?: EventItem | null
}

const DEFAULT_EVENT_DETAIL: EventItem = {
  title: 'Good News in Pathankot - 11 June 2026',
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

export const UpcomingEventsSection: React.FC<UpcomingEventsSectionProps> = ({
  upcomingHeaderTitle = 'Upcoming Events',
  event,
}) => {
  const currentEvent = event || DEFAULT_EVENT_DETAIL
  const posterSrc = getMediaUrl(
    currentEvent.detailPoster || currentEvent.cardPoster,
    currentEvent.detailPosterFallback || currentEvent.cardPosterFallback || '/figma-assets/85761e6b2486d02d0c483eb7871b0ab19ace8c46.png'
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
            {/* Large Featured Poster Card */}
            <div className="max-w-[380px] sm:max-w-[460px] md:max-w-[513px] mx-auto">
              <div className="relative w-full aspect-[513/647] rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-2xl border border-amber-200/50 bg-slate-900 group">
                <Image
                  src={posterSrc}
                  alt={currentEvent.title || 'Upcoming Event'}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 500px, 513px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
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


