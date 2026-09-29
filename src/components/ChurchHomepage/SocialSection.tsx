'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'

export interface SocialPlatformItem {
  id?: string
  name: string
  handle?: string
  url: string
}

export interface SocialSectionProps {
  headerTitle?: string
  subtitle?: string
  platforms?: SocialPlatformItem[]
}

function getPlatformIcon(name: string, url: string): React.ReactNode {
  const lower = `${name} ${url}`.toLowerCase()
  if (lower.includes('youtube') || lower.includes('youtu.be')) {
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  }
  if (lower.includes('instagram') || lower.includes('instagr.am')) {
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="3" />
      </svg>
    )
  }
  if (lower.includes('facebook') || lower.includes('fb.com')) {
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  }
  // Twitter / X / Default
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const DEFAULT_SOCIALS: SocialPlatformItem[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@ankurnarulaministries',
    url: 'https://www.youtube.com/@ankurnarulaministries',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@ankurnarulaministries',
    url: 'https://www.instagram.com/ankurnarulaministries',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Ankur Narula Ministries',
    url: 'https://www.facebook.com/ankurnarulaministries/',
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    handle: '@apostleankur',
    url: 'https://x.com/apostleankur',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 24,
      stiffness: 300,
      mass: 0.8,
    },
  },
}

export const SocialSection: React.FC<SocialSectionProps> = ({
  headerTitle = 'Our Social Media Platforms',
  subtitle = 'Be a Part of Our Global Family',
  platforms,
}) => {
  const activePlatforms =
    platforms && platforms.length > 0 ? platforms : DEFAULT_SOCIALS

  return (
    <section
      className="relative w-full overflow-hidden select-none bg-[#fbfaf6] py-14 sm:py-16 md:py-20"
      data-node-id="361:24"
      data-name="Social"
    >
      {/* Subtle modern warm gold ambient backdrop */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-amber-100/25 to-transparent pointer-events-none" />
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(239,191,4,0.1),transparent_70%)] pointer-events-none" />

      {/* Modern Section Header */}
      <div className="relative z-10 w-full mb-10 sm:mb-12 text-center">
        <EditorialSectionHeader
          eyebrow="CONNECT & FOLLOW"
          title={headerTitle}
          subtitle={subtitle}
          variant="editorial"
          align="center"
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Clean Modern Gold Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {activePlatforms.map((item, idx) => {
            const defaultItem = DEFAULT_SOCIALS[idx % DEFAULT_SOCIALS.length]
            const name = item.name || defaultItem?.name || 'Platform'
            const handle = item.handle || defaultItem?.handle || `@${name.toLowerCase().replace(/\s+/g, '')}`
            const url = item.url || defaultItem?.url || '#'
            const iconSvg = getPlatformIcon(name, url)

            return (
              <motion.div
                key={item.id || idx}
                variants={cardVariants}
                className="flex"
              >
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect with us on ${name}`}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2, ease: 'easeOut' },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex items-center justify-between w-full p-5 sm:p-6 rounded-[20px] bg-white border border-[#efbf04]/30 hover:border-[#efbf04] shadow-[0_6px_24px_rgba(218,165,32,0.07)] hover:shadow-[0_12px_32px_rgba(239,191,4,0.2)] transition-all duration-300 group overflow-hidden cursor-pointer"
                >
                  {/* Top Subtle Gold Accent Line */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#efbf04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Left: Icon + Title & Handle */}
                  <div className="flex items-center gap-3.5 z-10 min-w-0">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/70 border border-[#efbf04]/50 group-hover:bg-[#efbf04] text-[#003471] group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-105 shrink-0">
                      {iconSvg}
                    </div>

                    <div className="text-left min-w-0">
                      <h3 className="font-philosopher font-bold text-lg sm:text-[19px] text-[#003471] group-hover:text-[#0b131d] tracking-tight leading-snug">
                        {name}
                      </h3>
                      <p className="font-poppins text-xs font-medium text-[#c59b27] group-hover:text-[#9e7a17] mt-0.5">
                        {handle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Modern Arrow Badge */}
                  <div className="w-8 h-8 rounded-full bg-amber-50 group-hover:bg-[#efbf04] border border-[#efbf04]/30 group-hover:border-[#efbf04] flex items-center justify-center text-[#c59b27] group-hover:text-black text-xs font-bold transition-all duration-300 group-hover:translate-x-1 shadow-xs shrink-0 ml-3 z-10">
                    →
                  </div>

                  {/* Subtle Specular Highlight Sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#efbf04]/10 to-transparent pointer-events-none rounded-[20px]" />
                </motion.a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

