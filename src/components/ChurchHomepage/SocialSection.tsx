import React from 'react'
import Image from 'next/image'

export const SocialSection: React.FC = () => {
  const socials = [
    {
      name: 'Face book',
      nodeId: '238:1990',
      textNodeId: '238:1997',
      iconNodeId: '238:1993',
      icon: '/figma-assets/1000c8930e20ed36bed8ffb8dfe469ab0d4d825d.png',
      url: 'https://www.facebook.com/ankurnarulaministries',
      gradient: 'linear-gradient(135deg, #f5f5f5 35%, #d0dff7 100%)',
      borderColor: 'border-blue-200/50',
    },
    {
      name: 'Instagram',
      nodeId: '238:1992',
      textNodeId: '238:1998',
      iconNodeId: '238:1996',
      icon: '/figma-assets/1ea0c771bc0b617149a2649014021ddbe9052d3c.png',
      url: 'https://www.instagram.com/ankurnarulaministries?igsh=NmEzcDFsYnc4YWEw',
      gradient: 'linear-gradient(135deg, #f5f5f5 35%, #f6d2e5 100%)',
      borderColor: 'border-pink-200/50',
    },
    {
      name: 'YouTube',
      nodeId: '238:1991',
      textNodeId: '238:1999',
      iconNodeId: '238:1995',
      icon: '/figma-assets/03d0971659fbfe0e0c5d721bd1b4ef353529bf77.png',
      url: 'https://www.youtube.com/channel/UCYwyl0lfL0UzP-1LMtcoH-w',
      gradient: 'linear-gradient(135deg, #f5f5f5 35%, #f6d0d2 100%)',
      borderColor: 'border-red-200/50',
    },
    {
      name: 'X - Twitter',
      nodeId: '238:1989',
      textNodeId: '238:2000',
      iconNodeId: '238:1994',
      icon: '/figma-assets/f36d37f4eb1cec806e68f71581ccb711a0245f39.png',
      url: 'https://x.com/apostleankur',
      gradient: 'linear-gradient(135deg, #f5f5f5 25%, #cbd5e1 100%)',
      borderColor: 'border-slate-300/50',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white" data-node-id="238:1935">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="font-poppins font-medium text-[#000000] text-2xl sm:text-3xl md:text-[38px] tracking-tight" data-node-id="238:1935">
          Our Social Media Platforms
        </h2>
        <p className="font-poppins text-[#64748b] text-base sm:text-lg md:text-[20px] mt-2" data-node-id="238:1937">
          Be a Part of Our Family
        </p>

        {/* 4 Social Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-[12px] p-6 h-[160px] flex flex-col items-center justify-center border ${s.borderColor} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group`}
              style={{ backgroundImage: s.gradient }}
              data-node-id={s.nodeId}
            >
              <div className="relative w-8 h-8 flex-shrink-0" data-node-id={s.iconNodeId}>
                <Image
                  src={s.icon}
                  alt={s.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <span className="font-poppins font-medium text-[#0b131d] text-xl sm:text-2xl mt-4 group-hover:text-black transition-colors" data-node-id={s.textNodeId}>
                {s.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

