'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface FaithResourcesSectionProps {
  headerTitle?: string
  description?: string
  storeLink?: string
  storeLabel?: string
  bgImage?: any
  bgFallback?: string
  fgImage?: any
  fgFallback?: string
}

export const FaithResourcesSection: React.FC<FaithResourcesSectionProps> = ({
  headerTitle = 'Faith Resources',
  description = 'Explore books, teachings, and spiritual resources that will strengthen your walk with God.',
  storeLink = '/store',
  storeLabel = 'Visit the Store Now',
  bgImage,
  bgFallback = '/faith_resources_background.png',
  fgImage,
  fgFallback = '/faith_resources_foreground.png',
}) => {
  const resolvedBgUrl = getMediaUrl(bgImage, bgFallback)
  const resolvedFgUrl = getMediaUrl(fgImage, fgFallback)

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden select-none" data-node-id="275:810">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
          {/* Dual Overlapping 3D Animated Images Showcase */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[320px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
            {/* Ambient Background Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.15, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="absolute w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#efbf04] rounded-full blur-[100px] pointer-events-none -z-10"
            />

            <div className="relative w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[600px] h-[290px] sm:h-[390px] md:h-[450px] lg:h-[470px] mx-auto">
              {/* Background Book Image - Layer 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 20, rotate: -4 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: -2 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03, rotate: 0, y: -6, transition: { duration: 0.3 } }}
                className="absolute left-2 sm:left-4 lg:left-0 top-0 w-[180px] sm:w-[250px] md:w-[310px] lg:w-[350px] h-[210px] sm:h-[290px] md:h-[350px] lg:h-[390px] rounded-[14px] overflow-hidden shadow-xl sm:shadow-2xl border border-slate-100/90 bg-slate-900 group cursor-pointer"
              >
                <Image
                  src={resolvedBgUrl}
                  alt="Faith teachings and scripture study materials"
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 250px, 350px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Foreground Holy Bible Image - Layer 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.04, y: -8, transition: { duration: 0.3 } }}
                className="absolute right-2 sm:right-4 lg:right-auto lg:left-[130px] top-[60px] sm:top-[80px] md:top-[100px] lg:top-[90px] w-[180px] sm:w-[250px] md:w-[310px] lg:w-[350px] h-[210px] sm:h-[290px] md:h-[350px] lg:h-[390px] rounded-[14px] overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-900 group z-10 cursor-pointer"
              >
                <Image
                  src={resolvedFgUrl}
                  alt="Holy Bible spiritual faith resource"
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 250px, 350px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>

          {/* Text & Store CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start justify-center"
          >
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#efbf04]/15 border border-[#efbf04]/40 text-[#003471] text-xs sm:text-sm font-poppins font-medium mb-3 sm:mb-4"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#003471]" />
              <span>Anointed Books & Literature</span>
            </motion.div>

            {/* Heading */}
            <TextWordReveal
              as="h2"
              delay={0.1}
              staggerDelay={0.04}
              className="font-poppins font-bold text-[#003471] text-2xl sm:text-3xl md:text-[38px] leading-tight tracking-tight"
            >
              {headerTitle}
            </TextWordReveal>

            {/* Accent Gold Underline Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 64, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="h-[4px] bg-[#efbf04] rounded-full mt-3 mb-2"
            />

            {/* Description Text */}
            <BlurTextReveal
              as="p"
              delay={0.25}
              duration={0.65}
              className="font-poppins text-[#333333] text-sm sm:text-base md:text-[18px] leading-relaxed mt-2 sm:mt-4 max-w-[440px]"
            >
              {description}
            </BlurTextReveal>

            {/* Store Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 sm:mt-8 w-full sm:w-auto"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="inline-block w-full sm:w-auto"
              >
                <Link
                  href={storeLink}
                  className="group inline-flex items-center justify-center gap-2.5 bg-[#efbf04] hover:bg-[#e2b500] text-[#0b0c1c] font-poppins font-semibold text-sm sm:text-base md:text-[18px] w-full sm:w-[240px] md:w-[260px] h-[48px] sm:h-[54px] md:h-[58px] rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#efbf04]/30"
                >
                  <span>{storeLabel}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

