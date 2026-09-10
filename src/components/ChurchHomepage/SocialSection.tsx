import React from 'react'
import Image from 'next/image'

export const SocialSection: React.FC = () => {
  const socials = [
    {
      name: 'Face book',
      icon: '/figma-assets/1000c8930e20ed36bed8ffb8dfe469ab0d4d825d.png',
      url: 'https://www.facebook.com/ankurnarulaministries',
      gradient: 'linear-gradient(135deg, #f5f5f5 35%, #d0dff7 100%)',
      borderColor: 'border-blue-200/50',
    },
    {
      name: 'Instagram',
      icon: '/figma-assets/1ea0c771bc0b617149a2649014021ddbe9052d3c.png',
      url: 'https://www.instagram.com/ankurnarulaministries?igsh=NmEzcDFsYnc4YWEw',
      gradient: 'linear-gradient(135deg, #f5f5f5 35%, #f6d2e5 100%)',
      borderColor: 'border-pink-200/50',
    },
    {
      name: 'YouTube',
      icon: '/figma-assets/03d0971659fbfe0e0c5d721bd1b4ef353529bf77.png',
      url: 'https://www.youtube.com/channel/UCYwyl0lfL0UzP-1LMtcoH-w',
      gradient: 'linear-gradient(135deg, #f5f5f5 35%, #f6d0d2 100%)',
      borderColor: 'border-red-200/50',
    },
    {
      name: 'X - Twitter',
      icon: '/figma-assets/f36d37f4eb1cec806e68f71581ccb711a0245f39.png',
      url: 'https://x.com/apostleankur',
      gradient: 'linear-gradient(135deg, #f5f5f5 25%, #cbd5e1 100%)',
      borderColor: 'border-slate-300/50',
    },
  ]

  return (
    <section className="py-14 sm:py-18 md:py-24 bg-white" data-node-id="274:3">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="font-poppins font-medium text-[#d5582a] md:text-[#d5582a] text-2xl sm:text-3xl md:text-[34px] tracking-tight">
          Our Social Media Platforms
        </h2>
        <p className="font-poppins text-[#8c8c8c] text-sm sm:text-base md:text-[18px] mt-1.5">
          Be a Part of Our Family
        </p>

        {/* 4 Social Cards (Figma 274:3 / 274:292) */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full max-w-[380px] sm:max-w-none rounded-[12px] p-6 h-[145px] sm:h-[160px] flex flex-col items-center justify-center border ${s.borderColor} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group`}
              style={{ backgroundImage: s.gradient }}
            >
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                <Image
                  src={s.icon}
                  alt={s.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <span className="font-poppins font-medium text-[#0b131d] text-lg sm:text-xl md:text-[22px] mt-3 sm:mt-4 group-hover:text-black transition-colors">
                {s.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
