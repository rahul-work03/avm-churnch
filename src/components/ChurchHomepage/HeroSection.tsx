import React from 'react'
import Image from 'next/image'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 overflow-hidden" data-node-id="238:1722">
      {/* Header Title with Flanking Gold Bars (Figma 238:1741 & 238:1746) */}
      <div className="w-full flex items-center justify-between py-1.5 sm:py-3 md:py-4">
        {/* Left Decorative Gold Bar */}
        <div className="flex-1 min-w-[12px] sm:min-w-[32px] h-[3px] sm:h-[6px] xl:h-[10px] bg-[#efbf04] rounded-r-full shadow-sm pointer-events-none" data-node-id="238:1741" />

        {/* Main Title text */}
        <div className="text-center max-w-4xl mx-auto px-3 sm:px-6 md:px-12 flex-shrink min-w-0">
          <h1 className="font-philosopher font-bold text-[#003471] text-xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] leading-snug sm:leading-[1.2] tracking-tight" data-node-id="238:2005">
            Welcome to Ankur Narula Ministries <br className="hidden sm:inline" />
            <span className="text-[#003471] block sm:inline mt-0.5 sm:mt-0">
              The Church Of Signs and Wonders
            </span>
          </h1>

          <p className="font-poppins text-[#0b0c1c] text-xs sm:text-sm md:text-base lg:text-[17px] leading-relaxed max-w-3xl mx-auto mt-2 sm:mt-3 md:mt-4 text-balance px-1" data-node-id="238:1740">
            Experience the power of Jesus Christ through signs, wonders, and faith. We believe in the{' '}
            living Word of God and in His mighty works among those who believe.
          </p>
        </div>

        {/* Right Decorative Gold Bar */}
        <div className="flex-1 min-w-[12px] sm:min-w-[32px] h-[3px] sm:h-[6px] xl:h-[10px] bg-[#efbf04] rounded-l-full shadow-sm pointer-events-none" data-node-id="238:1746" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        {/* Featured 200+ ANM Churches Banner Card (1140px x 620px, rounded-[51px]) (Figma 238:1724 / 238:2042) */}
        <div className="mt-4 sm:mt-8 md:mt-10 max-w-[1140px] mx-auto">
          <div className="relative w-full aspect-[16/9] sm:aspect-[1140/620] rounded-2xl sm:rounded-[28px] md:rounded-[40px] lg:rounded-[51px] overflow-hidden shadow-xl sm:shadow-2xl border border-amber-200/40 bg-slate-900 group" data-node-id="238:1724">
            <Image
              src="/figma-assets/1293a243cd5f4ddaa9c70378ddffe38c61e7ffb6.png"
              alt="200+ ANM Churches"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Carousel Pagination Dots */}
            <div className="absolute bottom-2.5 sm:bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-2.5 z-20">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white shadow-md cursor-pointer transition transform hover:scale-125" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/40 backdrop-blur-sm cursor-pointer transition transform hover:scale-125 hover:bg-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

