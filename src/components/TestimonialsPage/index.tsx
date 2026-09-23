'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Testimony, testimonialsData } from '@/data/testimonialsData'
import { TextWordReveal, BlurTextReveal, GoldBarReveal } from '@/components/ui/text-reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface TestimonialsPageGlobalData {
  headerTitle?: string | null
  headerSubtitle?: string | null
  ctaTitle?: string | null
  ctaQuote?: string | null
  ctaButton1Label?: string | null
  ctaButton1Url?: string | null
}

interface TestimonialsPageProps {
  testimonials?: Testimony[]
  pageData?: TestimonialsPageGlobalData
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  testimonials,
  pageData,
}) => {
  const activeTestimonials =
    testimonials && testimonials.length > 0 ? testimonials : testimonialsData

  const headerTitle = pageData?.headerTitle || 'Wonderful Testimonies'
  const headerSubtitle =
    pageData?.headerSubtitle ||
    'Jesus Christ: The Same Forever · Meet Jehovah Rapha, Our Healer · Undeniable Evidence of His Power'
  const ctaTitle = pageData?.ctaTitle || 'Have a Testimony to Share?'
  const ctaQuote =
    pageData?.ctaQuote ||
    '“They overcame him by the blood of the Lamb and by the word of their testimony.” — Revelation 12:11'
  const ctaButton1Label = pageData?.ctaButton1Label || 'Submit Prayer Request'
  const ctaButton1Url = pageData?.ctaButton1Url || '/prayer-request'

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#344054] antialiased pt-28 pb-16 sm:pt-36 sm:pb-24 select-none">
      {/* 1. Full-Width Edge-to-Edge Title Header with Golden Bars */}
      <div className="w-full overflow-hidden text-center space-y-3 mb-10 sm:mb-14">
        <div className="w-full flex items-center justify-between">
          <GoldBarReveal
            direction="left"
            duration={0.6}
            delay={0.1}
            className="flex-1 self-center h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm"
          />
          <div className="flex-initial self-center max-w-[80%] sm:max-w-none px-2 sm:px-4 md:px-8 text-center">
            <TextWordReveal
              as="h1"
              className="text-base sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-[#003471] tracking-tight justify-center uppercase leading-tight line-clamp-2"
            >
              {headerTitle}
            </TextWordReveal>
          </div>
          <GoldBarReveal
            direction="right"
            duration={0.6}
            delay={0.1}
            className="flex-1 self-center h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm"
          />
        </div>
        <div className="max-w-3xl mx-auto px-4">
          <BlurTextReveal
            as="p"
            className="text-sm sm:text-base text-[#667085] font-normal leading-relaxed justify-center"
            delay={0.2}
          >
            {headerSubtitle}
          </BlurTextReveal>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 space-y-10 sm:space-y-12">
        {/* 2-Column Responsive Grid with Framer Motion Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {activeTestimonials.map((item) => {
            const imageUrl = getMediaUrl(
              item.image,
              item.imageFallback ||
                (typeof item.image === 'string' ? item.image : '/figma-assets/88fe21040a6d042f53b945fa5a996447efd6bcfd.png')
            )

            return (
              <motion.div
                key={item.id || item.slug}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div className="h-full bg-[#003471] rounded-[12px] sm:rounded-[16px] overflow-hidden shadow-[0px_8px_20px_rgba(0,52,113,0.12)] hover:shadow-2xl transition-all duration-300 flex flex-row items-stretch group border border-[#002855]">
                  {/* Left Side: Miracle Image Poster */}
                  <Link
                    href={`/testimonials/${item.slug}`}
                    className="relative w-[38%] sm:w-[42%] md:w-[45%] lg:w-[42%] self-stretch min-h-[160px] sm:min-h-[240px] shrink-0 bg-[#001f42] block overflow-hidden"
                  >
                    <Image
                      src={imageUrl}
                      alt={item.title || item.person}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 40vw, (max-width: 1024px) 250px, 270px"
                    />
                  </Link>

                  {/* Right Side: Content Box */}
                  <div className="p-3 xs:p-4 sm:p-5 md:p-6 flex flex-col justify-between flex-1 text-white min-w-0 space-y-2 sm:space-y-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <p className="font-poppins text-[11px] xs:text-[12px] sm:text-[14px] md:text-[15px] font-normal leading-snug sm:leading-relaxed text-white/95 line-clamp-4 sm:line-clamp-5">
                        {item.shortDescription}
                      </p>
                    </div>

                    {/* Read Full Testimony Action */}
                    <div className="pt-1 sm:pt-2">
                      <Link
                        href={`/testimonials/${item.slug}`}
                        className="w-full sm:w-auto bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-poppins font-bold text-[10px] xs:text-[11px] sm:text-[13px] px-3 sm:px-5 py-2 sm:py-2.5 rounded-[6px] sm:rounded-[8px] uppercase tracking-wider inline-flex items-center justify-center gap-1 sm:gap-1.5 transition-all shadow-md hover:shadow-lg cursor-pointer group-hover:bg-[#f3c81a] text-center"
                      >
                        <span>READ FULL TESTIMONY</span>
                        <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 hidden xs:inline-block" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Inspirational Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 bg-white border border-[#e5e7eb] rounded-[16px] p-6 sm:p-8 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-12 h-12 rounded-full bg-[#003471]/5 text-[#003471] flex items-center justify-center mx-auto"
          >
            <Sparkles className="w-6 h-6 text-[#efbf04]" />
          </motion.div>
          <TextWordReveal
            as="h2"
            className="text-xl sm:text-2xl font-bold text-[#003471] justify-center"
          >
            {ctaTitle}
          </TextWordReveal>
          <BlurTextReveal
            as="p"
            className="text-sm sm:text-base text-[#64748b] max-w-xl mx-auto italic justify-center"
            delay={0.15}
          >
            {ctaQuote}
          </BlurTextReveal>
          <div className="pt-2 flex items-center justify-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={ctaButton1Url}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#003471] hover:bg-[#002552] text-white font-medium text-sm transition text-center shadow inline-block"
              >
                {ctaButton1Label}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default TestimonialsPage
