'use client'

import React from 'react'
import Image from 'next/image'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { RevealOnScroll } from '@/components/ui/reveal'

interface HeadBranchSectionProps {
  headBranchTitle?: string | null
  headBranchMapIframe?: string | null
  headBranchMapImage?: any
  headBranchMapFallback?: string | null
  headBranchHelperText?: string | null
}

function getIframeSrc(input?: string | null): string | null {
  if (!input || !input.trim()) return null
  const trimmed = input.trim()
  if (trimmed.startsWith('<iframe')) {
    const match = trimmed.match(/src=["']([^"']+)["']/)
    return match ? match[1] : null
  }
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed
  }
  return null
}

export const HeadBranchSection: React.FC<HeadBranchSectionProps> = ({
  headBranchTitle = 'Head Branch Punjab Khambra',
  headBranchMapIframe = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.825651913988!2d75.54516317628807!3d31.308573957597147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b8f6735c249%3A0x28eb2b90b8f10825!2sThe%20Church%20Of%20Signs%20And%20Wonders!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
  headBranchMapImage,
  headBranchMapFallback = '/figma-assets/6627c47caaf2724af326c71d68ab4ef85b4bc42c.png',
  headBranchHelperText = 'Here is a location pin to help you find us!',
}) => {
  const iframeSrc = getIframeSrc(headBranchMapIframe)
  const mapSrc = getMediaUrl(headBranchMapImage, headBranchMapFallback || '')
  const googleMapsDirectionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=The+Church+Of+Signs+And+Wonders+Khambra+Punjab'

  return (
    <section className="relative py-4 sm:py-8 md:py-10 bg-[#f8fafc]" data-node-id="286:2996">
      {/* Full-width Navy Header Bar with edge-to-edge Gold Accent Bars (Figma 286:3010) */}
      <RevealOnScroll direction="up" delay={0.1}>
        <div className="w-full bg-[#122f4a] h-[60px] sm:h-[70px] md:h-[80px] text-white relative shadow-sm mb-8 sm:mb-12 flex items-center">
          <div className="w-full flex items-center justify-between">
            {/* Left Gold Accent Bar */}
            <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[10px] sm:h-[16px] md:h-[20px] bg-[#efbf04] flex-shrink-0" />

            {/* Heading (Figma 286:3012: Poppins SemiBold 28px) */}
            <h2 className="font-poppins font-semibold text-white text-base sm:text-xl md:text-2xl lg:text-[28px] tracking-wide text-center px-2 sm:px-6 flex-shrink min-w-0">
              {headBranchTitle || 'Head Branch Punjab Khambra'}
            </h2>

            {/* Right Gold Accent Bar */}
            <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[10px] sm:h-[16px] md:h-[20px] bg-[#efbf04] flex-shrink-0" />
          </div>
        </div>
      </RevealOnScroll>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        <RevealOnScroll direction="up" delay={0.2}>
          {/* Exact Figma 1140x620 Map Satellite / Interactive Iframe Container (Figma 286:3009) */}
          <div className="relative w-full aspect-[1140/620] min-h-[300px] sm:min-h-[420px] md:min-h-[520px] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
            {iframeSrc ? (
              <iframe
                src={iframeSrc}
                title={headBranchTitle || 'Head Branch Location Map'}
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <Image
                src={mapSrc}
                alt={headBranchTitle || 'Head Branch Map'}
                fill
                className="object-cover"
              />
            )}
          </div>

          {/* Location Pin Helper Text (Figma 286:3017: 29px #003471) */}
          {headBranchHelperText && (
            <div className="mt-6 sm:mt-8 md:mt-10 text-center">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-poppins text-[#003471] hover:text-[#efbf04] transition-colors text-base sm:text-2xl md:text-[29px] leading-tight group"
                title="Open Head Branch in Google Maps"
              >
                <span className="transition-transform group-hover:scale-125">📍</span>
                <span className="underline decoration-transparent group-hover:decoration-current transition-all">
                  {headBranchHelperText}
                </span>
              </a>
            </div>
          )}
        </RevealOnScroll>
      </div>
    </section>
  )
}

