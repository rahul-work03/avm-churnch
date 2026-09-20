'use client'

import React from 'react'
import Image from 'next/image'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { RevealOnScroll } from '@/components/ui/reveal'

interface BranchesHeroSectionProps {
  heroBannerImage?: any
  heroBannerFallback?: string | null
  heroBannerAlt?: string | null
}

export const BranchesHeroSection: React.FC<BranchesHeroSectionProps> = ({
  heroBannerImage,
  heroBannerFallback = '/figma-assets/4aed35d9c54e59fca1c3d6581cbb0e996ec31f05.png',
  heroBannerAlt = 'Our Branches - Ankur Narula Ministries',
}) => {
  const bannerSrc = getMediaUrl(heroBannerImage, heroBannerFallback || '')

  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 bg-[#f8fafc]" data-node-id="286:2994">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        <RevealOnScroll direction="up" delay={0.1}>
          {/* Exact Figma 1140x620 Rounded Hero Banner with "OUR BRANCHES" embossed visual */}
          <div className="relative w-full aspect-[1140/620] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-xl bg-[#0b0c1c]">
            <Image
              src={bannerSrc}
              alt={heroBannerAlt || 'Our Branches'}
              fill
              className="object-cover"
              priority
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

