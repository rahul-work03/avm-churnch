'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Copy,
  Check,
  ShoppingBag,
  Phone,
  Mail,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'

interface OrderSuccessPageProps {
  orderNumber?: string | null
  paymentId?: string | null
}

export const OrderSuccessPage: React.FC<OrderSuccessPageProps> = ({
  orderNumber = 'ANM-ORDER',
  paymentId,
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (orderNumber) {
      navigator.clipboard.writeText(orderNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#252c32] antialiased pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm text-center space-y-6"
        >
          {/* Animated Success Badge */}
          <div className="relative w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-12 h-12 stroke-[2]" />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
              className="absolute -top-1 -right-1 text-[#efbf04]"
            >
              <Sparkles className="w-6 h-6 fill-[#efbf04]" />
            </motion.div>
          </div>

          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-poppins uppercase tracking-wider mb-2">
              Payment Confirmed & Verified
            </span>
            <h1 className="font-poppins font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#003471] tracking-tight">
              Order Placed Successfully!
            </h1>
            <p className="font-poppins text-xs sm:text-sm text-slate-600 mt-2 max-w-lg mx-auto">
              Praise the Lord! Your order has been confirmed. A detailed receipt with package information has been sent to your email address.
            </p>
          </div>

          {/* Order Reference Box */}
          <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-5 max-w-md mx-auto space-y-3">
            <div className="flex items-center justify-between text-xs font-poppins text-slate-500">
              <span>Order Reference Number</span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-slate-700 hover:text-[#003471] transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy ID'}</span>
              </button>
            </div>
            <div className="font-mono text-xl sm:text-2xl font-bold text-[#003471] tracking-wider">
              {orderNumber}
            </div>
            {paymentId && (
              <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-500 font-poppins flex items-center justify-between">
                <span>Payment Transaction ID:</span>
                <span className="font-mono font-semibold text-slate-700">{paymentId}</span>
              </div>
            )}
          </div>

          {/* Fulfillment Roadmap */}
          <div className="text-left bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 space-y-4">
            <h3 className="font-poppins font-bold text-sm text-[#003471] uppercase tracking-wider">
              What Happens Next?
            </h3>
            <div className="space-y-3 text-xs sm:text-sm font-poppins text-slate-700">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#003471] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <strong className="text-slate-900">Order Packing & Anointing:</strong> Our ministry dispatch team packages your spiritual resources with utmost care.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#003471] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <strong className="text-slate-900">Courier Handover:</strong> Your parcel is dispatched within 24 to 48 business hours via registered courier across India.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#003471] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <strong className="text-slate-900">Safe Delivery:</strong> Delivered safely to your doorstep. For any query, our helpline team is standing by.
                </div>
              </div>
            </div>
          </div>

          {/* Apostolic Blessing Quote */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs sm:text-sm text-amber-900 font-poppins italic">
            &quot;May these anointed resources by Apostle Dr. Ankur Yoseph Narula ignite divine revelation, miraculous breakthroughs, and spiritual elevation in your life.&quot;
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/store"
              className="px-6 py-3.5 rounded-xl bg-[#003471] hover:bg-[#002855] text-white font-poppins font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all no-underline"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>

            <Link
              href="/"
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-poppins font-semibold text-xs sm:text-sm transition-all no-underline"
            >
              <span>Back to Homepage</span>
            </Link>
          </div>

          {/* Support Line */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-poppins">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#efbf04]" />
              <span>Helpline: 0181 520 7777</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#efbf04]" />
              <span>Email: info@ankurnarula.org</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Securely Handled by Ministry Operations</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default OrderSuccessPage
