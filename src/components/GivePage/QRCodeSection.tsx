'use client'

import React from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { TextWordReveal } from '@/components/ui/text-reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

interface QRCodeSectionProps {
  qrHeaderTitle?: string | null
  iciciQrImage?: any
  iciciQrFallback?: string | null
  hdfcQrImage?: any
  hdfcQrFallback?: string | null
  axisLogo?: any
  axisLogoFallback?: string | null
  axisQrImage?: any
  axisQrFallback?: string | null
  gpayQrImage?: any
  gpayQrFallback?: string | null
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
}

const phoneVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const QRCodeSection: React.FC<QRCodeSectionProps> = ({
  qrHeaderTitle = 'Scan QR Code For Tithes & Offerings',
  iciciQrImage,
  iciciQrFallback = '/give/icici_qr_card.png',
  hdfcQrImage,
  hdfcQrFallback = '/give/hdfc_qr_card.png',
  axisQrImage,
  axisQrFallback = '/give/axis_qr_card.png',
  gpayQrImage,
  gpayQrFallback = '/give/gpay_qr_card.png',
}) => {
  const iciciUrl = getMediaUrl(iciciQrImage, iciciQrFallback || '/give/icici_qr_card.png')
  const hdfcUrl = getMediaUrl(hdfcQrImage, hdfcQrFallback || '/give/hdfc_qr_card.png')
  const axisQrUrl = getMediaUrl(axisQrImage, axisQrFallback || '/give/axis_qr_card.png')
  const gpayUrl = getMediaUrl(gpayQrImage, gpayQrFallback || '/give/gpay_qr_card.png')

  return (
    <section className="relative py-10 sm:py-14 md:py-20 overflow-hidden select-none" data-node-id="231:946">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-14 text-center">
          <TextWordReveal
            as="h2"
            delay={0.05}
            staggerDelay={0.035}
            className="font-poppins font-semibold text-2xl sm:text-3xl md:text-[30px] text-[#1f3a5f] text-center tracking-tight justify-center"
          >
            {qrHeaderTitle || 'Scan QR Code For Tithes & Offerings'}
          </TextWordReveal>
        </div>

        {/* Dual White iPhone XR Mockups Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 gap-3.5 sm:gap-8 md:gap-12 items-stretch justify-center w-full max-w-[680px]"
        >
          {/* ===================== PHONE 1 (ICICI & HDFC) - Node 231:946 ===================== */}
          <motion.div
            variants={phoneVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div
              className="relative bg-[#fbfbfb] rounded-[28px] sm:rounded-[42px] md:rounded-[48px] p-2 sm:p-3.5 md:p-4 shadow-[0_15px_40px_rgba(0,0,0,0.1),0_4px_10px_rgba(0,0,0,0.04)] border-[4px] sm:border-[7px] md:border-[9px] border-[#eceef1] ring-1 ring-black/5 flex flex-col justify-between items-center transition-shadow duration-300 hover:shadow-[0_22px_55px_rgba(0,0,0,0.14)] w-full aspect-[405/760]"
              data-node-id="231:946"
            >
              {/* Left Side Volume Buttons */}
              <div className="hidden sm:block absolute -left-[10px] md:-left-[12px] top-20 w-[2.5px] h-6 bg-slate-300 rounded-l-xs" />
              <div className="hidden sm:block absolute -left-[10px] md:-left-[12px] top-30 w-[2.5px] h-8 bg-slate-300 rounded-l-xs" />
              <div className="hidden sm:block absolute -left-[10px] md:-left-[12px] top-40 w-[2.5px] h-8 bg-slate-300 rounded-l-xs" />

              {/* Right Side Power Button */}
              <div className="hidden sm:block absolute -right-[10px] md:-right-[12px] top-24 w-[2.5px] h-11 bg-slate-300 rounded-r-xs" />

              {/* Top Speaker & Front Camera Notch (Figma 231:949 - 231:953) */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2.5 pt-0.5">
                {/* Proximity sensor dot */}
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#333333]/40 rounded-full" />
                {/* Center Speaker slit */}
                <div className="w-10 sm:w-16 md:w-20 h-1 sm:h-1.5 bg-[#333333]/30 rounded-full" />
                {/* Front Camera Lens */}
                <div className="relative w-2 sm:w-3 h-2 sm:h-3 bg-[#313131]/45 rounded-full flex items-center justify-center">
                  <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white/60 rounded-full ml-auto mr-0.5" />
                </div>
              </div>

              {/* Inner Phone Screen Content */}
              <div className="w-full flex-1 bg-white rounded-[18px] sm:rounded-[28px] md:rounded-[34px] p-1.5 sm:p-2.5 md:p-3 flex flex-col justify-between gap-2 sm:gap-3 shadow-xs border border-slate-100 overflow-hidden min-h-0">
                {/* Card 1: ICICI Bank QR (Node 231:962) */}
                <div
                  className="relative w-full flex-1 rounded-md sm:rounded-lg overflow-hidden bg-white shadow-xs min-h-0"
                  data-node-id="231:962"
                >
                  <Image
                    src={iciciUrl}
                    alt="ICICI Bank QR Code for Tithes and Offerings"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Card 2: HDFC Bank QR (Node 231:963) */}
                <div
                  className="relative w-full flex-1 rounded-md sm:rounded-lg overflow-hidden bg-white shadow-xs min-h-0"
                  data-node-id="231:963"
                >
                  <Image
                    src={hdfcUrl}
                    alt="HDFC Bank QR Code for Tithes and Offerings"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="w-12 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-slate-300/80 rounded-full mt-1.5 sm:mt-2.5 flex-shrink-0" />
            </div>
          </motion.div>

          {/* ===================== PHONE 2 (Axis & Google Pay) - Node 231:954 ===================== */}
          <motion.div
            variants={phoneVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div
              className="relative bg-[#fbfbfb] rounded-[28px] sm:rounded-[42px] md:rounded-[48px] p-2 sm:p-3.5 md:p-4 shadow-[0_15px_40px_rgba(0,0,0,0.1),0_4px_10px_rgba(0,0,0,0.04)] border-[4px] sm:border-[7px] md:border-[9px] border-[#eceef1] ring-1 ring-black/5 flex flex-col justify-between items-center transition-shadow duration-300 hover:shadow-[0_22px_55px_rgba(0,0,0,0.14)] w-full aspect-[405/760]"
              data-node-id="231:954"
            >
              {/* Left Side Volume Buttons */}
              <div className="hidden sm:block absolute -left-[10px] md:-left-[12px] top-20 w-[2.5px] h-6 bg-slate-300 rounded-l-xs" />
              <div className="hidden sm:block absolute -left-[10px] md:-left-[12px] top-30 w-[2.5px] h-8 bg-slate-300 rounded-l-xs" />
              <div className="hidden sm:block absolute -left-[10px] md:-left-[12px] top-40 w-[2.5px] h-8 bg-slate-300 rounded-l-xs" />

              {/* Right Side Power Button */}
              <div className="hidden sm:block absolute -right-[10px] md:-right-[12px] top-24 w-[2.5px] h-11 bg-slate-300 rounded-r-xs" />

              {/* Top Speaker & Front Camera Notch (Figma 231:957 - 231:961) */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2.5 pt-0.5">
                {/* Proximity sensor dot */}
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#333333]/40 rounded-full" />
                {/* Center Speaker slit */}
                <div className="w-10 sm:w-16 md:w-20 h-1 sm:h-1.5 bg-[#333333]/30 rounded-full" />
                {/* Front Camera Lens */}
                <div className="relative w-2 sm:w-3 h-2 sm:h-3 bg-[#313131]/45 rounded-full flex items-center justify-center">
                  <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white/60 rounded-full ml-auto mr-0.5" />
                </div>
              </div>

              {/* Inner Phone Screen Content */}
              <div className="w-full flex-1 bg-white rounded-[18px] sm:rounded-[28px] md:rounded-[34px] p-1.5 sm:p-2.5 md:p-3 flex flex-col justify-between gap-2 sm:gap-3 shadow-xs border border-slate-100 overflow-hidden min-h-0">
                {/* Card 1: Axis Bank QR (Node 231:964) */}
                <div
                  className="relative w-full flex-1 rounded-md sm:rounded-lg overflow-hidden bg-white shadow-xs min-h-0"
                  data-node-id="231:964"
                >
                  <Image
                    src={axisQrUrl}
                    alt="Axis Bank QR Code for Tithes and Offerings"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Card 2: Google Pay QR (Node 231:966) */}
                <div
                  className="relative w-full flex-1 rounded-md sm:rounded-lg overflow-hidden bg-white shadow-xs min-h-0"
                  data-node-id="231:966"
                >
                  <Image
                    src={gpayUrl}
                    alt="Google Pay QR Code for Tithes and Offerings"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="w-12 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-slate-300/80 rounded-full mt-1.5 sm:mt-2.5 flex-shrink-0" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
