'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { TextWordReveal, GoldBarReveal } from '@/components/ui/text-reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface MinistryCardItem {
  id?: string
  title: string
  subtitle: string
  image?: any
  imageFallback?: string
  linkUrl: string
  buttonLabel?: string
}

export interface MinistriesOverviewSectionProps {
  headerTitle?: string
  cards?: MinistryCardItem[]
}

const DEFAULT_MINISTRIES: MinistryCardItem[] = [
  {
    id: 'prayer-mountain',
    title: 'PRAYER MOUNTAIN',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/ministries/prayer_mountain.png',
    linkUrl: '/prayer-mountain',
    buttonLabel: 'Learn More',
  },
  {
    id: 'prayer-house',
    title: 'PRAYER HOUSE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/ministries/prayer_house.png',
    linkUrl: '/prayer-house',
    buttonLabel: 'Learn More',
  },
  {
    id: 'bible-college',
    title: 'BIBLE COLLEGE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/ministries/bible_college.png',
    linkUrl: '/bible-college',
    buttonLabel: 'Learn More',
  },
  {
    id: 'sophia-institute',
    title: 'SOPHIA INSTITUTE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/ministries/sophia_institute.png',
    linkUrl: '/sophia-institute',
    buttonLabel: 'Learn More',
  },
  {
    id: 'church-branches',
    title: 'CHURCH BRANCHES',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/ministries/church_branches.png',
    linkUrl: '/church-branches',
    buttonLabel: 'Learn More',
  },
  {
    id: 'sunday-school',
    title: 'SUNDAY SCHOOL',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    imageFallback: '/ministries/sunday_school.png',
    linkUrl: '/sunday-school',
    buttonLabel: 'Learn More',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 24,
      stiffness: 260,
    },
  },
}

export const MinistriesOverviewSection: React.FC<MinistriesOverviewSectionProps> = ({
  headerTitle = 'Ministries Overview',
  cards,
}) => {
  const activeCards = cards && cards.length > 0 ? cards : DEFAULT_MINISTRIES

  return (
    <section className="relative py-10 sm:py-16 md:py-24 bg-transparent overflow-hidden" data-node-id="277:1632">
      {/* Section Header with Golden Accent Lines and Emblems */}
      <div className="w-full flex items-center justify-between mb-8 sm:mb-12 md:mb-16">
        {/* Left Gold Bar */}
        <GoldBarReveal
          direction="left"
          className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[5px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm flex-shrink-0"
        />

        {/* Center Title with Golden Emblems */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 px-2 sm:px-6 flex-shrink min-w-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 bg-[#efbf04] flex-shrink-0"
            style={{
              maskImage: "url('/figma-assets/fef4ed678da919c6b52b3c402e3d3f41e5084014.png')",
              WebkitMaskImage: "url('/figma-assets/fef4ed678da919c6b52b3c402e3d3f41e5084014.png')",
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />

          <TextWordReveal
            as="h2"
            delay={0.05}
            staggerDelay={0.035}
            className="font-poppins font-semibold text-[#003471] text-base sm:text-2xl md:text-[34px] tracking-tight text-center whitespace-nowrap"
          >
            {headerTitle}
          </TextWordReveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 bg-[#efbf04] flex-shrink-0 scale-x-[-1]"
            style={{
              maskImage: "url('/figma-assets/fef4ed678da919c6b52b3c402e3d3f41e5084014.png')",
              WebkitMaskImage: "url('/figma-assets/fef4ed678da919c6b52b3c402e3d3f41e5084014.png')",
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
        </div>

        {/* Right Gold Bar */}
        <GoldBarReveal
          direction="right"
          className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[5px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm flex-shrink-0"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 6-Card Grid: Directly linking to dedicated sub-pages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1140px] mx-auto justify-items-center"
        >
          {activeCards.map((item, idx) => {
            const resolvedImg = getMediaUrl(item.image, item.imageFallback || '/ministries/prayer_mountain.png')
            const targetUrl = item.linkUrl || `/${item.id || 'ministries'}`
            const btnLabel = item.buttonLabel || 'Learn More'

            return (
              <motion.div
                key={item.id || idx}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="w-full max-w-[380px] md:max-w-[367px] h-full bg-white border border-[#eee] rounded-[20px] p-5 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Card Image */}
                <Link href={targetUrl} className="block w-full cursor-pointer">
                  <div className="relative w-full aspect-[1.92/1] rounded-[14px] overflow-hidden bg-slate-100 mb-4 flex-shrink-0 shadow-xs">
                    <Image
                      src={resolvedImg}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Title */}
                <h3 className="font-poppins font-bold text-[#003471] text-base sm:text-[18px] tracking-wide mb-1.5">
                  <Link href={targetUrl} className="hover:text-[#d5582a] transition-colors">
                    {item.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="font-poppins text-[#333333] text-xs sm:text-[15px] leading-relaxed mb-4 max-w-[290px] line-clamp-2">
                  {item.subtitle}
                </p>

                {/* Direct Link Button */}
                <div className="mt-auto pt-2">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={targetUrl}
                      className="w-[138px] h-[42px] bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-poppins font-semibold text-xs sm:text-[14px] rounded-full shadow-md hover:shadow-lg transition-colors duration-200 cursor-pointer flex items-center justify-center active:scale-95"
                    >
                      {btnLabel}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
