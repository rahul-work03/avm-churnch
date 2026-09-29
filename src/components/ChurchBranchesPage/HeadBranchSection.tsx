'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { EditorialSectionHeader } from '@/components/ui/editorial-section-header'
import { RevealOnScroll } from '@/components/ui/reveal'

interface HeadBranchSectionProps {
  headBranchTitle?: string | null
  headBranchSubtitle?: string | null
  headBranchMapIframe?: string | null
  headBranchMapImage?: any
  headBranchMapFallback?: string | null
  headBranchHelperText?: string | null
}

const DEFAULT_HEAD_BRANCH_IFRAME =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.0779467068696!2d75.56073407539549!3d31.273939074327686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b50b36a88a1%3A0x3d8b66ec2e189bf6!2sAnkur%20Narula%20Ministries!5e0!3m2!1sen!2sin!4v1790533216619!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>'

function getIframeSrc(input?: string | null): string | null {
  const value = input && input.trim() ? input.trim() : DEFAULT_HEAD_BRANCH_IFRAME
  if (value.startsWith('<iframe')) {
    const match = value.match(/src=["']([^"']+)["']/)
    return match ? match[1] : null
  }
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value
  }
  return null
}

export const HeadBranchSection: React.FC<HeadBranchSectionProps> = ({
  headBranchTitle = 'HEAD BRANCH PUNJAB KHAMBRA',
  headBranchSubtitle = 'The Church of Signs and Wonders · Khambra, Jalandhar, Punjab',
  headBranchMapIframe = DEFAULT_HEAD_BRANCH_IFRAME,
  headBranchMapImage,
  headBranchMapFallback = '/figma-assets/6627c47caaf2724af326c71d68ab4ef85b4bc42c.png',
}) => {
  const iframeSrc = getIframeSrc(headBranchMapIframe)
  const mapSrc = getMediaUrl(headBranchMapImage, headBranchMapFallback || '')

  return (
    <section className="relative py-8 sm:py-12 md:py-16 bg-white select-none" data-node-id="286:2996">
      {/* Full-width Atmospheric Section Header with Edge-to-Edge Golden Wing Bars */}
      <div className="w-full text-center mb-8 sm:mb-12">
        <EditorialSectionHeader
          title={headBranchTitle || 'HEAD BRANCH PUNJAB KHAMBRA'}
          subtitle={headBranchSubtitle || undefined}
          variant="atmospheric"
          align="center"
        />
      </div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Luxury Framed Map / Interactive Iframe Container */}
        <RevealOnScroll direction="up" distance={24} duration={0.7} delay={0.1}>
          <div className="relative w-full aspect-[1140/620] min-h-[320px] sm:min-h-[440px] md:min-h-[540px] rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-2xl border border-slate-200/90 hover:border-[#d4af37]/40 transition-colors duration-500 bg-slate-900 group">
            {iframeSrc ? (
              <iframe
                src={iframeSrc}
                title={headBranchTitle || 'Head Branch Location Map'}
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <Image
                src={mapSrc}
                alt={headBranchTitle || 'Head Branch Map'}
                fill
                className="object-cover"
              />
            )}

            {/* Subtle internal gold hairline vignette */}
            <div className="absolute inset-0 pointer-events-none rounded-[22px] sm:rounded-[28px] ring-1 ring-inset ring-white/10" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}


