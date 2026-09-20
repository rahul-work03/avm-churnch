'use client'

import React from 'react'
import { CardCarousel, type CardCarouselItem } from '@/components/ui/card-carousel'
import { RevealOnScroll } from '@/components/ui/reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface LeaderImageItem {
  image?: any
  imageFallback?: string
  alt?: string
  title?: string
  subtitle?: string
}

export interface OurLeadersSectionProps {
  headerTitle?: string
  leaderImages?: LeaderImageItem[]
  paragraph1?: string
  paragraph2?: string
  paragraph3?: string
}

const DEFAULT_LEADER_IMAGES: CardCarouselItem[] = [
  {
    src: '/figma-assets/our_leaders_image_1.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula',
    title: 'Apostle Dr. Ankur & Pastor Sonia Narula',
    subtitle: 'Spiritual Overseers & Senior Pastors',
  },
  {
    src: '/figma-assets/our_leaders_image_2.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula at Pulpit',
    title: 'Word of Faith & Grace',
    subtitle: 'Sunday Live Ministry',
  },
  {
    src: '/figma-assets/our_leaders_image_3.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula - Ministry Attire',
    title: 'Apostolic Leadership',
    subtitle: 'The Church of Signs and Wonders',
  },
  {
    src: '/figma-assets/man_of_god_image_1.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula Ministering at Main Stage',
    title: 'Apostle Dr. Ankur Yoseph Narula',
    subtitle: 'Anointed Stage Ministry',
  },
  {
    src: '/figma-assets/b833aca853efbb1993ea3ceec33bdb2370c72d55.png',
    alt: 'Pastor Sonia Yoseph Narula Preaching to Multitudes',
    title: 'Pastor Sonia Yoseph Narula',
    subtitle: 'Thursday Prophetic Service',
  },
  {
    src: '/figma-assets/0ad2c07b6a72c78c1e66fec5b816a26e3f587185.png',
    alt: 'Pastor Sonia Yoseph Narula Ministering at Podium',
    title: 'Healing & Deliverance Ministry',
    subtitle: 'Revival Word Proclamation',
  },
]

export const OurLeadersSection: React.FC<OurLeadersSectionProps> = ({
  headerTitle = 'Our Leaders',
  leaderImages,
  paragraph1 = 'The Church of Signs and Wonders (Ankur Narula Ministries) is a fast-growing revival ministry based in Punjab, India, committed to preaching the Gospel of Jesus Christ through the power of the Holy Spirit. Founded in 2004 with just three members, the ministry has grown by God’s grace into a global revival movement where lakhs gather weekly to worship, receive the Word, and experience healing, deliverance, and transformation.',
  paragraph2 = 'Led by Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula, the ministry serves millions through church services, live broadcasts, revival crusades, and the establishment of 200+ churches worldwide. With a strong heart for compassion, the ministry also supports the needy through charitable initiatives and a 24×7 Prayer Call Center, offering prayer and counsel to people across the world—reflecting the love and power of Christ in action.',
  paragraph3 = 'Ankur Narula Ministries, led by Apostle Dr. Ankur Yoseph Narula, is a powerful Holy Spirit-led movement based in Punjab, India. Known for healing, deliverance, and prophetic ministry, to lead souls to Christ and transform lives. Follow for powerful sermons, live broadcasts, testimonies, and daily encouragement.',
}) => {
  const formattedImages: CardCarouselItem[] =
    leaderImages && leaderImages.length > 0
      ? leaderImages.map((img) => ({
          src: getMediaUrl(img.image, img.imageFallback || '/figma-assets/our_leaders_image_1.png'),
          alt: img.alt || img.title || 'Leader',
          title: img.title || '',
          subtitle: img.subtitle || '',
        }))
      : DEFAULT_LEADER_IMAGES

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white overflow-hidden" data-node-id="275:810">
      {/* Section Header with Left & Right Gold Accent Bars */}
      <RevealOnScroll direction="none" duration={0.6} className="w-full flex items-center justify-between mb-2 sm:mb-4">
        <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[5px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm flex-shrink-0" />

        <div className="text-center px-3 sm:px-6 md:px-10 flex-shrink min-w-0">
          <h2 className="font-poppins font-semibold text-[#003471] text-xl sm:text-3xl md:text-[34px] leading-tight tracking-tight whitespace-nowrap">
            {headerTitle}
          </h2>
        </div>

        <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[5px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm flex-shrink-0" />
      </RevealOnScroll>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 6-Photo Symmetrical Swiper Card Carousel */}
        <RevealOnScroll direction="up" distance={24} duration={0.8} delay={0.1} className="mt-4 sm:mt-6 md:mt-8">
          <CardCarousel
            images={formattedImages}
            autoplayDelay={3000}
            showNavigation={true}
            showPagination={true}
          />
        </RevealOnScroll>

        {/* Detailed Ministry Narrative Text Blocks */}
        <RevealOnScroll direction="up" distance={20} duration={0.7} delay={0.2} className="mt-8 sm:mt-12 md:mt-14 max-w-4xl mx-auto text-center px-2 sm:px-4 space-y-4 sm:space-y-6">
          <p className="font-poppins text-[#333333] text-xs sm:text-base md:text-[18px] leading-relaxed">
            {paragraph1}
          </p>

          <p className="font-lato text-[#333333] text-xs sm:text-base md:text-[19px] leading-relaxed">
            {paragraph2}
          </p>

          <p className="font-lato text-[#333333] text-xs sm:text-base md:text-[19px] leading-relaxed">
            {paragraph3}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
