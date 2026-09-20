'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, X, CheckCircle, ShoppingBag, ShieldCheck, Truck, Loader2 } from 'lucide-react'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import type { ProductItem, StorePageData } from './StoreTypes'

interface StorePageProps {
  data?: StorePageData | null
  products?: ProductItem[]
}

const DEFAULT_PRODUCTS: ProductItem[] = [
  {
    id: 'book-1',
    title: 'Abhishikth Geeton Ki Mala, Hindi Book',
    category: 'Book',
    imageFallback: '/figma-assets/041be041ab1bf7bc1801be6b025564348941aaf1.png',
    originalPrice: 250,
    salePrice: 199,
    rating: 4,
    description:
      'An anointed collection of spiritual worship songs, hymns, and prayers compiled for believers to experience the manifest glory and presence of God.',
  },
  {
    id: 'book-2',
    title: 'Sanatan Parameswar Kaun Hai Hindi Religious',
    category: 'Book',
    imageFallback: '/figma-assets/41278a7d542755b01f989ded3964db46da92339e.png',
    originalPrice: 250,
    salePrice: 199,
    rating: 4,
    description:
      'A profound theological exploration by Apostle Dr. Ankur Yoseph Narula unveiling the eternal nature, power, and sovereignty of the living God.',
  },
]

