'use client'

import React, { useState, useMemo, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import ParallaxUnfurlingGallery, {
  type GalleryPhotoItem,
  DEFAULT_GALLERY_ITEMS,
} from '@/components/ui/3d-parallax-unfurling-gallery'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { getMediaUrl } from '@/utilities/getMediaUrl'

interface GalleryPageProps {
  data?: any
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ data }) => {
  // 1. Extract and normalize all photos from Payload CMS global or fallbacks
  const allGalleryItems = useMemo<GalleryPhotoItem[]>(() => {
    const list: GalleryPhotoItem[] = []

    // Arch Leaders
    if (data?.photoArch?.image || data?.photoArch?.imageFallback) {
      list.push({
        id: data.photoArch.id || 'arch-leaders',
        src: getMediaUrl(data.photoArch.image, data.photoArch.imageFallback || '/gallery/arch_leaders.png'),
        alt: data.photoArch.alt || 'Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Yoseph Narula',
        caption: data.photoArch.caption || 'Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Yoseph Narula under the Floral Arch',
        category: 'Pastoral Leadership',
      })
    }

    // Podium Hero
    if (data?.photoPodiumHero?.image || data?.photoPodiumHero?.imageFallback) {
      list.push({
        id: data.photoPodiumHero.id || 'podium-hero',
        src: getMediaUrl(data.photoPodiumHero.image, data.photoPodiumHero.imageFallback || '/gallery/podium_hero.png'),
        alt: data.photoPodiumHero.alt || 'Apostle Dr. Ankur Yoseph Narula Preaching with Signs and Wonders',
        caption: data.photoPodiumHero.caption || 'Man of God Apostle Dr. Ankur Yoseph Narula Delivering the Living Word of God',
        category: 'Word & Revival',
      })
    }

    // Top Row Photos
    if (Array.isArray(data?.topRowSidePhotos) && data.topRowSidePhotos.length > 0) {
      data.topRowSidePhotos.forEach((item: any, idx: number) => {
        list.push({
          id: item.id || `top-${idx}`,
          src: getMediaUrl(item.image, item.imageFallback || `/gallery/top_row_${(idx % 4) + 1}.png`),
          alt: item.alt || 'Ministry Atmosphere of Faith',
          caption: item.caption || 'Live Worship and Prophetic Ministry',
          category: 'Worship & Faith',
        })
      })
    }

    // Middle Row Photos
    if (Array.isArray(data?.middleRowPhotos) && data.middleRowPhotos.length > 0) {
      data.middleRowPhotos.forEach((item: any, idx: number) => {
        list.push({
          id: item.id || `mid-${idx}`,
          src: getMediaUrl(item.image, item.imageFallback || `/gallery/middle_row_${(idx % 4) + 1}.png`),
          alt: item.alt || 'Heavenly Worship & Deliverance',
          caption: item.caption || 'Atmosphere of Praise and Transformation',
          category: 'Heavenly Worship',
        })
      })
    }

    // Bottom Left Photos
    if (Array.isArray(data?.bottomRowSidePhotosLeft) && data.bottomRowSidePhotosLeft.length > 0) {
      data.bottomRowSidePhotosLeft.forEach((item: any, idx: number) => {
        list.push({
          id: item.id || `bot-l-${idx}`,
          src: getMediaUrl(item.image, item.imageFallback || `/gallery/bottom_left_${(idx % 2) + 1}.png`),
          alt: item.alt || 'Apostolic Revival Gathering',
          caption: item.caption || 'Holy Spirit Fire and Teaching of the Word',
          category: 'Mass Crusades',
        })
      })
    }

    // Bottom Right Photos
    if (Array.isArray(data?.bottomRowSidePhotosRight) && data.bottomRowSidePhotosRight.length > 0) {
      data.bottomRowSidePhotosRight.forEach((item: any, idx: number) => {
        list.push({
          id: item.id || `bot-r-${idx}`,
          src: getMediaUrl(item.image, item.imageFallback || `/gallery/bottom_right_${(idx % 4) + 1}.png`),
          alt: item.alt || 'Mass Gathering and Worship Miracles',
          caption: item.caption || 'Hundreds of Thousands Gathering in Worship',
          category: 'Healing & Miracles',
        })
      })
    }

    return list.length > 0 ? list : DEFAULT_GALLERY_ITEMS
  }, [data])

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (item: GalleryPhotoItem, idx: number) => {
    const foundIndex = allGalleryItems.findIndex((it) => it.src === item.src)
    setLightboxIndex(foundIndex !== -1 ? foundIndex : idx)
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const prevLightbox = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : allGalleryItems.length - 1))
  }, [lightboxIndex, allGalleryItems.length])

  const nextLightbox = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev! < allGalleryItems.length - 1 ? prev! + 1 : 0))
  }, [lightboxIndex, allGalleryItems.length])

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevLightbox()
      if (e.key === 'ArrowRight') nextLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, closeLightbox, prevLightbox, nextLightbox])

  const currentItem = lightboxIndex !== null ? allGalleryItems[lightboxIndex] : null

  return (
    <main className="w-full bg-[#FBF9F4] text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative min-h-screen pb-0">
      {/* Subtle Luxury Sacred Background Radiance Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#efbf04]/7 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[600px] left-10 w-[500px] h-[500px] bg-[#efbf04]/4 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[1000px] right-10 w-[550px] h-[550px] bg-[#efbf04]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* 1. Full-Width Editorial Header with Edge-to-Edge Gold Wing Bars */}
      <div className="w-full pt-28 sm:pt-36 pb-8 sm:pb-12 text-center relative z-10">
        <EditorialSectionHeader
          eyebrow="SACRED MOMENTS"
          title="Moments of Glory & Faith"
          subtitle="Experience the vibrant atmosphere of worship, miracle crusades, and apostolic revival with Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula."
          variant="editorial"
          align="center"
        />
      </div>

      {/* 2. Immersive 3D Parallax Gallery (Starts Cleanly Below the Header) */}
      <ParallaxUnfurlingGallery
        items={allGalleryItems}
        onImageClick={openLightbox}
      />

      {/* 3. Fullscreen Sacred Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 select-none"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-[#efbf04] hover:text-black text-white transition-all duration-300 cursor-pointer shadow-lg"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Prev Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevLightbox()
              }}
              className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-[#efbf04] hover:text-black text-white transition-all duration-300 cursor-pointer shadow-lg hidden sm:flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextLightbox()
              }}
              className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-[#efbf04] hover:text-black text-white transition-all duration-300 cursor-pointer shadow-lg hidden sm:flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center bg-[#0e141c] rounded-3xl overflow-hidden border border-[#efbf04]/40 shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
            >
              <div className="relative w-full max-w-4xl h-[55vh] sm:h-[65vh] bg-black">
                <Image
                  src={currentItem.src}
                  alt={currentItem.alt || 'High resolution gallery photo'}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Lightbox Metadata Bar */}
              <div className="w-full p-4 sm:p-6 bg-[#090e15] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-left">
                  {currentItem.category && (
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#efbf04]/15 text-[#efbf04] text-[11px] font-semibold uppercase tracking-wider mb-1">
                      {currentItem.category}
                    </span>
                  )}
                  <h3 className="text-white font-medium text-sm sm:text-base font-lato">
                    {currentItem.caption || currentItem.alt}
                  </h3>
                </div>

                <div className="text-white/50 text-xs sm:text-sm font-sans flex-shrink-0">
                  {lightboxIndex + 1} / {allGalleryItems.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default GalleryPage
