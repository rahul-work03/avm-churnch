import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ScheduleSection: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden" data-node-id="274:3">
      {/* ==================== SECTION HEADER ==================== */}
      {/* Desktop Header: Full-width Dark Navy Bar (Figma Node 274:9, 274:25, 274:27, 274:36) */}
      <div className="hidden md:flex w-full bg-[#122f4a] h-[80px] items-center justify-between px-0 relative z-10 shadow-md">
        {/* Left Gold Bar (Figma 274:25) */}
        <div className="w-[180px] lg:w-[280px] xl:w-[323px] h-[8px] bg-[#efbf04] rounded-r-full shadow-sm" data-node-id="274:25" />

        {/* Center Title Text (Figma 274:36) */}
        <h2 className="font-poppins font-semibold text-white text-2xl lg:text-[30px] xl:text-[32px] tracking-tight text-center px-4 whitespace-nowrap">
          Live Prayer &amp; Worship Schedule
        </h2>

        {/* Right Gold Bar (Figma 274:27) */}
        <div className="w-[180px] lg:w-[280px] xl:w-[323px] h-[8px] bg-[#efbf04] rounded-l-full shadow-sm" data-node-id="274:27" />
      </div>

      {/* Mobile Header: Gold Bars flanking Title (Figma Node 274:322, 274:325, 274:330) */}
      <div className="md:hidden w-full flex items-center justify-between py-6 px-0">
        <div className="w-[48px] h-[6px] bg-[#efbf04] rounded-r-full" data-node-id="274:322" />
        <h2 className="font-philosopher font-bold text-[#003471] text-base sm:text-xl tracking-tight text-center px-2">
          Live Prayer &amp; Worship Schedule
        </h2>
        <div className="w-[48px] h-[6px] bg-[#efbf04] rounded-l-full" data-node-id="274:325" />
      </div>

      <div className="pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-28 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Live Service Banner / Stage Preview (Figma 274:80 / 274:1798) */}
        <div className="max-w-[1140px] mx-auto">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[1141/475] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
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
        <div className="mt-8 sm:mt-12 md:mt-14 max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* ==================== CARD 1: WEEKLY SERVICES (Figma 274:81) ==================== */}
          <div
            className="bg-[#122f4a] rounded-[16.8px] p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-white/5 flex flex-col justify-between min-h-[240px]"
            data-node-id="274:81"
          >
            {/* Background angled ray lines vector */}
            <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
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
              <div className="flex items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
                <h3 className="font-poppins font-bold text-[#efbf04] text-xl sm:text-[24px] leading-tight whitespace-nowrap">
                  Weekly Services
                </h3>
                {/* Yellow Dotted Pattern Bar */}
                <div className="flex-1 h-2 sm:h-2.5 max-w-[160px] sm:max-w-[285px] border-t-2 sm:border-t-[3px] border-b-2 sm:border-b-[3px] border-dashed border-[#efbf04] opacity-90 ml-2" />
              </div>

              {/* 2-Column Content Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-center flex-1">
                {/* Left Column: Sunday Morning + Line 84 + Sunday Evening */}
                <div className="flex flex-col justify-center">
                  {/* 🕊️ Sunday Morning Service */}
                  <div>
                    <h4 className="font-lato font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-snug flex items-center gap-1.5">
                      <span className="text-base sm:text-lg">🕊️</span>
                      <span>Sunday Morning Service</span>
                    </h4>
                    <p className="font-poppins font-bold text-white text-[12px] sm:text-[13px] md:text-[14px] mt-1 pl-6 whitespace-nowrap">
                      10:30 AM – 2:30 PM <span className="font-poppins font-normal text-white">(IST)</span>
                    </p>
                  </div>

                  {/* Horizontal Divider Line (Line 84 - under Left Column ONLY) */}
                  <div className="w-full max-w-[263px] h-px bg-white/20 my-3" />

                  {/* 🌙 Sunday Evening Service */}
                  <div>
                    <h4 className="font-lato font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-snug flex items-center gap-1.5">
                      <span className="text-base sm:text-lg">🌙</span>
                      <span>Sunday Evening Service</span>
                    </h4>
                    <p className="font-poppins font-bold text-white text-[12px] sm:text-[13px] md:text-[14px] mt-1 pl-6 whitespace-nowrap">
                      10:30 AM – 2:30 PM <span className="font-poppins font-normal text-white">(IST)</span>
                    </p>
                  </div>
                </div>

                {/* Right Column: 🔥 Thursday Service (Vertically Centered) */}
                <div className="flex flex-col justify-center sm:pl-2">
                  <div>
                    <h4 className="font-lato font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-snug flex items-center gap-1.5">
                      <span className="text-base sm:text-lg">🔥</span>
                      <span>Thursday Service</span>
                    </h4>
                    <p className="font-lato font-bold text-white text-[12px] sm:text-[13px] md:text-[14px] mt-1 pl-6 whitespace-nowrap">
                      6:00 PM – 10:00 PM <span className="font-lato font-normal text-white">(IST)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== CARD 2: DAILY PRAYER PROGRAMS (Figma 274:141) ==================== */}
          <div
            className="bg-[#122f4a] rounded-[16.8px] p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-white/5 flex flex-col justify-between min-h-[240px]"
            data-node-id="274:141"
          >
            {/* Background angled ray lines vector */}
            <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
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
              <div className="flex items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
                <h3 className="font-poppins font-bold text-[#efbf04] text-xl sm:text-[24px] leading-tight whitespace-nowrap">
                  Daily Prayer Programs
                </h3>
                {/* Yellow Dotted Pattern Bar */}
                <div className="flex-1 h-2 sm:h-2.5 max-w-[140px] sm:max-w-[231px] border-t-2 sm:border-t-[3px] border-b-2 sm:border-b-[3px] border-dashed border-[#efbf04] opacity-90 ml-2" />
              </div>

              {/* 2-Column Upper Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* 🍞 Everyday Manna */}
                <div>
                  <h4 className="font-lato font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-snug flex items-center gap-1.5">
                    <span className="text-base sm:text-lg">🍞</span>
                    <span>Everyday Manna</span>
                  </h4>
                  <p className="font-poppins font-bold text-white text-[12px] sm:text-[13px] md:text-[14px] mt-1 pl-6 whitespace-nowrap">
                    10:30 AM – 2:30 PM <span className="font-poppins font-normal text-white">(IST)</span>
                  </p>
                </div>

                {/* 🙏 Prayer Mountain */}
                <div>
                  <h4 className="font-lato font-bold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-snug flex items-center gap-1.5">
                    <span className="text-base sm:text-lg">🙏</span>
                    <span>Prayer Mountain</span>
                  </h4>
                  <p className="font-poppins font-bold text-white text-[12px] sm:text-[13px] md:text-[14px] mt-1 pl-6 whitespace-nowrap">
                    8:00 PM <span className="font-poppins font-normal text-white">(Daily)</span>
                  </p>
                </div>
              </div>

              {/* Full-Width Horizontal Divider Line (Line 85) */}
              <div className="w-full h-px bg-white/20 my-4" />

              {/* Centered Join Live CTA Button */}
              <div className="flex justify-center items-center pt-1">
                <Link
                  href="/live"
                  className="w-[160px] sm:w-[175px] h-[40px] sm:h-[46px] bg-[#efbf04] hover:bg-[#dfaf00] rounded-full flex items-center justify-center text-white font-poppins font-semibold text-sm sm:text-base md:text-[18px] shadow-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Join Live</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
