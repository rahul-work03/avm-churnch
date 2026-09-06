'use client'

import React from 'react'
import { GiveHeroSection } from './GiveHeroSection'
import { QRCodeSection } from './QRCodeSection'
import { BankDetailsSection } from './BankDetailsSection'

export const GivePage: React.FC = () => {
  return (
    <main className="w-full bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative overflow-hidden">
      <GiveHeroSection />
      <QRCodeSection />
      <BankDetailsSection />
    </main>
  )
}
