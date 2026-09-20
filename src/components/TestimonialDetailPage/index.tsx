'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight, Share2, Check, Sparkles, Quote, BookOpen } from 'lucide-react'
import { Testimony, testimonialsData, getTestimonyBySlug } from '@/data/testimonialsData'
import { RevealOnScroll } from '@/components/ui/reveal'
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
      {/* 1. Full-Width Edge-to-Edge Title Header with Golden Bars (Figma 303:6455) */}
      <RevealOnScroll direction="none" duration={0.6} className="w-full overflow-hidden text-center space-y-3 mb-10 sm:mb-14">
        <div className="w-full flex items-center justify-center">
          <div className="flex-1 h-[6px] sm:h-[8px] bg-[#efbf04]" />
          <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[34px] font-bold text-[#003471] tracking-tight px-4 sm:px-8 md:px-12 flex-shrink-0">
            Wonderful Testimonies
          </h1>
          <div className="flex-1 h-[6px] sm:h-[8px] bg-[#efbf04]" />
        </div>
        <p className="text-sm sm:text-base text-[#667085] max-w-3xl mx-auto font-normal px-4">
          Jesus Christ: The Same Forever · Meet Jehovah Rapha, Our Healer · Undeniable Evidence of His Power
        </p>
      </RevealOnScroll>

      {/* 2. Main Content Area */}
      <div className="max-w-[850px] mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#003471] hover:text-[#00224a] bg-white border border-[#e5e7eb] px-4 py-2 rounded-lg shadow-sm hover:shadow transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all Testimonies</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#003471] bg-white border border-[#e5e7eb] px-3.5 py-2 rounded-lg shadow-sm hover:bg-slate-50 transition cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* 3. Hero Feature Poster (Figma 303:6459 - 850x593px) */}
        <RevealOnScroll direction="up" duration={0.6}>
          <div className="relative w-full aspect-[850/593] rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-2xl bg-[#0b0c1c] border border-slate-200/80 group">
            <Image
              src={currentImageUrl}
              alt={currentTestimony.title || currentTestimony.person}
              fill
              priority
              className="object-contain sm:object-cover object-top"
            />
          </div>
        </RevealOnScroll>

        {/* 4. Hindi Miracle Headline (Figma 303:6460) */}
        <RevealOnScroll direction="up" delay={0.1}>
          <div className="text-center px-2">
            <p className="text-lg sm:text-xl md:text-[24px] font-medium text-[#003471] leading-relaxed max-w-[754px] mx-auto">
              {currentTestimony.hindiHeadline}
            </p>
          </div>
        </RevealOnScroll>

        {/* 5. English Translation Headline (Figma 303:6461) */}
        <RevealOnScroll direction="up" delay={0.15}>
          <div className="text-center px-2">
            <p className="text-sm sm:text-base md:text-[18px] font-medium text-[#003471] leading-relaxed max-w-[754px] mx-auto uppercase tracking-wide">
              &ldquo;{currentTestimony.englishHeadline}&rdquo;
            </p>
          </div>
        </RevealOnScroll>

        {/* 6. Expandable Full Miracle Narrative & Scripture */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="bg-white border border-[#e5e7eb] rounded-[16px] p-6 sm:p-8 space-y-5 shadow-sm">
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
              className={`text-sm sm:text-base text-[#475467] leading-relaxed ${
                showFullAccount ? '' : 'line-clamp-3'
              }`}
            >
              {currentTestimony.fullStory}
            </p>

            {currentTestimony.verse && (
              <div className="p-4 bg-[#003471]/5 border border-[#003471]/10 rounded-xl flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#003471] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm italic text-[#003471] font-medium">
                  {currentTestimony.verse}
                </p>
              </div>
            )}
          </div>
        </RevealOnScroll>

        {/* 7. Next & Prev Story Switcher */}
        <RevealOnScroll direction="up" delay={0.25}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
            <Link
              href={`/testimonials/${prevTestimony.slug}`}
              className="flex items-center gap-3 p-4 bg-white border border-[#e5e7eb] rounded-xl hover:border-[#003471]/30 hover:shadow-md transition group text-left cursor-pointer"
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

            <Link
              href={`/testimonials/${nextTestimony.slug}`}
              className="flex items-center justify-end gap-3 p-4 bg-white border border-[#e5e7eb] rounded-xl hover:border-[#003471]/30 hover:shadow-md transition group text-right cursor-pointer"
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
          </div>
        </RevealOnScroll>

        {/* 8. Bottom Call to Action */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="bg-[#003471] text-white rounded-[16px] p-6 sm:p-8 text-center space-y-4 shadow-lg">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6 text-[#efbf04]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Experience Your Miracle Today
            </h3>
            <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto">
              God is no respecter of persons. What He has done for others, He will surely do for you.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/prayer-request"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-semibold text-sm transition text-center shadow"
              >
                Send Prayer Request
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  )
}

export default TestimonialDetailPage
