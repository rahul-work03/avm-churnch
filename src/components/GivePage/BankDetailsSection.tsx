'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { BankAccount } from './GiveTypes'
import { TextWordReveal, GoldBarReveal } from '@/components/ui/text-reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

const DEFAULT_BANK_ACCOUNTS: BankAccount[] = [
  {
    id: 'axis-bank',
    bankName: 'Axis Bank',
    logoFallback: '/give/axis_bank_logo.png',
    accountHolder: 'ANKUR NARULA MINISTRY SOCIETY',
    accountNumber: '924010075067074',
    ifsc: 'UTIB0004459',
    branch: 'JALANDHAR',
    borderColor: '#97144d',
  },
  {
    id: 'hdfc-bank',
    bankName: 'HDFC Bank',
    logoFallback: '/give/hdfc_bank_logo.png',
    accountHolder: 'ANKUR NARULA MINISTRY SOCIETY',
    accountNumber: '591300000000116',
    ifsc: 'HDFC0000341',
    branch: 'JALANDHAR',
    borderColor: '#004c8f',
  },
  {
    id: 'icici-bank',
    bankName: 'ICICI Bank',
    logoFallback: '/give/icici_bank_logo.png',
    accountHolder: 'ANKUR NARULA MINISTRY SOCIETY',
    accountNumber: '24680500116',
    ifsc: 'ICIC0002468',
    branch: 'JALANDHAR',
    borderColor: '#f37021',
  },
]

interface BankDetailsSectionProps {
  bankHeaderTitle?: string | null
  bankAccounts?: BankAccount[] | null
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const BankDetailsSection: React.FC<BankDetailsSectionProps> = ({
  bankHeaderTitle = 'YOU CAN SEND OFFERING THROUGH WITH ALL THESE BANKS',
  bankAccounts,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const activeAccounts =
    bankAccounts && bankAccounts.length > 0 ? bankAccounts : DEFAULT_BANK_ACCOUNTS

  const copyToClipboard = (text: string, key: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
      setCopiedKey(key)
      setTimeout(() => {
        setCopiedKey(null)
      }, 2000)
    }
  }

  return (
    <section className="relative pt-10 sm:pt-14 md:pt-18 pb-16 sm:pb-24 md:pb-32 overflow-hidden bg-white select-none">
      {/* Flanked Section Title with Golden Divider Bars */}
      <div className="w-full flex items-center justify-between mb-8 sm:mb-12 md:mb-16">
        <GoldBarReveal
          direction="left"
          duration={0.6}
          delay={0.1}
          className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[240px] xl:w-[323px] h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm flex-shrink-0"
        />

        <div className="flex-1 min-w-0 px-2 sm:px-4 md:px-8 text-center">
          <TextWordReveal
            as="h2"
            delay={0.08}
            staggerDelay={0.035}
            className="font-poppins font-bold text-center text-sm sm:text-lg md:text-[22px] lg:text-[24px] text-[#1f3a5f] tracking-wide uppercase leading-snug max-w-[680px] mx-auto justify-center line-clamp-2"
          >
            {bankHeaderTitle || 'YOU CAN SEND OFFERING THROUGH WITH ALL THESE BANKS'}
          </TextWordReveal>
        </div>

        <GoldBarReveal
          direction="right"
          duration={0.6}
          delay={0.1}
          className="w-[32px] sm:w-[80px] md:w-[160px] lg:w-[240px] xl:w-[323px] h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm flex-shrink-0"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Bank Detail Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-[1180px] items-stretch"
        >
          {activeAccounts.map((account, index) => {
            const accId = account.id || `bank-${index}`
            const accCopyId = `${accId}-acc`
            const ifscCopyId = `${accId}-ifsc`
            const defaultLogo =
              index === 0
                ? '/give/axis_bank_logo.png'
                : index === 1
                ? '/give/hdfc_bank_logo.png'
                : '/give/icici_bank_logo.png'
            const logoUrl = getMediaUrl(account.logo, account.logoFallback || defaultLogo)
            const borderStyle = account.borderColor ? { borderColor: account.borderColor } : {}

            return (
              <motion.div
                key={accId}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <div
                  style={borderStyle}
                  className="relative bg-white rounded-[22px] p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-2 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] flex flex-col items-center text-center justify-between min-h-[310px] sm:min-h-[330px] h-full"
                >
                  {/* Bank Logo Header (Uniform Fixed Box) */}
                  <div className="relative w-full max-w-[200px] h-[48px] sm:h-[54px] flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={logoUrl}
                      alt={`${account.bankName || 'Bank'} Logo`}
                      fill
                      className="object-contain object-center"
                    />
                  </div>

                  {/* Divider Line */}
                  <div className="w-full h-px bg-slate-100 my-2" />

                  {/* Account Details Group */}
                  <div className="w-full flex flex-col items-center text-center space-y-2.5 sm:space-y-3 flex-1 justify-center py-1">
                    {/* A/C Holder Name */}
                    <div>
                      <p className="font-poppins font-bold text-xs sm:text-[13px] md:text-[14px] text-[#1f3a5f] tracking-wider uppercase">
                        A/C HOLDER NAME
                      </p>
                      <p className="font-poppins font-semibold text-xs sm:text-[14px] md:text-[15px] text-[#333333] mt-0.5">
                        {account.accountHolder || 'ANKUR NARULA MINISTRY SOCIETY'}
                      </p>
                    </div>

                    {/* Account Number with Click-to-Copy */}
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyToClipboard(account.accountNumber, accCopyId)}
                      className="group/acc cursor-pointer flex flex-col items-center justify-center py-1 px-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all select-text"
                      title="Click to copy Account Number"
                    >
                      <p className="font-poppins font-bold text-xs sm:text-[13px] md:text-[14px] text-[#1f3a5f] tracking-wider uppercase">
                        ACCOUNT NO
                      </p>
                      <div className="inline-flex items-center justify-center gap-1.5 mt-0.5">
                        <span className="font-poppins font-bold text-xs sm:text-[14px] md:text-[16px] text-[#333333] tracking-wide">
                          {account.accountNumber}
                        </span>
                        {copiedKey === accCopyId ? (
                          <Check size={14} className="text-emerald-600 flex-shrink-0 animate-in zoom-in-50" />
                        ) : (
                          <Copy size={13} className="text-slate-400 group-hover/acc:text-slate-600 transition-colors flex-shrink-0" />
                        )}
                      </div>
                    </motion.div>

                    {/* IFSC Code with Click-to-Copy */}
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyToClipboard(account.ifsc, ifscCopyId)}
                      className="group/ifsc cursor-pointer inline-flex items-center justify-center gap-1.5 py-0.5 px-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all select-text"
                      title="Click to copy IFSC Code"
                    >
                      <p className="font-poppins text-xs sm:text-[13px] md:text-[15px] text-[#333333]">
                        <span className="font-bold text-[#1f3a5f]">IFSC :</span> {account.ifsc}
                      </p>
                      {copiedKey === ifscCopyId ? (
                        <Check size={13} className="text-emerald-600 flex-shrink-0 animate-in zoom-in-50" />
                      ) : (
                        <Copy size={12} className="text-slate-400 opacity-0 group-hover/ifsc:opacity-100 transition-opacity flex-shrink-0" />
                      )}
                    </motion.div>

                    {/* Branch */}
                    <p className="font-poppins text-xs sm:text-[13px] md:text-[15px] text-[#333333]">
                      <span className="font-bold text-[#1f3a5f]">BRANCH :</span> {account.branch || 'JALANDHAR'}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
