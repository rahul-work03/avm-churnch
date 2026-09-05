import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ScheduleSection: React.FC = () => {
  return (
    <section className="py-14 md:py-24 bg-white overflow-hidden">
      {/* Section Header with Left & Right Gold Bars stretching to screen edges */}
      <div className="w-full flex items-center justify-between mb-8 sm:mb-12">
        <div className="flex-1 h-[4px] sm:h-[6px] xl:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm" />

        <div className="text-center px-6 sm:px-12 flex-shrink-0">
          <h2 className="font-poppins font-semibold text-[#003471] text-xl sm:text-3xl md:text-[32px] leading-tight">
            Live Prayer &amp; Worship Schedule
          </h2>
        </div>

        <div className="flex-1 h-[4px] sm:h-[6px] xl:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm" />
      </div>

      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        {/* Featured Live Service Banner / Stage Preview */}
        <div className="max-w-[1140px] mx-auto">
          <div className="relative w-full aspect-[16/11] sm:aspect-[16/9] md:aspect-[1140/520] min-h-[260px] sm:min-h-[380px] md:min-h-[500px] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src="/figma-assets/schedule_banner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Ambient soft glow on bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Two Schedule Cards (Weekly Services & Daily Prayer Programs) */}
        <div className="mt-6 sm:mt-10 max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Card 1: Weekly Services */}
          <div className="bg-[#122f4a] rounded-[16.8px] p-4 sm:p-7 md:p-8 text-white relative overflow-hidden shadow-xl border border-white/5 flex flex-col justify-between">
            {/* Background decorative curved lines vector */}
            <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
              <Image
                src="/figma-assets/13f61287f6bfa90b665e82c14641ea415f8c34e1.svg"
                alt=""
                fill
                className="object-cover object-left-top"
              />
            </div>

            <div className="relative z-10">
              {/* Header row with Yellow Dashed Line */}
              <div className="flex items-center justify-between gap-3 sm:gap-4 mb-3.5 sm:mb-5">
                <h3 className="font-poppins font-bold text-[#efbf04] text-[15px] sm:text-2xl whitespace-nowrap">
                  Weekly Services
                </h3>
                {/* Yellow Dashed Pattern */}
                <div className="flex-1 h-2 sm:h-3 max-w-[180px] sm:max-w-[280px] bg-[radial-gradient(#efbf04_2px,transparent_2px)] [background-size:6px_6px] sm:[background-size:8px_8px] opacity-90" />
              </div>

              {/* 2x2 Service Grid */}
              <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-2 sm:gap-y-3 pb-2 sm:pb-3">
                <div>
                  <h4 className="font-poppins font-bold text-white text-[12px] sm:text-lg leading-snug">
                    Sunday Morning Service
                  </h4>
                  <p className="font-poppins text-[10px] sm:text-sm text-slate-200 mt-0.5 whitespace-nowrap">
                    10:30 AM – 2:30 PM <span className="text-white font-medium">(IST)</span>
                  </p>
                </div>

                <div>
                  <h4 className="font-poppins font-bold text-white text-[12px] sm:text-lg leading-snug">
                    Sunday Morning Service
                  </h4>
                  <p className="font-poppins text-[10px] sm:text-sm text-slate-200 mt-0.5 whitespace-nowrap">
                    10:30 AM – 2:30 PM <span className="text-white font-medium">(IST)</span>
                  </p>
                </div>
              </div>

              {/* Horizontal Divider Line */}
              <div className="w-full h-px bg-white/15 my-2 sm:my-3" />

              <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-2 sm:gap-y-3 pt-1.5 sm:pt-2">
                <div>
                  <h4 className="font-poppins font-bold text-white text-[12px] sm:text-lg leading-snug">
                    Sunday Morning Service
                  </h4>
                  <p className="font-poppins text-[10px] sm:text-sm text-slate-200 mt-0.5 whitespace-nowrap">
                    10:30 AM – 2:30 PM <span className="text-white font-medium">(IST)</span>
                  </p>
                </div>

                <div>
                  <h4 className="font-poppins font-bold text-white text-[12px] sm:text-lg leading-snug">
                    Sunday Morning Service
                  </h4>
                  <p className="font-poppins text-[10px] sm:text-sm text-slate-200 mt-0.5 whitespace-nowrap">
                    10:30 AM – 2:30 PM <span className="text-white font-medium">(IST)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Daily Prayer Programs */}
          <div className="bg-[#122f4a] rounded-[16.8px] p-4 sm:p-7 md:p-8 text-white relative overflow-hidden shadow-xl border border-white/5 flex flex-col justify-between">
            {/* Background decorative curved lines vector */}
            <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
              <Image
                src="/figma-assets/277acc8433e3273c56b4d00b7758461688cd2920.svg"
                alt=""
                fill
                className="object-cover object-left-top"
              />
            </div>

            <div className="relative z-10">
              {/* Header row with Yellow Dashed Line */}
              <div className="flex items-center justify-between gap-3 sm:gap-4 mb-3.5 sm:mb-5">
                <h3 className="font-poppins font-bold text-[#efbf04] text-[15px] sm:text-2xl whitespace-nowrap">
                  Daily Prayer Programs
                </h3>
                {/* Yellow Dashed Pattern */}
                <div className="flex-1 h-2 sm:h-3 max-w-[160px] sm:max-w-[240px] bg-[radial-gradient(#efbf04_2px,transparent_2px)] [background-size:6px_6px] sm:[background-size:8px_8px] opacity-90" />
              </div>

              {/* 2x2 Service Grid */}
              <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-2 sm:gap-y-3 pb-2 sm:pb-3">
                <div>
                  <h4 className="font-poppins font-bold text-white text-[12px] sm:text-lg leading-snug">
                    Sunday Morning Service
                  </h4>
                  <p className="font-poppins text-[10px] sm:text-sm text-slate-200 mt-0.5 whitespace-nowrap">
                    10:30 AM – 2:30 PM <span className="text-white font-medium">(IST)</span>
                  </p>
                </div>

                <div>
                  <h4 className="font-poppins font-bold text-white text-[12px] sm:text-lg leading-snug">
                    Sunday Morning Service
                  </h4>
                  <p className="font-poppins text-[10px] sm:text-sm text-slate-200 mt-0.5 whitespace-nowrap">
                    10:30 AM – 2:30 PM <span className="text-white font-medium">(IST)</span>
                  </p>
                </div>
              </div>

              {/* Horizontal Divider Line */}
              <div className="w-full h-px bg-white/15 my-2 sm:my-3" />

              <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-2 sm:gap-y-3 items-center pt-1.5 sm:pt-2">
                <div>
                  <h4 className="font-poppins font-bold text-white text-[12px] sm:text-lg leading-snug">
                    Sunday Morning Service
                  </h4>
                  <p className="font-poppins text-[10px] sm:text-sm text-slate-200 mt-0.5 whitespace-nowrap">
                    10:30 AM – 2:30 PM <span className="text-white font-medium">(IST)</span>
                  </p>
                </div>

                {/* Join the Live Now CTA Button */}
                <div className="flex items-center justify-end">
                  <Link
                    href="/live"
                    className="inline-flex items-center justify-center bg-[#efbf04] text-[#0b0c1c] font-poppins font-bold text-[12px] sm:text-base px-3 sm:px-7 h-[36px] sm:h-[46px] rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-md whitespace-nowrap w-full text-center"
                  >
                    Join the Live Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}