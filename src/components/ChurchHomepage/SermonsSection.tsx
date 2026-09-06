import React from 'react'
import Image from 'next/image'

export const SermonsSection: React.FC = () => {
  const sermonCards = [
    {
      id: '238:1765',
      thumbnail: '/figma-assets/48f12ed5d9b6840b88f39ce9bb043aec1ccb6a56.png',
      title: 'UK BIRMINGHAM BIGGEST CRUSADE 2026 | DAY-1 | @AnkurNarulaMinistries',
      titleNodeId: '238:1766',
      buttonNodeId: '238:1767',
      textNodeId: '238:1768',
      buttonText: 'Watch Now',
      mobileBadge: 'LIVE (17-01-2026)',
    },
    {
      id: '238:1775',
      thumbnail: '/figma-assets/cc53996176557069c904f11dc953b5577515397e.png',
      title: 'Get Ready for Full Night Thursday Prayer Meeting (27-08-2026) #ankurnarulaministries',
      titleNodeId: '238:1778',
      buttonNodeId: '238:1776',
      textNodeId: '238:1777',
      buttonText: 'Watch Now',
      mobileBadge: 'LIVE (17-01-2026)',
    },
    {
      id: '238:1784',
      thumbnail: '/figma-assets/48f12ed5d9b6840b88f39ce9bb043aec1ccb6a56.png',
      title: 'A FRESH ENCOUNTER WITH JESUS | MORNING WORSHIP | 27-08-2026 @AnkurNarulaMinistries',
      titleNodeId: '238:1788',
      buttonNodeId: '238:1785',
      textNodeId: '238:1787',
      buttonText: 'Watch Now',
      mobileBadge: 'LIVE (17-01-2026)',
    },
    {
      id: '238:1770',
      thumbnail: '/figma-assets/48f12ed5d9b6840b88f39ce9bb043aec1ccb6a56.png',
      title: 'Marriage के 18 साल बाद मिली बच्चे की आशीष! | Powerful Testimony #ankurnarulaministries',
      titleNodeId: '238:1771',
      buttonNodeId: '238:1772',
      textNodeId: '238:1774',
      buttonText: 'Watch Now',
      mobileBadge: 'LIVE (17-01-2026)',
    },
    {
      id: '238:1779',
      thumbnail: '/figma-assets/48f12ed5d9b6840b88f39ce9bb043aec1ccb6a56.png',
      title: 'MAGNIFY THE NAME OF THE LORD | MORNING WORSHIP | 25-08-2026 @AnkurNarulaMinistries',
      titleNodeId: '238:1783',
      buttonNodeId: '238:1780',
      textNodeId: '238:1782',
      buttonText: 'Watch Now',
      mobileBadge: 'LIVE (17-01-2026)',
    },
    {
      id: '238:1789',
      thumbnail: '/figma-assets/48f12ed5d9b6840b88f39ce9bb043aec1ccb6a56.png',
      title: 'PRAYER MOUNTAIN |🔴LIVE SPECIAL PRAYER FOR FAMILY PEACE | 25-08-2026 | @AnkurNarulaMinistries',
      titleNodeId: '238:1793',
      buttonNodeId: '238:1790',
      textNodeId: '238:1792',
      buttonText: 'Watch Now',
      mobileBadge: 'LIVE (17-01-2026)',
    },
  ]

  return (
    <section className="relative py-14 md:py-24 bg-white overflow-hidden" data-node-id="238:1936">
      {/* Upper Dark Background Container for Sermon Header & Big Banner */}
      <div className="bg-[#0b131d] pt-14 pb-28 sm:pb-36 md:pb-44 text-white" data-node-id="238:1934">
        {/* Section Header with Left & Right Gold Bars stretching to edges */}
        <div className="w-full flex items-center justify-between">
          <div className="flex-1 h-[4px] sm:h-[6px] xl:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm" data-node-id="238:1939" />

          <div className="text-center px-6 sm:px-12 flex-shrink-0">
            <h2 className="font-poppins font-medium text-white text-2xl sm:text-4xl md:text-[40px] leading-tight" data-node-id="238:1936">
              Watch Our Latest Sermons
            </h2>
          </div>

          <div className="flex-1 h-[4px] sm:h-[6px] xl:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm" data-node-id="238:1940" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Big Featured Worship Banner (Figma 238:1938) */}
          <div className="mt-8 sm:mt-14 max-w-[1140px] mx-auto">
            <div className="relative w-full aspect-[1140/625] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl border border-white/10 bg-black group" data-node-id="238:1938">
              <Image
                src="/figma-assets/7943a96b8cbd9a1d629265528efec1a38a3d4265.png"
                alt="Worship The Glorious King - Morning Worship"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid of 6 Sermon Video Cards (Overlapping the dark section) */}
      <div className="-mt-16 sm:-mt-24 md:-mt-28 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {sermonCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#f3f3f3] rounded-[16px] sm:rounded-[20px] p-5 shadow-[0px_12px_24px_rgba(0,0,0,0.06)] flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              data-node-id={card.id}
            >
              {/* Thumbnail with Play Button Overlay */}
              <div className="relative w-full h-[180px] rounded-[14px] sm:rounded-[16px] overflow-hidden bg-slate-900">
                <Image
                  src={card.thumbnail}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/30">
                  <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Image
                      src="/figma-assets/b78e00c8c2faa3d5aa95a6dbe2b20e4da4041458.png"
                      alt="Play"
                      width={46}
                      height={46}
                      className="drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="mt-4 sm:mt-5 text-center px-2 min-h-[54px] flex items-center justify-center">
                <h4
                  className="font-poppins font-semibold text-[#1f3a5f] text-xs sm:text-sm md:text-[14px] leading-snug line-clamp-3"
                  data-node-id={card.titleNodeId}
                >
                  {card.title}
                </h4>
              </div>

              {/* Gold Watch Now CTA Button */}
              <div className="mt-4 sm:mt-5 flex justify-center">
                <div
                  className="bg-[#efbf04] hover:bg-[#dfaf00] text-[#0f121e] font-poppins font-semibold text-xs sm:text-[14px] px-7 py-2.5 rounded-full shadow-sm cursor-pointer transition-colors active:scale-95"
                  data-node-id={card.buttonNodeId}
                >
                  <span className="hidden sm:inline" data-node-id={card.textNodeId}>{card.buttonText}</span>
                  <span className="sm:hidden">{card.mobileBadge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

