import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const FaithResourcesSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 md:py-18 bg-white overflow-hidden" data-node-id="275:810">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Dual Overlapping Images Showcase (Figma 275:991 & 275:992) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[460px] lg:min-h-[500px]">
            <div className="relative w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[600px] h-[280px] sm:h-[380px] md:h-[440px] lg:h-[460px] mx-auto">
              {/* Background Book Image (Figma 275:991) */}
              <div className="absolute left-2 sm:left-4 lg:left-0 top-0 w-[180px] sm:w-[250px] md:w-[310px] lg:w-[350px] h-[210px] sm:h-[290px] md:h-[350px] lg:h-[390px] rounded-[8px] overflow-hidden shadow-lg sm:shadow-xl border border-slate-100 bg-slate-900 group">
                <Image
                  src="/figma-assets/5015189f303ab5f84079babded9d65c9ccc48184.png"
                  alt="Faith teachings and scripture study materials"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Foreground Holy Bible Image (Figma 275:992) */}
              <div className="absolute right-2 sm:right-4 lg:right-auto lg:left-[130px] top-[60px] sm:top-[80px] md:top-[100px] lg:top-[90px] w-[180px] sm:w-[250px] md:w-[310px] lg:w-[350px] h-[210px] sm:h-[290px] md:h-[350px] lg:h-[390px] rounded-[8px] overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-900 group z-10">
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

          {/* Text & Store CTA (Figma 275:827, 275:855, 275:986) */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            {/* Heading (Figma 275:827) */}
            <h2 className="font-poppins font-semibold text-[#003471] text-2xl sm:text-3xl md:text-[38px] leading-tight tracking-tight">
              Faith Resources
            </h2>

            {/* Description Text (Figma 275:855) */}
            <p className="font-poppins text-[#333333] text-sm sm:text-base md:text-[18px] leading-relaxed mt-3 sm:mt-5 max-w-[420px]">
              Explore books, teachings, and spiritual resources that will strengthen your walk with God.
            </p>

            {/* Store Button (Figma 275:986, 275:987, 275:988: 240px x 58px rounded-[100px]) */}
            <div className="mt-6 sm:mt-8 w-full sm:w-auto">
              <Link
                href="/store"
                className="inline-flex items-center justify-center bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-poppins font-semibold text-sm sm:text-base md:text-[18px] w-full sm:w-[220px] md:w-[240px] h-[48px] sm:h-[54px] md:h-[58px] rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
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
