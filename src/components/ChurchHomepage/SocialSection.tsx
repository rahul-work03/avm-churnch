'use client'

import React from 'react'
import Image from 'next/image'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface SocialPlatformItem {
  name: string
  url: string
  icon?: any
  iconFallback?: string
  themeGradient?: string
  borderColor?: string
}

export interface SocialSectionProps {
  headerTitle?: string
  subtitle?: string
  platforms?: SocialPlatformItem[]
}

const DEFAULT_SOCIALS: SocialPlatformItem[] = [
  {
    name: 'Face book',
    iconFallback: '/figma-assets/facebook_logo.png',
    url: 'https://www.facebook.com/ankurnarulaministries',
    themeGradient: 'linear-gradient(135deg, #dbe8fa 0%, #f0f5fd 50%, #ffffff 100%)',
    borderColor: 'border-blue-100',
  },
  {
    name: 'Instagram',
    iconFallback: '/figma-assets/instagram_logo.png',
    url: 'https://www.instagram.com/ankurnarulaministries?igsh=NmEzcDFsYnc4YWEw',
    themeGradient: 'linear-gradient(135deg, #fce1ee 0%, #fdf2f7 50%, #ffffff 100%)',
    borderColor: 'border-pink-100',
  },
  {
    name: 'YouTube',
    iconFallback: '/figma-assets/youtube_logo.png',
    url: 'https://www.youtube.com/channel/UCYwyl0lfL0UzP-1LMtcoH-w',
    themeGradient: 'linear-gradient(135deg, #fce0de 0%, #fdf1f0 50%, #ffffff 100%)',
    borderColor: 'border-red-100',
  },
  {
    name: 'X - Twitter',
    iconFallback: '/figma-assets/x_twitter_logo.png',
    url: 'https://x.com/apostleankur',
    themeGradient: 'linear-gradient(135deg, #9ca3af 0%, #cbd5e1 45%, #f1f5f9 85%, #ffffff 100%)',
    borderColor: 'border-slate-200',
  },
]

export const SocialSection: React.FC<SocialSectionProps> = ({
  headerTitle = 'Our Social Media Platforms',
  subtitle = 'Be a Part of Our Family',
  platforms,
}) => {
  const activeSocials = platforms && platforms.length > 0 ? platforms : DEFAULT_SOCIALS

  return (
    <section className="py-14 sm:py-18 md:py-24 bg-white" data-node-id="274:3">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <RevealOnScroll direction="up" distance={20} duration={0.6}>
          <h2 className="font-poppins font-medium text-[#d5582a] md:text-[#d5582a] text-2xl sm:text-3xl md:text-[34px] tracking-tight">
            {headerTitle}
          </h2>
          <p className="font-poppins text-[#8c8c8c] text-sm sm:text-base md:text-[18px] mt-1.5">
            {subtitle}
          </p>
        </RevealOnScroll>

        {/* 4 Social Cards */}
        <StaggerContainer
          staggerDelay={0.12}
          className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center"
        >
          {activeSocials.map((s, idx) => {
            const iconUrl = getMediaUrl(s.icon, s.iconFallback || '/figma-assets/facebook_logo.png')
            const gradient = s.themeGradient || 'linear-gradient(135deg, #dbe8fa 0%, #f0f5fd 50%, #ffffff 100%)'
            const border = s.borderColor || 'border-blue-100'

            return (
              <StaggerItem
                key={idx}
                direction="up"
                distance={20}
                duration={0.5}
                className="w-full max-w-[380px] sm:max-w-none"
              >
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-[135px] sm:h-[150px] md:h-[160px] rounded-[14px] p-5 sm:p-6 flex flex-col justify-between items-start text-left border ${border} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group`}
                  style={{ backgroundImage: gradient }}
                >
                  <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                    <Image
                      src={iconUrl}
                      alt={s.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <span className="font-poppins font-semibold text-[#0b131d] text-base sm:text-lg md:text-[20px] group-hover:text-black transition-colors">
                    {s.name}
                  </span>
                </a>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
