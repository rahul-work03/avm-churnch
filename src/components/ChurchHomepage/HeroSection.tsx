'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Volume2, VolumeX, ChevronDown } from 'lucide-react'
import { TextWordReveal } from '@/components/ui/text-reveal'
import { RevealOnScroll } from '@/components/ui/reveal'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'

export interface HeroSectionProps {
  headline1?: string
  headline2?: string
  description?: string
  videoDesktop?: any
  videoDesktopFallback?: string
  videoMobile?: any
  videoMobileFallback?: string
  bannerImage?: any
  bannerImageFallback?: string
  bannerAlt?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  headline1 = 'Welcome to Ankur Narula Ministries',
  headline2 = 'The Church Of Signs and Wonders',
  description = 'Experience the power of Jesus Christ through signs, wonders, and faith. We believe in the living Word of God and in His mighty works among those who believe.',
  videoDesktop,
  videoDesktopFallback = '/homepage_hero.mp4',
  videoMobile,
  videoMobileFallback = '/homepage_hero_mobile.mp4',
  bannerImage,
  bannerImageFallback = '',
  bannerAlt = 'Ankur Narula Ministries',
}) => {
  const [isMuted, setIsMuted] = useState(true)
  const desktopVideoRef = useRef<HTMLVideoElement>(null)
  const mobileVideoRef = useRef<HTMLVideoElement>(null)

  const resolvedDesktopVideo = getMediaUrl(videoDesktop, videoDesktopFallback)
  const resolvedMobileVideo = getMediaUrl(videoMobile, videoMobileFallback)
  const resolvedImageUrl = getMediaUrl(bannerImage, bannerImageFallback)
  const resolvedImageAlt = getMediaAlt(bannerImage, bannerAlt)

  const hasVideo = Boolean(resolvedDesktopVideo || resolvedMobileVideo)

  const toggleMute = () => {
    const nextMuted = !isMuted
    setIsMuted(nextMuted)
    if (desktopVideoRef.current) desktopVideoRef.current.muted = nextMuted
    if (mobileVideoRef.current) mobileVideoRef.current.muted = nextMuted
  }

  useEffect(() => {
    if (!hasVideo) return
    const playSafe = async (video: HTMLVideoElement | null) => {
      if (!video) return
      try {
        video.muted = isMuted
        await video.play()
      } catch {
        // Safe catch for autoplay restrictions
      }
    }

    playSafe(desktopVideoRef.current)
    playSafe(mobileVideoRef.current)
  }, [hasVideo, isMuted])

  return (
    <section className="relative w-full h-screen min-h-[100dvh] flex flex-col justify-end items-center overflow-hidden bg-[#071322] text-white select-none" data-node-id="274:3">
      {/* ================= BACKGROUND FULL-SCREEN MEDIA (ANCHORED TO TOP TO PREVENT CROPPING) ================= */}
      {hasVideo ? (
        <>
          {/* Desktop Video (> sm screen) */}
          {resolvedDesktopVideo && (
            <video
              ref={desktopVideoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              className="hidden sm:block absolute inset-0 w-full h-full object-cover object-top z-0"
            >
              <source src={resolvedDesktopVideo} type="video/mp4" />
            </video>
          )}

          {/* Mobile Video (< sm screen) */}
          {resolvedMobileVideo && (
            <video
              ref={mobileVideoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              className="block sm:hidden absolute inset-0 w-full h-full object-cover object-top z-0"
            >
              <source src={resolvedMobileVideo} type="video/mp4" />
            </video>
          )}
        </>
      ) : resolvedImageUrl ? (
        <Image
          src={resolvedImageUrl}
          alt={resolvedImageAlt}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
        />
      ) : null}

      {/* ================= CLEAN CRISP OVERLAY WITH BOTTOM SHADOW FOR TEXT READABILITY ================= */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/50 pointer-events-none z-10" />

      {/* ================= HERO CONTENT OVERLAY (PUSHED FIRMLY TO BOTTOM) ================= */}
      <div className="relative z-20 w-full flex flex-col justify-end items-center px-4 sm:px-6 md:px-10 pb-10 sm:pb-12 md:pb-14 max-w-5xl mx-auto">
        {/* Main Title & Subtitle */}
        <div className="text-center w-full flex-shrink min-w-0">
          <TextWordReveal
            as="h1"
            delay={0.05}
            staggerDelay={0.04}
            className="font-philosopher font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] leading-tight tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
          >
            {headline1}
          </TextWordReveal>
          <TextWordReveal
            as="span"
            delay={0.25}
            staggerDelay={0.04}
            className="text-[#efbf04] block mt-1 sm:mt-1.5 font-philosopher font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] leading-tight tracking-tight drop-shadow-[0_2px_12px_rgba(239,191,4,0.45)]"
          >
            {headline2}
          </TextWordReveal>

          {/* Subtitle Description */}
          <RevealOnScroll direction="up" delay={0.35} duration={0.6}>
            <p className="font-poppins text-slate-100 text-[13px] sm:text-base md:text-[18px] leading-relaxed max-w-3xl mx-auto mt-2 sm:mt-3 md:mt-3.5 text-balance px-1 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] font-light sm:font-normal">
              {description}
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* ================= CENTER SCROLL DOWN ANIMATOR ================= */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-3 z-20 pointer-events-none flex items-center justify-center">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/25 flex items-center justify-center shadow-lg animate-bounce">
          <ChevronDown className="w-4 h-4 text-[#efbf04]" />
        </div>
      </div>

      {/* ================= BOTTOM RIGHT AUDIO TOGGLE (ONLY WHEN VIDEO IS PRESENT) ================= */}
      {hasVideo && (
        <button
          type="button"
          onClick={toggleMute}
          className="absolute right-4 sm:right-6 bottom-4 sm:bottom-5 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center shadow-2xl border border-white/20 transition-all transform hover:scale-110 active:scale-95 cursor-pointer select-none"
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          title={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-[#efbf04]" />
          ) : (
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#efbf04]" />
          )}
        </button>
      )}
    </section>
  )
}

export default HeroSection
