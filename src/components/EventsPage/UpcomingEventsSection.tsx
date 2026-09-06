import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const UpcomingEventsSection: React.FC = () => {
  return (
    <section className="relative py-12 md:py-20 bg-transparent" data-node-id="224:412">
      {/* Section Header with Left & Right Gold Accent Bars and Emblems */}
      <div className="w-full flex items-center justify-between py-2 sm:py-4">
        {/* Left Decorative Gold Bar spanning edge-to-edge */}
        <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm pointer-events-none" />

        {/* Title with Flanking Golden Holy Cross Emblems */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 px-3 sm:px-6 flex-shrink min-w-0">
          <div
            className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 flex-shrink-0 bg-[#efbf04]"
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

          <h2 className="font-poppins font-semibold text-[#003471] text-2xl sm:text-3xl md:text-[34px] tracking-tight text-center">
            Upcoming Events
          </h2>

          <div
            className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
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

        {/* Right Decorative Gold Bar spanning edge-to-edge */}
        <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm pointer-events-none" />
      </div>

      {/* Featured Upcoming Event Showcase */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 md:mt-14">
        {/* Large Featured Poster Card */}
        <div className="max-w-[380px] sm:max-w-[460px] md:max-w-[513px] mx-auto">
          <div className="relative w-full aspect-[513/647] rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-2xl border border-amber-200/50 bg-slate-900 group">
            <Image
              src="/figma-assets/85761e6b2486d02d0c483eb7871b0ab19ace8c46.png"
              alt="Good News in Pathankot - 11 June 2026"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>

          {/* Watch Now Button */}
          <div className="mt-5 sm:mt-6 text-center">
            <Link
              href="/events/good-news-pathankot"
              className="inline-flex items-center justify-center bg-[#efbf04] text-[#0f121e] font-poppins font-semibold text-xs sm:text-[14px] w-[140px] sm:w-[174px] h-[36px] sm:h-[40px] rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-md"
            >
              Watch Now
            </Link>
          </div>
        </div>

        {/* Detailed Announcement & Schedule Narrative */}
        <div className="mt-10 sm:mt-14 md:mt-16 max-w-4xl mx-auto text-center px-2 sm:px-6 space-y-4 sm:space-y-6 font-poppins text-[#0e0d1b]">
          <p className="font-bold text-sm sm:text-base md:text-lg tracking-wide uppercase text-[#003471]">
            HALLELUJAH!!
          </p>

          <p className="text-xs sm:text-base md:text-[18px] leading-relaxed">
            We are delighted to share this blessed Good News that the anointed Man of God, Apostle Dr. Ankur Yoseph Narula, and
            Woman of God, Pastor Sonia Yoseph Narula will be coming to Pathankot on 11 June 2026 with the life-changing Gospel
            of Lord Jesus Christ.
          </p>

          <p className="text-xs sm:text-base md:text-[18px] leading-relaxed">
            These powerful and grace-filled gatherings will be filled with the mighty presence of the Living God. As the Word
            of God is preached under the anointing of the Holy Spirit, many lives will experience divine healing, restoration,
            deliverance, peace, and freedom in Christ. Every chain of darkness shall be broken, hearts will be renewed, and
            many testimonies will arise through the power of Jesus Christ.
          </p>

          <p className="text-xs sm:text-base md:text-[18px] leading-relaxed">
            This is not just a meeting, but a divine encounter with the Lord. You and your family are warmly invited to come
            with faith and expectation to witness the miraculous move and overflowing glory of God in Pathankot.✨
          </p>

          <p className="text-xs sm:text-base md:text-[18px] leading-relaxed">
            Don’t miss this opportunity—bring your family, friends, relatives, and loved ones. Because when Jesus enters your
            life, everything changes for the better.
          </p>

          {/* Schedule Breakdown Box */}
          <div className="pt-4 sm:pt-6 space-y-1.5 sm:space-y-2 text-xs sm:text-base md:text-[17px] leading-relaxed font-medium">
            <p className="font-bold text-sm sm:text-base md:text-lg uppercase text-[#003471]">
              HALLELUJAH!!
            </p>
            <p><span className="font-semibold text-slate-900">Day:</span> Thursday</p>
            <p><span className="font-semibold text-slate-900">Date:</span> 11 June, 2026</p>
            <p><span className="font-semibold text-slate-900">Time:</span> 6 PM to 10 PM</p>
            <p className="max-w-2xl mx-auto">
              <span className="font-semibold text-slate-900">Venue:</span> Growth Center, Village Chacheli, Industrial Area,
              Near Pepsi Plant (Sujanpur), District Pathankot
            </p>
            <p className="pt-2 text-slate-700 font-semibold">By:- Church Media Team</p>
          </div>
        </div>
      </div>
    </section>
  )
}
