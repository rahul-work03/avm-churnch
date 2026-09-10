import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ActionCardsSection: React.FC = () => {
  const cards = [
    {
      id: '274:39',
      title: 'Prayer Request',
      image: '/figma-assets/57480aa2a936a6736575d4686f5155c1bef93b95.png',
      href: '/prayer-request',
      buttonVariant: 'solid', // bg-[#112e49] text-white
    },
    {
      id: '274:43',
      title: 'Offerings',
      image: '/figma-assets/1ada0f49bc0906e341e695f4fbc1eb1ad22d494a.png',
      href: '/give',
      buttonVariant: 'outline', // border border-[#003471] text-[#003471]
    },
    {
      id: '274:76',
      title: 'Zoom Lay Hand',
      image: '/figma-assets/c83b945c00cc8d9e53f94a7c5903ad702134ed2e.png',
      href: '/zoom-lay-hand',
      buttonVariant: 'outline',
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#f8fafc]" data-node-id="274:3">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-full max-w-[380px] md:max-w-[367px] bg-white border border-[#f3f3f3] rounded-[8px] p-6 shadow-[0px_12px_16px_0px_rgba(172,172,172,0.08),0px_4px_6px_0px_rgba(125,125,125,0.03)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
              data-node-id={card.id}
            >
              {/* Card Image Thumbnail */}
              <div className="relative w-full h-[215px] sm:h-[225px] rounded-[8px] overflow-hidden bg-slate-100 flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Action Button (Figma 274:40, 274:44, 274:77: 270px x 56px rounded-[100px]) */}
              <div className="mt-6 flex justify-center">
                <Link
                  href={card.href}
                  className={`w-full max-w-[270px] h-[52px] sm:h-[56px] rounded-full flex items-center justify-center font-poppins font-medium text-base sm:text-[20px] transition-all duration-200 shadow-sm ${
                    card.buttonVariant === 'solid'
                      ? 'bg-[#112e49] text-white hover:bg-[#0c2033] hover:shadow-md active:scale-95'
                      : 'border border-[#003471] text-[#003471] hover:bg-[#003471] hover:text-white active:scale-95'
                  }`}
                >
                  <span>{card.title}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
