import React from 'react'
import Image from 'next/image'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-8 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 overflow-hidden" data-node-id="274:3">
      {/* Header Title with Flanking Gold Bars (Figma 274:23, 274:28 on Desktop / 274:320, 274:323 on Mobile) */}
      <div className="w-full flex items-center justify-between py-2 sm:py-3 md:py-4">
        {/* Left Decorative Gold Bar */}
        <div
          className="w-[48px] sm:w-[100px] md:w-[140px] lg:w-[164px] h-[6px] sm:h-[10px] lg:h-[14px] bg-[#efbf04] rounded-r-full shadow-sm pointer-events-none flex-shrink-0"
          data-node-id="274:23"
        />

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto px-2 sm:px-6 md:px-10 flex-shrink min-w-0">
          {/* Desktop Headline (Figma 274:3) */}
          <h1 className="hidden sm:block font-philosopher font-bold text-[#003471] text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[50px] leading-tight tracking-tight">
            Welcome to Ankur Narula Ministries <br />
            <span className="text-[#003471] block mt-1">
              The Church Of Signs and Wonders
            </span>
          </h1>

          {/* Mobile Headline (Figma 274:326) */}
          <h1 className="sm:hidden font-philosopher font-bold text-[#003471] text-[22px] sm:text-[24px] leading-tight tracking-tight">
            Welcome to Ankur Narula Ministries <br />
            <span className="text-[#003471] block mt-0.5">
              Jesus Christ’s Power in Signs and Wonders
            </span>
          </h1>

          {/* Subtitle (Figma 274:22 / 274:327) */}
          <p className="font-poppins font-light sm:font-normal text-[#0b0c1c] sm:text-[#8c8c8c] text-[12px] sm:text-base md:text-[18px] leading-relaxed max-w-3xl mx-auto mt-2 sm:mt-3 md:mt-4 text-balance px-1">
            Experience the power of Jesus Christ through signs, wonders, and faith. We believe in the{' '}
            living Word of God and in His mighty works among those who believe.
          </p>
        </div>

        {/* Right Decorative Gold Bar */}
        <div
          className="w-[48px] sm:w-[100px] md:w-[140px] lg:w-[164px] h-[6px] sm:h-[10px] lg:h-[14px] bg-[#efbf04] rounded-l-full shadow-sm pointer-events-none flex-shrink-0"
          data-node-id="274:28"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured 200+ ANM Churches Banner Card (1140px x 620px, rounded-[51px] on Desktop / 380px x 206px, rounded-[20px] on Mobile) (Figma 274:6 / 274:328) */}
        <div className="mt-4 sm:mt-8 md:mt-10 max-w-[1140px] mx-auto">
          <div
            className="relative w-full aspect-[380/206] sm:aspect-[1140/620] rounded-[20px] sm:rounded-[36px] md:rounded-[51px] overflow-hidden shadow-xl sm:shadow-2xl border border-amber-200/40 bg-slate-900 group"
            data-node-id="274:6"
          >
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
