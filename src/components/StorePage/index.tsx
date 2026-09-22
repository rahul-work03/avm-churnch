'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, ExternalLink, ShieldCheck, Truck, Phone, Mail } from 'lucide-react'
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
    imageFallback: '/store/book_abhishikth_geeton_ki_mala.png',
    originalPrice: 250,
    salePrice: 199,
    rating: 4,
    productUrl: 'https://www.amazon.in/',
    description:
      'An anointed collection of spiritual worship songs, hymns, and prayers compiled for believers to experience the manifest glory and presence of God.',
  },
  {
    id: 'book-2',
    title: 'Sanatan Parameswar Kaun Hai Hindi Religious',
    category: 'Book',
    imageFallback: '/store/book_sanatan_parameswar_kaun_hai.png',
    originalPrice: 250,
    salePrice: 199,
    rating: 4,
    productUrl: 'https://www.amazon.in/',
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
  const fastDeliveryText = data?.fastDeliveryText || 'Fast Courier Delivery Across India & Worldwide'
  const securePaymentText = data?.securePaymentText || '100% Secure Order Processing'
  const supportPhone = data?.supportPhone || '0181 520 7777'
  const supportEmail = data?.supportEmail || 'info@ankurnarula.org'

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
            const imgSrc = getMediaUrl(
              product.image,
              product.imageFallback || (idx === 0 ? '/store/book_abhishikth_geeton_ki_mala.png' : '/store/book_sanatan_parameswar_kaun_hai.png')
            )
            const rating = product.rating || 4
            const targetUrl = product.productUrl && product.productUrl.trim() ? product.productUrl.trim() : 'https://www.amazon.in/'

            return (
              <motion.div
                key={product.id || idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center group bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Product Book Mockup Container (560px x 462px aspect ratio) */}
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full aspect-[560/462] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-transparent p-2 sm:p-4 cursor-pointer"
                  title={`View ${product.title} on Store`}
                >
                  <Image
                    src={imgSrc}
                    alt={product.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    priority={idx === 0}
                  />
                </a>

                {/* Title (Figma 296:4353: Poppins SemiBold 24px #252c32) */}
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#003471] transition-colors"
                >
                  <h2 className="font-poppins font-semibold text-lg sm:text-xl md:text-[24px] text-[#252c32] mt-4 sm:mt-6 leading-tight tracking-[-0.528px] max-w-md">
                    {product.title}
                  </h2>
                </a>

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

                {/* Buy Now Button with Target Blank External Link */}
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-5 w-[150px] h-[44px] rounded-[4px] bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-poppins font-bold text-base flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-95 hover:scale-105 cursor-pointer no-underline"
                >
                  <span>Buy Now</span>
                  <ExternalLink size={15} className="text-[#0b0c1c]" />
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Trust & Support Information Bar */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 font-poppins">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#003471]" />
            <span>{fastDeliveryText}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{securePaymentText}</span>
          </div>
          {supportPhone && (
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#efbf04]" />
              <span>Helpline: {supportPhone}</span>
            </div>
          )}
          {supportEmail && (
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#efbf04]" />
              <span>Email: {supportEmail}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default StorePage
