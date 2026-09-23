'use client'

import React, { useEffect, useState } from 'react'
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
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#003471] text-[#efbf04] hover:bg-[#efbf04] hover:text-[#003471] shadow-2xl shadow-black/25 border-2 border-[#efbf04]/70 hover:border-[#003471] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#efbf04] focus:ring-offset-2 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-4 pointer-events-none scale-75'
      }`}
    >
      <ChevronUp className="w-6 h-6 stroke-[2.5] transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  )
}
