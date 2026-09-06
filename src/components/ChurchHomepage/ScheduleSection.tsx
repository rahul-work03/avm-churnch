import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ScheduleSection: React.FC = () => {
  return (
    <section className="py-14 md:py-24 bg-white overflow-hidden" data-node-id="238:1754">
      {/* Section Header with Left & Right Gold Bars stretching to screen edges */}
      <div className="w-full flex items-center justify-between mb-8 sm:mb-12">
        <div className="flex-1 h-[4px] sm:h-[6px] xl:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm pointer-events-none" />

        <div className="text-center px-6 sm:px-12 flex-shrink-0">
          <h2 className="font-poppins font-semibold text-[#003471] text-xl sm:text-3xl md:text-[32px] leading-tight" data-node-id="238:1754">
            Live Prayer &amp; Worship Schedule
          </h2>
        </div>

        <div className="flex-1 h-[4px] sm:h-[6px] xl:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm pointer-events-none" />
      </div>

      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        {/* Featured Live Service Banner / Stage Preview */}
        <div className="max-w-[1140px] mx-auto">
          <div className="relative w-full aspect-[16/11] sm:aspect-[16/9] md:aspect-[1140/475] min-h-[260px] sm:min-h-[380px] md:min-h-[460px] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group" data-node-id="238:1798">
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
        <div className="mt-6 sm:mt-10 max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {/* ==================== CARD 1: WEEKLY SERVICES (Figma 238:1799) ==================== */}
          <div
            className="bg-[#122f4a] rounded-[16.8px] p-5 sm:p-7 text-white relative overflow-hidden shadow-xl border border-white/5 flex flex-col justify-between min-h-[234px]"
            data-node-id="238:1799"
          >
            {/* Background angled ray lines vector */}
            <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden">
              <Image
                src="/figma-assets/13f61287f6bfa90b665e82c14641ea415f8c34e1.svg"
                alt=""
                fill
                className="object-cover object-left-top"
              />
            </div>
            {/* Dark gradient overlay matching Figma BG mask */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(-35deg, rgb(18, 47, 74) 60%, rgba(18, 47, 74, 0) 100%)',
              }}
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Header row with Yellow Dotted Line */}
              <div className="flex items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                <h3
                  className="font-poppins font-bold text-[#efbf04] text-xl sm:text-[24px] leading-tight whitespace-nowrap"
                  data-node-id="238:1919"
                >
                  Weekly Services
                </h3>
                {/* Yellow Dotted Pattern Bar (Figma 238:1929) */}
                <div
                  className="flex-1 h-2 sm:h-2.5 max-w-[160px] sm:max-w-[285px] border-t-2 sm:border-t-[3px] border-b-2 sm:border-b-[3px] border-dashed border-[#efbf04] opacity-90 ml-2"
                  data-node-id="238:1929"
                />
              </div>

              {/* 2-Column Content Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center flex-1">
                {/* Left Column: Sunday Morning + Line 84 + Sunday Evening */}
                <div className="flex flex-col justify-center">
                  {/* 🕊️ Sunday Morning Service */}
                  <div>
                    <h4
                      className="font-lato font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-snug flex items-center gap-1.5"
                      data-node-id="238:1921"
                    >
                      <span className="text-base sm:text-lg">🕊️</span>
                      <span>Sunday Morning Service</span>
                    </h4>
                    <p
                      className="font-poppins font-bold text-white text-[12px] sm:text-[13px] md:text-[14px] mt-0.5 sm:mt-1 pl-6 whitespace-nowrap"
                      data-node-id="238:1925"
                    >
                      10:30 AM – 2:30 PM <span className="font-poppins font-normal text-white">(IST)</span>
                    </p>
                  </div>

                  {/* Horizontal Divider Line (Figma Line 84, Node 238:1931 - under Left Column ONLY) */}
                  <div className="w-full max-w-[263px] h-px bg-white/20 my-2.5 sm:my-3" data-node-id="238:1931" />

                  {/* 🌙 Sunday Evening Service */}
                  <div>
                    <h4
                      className="font-lato font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-snug flex items-center gap-1.5"
                      data-node-id="238:1923"
                    >
                      <span className="text-base sm:text-lg">🌙</span>
                      <span>Sunday Evening Service</span>
                    </h4>
                    <p
                      className="font-poppins font-bold text-white text-[12px] sm:text-[13px] md:text-[14px] mt-0.5 sm:mt-1 pl-6 whitespace-nowrap"
                      data-node-id="238:1927"
                    >
                      10:30 AM – 2:30 PM <span className="font-poppins font-normal text-white">(IST)</span>
                    </p>
                  </div>
                </div>

                {/* Right Column: 🔥 Thursday Service (Vertically Centered) */}
                <div className="flex flex-col justify-center sm:pl-2">
                  <div>
                    <h4
                      className="font-lato font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-snug flex items-center gap-1.5"
                      data-node-id="238:1924"
                    >
                      <span className="text-base sm:text-lg">🔥</span>
                      <span>Thursday Service</span>
                    </h4>
                    <p
                      className="font-lato font-bold text-white text-[12px] sm:text-[13px] md:text-[14px] mt-0.5 sm:mt-1 pl-6 whitespace-nowrap"
                      data-node-id="238:1928"
                    >
                      6:00 PM – 10:00 PM <span className="font-lato font-normal text-white">(IST)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== CARD 2: DAILY PRAYER PROGRAMS (Figma 238:1859) ==================== */}
          <div
            className="bg-[#122f4a] rounded-[16.8px] p-5 sm:p-7 text-white relative overflow-hidden shadow-xl border border-white/5 flex flex-col justify-between min-h-[234px]"
            data-node-id="238:1859"
          >
            {/* Background angled ray lines vector */}
            <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden">
              <Image
                src="/figma-assets/277acc8433e3273c56b4d00b7758461688cd2920.svg"
                alt=""
                fill
                className="object-cover object-left-top"
              />
            </div>
            {/* Dark gradient overlay matching Figma BG mask */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(-35deg, rgb(18, 47, 74) 60%, rgba(18, 47, 74, 0) 100%)',
              }}
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Header row with Yellow Dotted Line */}
              <div className="flex items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                <h3
                  className="font-poppins font-bold text-[#efbf04] text-xl sm:text-[24px] leading-tight whitespace-nowrap"
                  data-node-id="238:1920"
                >
                  Daily Prayer Programs
                </h3>
                {/* Yellow Dotted Pattern Bar (Figma 238:1930) */}
                <div
                  className="flex-1 h-2 sm:h-2.5 max-w-[140px] sm:max-w-[231px] border-t-2 sm:border-t-[3px] border-b-2 sm:border-b-[3px] border-dashed border-[#efbf04] opacity-90 ml-2"
                  data-node-id="238:1930"
                />
              </div>

              {/* 2-Column Upper Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* 🍞 Everyday Manna */}
                <div>
                  <h4
                    className="font-lato font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-snug flex items-center gap-1.5"
                    data-node-id="238:1922"
                  >
                    <span className="text-base sm:text-lg">🍞</span>
                    <span>Everyday Manna</span>
                  </h4>
                  <p
                    className="font-poppins font-bold text-white text-[12px] sm:text-[13px] md:text-[14px] mt-0.5 sm:mt-1 pl-6 whitespace-nowrap"
                    data-node-id="238:1926"
                  >
                    10:30 AM – 2:30 PM <span className="font-poppins font-normal text-white">(IST)</span>
                  </p>
                </div>

                {/* 🙏 Prayer Mountain */}
                <div>
                  <h4
                    className="font-lato font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-snug flex items-center gap-1.5"
                    data-node-id="238:2003"
                  >
                    <span className="text-base sm:text-lg">🙏</span>
                    <span>Prayer Mountain</span>
                  </h4>
                  <p
                    className="font-poppins font-bold text-white text-[12px] sm:text-[13px] md:text-[14px] mt-0.5 sm:mt-1 pl-6 whitespace-nowrap"
                    data-node-id="238:2004"
                  >
                    8:00 PM <span className="font-poppins font-normal text-white">(Daily)</span>
                  </p>
                </div>
              </div>

              {/* Full-Width Horizontal Divider Line (Figma Line 85, Node 238:1932) */}
              <div className="w-full h-px bg-white/20 my-3 sm:my-3.5" data-node-id="238:1932" />

              {/* Centered Join Live CTA Button (Figma 238:1933, 238:2002) */}
              <div className="flex justify-center items-center pt-0.5">
                <Link
                  href="/live"
                  className="w-[160px] sm:w-[175px] h-[40px] sm:h-[46px] bg-[#efbf04] hover:bg-[#dfaf00] rounded-full flex items-center justify-center text-white font-poppins font-semibold text-sm sm:text-base md:text-[18px] shadow-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                  data-node-id="238:1933"
                >
                  <span data-node-id="238:2002">Join Live</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


