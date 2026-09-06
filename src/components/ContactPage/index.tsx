'use client'

import React from 'react'
import { ContactHeroSection } from './ContactHeroSection'
import { ContactInfoSection } from './ContactInfoSection'
import { AddressSection } from './AddressSection'

export const ContactPage: React.FC = () => {
  return (
    <main className="w-full bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative overflow-hidden">
      {/* 1. Hero & Interactive Contact Form Section */}
      <ContactHeroSection />

      {/* 2. Contact Information Cards / Grid */}
      <ContactInfoSection />

      {/* 3. Address Section */}
      <AddressSection />
    </main>
  )
}
