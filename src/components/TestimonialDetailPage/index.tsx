'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronLeft, ChevronRight, Share2, Check, Sparkles, Quote, BookOpen } from 'lucide-react'
import { Testimony, testimonialsData, getTestimonyBySlug } from '@/data/testimonialsData'
import { TextWordReveal, BlurTextReveal, GoldBarReveal } from '@/components/ui/text-reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

interface TestimonialDetailPageProps {
  slug?: string
  initialTestimony?: Testimony
  allTestimonials?: Testimony[]
}

export const TestimonialDetailPage: React.FC<TestimonialDetailPageProps> = ({
  slug,
  initialTestimony,
  allTestimonials,
}) => {
  const testimonialsList =
    allTestimonials && allTestimonials.length > 0 ? allTestimonials : testimonialsData

  const currentTestimony =
    initialTestimony ||
    (slug
      ? testimonialsList.find((t) => t.slug === slug || String(t.id) === slug) ||
        getTestimonyBySlug(slug)
      : undefined) ||
    testimonialsList[0]

  const currentIndex = testimonialsList.findIndex(
    (t) => t.slug === currentTestimony.slug || String(t.id) === String(currentTestimony.id)
  )

  const prevTestimony =
    currentIndex > 0
      ? testimonialsList[currentIndex - 1]
      : testimonialsList[testimonialsList.length - 1]

  const nextTestimony =
    currentIndex >= 0 && currentIndex < testimonialsList.length - 1
      ? testimonialsList[currentIndex + 1]
      : testimonialsList[0]

  const [copied, setCopied] = useState(false)
  const [showFullAccount, setShowFullAccount] = useState(false)

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${currentTestimony.title} - Read this powerful testimony from The Church of Signs and Wonders: ${typeof window !== 'undefined' ? window.location.href : ''}`
      )
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const currentImageUrl = getMediaUrl(
    currentTestimony.image,
    currentTestimony.imageFallback ||
      (typeof currentTestimony.image === 'string'
        ? currentTestimony.image
        : '/figma-assets/88fe21040a6d042f53b945fa5a996447efd6bcfd.png')
  )

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#344054] antialiased pt-28 pb-16 sm:pt-36 sm:pb-24 select-none">
      {/* 1. Full-Width Edge-to-Edge Title Header with Golden Bars */}
      <div className="w-full overflow-hidden text-center space-y-3 mb-10 sm:mb-14">
        <div className="w-full flex items-center justify-between">
          <GoldBarReveal
            direction="left"
            duration={0.6}
            delay={0.1}
            className="flex-1 h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm"
          />
          <div className="flex-1 min-w-0 px-2 sm:px-4 md:px-8 text-center">
            <TextWordReveal
              as="h1"
              className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold text-[#003471] tracking-tight justify-center"
            >
              Wonderful Testimonies
            </TextWordReveal>
          </div>
          <GoldBarReveal
            direction="right"
            duration={0.6}
            delay={0.1}
            className="flex-1 h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm"
          />
        </div>
        <div className="max-w-3xl mx-auto px-4">
          <BlurTextReveal
            as="p"
            className="text-sm sm:text-base text-[#667085] font-normal leading-relaxed justify-center"
            delay={0.2}
          >
            Jesus Christ: The Same Forever · Meet Jehovah Rapha, Our Healer · Undeniable Evidence of His Power
          </BlurTextReveal>
        </div>
      </div>

      {/* 2. Main Content Area */}
      <div className="max-w-[850px] mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        {/* Navigation Breadcrumb / Back Link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between gap-4"
        >
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#003471] hover:text-[#00224a] bg-white border border-[#e5e7eb] px-4 py-2 rounded-lg shadow-sm hover:shadow transition cursor-pointer hover:border-[#003471]/30"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all Testimonies</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#003471] bg-white border border-[#e5e7eb] px-3.5 py-2 rounded-lg shadow-sm hover:bg-slate-50 transition cursor-pointer hover:border-[#003471]/30"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
          </div>
        </motion.div>

        {/* 3. Hero Feature Poster */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[850/593] rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-2xl bg-[#0b0c1c] border border-slate-200/80 group"
        >
          <Image
            src={currentImageUrl}
            alt={currentTestimony.title || currentTestimony.person}
            fill
            priority
            className="object-contain sm:object-cover object-top"
          />
        </motion.div>

        {/* 4. Hindi Miracle Headline */}
        <div className="text-center px-2">
          <BlurTextReveal
            as="p"
            className="text-lg sm:text-xl md:text-[24px] font-medium text-[#003471] leading-relaxed max-w-[754px] mx-auto justify-center"
            delay={0.1}
          >
            {currentTestimony.hindiHeadline}
          </BlurTextReveal>
        </div>

        {/* 5. English Translation Headline */}
        <div className="text-center px-2">
          <BlurTextReveal
            as="p"
            className="text-sm sm:text-base md:text-[18px] font-medium text-[#003471] leading-relaxed max-w-[754px] mx-auto uppercase tracking-wide justify-center"
            delay={0.15}
          >
            {`“${currentTestimony.englishHeadline}”`}
          </BlurTextReveal>
        </div>

        {/* 6. Expandable Full Miracle Narrative & Scripture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-[#e5e7eb] rounded-[16px] p-6 sm:p-8 space-y-5 shadow-sm"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#efbf04]" />
              <h3 className="text-base sm:text-lg font-bold text-[#003471]">
                Full Miracle Testimony
              </h3>
            </div>
            <button
              onClick={() => setShowFullAccount(!showFullAccount)}
              className="text-xs sm:text-sm font-semibold text-[#003471] hover:underline cursor-pointer"
            >
              {showFullAccount ? 'Show Less' : 'Read More Details'}
            </button>
          </div>

          <p
            className={`text-sm sm:text-base text-[#475467] leading-relaxed transition-all duration-300 ${
              showFullAccount ? '' : 'line-clamp-3'
            }`}
          >
            {currentTestimony.fullStory}
          </p>

          {currentTestimony.verse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 bg-[#003471]/5 border border-[#003471]/10 rounded-xl flex items-start gap-3"
            >
              <Quote className="w-5 h-5 text-[#003471] flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm italic text-[#003471] font-medium">
                {currentTestimony.verse}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* 7. Next & Prev Story Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200"
        >
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <Link
              href={`/testimonials/${prevTestimony.slug}`}
              className="flex items-center gap-3 p-4 bg-white border border-[#e5e7eb] rounded-xl hover:border-[#003471]/30 hover:shadow-md transition group text-left cursor-pointer h-full"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#003471] group-hover:bg-[#003471] group-hover:text-white transition flex-shrink-0">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">
                  Previous Story
                </span>
                <p className="text-sm font-bold text-[#003471] truncate">
                  {prevTestimony.person}
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <Link
              href={`/testimonials/${nextTestimony.slug}`}
              className="flex items-center justify-end gap-3 p-4 bg-white border border-[#e5e7eb] rounded-xl hover:border-[#003471]/30 hover:shadow-md transition group text-right cursor-pointer h-full"
            >
              <div className="min-w-0">
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">
                  Next Story
                </span>
                <p className="text-sm font-bold text-[#003471] truncate">
                  {nextTestimony.person}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#003471] group-hover:bg-[#003471] group-hover:text-white transition flex-shrink-0">
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* 8. Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#003471] text-white rounded-[16px] p-6 sm:p-8 text-center space-y-4 shadow-lg hover:shadow-xl transition-shadow"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto"
          >
            <Sparkles className="w-6 h-6 text-[#efbf04]" />
          </motion.div>
          <TextWordReveal
            as="h3"
            className="text-xl sm:text-2xl font-bold text-white justify-center"
          >
            Experience Your Miracle Today
          </TextWordReveal>
          <BlurTextReveal
            as="p"
            className="text-sm sm:text-base text-white/80 max-w-lg mx-auto justify-center"
            delay={0.15}
          >
            God is no respecter of persons. What He has done for others, He will surely do for you.
          </BlurTextReveal>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/prayer-request"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-semibold text-sm transition text-center shadow inline-block"
              >
                Send Prayer Request
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default TestimonialDetailPage
