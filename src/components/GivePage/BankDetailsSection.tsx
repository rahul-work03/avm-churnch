'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Copy, Check } from 'lucide-react'

export const BankDetailsSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => {
      setCopiedKey(null)
    }, 2000)
  }

  const bankAccounts = [
    {
      id: 'axis-bank',
      bankName: 'Axis Bank',
      logo: '/figma-assets/545eda914cf27ce56363238bc5c394e5b299d4a9.png',
      logoWidth: 'w-[180px] sm:w-[210px] md:w-[230px]',
      logoHeight: 'h-[48px] sm:h-[58px] md:h-[64px]',
      accountHolder: 'ANKUR NARULA MINISTRY SOCIETY',
      accountNumber: '924010075067074',
      ifsc: 'UTIB0004459',
      branch: 'JALANDHAR',
      borderColor: 'border-[#97144d]',
      desktopNode: '231:874',
      mobileNode: '231:1018',
    },
    {
      id: 'hdfc-bank',
      bankName: 'HDFC Bank',
      logo: '/figma-assets/9d4f1ec389672c76ace509021a1c6fcb77bc75a8.png',
      logoWidth: 'w-[190px] sm:w-[220px] md:w-[240px]',
      logoHeight: 'h-[50px] sm:h-[60px] md:h-[68px]',
      accountHolder: 'ANKUR NARULA MINISTRY SOCIETY',
      accountNumber: '591300000000116',
      ifsc: 'HDFC0000341',
      branch: 'JALANDHAR',
      borderColor: 'border-[#004c8f]',
      desktopNode: '231:880',
      mobileNode: '231:1030',
    },
    {
      id: 'icici-bank',
      bankName: 'ICICI Bank',
      logo: '/figma-assets/24bb5820192ae54645835338cb055b7875449b01.png',
      logoWidth: 'w-[200px] sm:w-[230px] md:w-[250px]',
      logoHeight: 'h-[48px] sm:h-[58px] md:h-[66px]',
      accountHolder: 'ANKUR NARULA MINISTRY SOCIETY',
      accountNumber: '24680500116',
      ifsc: 'ICIC0002468',
      branch: 'JALANDHAR',
      borderColor: 'border-[#f37021]',
      desktopNode: '231:886',
      mobileNode: '231:1042',
    },
  ]

  return (
    <section className="relative pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-32 overflow-hidden">
      {/* Flanked Section Title with Golden Divider Bars spanning full width (Figma 231:908-910 / 231:1029) */}
      <div className="w-full flex items-center justify-between mb-10 sm:mb-16">
        <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-r-full shadow-xs pointer-events-none" />

        <h2 className="font-poppins font-bold text-center text-sm sm:text-lg md:text-[24px] text-[#1f3a5f] tracking-wide uppercase px-3 sm:px-8 max-w-[620px] leading-tight">
          YOU CAN SEND OFFERING THROUGH WITH ALL THESE BANKS
        </h2>

        <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-l-full shadow-xs pointer-events-none" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* 3 Bank Detail Cards (Desktop: 231:874-886, Mobile: 231:1018-1042) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-[1180px]">
          {bankAccounts.map((account) => {
            const accCopyId = `${account.id}-acc`
            const ifscCopyId = `${account.id}-ifsc`

            return (
              <div
                key={account.id}
                className={`relative bg-white rounded-[20px] p-5 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border-[1.5px] sm:border-2 transition-all duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.1)] hover:-translate-y-1 flex flex-col items-center text-center justify-between min-h-[260px] sm:min-h-[290px] ${account.borderColor}`}
                data-node-id={account.desktopNode}
              >
                {/* Bank Logo Header */}
                <div className={`relative ${account.logoWidth} ${account.logoHeight} flex-shrink-0 flex items-center justify-center mb-3 sm:mb-4`}>
                  <Image
                    src={account.logo}
                    alt={`${account.bankName} Logo`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* A/C Holder Name Heading & Value */}
                <div className="flex flex-col items-center">
                  <p className="font-poppins font-bold text-sm sm:text-[18px] text-[#1f3a5f] tracking-wide">
                    A/C HOLDER NAME
                  </p>
                  <p className="font-poppins font-normal text-xs sm:text-[16px] text-[#333333] mt-0.5">
                    {account.accountHolder}
                  </p>
                </div>

                {/* Account Number with Click-to-Copy */}
                <div
                  onClick={() => copyToClipboard(account.accountNumber, accCopyId)}
                  className="group/acc cursor-pointer flex items-center justify-center gap-1.5 py-0.5 px-2 rounded-md hover:bg-slate-50 transition-colors"
                  title="Click to copy Account Number"
                >
                  <p className="font-poppins font-bold text-xs sm:text-[18px] text-[#333333] tracking-wide">
                    ACCOUNT NO : {account.accountNumber}
                  </p>
                  {copiedKey === accCopyId ? (
                    <Check size={14} className="text-emerald-600 flex-shrink-0" />
                  ) : (
                    <Copy size={13} className="text-slate-400 opacity-0 group-hover/acc:opacity-100 transition-opacity flex-shrink-0" />
                  )}
                </div>

                {/* IFSC Code with Click-to-Copy */}
                <div
                  onClick={() => copyToClipboard(account.ifsc, ifscCopyId)}
                  className="group/ifsc cursor-pointer flex items-center justify-center gap-1.5 py-0.5 px-2 rounded-md hover:bg-slate-50 transition-colors"
                  title="Click to copy IFSC Code"
                >
                  <p className="font-poppins font-normal text-xs sm:text-[18px] text-[#333333]">
                    IFSC: {account.ifsc}
                  </p>
                  {copiedKey === ifscCopyId ? (
                    <Check size={14} className="text-emerald-600 flex-shrink-0" />
                  ) : (
                    <Copy size={13} className="text-slate-400 opacity-0 group-hover/ifsc:opacity-100 transition-opacity flex-shrink-0" />
                  )}
                </div>

                {/* Branch */}
                <p className="font-poppins font-normal text-xs sm:text-[18px] text-[#333333]">
                  BRANCH: {account.branch}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