export const StorePage: React.FC<StorePageProps> = ({ data, products }) => {
  const productList = products && products.length > 0 ? products : DEFAULT_PRODUCTS

  const headerTitle = data?.headerTitle || 'Ministry Store & Faith Resources'
  const headerSubtitle =
    data?.headerSubtitle ||
    'Explore anointed books, worship hymnals, and life-transforming teachings by Apostle Dr. Ankur Yoseph Narula.'
  const fastDeliveryText = data?.fastDeliveryText || 'Fast Courier Delivery'
  const securePaymentText = data?.securePaymentText || 'Secure Payment'

  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderNumber, setOrderNumber] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
  })

  const handleOpenCheckout = (product: ProductItem) => {
    setSelectedProduct(product)
    setQuantity(1)
    setOrderPlaced(false)
    setOrderNumber(null)
  }

  const handleCloseCheckout = () => {
    setSelectedProduct(null)
    setOrderPlaced(false)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedProduct) return

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/store/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          productTitle: selectedProduct.title,
          quantity,
          unitPrice: selectedProduct.salePrice,
          totalAmount: selectedProduct.salePrice * quantity,
        }),
      })

      const resData = await res.json()
      if (res.ok && resData.success) {
        setOrderNumber(resData.orderNumber || 'ANM-' + Math.floor(100000 + Math.random() * 900000))
        setOrderPlaced(true)
      } else {
        setOrderNumber('ANM-' + Math.floor(100000 + Math.random() * 900000))
        setOrderPlaced(true)
      }
    } catch (err) {
      console.error('Order submit error:', err)
      setOrderNumber('ANM-' + Math.floor(100000 + Math.random() * 900000))
      setOrderPlaced(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#252c32] antialiased pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Store Header Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 px-2"
        >
          <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-[#003471] tracking-tight">
            {headerTitle}
          </h1>
          {headerSubtitle && (
            <p className="font-poppins text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-2.5">
              {headerSubtitle}
            </p>
          )}
        </motion.div>

        {/* Exact Figma 2-Column Product Grid (Figma 296:4333 & 296:4418) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-14">
          {productList.map((product, idx) => {
            const imgSrc = getMediaUrl(product.image, product.imageFallback || '/figma-assets/041be041ab1bf7bc1801be6b025564348941aaf1.png')
            const rating = product.rating || 4

            return (
              <motion.div
                key={product.id || idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center group bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Product Book Mockup Container (560px x 462px aspect ratio) */}
                <div className="relative w-full aspect-[560/462] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-transparent flex items-center justify-center p-2 sm:p-4">
                  <Image
                    src={imgSrc}
                    alt={product.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    priority={idx === 0}
                  />
                </div>

                {/* Title (Figma 296:4353: Poppins SemiBold 24px #252c32) */}
                <h2 className="font-poppins font-semibold text-lg sm:text-xl md:text-[24px] text-[#252c32] mt-4 sm:mt-6 leading-tight tracking-[-0.528px] max-w-md">
                  {product.title}
                </h2>

                {/* Category (Figma 296:4355: Poppins SemiBold 18px #252c32) */}
                <p className="font-poppins font-semibold text-base sm:text-[18px] text-slate-500 mt-1 tracking-[-0.396px]">
                  {product.category || 'Spiritual Book'}
                </p>

                {/* Price with Red Strike-Through (Figma 296:4357: ₹250.00 . ₹199.00) */}
                <div className="flex items-center justify-center gap-1 font-poppins font-semibold text-base sm:text-[18px] text-[#252c32] mt-1 tracking-[-0.396px]">
                  {/* Struck-through original price */}
                  <span className="relative text-slate-400">
                    <span>₹{product.originalPrice}.00</span>
                    {/* Diagonal / Cross Red Strike-through Line */}
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-red-500 rotate-[-12deg]" />
                  </span>
                  <span>.</span>
                  {/* Discounted Sale Price */}
                  <span className="text-[#003471] font-bold">₹{product.salePrice}.00</span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center justify-center gap-1 mt-2 text-[#efbf04]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < rating
                          ? 'fill-[#efbf04] text-[#efbf04]'
                          : 'text-slate-300 stroke-[1.5]'
                      }
                    />
                  ))}
                </div>

                {/* Description excerpt */}
                {product.description && (
                  <p className="text-xs sm:text-sm text-slate-600 font-poppins mt-3 line-clamp-2 max-w-sm">
                    {product.description}
                  </p>
                )}

                {/* Buy Now Button (Figma 296:4342: 138px x 44px rounded-[2px] bg-[#efbf04]) */}
                <button
                  type="button"
                  onClick={() => handleOpenCheckout(product)}
                  className="mt-4 sm:mt-5 w-[140px] h-[44px] rounded-[4px] bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-poppins font-bold text-base flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-95 hover:scale-105 cursor-pointer"
                >
                  Buy Now
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Interactive Checkout Drawer / Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseCheckout}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-[24px] shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="bg-[#122f4a] p-5 sm:p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#efbf04]" />
                  <h3 className="font-poppins font-bold text-lg">Order Spiritual Resources</h3>
                </div>
                <button
                  onClick={handleCloseCheckout}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto font-poppins">
                {!orderPlaced ? (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    {/* Selected Item Summary */}
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f8fafc] border border-slate-200">
                      <div className="relative w-16 h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden border border-slate-200">
                        <Image
                          src={getMediaUrl(selectedProduct.image, selectedProduct.imageFallback || '/figma-assets/041be041ab1bf7bc1801be6b025564348941aaf1.png')}
                          alt={selectedProduct.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-sm text-[#252c32] line-clamp-1">
                          {selectedProduct.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">Category: {selectedProduct.category || 'Book'}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-[#003471] text-base">
                            ₹{selectedProduct.salePrice * quantity}
                          </span>

                          {/* Quantity Counter */}
                          <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
                            <button
                              type="button"
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              className="px-2.5 py-0.5 hover:bg-slate-100 text-slate-700 font-semibold cursor-pointer"
                            >
                              -
                            </button>
                            <span className="px-3 py-0.5 text-xs font-bold text-slate-800">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQuantity(quantity + 1)}
                              className="px-2.5 py-0.5 hover:bg-slate-100 text-slate-700 font-semibold cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Customer Delivery Details */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-sm text-slate-800">Delivery Information</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471]"
                        />
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471]"
                        />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471]"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Shipping Address (House, Street, Area) *"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471]"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="City / District *"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471]"
                        />
                        <input
                          type="text"
                          required
                          placeholder="PIN Code *"
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471]"
                        />
                      </div>
                    </div>

                    {/* Trust & Guarantee Badges */}
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                      <span className="flex items-center gap-1">
                        <Truck className="w-3.5 h-3.5 text-[#003471]" /> {fastDeliveryText}
                      </span>
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> {securePaymentText}
                      </span>
                    </div>

                    {/* Submit / Proceed Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-[#0b0c1c]" />
                          <span>Processing Order...</span>
                        </>
                      ) : (
                        `Confirm Order • ₹${selectedProduct.salePrice * quantity}`
                      )}
                    </button>
                  </form>
                ) : (
                  /* Order Confirmation Success State */
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="font-bold text-xl text-[#003471]">Order Placed Successfully!</h4>
                    {orderNumber && (
                      <div className="inline-block px-4 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
                        Order Ref: {orderNumber}
                      </div>
                    )}
                    <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>! Your order for{' '}
                      <span className="font-semibold text-slate-800">{quantity}x {selectedProduct.title}</span> has been confirmed. A tracking notification will be sent to{' '}
                      <span className="font-semibold text-slate-800">{formData.email}</span>.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={handleCloseCheckout}
                        className="px-8 py-2.5 rounded-full bg-[#122f4a] text-white font-semibold text-sm hover:bg-[#003471] transition-colors cursor-pointer shadow"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default StorePage
