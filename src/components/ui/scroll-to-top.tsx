'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Check initial scroll position
    toggleVisibility()

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          aria-label="Scroll to top of page"
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#003471] text-[#efbf04] hover:bg-[#efbf04] hover:text-[#003471] shadow-2xl shadow-black/25 border-2 border-[#efbf04]/70 hover:border-[#003471] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#efbf04] focus:ring-offset-2"
        >
          <ChevronUp className="w-6 h-6 stroke-[2.5] transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
