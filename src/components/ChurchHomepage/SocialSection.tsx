'use client'

import React from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface SocialPlatformItem {
  id?: string
  name: string
  url: string
  buttonImage?: any
  buttonImageFallback?: string
}

export interface SocialSectionProps {
  headerTitle?: string
  subtitle?: string
  backgroundImage?: any
  backgroundImageFallback?: string
  platforms?: SocialPlatformItem[]
}

const DEFAULT_SOCIAL_PLATFORMS: SocialPlatformItem[] = [
  {
    id: '361:4',
    name: 'Instagram',
    url: 'https://www.instagram.com/ankurnarulaministries',
    buttonImageFallback: '/figma-assets/social_btn_instagram.png',
  },
  {
    id: '361:5',
    name: 'Facebook',
    url: 'https://www.facebook.com/ankurnarulaministries/',
    buttonImageFallback: '/figma-assets/social_btn_facebook.png',
  },
  {
    id: '361:3',
    name: 'YouTube',
    url: 'https://www.youtube.com/@ankurnarulaministries',
    buttonImageFallback: '/figma-assets/social_btn_youtube.png',
  },
  {
    id: '361:6',
    name: 'Twitter',
    url: 'https://x.com/apostleankur',
    buttonImageFallback: '/figma-assets/social_btn_twitter.png',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.94,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      damping: 22,
      stiffness: 280,
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
    platforms && platforms.length > 0 ? platforms : DEFAULT_SOCIAL_PLATFORMS

  return (
    <section
      className="relative w-full overflow-hidden select-none"
      data-node-id="361:24"
      data-name="Social"
    >
      <SacredCanvas tone="pure-light" className="py-10 sm:py-12 md:py-16">
        {/* Section Header Text (Full width edge-to-edge gold bars) */}
        <div className="w-full mb-8 sm:mb-10 text-center">
          <EditorialSectionHeader
            eyebrow="CONNECT & FOLLOW"
            title={headerTitle}
            subtitle={subtitle}
            variant="editorial"
            align="center"
          />
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Framer Motion Staggered Social Buttons: Strictly 1 line on desktop, vertically stacked on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-4 items-center justify-items-center gap-4 md:gap-3.5 lg:gap-5 xl:gap-6 w-full max-w-[1200px] mx-auto"
        >
          {activePlatforms.map((platform, idx) => {
            const btnImg = getMediaUrl(
              platform.buttonImage,
              platform.buttonImageFallback ||
                DEFAULT_SOCIAL_PLATFORMS[idx]?.buttonImageFallback ||
                '/figma-assets/social_btn_instagram.png'
            )

            return (
              <motion.div
                key={platform.id || idx}
                variants={itemVariants}
                className="flex items-center justify-center w-full"
                data-node-id={platform.id}
              >
                <motion.a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${platform.name} page`}
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.14))',
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  className="relative block rounded-full overflow-hidden drop-shadow-sm cursor-pointer group w-full max-w-[280px] sm:max-w-[300px] md:max-w-[215px] lg:max-w-[260px] xl:max-w-[275px]"
                >
                  {/* Uniform Even-Sized Pill Button Image */}
                  <div className="relative w-full aspect-[4.91/1] flex items-center justify-center">
                    <Image
                      src={btnImg}
                      alt={platform.name}
                      fill
                      sizes="(max-width: 768px) 300px, (max-width: 1024px) 215px, 275px"
                      className="object-contain pointer-events-none select-none"
                    />
                  </div>

                  {/* Subtle sweeping specular highlight reflection on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-full" />
                </motion.a>
              </motion.div>
            )
          })}
        </motion.div>
        </div>
      </SacredCanvas>
    </section>
  )
}
