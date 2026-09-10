import React from 'react'
import Image from 'next/image'

interface PresencePhoto {
  id: string
  src: string
  alt: string
  title: string
  country: string
}

export const InternationalPresenceSection: React.FC = () => {
  // Top Row: Slider 1 moving Left
  const row1Photos: PresencePhoto[] = [
    {
      id: 'r1-1',
      src: '/figma-assets/a12f7a8578aca49746f879f50d3567e9cc929dad.png',
      alt: 'International Delegation and Diplomatic Meeting',
      title: 'Global Leadership Exchange',
      country: 'United Kingdom',
    },
    {
      id: 'r1-2',
      src: '/figma-assets/c83b945c00cc8d9e53f94a7c5903ad702134ed2e.png',
      alt: 'Apostle Dr. Ankur Narula with World Leaders',
      title: 'Honorary Recognition Assembly',
      country: 'United States',
    },
    {
      id: 'r1-3',
      src: '/figma-assets/7943a96b8cbd9a1d629265528efec1a38a3d4265.png',
      alt: 'Overseas Mission Outreach Fellowship',
      title: 'Apostolic Mission Outreach',
      country: 'Canada',
    },
    {
      id: 'r1-4',
      src: '/figma-assets/65d53a88c2c188c19f670266ce9b27e83745bb6b.png',
      alt: 'Global Doctorate and Faith Citation',
      title: 'International Theological Honors',
      country: 'Europe',
    },
    {
      id: 'r1-5',
      src: '/figma-assets/57480aa2a936a6736575d4686f5155c1bef93b95.png',
      alt: 'Revival Summit and Global Delegation',
      title: 'Worldwide Revival Summit',
      country: 'Middle East & Asia',
    },
  ]

  // Bottom Row: Slider 2 moving Right
  const row2Photos: PresencePhoto[] = [
    {
      id: 'r2-1',
      src: '/figma-assets/e3e25b6c010b5aa006f29088b8dae7f2466bf8f3.png',
      alt: 'Worldwide Gospel Crusade and Mass Gathering',
      title: 'Global Revival Crusade',
      country: 'International Arena',
    },
    {
      id: 'r2-2',
      src: '/figma-assets/1293a243cd5f4ddaa9c70378ddffe38c61e7ffb6.png',
      alt: 'International Believers and Ministers Assembly',
      title: 'Global Ministers Fellowship',
      country: 'Australia & Pacific',
    },
    {
      id: 'r2-3',
      src: '/figma-assets/f1c7c30e211dc39094fc986db7a7e7d876202f58.png',
      alt: 'Atmosphere of Fire International Convention',
      title: 'Supernatural Fire Conference',
      country: 'Africa Mission',
    },
    {
      id: 'r2-4',
      src: '/figma-assets/457a3354faefcf652c2110710588f40233c79c64.png',
      alt: 'Signs and Wonders International Gathering',
      title: 'Signs & Wonders Gathering',
      country: 'Global Network',
    },
    {
      id: 'r2-5',
      src: '/figma-assets/ff7b25464623ab07ec009c6cc6d0508eb168c5a7.png',
      alt: 'Overseas Gospel Miracle Gathering',
      title: 'International Miracle Night',
      country: 'Worldwide',
    },
  ]

  const row1Duplicated = [...row1Photos, ...row1Photos]
  const row2Duplicated = [...row2Photos, ...row2Photos]

  return (
    <section className="py-8 sm:py-14 md:py-20 bg-[#fdfbf3] overflow-hidden select-none" data-node-id="275:810">
      {/* Dark Navy Section Header Bar (Figma 275:994, 275:997, 275:999, 275:1009) */}
      <div className="bg-[#122f4a] py-5 sm:py-7 md:py-8 text-white relative shadow-sm">
        <div className="w-full flex items-center justify-between">
          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

          <h2 className="font-poppins font-bold text-white text-sm sm:text-2xl md:text-[28px] text-center px-3 sm:px-8 md:px-12 tracking-wide flex-shrink min-w-0">
            Man Of God International Presence
          </h2>

          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 sm:pt-8">
        <p className="font-poppins text-slate-600 text-xs sm:text-base md:text-[17px] max-w-2xl mx-auto">
          Spreading the revival fire, establishing branches, and connecting with global leadership across continents.
        </p>
      </div>

      {/* Bidirectional Infinite Moving Sliders */}
      <div className="relative mt-6 sm:mt-10 md:mt-12 w-full overflow-hidden space-y-4 sm:space-y-6">
        {/* Row 1: Moving LEFT */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-left flex gap-4 sm:gap-6 py-1">
            {row1Duplicated.map((photo, idx) => (
              <div
                key={`${photo.id}-${idx}`}
                className="relative flex-shrink-0 w-[240px] sm:w-[320px] md:w-[380px] h-[155px] sm:h-[210px] md:h-[240px] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-md sm:shadow-lg border border-amber-200/50 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={idx < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                {/* Card Caption Tag */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-left pointer-events-none">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#efbf04] text-[#0b0c1c] font-poppins font-semibold text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                    {photo.country}
                  </span>
                  <p className="font-poppins font-medium text-white text-xs sm:text-sm line-clamp-1">
                    {photo.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moving RIGHT */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-right flex gap-4 sm:gap-6 py-1">
            {row2Duplicated.map((photo, idx) => (
              <div
                key={`${photo.id}-${idx}`}
                className="relative flex-shrink-0 w-[240px] sm:w-[320px] md:w-[380px] h-[155px] sm:h-[210px] md:h-[240px] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-md sm:shadow-lg border border-amber-200/50 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={idx < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                {/* Card Caption Tag */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-left pointer-events-none">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#efbf04] text-[#0b0c1c] font-poppins font-semibold text-[10px] sm:text-xs uppercase tracking-wider mb-1">
                    {photo.country}
                  </span>
                  <p className="font-poppins font-medium text-white text-xs sm:text-sm line-clamp-1">
                    {photo.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
