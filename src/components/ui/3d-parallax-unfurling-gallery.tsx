'use client'

import React, {
  useRef,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export interface GalleryPhotoItem {
  id?: string
  src: string
  alt?: string
  caption?: string
  category?: string
}

export const DEFAULT_GALLERY_ITEMS: GalleryPhotoItem[] = [
  // Row 1 (Items 0, 1, 2, 3)
  {
    id: 'top-1',
    src: '/gallery/top_row_1.png',
    alt: 'Pastor Sonia Yoseph Narula Preaching Grace and Faith',
    caption: 'Pastor Sonia Yoseph Narula Ministering during Live Thursday Service',
    category: 'Worship & Faith',
  },
  {
    id: 'top-2',
    src: '/gallery/top_row_2.png',
    alt: 'Pastor Sonia Preaching with Illuminated Cross Backdrop',
    caption: 'Worship Atmosphere with the Glorious Cross in Signs & Wonders Church',
    category: 'Sacred Sanctuary',
  },
  {
    id: 'top-3',
    src: '/gallery/top_row_3.png',
    alt: 'Pastor Sonia Preaching to Multitudes',
    caption: 'Pastor Sonia Yoseph Narula Ministering with Power and Grace',
    category: 'Worship & Faith',
  },
  {
    id: 'top-4',
    src: '/gallery/top_row_4.png',
    alt: 'Apostle Dr. Ankur Narula Delivering Prophetic Ministry',
    caption: 'Apostle Dr. Ankur Yoseph Narula Preaching under the Holy Spirit Anointing',
    category: 'Word & Revival',
  },

  // Row 2 (Items 4, 5, 6, 7)
  {
    id: 'mid-1',
    src: '/gallery/middle_row_1.png',
    alt: 'Pastor Sonia Narula Ministering on Stage',
    caption: 'Preaching Healing and Deliverance to the Congregation',
    category: 'Healing & Miracles',
  },
  {
    id: 'mid-2',
    src: '/gallery/middle_row_2.png',
    alt: 'Worship Choir in Red Robes with Pastor Sonia',
    caption: 'The Anointed Signs and Wonders Worship Choir Leading Heavenly Praises',
    category: 'Heavenly Worship',
  },
  {
    id: 'mid-3',
    src: '/gallery/middle_row_3.png',
    alt: 'Pastor Sonia Preaching Live Service',
    caption: 'Live Service Broadcast across Nations',
    category: 'Global Broadcast',
  },
  {
    id: 'mid-4',
    src: '/gallery/middle_row_4.png',
    alt: 'Pastor Sonia Preaching with Golden Bokeh Lights',
    caption: 'The Glorious Light of Christ Touching Hearts and Transforming Lives',
    category: 'Sacred Sanctuary',
  },

  // Row 3 (Items 8, 9, 10, 11)
  {
    id: 'bot-left-1',
    src: '/gallery/bottom_left_1.png',
    alt: 'Apostle Dr. Ankur Narula with Open Bible',
    caption: 'Teaching the Uncompromised Word of God with Power and Clarity',
    category: 'Word & Revival',
  },
  {
    id: 'bot-left-2',
    src: '/gallery/bottom_left_2.png',
    alt: 'Apostle Dr. Ankur Narula on Stage',
    caption: 'Holy Spirit Fire and Apostolic Revival Gathering',
    category: 'Mass Crusades',
  },
  {
    id: 'bot-right-1',
    src: '/gallery/bottom_right_1.png',
    alt: 'Mass Congregation Gathering at Signs and Wonders Church',
    caption: 'Hundreds of Thousands Gathering Weekly for Worship and Miracles',
    category: 'Mass Crusades',
  },
  {
    id: 'bot-right-2',
    src: '/gallery/bottom_right_2.png',
    alt: 'Atmosphere of Prayer and Devotion',
    caption: 'Atmosphere of Praise and Worship at Ankur Narula Ministries',
    category: 'Heavenly Worship',
  },

  // Row 4 - Grand Climax Row (Items 12, 13, 14, 15)
  {
    id: 'arch-leaders',
    src: '/gallery/arch_leaders.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Yoseph Narula',
    caption: 'Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Yoseph Narula under the Holy Floral Arch',
    category: 'Pastoral Leadership',
  },
  {
    id: 'podium-hero',
    src: '/gallery/podium_hero.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula Preaching with Signs and Wonders',
    caption: 'Apostle Dr. Ankur Yoseph Narula Delivering the Living Word of God',
    category: 'Word & Revival',
  },
  {
    id: 'bot-right-3',
    src: '/gallery/bottom_right_3.png',
    alt: 'Pastoral Leaders Fellowship',
    caption: 'Leadership Devotion and Ministry Milestones',
    category: 'Pastoral Leadership',
  },
  {
    id: 'bot-right-4',
    src: '/gallery/bottom_right_4.png',
    alt: 'Mass Crusade Miracle Service',
    caption: 'Miracles, Signs, and Wonders across Multitudes',
    category: 'Mass Crusades',
  },
]

export interface ImageCardProps {
  item: GalleryPhotoItem
  onLoad?: () => void
  onClick?: () => void
}

export const ImageCard: React.FC<ImageCardProps> = ({ item, onLoad, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[390px] flex-shrink-0 bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#efbf04]/35 hover:border-[#efbf04] transition-all duration-300 hover:scale-[1.02] cursor-pointer relative will-change-transform backface-hidden preserve-3d group shadow-[0_10px_28px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_40px_rgba(239,191,4,0.35)]"
    >
      <img
        src={item.src}
        alt={item.alt || 'AVM Church Gallery Moment'}
        loading="lazy"
        onLoad={onLoad}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
      />
      {/* Subtle gold bottom accent caption on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c1c]/90 via-[#0b0c1c]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-4 sm:p-5">
        {item.category && (
          <span className="text-[#efbf04] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-1">
            {item.category}
          </span>
        )}
        {item.caption && (
          <p className="text-white text-xs sm:text-sm font-medium line-clamp-2 leading-snug drop-shadow-md font-lato">
            {item.caption}
          </p>
        )}
      </div>
    </div>
  )
}

export interface ParallaxUnfurlingGalleryProps {
  items?: GalleryPhotoItem[]
  className?: string
  onImageClick?: (item: GalleryPhotoItem, index: number) => void
}

export default function ParallaxUnfurlingGallery({
  items = DEFAULT_GALLERY_ITEMS,
  className = '',
  onImageClick,
}: ParallaxUnfurlingGalleryProps) {
  const containerRef = useRef<HTMLElement>(null)
  const [isReady, setIsReady] = useState(false)
  const loadedCountRef = useRef(0)

  const handleItemLoad = useCallback(() => {
    loadedCountRef.current += 1
    if (!isReady && loadedCountRef.current >= 1) setIsReady(true)
  }, [isReady])

  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 1200)
    return () => clearTimeout(t)
  }, [])

  // Ensure full 16 items for clean 4x4 matrix
  const activeItems = useMemo(() => {
    if (!items || items.length === 0) return DEFAULT_GALLERY_ITEMS
    if (items.length >= 16) return items.slice(0, 16)
    // Pad to 16 items from defaults if needed
    const padded = [...items]
    let idx = 0
    while (padded.length < 16) {
      padded.push(DEFAULT_GALLERY_ITEMS[idx % DEFAULT_GALLERY_ITEMS.length])
      idx++
    }
    return padded
  }, [items])

  // Exact 4x4 Column distribution: 4 cards in each column (Rows 1, 2, 3, 4)
  const colMedia = useMemo(() => {
    const col1 = [activeItems[0], activeItems[4], activeItems[8], activeItems[12]]
    const col2 = [activeItems[1], activeItems[5], activeItems[9], activeItems[13]]
    const col3 = [activeItems[2], activeItems[6], activeItems[10], activeItems[14]]
    const col4 = [activeItems[3], activeItems[7], activeItems[11], activeItems[15]]

    return { col1, col2, col3, col4 }
  }, [activeItems])

  // Window/Section linked scroll progress across the 4-row journey
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.4,
  })

  // 3D Matrix Parallax transforms: smoothly unrolls from 3D angled view into a 100% straight flat view by 0.75-1.0
  const rotateY = useTransform(smoothProgress, [0, 0.75, 1], [-28, 0, 0])
  const rotateX = useTransform(smoothProgress, [0, 0.75, 1], [16, 0, 0])
  const rotateZ = useTransform(smoothProgress, [0, 0.75, 1], [8, 0, 0])
  const translateZ = useTransform(smoothProgress, [0, 0.75, 1], [-220, 0, 0])

  // Scroll journey from Row 1 through Row 4:
  // At progress = 0: Top row (Row 1) is visible
  // As user scrolls: Rows 1 -> 2 -> 3 -> 4 pan through with dynamic parallax shifts
  // At progress = 1.0: Columns shift by -37.5% so Row 4 (the 4th and final row) is 100% FULLY and EVENLY displayed!
  const yCol1 = useTransform(smoothProgress, [0, 0.4, 0.8, 1], ['37.5%', '10%', '-25%', '-37.5%'])
  const yCol2 = useTransform(smoothProgress, [0, 0.4, 0.8, 1], ['25%', '-5%', '-45%', '-37.5%'])
  const yCol3 = useTransform(smoothProgress, [0, 0.4, 0.8, 1], ['42%', '15%', '-20%', '-37.5%'])
  const yCol4 = useTransform(smoothProgress, [0, 0.4, 0.8, 1], ['30%', '0%', '-40%', '-37.5%'])

  return (
    <section
      ref={containerRef}
      className={`relative w-full h-[280vh] sm:h-[300vh] bg-transparent text-[#0b0c1c] selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] ${className}`}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        {/* 4x4 3D Parallax Matrix -> Lands with Row 4 (4th row) fully in view */}
        <div
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
          style={{ perspective: '1200px' }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              rotateZ,
              z: translateZ,
              transformStyle: 'preserve-3d',
            }}
            className="flex gap-3.5 sm:gap-5 md:gap-6 justify-center items-center w-full max-w-[1440px] px-4 sm:px-6 mx-auto origin-center opacity-100 will-change-transform backface-hidden"
          >
            <motion.div
              style={{ y: yCol1 }}
              className="flex flex-col gap-4 sm:gap-6 w-[23vw] min-w-[170px] sm:min-w-[220px] md:min-w-[260px] max-w-[320px] pointer-events-auto flex-shrink-0"
            >
              {colMedia.col1.map((item, index) => (
                <ImageCard
                  key={`col1-${index}`}
                  item={item}
                  onLoad={handleItemLoad}
                  onClick={() => onImageClick?.(item, index)}
                />
              ))}
            </motion.div>

            <motion.div
              style={{ y: yCol2 }}
              className="flex flex-col gap-4 sm:gap-6 w-[23vw] min-w-[170px] sm:min-w-[220px] md:min-w-[260px] max-w-[320px] pointer-events-auto flex-shrink-0"
            >
              {colMedia.col2.map((item, index) => (
                <ImageCard
                  key={`col2-${index}`}
                  item={item}
                  onLoad={handleItemLoad}
                  onClick={() => onImageClick?.(item, index)}
                />
              ))}
            </motion.div>

            <motion.div
              style={{ y: yCol3 }}
              className="flex flex-col gap-4 sm:gap-6 w-[23vw] min-w-[170px] sm:min-w-[220px] md:min-w-[260px] max-w-[320px] pointer-events-auto flex-shrink-0"
            >
              {colMedia.col3.map((item, index) => (
                <ImageCard
                  key={`col3-${index}`}
                  item={item}
                  onLoad={handleItemLoad}
                  onClick={() => onImageClick?.(item, index)}
                />
              ))}
            </motion.div>

            <motion.div
              style={{ y: yCol4 }}
              className="flex flex-col gap-4 sm:gap-6 w-[23vw] min-w-[170px] sm:min-w-[220px] md:min-w-[260px] max-w-[320px] pointer-events-auto flex-shrink-0"
            >
              {colMedia.col4.map((item, index) => (
                <ImageCard
                  key={`col4-${index}`}
                  item={item}
                  onLoad={handleItemLoad}
                  onClick={() => onImageClick?.(item, index)}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
