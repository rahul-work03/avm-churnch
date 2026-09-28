import React from 'react'
import { GalleryGrid } from './GalleryGrid'
import { SacredCanvas } from '@/components/ui/sacred-canvas'

interface GalleryPageProps {
  data?: any
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ data }) => {
  return (
    <main className="w-full bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative overflow-hidden pb-16 sm:pb-24">
      <SacredCanvas tone="warm-alabaster" className="py-2">
        <GalleryGrid
          photoArch={data?.photoArch}
          topRowSidePhotos={data?.topRowSidePhotos}
          middleRowPhotos={data?.middleRowPhotos}
          bottomRowSidePhotosLeft={data?.bottomRowSidePhotosLeft}
          photoPodiumHero={data?.photoPodiumHero}
          bottomRowSidePhotosRight={data?.bottomRowSidePhotosRight}
        />
      </SacredCanvas>
    </main>
  )
}

