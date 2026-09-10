'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight, Share2, Check, Sparkles, Quote, BookOpen } from 'lucide-react'
import { Testimony, testimonialsData, getTestimonyBySlug } from '@/data/testimonialsData'

interface TestimonialDetailPageProps {
  slug?: string
  initialTestimony?: Testimony
}

export const TestimonialDetailPage: React.FC<TestimonialDetailPageProps> = ({
  slug,
  initialTestimony,
}) => {
  const currentTestimony =
    initialTestimony ||
    (slug ? getTestimonyBySlug(slug) : undefined) ||
    testimonialsData[0]

  const currentIndex = testimonialsData.findIndex((t) => t.id === currentTestimony.id)
  const prevTestimony =
    currentIndex > 0 ? testimonialsData[currentIndex - 1] : testimonialsData[testimonialsData.length - 1]
  const nextTestimony =
    currentIndex < testimonialsData.length - 1 ? testimonialsData[currentIndex + 1] : testimonialsData[0]

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

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#344054] antialiased pt-28 pb-16 sm:pt-36 sm:pb-24 select-none">
      {/* 1. Full-Width Edge-to-Edge Title Header with Golden Bars (Figma 303:6455) */}
      <div className="w-full overflow-hidden text-center space-y-3 mb-10 sm:mb-14">
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
      </div>

      {/* 2. Main Content Area */}
      <div className="max-w-[850px] mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#003471] hover:text-[#00224a] bg-white border border-[#e5e7eb] px-4 py-2 rounded-lg shadow-sm hover:shadow transition"
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
        <div className="relative w-full aspect-[850/593] rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-2xl bg-[#0b0c1c] border border-slate-200/80 group">
          <Image
            src={currentTestimony.image}
            alt={currentTestimony.title}
            fill
            priority
            className="object-contain sm:object-cover object-top"
          />
        </div>

        {/* 4. Hindi Miracle Headline (Figma 303:6460) */}
        <div className="text-center px-2">
          <p className="text-lg sm:text-xl md:text-[24px] font-medium text-[#003471] leading-relaxed max-w-[754px] mx-auto">
            {currentTestimony.hindiHeadline}
          </p>
        </div>

        {/* 5. English Translation Headline (Figma 303:6461) */}
        <div className="text-center px-2">
          <p className="text-sm sm:text-base md:text-[18px] font-medium text-[#003471] leading-relaxed max-w-[754px] mx-auto uppercase tracking-wide">
            &ldquo;{currentTestimony.englishHeadline}&rdquo;
          </p>
        </div>

        {/* 6. Expandable Full Miracle Narrative & Scripture */}
        <div className="bg-white border border-[#e5e7eb] rounded-[16px] p-6 sm:p-8 space-y-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#efbf04]" />
              <h3 className="text-base sm:text-lg font-bold text-[#003471]">
                Full Miracle Testimony Account
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

        {/* 7. Next & Prev Story Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
          <Link
            href={`/testimonials/${prevTestimony.slug}`}
            className="flex items-center gap-3 p-4 bg-white border border-[#e5e7eb] rounded-xl hover:border-[#003471]/30 hover:shadow-md transition group text-left"
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
            className="flex items-center justify-end gap-3 p-4 bg-white border border-[#e5e7eb] rounded-xl hover:border-[#003471]/30 hover:shadow-md transition group text-right"
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

        {/* 8. Bottom Call to Action */}
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
            <Link
              href="/zoom-lay-hand"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 text-white font-medium text-sm transition text-center"
            >
              Join Zoom Lay Hand
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default TestimonialDetailPage
