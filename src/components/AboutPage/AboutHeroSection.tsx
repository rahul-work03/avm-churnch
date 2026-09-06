import React from 'react'
import Image from 'next/image'

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 md:pt-32 md:pb-16 bg-transparent">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* "About us" Header with Golden Emblems on both sides */}
        <div className="text-center px-4 pt-4 sm:pt-8">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div
              className="relative w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0 bg-[#efbf04]"
              style={{
                maskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
                WebkitMaskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
            <h1 className="font-philosopher font-bold text-[#003471] text-3xl sm:text-4xl md:text-[42px] tracking-tight">
              About Us
            </h1>
            <div
              className="relative w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
              style={{
                maskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
                WebkitMaskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
          </div>

          <p className="font-poppins text-[#0b0c1c] text-xs sm:text-base md:text-[18px] leading-relaxed max-w-4xl mx-auto mt-4 sm:mt-6 text-balance">
            The Church of Signs and Wonders (Ankur Narula Ministries) is a global revival ministry dedicated to spreading the Gospel of Jesus
            Christ through the power of the Holy Spirit. Founded in 2004 in Punjab, India, the ministry has grown from three members into a
            worldwide movement bringing healing, deliverance, and transformed lives.
          </p>
        </div>

        {/* Featured Large Hero Photo / Stage Banner */}
        <div className="mt-8 sm:mt-12 max-w-[1140px] mx-auto">
          <div className="relative w-full aspect-[1140/583] rounded-[16px] sm:rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl border border-amber-200/40 bg-slate-900 group">
            <Image
              src="/figma-assets/457a3354faefcf652c2110710588f40233c79c64.png"
              alt="Ankur Narula Ministries Ministry Congregation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
