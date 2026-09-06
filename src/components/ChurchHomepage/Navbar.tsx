'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export const ChurchNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Automatically close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Ministries', href: '/ministries' },
    { label: 'Events', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Give', href: '/give' },
  ]

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 pt-5 sm:pt-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto bg-[#122f4a] rounded-full px-6 py-2.5 flex items-center justify-between shadow-xl border border-white/10 relative z-50">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <Image
                src="/figma-assets/a12f7a8578aca49746f879f50d3567e9cc929dad.png"
                alt="Ankur Narula Ministries"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-poppins font-semibold text-white text-sm sm:text-base tracking-wide whitespace-nowrap">
              Ankur Narula Ministries
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-poppins text-[15px] transition-colors ${
                    isActive
                      ? 'text-[#efbf04] font-semibold'
                      : 'text-white/90 hover:text-[#efbf04]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Contact Us CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-[#efbf04] text-[#0b0c1c] font-poppins font-semibold text-sm px-6 py-2 rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden text-white p-2 focus:outline-none relative z-50 cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 max-w-[1140px] mx-auto bg-[#122f4a] rounded-2xl p-6 shadow-2xl border border-white/10 flex flex-col gap-4 relative z-50 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`font-poppins text-base py-2.5 px-4 rounded-xl transition-colors cursor-pointer block ${
                      isActive
                        ? 'bg-white/10 text-[#efbf04] font-semibold'
                        : 'text-white hover:bg-white/5 hover:text-[#efbf04] active:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <Link
              href="/contact"
              className="bg-[#efbf04] text-[#0b0c1c] font-poppins font-semibold text-center text-sm py-3 rounded-full hover:bg-yellow-400 transition shadow block cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>

      {/* Background Backdrop Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-xs z-40"
          aria-hidden="true"
        />
      )}
    </>
  )
}
