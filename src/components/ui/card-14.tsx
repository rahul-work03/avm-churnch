'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import {
  ArrowRight,
  Bath,
  BedDouble,
  Expand,
  MapPin,
  Sparkles,
  Zap,
  Star,
} from 'lucide-react'

export interface PerspectiveFlipCardProps {
  className?: string
  front: React.ReactNode
  back: React.ReactNode
  h?: string
  w?: string
}

/**
 * Card 14 - Perspective Real Estate / Event Flip Card
 * Uses standard rounded-2xl border radius and optimized true 3D depth metrics.
 * Removed overflow-hidden from outer faces to allow Z-translations to work in full perspective.
 */
export function PerspectiveFlipCard({
  className,
  front,
  back,
  h = 'h-[500px]',
  w = 'w-[360px]',
}: PerspectiveFlipCardProps) {
  return (
    <div
      className={cn('group/p-card [perspective:2000px]', h, w, className)}
      style={{ perspective: '2000px' }}
    >
      <div
        className={cn(
          'relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover/p-card:[transform:rotateY(180deg)]',
        )}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 size-full rounded-2xl border border-amber-400/30 bg-slate-950 text-white [transform-style:preserve-3d] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="size-full [transform-style:preserve-3d]">
            {front}
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 size-full rounded-2xl border border-amber-400/30 bg-gradient-to-b from-[#071d36] via-[#0b2749] to-[#041427] text-white [transform-style:preserve-3d] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="size-full [transform-style:preserve-3d] p-6 sm:p-7 text-center flex flex-col items-center justify-between">
            {back}
          </div>
        </div>
      </div>
    </div>
  )
}

const PerspectiveFront = () => (
  <div className="size-full flex flex-col [transform-style:preserve-3d]">
    {/* Image Section (Z: 50px) */}
    <div className="relative h-64 w-full [transform-style:preserve-3d] [transform:translateZ(50px)]">
      <div className="absolute inset-0 rounded-xl bg-muted overflow-hidden border border-border/50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=800&q=80"
          alt="Serenity Residential"
          className="h-full w-full object-cover transition duration-700 group-hover/p-card:scale-110"
        />
      </div>

      {/* Floating Rating Badge (Z: 80px) */}
      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-border text-[11px] font-medium tracking-tight text-foreground shadow-lg [transform:translateZ(80px)]">
        <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
        <span>4.9 (120 Reviews)</span>
      </div>
    </div>

    {/* Content Section (Z: 60px) */}
    <div className="flex flex-col justify-between flex-grow p-6 py-8 [transform-style:preserve-3d]">
      <div className="space-y-2 [transform-style:preserve-3d] [transform:translateZ(60px)]">
        <div className="flex items-center gap-2 text-primary text-xs font-semibold tracking-wide">
          <Sparkles className="size-4" />
          <span>Exclusive Listing</span>
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-foreground transition duration-300 group-hover/p-card:text-primary leading-tight">
          Serenity Residential Home
        </h3>
        <p className="text-[15px] font-medium text-muted-foreground flex items-center gap-1.5 leading-none mt-2">
          <MapPin className="size-4 text-primary" />
          15 S Aurora Ave, Miami
        </p>
      </div>

      <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-muted-foreground [transform:translateZ(40px)]">
        <span className="group-hover/p-card:text-primary group-hover/p-card:translate-x-1 transition-all">
          Hover to see more
        </span>
        <ArrowRight className="size-4 group-hover/p-card:text-primary" />
      </div>
    </div>
  </div>
)

const PerspectiveBack = () => (
  <div className="size-full flex flex-col items-center justify-center [transform-style:preserve-3d]">
    {/* Feature Icons (Z: 130px) */}
    <div className="mb-10 w-full [transform-style:preserve-3d] flex justify-center gap-4">
      <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-muted/80 border border-border/50 [transform:translateZ(130px)] min-w-[90px] [transform-style:preserve-3d]">
        <div className="p-2 rounded-xl bg-card border border-border text-primary [transform:translateZ(20px)] shadow-sm">
          <BedDouble className="size-6" />
        </div>
        <p className="text-[11px] font-bold [transform:translateZ(10px)] tracking-tight">
          5 Beds
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-muted/80 border border-border/50 [transform:translateZ(160px)] min-w-[90px] [transform-style:preserve-3d]">
        <div className="p-2 rounded-xl bg-card border border-border text-primary [transform:translateZ(25px)] shadow-sm">
          <Bath className="size-6" />
        </div>
        <p className="text-[11px] font-bold [transform:translateZ(10px)] tracking-tight">
          3 Baths
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-muted/80 border border-border/50 [transform:translateZ(130px)] min-w-[90px] [transform-style:preserve-3d]">
        <div className="p-2 rounded-xl bg-card border border-border text-primary [transform:translateZ(20px)] shadow-sm">
          <Expand className="size-6" />
        </div>
        <p className="text-[11px] font-bold [transform:translateZ(10px)] tracking-tight">
          120m²
        </p>
      </div>
    </div>

    {/* Description (Z: 80px) */}
    <div className="space-y-3 [transform-style:preserve-3d] px-6">
      <h3 className="text-xl font-bold tracking-tight text-foreground [transform:translateZ(80px)]">
        Property Highlights
      </h3>
      <p className="text-[13px] font-medium text-muted-foreground leading-relaxed [transform:translateZ(40px)] max-w-[280px] mx-auto">
        Award-winning residential design with 24/7 smart security and
        unparalleled tranquility.
      </p>
    </div>

    {/* Action (Z: 100px) */}
    <div className="mt-8 [transform-style:preserve-3d] w-full px-6">
      <button className="h-11 w-full rounded-xl bg-primary text-primary-foreground text-xs font-bold tracking-wider shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.03] active:scale-95 [transform:translateZ(100px)] cursor-pointer">
        <Zap className="mr-2 size-3.5 inline-block fill-current" />
        Book Viewing
      </button>
    </div>
  </div>
)

export default function Card14Demo() {
  return (
    <div className="flex items-center justify-center min-h-[600px] p-12 bg-background">
      <PerspectiveFlipCard
        front={<PerspectiveFront />}
        back={<PerspectiveBack />}
      />
    </div>
  )
}
