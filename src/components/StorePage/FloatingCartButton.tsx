'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/providers/Cart'

export const FloatingCartButton: React.FC = () => {
  const { itemCount, totalAmount, toggleCart } = useCart()

  if (itemCount === 0) return null

  return (
    <AnimatePresence>
      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleCart}
        className="fixed bottom-20 right-6 sm:bottom-22 sm:right-8 z-40 bg-[#003471] hover:bg-[#002855] text-white px-4 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-[#efbf04]/50 cursor-pointer"
        aria-label="View shopping bag"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5 text-[#efbf04]" />
          <span className="absolute -top-2 -right-2 bg-[#efbf04] text-[#003471] text-[10px] font-bold font-poppins w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-sm">
            {itemCount}
          </span>
        </div>
        <div className="flex flex-col text-left font-poppins pr-1">
          <span className="text-[11px] text-slate-300 font-medium leading-none">Cart</span>
          <span className="text-xs font-bold text-white leading-tight mt-0.5">
            ₹{totalAmount}.00
          </span>
        </div>
      </motion.button>
    </AnimatePresence>
  )
}

export default FloatingCartButton
