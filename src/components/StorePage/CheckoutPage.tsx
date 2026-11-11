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
  ChevronDown,
} from 'lucide-react'
import { useCart } from '@/providers/Cart'
import type { ProductItem, CartItem } from './StoreTypes'
import { getMediaUrl } from '@/utilities/getMediaUrl'

import { DynamicFormFieldsList, DEFAULT_COUNTRIES } from '@/components/Forms/DynamicFormFieldRenderer'

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
  form?: any
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  directProduct,
  initialDirectQty = 1,
  form,
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

  const [formData, setFormData] = useState<Record<string, any>>({
    name: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'India',
    address: '',
    landmark: '',
    city: '',
    state: 'Punjab',
    pincode: '',
    deliveryNotes: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    if (name === 'phone') {
      const numeric = value.replace(/[^0-9]/g, '').slice(0, 10)
      setFormData((prev) => ({ ...prev, [name]: numeric }))
      return
    }
    if (name === 'pincode') {
      const numeric = value.replace(/[^0-9]/g, '').slice(0, 6)
      setFormData((prev) => ({ ...prev, [name]: numeric }))
      return
    }
    if (name === 'deliveryNotes' || name === 'message') {
      const limited = value.slice(0, 500)
      setFormData((prev) => ({ ...prev, [name]: limited }))
      return
    }
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const resolvedName =
      formData.name?.trim() ||
      [formData.firstName, formData.lastName].filter(Boolean).join(' ').trim()

    // 1. Dynamic form field check (if configured in CMS)
    if (form?.fields && form.fields.length > 0) {
      for (const f of form.fields) {
        // "Your message", deliveryNotes, and landmark are always optional
        if (f.name === 'message' || f.name === 'deliveryNotes' || f.name === 'landmark') continue
        if (f.label && f.label.toLowerCase().includes('message')) continue
        // If form has a "name" field, but user provided firstName / lastName, accept it
        if (f.name === 'name' && (formData.firstName || formData.name)) continue
        if (f.required && f.name && (!formData[f.name] || !String(formData[f.name]).trim())) {
          return `Please fill in required field: ${f.label || f.name}`
        }
      }
    } else {
      if (!resolvedName) return 'Please enter your full name.'
      if (resolvedName.length < 2) return 'Full name must be at least 2 characters.'
      if (!formData.address?.trim()) return 'Please enter your street address / house number.'
      if (!formData.city?.trim()) return 'Please enter your city / district.'
    }

    // 2. Name validation
    if (resolvedName && resolvedName.length < 2) {
      return 'Full name must be at least 2 characters.'
    }

    // 3. Email validation
    if (!formData.email?.trim()) {
      return 'Please enter your email address.'
    }
    if (!EMAIL_REGEX.test(formData.email.trim())) {
      return 'Please enter a valid email address (e.g. name@example.com).'
    }

    // 4. Mobile phone number validation (10 digits)
    const cleanPhone = String(formData.phone || '').replace(/[^0-9]/g, '')
    if (!cleanPhone) {
      return 'Please enter your 10-digit mobile number.'
    }
    if (cleanPhone.length !== 10) {
      return 'Mobile number must be exactly 10 digits.'
    }
    if ((formData.country || 'India') === 'India' && !/^[6-9]\d{9}$/.test(cleanPhone)) {
      return 'Please enter a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9).'
    }

    // 5. Postal PIN code validation
    if (formData.pincode && String(formData.pincode).trim()) {
      const cleanPin = String(formData.pincode).replace(/[^0-9]/g, '')
      if ((formData.country || 'India') === 'India') {
        if (cleanPin.length !== 6) {
          return 'Postal PIN code must be exactly 6 digits.'
        }
        if (/^0{6}$/.test(cleanPin)) {
          return 'Please enter a valid postal PIN code.'
        }
      }
    } else if (!form?.fields || form.fields.length === 0) {
      if ((formData.country || 'India') === 'India') {
        return 'Please enter your 6-digit postal PIN code.'
      }
    }

    // 6. Character limitation for additional notes / message (500 chars max)
    if (formData.deliveryNotes && formData.deliveryNotes.length > 500) {
      return 'Special delivery instructions must not exceed 500 characters.'
    }
    if (formData.message && formData.message.length > 500) {
      return 'Your message must not exceed 500 characters.'
    }

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

    const resolvedName =
      formData.name?.trim() ||
      [formData.firstName, formData.lastName].filter(Boolean).join(' ').trim()

    try {
      const response = await fetch('/api/store/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: activeItems,
          isBuyNow: isDirectMode,
          formId: form?.id,
          customer: {
            ...formData,
            name: resolvedName,
            country: formData.country || 'India',
            phone: formData.phone ? String(formData.phone).replace(/[^0-9]/g, '').slice(-10) : '',
            pincode: formData.pincode ? String(formData.pincode).replace(/[^0-9]/g, '').slice(-6) : '',
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
              {form?.fields && form.fields.length > 0 ? (
                <div className="space-y-4">
                  <div>
                    <h2 className="font-poppins font-bold text-lg text-[#003471] mb-1 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#003471] text-white text-xs flex items-center justify-center font-bold">
                        1
                      </span>
                      <span>Customer & Shipping Details</span>
                    </h2>
                    <p className="text-xs text-slate-500 font-poppins mb-4">
                      Order receipts, tracking updates, and courier delivery will use these details.
                    </p>
                  </div>
                  <DynamicFormFieldsList
                    fields={form.fields}
                    values={formData}
                    onChange={(name, val) => setFormData((prev) => ({ ...prev, [name]: val }))}
                    variant="light"
                  />
                  {!form.fields.some((f: any) => f.name === 'country' || f.blockType === 'country') && (
                    <div className="pt-1">
                      <label
                        htmlFor="country"
                        className="block font-poppins font-medium text-[#344054] text-sm mb-1.5"
                      >
                        Country <span className="text-[#efbf04] font-bold">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="country"
                          name="country"
                          value={formData.country || 'India'}
                          onChange={handleChange}
                          className="w-full bg-white border border-[#d0d5dd] focus:ring-2 focus:ring-[#efbf04] focus:border-transparent rounded-[8px] px-4 py-3 text-[#101828] text-base shadow-xs focus:outline-none transition appearance-none cursor-pointer pr-10"
                        >
                          {DEFAULT_COUNTRIES.map((c) => (
                            <option key={c.value} value={c.value}>
                              {c.label}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
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
                          inputMode="numeric"
                          pattern="[0-9]*"
                          required
                          maxLength={10}
                          placeholder="9876543210"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-r-xl border border-slate-200 focus:border-[#003471] focus:ring-2 focus:ring-[#003471]/10 text-sm outline-none transition-all"
                        />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 font-poppins">
                        Must be exactly 10 digits (e.g. 9876543210)
                      </p>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        value={formData.country || 'India'}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003471] focus:ring-2 focus:ring-[#003471]/10 text-sm outline-none transition-all bg-white"
                      >
                        {DEFAULT_COUNTRIES.map((c) => (
                          <option key={c.value} value={c.value}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>

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
                  </div>

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
                        inputMode="numeric"
                        pattern="[0-9]*"
                        required
                        maxLength={6}
                        placeholder="144001"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003471] focus:ring-2 focus:ring-[#003471]/10 text-sm outline-none transition-all"
                      />
                      <p className="text-[11px] text-slate-400 mt-1 font-poppins">
                        Must be exactly 6 numeric digits
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label
                        htmlFor="deliveryNotes"
                        className="block text-xs font-semibold text-slate-700"
                      >
                        Special Delivery Instructions (Optional)
                      </label>
                      <span className="text-[11px] text-slate-400 font-normal">
                        {(formData.deliveryNotes?.length || 0)}/500 characters
                      </span>
                    </div>
                    <textarea
                      id="deliveryNotes"
                      name="deliveryNotes"
                      rows={2}
                      maxLength={500}
                      placeholder="e.g. Please call before delivery, leave with guard..."
                      value={formData.deliveryNotes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003471] focus:ring-2 focus:ring-[#003471]/10 text-sm outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

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
