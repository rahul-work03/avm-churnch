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
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="w-full max-w-[380px] md:max-w-[367px] h-full"
              >
                {/* Outer Animated Border Container with Rotating Sacred Gold Beam */}
                <div className="relative p-[1.5px] sm:p-[2px] rounded-[24px] overflow-hidden group/card shadow-[0_6px_24px_rgba(14,39,64,0.06)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)] transition-all duration-500 h-full flex flex-col">
                  {/* Rotating Conic Gradient Golden Light Beam */}
                  <div className="absolute inset-[-200%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_260deg,#efbf04_310deg,#d4af37_340deg,#ffffff_355deg,#efbf04_360deg)] opacity-40 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Inner Luxury Alabaster Card Canvas */}
                  <div className="relative w-full h-full bg-gradient-to-b from-white via-[#fdfcf9] to-[#f8f6ee] rounded-[22.5px] p-5 sm:p-6 flex flex-col items-center text-center z-10 border border-slate-100/80">
                    {/* Card Image with Ambient Sheen */}
                    <Link href={targetUrl} className="block w-full cursor-pointer">
                      <div className="relative w-full aspect-[1.92/1] rounded-[16px] overflow-hidden bg-slate-900 mb-4.5 flex-shrink-0 shadow-sm border border-slate-200/80 group-hover/card:border-[#d4af37]/60 transition-colors duration-300">
                        <Image
                          src={resolvedImg}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover/card:scale-106"
                        />
                        {/* Soft Ambient Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none opacity-60 group-hover/card:opacity-30 transition-opacity duration-300" />
                      </div>
                    </Link>

                    {/* Title */}
                    <h3 className="font-philosopher font-bold text-[#071d36] text-lg sm:text-[20px] tracking-tight mb-2">
                      <Link href={targetUrl} className="group-hover/card:text-[#003471] hover:text-[#d4af37] transition-colors">
                        {item.title}
                      </Link>
                    </h3>

                    {/* Subtle Golden Divider */}
                    <div className="w-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#efbf04] to-transparent mb-3 opacity-60 group-hover/card:w-16 group-hover/card:opacity-100 transition-all duration-500" />

                    {/* Description */}
                    <p className="font-poppins text-slate-600 text-xs sm:text-[14.5px] leading-relaxed mb-6 max-w-[290px] line-clamp-2">
                      {item.subtitle}
                    </p>

                    {/* Direct Link Button with Sliding Arrow */}
                    <div className="mt-auto pt-1">
                      <Link
                        href={targetUrl}
                        className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-gradient-to-r from-[#d4af37] via-[#efbf04] to-[#d4af37] bg-[length:200%_auto] hover:bg-right text-[#071d36] font-poppins font-semibold text-xs sm:text-[14px] rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95 cursor-pointer group-hover/card:shadow-[0_4px_16px_rgba(239,191,4,0.4)]"
                      >
                        <span>{btnLabel}</span>
                        <span className="transform group-hover/card:translate-x-1 transition-transform duration-300 text-sm">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SacredCanvas>
  )
}
