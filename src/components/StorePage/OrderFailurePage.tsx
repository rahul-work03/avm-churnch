'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AlertCircle, RotateCcw, ShoppingBag, Phone, Mail, HelpCircle } from 'lucide-react'

interface OrderFailurePageProps {
  orderNumber?: string | null
  reason?: string | null
}

export const OrderFailurePage: React.FC<OrderFailurePageProps> = ({
  orderNumber,
  reason = 'Payment was declined or cancelled by the user.',
}) => {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#252c32] antialiased pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-[680px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm text-center space-y-6"
        >
          {/* Failure Alert Badge */}
          <div className="w-20 h-20 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto shadow-inner">
            <AlertCircle className="w-12 h-12 stroke-[2]" />
          </div>

          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold font-poppins uppercase tracking-wider mb-2">
              Payment Incomplete
            </span>
            <h1 className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#003471] tracking-tight">
              Payment Could Not Be Completed
            </h1>
            <p className="font-poppins text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
              {reason || 'We were unable to complete your payment transaction, or the payment window was closed before completion.'}
            </p>
          </div>

          {/* Reference and Bank Refund Reassurance */}
          <div className="bg-[#fffbfb] border border-rose-200 rounded-2xl p-5 max-w-md mx-auto text-left space-y-2 text-xs font-poppins">
            {orderNumber && (
              <p className="text-slate-600 pb-2 border-b border-rose-100">
                Order Reference: <strong className="font-mono text-slate-900">{orderNumber}</strong>
              </p>
            )}
            <div className="flex items-start gap-2 text-slate-700">
              <HelpCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span>
                <strong>Was money deducted?</strong> If any amount was deducted from your account or UPI wallet, it will be automatically refunded by your issuing bank within 3 to 5 business days.
              </span>
            </div>
          </div>

          {/* Cart Retained Message */}
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 font-poppins">
            Your shopping cart items have been preserved so you do not need to choose them again.
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/store/checkout"
              className="px-6 py-3.5 rounded-xl bg-[#003471] hover:bg-[#002855] text-white font-poppins font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all no-underline"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Checkout</span>
            </Link>

            <Link
              href="/store"
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-poppins font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all no-underline"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Browse Store</span>
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
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default OrderFailurePage
