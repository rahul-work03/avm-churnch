'use client'

import React from 'react'
import { GalleryGrid } from './GalleryGrid'

interface GalleryPageProps {
  data?: any
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ data }) => {
  return (
    <main className="w-full bg-[#ffffe9] text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative overflow-hidden">
      <GalleryGrid
        photoArch={data?.photoArch}
        topRowSidePhotos={data?.topRowSidePhotos}
        middleRowPhotos={data?.middleRowPhotos}
        bottomRowSidePhotosLeft={data?.bottomRowSidePhotosLeft}
        photoPodiumHero={data?.photoPodiumHero}
        bottomRowSidePhotosRight={data?.bottomRowSidePhotosRight}
      />
    </main>
  )
}

