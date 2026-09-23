'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'

export interface AboutHeroSectionProps {
  headerTitle?: string
  description?: string
  bannerImage?: any
  bannerImageFallback?: string
  bannerAlt?: string
}

export const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({
  headerTitle = 'About us',
  description = 'The Church of Signs and Wonders (Ankur Narula Ministries) is a global revival ministry dedicated to spreading the Gospel of Jesus Christ through the power of the Holy Spirit. Founded in 2004 in Punjab, India, the ministry has grown from three members into a worldwide movement bringing healing, deliverance, and transformed lives.',
  bannerImage,
  bannerImageFallback = '/figma-assets/457a3354faefcf652c2110710588f40233c79c64.png',
  bannerAlt = 'Ankur Narula Ministries Ministry Congregation',
}) => {
  const resolvedBannerUrl = getMediaUrl(bannerImage, bannerImageFallback)
  const resolvedBannerAlt = getMediaAlt(bannerImage, bannerAlt)

  return (
    <section className="relative pt-28 pb-8 sm:pt-32 sm:pb-12 md:pt-36 md:pb-16 bg-white select-none" data-node-id="275:810">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* "About us" Header with Golden Emblems on both sides */}
        <div className="text-center px-2 pt-2 sm:pt-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <motion.div
              initial={{ scale: 0, rotate: -20, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04]"
              style={{
                maskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
                WebkitMaskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
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
              staggerDelay={0.04}
              className="font-philosopher font-bold text-[#122f4a] text-2xl sm:text-3xl md:text-[38px] tracking-tight justify-center"
            >
              {headerTitle}
            </TextWordReveal>
            <motion.div
              initial={{ scale: 0, rotate: 20, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
              style={{
                maskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
                WebkitMaskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
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
            className="font-poppins text-[#0b0c1c] text-xs sm:text-sm md:text-[18px] leading-relaxed max-w-4xl mx-auto mt-2.5 sm:mt-5 text-balance justify-center"
          >
            {description}
          </BlurTextReveal>
        </div>

        {/* Featured Large Hero Photo / Stage Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-10 md:mt-12 max-w-[1140px] mx-auto"
        >
          <div className="relative w-full aspect-[16/9] sm:aspect-[1140/580] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl border border-amber-200/40 bg-slate-900 group">
            <Image
              src={resolvedBannerUrl}
              alt={resolvedBannerAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1140px"
              className="object-cover object-center sm:object-top transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutHeroSection
