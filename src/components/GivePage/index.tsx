'use client'

import React from 'react'
import { GiveHeroSection } from './GiveHeroSection'
import { QRCodeSection } from './QRCodeSection'
import { BankDetailsSection } from './BankDetailsSection'
import { GivePageData } from './GiveTypes'

interface GivePageProps {
  data?: GivePageData | null
}

export const GivePage: React.FC<GivePageProps> = ({ data }) => {
  return (
    <main className="w-full bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative overflow-hidden">
      <GiveHeroSection
        heroTitle={data?.heroTitle}
        scriptureVerse={data?.scriptureVerse}
        purposeStatement={data?.purposeStatement}
      />
      <QRCodeSection
        qrHeaderTitle={data?.qrHeaderTitle}
        iciciQrImage={data?.iciciQrImage}
        iciciQrFallback={data?.iciciQrFallback}
        hdfcQrImage={data?.hdfcQrImage}
        hdfcQrFallback={data?.hdfcQrFallback}
        axisLogo={data?.axisLogo}
        axisLogoFallback={data?.axisLogoFallback}
        axisQrImage={data?.axisQrImage}
        axisQrFallback={data?.axisQrFallback}
        gpayQrImage={data?.gpayQrImage}
        gpayQrFallback={data?.gpayQrFallback}
      />
      <BankDetailsSection
        bankHeaderTitle={data?.bankHeaderTitle}
        bankAccounts={data?.bankAccounts}
      />
    </main>
  )
}
