import React from 'react'
import Image from 'next/image'

export const OurLeadersSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 md:py-18 bg-white overflow-hidden" data-node-id="275:810">
      {/* Section Header with Left & Right Gold Accent Bars (Figma 275:826, 275:989, 275:990) */}
      <div className="w-full flex items-center justify-between">
        <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[5px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm flex-shrink-0" />

        <div className="text-center px-3 sm:px-6 md:px-10 flex-shrink min-w-0">
          <h2 className="font-poppins font-semibold text-[#003471] text-xl sm:text-3xl md:text-[34px] leading-tight tracking-tight whitespace-nowrap">
            Our Leaders
          </h2>
        </div>

        <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[5px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm flex-shrink-0" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Photo Leader Showcase (Figma 275:843, 275:846, 275:845) */}
        <div className="mt-8 sm:mt-12 md:mt-16 max-w-[1020px] mx-auto">
          <div className="grid grid-cols-3 gap-2.5 sm:gap-6 md:gap-8 items-center justify-center">
            {/* Left Photo (Figma 275:843) */}
            <div className="relative w-full aspect-[186/263] sm:aspect-[305/429] rounded-[12px] sm:rounded-[20px] overflow-hidden shadow-md sm:shadow-xl border border-slate-100 bg-slate-900 group">
              <Image
                src="/figma-assets/c3f796c837b9ba4d7a0433d9285f5eb6000aef3e.png"
                alt="Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Center Photo - Elevated & Taller (Figma 275:846: 305px x 509px) */}
            <div className="relative w-full aspect-[187/311] sm:aspect-[305/509] rounded-[14px] sm:rounded-[24px] overflow-hidden shadow-xl sm:shadow-2xl border-2 border-amber-300/70 bg-slate-900 group -translate-y-1 sm:-translate-y-4 z-10">
              <Image
                src="/figma-assets/man_of_god_image_1.jpg"
                alt="Apostle Dr. Ankur Yoseph Narula at Pulpit"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right Photo (Figma 275:845) */}
            <div className="relative w-full aspect-[187/263] sm:aspect-[305/429] rounded-[12px] sm:rounded-[20px] overflow-hidden shadow-md sm:shadow-xl border border-slate-100 bg-slate-900 group">
              <Image
                src="/figma-assets/457a3354faefcf652c2110710588f40233c79c64.png"
                alt="Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula - Ministry Attire"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Detailed Ministry Narrative Text Blocks (Figma 275:842, 275:847, 275:848) */}
        <div className="mt-8 sm:mt-14 md:mt-16 max-w-4xl mx-auto text-center px-2 sm:px-4 space-y-4 sm:space-y-6">
          <p className="font-poppins text-[#333333] text-xs sm:text-base md:text-[18px] leading-relaxed">
            The Church of Signs and Wonders (Ankur Narula Ministries) is a fast-growing revival ministry based in Punjab, India, committed
            to preaching the Gospel of Jesus Christ through the power of the Holy Spirit. Founded in 2004 with just three members, the
            ministry has grown by God’s grace into a global revival movement where lakhs gather weekly to worship, receive the Word,
            and experience healing, deliverance, and transformation.
          </p>

          <p className="font-lato text-[#333333] text-xs sm:text-base md:text-[19px] leading-relaxed">
            Led by Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula, the ministry serves millions through church services, live
            broadcasts, revival crusades, and the establishment of 200+ churches worldwide. With a strong heart for compassion, the ministry
            also supports the needy through charitable initiatives and a 24×7 Prayer Call Center, offering prayer and counsel to people across
            the world—reflecting the love and power of Christ in action.
          </p>

          <p className="font-lato text-[#333333] text-xs sm:text-base md:text-[19px] leading-relaxed">
            Ankur Narula Ministries, led by Apostle Dr. Ankur Yoseph Narula, is a powerful Holy Spirit-led movement based in Punjab, India.
            Known for healing, deliverance, and prophetic ministry, to lead souls to Christ and transform lives. Follow for powerful sermons,
            live broadcasts, testimonies, and daily encouragement.
          </p>
        </div>
      </div>
    </section>
  )
}
