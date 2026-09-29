'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/ui/reveal'
import { BlurTextReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'

export interface HeadChurchSectionProps {
  headerTitle?: string
  image?: any
  imageFallback?: string
  alt?: string
  narrative?: string
}

export const HeadChurchSection: React.FC<HeadChurchSectionProps> = ({
  headerTitle = 'Our Head Church Jalandhar',
  image,
  imageFallback = '/head_church.png',
  alt = 'Head Church Jalandhar - Ankur Narula Ministries',
  narrative = 'Ankur Narula Ministries (The Church of Signs and Wonders) is the biggest and fastest growing church ministry in Punjab, India. Apostle Ankur Yoseph Narula is the Senior Pastor and Overseer in The Church of Signs and Wonders. The Church has become a channel of Salvation for India. Every Thursday and Sunday, our live services are broadcasted to millions around the globe through Anugrah TV, and the church is always filled more than capacity with overflows of people sitting outside the church on the roads and the empty plots. The church has become the biggest congregation of more than 300,000 people attending weekly services in The Church of Signs and Wonders.',
}) => {
  const resolvedImg = getMediaUrl(image, imageFallback)
  const resolvedAlt = getMediaAlt(image, alt)

  return (
    <SacredCanvas
      tone="warm-alabaster"
      className="pb-12 sm:pb-16 md:pb-20"
    >
      {/* Edge-to-edge Atmospheric Header with Gold Wing Bars on Both Sides */}
      <EditorialSectionHeader
        variant="atmospheric"
        align="center"
        title={headerTitle}
        className="mb-8 sm:mb-12"
      />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Featured Head Church 3D Visual */}
        <RevealOnScroll direction="up" distance={24} duration={0.8} delay={0.1}>
          <div className="relative w-full aspect-[16/9] rounded-[16px] sm:rounded-[22px] overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950 group">
            <Image
              src={resolvedImg}
              alt={resolvedAlt}
              fill
              priority
              className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
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
