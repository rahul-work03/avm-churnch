import React from 'react'
import Image from 'next/image'

interface PresencePhoto {
  id: string
  src: string
  alt: string
  title: string
  country: string
  nodeId?: string
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
      nodeId: '218:2276',
    },
    {
      id: 'r1-2',
      src: '/figma-assets/c83b945c00cc8d9e53f94a7c5903ad702134ed2e.png',
      alt: 'Apostle Dr. Ankur Narula with World Leaders',
      title: 'Honorary Recognition Assembly',
      country: 'United States',
      nodeId: '218:2278',
    },
    {
      id: 'r1-3',
      src: '/figma-assets/7943a96b8cbd9a1d629265528efec1a38a3d4265.png',
      alt: 'Overseas Mission Outreach Fellowship',
      title: 'Apostolic Mission Outreach',
      country: 'Canada',
      nodeId: '218:2281',
    },
    {
      id: 'r1-4',
      src: '/figma-assets/65d53a88c2c188c19f670266ce9b27e83745bb6b.png',
      alt: 'Global Doctorate and Faith Citation',
      title: 'International Theological Honors',
      country: 'Europe',
      nodeId: '218:2282',
    },
    {
      id: 'r1-5',
      src: '/figma-assets/57480aa2a936a6736575d4686f5155c1bef93b95.png',
      alt: 'Revival Summit and Global Delegation',
      title: 'Worldwide Revival Summit',
      country: 'Middle East & Asia',
      nodeId: '218:2280',
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
      nodeId: '218:2277',
    },
    {
      id: 'r2-2',
      src: '/figma-assets/1293a243cd5f4ddaa9c70378ddffe38c61e7ffb6.png',
      alt: 'International Believers and Ministers Assembly',
      title: 'Global Ministers Fellowship',
      country: 'Australia & Pacific',
      nodeId: '218:2284',
    },
    {
      id: 'r2-3',
      src: '/figma-assets/f1c7c30e211dc39094fc986db7a7e7d876202f58.png',
      alt: 'Atmosphere of Fire International Convention',
      title: 'Supernatural Fire Conference',
      country: 'Africa Mission',
      nodeId: '218:2276',
    },
    {
      id: 'r2-4',
      src: '/figma-assets/457a3354faefcf652c2110710588f40233c79c64.png',
      alt: 'Signs and Wonders International Gathering',
      title: 'Signs & Wonders Gathering',
      country: 'Global Network',
      nodeId: '218:2278',
    },
    {
      id: 'r2-5',
      src: '/figma-assets/ff7b25464623ab07ec009c6cc6d0508eb168c5a7.png',
      alt: 'Overseas Gospel Miracle Gathering',
      title: 'International Miracle Night',
      country: 'Worldwide',
      nodeId: '218:2281',
    },
  ]

  // Duplicate arrays to create seamless, continuous infinite loops
  const row1Duplicated = [...row1Photos, ...row1Photos]
  const row2Duplicated = [...row2Photos, ...row2Photos]

  return (
    <section className="py-14 md:py-24 bg-[#fdfbf3] overflow-hidden select-none" data-node-id="218:2276">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header with Golden Emblems on both sides */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <div
            className="relative w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0 bg-[#efbf04]"
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

          <h2 className="font-poppins font-bold text-[#003471] text-xl sm:text-2xl md:text-[32px] tracking-wide uppercase">
            MAN OF GOD INTERNATIONAL PRESENCE
          </h2>

          <div
            className="relative w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
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

        <p className="font-poppins text-slate-600 text-sm sm:text-base md:text-[17px] mt-2 sm:mt-3 max-w-2xl mx-auto">
          Spreading the revival fire, establishing branches, and connecting with global leadership across continents.
        </p>
      </div>

      {/* Bidirectional Infinite Moving Sliders */}
      <div className="relative mt-8 sm:mt-14 w-full overflow-hidden space-y-4 sm:space-y-6">
        {/* Row 1: Moving LEFT */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-left flex gap-4 sm:gap-6 py-1">
            {row1Duplicated.map((photo, idx) => (
              <div
                key={`${photo.id}-${idx}`}
                className="relative flex-shrink-0 w-[240px] sm:w-[320px] md:w-[380px] h-[160px] sm:h-[210px] md:h-[250px] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-md sm:shadow-lg border border-amber-200/50 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                data-node-id={photo.nodeId}
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
                className="relative flex-shrink-0 w-[240px] sm:w-[320px] md:w-[380px] h-[160px] sm:h-[210px] md:h-[250px] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-md sm:shadow-lg border border-amber-200/50 bg-slate-900 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                data-node-id={photo.nodeId}
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
