'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, type Variants } from 'framer-motion'
import { Star, ShieldCheck, Truck, Phone, Mail, ShoppingBag, ArrowRight } from 'lucide-react'
import { TextWordReveal, BlurTextReveal, GoldBarReveal } from '@/components/ui/text-reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import type { ProductItem, StorePageData } from './StoreTypes'
import { useCart } from '@/providers/Cart'
import { CartDrawer } from './CartDrawer'
import { FloatingCartButton } from './FloatingCartButton'

interface StorePageProps {
  data?: StorePageData | null
  products?: ProductItem[]
}

const DEFAULT_PRODUCTS: ProductItem[] = [
  {
    id: 1,
    slug: 'abhishikth-geeton-ki-mala-hindi-book',
    title: 'Abhishikth Geeton Ki Mala, Hindi Book',
    category: 'Book',
    imageFallback: '/store/book_abhishikth_geeton_ki_mala.png',
    originalPrice: 250,
    salePrice: 199,
    rating: 4,
    amazonUrl: 'https://amzn.in/d/0j2LQP4E',
    description:
      'An anointed collection of spiritual worship songs, hymns, and prayers compiled for believers to experience the manifest glory and presence of God.',
  },
  {
    id: 2,
    slug: 'sanatan-parameswar-kaun-hai-hindi-religious',
    title: 'Sanatan Parameswar Kaun Hai Hindi Religious',
    category: 'Book',
    imageFallback: '/store/book_sanatan_parameswar_kaun_hai.png',
    originalPrice: 250,
    salePrice: 199,
    rating: 4,
    amazonUrl: 'https://amzn.in/d/0eKR3CnU',
    description:
      'A profound theological exploration by Apostle Dr. Ankur Yoseph Narula unveiling the eternal nature, power, and sovereignty of the living God.',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const StorePage: React.FC<StorePageProps> = ({ data, products }) => {
  const router = useRouter()
  const { addItem, closeCart } = useCart()

  const productList = products && products.length > 0 ? products : DEFAULT_PRODUCTS

  const headerTitle = data?.headerTitle || 'Ministry Store & Faith Resources'
  const headerSubtitle =
    data?.headerSubtitle ||
    'Explore anointed books, worship hymnals, and life-transforming teachings by Apostle Dr. Ankur Yoseph Narula.'
  const fastDeliveryText = data?.fastDeliveryText || 'Fast Courier Delivery Across India & Worldwide'
  const securePaymentText = data?.securePaymentText || '100% Secure Order Processing'
  const supportPhone = data?.supportPhone || '0181 520 7777'
  const supportEmail = data?.supportEmail || 'info@ankurnarula.org'

  const handleBuyNow = (product: ProductItem, e?: React.MouseEvent) => {
    e?.stopPropagation()
    closeCart()
    const slug = product.slug || String(product.id)
    router.push(`/store/checkout?buyNow=1&slug=${encodeURIComponent(slug)}&qty=1`)
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#252c32] antialiased pt-28 pb-16 sm:pt-36 sm:pb-24 select-none">
      {/* 1. Full-Width Edge-to-Edge Title Header with Golden Bars */}
      <div className="w-full overflow-hidden text-center space-y-3 mb-10 sm:mb-14">
        <div className="w-full flex items-center justify-between">
          <GoldBarReveal
            direction="left"
            duration={0.6}
            delay={0.1}
            className="flex-1 self-center h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm"
          />
          <div className="flex-initial self-center max-w-[80%] sm:max-w-none px-2 sm:px-6 md:px-8 text-center">
            <TextWordReveal
              as="h1"
              className="font-poppins font-bold text-base sm:text-2xl md:text-3xl lg:text-[34px] text-[#003471] tracking-tight justify-center uppercase leading-tight line-clamp-2"
            >
              {headerTitle}
            </TextWordReveal>
          </div>
          <GoldBarReveal
            direction="right"
            duration={0.6}
            delay={0.1}
            className="flex-1 self-center h-[5px] sm:h-[7px] lg:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm"
          />
        </div>
        {headerSubtitle && (
          <div className="max-w-2xl mx-auto px-4">
            <BlurTextReveal
              as="p"
              className="font-poppins text-sm sm:text-base text-slate-600 font-normal leading-relaxed justify-center"
              delay={0.2}
            >
              {headerSubtitle}
            </BlurTextReveal>
          </div>
        )}
      </div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Exact Figma 2-Column Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
        >
          {productList.map((product, idx) => {
            const imgSrc = getMediaUrl(
              product.image,
              product.imageFallback ||
                (idx === 0
                  ? '/store/book_abhishikth_geeton_ki_mala.png'
                  : '/store/book_sanatan_parameswar_kaun_hai.png')
            )
            const rating = product.rating || 4
            const targetSlug =
              product.slug ||
              (idx === 0
                ? 'abhishikth-geeton-ki-mala-hindi-book'
                : 'sanatan-parameswar-kaun-hai-hindi-religious')
            const detailHref = `/store/${targetSlug}`

            return (
              <motion.div
                key={product.id || idx}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center group bg-white p-6 sm:p-8 rounded-[20px] sm:rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-xl transition-shadow duration-300 justify-between"
              >
                <div className="w-full flex flex-col items-center">
                  {/* Product Book Mockup Container (Navigates to Product Detail Page) */}
                  <Link
                    href={detailHref}
                    className="block relative w-full aspect-[560/462] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-transparent p-2 sm:p-4 cursor-pointer"
                    title={`View ${product.title} details`}
                  >
                    <Image
                      src={imgSrc}
                      alt={product.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      priority={idx === 0}
                    />
                  </Link>

                  {/* Title (Navigates to Product Detail Page) */}
                  <Link
                    href={detailHref}
                    className="hover:text-[#003471] transition-colors no-underline"
                  >
                    <h2 className="font-poppins font-semibold text-lg sm:text-xl md:text-[22px] text-[#252c32] mt-4 sm:mt-5 leading-tight tracking-[-0.528px] max-w-md">
                      {product.title}
                    </h2>
                  </Link>

                  {/* Category */}
                  <p className="font-poppins font-semibold text-sm sm:text-[16px] text-slate-500 mt-1 tracking-[-0.396px]">
                    {product.category || 'Spiritual Book'}
                  </p>

                  {/* Price with Red Strike-Through */}
                  <div className="flex items-center justify-center gap-1 font-poppins font-semibold text-sm sm:text-[16px] text-[#252c32] mt-1 tracking-[-0.396px]">
                    {/* Struck-through original price */}
                    <span className="relative text-slate-400">
                      <span>₹{product.originalPrice}.00</span>
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
                        size={18}
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
                </div>

                {/* Card Action Buttons (Direct Store Actions: No external Amazon link here) */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 w-full max-w-sm">
                  {/* View Details Link */}
                  <Link
                    href={detailHref}
                    className="flex-1 min-w-[120px] h-[44px] rounded-[8px] bg-slate-100 hover:bg-slate-200 text-[#003471] font-poppins font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer no-underline"
                  >
                    <span>Details</span>
                    <ArrowRight size={14} />
                  </Link>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      addItem(product, 1, { openCart: true, mode: 'add' })
                    }}
                    className="flex-1 min-w-[120px] h-[44px] rounded-[8px] border-2 border-[#003471] text-[#003471] hover:bg-[#003471]/5 font-poppins font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ShoppingBag size={15} />
                    <span>Add to Cart</span>
                  </button>

                  {/* Buy Now Button */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={(e) => handleBuyNow(product, e)}
                    className="w-full h-[44px] rounded-[8px] bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-poppins font-bold text-sm flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-colors duration-200 cursor-pointer"
                  >
                    <span>Instant Checkout</span>
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Trust & Support Information Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-18 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600 font-poppins"
        >
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
        </motion.div>
      </div>

      {/* Cart Drawer & Floating Cart Button */}
      <CartDrawer />
      <FloatingCartButton />
    </main>
  )
}

export default StorePage
