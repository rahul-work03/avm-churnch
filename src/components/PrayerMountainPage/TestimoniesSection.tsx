'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { TextWordReveal, GoldBarReveal } from '@/components/ui/text-reveal'
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
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.97,
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

export const TestimoniesSection: React.FC<TestimoniesSectionProps> = ({
  headerTitle = 'TESTIMONIES OF PRAYER MOUNTAIN',
  testimonies,
}) => {
  const activeTestimonies = testimonies && testimonies.length > 0 ? testimonies : DEFAULT_TESTIMONIES

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white overflow-hidden select-none" data-node-id="279:2081">
      {/* Dark Navy Section Header Bar */}
      <div className="bg-[#122f4a] py-4 sm:py-5 md:py-6 text-white relative shadow-sm mb-8 sm:mb-12">
        <div className="w-full flex items-center justify-between">
          <GoldBarReveal
            direction="left"
            className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0"
          />

          <div className="flex-1 min-w-0 px-2 sm:px-4 md:px-8 text-center">
            <TextWordReveal
              as="h2"
              delay={0.05}
              staggerDelay={0.035}
              className="font-poppins font-semibold text-white text-sm sm:text-2xl md:text-[28px] tracking-wide uppercase line-clamp-2"
            >
              {headerTitle}
            </TextWordReveal>
          </div>

          <GoldBarReveal
            direction="right"
            className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0"
          />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-[1160px] mx-auto"
        >
          {activeTestimonies.map((item, index) => {
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
              <motion.div
                key={item.id || item.slug || index}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="h-full"
              >
                <div className="h-full bg-[#003471] rounded-[12px] sm:rounded-[16px] overflow-hidden shadow-[0px_8px_20px_rgba(0,52,113,0.12)] hover:shadow-2xl transition-all duration-300 flex flex-row items-stretch group border border-[#002855]">
                  {/* Left Photo */}
                  <Link
                    href={targetUrl}
                    className="relative w-[38%] sm:w-[42%] md:w-[45%] lg:w-[42%] self-stretch min-h-[160px] sm:min-h-[240px] shrink-0 bg-[#001f42] block overflow-hidden"
                  >
                    <Image
                      src={photoUrl}
                      alt={item.person}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 40vw, (max-width: 1024px) 250px, 270px"
                    />
                  </Link>

                  {/* Right Content */}
                  <div className="p-3 xs:p-4 sm:p-5 md:p-6 flex flex-col justify-between flex-1 text-white text-left min-w-0 space-y-2 sm:space-y-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <p className="font-poppins text-[11px] xs:text-[12px] sm:text-[14px] md:text-[15px] font-normal leading-snug sm:leading-relaxed text-white/95 line-clamp-4 sm:line-clamp-5">
                        {item.summary}
                      </p>
                    </div>

                    {/* Read Full Testimony Link */}
                    <div className="pt-1 sm:pt-2">
                      <Link
                        href={targetUrl}
                        className="w-full sm:w-auto bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-poppins font-bold text-[10px] xs:text-[11px] sm:text-[13px] px-3 sm:px-5 py-2 sm:py-2.5 rounded-[6px] sm:rounded-[8px] uppercase tracking-wider inline-flex items-center justify-center gap-1 sm:gap-1.5 transition-all shadow-md hover:shadow-lg cursor-pointer group-hover:bg-[#f3c81a] text-center"
                      >
                        <span>{item.buttonLabel || 'READ FULL TESTIMONY'}</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 hidden xs:inline-block" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}


