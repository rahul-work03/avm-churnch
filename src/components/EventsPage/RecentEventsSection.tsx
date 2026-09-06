import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const RecentEventsSection: React.FC = () => {
  const recentEvents = [
    {
      id: 'masihi-satsang',
      title: 'Masihi Satsang - Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Narula',
      poster: '/figma-assets/9c4cf0e2f9397f119d80dde4d156bbaa56343330.png',
      link: '/events/masihi-satsang',
    },
    {
      id: 'good-news-pathankot',
      title: 'Good News in Pathankot - 11 June 2026',
      poster: '/figma-assets/85761e6b2486d02d0c483eb7871b0ab19ace8c46.png',
      link: '/events/good-news-pathankot',
    },
    {
      id: 'live-service',
      title: 'Sunday Live Service - Ankur Narula Ministries',
      poster: '/figma-assets/b3a0bba89e5f05b1a24ecbaec47a6c1170b270dc.png',
      link: '/events/live-service',
    },
  ]

  return (
    <section className="relative pt-24 pb-10 sm:pt-28 md:pt-32 md:pb-16 bg-transparent" data-node-id="224:412">
      {/* Header with Flanking Gold Accent Bars and Emblems */}
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

          <h1 className="font-poppins font-semibold text-[#003471] text-2xl sm:text-3xl md:text-[34px] tracking-tight text-center">
            Events
          </h1>

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

      {/* 3 Event Cards Showcase */}
      <div className="max-w-[1140px] mx-auto px-3 sm:px-6 lg:px-8 mt-6 sm:mt-10 md:mt-12">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-6 md:gap-8 items-start justify-center">
          {recentEvents.map((event) => (
            <div key={event.id} className="flex flex-col items-center group">
              {/* Event Poster Card */}
              <div className="relative w-full aspect-[367/647] rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-lg sm:shadow-2xl border border-amber-200/40 bg-slate-900">
                <Image
                  src={event.poster}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Watch Now Button */}
              <div className="mt-3 sm:mt-5">
                <Link
                  href={event.link}
                  className="inline-flex items-center justify-center bg-[#efbf04] text-[#0f121e] font-poppins font-semibold text-xs sm:text-[14px] w-[96px] sm:w-[150px] md:w-[174px] h-[32px] sm:h-[40px] rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-md text-center"
                >
                  Watch Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
