'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const FooterSection: React.FC = () => {
  const pagesList = [
    { label: 'Branches', href: '/branches' },
    { label: 'Prayer Request', href: '/prayer-request' },
    { label: 'Give', href: '/give' },
    { label: 'Prayer House', href: '/prayer-house' },
    { label: 'Sunday School', href: '/sunday-school' },
    { label: 'Bible College', href: '/bible-college' },
    { label: 'Sophia College', href: '/sophia-college' },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      icon: '/figma-assets/e3e25b6c010b5aa006f29088b8dae7f2466bf8f3.png',
      url: 'https://www.instagram.com/ankurnarulaministries?igsh=NmEzcDFsYnc4YWEw',
    },
    {
      name: 'Facebook',
      icon: '/figma-assets/29c9c3a1ebaf7d9b300e03952a2750d7b8131f18.png',
      url: 'https://www.facebook.com/ankurnarulaministries',
    },
    {
      name: 'YouTube',
      icon: '/figma-assets/65d53a88c2c188c19f670266ce9b27e83745bb6b.png',
      url: 'https://www.youtube.com/channel/UCYwyl0lfL0UzP-1LMtcoH-w',
    },
    {
      name: 'X Twitter',
      icon: '/figma-assets/f36d37f4eb1cec806e68f71581ccb711a0245f39.png',
      url: 'https://x.com/apostleankur',
    },
  ]

  return (
    <footer className="bg-[#122f4a] text-white pt-10 pb-8 overflow-hidden relative">
      {/* ===================== DESKTOP FOOTER (md and up) ===================== */}
      <div className="hidden md:block max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Gold Cross with Flanking Lines */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-[#efbf04] to-[#efbf04] flex-1 max-w-[250px] opacity-70" />
          <div className="text-[#efbf04] text-4xl sm:text-5xl font-serif select-none drop-shadow-[0_2px_8px_rgba(239,191,4,0.5)]">
            ✝
          </div>
          <div className="h-px bg-gradient-to-l from-transparent via-[#efbf04] to-[#efbf04] flex-1 max-w-[250px] opacity-70" />
        </div>

        {/* 4-Column Layout with Vertical Dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 pb-12 items-start">
          {/* Column 1: Brand & Logo */}
          <div className="flex items-center gap-4 lg:pr-8 lg:border-r lg:border-white/10 h-full">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0">
              <Image
                src="/figma-assets/a12f7a8578aca49746f879f50d3567e9cc929dad.png"
                alt="Ankur Narula Ministries Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-lato font-bold text-xl sm:text-2xl text-white leading-tight">
              Ankur Narula Ministries
            </h3>
          </div>

          {/* Column 2: Contact Us & Legal Links */}
          <div className="flex flex-col text-left lg:px-8 lg:border-r lg:border-white/10 h-full">
            <h4 className="font-lato font-bold text-xl text-white">Contact Us</h4>
            <div className="mt-4 space-y-1 font-lato text-slate-200 text-base">
              <p>
                <a href="mailto:info@ankurnarula.org" className="hover:text-[#efbf04] transition">
                  info@ankurnarula.org
                </a>
              </p>
              <p>
                <a href="tel:01815207777" className="hover:text-[#efbf04] transition">
                  Phone: 0181-520-7777
                </a>
              </p>
            </div>

            <h4 className="font-lato font-bold text-xl text-white mt-8">Links</h4>
            <div className="mt-4 space-y-1 font-lato text-slate-200 text-base">
              <p>
                <Link href="/privacy-policy" className="hover:text-[#efbf04] transition">
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link href="/terms-and-conditions" className="hover:text-[#efbf04] transition">
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>

          {/* Column 3: Pages */}
          <div className="flex flex-col text-left lg:px-8 lg:border-r lg:border-white/10 h-full">
            <h4 className="font-lato font-bold text-xl text-white">Pages</h4>
            <ul className="mt-4 space-y-2 font-lato text-slate-200 text-base">
              {pagesList.map((page, idx) => (
                <li key={idx}>
                  <Link href={page.href} className="hover:text-[#efbf04] transition">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media & Locate Us Map */}
          <div className="flex flex-col text-left lg:pl-8 h-full">
            <h4 className="font-lato font-bold text-xl text-white">Social Media Platforms</h4>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center hover:opacity-90 transition transform hover:scale-110 shadow-sm"
                  aria-label={item.name}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </a>
              ))}
            </div>

            <h4 className="font-lato font-bold text-xl text-white mt-7">Location</h4>
            <div className="mt-4 relative w-[260px] h-[150px] rounded-xl overflow-hidden border border-slate-600 shadow-md group">
              <Image
                src="/figma-assets/f1c7c30e211dc39094fc986db7a7e7d876202f58.png"
                alt="Church Location Map"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-700/60 pt-6 text-center">
          <p className="font-lato text-slate-300 text-sm sm:text-base">
            © 2026 Ankur Narula Ministries. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ===================== MOBILE FOOTER (Figma Node 198:258) ===================== */}
      <div className="md:hidden max-w-[412px] mx-auto px-4 text-center">
        {/* Brand Header */}
        <div className="flex items-center justify-center gap-3">
          <div className="relative w-9 h-9 flex-shrink-0">
            <Image
              src="/figma-assets/a12f7a8578aca49746f879f50d3567e9cc929dad.png"
              alt="Ankur Narula Ministries"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-lato font-bold text-white text-lg">
            Ankur Narula Ministries
          </span>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[280px] h-px bg-white/20 mx-auto my-6" />

        {/* 2-Column: Contact Us | Links */}
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="text-left pl-2">
            <h4 className="font-lato font-bold text-base text-white">Contact Us</h4>
            <p className="font-lato text-xs text-slate-200 mt-2">
              <a href="mailto:info@ankurnarula.org" className="hover:text-[#efbf04]">
                info@ankurnarula.org
              </a>
            </p>
            <p className="font-lato text-xs text-slate-200 mt-1">
              <a href="tel:01815207777" className="hover:text-[#efbf04]">
                Phone: 0181-520-7777
              </a>
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

          <div className="text-right pr-2">
            <h4 className="font-lato font-bold text-base text-white">Links</h4>
            <p className="font-lato text-xs text-slate-200 mt-2">
              <Link href="/privacy-policy" className="hover:text-[#efbf04]">
                Privacy &amp; Policy
              </Link>
            </p>
            <p className="font-lato text-xs text-slate-200 mt-1">
              <Link href="/terms-and-conditions" className="hover:text-[#efbf04]">
                Terms &amp; Conditions
              </Link>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[200px] h-px bg-white/20 mx-auto my-6" />

        {/* Pages Section */}
        <div>
          <h4 className="font-lato font-bold text-base text-white">Pages</h4>
          <ul className="mt-3 space-y-1.5 font-lato text-xs text-slate-200">
            {pagesList.map((page, idx) => (
              <li key={idx}>
                <Link href={page.href} className="hover:text-[#efbf04] transition">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[200px] h-px bg-white/20 mx-auto my-6" />

        {/* Social Media Platforms */}
        <div>
          <h4 className="font-lato font-bold text-base text-white">Social media platforms</h4>
          <div className="flex items-center justify-center gap-4 mt-4">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-8 h-8 flex-shrink-0 rounded-md overflow-hidden flex items-center justify-center hover:opacity-90 transition transform hover:scale-110"
                aria-label={item.name}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[200px] h-px bg-white/20 mx-auto my-6" />

        {/* Location */}
        <div>
          <h4 className="font-lato font-bold text-base text-white">Location</h4>
          <div className="mt-4 relative w-[182px] h-[112px] mx-auto rounded-xl overflow-hidden border border-slate-600 shadow-md">
            <Image
              src="/figma-assets/f1c7c30e211dc39094fc986db7a7e7d876202f58.png"
              alt="Church Location Map"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[300px] h-px bg-white/20 mx-auto my-6" />

        {/* Copyright */}
        <p className="font-lato text-slate-300 text-xs pb-4">
          © 2026 Ankur Narula Ministries. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
