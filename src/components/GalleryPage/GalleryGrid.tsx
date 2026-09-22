'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { RevealOnScroll } from '@/components/ui/reveal'

export interface GalleryPhotoItem {
  id?: string
  image?: any
  imageFallback?: string
  src?: string
  alt?: string
  caption?: string
}

interface GalleryGridProps {
  photoArch?: GalleryPhotoItem | null
  topRowSidePhotos?: GalleryPhotoItem[] | null
  middleRowPhotos?: GalleryPhotoItem[] | null
  bottomRowSidePhotosLeft?: GalleryPhotoItem[] | null
  photoPodiumHero?: GalleryPhotoItem | null
  bottomRowSidePhotosRight?: GalleryPhotoItem[] | null
}

const DEFAULT_PHOTO_ARCH: GalleryPhotoItem = {
  id: 'arch-leaders',
  imageFallback: '/gallery/arch_leaders.png',
  alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula under Floral Arch',
  caption: 'Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Yoseph Narula - Ankur Narula Ministries',
}

const DEFAULT_PHOTO_PODIUM_HERO: GalleryPhotoItem = {
  id: 'podium-hero',
  imageFallback: '/gallery/podium_hero.png',
  alt: 'Apostle Dr. Ankur Yoseph Narula Preaching with Signs and Wonders',
  caption: 'Man of God Apostle Dr. Ankur Yoseph Narula Delivering the Living Word of God',
}

const DEFAULT_TOP_ROW_SIDE_PHOTOS: GalleryPhotoItem[] = [
  {
    id: 'top-1',
    imageFallback: '/gallery/top_row_1.png',
    alt: 'Pastor Sonia Yoseph Narula Preaching Grace and Faith',
    caption: 'Pastor Sonia Yoseph Narula Ministering during Live Thursday Service',
  },
  {
    id: 'top-2',
    imageFallback: '/gallery/top_row_2.png',
    alt: 'Pastor Sonia Preaching with Illuminated Cross Backdrop',
    caption: 'Worship Atmosphere with the Glorious Cross in Signs & Wonders Church',
  },
  {
    id: 'top-3',
    imageFallback: '/gallery/top_row_3.png',
    alt: 'Pastor Sonia Preaching to Multitudes',
    caption: 'Pastor Sonia Yoseph Narula Ministering with Power and Grace',
  },
  {
    id: 'top-4',
    imageFallback: '/gallery/top_row_4.png',
    alt: 'Apostle Dr. Ankur Narula Delivering Prophetic Ministry',
    caption: 'Apostle Dr. Ankur Yoseph Narula Preaching under the Holy Spirit Anointing',
  },
  {
    id: 'top-5',
    imageFallback: '/gallery/top_row_5.png',
    alt: 'Apostle Dr. Ankur Narula Leading Believers in Worship',
    caption: 'Prophetic Proclamation and Deliverance Ministry',
  },
  {
    id: 'top-6',
    imageFallback: '/gallery/top_row_6.png',
    alt: 'Ministry Leadership Gathering and Blessings',
    caption: 'Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Yoseph Narula Blessing Believers',
  },
]

const DEFAULT_MIDDLE_ROW_PHOTOS: GalleryPhotoItem[] = [
  {
    id: 'mid-1',
    imageFallback: '/gallery/middle_row_1.png',
    alt: 'Pastor Sonia Narula Ministering on Stage',
    caption: 'Preaching Healing and Deliverance to the Congregation',
  },
  {
    id: 'mid-2',
    imageFallback: '/gallery/middle_row_2.png',
    alt: 'Worship Choir in Red Robes with Pastor Sonia',
    caption: 'The Anointed Signs and Wonders Worship Choir Leading Heavenly Praises',
  },
  {
    id: 'mid-3',
    imageFallback: '/gallery/middle_row_3.png',
    alt: 'Pastor Sonia Preaching Live Service',
    caption: 'Live Service Broadcast across Nations',
  },
  {
    id: 'mid-4',
    imageFallback: '/gallery/middle_row_4.png',
    alt: 'Pastor Sonia Preaching with Golden Bokeh Lights',
    caption: 'The Glorious Light of Christ Touching Hearts and Transforming Lives',
  },
  {
    id: 'mid-5',
    imageFallback: '/gallery/middle_row_5.png',
    alt: 'Glorious Illuminated Holy Cross Worship',
    caption: 'Reverent Worship before the Glorious Cross of Christ',
  },
]

const DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_LEFT: GalleryPhotoItem[] = [
  {
    id: 'bot-left-1',
    imageFallback: '/gallery/bottom_left_1.png',
    alt: 'Apostle Dr. Ankur Narula with Open Bible',
    caption: 'Teaching the Uncompromised Word of God with Power and Clarity',
  },
  {
    id: 'bot-left-2',
    imageFallback: '/gallery/bottom_left_2.png',
    alt: 'Apostle Dr. Ankur Narula on Stage',
    caption: 'Holy Spirit Fire and Apostolic Revival Gathering',
  },
]

const DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT: GalleryPhotoItem[] = [
  {
    id: 'bot-right-1',
    imageFallback: '/gallery/bottom_right_1.png',
    alt: 'Mass Congregation Gathering at Signs and Wonders Church',
    caption: 'Hundreds of Thousands Gathering Weekly for Worship and Miracles',
  },
  {
    id: 'bot-right-2',
    imageFallback: '/gallery/bottom_right_2.png',
    alt: 'Atmosphere of Prayer and Devotion',
    caption: 'Atmosphere of Praise and Worship at Ankur Narula Ministries',
  },
  {
    id: 'bot-right-3',
    imageFallback: '/gallery/bottom_right_3.png',
    alt: 'Pastoral Leaders Fellowship',
    caption: 'Leadership Devotion and Ministry Milestones',
  },
  {
    id: 'bot-right-4',
    imageFallback: '/gallery/bottom_right_4.png',
    alt: 'Mass Crusade Miracle Service',
    caption: 'Miracles, Signs, and Wonders across Multitudes',
  },
]

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  photoArch,
  topRowSidePhotos,
  middleRowPhotos,
  bottomRowSidePhotosLeft,
  photoPodiumHero,
  bottomRowSidePhotosRight,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string; caption: string } | null>(null)

  const activePhotoArch = photoArch?.imageFallback || photoArch?.image ? photoArch : DEFAULT_PHOTO_ARCH
  const activeTopSide = topRowSidePhotos && topRowSidePhotos.length > 0 ? topRowSidePhotos : DEFAULT_TOP_ROW_SIDE_PHOTOS
  const activeMiddle = middleRowPhotos && middleRowPhotos.length > 0 ? middleRowPhotos : DEFAULT_MIDDLE_ROW_PHOTOS
  const activeBottomLeft = bottomRowSidePhotosLeft && bottomRowSidePhotosLeft.length > 0 ? bottomRowSidePhotosLeft : DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_LEFT
  const activePodiumHero = photoPodiumHero?.imageFallback || photoPodiumHero?.image ? photoPodiumHero : DEFAULT_PHOTO_PODIUM_HERO
  const activeBottomRight = bottomRowSidePhotosRight && bottomRowSidePhotosRight.length > 0 ? bottomRowSidePhotosRight : DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT

  const archSrc = getMediaUrl(activePhotoArch.image, activePhotoArch.imageFallback || activePhotoArch.src || DEFAULT_PHOTO_ARCH.imageFallback!)
  const podiumSrc = getMediaUrl(activePodiumHero.image, activePodiumHero.imageFallback || activePodiumHero.src || DEFAULT_PHOTO_PODIUM_HERO.imageFallback!)

  const handleOpenPhoto = (item: GalleryPhotoItem, defaultFallback: string) => {
    const src = getMediaUrl(item.image, item.imageFallback || item.src || defaultFallback)
    setSelectedPhoto({
      src,
      alt: item.alt || 'Gallery Photo',
      caption: item.caption || 'Ankur Narula Ministries — The Church of Signs and Wonders',
    })
  }

  return (
    <section className="relative pt-24 pb-8 sm:pt-32 sm:pb-12 md:pt-36 md:pb-16 bg-transparent" data-node-id="228:641">
      <div className="max-w-[1140px] mx-auto px-3 sm:px-6 lg:px-0">
        {/* Unified 5-Column Grid Track System */}
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-3.5">
          {/* 1. TOP MOSAIC: Left Arch Hero (2 Cols x 2 Rows) + Right 6 Cards (3 Cols x 2 Rows) */}
          <RevealOnScroll direction="up" delay={0.1}>
            <div className="grid grid-cols-5 grid-rows-2 gap-2 sm:gap-3 md:gap-3.5 h-[260px] sm:h-[400px] md:h-[480px] lg:h-[520px]">
              {/* Left Arch Hero (Cols 1-2, Rows 1-2) */}
              <div
                onClick={() =>
                  setSelectedPhoto({
                    src: archSrc,
                    alt: activePhotoArch.alt || DEFAULT_PHOTO_ARCH.alt || '',
                    caption: activePhotoArch.caption || DEFAULT_PHOTO_ARCH.caption || '',
                  })
                }
                className="col-span-2 row-span-2 relative h-full w-full rounded-[8px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden shadow-md sm:shadow-xl border border-amber-200/40 bg-slate-900 group cursor-pointer"
              >
                <Image
                  src={archSrc}
                  alt={activePhotoArch.alt || DEFAULT_PHOTO_ARCH.alt || 'Gallery Arch'}
                  fill
                  sizes="(max-width: 768px) 40vw, 460px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 shadow-lg text-[#003471]">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </div>

              {/* Right 6 Cards (Cols 3-5, Rows 1-2) */}
              {activeTopSide.map((photo, index) => {
                const photoSrc = getMediaUrl(
                  photo.image,
                  photo.imageFallback || photo.src || DEFAULT_TOP_ROW_SIDE_PHOTOS[index % DEFAULT_TOP_ROW_SIDE_PHOTOS.length].imageFallback!
                )

                return (
                  <div
                    key={photo.id || `top-${index}`}
                    onClick={() => handleOpenPhoto(photo, DEFAULT_TOP_ROW_SIDE_PHOTOS[index % DEFAULT_TOP_ROW_SIDE_PHOTOS.length].imageFallback!)}
                    className="col-span-1 row-span-1 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
                  >
                    <Image
                      src={photoSrc}
                      alt={photo.alt || 'Gallery Photo'}
                      fill
                      sizes="(max-width: 768px) 20vw, 225px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 shadow text-[#003471]">
                        <ZoomIn size={14} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </RevealOnScroll>

          {/* 2. MIDDLE STRIP: 5 Uniform Horizontal Cards */}
          <RevealOnScroll direction="up" delay={0.15}>
            <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-3.5 h-[130px] sm:h-[200px] md:h-[240px] lg:h-[260px]">
              {activeMiddle.map((photo, index) => {
                const photoSrc = getMediaUrl(
                  photo.image,
                  photo.imageFallback || photo.src || DEFAULT_MIDDLE_ROW_PHOTOS[index % DEFAULT_MIDDLE_ROW_PHOTOS.length].imageFallback!
                )

                return (
                  <div
                    key={photo.id || `mid-${index}`}
                    onClick={() => handleOpenPhoto(photo, DEFAULT_MIDDLE_ROW_PHOTOS[index % DEFAULT_MIDDLE_ROW_PHOTOS.length].imageFallback!)}
                    className="col-span-1 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
                  >
                    <Image
                      src={photoSrc}
                      alt={photo.alt || 'Gallery Photo'}
                      fill
                      sizes="(max-width: 768px) 20vw, 225px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 shadow text-[#003471]">
                        <ZoomIn size={14} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </RevealOnScroll>

          {/* 3. BOTTOM MOSAIC: Left (Col 1 x 2 Rows) + Center Podium Hero (Cols 2-3 x 2 Rows) + Right (Cols 4-5 x 2 Rows) */}
          <RevealOnScroll direction="up" delay={0.2}>
            <div className="grid grid-cols-5 grid-rows-2 gap-2 sm:gap-3 md:gap-3.5 h-[260px] sm:h-[400px] md:h-[480px] lg:h-[520px]">
              {/* Left Col 1, Row 1 */}
              {activeBottomLeft[0] && (
                <div
                  onClick={() => handleOpenPhoto(activeBottomLeft[0], DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_LEFT[0].imageFallback!)}
                  className="col-start-1 row-start-1 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
                >
                  <Image
                    src={getMediaUrl(activeBottomLeft[0].image, activeBottomLeft[0].imageFallback || activeBottomLeft[0].src || DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_LEFT[0].imageFallback!)}
                    alt={activeBottomLeft[0].alt || 'Gallery Photo'}
                    fill
                    sizes="(max-width: 768px) 20vw, 225px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 shadow text-[#003471]">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                </div>
              )}

              {/* Left Col 1, Row 2 */}
              {activeBottomLeft[1] && (
                <div
                  onClick={() => handleOpenPhoto(activeBottomLeft[1], DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_LEFT[1].imageFallback!)}
                  className="col-start-1 row-start-2 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
                >
                  <Image
                    src={getMediaUrl(activeBottomLeft[1].image, activeBottomLeft[1].imageFallback || activeBottomLeft[1].src || DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_LEFT[1].imageFallback!)}
                    alt={activeBottomLeft[1].alt || 'Gallery Photo'}
                    fill
                    sizes="(max-width: 768px) 20vw, 225px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 shadow text-[#003471]">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                </div>
              )}

              {/* Center Podium Hero (Cols 2-3, Rows 1-2) */}
              <div
                onClick={() =>
                  setSelectedPhoto({
                    src: podiumSrc,
                    alt: activePodiumHero.alt || DEFAULT_PHOTO_PODIUM_HERO.alt || '',
                    caption: activePodiumHero.caption || DEFAULT_PHOTO_PODIUM_HERO.caption || '',
                  })
                }
                className="col-start-2 col-span-2 row-start-1 row-span-2 relative h-full w-full rounded-[8px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden shadow-md sm:shadow-2xl border border-amber-200/50 bg-slate-900 group cursor-pointer"
              >
                <Image
                  src={podiumSrc}
                  alt={activePodiumHero.alt || DEFAULT_PHOTO_PODIUM_HERO.alt || 'Gallery Podium Hero'}
                  fill
                  sizes="(max-width: 768px) 40vw, 460px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 shadow-lg text-[#003471]">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </div>

              {/* Right Col 4, Row 1 */}
              {activeBottomRight[0] && (
                <div
                  onClick={() => handleOpenPhoto(activeBottomRight[0], DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT[0].imageFallback!)}
                  className="col-start-4 row-start-1 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
                >
                  <Image
                    src={getMediaUrl(activeBottomRight[0].image, activeBottomRight[0].imageFallback || activeBottomRight[0].src || DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT[0].imageFallback!)}
                    alt={activeBottomRight[0].alt || 'Gallery Photo'}
                    fill
                    sizes="(max-width: 768px) 20vw, 225px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 shadow text-[#003471]">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                </div>
              )}

              {/* Right Col 5, Row 1 */}
              {activeBottomRight[1] && (
                <div
                  onClick={() => handleOpenPhoto(activeBottomRight[1], DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT[1].imageFallback!)}
                  className="col-start-5 row-start-1 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
                >
                  <Image
                    src={getMediaUrl(activeBottomRight[1].image, activeBottomRight[1].imageFallback || activeBottomRight[1].src || DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT[1].imageFallback!)}
                    alt={activeBottomRight[1].alt || 'Gallery Photo'}
                    fill
                    sizes="(max-width: 768px) 20vw, 225px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 shadow text-[#003471]">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                </div>
              )}

              {/* Right Col 4, Row 2 */}
              {activeBottomRight[2] && (
                <div
                  onClick={() => handleOpenPhoto(activeBottomRight[2], DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT[2].imageFallback!)}
                  className="col-start-4 row-start-2 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
                >
                  <Image
                    src={getMediaUrl(activeBottomRight[2].image, activeBottomRight[2].imageFallback || activeBottomRight[2].src || DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT[2].imageFallback!)}
                    alt={activeBottomRight[2].alt || 'Gallery Photo'}
                    fill
                    sizes="(max-width: 768px) 20vw, 225px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 shadow text-[#003471]">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                </div>
              )}

              {/* Right Col 5, Row 2 */}
              {activeBottomRight[3] && (
                <div
                  onClick={() => handleOpenPhoto(activeBottomRight[3], DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT[3].imageFallback!)}
                  className="col-start-5 row-start-2 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
                >
                  <Image
                    src={getMediaUrl(activeBottomRight[3].image, activeBottomRight[3].imageFallback || activeBottomRight[3].src || DEFAULT_BOTTOM_ROW_SIDE_PHOTOS_RIGHT[3].imageFallback!)}
                    alt={activeBottomRight[3].alt || 'Gallery Photo'}
                    fill
                    sizes="(max-width: 768px) 20vw, 225px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 shadow text-[#003471]">
                      <ZoomIn size={14} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Interactive Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-[20px] overflow-hidden shadow-2xl border border-white/20 flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors shadow"
              aria-label="Close Lightbox"
            >
              <X size={22} />
            </button>

            {/* Photo Container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Caption Bar */}
            <div className="p-4 sm:p-6 bg-[#122f4a] text-white">
              <p className="font-poppins font-semibold text-base sm:text-lg">
                {selectedPhoto.caption}
              </p>
              <p className="font-poppins text-slate-300 text-xs sm:text-sm mt-1">
                Ankur Narula Ministries &mdash; The Church of Signs and Wonders
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

