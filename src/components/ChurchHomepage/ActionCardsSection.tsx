'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StaggerContainer, StaggerItem } from '@/components/ui/reveal'
import { TextWordReveal } from '@/components/ui/text-reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface ActionCardItem {
  id?: string
  title: string
  image?: any
  imageFallback?: string
  href: string
  buttonVariant?: 'solid' | 'outline' | string
}

export interface ActionCardsSectionProps {
  cards?: ActionCardItem[]
}

const DEFAULT_CARDS: ActionCardItem[] = [
  {
    id: '274:39',
    title: 'Prayer Request',
    imageFallback: '/prayer_request_homepage.png',
    href: '/prayer-request',
    buttonVariant: 'outline',
  },
  {
    id: '274:43',
    title: 'Offerings',
    imageFallback: '/offerings_homepage.png',
    href: '/give',
    buttonVariant: 'outline',
  },
  {
    id: '274:76',
    title: 'Zoom Lay Hand',
    imageFallback: '/zoom_lay_hand_homepage.png',
    href: '/zoom-lay-hand',
    buttonVariant: 'outline',
  },
]

export const ActionCardsSection: React.FC<ActionCardsSectionProps> = ({ cards }) => {
  const displayCards = cards && cards.length > 0 ? cards : DEFAULT_CARDS

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-[#f8fafc]" data-node-id="274:3">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center"
        >
          {displayCards.map((card, idx) => {
            const resolvedImgUrl = getMediaUrl(card.image, card.imageFallback || '/prayer_request_homepage.png')

            return (
              <StaggerItem
                key={card.id || idx}
                direction="up"
                distance={24}
                duration={0.6}
                className="w-full max-w-[340px] md:max-w-[330px] bg-white border border-[#eaeaea] rounded-[16px] p-5 sm:p-6 shadow-[0px_6px_18px_rgba(0,0,0,0.03)] flex flex-col items-center justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
                data-node-id={card.id}
              >
                {/* Contained & Minimal Card Image Thumbnail */}
                <Link
                  href={card.href}
                  className="block relative w-full h-[120px] sm:h-[135px] md:h-[140px] flex items-center justify-center rounded-[10px] overflow-hidden bg-transparent group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <Image
                    src={resolvedImgUrl}
                    alt={card.title}
                    fill
                    className="object-contain p-2"
                  />
                </Link>

                {/* Action Button: No BG initially -> fills #112e49 on hover & mobile click */}
                <div className="mt-5 w-full flex justify-center">
                  <Link
                    href={card.href}
                    className="w-full max-w-[240px] h-[46px] sm:h-[48px] rounded-full flex items-center justify-center font-poppins font-medium text-sm sm:text-[15px] border border-[#112e49] text-[#112e49] bg-transparent hover:bg-[#112e49] hover:text-white active:bg-[#112e49] active:text-white active:scale-95 transition-all duration-200 shadow-sm"
                  >
                    <TextWordReveal
                      as="span"
                      delay={0.1 + idx * 0.05}
                      staggerDelay={0.03}
                    >
                      {card.title}
                    </TextWordReveal>
                  </Link>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
