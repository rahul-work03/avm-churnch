'use client'

import React from 'react'
import Image from 'next/image'

export const QRCodeSection: React.FC = () => {
  return (
    <section className="relative py-10 sm:py-14 md:py-20 overflow-hidden" data-node-id="231:946">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Heading - Clean text (Node 231:873) */}
        <h2 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-[30px] text-[#1f3a5f] text-center mb-8 sm:mb-14 tracking-tight">
          Scan QR Code For Tithes &amp; Offerings
        </h2>

        {/* Dual White iPhone XR Mockups Container */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-8 md:gap-12 items-stretch justify-center w-full max-w-[680px]">
          {/* ===================== PHONE 1 (ICICI & HDFC) - Node 231:946 ===================== */}
          <div
            className="relative bg-[#fbfbfb] rounded-[28px] sm:rounded-[42px] md:rounded-[48px] p-2 sm:p-3.5 md:p-4 shadow-[0_15px_40px_rgba(0,0,0,0.1),0_4px_10px_rgba(0,0,0,0.04)] border-[4px] sm:border-[7px] md:border-[9px] border-[#eceef1] ring-1 ring-black/5 flex flex-col justify-between items-center transition-all duration-300 hover:shadow-[0_22px_55px_rgba(0,0,0,0.14)] hover:-translate-y-1 w-full aspect-[405/760]"
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
              {/* Proximity sensor dot (231:953) */}
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#333333]/40 rounded-full" />
              {/* Center Speaker slit (231:950) */}
              <div className="w-10 sm:w-16 md:w-20 h-1 sm:h-1.5 bg-[#333333]/30 rounded-full" />
              {/* Front Camera Lens with Specular highlight (231:951, 231:952) */}
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
                  src="/figma-assets/9ce6f198b6a68da7d3221e00ece757f36ade008a.png"
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
                  src="/figma-assets/c4a784737f0d99b16c4bca70fd3a0761ddffbdd4.png"
                  alt="HDFC Bank QR Code for Tithes and Offerings"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="w-12 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-slate-300/80 rounded-full mt-1.5 sm:mt-2.5 flex-shrink-0" />
          </div>

          {/* ===================== PHONE 2 (Axis & Google Pay) - Node 231:954 ===================== */}
          <div
            className="relative bg-[#fbfbfb] rounded-[28px] sm:rounded-[42px] md:rounded-[48px] p-2 sm:p-3.5 md:p-4 shadow-[0_15px_40px_rgba(0,0,0,0.1),0_4px_10px_rgba(0,0,0,0.04)] border-[4px] sm:border-[7px] md:border-[9px] border-[#eceef1] ring-1 ring-black/5 flex flex-col justify-between items-center transition-all duration-300 hover:shadow-[0_22px_55px_rgba(0,0,0,0.14)] hover:-translate-y-1 w-full aspect-[405/760]"
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
              {/* Proximity sensor dot (231:961) */}
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#333333]/40 rounded-full" />
              {/* Center Speaker slit (231:958) */}
              <div className="w-10 sm:w-16 md:w-20 h-1 sm:h-1.5 bg-[#333333]/30 rounded-full" />
              {/* Front Camera Lens with Specular highlight (231:959, 231:960) */}
              <div className="relative w-2 sm:w-3 h-2 sm:h-3 bg-[#313131]/45 rounded-full flex items-center justify-center">
                <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white/60 rounded-full ml-auto mr-0.5" />
              </div>
            </div>

            {/* Inner Phone Screen Content */}
            <div className="w-full flex-1 bg-white rounded-[18px] sm:rounded-[28px] md:rounded-[34px] p-1.5 sm:p-2.5 md:p-3 flex flex-col justify-between gap-2 sm:gap-3 shadow-xs border border-slate-100 overflow-hidden min-h-0">
              {/* Card 1: Axis Bank Card (Nodes 231:964 & 231:965) */}
              <div
                className="relative w-full flex-1 rounded-md sm:rounded-lg overflow-hidden bg-white shadow-xs min-h-0 flex flex-col items-center justify-center gap-0.5 sm:gap-1.5 p-1 sm:p-1.5"
                data-node-id="231:964"
              >
                {/* Axis Bank Logo Header (Node 231:965) */}
                <div className="relative w-20 sm:w-28 md:w-32 h-5 sm:h-7 md:h-8 flex-shrink-0">
                  <Image
                    src="/figma-assets/545eda914cf27ce56363238bc5c394e5b299d4a9.png"
                    alt="Axis Bank Logo"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Axis Bank QR Code (Node 231:964) */}
                <div className="relative w-full flex-1 min-h-0">
                  <Image
                    src="/figma-assets/b0a41ad9e06351157c10e8cc25bcdb9d0fb1dc72.png"
                    alt="Axis Bank QR Code for Tithes and Offerings"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Card 2: Google Pay QR (Node 231:966) */}
              <div
                className="relative w-full flex-1 rounded-md sm:rounded-lg overflow-hidden bg-white shadow-xs min-h-0"
                data-node-id="231:966"
              >
                <Image
                  src="/figma-assets/02e16c4c34b9864ad41d3e1791f2d600620845e2.png"
                  alt="Google Pay QR Code for Tithes and Offerings"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="w-12 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-slate-300/80 rounded-full mt-1.5 sm:mt-2.5 flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
