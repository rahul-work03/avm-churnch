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
 * Card 14 - Perspective 3D Flip Card
 * Built with robust vendor-prefixed backface-visibility and 3D transform hierarchy.
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
      className={cn('group/p-card [perspective:1400px]', h, w, className)}
      style={{ perspective: 1400 }}
    >
      <div
        className={cn(
          'relative h-full w-full rounded-2xl transition-transform duration-700 ease-out will-change-transform',
          'group-hover/p-card:[transform:rotateY(180deg)]',
        )}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 size-full rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-950 shadow-lg"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
          }}
        >
          {front}
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 size-full rounded-2xl overflow-hidden border border-amber-400/30 bg-gradient-to-b from-[#071d36] via-[#0b2749] to-[#041427] text-white shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {back}
        </div>
      </div>
    </div>
  )
}

const PerspectiveFront = () => (
  <div className="size-full flex flex-col justify-between p-3 bg-card text-card-foreground rounded-2xl">
    {/* Image Section */}
    <div className="relative h-64 w-full rounded-xl overflow-hidden bg-muted border border-border/50">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=800&q=80"
        alt="Serenity Residential"
        className="h-full w-full object-cover transition duration-700 group-hover/p-card:scale-105"
      />

      {/* Floating Rating Badge */}
      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-border text-[11px] font-medium tracking-tight text-foreground shadow-lg">
        <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
        <span>4.9 (120 Reviews)</span>
      </div>
    </div>

    {/* Content Section */}
    <div className="flex flex-col justify-between flex-grow p-4 space-y-3">
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-primary text-xs font-semibold tracking-wide">
          <Sparkles className="size-4" />
          <span>Exclusive Listing</span>
        </div>
        <h3 className="text-xl font-bold tracking-tight text-foreground transition duration-300 group-hover/p-card:text-primary leading-tight">
          Serenity Residential Home
        </h3>
        <p className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 leading-none mt-1">
          <MapPin className="size-4 text-primary" />
          15 S Aurora Ave, Miami
        </p>
      </div>

      <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-muted-foreground pt-2 border-t border-border/40">
        <span className="group-hover/p-card:text-primary group-hover/p-card:translate-x-1 transition-all">
          Hover to see more
        </span>
        <ArrowRight className="size-4 group-hover/p-card:text-primary" />
      </div>
    </div>
  </div>
)

const PerspectiveBack = () => (
  <div className="size-full flex flex-col items-center justify-between p-6 text-center">
    {/* Feature Icons */}
    <div className="w-full flex justify-center gap-3 mt-2">
      <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/10 border border-white/10 min-w-[80px]">
        <div className="p-1.5 rounded-lg bg-white/20 text-[#efbf04] shadow-sm">
          <BedDouble className="size-5" />
        </div>
        <p className="text-[11px] font-bold tracking-tight text-white">5 Beds</p>
      </div>
      <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/10 border border-white/10 min-w-[80px]">
        <div className="p-1.5 rounded-lg bg-white/20 text-[#efbf04] shadow-sm">
          <Bath className="size-5" />
        </div>
        <p className="text-[11px] font-bold tracking-tight text-white">3 Baths</p>
      </div>
      <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/10 border border-white/10 min-w-[80px]">
        <div className="p-1.5 rounded-lg bg-white/20 text-[#efbf04] shadow-sm">
          <Expand className="size-5" />
        </div>
        <p className="text-[11px] font-bold tracking-tight text-white">120m²</p>
      </div>
    </div>

    {/* Description */}
    <div className="space-y-2 px-3">
      <h3 className="text-lg font-bold tracking-tight text-white">
        Property Highlights
      </h3>
      <p className="text-xs text-slate-300 leading-relaxed max-w-[260px] mx-auto">
        Award-winning residential design with 24/7 smart security and
        unparalleled tranquility.
      </p>
    </div>

    {/* Action */}
    <div className="w-full px-4 mb-2">
      <button className="h-10 w-full rounded-xl bg-[#efbf04] text-[#071d36] text-xs font-bold tracking-wider shadow-lg transition-all hover:scale-[1.03] active:scale-95 cursor-pointer">
        <Zap className="mr-1.5 size-3.5 inline-block fill-current" />
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
