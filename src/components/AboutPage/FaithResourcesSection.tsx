'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'
import { SacredCanvas } from '@/components/ui/sacred-canvas'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface FaithResourcesSectionProps {
  headerTitle?: string
  description?: string
  storeLink?: string
  storeLabel?: string
  bgImage?: any
  bgFallback?: string
  bgInnerImage?: any
  bgInnerFallback?: string
  fgImage?: any
  fgFallback?: string
  fgInnerImage?: any
  fgInnerFallback?: string
}

interface RealisticBookCardProps {
  imageUrl: string
  alt: string
  title: string
  subtitle: string
  scripture: string
  scriptureRef: string
  storeLink: string
  innerImageUrl?: string | null
  isForeground?: boolean
  className?: string
  initialOffset: { x: number; y: number; rotate: number }
  delay?: number
}

const RealisticBookCard: React.FC<RealisticBookCardProps> = ({
  imageUrl,
  alt,
  title,
  subtitle,
  scripture,
  scriptureRef,
  storeLink,
  innerImageUrl,
  isForeground = false,
  className = '',
  initialOffset,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialOffset.x * 1.5,
        y: initialOffset.y + 60,
        rotate: initialOffset.rotate - (isForeground ? 6 : -6),
        scale: isForeground ? 0.88 : 0.82,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotate: initialOffset.rotate,
        scale: isForeground ? 1 : 0.94,
      }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`absolute ${className} ${isHovered ? 'z-30' : isForeground ? 'z-20' : 'z-10'}`}
      style={{ perspective: 1400 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={storeLink} className="block group cursor-pointer focus:outline-none">
        {/* Ambient Ground Shadow - moves and expands realistically on hover */}
        <motion.div
          animate={{
            scale: isHovered ? 1.15 : 1,
            opacity: isHovered ? 0.45 : 0.22,
            y: isHovered ? 28 : 14,
            filter: isHovered ? 'blur(18px)' : 'blur(12px)',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute -bottom-6 left-6 right-2 h-10 bg-[#071322] rounded-[100%] pointer-events-none"
        />

        {/* 3D Book Container with idle gentle floating */}
        <motion.div
          animate={{
            y: isHovered ? -16 : [0, -7, 0],
            rotateY: isHovered ? -18 : 0,
            rotateX: isHovered ? 6 : 0,
            rotateZ: isHovered ? (isForeground ? 1 : -2) : initialOffset.rotate,
            scale: isHovered ? (isForeground ? 1.05 : 1.02) : 1,
          }}
          transition={{
            y: isHovered
              ? { duration: 0.35, ease: 'easeOut' }
              : { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: delay * 1.5 },
            rotateY: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            rotateX: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            rotateZ: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 0.35, ease: 'easeOut' },
          }}
          style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center' }}
          className="relative w-[185px] sm:w-[245px] md:w-[290px] lg:w-[325px] h-[250px] sm:h-[330px] md:h-[390px] lg:h-[435px]"
        >
          {/* ==================== 1. BOOK HARDCOVER BASE / BACK ==================== */}
          <div
            className="absolute inset-0 rounded-r-2xl rounded-l-[4px] bg-[#0c1827] border border-[#d3aa3b]/30 shadow-2xl overflow-hidden"
            style={{ transform: 'translateZ(-14px)' }}
          >
            {/* Leather texture / backing grain */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#07121d] via-[#102338] to-[#1c385a] opacity-95" />
            <div className="absolute inset-0 bg-[radial-gradient(#efbf04_1px,transparent_1px)] [background-size:12px_12px] opacity-10" />
          </div>

          {/* ==================== 2. REALISTIC 3D PAGE BLOCK (Right & Bottom Edges) ==================== */}
          {/* Right Page Edge (layered paper thickness) */}
          <div
            className="absolute top-1 bottom-1 right-[-10px] sm:right-[-12px] w-[10px] sm:w-[12px] rounded-r-[2px] bg-[#f8f5ee] border-y border-r border-[#d8cdb8] shadow-inner"
            style={{
              transform: 'rotateY(90deg) translateZ(-5px)',
              transformOrigin: 'left center',
              background:
                'repeating-linear-gradient(to right, #faf6ee 0px, #faf6ee 1px, #e8ddc7 2px, #faf6ee 3px, #d5c7ab 4px)',
            }}
          >
            {/* Gold Gilding Sheen on Paper Edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#efbf04]/25 via-transparent to-[#efbf04]/25 opacity-60 pointer-events-none" />
          </div>

          {/* Bottom Page Edge */}
          <div
            className="absolute -bottom-[8px] sm:-bottom-[10px] left-2 right-1 h-[8px] sm:h-[10px] rounded-b-[2px] bg-[#f2ecdc] border-x border-b border-[#d8cdb8] shadow-inner"
            style={{
              transform: 'rotateX(-90deg) translateZ(-4px)',
              transformOrigin: 'center top',
              background:
                'repeating-linear-gradient(to bottom, #faf6ee 0px, #faf6ee 1px, #e4d8bf 2px, #faf6ee 3px)',
            }}
          />

          {/* ==================== 3. INNER FIRST PAGE (Revealed on Cover Open) ==================== */}
          <div
            className="absolute inset-[3px] sm:inset-[4px] rounded-r-xl rounded-l-[2px] bg-[#fdfbf7] overflow-hidden shadow-inner border border-[#e8ddc7]"
            style={{
              transform: 'translateZ(-1px)',
              backgroundImage:
                'radial-gradient(ellipse at 85% 15%, rgba(239, 191, 4, 0.08) 0%, transparent 60%), linear-gradient(to right, rgba(0,0,0,0.06) 0%, transparent 8%)',
            }}
          >
            {innerImageUrl ? (
              /* Custom Uploaded First Page Graphic */
              <div className="relative size-full">
                <Image
                  src={innerImageUrl}
                  alt={`${title} First Page`}
                  fill
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 340px"
                  className="object-cover rounded-r-xl rounded-l-[2px]"
                />
                {/* Subtle Paper Grain & Ambient Border Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent pointer-events-none" />
              </div>
            ) : (
              /* Dynamic Editorial Parchment Scripture Page (Without red ribbon) */
              <div className="size-full p-3.5 sm:p-5 flex flex-col justify-between">
                {/* Header with delicate filigree */}
                <div className="border-b border-[#efbf04]/35 pb-2 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-[#a88214] mb-0.5">
                    <Sparkles className="w-3 h-3 text-[#d3aa3b]" />
                    <span className="font-serif text-[9px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold">
                      Ankur Narula Ministries
                    </span>
                    <Sparkles className="w-3 h-3 text-[#d3aa3b]" />
                  </div>
                  <h4 className="font-poppins font-bold text-[#003471] text-[11px] sm:text-[13px] md:text-[14px] line-clamp-1">
                    {title}
                  </h4>
                </div>

                {/* Scripture Quote in Classic Editorial Typography */}
                <div className="my-auto px-1 py-1 text-center">
                  <p className="font-serif italic text-[#3a352a] text-[10px] sm:text-[12px] md:text-[13px] leading-relaxed">
                    “{scripture}”
                  </p>
                  <p className="font-poppins font-semibold text-[#a88214] text-[9px] sm:text-[10px] mt-1.5 uppercase tracking-wider">
                    — {scriptureRef}
                  </p>
                </div>

                {/* Footer with Gold Emblem & Store CTA Prompt */}
                <div className="pt-2 border-t border-[#efbf04]/30 flex items-center justify-between text-[9px] sm:text-[10px] text-[#003471] font-medium font-poppins">
                  <span className="text-[#a88214] font-semibold">{subtitle}</span>
                  <span className="inline-flex items-center gap-1 text-[#003471] font-bold group-hover:text-[#a88214] transition-colors">
                    Read Book <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* ==================== 4. 3D FRONT BOOK COVER (Opens on Left Hinge on Hover) ==================== */}
          <motion.div
            animate={{
              rotateY: isHovered ? -42 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'left center',
            }}
            className="absolute inset-0 rounded-r-2xl rounded-l-[3px] shadow-2xl border-y border-r border-[#efbf04]/40 bg-[#091522] overflow-hidden group/cover"
          >
            {/* Book Cover Image */}
            <Image
              src={imageUrl}
              alt={alt}
              fill
              sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 340px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              priority={isForeground}
            />

            {/* Book Spine Groove / Hinge Indent (Left Edge realistic crease) */}
            <div
              className="absolute top-0 bottom-0 left-0 w-[18px] sm:w-[24px] pointer-events-none z-20"
              style={{
                background:
                  'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 25%, rgba(255,255,255,0.18) 45%, rgba(0,0,0,0.45) 75%, transparent 100%)',
              }}
            />

            {/* Embossed Golden Spine Seam Line */}
            <div className="absolute top-0 bottom-0 left-[18px] sm:left-[24px] w-[1px] bg-gradient-to-b from-transparent via-[#efbf04]/50 to-transparent pointer-events-none z-20" />

            {/* Hardcover Outer Bevel Highlight */}
            <div className="absolute inset-0 rounded-r-2xl border-t border-r border-white/25 pointer-events-none z-20" />

            {/* Animated Glossy Sheen / Light Reflex Sweep on Hover */}
            <motion.div
              animate={{
                x: isHovered ? ['-100%', '200%'] : '-100%',
              }}
              transition={{
                duration: 0.85,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-22deg] pointer-events-none z-20"
            />

            {/* Subtle Vignette & Bottom Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 pointer-events-none" />

            {/* Interactive "Open Book" Hover Badge Pill */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#003471]/90 backdrop-blur-md border border-[#efbf04]/60 text-[#efbf04] text-[10px] sm:text-xs font-poppins font-semibold shadow-lg">
                <BookOpen className="w-3 h-3" />
                <span>Open Book</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export const FaithResourcesSection: React.FC<FaithResourcesSectionProps> = ({
  headerTitle = 'Faith Resources',
  description = 'Explore books, teachings, and spiritual resources that will strengthen your walk with God.',
  storeLink = '/store',
  storeLabel = 'Visit the Store Now',
  bgImage,
  bgFallback = '/faith_resources_background.png',
  bgInnerImage,
  bgInnerFallback,
  fgImage,
  fgFallback = '/faith_resources_foreground.png',
  fgInnerImage,
  fgInnerFallback,
}) => {
  const resolvedBgUrl = getMediaUrl(bgImage, bgFallback)
  const resolvedBgInnerUrl = getMediaUrl(bgInnerImage, bgInnerFallback || '') || null
  const resolvedFgUrl = getMediaUrl(fgImage, fgFallback)
  const resolvedFgInnerUrl = getMediaUrl(fgInnerImage, fgInnerFallback || '') || null

  return (
    <section className="relative overflow-hidden select-none" data-node-id="275:810">
      <SacredCanvas tone="pure-light" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
            {/* 3D Realistic Interactive Dual Book Showcase with Framer Motion Reveal */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[340px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
              {/* Subtle ambient golden radiance halo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="absolute w-[280px] sm:w-[380px] md:w-[440px] h-[280px] sm:h-[380px] md:h-[440px] bg-gradient-to-tr from-[#efbf04]/15 via-[#003471]/10 to-transparent rounded-full blur-3xl pointer-events-none"
              />

              <div className="relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[620px] h-[310px] sm:h-[400px] md:h-[460px] lg:h-[490px] mx-auto">
                {/* Background Book 1 (Sanatan Parmeshwar) */}
                <RealisticBookCard
                  imageUrl={resolvedBgUrl}
                  alt="Sanatan Parmeshwar spiritual faith resource teachings"
                  title="Sanatan Parmeshwar"
                  subtitle="Apostolic Teaching"
                  scripture="Your word is a lamp to my feet and a light to my path."
                  scriptureRef="Psalm 119:105"
                  storeLink={storeLink}
                  innerImageUrl={resolvedBgInnerUrl}
                  isForeground={false}
                  className="left-0 sm:left-2 lg:left-0 top-0 sm:top-2"
                  initialOffset={{ x: -40, y: 10, rotate: -4 }}
                  delay={0.1}
                />

                {/* Foreground Book 2 (Abhishekt Geeton Ki Mala) */}
                <RealisticBookCard
                  imageUrl={resolvedFgUrl}
                  alt="Abhishekt Geeton Ki Mala holy anointed songbook & literature"
                  title="Abhishekt Geeton Ki Mala"
                  subtitle="Anointed Songs & Prayer"
                  scripture="He puts a new song in my mouth, a hymn of praise to our God."
                  scriptureRef="Psalm 40:3"
                  storeLink={storeLink}
                  innerImageUrl={resolvedFgInnerUrl}
                  isForeground={true}
                  className="right-0 sm:right-2 lg:right-auto lg:left-[140px] top-[50px] sm:top-[65px] md:top-[75px] lg:top-[70px]"
                  initialOffset={{ x: 40, y: 30, rotate: 3 }}
                  delay={0.25}
                />
              </div>
            </div>

            {/* Text & Store CTA with Framer Motion Reveal */}
            <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
              <RevealOnScroll direction="up" distance={20} duration={0.6} delay={0.1}>
                {/* Tag Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#efbf04]/15 border border-[#efbf04]/40 text-[#003471] text-xs sm:text-sm font-poppins font-semibold mb-3 sm:mb-4 shadow-sm">
                  <BookOpen className="w-3.5 h-3.5 text-[#003471]" />
                  <span>Anointed Books & Literature</span>
                </div>
              </RevealOnScroll>

              {/* Heading */}
              <TextWordReveal
                as="h2"
                delay={0.2}
                staggerDelay={0.04}
                className="font-poppins font-bold text-[#003471] text-2xl sm:text-3xl md:text-[38px] leading-tight tracking-tight"
              >
                {headerTitle}
              </TextWordReveal>

              {/* Accent Gold Underline Bar */}
              <RevealOnScroll direction="right" distance={30} duration={0.6} delay={0.35}>
                <div className="h-[4px] w-16 bg-[#efbf04] rounded-full mt-3 mb-2" />
              </RevealOnScroll>

              {/* Description Text */}
              <BlurTextReveal
                as="p"
                delay={0.35}
                duration={0.65}
                className="font-poppins text-[#333333] text-sm sm:text-base md:text-[18px] leading-relaxed mt-2 sm:mt-4 max-w-[440px]"
              >
                {description}
              </BlurTextReveal>

              {/* Store Button */}
              <RevealOnScroll direction="up" distance={20} duration={0.6} delay={0.45} className="mt-6 sm:mt-8 w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block w-full sm:w-auto"
                >
                  <Link
                    href={storeLink}
                    className="group inline-flex items-center justify-center gap-2.5 bg-[#efbf04] hover:bg-[#e2b500] text-[#0b0c1c] font-poppins font-semibold text-sm sm:text-base md:text-[18px] w-full sm:w-[240px] md:w-[260px] h-[48px] sm:h-[54px] md:h-[58px] rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#efbf04]/30"
                  >
                    <span>{storeLabel}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </SacredCanvas>
    </section>
  )
}
