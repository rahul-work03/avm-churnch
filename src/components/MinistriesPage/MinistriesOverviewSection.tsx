'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
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
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const MinistriesOverviewSection: React.FC<MinistriesOverviewSectionProps> = ({
  headerTitle = 'Ministries Overview',
  cards,
}) => {
  const activeCards = cards && cards.length > 0 ? cards : DEFAULT_MINISTRIES

  return (
    <SacredCanvas
      tone="pure-light"
      className="py-12 sm:py-16 md:py-20"
    >
      {/* Editorial Section Header (Full-width edge-to-edge golden bars) */}
      <div className="w-full mb-8 sm:mb-12 md:mb-16">
        <EditorialSectionHeader
          variant="editorial"
          align="center"
          eyebrow="MINISTRY PILLARS"
          title={headerTitle}
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
                className="w-full max-w-[380px] md:max-w-[367px] h-full bg-white border border-slate-200/80 rounded-[20px] p-5 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-[#d4af37]/40 transition-all duration-300 group"
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
                <p className="font-poppins text-slate-600 text-xs sm:text-[15px] leading-relaxed mb-5 max-w-[290px] line-clamp-2">
                  {item.subtitle}
                </p>

                {/* Direct Link Button */}
                <div className="mt-auto pt-2">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                    <Link
                      href={targetUrl}
                      className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#efbf04] hover:brightness-105 text-[#071d36] font-poppins font-semibold text-xs sm:text-[14px] rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
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
    </SacredCanvas>
  )
}
