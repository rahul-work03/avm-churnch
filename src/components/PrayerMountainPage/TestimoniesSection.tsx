'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface TestimonyItem {
  id?: string
  person: string
  title: string
  summary: string
  slug?: string
  buttonLabel?: string
  image?: any
  imageFallback?: string
}

export interface TestimoniesSectionProps {
  headerTitle?: string
  testimonies?: TestimonyItem[]
}

const DEFAULT_TESTIMONIES: TestimonyItem[] = [
  {
    id: 'testimony-1',
    person: 'Sister Randeep',
    title: 'Complete Healing from Tuberculosis, Lung Complications & Paralysis',
    summary:
      'DUE TO TB AND FLUID IN THE RIGHT LUNG, SHE HAD DIFFICULTY IN BREATHING AND REMAINED BEDRIDDEN. AFTER RECEIVING ANOINTED PRAYER BY WOMAN OF GOD, SHE GOT REMARKABLE HEALING.',
    slug: 'sister-randeep-healing',
    imageFallback: '/figma-assets/88fe21040a6d042f53b945fa5a996447efd6bcfd.png',
    buttonLabel: 'READ FULL TESTIMONY',
  },
  {
    id: 'testimony-2',
    person: 'Sister Sukhdeep Kaur',
    title: 'Supernatural Deliverance from Severe Mental Attacks & Oppression',
    summary:
      'DUE TO VIOLENT DEMONIC MENTAL ATTACKS, SHE SUFFERED SEVERE OUTBURSTS AND AGONY. AFTER RECEIVING ANOINTED PRAYER, SHE WAS MIRACULOUSLY DELIVERED AND RESTORED TO SOUND MIND.',
    slug: 'sister-sukhdeep-kaur-deliverance',
    imageFallback: '/figma-assets/6b7f869d048b1af39a42b08c4bacff57cb6ed577.png',
    buttonLabel: 'READ FULL TESTIMONY',
  },
  {
    id: 'testimony-3',
    person: 'Brother Gurpreet Singh',
    title: 'Instant Miracle Healing from Chronic Spinal Cord Degeneration',
    summary:
      'AFTER SUFFERING INTENSE LOWER BACK PAIN AND SPINAL IMMOBILITY FOR OVER 4 YEARS, HE WAS SUPERNATURALLY HEALED AT PRAYER MOUNTAIN AND CAN NOW WALK FREELY WITHOUT ANY PAIN.',
    slug: 'brother-gurpreet-healing',
    imageFallback: '/figma-assets/88fe21040a6d042f53b945fa5a996447efd6bcfd.png',
    buttonLabel: 'READ FULL TESTIMONY',
  },
  {
    id: 'testimony-4',
    person: 'Sister Manpreet Kaur',
    title: 'Divine Restoration of Broken Marriage & Peaceful Family Revival',
    summary:
      'FACING IMMINENT DIVORCE AND CONTINUOUS TURMOIL, SHE SOUGHT GOD AT PRAYER MOUNTAIN. GOD HEARD HER CRIES, RECONCILED HER MARRIAGE, AND FILLED HER HOME WITH HIS BLESSING.',
    slug: 'sister-manpreet-deliverance',
    imageFallback: '/figma-assets/6b7f869d048b1af39a42b08c4bacff57cb6ed577.png',
    buttonLabel: 'READ FULL TESTIMONY',
  },
  {
    id: 'testimony-5',
    person: 'Brother Harjit Singh',
    title: 'Delivered from 12 Years of Severe Substance Addiction & Depression',
    summary:
      'BOUND IN ALCOHOLISM AND SUICIDAL DEPRESSION, HIS LIFE WAS SHATTERED. AFTER COMMITTING TO FASTING AND PRAYER ON THE MOUNTAIN, HE WAS TOTALLY SET FREE AND TRANSFORMED.',
    slug: 'brother-harjit-deliverance',
    imageFallback: '/figma-assets/88fe21040a6d042f53b945fa5a996447efd6bcfd.png',
    buttonLabel: 'READ FULL TESTIMONY',
  },
  {
    id: 'testimony-6',
    person: 'Sister Jaswinder Kaur',
    title: 'Miraculous Childbirth Testimony after 8 Years of Barrenness',
    summary:
      'DOCTORS DECLARED IT MEDICALLY IMPOSSIBLE FOR HER TO CONCEIVE. SHE ANOINTED HERSELF AND WEPT BEFORE GOD AT PRAYER MOUNTAIN; WITHIN A YEAR, GOD BLESSED HER WITH A HEALTHY BABY BOY.',
    slug: 'sister-jaswinder-healing',
    imageFallback: '/figma-assets/6b7f869d048b1af39a42b08c4bacff57cb6ed577.png',
    buttonLabel: 'READ FULL TESTIMONY',
  },
]

