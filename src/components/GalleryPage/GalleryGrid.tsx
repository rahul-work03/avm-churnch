'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

interface GalleryItem {
  id: string
  src: string
  alt: string
  caption: string
}

export const GalleryGrid: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null)

  // 16 Unique High-Resolution Ministry Gallery Assets
  const photoArch: GalleryItem = {
    id: 'arch-leaders',
    src: '/figma-assets/45bec61b214b67c667153f241277fe878b702ad9.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula under Floral Arch',
    caption: 'Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Yoseph Narula - Ankur Narula Ministries',
  }

  const photoPodiumHero: GalleryItem = {
    id: 'podium-hero',
    src: '/figma-assets/4df0fea0316253c732268b8cea549e1e2e66ff56.png',
    alt: 'Apostle Dr. Ankur Yoseph Narula Preaching with Signs and Wonders',
    caption: 'Man of God Apostle Dr. Ankur Yoseph Narula Delivering the Living Word of God',
  }

  const topRowSidePhotos: GalleryItem[] = [
    {
      id: 'top-1',
      src: '/figma-assets/b833aca853efbb1993ea3ceec33bdb2370c72d55.png',
      alt: 'Pastor Sonia Yoseph Narula Preaching Grace and Faith',
      caption: 'Pastor Sonia Yoseph Narula Ministering during Live Thursday Service',
    },
    {
      id: 'top-2',
      src: '/figma-assets/c8bf30f9b8fba99b96a4a677bce778175f7ced54.png',
      alt: 'Pastor Sonia Preaching with Illuminated Cross Backdrop',
      caption: 'Worship Atmosphere with the Glorious Cross in Signs & Wonders Church',
    },
    {
      id: 'top-3',
      src: '/figma-assets/486004153a5fb17a63faceadf3329f632f2ca308.png',
      alt: 'Pastor Sonia Preaching to Multitudes',
      caption: 'Pastor Sonia Yoseph Narula Ministering with Power and Grace',
    },
    {
      id: 'top-4',
      src: '/figma-assets/6fe9bb9c428168edabd3bf3e9d70abf0e844aa67.png',
      alt: 'Apostle Dr. Ankur Narula Delivering Prophetic Ministry',
      caption: 'Apostle Dr. Ankur Yoseph Narula Preaching under the Holy Spirit Anointing',
    },
    {
      id: 'top-5',
      src: '/figma-assets/a0b9ad1da9274b9feeeec8bf6b846c7b4a65656e.png',
      alt: 'Apostle Dr. Ankur Narula Leading Believers in Worship',
      caption: 'Prophetic Proclamation and Deliverance Ministry',
    },
    {
      id: 'top-6',
      src: '/figma-assets/bc7ea4ca22ad61ffd9b4bd5b0288c00b0a12f9c3.png',
      alt: 'Ministry Leadership Gathering and Blessings',
      caption: 'Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Yoseph Narula Blessing Believers',
    },
  ]

  const middleRowPhotos: GalleryItem[] = [
    {
      id: 'mid-1',
      src: '/figma-assets/e3a1ee00f87a2759a0968e2f45aadffe3e59db3a.png',
      alt: 'Pastor Sonia Narula Ministering on Stage',
      caption: 'Preaching Healing and Deliverance to the Congregation',
    },
    {
      id: 'mid-2',
      src: '/figma-assets/91a48d8819d4a79ed4de540109e29c8b41950461.png',
      alt: 'Worship Choir in Red Robes with Pastor Sonia',
      caption: 'The Anointed Signs and Wonders Worship Choir Leading Heavenly Praises',
    },
    {
      id: 'mid-3',
      src: '/figma-assets/fe3431f583ff049d667066b50b2d048cf34afc72.png',
      alt: 'Pastor Sonia Preaching Live Service',
      caption: 'Live Service Broadcast across Nations',
    },
    {
      id: 'mid-4',
      src: '/figma-assets/0ad2c07b6a72c78c1e66fec5b816a26e3f587185.png',
      alt: 'Pastor Sonia Preaching with Golden Bokeh Lights',
      caption: 'The Glorious Light of Christ Touching Hearts and Transforming Lives',
    },
    {
      id: 'mid-5',
      src: '/figma-assets/3bf5187d2c81a326176bf967e4f68ddc522f2d87.png',
      alt: 'Glorious Illuminated Holy Cross Worship',
      caption: 'Reverent Worship before the Glorious Cross of Christ',
    },
  ]

  const bottomRowSidePhotosLeft: GalleryItem[] = [
    {
      id: 'bot-left-1',
      src: '/figma-assets/408cbe685022eb94200ab9e84237419210301602.png',
      alt: 'Apostle Dr. Ankur Narula with Open Bible',
      caption: 'Teaching the Uncompromised Word of God with Power and Clarity',
    },
    {
      id: 'bot-left-2',
      src: '/figma-assets/c979751e5b128a8dc12e9605e600298e99e9ff49.png',
      alt: 'Apostle Dr. Ankur Narula on Stage',
      caption: 'Holy Spirit Fire and Apostolic Revival Gathering',
    },
  ]

  const bottomRowSidePhotosRight: GalleryItem[] = [
    {
      id: 'bot-right-1',
      src: '/figma-assets/74e8182af8627fad3ae428aad2b17d4eca519897.png',
      alt: 'Mass Congregation Gathering at Signs and Wonders Church',
      caption: 'Hundreds of Thousands Gathering Weekly for Worship and Miracles',
    },
    {
      id: 'bot-right-2',
      src: '/figma-assets/85761e6b2486d02d0c483eb7871b0ab19ace8c46.png',
      alt: 'Atmosphere of Prayer and Devotion',
      caption: 'Atmosphere of Praise and Worship at Ankur Narula Ministries',
    },
    {
      id: 'bot-right-3',
      src: '/figma-assets/a12f7a8578aca49746f879f50d3567e9cc929dad.png',
      alt: 'Pastoral Leaders Fellowship',
      caption: 'Leadership Devotion and Ministry Milestones',
    },
    {
      id: 'bot-right-4',
      src: '/figma-assets/ff7b25464623ab07ec009c6cc6d0508eb168c5a7.png',
      alt: 'Mass Crusade Miracle Service',
      caption: 'Miracles, Signs, and Wonders across Multitudes',
    },
  ]

  return (
    <section className="relative pt-24 pb-8 sm:pt-32 sm:pb-12 md:pt-36 md:pb-16 bg-transparent" data-node-id="228:641">
      <div className="max-w-[1140px] mx-auto px-3 sm:px-6 lg:px-0">
        {/* Unified 5-Column Grid Track System */}
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-3.5">
          {/* 1. TOP MOSAIC: Left Arch Hero (2 Cols x 2 Rows) + Right 6 Cards (3 Cols x 2 Rows) */}
          <div className="grid grid-cols-5 grid-rows-2 gap-2 sm:gap-3 md:gap-3.5 h-[260px] sm:h-[400px] md:h-[480px] lg:h-[520px]">
            {/* Left Arch Hero (Cols 1-2, Rows 1-2) */}
            <div
              onClick={() => setSelectedPhoto(photoArch)}
              className="col-span-2 row-span-2 relative h-full w-full rounded-[8px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden shadow-md sm:shadow-xl border border-amber-200/40 bg-slate-900 group cursor-pointer"
            >
              <Image
                src={photoArch.src}
                alt={photoArch.alt}
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
            {topRowSidePhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="col-span-1 row-span-1 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
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
            ))}
          </div>

          {/* 2. MIDDLE STRIP: 5 Uniform Horizontal Cards */}
          <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-3.5 h-[130px] sm:h-[200px] md:h-[240px] lg:h-[260px]">
            {middleRowPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="col-span-1 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
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
            ))}
          </div>

          {/* 3. BOTTOM MOSAIC: Left (Col 1 x 2 Rows) + Center Podium Hero (Cols 2-3 x 2 Rows) + Right (Cols 4-5 x 2 Rows) */}
          <div className="grid grid-cols-5 grid-rows-2 gap-2 sm:gap-3 md:gap-3.5 h-[260px] sm:h-[400px] md:h-[480px] lg:h-[520px]">
            {/* Left Col 1, Row 1 */}
            <div
              onClick={() => setSelectedPhoto(bottomRowSidePhotosLeft[0])}
              className="col-start-1 row-start-1 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
            >
              <Image
                src={bottomRowSidePhotosLeft[0].src}
                alt={bottomRowSidePhotosLeft[0].alt}
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

            {/* Left Col 1, Row 2 */}
            <div
              onClick={() => setSelectedPhoto(bottomRowSidePhotosLeft[1])}
              className="col-start-1 row-start-2 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
            >
              <Image
                src={bottomRowSidePhotosLeft[1].src}
                alt={bottomRowSidePhotosLeft[1].alt}
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

            {/* Center Podium Hero (Cols 2-3, Rows 1-2) */}
            <div
              onClick={() => setSelectedPhoto(photoPodiumHero)}
              className="col-start-2 col-span-2 row-start-1 row-span-2 relative h-full w-full rounded-[8px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden shadow-md sm:shadow-2xl border border-amber-200/50 bg-slate-900 group cursor-pointer"
            >
              <Image
                src={photoPodiumHero.src}
                alt={photoPodiumHero.alt}
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
            <div
              onClick={() => setSelectedPhoto(bottomRowSidePhotosRight[0])}
              className="col-start-4 row-start-1 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
            >
              <Image
                src={bottomRowSidePhotosRight[0].src}
                alt={bottomRowSidePhotosRight[0].alt}
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

            {/* Right Col 5, Row 1 */}
            <div
              onClick={() => setSelectedPhoto(bottomRowSidePhotosRight[1])}
              className="col-start-5 row-start-1 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
            >
              <Image
                src={bottomRowSidePhotosRight[1].src}
                alt={bottomRowSidePhotosRight[1].alt}
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

            {/* Right Col 4, Row 2 */}
            <div
              onClick={() => setSelectedPhoto(bottomRowSidePhotosRight[2])}
              className="col-start-4 row-start-2 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
            >
              <Image
                src={bottomRowSidePhotosRight[2].src}
                alt={bottomRowSidePhotosRight[2].alt}
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

            {/* Right Col 5, Row 2 */}
            <div
              onClick={() => setSelectedPhoto(bottomRowSidePhotosRight[3])}
              className="col-start-5 row-start-2 relative h-full w-full rounded-[6px] sm:rounded-[12px] md:rounded-[16px] overflow-hidden shadow-sm sm:shadow-md border border-white/60 bg-slate-900 group cursor-pointer"
            >
              <Image
                src={bottomRowSidePhotosRight[3].src}
                alt={bottomRowSidePhotosRight[3].alt}
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
          </div>
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
