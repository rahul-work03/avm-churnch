'use client'

import React, { useState, useRef, type MouseEvent, type ChangeEvent, type ReactNode } from 'react'
import { Upload } from 'lucide-react'

export interface TiltCardProps {
  initialImage?: string
  title?: string
  subtitle?: string
  allowUpload?: boolean
  className?: string
  children?: ReactNode
  maxTilt?: number
  scale?: number
  perspective?: number
}

/**
 * Reusable 3D Tilt Container component that applies interactive perspective tilt
 * and dynamic light/shadow calculations to any wrapped content.
 */
export function TiltContainer({
  children,
  className = '',
  maxTilt = 12,
  scale = 1.02,
  perspective = 1000,
  style,
  ...props
}: {
  children: ReactNode
  className?: string
  maxTilt?: number
  scale?: number
  perspective?: number
  style?: React.CSSProperties
} & React.HTMLAttributes<HTMLDivElement>) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = ((y - centerY) / centerY) * -maxTilt
    const tiltY = ((x - centerX) / centerX) * maxTilt

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  const shadowX = tilt.y * 0.5
  const shadowY = tilt.x * 0.5
  const shadowBlur = 30 + Math.abs(tilt.x + tilt.y) * 0.5

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        transform: `perspective(${perspective}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${scale}, ${scale}, ${scale})`,
        boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.18)`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Default TiltCard component with image upload, dark grid backdrop, and 3D hover physics.
 */
export default function TiltCard({
  initialImage = 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=1200&q=80',
  title = '3D Tilt Card',
  subtitle = 'Hover to interact',
  allowUpload = true,
}: TiltCardProps = {}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [imageUrl, setImageUrl] = useState(initialImage)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = ((y - centerY) / centerY) * -15
    const tiltY = ((x - centerX) / centerX) * 15

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setImageUrl(url)
    }
  }

  const shadowX = tilt.y * 0.5
  const shadowY = tilt.x * 0.5
  const shadowBlur = 40 + Math.abs(tilt.x + tilt.y) * 0.5

  return (
    <div className="w-full flex items-center justify-center min-h-[500px] bg-zinc-950 p-8 relative overflow-hidden rounded-2xl">
      {/* Orthogonal Grid Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-80 h-96 cursor-pointer overflow-hidden transition-all duration-200 ease-out border-2 border-slate-700 rounded-lg bg-white shadow-sm"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
            boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.5)`,
          }}
        >
          <div className="p-0 h-full relative group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {allowUpload && (
              <label
                htmlFor="image-upload"
                className="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110 z-20"
              >
                <Upload className="w-5 h-5 text-slate-900" />
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}

            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              <h3 className="text-white font-bold text-xl mb-1">{title}</h3>
              <p className="text-white/80 text-sm">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
