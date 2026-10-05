'use client'

import React from 'react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { BlurTextReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface WorshipTeamSectionProps {
  headerTitle?: string
  video?: any
  videoFallback?: string
  posterImage?: any
  posterFallback?: string
  narrative?: string
  // Backward compatibility
  image?: any
  imageFallback?: string
  alt?: string
}

export const WorshipTeamSection: React.FC<WorshipTeamSectionProps> = ({
  headerTitle = 'Our Worship Team',
  video,
  videoFallback = '/quoir_team.mp4',
  posterImage,
  posterFallback,
  narrative = 'Our Worship Team leads the church in powerful and spirit-filled praise and worship. With dedication and passion, they help create an atmosphere where everyone can encounter God, express their faith, and grow deeper in their relationship with Christ.',
}) => {
  const resolvedVideo = getMediaUrl(video, videoFallback)
  const resolvedPoster = posterImage ? getMediaUrl(posterImage, posterFallback) : undefined

  return (
    <SacredCanvas
      tone="pure-light"
      className="pb-12 sm:pb-16 md:pb-20"
    >
      {/* Edge-to-edge Atmospheric Header with Gold Wing Bars on Both Sides */}
      <EditorialSectionHeader
        variant="atmospheric"
        align="center"
        eyebrow="PRAISE & ADORATION"
        title={headerTitle}
        className="mb-8 sm:mb-12"
      />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Featured Worship Team Stage Video Visual */}
        <RevealOnScroll direction="up" distance={24} duration={0.8} delay={0.1}>
          <div className="relative w-full aspect-[16/9] rounded-[16px] sm:rounded-[22px] overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950 group">
            <video
              src={resolvedVideo}
              poster={resolvedPoster}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
            />
          </div>
        </RevealOnScroll>

        {/* Narrative Description Text */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center max-w-4xl mx-auto">
          <BlurTextReveal
            as="p"
            delay={0.2}
            duration={0.7}
            className="font-poppins text-slate-700 text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed sm:leading-[1.85] text-balance"
          >
            {narrative}
          </BlurTextReveal>
        </div>
      </div>
    </SacredCanvas>
  )
}
