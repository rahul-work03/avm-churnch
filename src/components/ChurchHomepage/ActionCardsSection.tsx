import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ActionCardsSection: React.FC = () => {
  const cards = [
    {
      id: '238:1757',
      title: 'Prayer Request',
      titleNodeId: '238:1759',
      buttonNodeId: '238:1758',
      image: '/figma-assets/57480aa2a936a6736575d4686f5155c1bef93b95.png',
      href: '/prayer-request',
      buttonVariant: 'solid', // bg-[#112e49] text-white
    },
    {
      id: '238:1761',
      title: 'Offerings',
      titleNodeId: '238:1763',
      buttonNodeId: '238:1762',
      image: '/figma-assets/1ada0f49bc0906e341e695f4fbc1eb1ad22d494a.png',
      href: '/give',
      buttonVariant: 'outline', // border border-[#003471] text-[#003471]
    },
    {
      id: '238:1794',
      title: 'Zoom Lay Hand',
      titleNodeId: '238:1796',
      buttonNodeId: '238:1795',
      image: '/figma-assets/c83b945c00cc8d9e53f94a7c5903ad702134ed2e.png',
      href: '/zoom-lay-hand',
      buttonVariant: 'outline',
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-slate-50/50">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#f3f3f3] rounded-[16px] p-6 shadow-[0px_12px_16px_0px_rgba(172,172,172,0.08),0px_4px_6px_0px_rgba(125,125,125,0.03)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
              data-node-id={card.id}
            >
              {/* Card Image */}
              <div className="relative w-full h-[225px] rounded-[10px] overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <Link
                  href={card.href}
                  className={`block w-full py-3.5 rounded-full text-center font-poppins font-medium text-lg transition-all shadow-sm ${
                    card.buttonVariant === 'solid'
                      ? 'bg-[#112e49] text-white hover:bg-[#0c2033] hover:shadow-md'
                      : 'border-2 border-[#003471] text-[#003471] hover:bg-[#003471] hover:text-white'
                  }`}
                  data-node-id={card.buttonNodeId}
                >
                  <span data-node-id={card.titleNodeId}>{card.title}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