export const TestimoniesSection: React.FC<TestimoniesSectionProps> = ({
  headerTitle = 'TESTIMONIES OF PRAYER MOUNTAIN',
  testimonies,
}) => {
  const activeTestimonies = testimonies && testimonies.length > 0 ? testimonies : DEFAULT_TESTIMONIES
  const count = activeTestimonies.length
  const [currentIndex, setCurrentIndex] = useState(0)
  const isHoveredRef = useRef(false)

  // Auto-sliding interval (advances every 4.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHoveredRef.current) {
        setCurrentIndex((prev) => (prev + 1) % count)
      }
    }, 4500)
    return () => clearInterval(timer)
  }, [count])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % count)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + count) % count)
  }

  // Get 2 visible items for desktop, starting at currentIndex
  const visibleIndices = [
    currentIndex,
    (currentIndex + 1) % count,
  ]

  return (
    <section className="relative overflow-hidden select-none" data-node-id="279:2081">
      {/* Luminous Sapphire Header Bar */}
      <EditorialSectionHeader
        title={headerTitle}
        variant="atmospheric"
      />

      <SacredCanvas tone="pure-light" className="pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 md:pb-20">
        <div
          className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative"
          onMouseEnter={() => {
            isHoveredRef.current = true
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false
          }}
        >
          {/* Carousel Stage Wrapper */}
          <div className="relative max-w-[1180px] mx-auto">
            {/* Left Nav Arrow Button */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute -left-3 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#122f4a] hover:bg-[#0c1f32] text-white flex items-center justify-center shadow-xl border border-white/20 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Previous testimony"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Nav Arrow Button */}
            <button
              type="button"
              onClick={nextSlide}
              className="absolute -right-3 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#122f4a] hover:bg-[#0c1f32] text-white flex items-center justify-center shadow-xl border border-white/20 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Next testimony"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Cards Grid / Carousel View */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-8">
              {/* Card 1 (Mobile & Desktop) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`card-0-${currentIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  <TestimonyCard item={activeTestimonies[visibleIndices[0]]} />
                </motion.div>
              </AnimatePresence>

              {/* Card 2 (Desktop only) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`card-1-${currentIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full hidden md:block"
                >
                  <TestimonyCard item={activeTestimonies[visibleIndices[1]]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {activeTestimonies.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === i
                    ? 'w-7 sm:w-9 h-1.5 sm:h-2 bg-[#efbf04]'
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimony slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </SacredCanvas>
    </section>
  )
}

const TestimonyCard: React.FC<{ item: TestimonyItem }> = ({ item }) => {
  const photoUrl = getMediaUrl(
    item.image,
    item.imageFallback || '/figma-assets/88fe21040a6d042f53b945fa5a996447efd6bcfd.png'
  )
  const targetUrl = item.slug
    ? item.slug.startsWith('/')
      ? item.slug
      : `/testimonials/${item.slug}`
    : '/testimonials'

  return (
    <div className="h-full bg-[#003471] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-[0px_8px_24px_rgba(0,52,113,0.14)] hover:shadow-2xl transition-all duration-300 flex flex-row items-stretch group border border-[#002855]">
      {/* Left Photo */}
      <Link
        href={targetUrl}
        className="relative w-[38%] sm:w-[42%] md:w-[44%] lg:w-[42%] self-stretch min-h-[180px] sm:min-h-[250px] shrink-0 bg-[#001f42] block overflow-hidden"
      >
        <Image
          src={photoUrl}
          alt={item.person}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 40vw, (max-width: 1024px) 250px, 280px"
        />
      </Link>

      {/* Right Content */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between flex-1 text-white text-left min-w-0 space-y-3 sm:space-y-4">
        <div className="space-y-1.5 sm:space-y-2">
          <span className="font-poppins font-bold text-[#efbf04] text-[11px] sm:text-xs uppercase tracking-wider block">
            {item.person}
          </span>
          <p className="font-poppins text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-snug sm:leading-relaxed text-white/95 line-clamp-4 sm:line-clamp-5">
            {item.summary}
          </p>
        </div>

        {/* Read Full Testimony Link */}
        <div className="pt-1">
          <Link
            href={targetUrl}
            className="w-full sm:w-auto bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-poppins font-bold text-[10px] xs:text-[11px] sm:text-[12px] px-3.5 py-2 sm:py-2.5 rounded-[8px] uppercase tracking-wider inline-flex items-center justify-center gap-1 sm:gap-1.5 transition-all shadow-md hover:shadow-lg cursor-pointer group-hover:bg-[#f3c81a] text-center"
          >
            <span>{item.buttonLabel || 'READ FULL TESTIMONY'}</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 hidden xs:inline-block" />
          </Link>
        </div>
      </div>
    </div>
  )
}
