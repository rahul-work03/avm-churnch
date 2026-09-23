'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'

export interface SundaySchoolHeroSectionProps {
  heroHeaderTitle?: string | null
  heroDescription?: string | null
  heroBannerImage?: any
  heroBannerFallback?: string | null
  heroBannerAlt?: string | null
  heroVideoUrl?: string | null
  heroSubtitle?: string | null
  headerTitle?: string | null
  description?: string | null
  subtitle?: string | null
}

export const SundaySchoolHeroSection: React.FC<SundaySchoolHeroSectionProps> = ({
  heroHeaderTitle,
  heroDescription,
  heroBannerImage,
  heroBannerFallback = '/sunday_school_hero.png',
  heroBannerAlt = 'Sunday School Ministries - Ankur Narula Ministries',
  heroVideoUrl,
  heroSubtitle,
  headerTitle = 'SUNDAY SCHOOL MINISTRIES',
  description = 'Welcome to Sunday School, a place where the Word of God is taught with simplicity, love, and truth, helping hearts of all ages experience the presence of God in a personal way. Here, children, youth, and believers grow together in faith as the Scriptures come alive through teaching, stories, and fellowship.',
  subtitle = 'Empowering the next generation to walk in faith, truth, and the power of God.',
}) => {
  const displayTitle = heroHeaderTitle || headerTitle || 'SUNDAY SCHOOL MINISTRIES'
  const displayDesc =
    heroDescription ||
    description ||
    'Welcome to Sunday School, a place where the Word of God is taught with simplicity, love, and truth, helping hearts of all ages experience the presence of God in a personal way. Here, children, youth, and believers grow together in faith as the Scriptures come alive through teaching, stories, and fellowship.'
  const displaySubtitle =
    heroSubtitle || subtitle || 'Empowering the next generation to walk in faith, truth, and the power of God.'
  const resolvedBannerUrl = getMediaUrl(heroBannerImage, heroBannerFallback || '/sunday_school_hero.png')
  const resolvedBannerAlt = getMediaAlt(
    heroBannerImage,
    heroBannerAlt || 'Sunday School Ministries - Ankur Narula Ministries'
  )

  return (
    <section className="relative pt-28 pb-8 sm:pt-32 sm:pb-12 md:pt-36 md:pb-14 bg-transparent" data-node-id="289:3761">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* "SUNDAY SCHOOL MINISTRIES" Header with Golden Emblems on both sides */}
        <div className="text-center px-2 pt-2 sm:pt-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <motion.div
              initial={{ scale: 0, rotate: -20, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04]"
              style={{
                maskImage: "url('/figma-assets/b3900b0c6d076c8791d4705df6a60f73f2821e51.png')",
                WebkitMaskImage: "url('/figma-assets/b3900b0c6d076c8791d4705df6a60f73f2821e51.png')",
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
            <TextWordReveal
              as="h1"
              delay={0.05}
              className="font-poppins font-semibold text-[#003471] text-xl sm:text-3xl md:text-[38px] tracking-tight uppercase"
            >
              {displayTitle}
            </TextWordReveal>
            <motion.div
              initial={{ scale: 0, rotate: 20, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
              style={{
                maskImage: "url('/figma-assets/b3900b0c6d076c8791d4705df6a60f73f2821e51.png')",
                WebkitMaskImage: "url('/figma-assets/b3900b0c6d076c8791d4705df6a60f73f2821e51.png')",
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
          </div>

          <BlurTextReveal
            as="p"
            delay={0.2}
            duration={0.7}
            className="font-poppins text-[#0b0c1c] text-xs sm:text-base md:text-[18px] leading-relaxed max-w-4xl mx-auto mt-2.5 sm:mt-5 text-balance"
          >
            {displayDesc}
          </BlurTextReveal>
        </div>

        {/* Featured Large Hero Banner Container (1140x620) */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-10 md:mt-12 max-w-[1140px] mx-auto"
        >
          <div className="relative w-full aspect-[1140/620] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
            {heroVideoUrl && !heroBannerImage && heroBannerFallback === null ? (
              <video
                src={heroVideoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <Image
                src={resolvedBannerUrl}
                alt={resolvedBannerAlt}
                fill
                className="object-cover object-center"
                priority
              />
            )}
          </div>

          {/* Subtitle Below Hero */}
          {displaySubtitle && (
            <div className="mt-4 sm:mt-6 text-center">
              <BlurTextReveal
                as="p"
                delay={0.3}
                duration={0.6}
                className="font-poppins font-normal text-[#1f3a5f] text-xs sm:text-base md:text-[22px] tracking-wide max-w-3xl mx-auto"
              >
                {displaySubtitle}
              </BlurTextReveal>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}



