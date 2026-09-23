'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getMediaUrl } from '@/utilities/getMediaUrl'

interface BranchesHeroSectionProps {
  heroBannerImage?: any
  heroBannerFallback?: string | null
  heroBannerAlt?: string | null
}

export const BranchesHeroSection: React.FC<BranchesHeroSectionProps> = ({
  heroBannerImage,
  heroBannerFallback = '/church_branches_hero.png',
  heroBannerAlt = 'Our Branches - Ankur Narula Ministries',
}) => {
  const bannerSrc = getMediaUrl(heroBannerImage, heroBannerFallback || '/church_branches_hero.png')

  return (
    <section className="relative pt-28 pb-8 sm:pt-32 sm:pb-12 md:pt-36 md:pb-14 bg-white" data-node-id="286:2994">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Exact Figma 1140x620 Rounded Hero Banner with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[1140/620] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-xl bg-[#0b0c1c]"
        >
          <Image
            src={bannerSrc}
            alt={heroBannerAlt || 'Our Branches'}
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

