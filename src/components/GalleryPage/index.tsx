'use client'

import React from 'react'
import { GalleryGrid } from './GalleryGrid'

export const GalleryPage: React.FC = () => {
  return (
    <main className="w-full bg-[#ffffe9] text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative overflow-hidden">
      <GalleryGrid />
    </main>
  )
}
