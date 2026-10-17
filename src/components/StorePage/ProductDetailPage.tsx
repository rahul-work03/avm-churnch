'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Star,
  ShoppingBag,
  Zap,
  ExternalLink,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Plus,
  Minus,
  ChevronRight,
  BookOpen,
  HelpCircle,
} from 'lucide-react'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import type { ProductItem } from './StoreTypes'
import { useCart } from '@/providers/Cart'
import { CartDrawer } from './CartDrawer'
import { FloatingCartButton } from './FloatingCartButton'

interface ProductDetailPageProps {
  product: ProductItem
  relatedProducts?: ProductItem[]
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  relatedProducts = [],
}) => {
  const router = useRouter()
  const { addItem, closeCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const imgSrc = getMediaUrl(
    product.image,
    product.imageFallback || '/store/book_abhishikth_geeton_ki_mala.png'
  )

  const rating = product.rating || 4
  const discountPercent =
    product.originalPrice && product.originalPrice > product.salePrice
      ? Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)
      : null

  const handleAddToCart = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    addItem(product, quantity, { openCart: true, mode: 'add' })
  }

  const handleBuyNow = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    closeCart()
    const slug = product.slug || String(product.id)
    router.push(`/store/checkout?buyNow=1&slug=${encodeURIComponent(slug)}&qty=${quantity}`)
  }

  // External URLs (Amazon / Flipkart / General)
  const amazonUrl = product.amazonUrl || (product.productUrl?.includes('amazon') ? product.productUrl : null)
  const flipkartUrl = product.flipkartUrl || (product.productUrl?.includes('flipkart') ? product.productUrl : null)
  const otherUrl = !amazonUrl && !flipkartUrl && product.productUrl ? product.productUrl : null

  const hasExternalLinks = Boolean(amazonUrl || flipkartUrl || otherUrl)

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#252c32] antialiased pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm font-poppins text-slate-500 mb-8 overflow-x-auto whitespace-nowrap"
        >
          <Link href="/" className="hover:text-[#003471] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/store" className="hover:text-[#003471] transition-colors">
            Ministry Store
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-medium truncate max-w-xs sm:max-w-md">
            {product.title}
          </span>
        </nav>

        {/* Top Section: 2-Column Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm">
          {/* Left Column: Product Cover Image */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full aspect-[4/5] sm:aspect-[500/580] rounded-2xl bg-slate-50/60 border border-slate-100 flex items-center justify-center p-6 sm:p-8 overflow-hidden group">
              <Image
                src={imgSrc}
                alt={product.title}
                fill
                priority
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute top-4 left-4 bg-[#003471] text-[#efbf04] text-[11px] font-bold font-poppins px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
                Ministry Edition
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 font-poppins">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Authentic Publication from The Church of Signs and Wonders</span>
            </div>
          </div>

          {/* Right Column: Product Details & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Category & Rating */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-block bg-[#003471]/10 text-[#003471] font-poppins text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category || 'Spiritual Book'}
                </span>

                <div className="flex items-center gap-1.5">
                  <div className="flex text-[#efbf04]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < rating
                            ? 'fill-[#efbf04] text-[#efbf04]'
                            : 'text-slate-300 stroke-[1.5]'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700 font-poppins">
                    {rating}.0
                  </span>
                  <span className="text-xs text-slate-400 font-poppins">(Verified Readers)</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-[#003471] leading-tight tracking-tight">
                {product.title}
              </h1>

              {/* Author */}
              <p className="text-sm font-poppins text-slate-600">
                Author:{' '}
                <span className="font-semibold text-slate-800">
                  {product.author || 'Apostle Dr. Ankur Yoseph Narula'}
                </span>
              </p>

              {/* Pricing Box */}
              <div className="bg-[#f8fafc] border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#003471]">
                    ₹{product.salePrice}.00
                  </span>
                  {product.originalPrice && product.originalPrice > product.salePrice && (
                    <span className="font-poppins text-sm sm:text-base text-slate-400 line-through">
                      ₹{product.originalPrice}.00
                    </span>
                  )}
                </div>
                {discountPercent && (
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold font-poppins px-2.5 py-1 rounded-full">
                    SAVE {discountPercent}%
                  </span>
                )}
                <div className="ml-auto text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    In Stock
                  </span>
                </div>
              </div>

              {/* Short Description */}
              <p className="font-poppins text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Quantity Stepper & Direct Purchase Buttons */}
              <div className="pt-2 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold font-poppins uppercase tracking-wide text-slate-500">
                    Quantity:
                  </span>
                  <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center text-sm font-bold font-poppins text-slate-800">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-slate-500 font-poppins">
                    Total: <strong className="text-[#003471]">₹{product.salePrice * quantity}.00</strong>
                  </span>
                </div>

                {/* Primary CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={(e) => handleAddToCart(e)}
                    className="h-12 rounded-xl bg-white border-2 border-[#003471] text-[#003471] hover:bg-[#003471]/5 font-poppins font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={(e) => handleBuyNow(e)}
                    className="h-12 rounded-xl bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-poppins font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Zap className="w-4 h-4 fill-[#003471]" />
                    <span>Buy Now (Instant Checkout)</span>
                  </motion.button>
                </div>
              </div>

              {/* OPTIONAL External E-commerce Links Section (Displayed ONLY here) */}
              {hasExternalLinks && (
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-500 font-poppins uppercase tracking-wider mb-2">
                    Also Available On Online Marketplaces:
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {amazonUrl && (
                      <a
                        href={amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-poppins font-semibold transition-colors cursor-pointer no-underline"
                      >
                        <span>Buy on Amazon</span>
                        <ExternalLink className="w-3.5 h-3.5 text-amber-700" />
                      </a>
                    )}
                    {flipkartUrl && (
                      <a
                        href={flipkartUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 text-xs font-poppins font-semibold transition-colors cursor-pointer no-underline"
                      >
                        <span>Buy on Flipkart</span>
                        <ExternalLink className="w-3.5 h-3.5 text-blue-700" />
                      </a>
                    )}
                    {otherUrl && (
                      <a
                        href={otherUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-poppins font-semibold transition-colors cursor-pointer no-underline"
                      >
                        <span>External Store Link</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Ministry Trust Guarantees */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-poppins">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#003471] shrink-0" />
                <span>Fast Courier Across India</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Secure Online Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#efbf04] shrink-0" />
                <span>Original Ministry Blessing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Specifications & Detailed Description */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Detailed Overview */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-6">
            <h2 className="font-poppins font-bold text-xl text-[#003471] pb-3 border-b border-slate-100">
              About This Resource
            </h2>
            <div className="prose prose-slate max-w-none font-poppins text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
              {product.detailedDescription || product.description}
            </div>

            {product.features && product.features.length > 0 && (
              <div className="pt-4">
                <h3 className="font-poppins font-semibold text-base text-[#003471] mb-3">
                  Highlights & Divine Revelations:
                </h3>
                <ul className="space-y-2">
                  {product.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item.feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Product Specifications Table */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm h-fit space-y-4">
            <h3 className="font-poppins font-bold text-lg text-[#003471] pb-2 border-b border-slate-100">
              Product Specifications
            </h3>
            <table className="w-full text-xs sm:text-sm font-poppins divide-y divide-slate-100">
              <tbody>
                <tr>
                  <td className="py-2.5 text-slate-500 font-medium">Author</td>
                  <td className="py-2.5 text-slate-800 font-semibold text-right">
                    {product.author || 'Apostle Dr. Ankur Yoseph Narula'}
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 text-slate-500 font-medium">Publisher</td>
                  <td className="py-2.5 text-slate-800 font-semibold text-right">
                    {product.publisher || 'Ankur Narula Ministries'}
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 text-slate-500 font-medium">Language</td>
                  <td className="py-2.5 text-slate-800 font-semibold text-right">
                    {product.language || 'Hindi'}
                  </td>
                </tr>
                {product.pagesCount && (
                  <tr>
                    <td className="py-2.5 text-slate-500 font-medium">Pages</td>
                    <td className="py-2.5 text-slate-800 font-semibold text-right">
                      {product.pagesCount} pages
                    </td>
                  </tr>
                )}
                <tr>
                  <td className="py-2.5 text-slate-500 font-medium">Format</td>
                  <td className="py-2.5 text-slate-800 font-semibold text-right">
                    {product.format || 'Paperback'}
                  </td>
                </tr>
                {product.isbn && (
                  <tr>
                    <td className="py-2.5 text-slate-500 font-medium">ISBN</td>
                    <td className="py-2.5 text-slate-800 font-semibold text-right">
                      {product.isbn}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Helpline Box */}
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-poppins space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#003471]">
                <HelpCircle className="w-4 h-4 text-[#efbf04]" />
                <span>Need Order Assistance?</span>
              </div>
              <p>Helpline: <strong>0181 520 7777</strong></p>
              <p>Email: <strong>info@ankurnarula.org</strong></p>
            </div>
          </div>
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h3 className="font-poppins font-bold text-xl text-[#003471] mb-6">
              Other Anointed Books & Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel, idx) => {
                const relImg = getMediaUrl(rel.image, rel.imageFallback || '')
                const relSlug = rel.slug || String(rel.id)
                return (
                  <Link
                    key={rel.id || idx}
                    href={`/store/${relSlug}`}
                    className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between no-underline"
                  >
                    <div>
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 mb-3 p-2">
                        <Image
                          src={relImg}
                          alt={rel.title}
                          fill
                          className="object-contain transition-transform group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-poppins font-semibold text-base text-slate-900 group-hover:text-[#003471] transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="font-poppins text-xs text-slate-500 mt-1">
                        {rel.category || 'Spiritual Book'}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="font-poppins font-bold text-sm text-[#003471]">
                        ₹{rel.salePrice}.00
                      </span>
                      <span className="text-xs font-semibold text-[#efbf04] group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Global Slide-Over Cart Drawer & Floating Cart Button */}
      <CartDrawer />
      <FloatingCartButton />
    </main>
  )
}

export default ProductDetailPage
