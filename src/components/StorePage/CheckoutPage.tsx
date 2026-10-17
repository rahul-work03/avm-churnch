'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Lock,
  Truck,
  ArrowLeft,
  ShoppingBag,
  Loader2,
  AlertCircle,
  Plus,
  Minus,
  Trash2,
} from 'lucide-react'
import { useCart } from '@/providers/Cart'
import type { ProductItem, CartItem } from './StoreTypes'
import { getMediaUrl } from '@/utilities/getMediaUrl'

const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Delhi',
  'Chandigarh',
  'Jammu and Kashmir',
  'Ladakh',
  'Puducherry',
]

export interface CheckoutPageProps {
  directProduct?: ProductItem | null
  initialDirectQty?: number
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  directProduct,
  initialDirectQty = 1,
}) => {
  const {
    items: cartItems,
    subtotal: cartSubtotal,
    shippingFee,
    closeCart,
    updateQuantity,
    removeItem,
  } = useCart()

  // Ensure cart drawer is closed upon opening the checkout page
  useEffect(() => {
    closeCart()
  }, [closeCart])

  const isDirectMode = Boolean(directProduct)
  const [directQty, setDirectQty] = useState(initialDirectQty)

  // Construct active items list (either single direct item or entire cart)
  const directCartItem: CartItem | null = useMemo(() => {
    if (!directProduct) return null
    return {
      id: directProduct.id,
      slug: directProduct.slug || String(directProduct.id),
      title: directProduct.title,
      category: directProduct.category || 'Spiritual Book',
      image: getMediaUrl(
        directProduct.image,
        directProduct.imageFallback || '/store/book_abhishikth_geeton_ki_mala.png'
      ),
      price: Number(directProduct.salePrice) || 0,
      originalPrice:
        Number(directProduct.originalPrice) || Number(directProduct.salePrice) || 0,
      quantity: directQty,
    }
  }, [directProduct, directQty])

  const activeItems: CartItem[] = useMemo(() => {
    if (isDirectMode) {
      return directCartItem ? [directCartItem] : []
    }
    return cartItems
  }, [isDirectMode, directCartItem, cartItems])

  const activeSubtotal = useMemo(() => {
    if (isDirectMode) {
      return (Number(directProduct?.salePrice) || 0) * directQty
    }
    return cartSubtotal
  }, [isDirectMode, directProduct, directQty, cartSubtotal])

  const activeTotal = useMemo(
    () => activeSubtotal + shippingFee,
    [activeSubtotal, shippingFee]
  )

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    landmark: '',
    city: '',
    state: 'Punjab',
    pincode: '',
    deliveryNotes: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your full name.'
    if (!formData.email.trim() || !formData.email.includes('@'))
      return 'Please enter a valid email address.'
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '')
    if (cleanPhone.length < 10) return 'Please enter a valid 10-digit mobile phone number.'
    if (!formData.address.trim()) return 'Please enter your street address / house number.'
    if (!formData.city.trim()) return 'Please enter your city / district.'
    const cleanPin = formData.pincode.replace(/[^0-9]/g, '')
    if (cleanPin.length !== 6) return 'Please enter a valid 6-digit postal PIN code.'
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    const validationError = validateForm()
    if (validationError) {
      setErrorMessage(validationError)
      return
    }

    if (activeItems.length === 0) {
      setErrorMessage('Your order has no selected items.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/store/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: activeItems,
          isBuyNow: isDirectMode,
          customer: {
            ...formData,
            phone: formData.phone.replace(/[^0-9]/g, '').slice(-10),
            pincode: formData.pincode.replace(/[^0-9]/g, '').slice(-6),
          },
        }),
      })

      const data = await response.json()

      if (response.ok && data.success && data.paymentUrl) {
        // Redirect browser to hosted payment gateway
        window.location.href = data.paymentUrl
      } else {
        setErrorMessage(data.message || 'Could not initiate secure payment session.')
        setIsSubmitting(false)
      }
    } catch (err: unknown) {
      console.error('Checkout error:', err)
      setErrorMessage('Network connection error. Please try again.')
      setIsSubmitting(false)
    }
  }

  // Empty cart view (only when not in direct mode)
  if (!isDirectMode && cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#f8fafc] text-[#252c32] antialiased pt-32 pb-24 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 text-center shadow-sm">
          <div className="w-20 h-20 rounded-full bg-amber-50 text-[#003471] flex items-center justify-center mx-auto mb-5">
            <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
          </div>
          <h1 className="font-poppins font-bold text-xl sm:text-2xl text-[#003471]">
            Your Cart is Empty
          </h1>
          <p className="font-poppins text-xs sm:text-sm text-slate-500 mt-2 mb-6">
            You don&apos;t have any items in your checkout session. Explore our anointed books and worship resources to continue.
          </p>
          <Link
            href="/store"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-poppins font-bold text-sm shadow-md transition-all no-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Ministry Store</span>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#252c32] antialiased pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Navigation & Title */}
        <div className="mb-8">
          <Link
            href="/store"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-poppins font-medium text-slate-500 hover:text-[#003471] transition-colors mb-3 no-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Store</span>
          </Link>
          <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-[#003471] tracking-tight">
            Order Checkout
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-poppins mt-1">
            {isDirectMode
              ? 'Complete your contact and delivery information for instant checkout.'
              : 'Complete your contact and delivery information to proceed to secure payment.'}
          </p>
        </div>

        {/* Error Notification */}
        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-sm font-poppins animate-shake">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Unable to proceed</p>
              <p className="text-xs mt-0.5">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* 2-Column Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Customer & Shipping Information Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Section 1: Contact Details */}
              <div>
                <h2 className="font-poppins font-bold text-lg text-[#003471] mb-1 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#003471] text-white text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  <span>Contact Information</span>
                </h2>
                <p className="text-xs text-slate-500 font-poppins mb-4">
                  Order receipts, tracking updates, and pastoral blessings will be sent here.
                </p>

                <div className="space-y-4 font-poppins">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Gurpreet Singh"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003471] focus:ring-2 focus:ring-[#003471]/10 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003471] focus:ring-2 focus:ring-[#003471]/10 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        10-Digit Mobile Number *
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-xs font-medium">
                          +91
                        </span>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          maxLength={10}
                          placeholder="9876543210"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-r-xl border border-slate-200 focus:border-[#003471] focus:ring-2 focus:ring-[#003471]/10 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Delivery Address */}
              <div className="pt-4 border-t border-slate-100">
                <h2 className="font-poppins font-bold text-lg text-[#003471] mb-1 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#003471] text-white text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  <span>Shipping Address (Across India)</span>
                </h2>
                <p className="text-xs text-slate-500 font-poppins mb-4">
                  Please provide accurate door delivery details for courier dispatch.
                </p>

                <div className="space-y-4 font-poppins">
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Street Address / House No. / Building *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={2}
                      required
                      placeholder="House No, Ward/Street, Colony, Area"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003471] focus:ring-2 focus:ring-[#003471]/10 text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="landmark"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Nearest Landmark (Optional)
                      </label>
                      <input
                        id="landmark"
                        name="landmark"
                        type="text"
                        placeholder="Near Gurudwara, Opp School..."
                        value={formData.landmark}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003471] focus:ring-2 focus:ring-[#003471]/10 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        City / District *
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        placeholder="e.g. Jalandhar"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003471] focus:ring-2 focus:ring-[#003471]/10 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        State *
                      </label>
                      <select
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003471] focus:ring-2 focus:ring-[#003471]/10 text-sm outline-none transition-all bg-white"
                      >
                        {INDIAN_STATES.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="pincode"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        6-Digit Postal PIN Code *
                      </label>
                      <input
                        id="pincode"
                        name="pincode"
                        type="text"
                        required
                        maxLength={6}
                        placeholder="144001"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003471] focus:ring-2 focus:ring-[#003471]/10 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="deliveryNotes"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Special Delivery Instructions (Optional)
                    </label>
                    <input
                      id="deliveryNotes"
                      name="deliveryNotes"
                      type="text"
                      placeholder="e.g. Please call before delivery, leave with guard..."
                      value={formData.deliveryNotes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003471] focus:ring-2 focus:ring-[#003471]/10 text-sm outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA for mobile */}
              <div className="lg:hidden pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-poppins font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Redirecting to payment...</span>
                    </>
                  ) : (
                    <span>Proceed to Pay ₹{activeTotal}.00</span>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary with Interactive Steppers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-sm space-y-5">
              <h3 className="font-poppins font-bold text-lg text-[#003471] pb-3 border-b border-slate-100 flex items-center justify-between">
                <span>Order Summary</span>
                <span className="text-xs font-normal text-slate-500">
                  {activeItems.length} {activeItems.length === 1 ? 'item' : 'items'}
                </span>
              </h3>

              {/* Items List with Stepper Controls */}
              <div className="space-y-3.5 max-h-80 overflow-y-auto pr-1 divide-y divide-slate-100">
                {activeItems.map((item) => (
                  <div key={item.id} className="pt-3.5 first:pt-0 flex gap-3.5 items-center">
                    <div className="relative w-14 h-18 rounded-lg bg-slate-50 border border-slate-200/80 overflow-hidden shrink-0 p-1">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                        sizes="56px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-poppins font-semibold text-xs sm:text-sm text-slate-900 leading-snug line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-poppins mt-0.5">
                        ₹{item.price}.00 each
                      </p>

                      {/* Quantity Stepper & Removal */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                          <button
                            type="button"
                            onClick={() => {
                              if (isDirectMode) {
                                setDirectQty((q) => Math.max(1, q - 1))
                              } else {
                                updateQuantity(item.id, item.quantity - 1)
                              }
                            }}
                            className="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-semibold font-poppins text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              if (isDirectMode) {
                                setDirectQty((q) => q + 1)
                              } else {
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            }}
                            className="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {!isDirectMode && (
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer"
                            aria-label="Remove item"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-poppins font-bold text-xs sm:text-sm text-[#003471]">
                        ₹{item.price * item.quantity}.00
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subtotal, Shipping, Total */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm font-poppins text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-800">
                    ₹{activeSubtotal}.00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Across India</span>
                  <span className="font-semibold text-emerald-600">
                    {shippingFee === 0 ? 'FREE' : `₹${shippingFee}.00`}
                  </span>
                </div>
                <div className="pt-3 border-t border-slate-200 flex justify-between text-lg font-bold text-[#003471]">
                  <span>Total Payable</span>
                  <span>₹{activeTotal}.00</span>
                </div>
              </div>

              {/* Desktop Submit Button */}
              <div className="hidden lg:block pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-poppins font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Connecting...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Proceed to Pay ₹{activeTotal}.00</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Payment Methods Info */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <p className="text-xs text-slate-600 font-poppins">
                  Supports Google Pay, PhonePe, Paytm, UPI, Cards, and Net Banking.
                </p>
              </div>
            </div>

            {/* Delivery Guarantees */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-3 text-xs text-slate-600 font-poppins">
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-[#003471] shrink-0" />
                <span>Express courier delivery within 3-5 business days</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Authentic ministry publication guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CheckoutPage
