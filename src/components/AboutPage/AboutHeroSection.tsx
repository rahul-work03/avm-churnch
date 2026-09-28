'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl, getMediaAlt } from '@/utilities/getMediaUrl'

export interface AboutHeroSectionProps {
  headerTitle?: string
  description?: string
  bannerImage?: any
  bannerImageFallback?: string
  bannerAlt?: string
}

export const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({
  headerTitle = 'About Us',
  description = 'The Church of Signs and Wonders (Ankur Narula Ministries) is a global revival ministry dedicated to spreading the Gospel of Jesus Christ through the power of the Holy Spirit. Founded in 2004 in Punjab, India, the ministry has grown from three members into a worldwide movement bringing healing, deliverance, and transformed lives.',
  bannerImage,
  bannerImageFallback = '/figma-assets/457a3354faefcf652c2110710588f40233c79c64.png',
  bannerAlt = 'Ankur Narula Ministries Ministry Congregation',
}) => {
  const resolvedBannerUrl = getMediaUrl(bannerImage, bannerImageFallback)
  const resolvedBannerAlt = getMediaAlt(bannerImage, bannerAlt)

  return (
    <section className="relative pt-28 pb-4 sm:pt-32 sm:pb-6 md:pt-36 md:pb-8 overflow-hidden select-none" data-node-id="275:810">
      <SacredCanvas tone="warm-alabaster" className="py-2">
        {/* Editorial Section Header (Full width edge-to-edge golden bars) */}
        <div className="w-full text-center pt-2 sm:pt-4 mb-4 sm:mb-6">
          <EditorialSectionHeader
            eyebrow="GLOBAL APOSTOLIC MOVEMENT"
            title={headerTitle}
            subtitle={description}
            variant="editorial"
            align="center"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Large Hero Photo / Stage Banner */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 sm:mt-10 md:mt-12 max-w-[1140px] mx-auto relative"
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[1140/580] rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group">
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
      </SacredCanvas>
    </section>
  )
}

export default AboutHeroSection
