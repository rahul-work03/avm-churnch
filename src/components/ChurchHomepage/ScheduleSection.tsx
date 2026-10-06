'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/reveal'
import { TextWordReveal, GoldBarReveal } from '@/components/ui/text-reveal'

import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'

export interface ServiceItem {
  title: string
  time: string
}

export interface ScheduleSectionProps {
  headerTitle?: string
  videoBannerUrl?: string
  weeklyServices?: ServiceItem[]
  dailyPrograms?: ServiceItem[]
  joinLiveLink?: string
  joinLiveLabel?: string
  className?: string
}

const DEFAULT_WEEKLY: ServiceItem[] = [
  { title: 'Sunday Morning Service', time: '10:30 AM – 2:30 PM (IST)' },
  { title: 'Sunday Evening Service', time: '6:00 PM – 10:00 PM (IST)' },
  { title: 'Thursday Service', time: '6:00 PM – 10:00 PM (IST)' },
]

const DEFAULT_DAILY: ServiceItem[] = [
  { title: 'Everyday Manna', time: '10:30 AM – 2:30 PM (IST)' },
  { title: 'Prayer Mountain', time: '8:00 PM (Daily)' },
]

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  headerTitle = 'Live Prayer & Worship Schedule',
  videoBannerUrl = '/homepage_schedule.mp4',
  weeklyServices,
  dailyPrograms,
  joinLiveLink = 'https://www.youtube.com/@ankurnarulaministries',
  joinLiveLabel = 'Join Live',
  className = '',
}) => {
  const activeWeekly = weeklyServices && weeklyServices.length > 0 ? weeklyServices : DEFAULT_WEEKLY
  const activeDaily = dailyPrograms && dailyPrograms.length > 0 ? dailyPrograms : DEFAULT_DAILY
  const effectiveJoinLiveLink =
    !joinLiveLink || joinLiveLink === '/live'
      ? 'https://www.youtube.com/@ankurnarulaministries'
      : joinLiveLink

  // Split weekly services: first two in left col, 3rd in right col (if 3 items)
  const leftWeekly = activeWeekly.slice(0, 2)
  const rightWeekly = activeWeekly.slice(2)

  return (
    <section className={`relative overflow-hidden select-none ${className}`} data-node-id="274:3">
      {/* ==================== ATMOSPHERIC SAPPHIRE HEADER ==================== */}
      <EditorialSectionHeader
        eyebrow="GLOBAL BROADCASTS & TIMES"
        title={headerTitle}
        variant="atmospheric"
      />

      <SacredCanvas tone="warm-alabaster" className="pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 md:pb-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Live Service Banner / Stage Preview */}
        <RevealOnScroll direction="up" distance={24} duration={0.8} className="max-w-[1140px] mx-auto">
          <div
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[1141/475] rounded-[20px] overflow-hidden shadow-2xl border-[4px] sm:border-[5px] border-[#d4af37] bg-slate-900 group"
            data-node-id="327:272"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src={videoBannerUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </RevealOnScroll>

        {/* Two Schedule Cards (Weekly Services & Daily Prayer Programs) */}
        <StaggerContainer
          staggerDelay={0.15}
          className="mt-6 sm:mt-8 md:mt-10 max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch"
        >
          {/* ==================== CARD 1: WEEKLY SERVICES ==================== */}
          <StaggerItem
            direction="up"
            distance={24}
            duration={0.6}
            className="group bg-gradient-to-br from-[#0e2740] via-[#122f4a] to-[#173d61] rounded-[22px] p-6 sm:p-8 text-white relative overflow-hidden shadow-[0_16px_40px_rgba(14,39,64,0.18)] hover:shadow-[0_24px_60px_rgba(18,47,74,0.32),0_0_25px_rgba(239,191,4,0.12)] border border-white/15 hover:border-[#efbf04]/50 ring-1 ring-white/10 ring-inset flex flex-col justify-between min-h-[250px] transition-all duration-300 hover:-translate-y-1.5"
            data-node-id="274:81"
          >
            {/* Top gold rim accent line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#efbf04]/70 to-transparent pointer-events-none" />

            {/* Soft gold ambient radial glow behind icon */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#efbf04]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Background vector */}
            <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
              <Image
                src="/figma-assets/13f61287f6bfa90b665e82c14641ea415f8c34e1.svg"
                alt=""
                fill
                className="object-cover object-left-top"
              />
            </div>

            {/* Sweeping specular hover light */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none rounded-[22px]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Header row with Calendar Icon & Yellow Dotted Line */}
              <div className="flex items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <div className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 shrink-0 transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
                    <Image
                      src="/calender-icon.png"
                      alt="Calendar"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 28px, 36px"
                    />
                  </div>
                  <h3 className="font-poppins font-bold text-[#efbf04] text-lg sm:text-xl md:text-[24px] leading-tight whitespace-nowrap tracking-wide drop-shadow-sm">
                    Weekly Services
                  </h3>
                </div>
                <div className="flex-1 h-2 sm:h-2.5 max-w-[140px] sm:max-w-[240px] border-t-2 sm:border-t-[3px] border-b-2 sm:border-b-[3px] border-dashed border-[#efbf04]/90 opacity-90 ml-2" />
              </div>

              {/* 2-Column Content Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-center flex-1">
                {/* Left Column */}
                <div className="flex flex-col justify-center">
                  {leftWeekly.map((item, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && <div className="w-full max-w-[263px] h-px bg-white/15 my-3" />}
                      <div className="transition-transform duration-200 hover:translate-x-1">
                        <h4 className="font-lato font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-snug flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#efbf04] shrink-0 shadow-[0_0_8px_#efbf04]" />
                          <span>{item.title}</span>
                        </h4>
                        <p className="font-poppins font-semibold text-white/80 text-[12px] sm:text-[13px] md:text-[14px] mt-1 pl-3.5 whitespace-nowrap">
                          {item.time}
                        </p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-center sm:pl-2">
                  {rightWeekly.map((item, idx) => (
                    <div key={idx} className="transition-transform duration-200 hover:translate-x-1">
                      <h4 className="font-lato font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-snug flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#efbf04] shrink-0 shadow-[0_0_8px_#efbf04]" />
                        <span>{item.title}</span>
                      </h4>
                      <p className="font-lato font-semibold text-white/80 text-[12px] sm:text-[13px] md:text-[14px] mt-1 pl-3.5 whitespace-nowrap">
                        {item.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* ==================== CARD 2: DAILY PRAYER PROGRAMS ==================== */}
          <StaggerItem
            direction="up"
            distance={24}
            duration={0.6}
            className="group bg-gradient-to-br from-[#0e2740] via-[#122f4a] to-[#173d61] rounded-[22px] p-6 sm:p-8 text-white relative overflow-hidden shadow-[0_16px_40px_rgba(14,39,64,0.18)] hover:shadow-[0_24px_60px_rgba(18,47,74,0.32),0_0_25px_rgba(239,191,4,0.12)] border border-white/15 hover:border-[#efbf04]/50 ring-1 ring-white/10 ring-inset flex flex-col justify-between min-h-[250px] transition-all duration-300 hover:-translate-y-1.5"
            data-node-id="274:141"
          >
            {/* Top gold rim accent line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#efbf04]/70 to-transparent pointer-events-none" />

            {/* Soft gold ambient radial glow behind icon */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#efbf04]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Background vector */}
            <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
              <Image
                src="/figma-assets/277acc8433e3273c56b4d00b7758461688cd2920.svg"
                alt=""
                fill
                className="object-cover object-left-top"
              />
            </div>

            {/* Sweeping specular hover light */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none rounded-[22px]" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Header row with Prayer Hands Icon & Yellow Dotted Line */}
              <div className="flex items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <div className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 shrink-0 transition-transform duration-300 group-hover:scale-110 drop-shadow-md">
                    <Image
                      src="/prayer-hands.png"
                      alt="Prayer Hands"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 28px, 36px"
                    />
                  </div>
                  <h3 className="font-poppins font-bold text-[#efbf04] text-lg sm:text-xl md:text-[24px] leading-tight whitespace-nowrap tracking-wide drop-shadow-sm">
                    Daily Prayer Programs
                  </h3>
                </div>
                <div className="flex-1 h-2 sm:h-2.5 max-w-[120px] sm:max-w-[200px] border-t-2 sm:border-t-[3px] border-b-2 sm:border-b-[3px] border-dashed border-[#efbf04]/90 opacity-90 ml-2" />
              </div>

              {/* 2-Column Upper Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {activeDaily.map((item, idx) => (
                  <div key={idx} className="transition-transform duration-200 hover:translate-x-1">
                    <h4 className="font-lato font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-snug flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#efbf04] shrink-0 shadow-[0_0_8px_#efbf04]" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="font-poppins font-semibold text-white/80 text-[12px] sm:text-[13px] md:text-[14px] mt-1 pl-3.5 whitespace-nowrap">
                      {item.time}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/15 my-4" />

              {/* Centered Join Live CTA Button */}
              <div className="flex justify-center items-center pt-1">
                <a
                  href={effectiveJoinLiveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[160px] sm:w-[175px] h-[40px] sm:h-[46px] bg-[#efbf04] hover:bg-[#ffcf1a] rounded-full flex items-center justify-center text-[#0f121e] font-poppins font-semibold text-sm sm:text-base md:text-[17px] shadow-[0_4px_16px_rgba(239,191,4,0.35)] hover:shadow-[0_6px_22px_rgba(239,191,4,0.5)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>{joinLiveLabel}</span>
                </a>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
        </div>
      </SacredCanvas>
    </section>
  )
}
