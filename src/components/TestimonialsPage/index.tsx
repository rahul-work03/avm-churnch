'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'
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
                    <div className="pt-2">
                      <Link
                        href={`/testimonials/${item.slug}`}
                        className="w-full sm:w-auto bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-semibold text-[13px] px-5 py-2.5 rounded-[8px] uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-all shadow-md hover:shadow-lg cursor-pointer"
                      >
                        <span>Read Full Testimony</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
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
            <div className="pt-2 flex items-center justify-center">
              <Link
                href={ctaButton1Url}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#003471] hover:bg-[#002552] text-white font-medium text-sm transition text-center shadow"
              >
                {ctaButton1Label}
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  )
}

export default TestimonialsPage
