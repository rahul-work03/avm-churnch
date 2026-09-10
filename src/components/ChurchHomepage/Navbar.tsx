'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

interface NavItem {
  label: string
  href: string
  children?: {
    label: string
    href: string
  }[]
}

export const ChurchNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  // Automatically close mobile menu & dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setDesktopDropdownOpen(false)
    setMobileDropdownOpen(false)
  }, [pathname])

  const navLinks: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Ministries & More',
      href: '/ministries',
      children: [
        { label: 'Ministries', href: '/ministries' },
        { label: 'Prayer Mountain', href: '/prayer-mountain' },
        { label: 'Prayer House', href: '/prayer-house' },
        { label: 'Bible College', href: '/bible-college' },
        { label: 'Church Branches', href: '/church-branches' },
        { label: 'Sunday School', href: '/sunday-school' },
        { label: 'Sophia Institute', href: '/sophia-institute' },
      ],
    },
    { label: 'Events', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Give', href: '/give' },
  ]

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setDesktopDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false)
    }, 150)
  }

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
              const hasChildren = Boolean(item.children && item.children.length > 0)
              const isDirectActive = pathname === item.href
              const isChildActive = hasChildren && item.children?.some((c) => pathname === c.href || pathname?.startsWith(c.href))
              const isActive = isDirectActive || isChildActive

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setDesktopDropdownOpen((prev) => !prev)}
                      className={`font-poppins text-[15px] transition-colors flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'text-[#efbf04] font-semibold'
                          : 'text-white/90 hover:text-[#efbf04]'
                      }`}
                      aria-expanded={desktopDropdownOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          desktopDropdownOpen ? 'rotate-180 text-[#efbf04]' : ''
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown Menu */}
                    {desktopDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 min-w-[180px] animate-in fade-in slide-in-from-top-1.5 duration-150">
                        <div className="bg-[#122f4a] rounded-xl p-1.5 shadow-xl border border-white/10">
                          {item.children?.map((child) => {
                            const isSubActive = pathname === child.href || (child.href !== '/' && pathname?.startsWith(child.href))
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                className={`block px-3.5 py-2 rounded-lg transition-colors duration-150 font-poppins text-[14px] ${
                                  isSubActive
                                    ? 'text-[#efbf04] font-medium bg-white/5'
                                    : 'text-white/85 hover:text-[#efbf04] hover:bg-white/5 font-normal'
                                }`}
                              >
                                {child.label}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

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
                const hasChildren = Boolean(item.children && item.children.length > 0)
                const isDirectActive = pathname === item.href
                const isChildActive = hasChildren && item.children?.some((c) => pathname === c.href || pathname?.startsWith(c.href))
                const isActive = isDirectActive || isChildActive

                if (hasChildren) {
                  return (
                    <div key={item.label} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setMobileDropdownOpen((prev) => !prev)}
                        className={`font-poppins text-base py-2.5 px-4 rounded-xl transition-colors cursor-pointer flex items-center justify-between w-full ${
                          isActive
                            ? 'bg-white/10 text-[#efbf04] font-semibold'
                            : 'text-white hover:bg-white/5 hover:text-[#efbf04]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            mobileDropdownOpen ? 'rotate-180 text-[#efbf04]' : ''
                          }`}
                        />
                      </button>

                      {/* Mobile Accordion Sub-links */}
                      {mobileDropdownOpen && (
                        <div className="pl-4 pr-1 py-1 flex flex-col gap-1 border-l-2 border-[#efbf04]/40 ml-4 mt-1">
                          {item.children?.map((child) => {
                            const isSubActive = pathname === child.href || (child.href !== '/' && pathname?.startsWith(child.href))
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                className={`font-poppins text-sm py-2 px-3 rounded-lg transition-colors block ${
                                  isSubActive
                                    ? 'text-[#efbf04] font-medium bg-white/5'
                                    : 'text-white/80 hover:text-[#efbf04] hover:bg-white/5'
                                }`}
                              >
                                {child.label}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                }

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
