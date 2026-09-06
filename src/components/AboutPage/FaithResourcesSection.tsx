import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const FaithResourcesSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 md:py-24 bg-white overflow-hidden" data-node-id="218:2319">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8" data-node-id="218:2259">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Dual Overlapping Images Showcase (Desktop: 218:2516 & 218:2517 | Mobile: 218:2260 & 218:2261) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[320px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
            <div className="relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[620px] h-[300px] sm:h-[400px] md:h-[460px] lg:h-[480px] mx-auto">
              {/* Background Image: Scripture Study / Books (Desktop: 218:2516, Mobile: 218:2260) */}
              <div
                className="absolute left-2 sm:left-4 lg:left-0 top-0 w-[190px] sm:w-[260px] md:w-[320px] lg:w-[367px] h-[210px] sm:h-[290px] md:h-[350px] lg:h-[400px] rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-lg sm:shadow-xl border border-slate-100 bg-slate-900 group"
                data-node-id="218:2516"
              >
                <Image
                  src="/figma-assets/5015189f303ab5f84079babded9d65c9ccc48184.png"
                  alt="Faith teachings and scripture study materials"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Foreground Image: Holy Bible / Spiritual Resources (Desktop: 218:2517, Mobile: 218:2261) */}
              <div
                className="absolute right-2 sm:right-4 lg:right-auto lg:left-[140px] top-[70px] sm:top-[90px] md:top-[110px] lg:top-[98px] w-[190px] sm:w-[260px] md:w-[320px] lg:w-[367px] h-[210px] sm:h-[290px] md:h-[350px] lg:h-[400px] rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-900 group z-10"
                data-node-id="218:2517"
              >
                <Image
                  src="/figma-assets/6febc49876ea0f4082d17b9f97eb203fb3eef625.png"
                  alt="Holy Bible spiritual faith resource"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Text & Store CTA (Desktop: 218:2336, 218:2364, 218:2511 | Mobile: 218:2262, 218:2263) */}
          <div
            className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start justify-center"
            data-node-id="218:2262"
          >
            {/* Heading (Node 218:2336) */}
            <h2
              className="font-poppins font-semibold text-[#003471] text-2xl sm:text-3xl md:text-[38px] leading-tight tracking-tight"
              data-node-id="218:2336"
            >
              Faith Resources
            </h2>

            {/* Description Text (Node 218:2364) */}
            <p
              className="font-poppins text-[#333333] text-sm sm:text-base md:text-[18px] leading-relaxed mt-3 sm:mt-5 max-w-[420px]"
              data-node-id="218:2364"
            >
              Explore books, teachings, and spiritual resources that will strengthen your walk with God.
            </p>

            {/* Store Button (Desktop: 218:2511 | Mobile: 218:2263) */}
            <div className="mt-6 sm:mt-8 w-full sm:w-auto" data-node-id="218:2511">
              <Link
                href="/store"
                className="inline-flex items-center justify-center bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-poppins font-semibold text-sm sm:text-base md:text-[18px] w-full sm:w-[220px] md:w-[240px] h-[48px] sm:h-[54px] md:h-[58px] rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                data-node-id="218:2263"
              >
                Visit the Store Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
