'use client'

import React, {
  useRef,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export const DEFAULT_GALLERY_IMAGES = [
  'https://cdn.21st.dev/assets/mirror/a9/a9c2900d44fe6288b344f447cb12a05f7e64c439479a8ccb977d3b20eb371156.jpg',
  'https://cdn.21st.dev/assets/mirror/29/29cf6ad39eb198c05b8d915fca0becfd3d270d510d32eaec1b886c426c681c67.jpg',
  'https://cdn.21st.dev/assets/mirror/61/6154958e9df110914005256ff2319d43a2c2e0fc8bb54e9f8bce7b91fdce5df1.jpg',
  'https://cdn.21st.dev/assets/mirror/6d/6db92aff3c02cce69e2c672a6dd4e99cbf5c55d68fbf08c460527e6c7c5b64ba.jpg',
  'https://cdn.21st.dev/assets/mirror/42/42ad2d0680dba697d578434e5af5620c7ab1c7c55bc36cec3b55eec8b7a79cbf.jpg',
  'https://cdn.21st.dev/assets/mirror/cd/cd3dc09b1bbed97cfc879e2c5e62fdbc68dc4070b6105e476410d70e31d1e459.jpg',
  'https://cdn.21st.dev/assets/mirror/02/0232d63e3e0cb8d3599a77e29f87f8ec4b9fadfd031592296b3f19a730a5348c.jpg',
  'https://cdn.21st.dev/assets/mirror/56/562b212caa6ec06d8b0b313660dac6aa0bbfb729092cc4f16d04558a319af6b1.jpg',
  'https://cdn.21st.dev/assets/mirror/02/02cbcd62720734d469f2ea8e5ed7a212e18cb05e73457445b4d755ad0ae1fcd8.jpg',
  'https://images.unsplash.com/photo-1550614000-4b95d4ed798a?auto=format&fit=crop&w=600&q=80',
  'https://cdn.21st.dev/assets/mirror/c4/c42df7c9c444a1189dad0570c0d01986454cd6a10eaf253a9ab40eb921a5bae5.jpg',
  'https://cdn.21st.dev/assets/mirror/27/275fbf3f84c5258c7a8235a8a47022f847d0f408c950288c532aefa83d072a2c.jpg',
  'https://cdn.21st.dev/assets/mirror/7e/7e2fb073870b2f578a37a693b1e0c9402a98201149509b54da2f86a2ee6abf5e.jpg',
  'https://cdn.21st.dev/assets/mirror/3d/3d74651780292fb5a2ba23e525d9d09860bb83fbfafc7ede17b8e3662d7b1022.jpg',
]

export interface ImageCardProps {
  src: string
  alt?: string
  onLoad?: () => void
  onClick?: () => void
}

export const ImageCard: React.FC<ImageCardProps> = ({ src, alt = 'Gallery Asset', onLoad, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px] flex-shrink-0 bg-[#11161d] rounded-2xl overflow-hidden border border-white/10 hover:border-[#efbf04]/70 transition-all duration-500 hover:scale-[1.03] cursor-pointer relative will-change-transform backface-hidden preserve-3d group shadow-lg hover:shadow-[0_12px_30px_rgba(239,191,4,0.2)]"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={onLoad}
        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 select-none"
      />
      {/* Subtle gold bottom accent sheen */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}

export interface ParallaxUnfurlingGalleryProps {
  images?: string[]
  eyebrow?: string
  title?: string
  subtitle?: string
  className?: string
  onImageClick?: (src: string, index: number) => void
}

export default function ParallaxUnfurlingGallery({
  images = DEFAULT_GALLERY_IMAGES,
  eyebrow = 'SACRED MOMENTS',
  title = 'Moments of Glory & Faith',
  subtitle = 'Experience the vibrant atmosphere of worship, miracle crusades, and global leadership',
  className = '',
  onImageClick,
}: ParallaxUnfurlingGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)
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

  const activeImages = images && images.length > 0 ? images : DEFAULT_GALLERY_IMAGES

  const colMedia = useMemo(() => {
    const col1Base = activeImages.filter((_, i) => i % 4 === 0)
    const col2Base = activeImages.filter((_, i) => i % 4 === 1)
    const col3Base = activeImages.filter((_, i) => i % 4 === 2)
    const col4Base = activeImages.filter((_, i) => i % 4 === 3)

    return {
      col1: [...col1Base, ...col1Base],
      col2: [...col2Base, ...col2Base],
      col3: [...col3Base, ...col3Base],
      col4: [...col4Base, ...col4Base],
    }
  }, [activeImages])

  // Window/Section linked scroll progress for seamless in-page scrolling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  })

  // Banner expanding animations with luxury gold accents
  const bannerWidth = useTransform(smoothProgress, [0, 0.15], ['92vw', '100vw'])
  const bannerHeight = useTransform(smoothProgress, [0, 0.15], ['82vh', '100vh'])
  const bannerRadius = useTransform(smoothProgress, [0, 0.15], ['40px', '0px'])
  const bannerBorderWidth = useTransform(smoothProgress, [0, 0.15], ['2px', '0px'])
  const headerOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0])
  const headerY = useTransform(smoothProgress, [0, 0.12], [0, -40])

  // 3D Matrix matrix transforms
  const rotateY = useTransform(smoothProgress, [0.15, 1], [-45, -6])
  const rotateX = useTransform(smoothProgress, [0.15, 1], [25, 4])
  const rotateZ = useTransform(smoothProgress, [0.15, 1], [15, 2])
  const translateZ = useTransform(smoothProgress, [0.15, 1], [-800, 0])

  // Track columns parallax animations
  const yCol1 = useTransform(smoothProgress, [0.15, 1], ['0%', '-40%'])
  const yCol2 = useTransform(smoothProgress, [0.15, 1], ['-40%', '10%'])
  const yCol3 = useTransform(smoothProgress, [0.15, 1], ['0%', '-40%'])
  const yCol4 = useTransform(smoothProgress, [0.15, 1], ['-30%', '20%'])

  return (
    <div className={`w-full bg-[#05070B] overflow-x-hidden ${className}`}>
      <section
        ref={containerRef}
        className="relative w-full h-[500vh] sm:h-[600vh] bg-[#05070B] text-white selection:bg-[#efbf04]/30 selection:text-white"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden">
          {/* Introductory Floating Title when unfurling starts */}
          <motion.div
            style={{ opacity: headerOpacity, y: headerY }}
            className="absolute top-12 md:top-16 z-30 flex flex-col items-center text-center px-4 pointer-events-none"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#efbf04]/10 border border-[#efbf04]/30 text-[#efbf04] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] mb-3 backdrop-blur-md shadow-[0_2px_12px_rgba(239,191,4,0.15)]">
              <span className="text-[#efbf04]">✝</span>
              <span>{eyebrow}</span>
              <span className="text-[#efbf04]">✝</span>
            </div>
            <h2 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-white/70 max-w-xl font-lato">
              {subtitle}
            </p>
          </motion.div>

          {/* Unfurling Viewport Matrix */}
          <motion.div
            style={{
              width: bannerWidth,
              height: bannerHeight,
              borderRadius: bannerRadius,
              borderWidth: bannerBorderWidth,
              borderColor: 'rgba(239, 191, 4, 0.4)',
            }}
            className="relative bg-[#080B10] overflow-hidden flex items-center justify-center max-w-[1920px] mx-auto will-change-transform backface-hidden preserve-3d shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
          >
            <div
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{ perspective: '1200px' }}
            >
              {/* Ambient Vignette & Sacred Gold Glow Masking */}
              <div className="absolute inset-0 z-20 shadow-[inset_0_120px_160px_-50px_rgba(5,7,11,1),inset_0_-120px_160px_-50px_rgba(5,7,11,1)]" />
              <div className="absolute inset-0 z-20 shadow-[inset_160px_0_160px_-50px_rgba(5,7,11,1),inset_-160px_0_160px_-50px_rgba(5,7,11,1)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-[#efbf04]/5 rounded-full blur-[140px] pointer-events-none z-10" />

              {/* Parallax Image Grid Matrix */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  rotateZ,
                  z: translateZ,
                  transformStyle: 'preserve-3d',
                }}
                className="flex gap-4 sm:gap-6 md:gap-8 justify-center items-center w-[125vw] h-[155vh] origin-center opacity-100 will-change-transform backface-hidden"
              >
                <motion.div
                  style={{ y: yCol1 }}
                  className="flex flex-col gap-4 sm:gap-6 w-[24vw] min-w-[180px] sm:min-w-[220px] md:min-w-[280px] pointer-events-auto"
                >
                  {colMedia.col1.map((src, index) => (
                    <ImageCard
                      key={`col1-${index}`}
                      src={src}
                      onLoad={handleItemLoad}
                      onClick={() => onImageClick?.(src, index)}
                    />
                  ))}
                </motion.div>

                <motion.div
                  style={{ y: yCol2 }}
                  className="flex flex-col gap-4 sm:gap-6 w-[24vw] min-w-[180px] sm:min-w-[220px] md:min-w-[280px] pointer-events-auto"
                >
                  {colMedia.col2.map((src, index) => (
                    <ImageCard
                      key={`col2-${index}`}
                      src={src}
                      onLoad={handleItemLoad}
                      onClick={() => onImageClick?.(src, index)}
                    />
                  ))}
                </motion.div>

                <motion.div
                  style={{ y: yCol3 }}
                  className="flex flex-col gap-4 sm:gap-6 w-[24vw] min-w-[180px] sm:min-w-[220px] md:min-w-[280px] pointer-events-auto"
                >
                  {colMedia.col3.map((src, index) => (
                    <ImageCard
                      key={`col3-${index}`}
                      src={src}
                      onLoad={handleItemLoad}
                      onClick={() => onImageClick?.(src, index)}
                    />
                  ))}
                </motion.div>

                <motion.div
                  style={{ y: yCol4 }}
                  className="flex flex-col gap-4 sm:gap-6 w-[24vw] min-w-[180px] sm:min-w-[220px] md:min-w-[280px] pointer-events-auto"
                >
                  {colMedia.col4.map((src, index) => (
                    <ImageCard
                      key={`col4-${index}`}
                      src={src}
                      onLoad={handleItemLoad}
                      onClick={() => onImageClick?.(src, index)}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
