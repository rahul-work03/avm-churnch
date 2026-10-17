'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/providers/Cart'

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    clearCart,
    updateQuantity,
    removeItem,
    itemCount,
    subtotal,
    shippingFee,
    totalAmount,
  } = useCart()

  // Prevent background scrolling when cart drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen])

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative z-10 w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-[#fafbfc]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#003471]/10 flex items-center justify-center text-[#003471]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-lg text-[#003471] leading-tight">
                    Shopping Cart
                  </h3>
                  <p className="text-xs text-slate-500 font-poppins">
                    {itemCount} {itemCount === 1 ? 'item' : 'items'} selected
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs text-red-500 hover:text-red-700 font-poppins px-2 py-1 rounded hover:bg-red-50 transition-colors cursor-pointer"
                    title="Empty cart"
                  >
                    Clear All
                  </button>
                )}
                <button
                  type="button"
                  onClick={closeCart}
                  className="w-8 h-8 rounded-full hover:bg-slate-200/60 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                  aria-label="Close cart drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-slate-100">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                  <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-slate-400">
                    <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg text-slate-800 mb-1">
                    Your cart is empty
                  </h4>
                  <p className="font-poppins text-xs text-slate-500 max-w-xs mb-6">
                    Discover life-transforming books and hymnals by Apostle Dr. Ankur Yoseph Narula.
                  </p>
                  <button
                    type="button"
                    onClick={closeCart}
                    className="px-5 py-2.5 rounded-lg bg-[#003471] text-white font-poppins font-medium text-xs hover:bg-[#002855] transition-colors cursor-pointer shadow-sm"
                  >
                    Browse Store
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="py-4 flex gap-3.5 items-start group">
                    {/* Item Thumbnail */}
                    <div className="relative w-18 h-22 rounded-lg bg-slate-50 border border-slate-200/80 overflow-hidden shrink-0 p-1">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                        sizes="72px"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-poppins font-semibold text-sm text-slate-900 leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="font-poppins text-xs text-slate-500 mt-0.5">
                        {item.category || 'Spiritual Book'}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <span className="font-poppins font-bold text-sm text-[#003471]">
                          ₹{item.price}.00
                        </span>
                        {item.originalPrice && item.originalPrice > item.price && (
                          <span className="text-xs text-slate-400 line-through">
                            ₹{item.originalPrice}.00
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls & Remove */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-semibold font-poppins text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
                          aria-label="Remove item from cart"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-slate-100 bg-[#fafbfc] space-y-3">
                <div className="space-y-1.5 text-xs font-poppins text-slate-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-slate-800">₹{subtotal}.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping Across India</span>
                    <span className="font-semibold text-emerald-600">
                      {shippingFee === 0 ? 'FREE' : `₹${shippingFee}.00`}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between text-base font-bold text-[#003471]">
                    <span>Total Payable</span>
                    <span>₹{totalAmount}.00</span>
                  </div>
                </div>

                <Link
                  href="/store/checkout"
                  onClick={closeCart}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-poppins font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer no-underline"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer
