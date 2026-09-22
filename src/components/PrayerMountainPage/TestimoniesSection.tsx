'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/reveal'
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

export const TestimoniesSection: React.FC<TestimoniesSectionProps> = ({
  headerTitle = 'TESTIMONIES OF PRAYER MOUTAIN',
  testimonies,
}) => {
  const activeTestimonies = testimonies && testimonies.length > 0 ? testimonies : DEFAULT_TESTIMONIES

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white overflow-hidden select-none" data-node-id="279:2081">
      {/* Dark Navy Section Header Bar */}
      <RevealOnScroll direction="none" duration={0.6} className="bg-[#122f4a] py-4 sm:py-5 md:py-6 text-white relative shadow-sm mb-8 sm:mb-12">
        <div className="w-full flex items-center justify-between">
          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

          <h2 className="font-poppins font-semibold text-white text-sm sm:text-2xl md:text-[28px] text-center px-3 sm:px-8 md:px-12 tracking-wide uppercase flex-shrink min-w-0">
            {headerTitle}
          </h2>

          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
        </div>
      </RevealOnScroll>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Cards Grid */}
        <StaggerContainer
          staggerDelay={0.15}
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
              <StaggerItem key={item.id || item.slug || index} className="h-full">
                <div className="h-full bg-[#122f4a] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-xl flex flex-col sm:flex-row items-stretch group border border-white/5 transition-transform duration-300 hover:shadow-2xl">
                  {/* Left Photo */}
                  <div className="relative w-full sm:w-[42%] min-h-[220px] sm:min-h-full self-stretch shrink-0 bg-slate-900 overflow-hidden">
                    <Image
                      src={photoUrl}
                      alt={item.person}
                      fill
                      className="object-cover object-center sm:object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="p-6 sm:p-7 md:p-8 flex flex-col justify-between flex-1 text-white text-left">
                    <div>
                      <p className="font-poppins text-white text-sm sm:text-[15px] md:text-[16px] leading-relaxed mb-6">
                        {item.summary}
                      </p>
                    </div>

                    {/* Read Full Testimony Link */}
                    <div className="mt-auto">
                      <Link
                        href={targetUrl}
                        className="inline-flex w-[180px] h-[49px] bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-poppins font-semibold text-xs sm:text-[13px] rounded-[8px] shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-95 cursor-pointer items-center justify-center uppercase tracking-wider"
                      >
                        {item.buttonLabel || 'READ FULL TESTIMONY'}
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}


