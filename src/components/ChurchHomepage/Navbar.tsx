'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export const ChurchNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/', active: true },
    { label: 'About', href: '/about' },
    { label: 'Ministries', href: '/ministries' },
    { label: 'Events', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Give', href: '/give' },
  ]

  return (
    <header className="relative z-50 pt-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1140px] mx-auto bg-[#122f4a] rounded-full px-6 py-2.5 flex items-center justify-between shadow-xl border border-white/10">
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
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-poppins text-[15px] transition-colors ${
                item.active
                  ? 'text-[#efbf04] font-semibold'
                  : 'text-white/90 hover:text-[#efbf04]'
              }`}
            >
              {item.label}
            </Link>
          ))}
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
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-[1140px] mx-auto bg-[#122f4a] rounded-2xl p-6 shadow-2xl border border-white/10 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-poppins text-base py-1.5 px-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-white/10 text-[#efbf04] font-semibold'
                    : 'text-white hover:bg-white/5 hover:text-[#efbf04]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-[#efbf04] text-[#0b0c1c] font-poppins font-semibold text-center text-sm py-2.5 rounded-full hover:bg-yellow-400 transition shadow"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  )
}
