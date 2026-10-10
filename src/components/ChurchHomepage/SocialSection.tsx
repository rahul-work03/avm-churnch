'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { ChevronDown, ExternalLink, Sparkles } from 'lucide-react'

export interface SocialHandleItem {
  id?: string
  title: string
  handle: string
  url: string
  description?: string
}

export interface SocialPlatformItem {
  id?: string
  name: string
  handle?: string
  url: string
  badge?: string
  handles?: SocialHandleItem[]
}

export interface SocialSectionProps {
  headerTitle?: string
  subtitle?: string
  platforms?: SocialPlatformItem[]
}

function getPlatformIcon(name: string, url: string = ''): React.ReactNode {
  const lower = `${name} ${url}`.toLowerCase()
  if (lower.includes('youtube') || lower.includes('youtu.be')) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  }
  if (lower.includes('instagram') || lower.includes('instagr.am')) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="3" />
      </svg>
    )
  }
  if (lower.includes('facebook') || lower.includes('fb.com')) {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  }
  // Twitter / X / Default
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const DEFAULT_SOCIALS: SocialPlatformItem[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@ankurnarulaministries',
    url: 'https://www.instagram.com/ankurnarulaministries?stkn=MWd1d3dlZHJvdjF0aw==',
    badge: '6 Handles',
    handles: [
      {
        title: 'Ankur Narula Ministries',
        handle: '@ankurnarulaministries',
        url: 'https://www.instagram.com/ankurnarulaministries?stkn=MWd1d3dlZHJvdjF0aw==',
        description: 'Official ministry page & daily scriptures',
      },
      {
        title: 'Apostle Dr. Ankur Yoseph Narula',
        handle: '@apostledr.ankuryosephnarula',
        url: 'https://www.instagram.com/apostledr.ankuryosephnarula?stkn=MW9hbDhoaGx4ZGNnZA==',
        description: 'Official personal ministry profile',
      },
      {
        title: 'Pastor Sonia Yoseph Narula',
        handle: '@pastorsoniayosephnarula',
        url: 'https://www.instagram.com/pastorsoniayosephnarula?stkn=MTVneWFnbmdqbDc1Yw==',
        description: 'Official personal ministry profile',
      },
      {
        title: 'The Yoseph Family',
        handle: '@the_yoseph_family',
        url: 'https://www.instagram.com/the_yoseph_family?stkn=MThkNmNjZWh0Nmg2ZQ==',
        description: 'Family faith journey & ministry moments',
      },
      {
        title: 'Anugrah TV Official',
        handle: '@anugrahtv_official',
        url: 'https://www.instagram.com/anugrahtv_official?stkn=ZjFpMGpkNHZ4b2d5',
        description: 'Christian broadcast network & shows',
      },
      {
        title: 'ANM Worship Songs Official',
        handle: '@anm_worshipsongs_official',
        url: 'https://www.instagram.com/anm_worshipsongs_official?stkn=MTZybGo2aWFqNDMxbg==',
        description: 'Anointed worship music & praise songs',
      },
    ],
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Pastor Sonia Yoseph Narula',
    url: 'https://www.facebook.com/p/Pastor-Sonia-Yoseph-Narula-61571457190633/',
    badge: '4 Pages',
    handles: [
      {
        title: 'Apostle Dr. Ankur Yoseph Narula',
        handle: 'Ankur Narula',
        url: 'https://www.facebook.com/ankur.narula.5/',
        description: 'Official Facebook profile',
      },
      {
        title: 'Pastor Sonia Yoseph Narula',
        handle: 'Pastor Sonia Yoseph Narula',
        url: 'https://www.facebook.com/p/Pastor-Sonia-Yoseph-Narula-61571457190633/',
        description: 'Official Facebook page',
      },
      {
        title: 'The Yoseph Family',
        handle: 'The Yoseph Family',
        url: 'https://www.facebook.com/p/The-Yoseph-Family-61577143774557/',
        description: 'Official Facebook community',
      },
      {
        title: 'Anugrah TV',
        handle: 'Anugrah TV',
        url: 'https://www.facebook.com/p/Anugrah-TV-61577404071596/',
        description: 'Official Television Ministry Page',
      },
    ],
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@ApostleDr.AnkurYosephNarula',
    url: 'https://www.youtube.com/@ApostleDr.AnkurYosephNarula',
    badge: '4 Channels',
    handles: [
      {
        title: 'Apostle Dr. Ankur Yoseph Narula',
        handle: '@ApostleDr.AnkurYosephNarula',
        url: 'https://www.youtube.com/@ApostleDr.AnkurYosephNarula',
        description: 'Main ministry sermons, messages & teachings',
      },
      {
        title: 'Pastor Sonia Yoseph Narula',
        handle: '@pastorsoniayosephnarula',
        url: 'https://www.youtube.com/@pastorsoniayosephnarula',
        description: 'Devotionals, worship & women fellowship',
      },
      {
        title: 'Live Ankur Narula Ministries',
        handle: '@liveankurnarulaministries',
        url: 'https://www.youtube.com/@liveankurnarulaministries',
        description: 'Live church prayer services & broadcasts',
      },
      {
        title: 'The Yoseph Family',
        handle: '@theyosephfamily',
        url: 'https://www.youtube.com/@theyosephfamily',
        description: 'Family life, faith journey & inspirational moments',
      },
    ],
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    handle: '@apostleankur',
    url: 'https://x.com/apostleankur',
    badge: '',
    handles: [],
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
    scale: 0.97,
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

  const [openMenuPlatform, setOpenMenuPlatform] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Close when clicking outside
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenMenuPlatform(null)
      }
    }
    document.addEventListener('mousedown', handleDocumentClick)
    return () => document.removeEventListener('mousedown', handleDocumentClick)
  }, [])

  const togglePlatformMenu = (platformName: string) => {
    setOpenMenuPlatform((prev) => (prev === platformName ? null : platformName))
  }

  return (
    <section
      className="relative z-30 w-full overflow-visible select-none bg-[#fbfaf6] py-14 sm:py-16 md:py-20"
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

      <div ref={containerRef} className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Clean Modern Cards Grid */}
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
            const handlesCount = item.handles?.length || 0
            const hasMultipleHandles = handlesCount > 1
            const isOpen = openMenuPlatform === name

            const handle =
              item.handle ||
              defaultItem?.handle ||
              `@${name.toLowerCase().replace(/\s+/g, '')}`
            const url = item.url || defaultItem?.url || '#'
            const iconSvg = getPlatformIcon(name, url)

            return (
              <motion.div
                key={item.id || idx}
                variants={cardVariants}
                className={`relative ${isOpen ? 'z-50' : 'z-10'}`}
              >
                {/* Main Card */}
                <div
                  className={`relative flex items-center justify-between w-full p-5 rounded-[22px] bg-white border transition-all duration-300 group shadow-xs ${
                    isOpen
                      ? 'border-[#efbf04] shadow-md ring-2 ring-[#efbf04]/30'
                      : 'border-slate-200/80 hover:border-[#efbf04] hover:shadow-md'
                  }`}
                >
                  {/* Left: Icon + Title & Handle (Direct link if single handle, or toggles menu) */}
                  <a
                    href={hasMultipleHandles ? undefined : url}
                    target={hasMultipleHandles ? undefined : '_blank'}
                    rel={hasMultipleHandles ? undefined : 'noopener noreferrer'}
                    onClick={(e) => {
                      if (hasMultipleHandles) {
                        e.preventDefault()
                        togglePlatformMenu(name)
                      }
                    }}
                    className="flex items-center gap-3.5 z-10 min-w-0 flex-1 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-50/80 border border-[#efbf04]/30 group-hover:bg-[#efbf04] text-[#003471] group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-2xs shrink-0">
                      {iconSvg}
                    </div>

                    <div className="text-left min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-philosopher font-bold text-base sm:text-[17px] text-[#003471] group-hover:text-[#0b131d] tracking-tight leading-snug truncate">
                          {name}
                        </h3>
                        {hasMultipleHandles && (
                          <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-semibold bg-amber-50 text-[#9e7a17] border border-[#efbf04]/30">
                            {handlesCount}
                          </span>
                        )}
                      </div>
                      <p className="font-poppins text-xs font-normal text-slate-500 group-hover:text-slate-700 mt-0.5 truncate">
                        {handle}
                      </p>
                    </div>
                  </a>

                  {/* Right Action Button */}
                  {hasMultipleHandles ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        togglePlatformMenu(name)
                      }}
                      aria-expanded={isOpen}
                      aria-label={`Toggle ${name} channels menu`}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs transition-all duration-300 shrink-0 ml-2 cursor-pointer ${
                        isOpen
                          ? 'bg-[#efbf04] text-black border-[#efbf04] shadow-xs'
                          : 'bg-slate-100 hover:bg-[#efbf04] border-slate-200 hover:border-[#efbf04] text-slate-600 hover:text-black'
                      }`}
                    >
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                  ) : (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${name}`}
                      className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#efbf04] border border-slate-200 group-hover:border-[#efbf04] flex items-center justify-center text-slate-500 group-hover:text-black text-xs font-bold transition-all duration-200 group-hover:translate-x-0.5 shrink-0 ml-2"
                    >
                      →
                    </a>
                  )}
                </div>

                {/* ==================== FLOATING ACTION MENU ==================== */}
                <AnimatePresence>
                  {isOpen && item.handles && item.handles.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96, filter: 'blur(6px)' }}
                      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: 8, scale: 0.96, filter: 'blur(6px)' }}
                      transition={{
                        duration: 0.22,
                        type: 'spring',
                        stiffness: 380,
                        damping: 26,
                      }}
                      className="absolute left-0 right-0 top-full mt-2 z-50 origin-top"
                    >
                      <div className="bg-white/95 backdrop-blur-md border border-[#efbf04]/60 rounded-2xl p-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.12)] space-y-1.5 ring-1 ring-black/5">
                        {/* Header Pill */}
                        <div className="px-2.5 py-1 flex items-center justify-between border-b border-slate-100 mb-1">
                          <span className="font-poppins uppercase tracking-wider text-[10px] font-bold text-[#9e7a17] flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#efbf04]" />
                            {name} Channels
                          </span>
                          <span className="font-poppins text-[10px] text-slate-400 font-medium">
                            {item.handles.length} available
                          </span>
                        </div>

                        {/* Scrollable Handle List (4 handles in view) */}
                        <div
                          className="space-y-1.5 overflow-y-auto max-h-[246px] pr-1 overscroll-contain"
                          style={{
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#efbf0480 transparent',
                          }}
                        >
                          {item.handles.map((h, hIdx) => (
                            <motion.div
                              key={h.id || hIdx}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.18,
                                delay: hIdx * 0.035,
                              }}
                            >
                              <a
                                href={h.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpenMenuPlatform(null)}
                                className="flex items-center justify-between gap-2.5 p-2.5 rounded-xl bg-slate-50/70 hover:bg-amber-50/80 border border-slate-100 hover:border-[#efbf04]/60 text-left transition-all duration-200 group/btn cursor-pointer shadow-2xs"
                              >
                                <div className="min-w-0 flex-1">
                                  <p className="font-philosopher font-bold text-sm text-[#003471] group-hover/btn:text-[#0b131d] tracking-tight truncate transition-colors">
                                    {h.title}
                                  </p>
                                  <p className="font-poppins text-[11px] font-medium text-[#c59b27] group-hover/btn:text-[#9e7a17] truncate">
                                    {h.handle}
                                  </p>
                                </div>

                                <div className="w-6 h-6 rounded-full bg-white group-hover/btn:bg-[#efbf04] text-[#003471] group-hover/btn:text-black border border-slate-200/80 group-hover/btn:border-[#efbf04] flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                                  <ExternalLink className="w-3 h-3" />
                                </div>
                              </a>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default SocialSection
