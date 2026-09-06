import React from 'react'
import Image from 'next/image'

export const OurLeadersSection: React.FC = () => {
  return (
    <section className="py-14 md:py-24 bg-white overflow-hidden" data-node-id="218:2350">
      {/* Section Header with Left & Right Gold Accent Bars spanning full width of viewport */}
      <div className="w-full flex items-center justify-between">
        <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm" />

        <div className="text-center px-4 sm:px-8 md:px-12 flex-shrink min-w-0">
          <h2 className="font-poppins font-semibold text-[#003471] text-2xl sm:text-3xl md:text-[36px] leading-tight tracking-tight">
            Our Leaders
          </h2>
        </div>

        <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Photo Leader Showcase (Nodes: 218:2354 container, 218:2352 left, 218:2353 center, 218:2355 right) */}
        <div className="mt-8 sm:mt-16 max-w-[1020px] mx-auto" data-node-id="218:2354">
          <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 items-center justify-center">
            {/* Left Photo (Node 218:2352) */}
            <div
              className="relative w-full aspect-[186/263] sm:aspect-[305/429] rounded-[12px] sm:rounded-[20px] overflow-hidden shadow-md sm:shadow-xl border border-slate-100 bg-slate-900 group"
              data-node-id="218:2352"
            >
              <Image
                src="/figma-assets/a12f7a8578aca49746f879f50d3567e9cc929dad.png"
                alt="Apostle Dr. Ankur Yoseph Narula Preaching"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Center Photo - Elevated & Taller (Node 218:2353) */}
            <div
              className="relative w-full aspect-[187/311] sm:aspect-[305/509] rounded-[14px] sm:rounded-[24px] overflow-hidden shadow-xl sm:shadow-2xl border-2 border-amber-300/70 bg-slate-900 group -translate-y-1 sm:-translate-y-4 z-10"
              data-node-id="218:2353"
            >
              <Image
                src="/figma-assets/man_of_god_image_1.jpg"
                alt="Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula - Ministry Leaders"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right Photo (Node 218:2355) */}
            <div
              className="relative w-full aspect-[187/263] sm:aspect-[305/429] rounded-[12px] sm:rounded-[20px] overflow-hidden shadow-md sm:shadow-xl border border-slate-100 bg-slate-900 group"
              data-node-id="218:2355"
            >
              <Image
                src="/figma-assets/457a3354faefcf652c2110710588f40233c79c64.png"
                alt="Pastor Sonia Yoseph Narula and Church Ministry Gathering"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Detailed Ministry Narrative Text Blocks */}
        <div className="mt-8 sm:mt-16 max-w-4xl mx-auto text-center px-2 sm:px-4 space-y-4 sm:space-y-6">
          <p className="font-poppins text-[#333333] text-xs sm:text-base md:text-[18px] leading-relaxed">
            The Church of Signs and Wonders (Ankur Narula Ministries) is a fast-growing revival ministry based in Punjab, India, committed
            to preaching the Gospel of Jesus Christ through the power of the Holy Spirit. Founded in 2004 with just three members, the
            ministry has grown by God’s grace into a global revival movement where lakhs gather weekly to worship, receive the Word,
            and experience healing, deliverance, and transformation.
          </p>

          <p className="font-lato text-[#333333] text-sm sm:text-base md:text-[19px] leading-relaxed">
            Led by Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula, the ministry serves millions through church services, live
            broadcasts, revival crusades, and the establishment of 200+ churches worldwide. With a strong heart for compassion, the ministry
            also supports the needy through charitable initiatives and a 24×7 Prayer Call Center, offering prayer and counsel to people across
            the world—reflecting the love and power of Christ in action.
          </p>

          <p className="font-lato text-[#333333] text-sm sm:text-base md:text-[19px] leading-relaxed">
            Ankur Narula Ministries, led by Apostle Dr. Ankur Yoseph Narula, is a powerful Holy Spirit-led movement based in Punjab, India.
            Known for healing, deliverance, and prophetic ministry, to lead souls to Christ and transform lives. Follow for powerful sermons,
            live broadcasts, testimonies, and daily encouragement.
          </p>
        </div>
      </div>
    </section>
  )
}
