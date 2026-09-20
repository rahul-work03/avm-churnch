'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Sparkles, Quote, ArrowRight, Share2, Check, ExternalLink } from 'lucide-react'
import { Testimony, testimonialsData } from '@/data/testimonialsData'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface TestimonialsPageGlobalData {
  headerTitle?: string | null
  headerSubtitle?: string | null
  ctaTitle?: string | null
  ctaQuote?: string | null
  ctaButton1Label?: string | null
  ctaButton1Url?: string | null
  ctaButton2Label?: string | null
  ctaButton2Url?: string | null
}

interface TestimonialsPageProps {
  testimonials?: Testimony[]
  pageData?: TestimonialsPageGlobalData
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  testimonials,
  pageData,
}) => {
  const activeTestimonials =
    testimonials && testimonials.length > 0 ? testimonials : testimonialsData
  const [selectedTestimony, setSelectedTestimony] = useState<Testimony | null>(null)
  const [copied, setCopied] = useState(false)

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
  const ctaButton2Label = pageData?.ctaButton2Label || 'Register for Zoom Lay Hand'
  const ctaButton2Url = pageData?.ctaButton2Url || '/zoom-lay-hand'

  const handleShare = (testimony: Testimony) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${testimony.title} - Read this powerful testimony from The Church of Signs and Wonders: ${typeof window !== 'undefined' ? `${window.location.origin}/testimonials/${testimony.slug}` : ''}`
      )
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#344054] antialiased pt-28 pb-16 sm:pt-36 sm:pb-24 select-none">
      {/* 1. Full-Width Edge-to-Edge Title Header with Golden Bars */}
      <RevealOnScroll direction="none" duration={0.6} className="w-full overflow-hidden text-center space-y-3 mb-10 sm:mb-14">
        <div className="w-full flex items-center justify-center">
          <div className="flex-1 h-[6px] sm:h-[8px] bg-[#efbf04]" />
          <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[34px] font-bold text-[#003471] tracking-tight px-4 sm:px-8 md:px-12 flex-shrink-0">
            {headerTitle}
          </h1>
          <div className="flex-1 h-[6px] sm:h-[8px] bg-[#efbf04]" />
        </div>
        <p className="text-sm sm:text-base text-[#667085] max-w-3xl mx-auto font-normal px-4">
          {headerSubtitle}
        </p>
      </RevealOnScroll>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 space-y-10 sm:space-y-12">
        {/* 2-Column Responsive Grid with Stagger Animation */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {activeTestimonials.map((item) => {
            const imageUrl = getMediaUrl(
              item.image,
              item.imageFallback ||
                (typeof item.image === 'string' ? item.image : '/figma-assets/88fe21040a6d042f53b945fa5a996447efd6bcfd.png')
            )

            return (
              <StaggerItem key={item.id || item.slug} className="h-full">
                <div className="h-full bg-[#003471] rounded-[16px] overflow-hidden shadow-[0px_8px_20px_rgba(0,52,113,0.12)] hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row group border border-[#002855]">
                  {/* Left Side: Miracle Image Poster */}
                  <Link
                    href={`/testimonials/${item.slug}`}
                    className="w-full sm:w-[240px] md:w-[270px] h-[220px] sm:h-[260px] relative overflow-hidden flex-shrink-0 bg-[#001f42] block"
                  >
                    <Image
                      src={imageUrl}
                      alt={item.title || item.person}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003471]/60 via-transparent to-transparent sm:hidden" />
                  </Link>

                  {/* Right Side: Content Box */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 text-white space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-xs text-[#efbf04] font-medium tracking-wide">
                        {item.category || 'Supernatural Healing'}
                      </span>
                      <p className="text-sm sm:text-[15px] font-normal leading-relaxed text-white/95 line-clamp-4">
                        {item.shortDescription}
                      </p>
                    </div>

                    {/* Read Full Testimony Action */}
                    <div className="pt-2 flex items-center gap-3">
                      <Link
                        href={`/testimonials/${item.slug}`}
                        className="w-full sm:w-auto bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-semibold text-[13px] px-5 py-2.5 rounded-[8px] uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-all shadow-md hover:shadow-lg cursor-pointer"
                      >
                        <span>Read Full Testimony</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={() => setSelectedTestimony(item)}
                        title="Quick Preview"
                        className="hidden sm:inline-flex p-2.5 rounded-[8px] bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Bottom Inspirational Quote Banner */}
        <RevealOnScroll direction="up" duration={0.6}>
          <div className="mt-12 bg-white border border-[#e5e7eb] rounded-[16px] p-6 sm:p-8 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#003471]/5 text-[#003471] flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6 text-[#efbf04]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#003471]">
              {ctaTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] max-w-xl mx-auto">
              {ctaQuote}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={ctaButton1Url}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#003471] hover:bg-[#002552] text-white font-medium text-sm transition text-center shadow"
              >
                {ctaButton1Label}
              </Link>
              <Link
                href={ctaButton2Url}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-[#003471] text-[#003471] hover:bg-[#003471]/5 font-medium text-sm transition text-center"
              >
                {ctaButton2Label}
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Modal Dialog for Quick Preview Story */}
      {selectedTestimony && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[20px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col relative">
            {/* Header with Close */}
            <div className="sticky top-0 bg-white border-b border-slate-100 p-4 sm:p-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#efbf04]/20 text-[#003471] text-xs font-bold uppercase tracking-wider">
                  {selectedTestimony.category || 'Supernatural Healing'}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#003471] truncate max-w-[300px] sm:max-w-md">
                  {selectedTestimony.person}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTestimony(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Poster Image */}
              <div className="relative w-full h-[240px] sm:h-[320px] rounded-[12px] overflow-hidden bg-slate-900 shadow-md">
                <Image
                  src={getMediaUrl(
                    selectedTestimony.image,
                    selectedTestimony.imageFallback ||
                      (typeof selectedTestimony.image === 'string'
                        ? selectedTestimony.image
                        : '/figma-assets/88fe21040a6d042f53b945fa5a996447efd6bcfd.png')
                  )}
                  alt={selectedTestimony.title || selectedTestimony.person}
                  fill
                  className="object-contain bg-slate-950"
                />
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#003471] leading-tight">
                {selectedTestimony.title}
              </h2>

              {/* Hindi Highlight */}
              <div className="p-4 bg-[#f8fafc] border-l-4 border-[#efbf04] rounded-r-lg">
                <p className="text-sm sm:text-base text-[#344054] font-medium leading-relaxed">
                  {selectedTestimony.hindiHeadline}
                </p>
              </div>

              {/* English Narrative */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  Full Miracle
                </h4>
                <p className="text-sm sm:text-base text-[#475467] leading-relaxed">
                  {selectedTestimony.fullStory}
                </p>
              </div>

              {/* Scripture Verse */}
              {selectedTestimony.verse && (
                <div className="p-4 bg-[#003471]/5 border border-[#003471]/10 rounded-xl flex items-start gap-3">
                  <Quote className="w-5 h-5 text-[#003471] flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm italic text-[#003471] font-medium">
                    {selectedTestimony.verse}
                  </p>
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="sticky bottom-0 bg-slate-50 border-t border-slate-100 p-4 sm:p-5 flex items-center justify-between gap-3">
              <button
                onClick={() => handleShare(selectedTestimony)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Share'}</span>
              </button>

              <div className="flex items-center gap-2">
                <Link
                  href={`/testimonials/${selectedTestimony.slug}`}
                  className="px-4 py-2 rounded-lg bg-[#003471] hover:bg-[#002855] text-white font-medium text-xs sm:text-sm transition cursor-pointer"
                >
                  Open Dedicated Page
                </Link>
                <button
                  onClick={() => setSelectedTestimony(null)}
                  className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs sm:text-sm transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default TestimonialsPage
