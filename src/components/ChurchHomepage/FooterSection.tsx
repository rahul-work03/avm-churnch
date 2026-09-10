'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const FooterSection: React.FC = () => {
  const pagesList = [
    { label: 'Branches', href: '/church-branches' },
    { label: 'Prayer Request', href: '/prayer-request' },
    { label: 'Give', href: '/give' },
    { label: 'Prayer Mountain', href: '/prayer-mountain' },
    { label: 'Prayer House', href: '/prayer-house' },
    { label: 'Sunday School', href: '/sunday-school' },
    { label: 'Bible College', href: '/bible-college' },
    { label: 'Sophia Institute', href: '/sophia-institute' },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      icon: '/figma-assets/e3e25b6c010b5aa006f29088b8dae7f2466bf8f3.png',
      url: 'https://www.instagram.com/ankurnarulaministries?igsh=NmEzcDFsYnc4YWEw',
      width: 27,
      height: 27,
    },
    {
      name: 'YouTube',
      icon: '/figma-assets/65d53a88c2c188c19f670266ce9b27e83745bb6b.png',
      url: 'https://www.youtube.com/channel/UCYwyl0lfL0UzP-1LMtcoH-w',
      width: 25,
      height: 24,
    },
    {
      name: 'Facebook',
      icon: '/figma-assets/29c9c3a1ebaf7d9b300e03952a2750d7b8131f18.png',
      url: 'https://www.facebook.com/ankurnarulaministries',
      width: 26,
      height: 27,
    },
    {
      name: 'X Twitter',
      icon: '/figma-assets/ff7b25464623ab07ec009c6cc6d0508eb168c5a7.png',
      url: 'https://x.com/apostleankur',
      width: 27,
      height: 27,
    },
  ]

  return (
    <footer
      className="bg-[#122f4a] text-white pt-6 pb-6 overflow-hidden relative select-none w-full"
      data-node-id="305:6583"
    >
      {/* ===================== DESKTOP FOOTER (Exact Figma Node 305:6583) ===================== */}
      <div className="hidden xl:block max-w-[1440px] mx-auto px-4">
        {/* Top Gold Cross and Flanking Dividers (Figma 305:6565, 305:6569, 305:6570) */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-[251px] h-[1px] bg-[#efbf04]" />
          <div className="text-[#efbf04] text-[34px] leading-none font-serif select-none drop-shadow-[0_2px_8px_rgba(239,191,4,0.4)] flex items-center justify-center">
            ✝
          </div>
          <div className="w-[250px] h-[1px] bg-[#efbf04]" />
        </div>

        {/* 4 Columns Container with 3 Exact Vertical Dividers */}
        <div className="flex items-center justify-between pb-6">
          {/* Column 1: Ministry Crest & Overview (Figma 305:6549, 305:6572, 305:6581) */}
          <div className="w-[380px] flex flex-col items-center text-center px-2 flex-shrink-0">
            <div className="relative w-[202px] h-[83px] drop-shadow-[0px_4px_8px_rgba(0,0,0,0.25)] flex-shrink-0">
              <Image
                src="/figma-assets/25bc14240aaecc3fd8f585377e7e9865df659462.png"
                alt="Ankur Narula Ministries Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-lato font-bold text-[24px] text-white text-center mt-3 whitespace-nowrap">
              Ankur Narula Ministries
            </h3>
            <p className="font-lato font-normal text-[15px] text-white text-center leading-[1.35] w-[374px] mt-2">
              The Church of Signs and Wonders is the biggest and fastest growing church ministry in World. Apostle Ankur Narula is the Senior Pastor and Overseer in The Church of Signs and Wonders.
            </p>
          </div>

          {/* Vertical Divider 1 (Figma 305:6566 - h: 303px) */}
          <div className="w-px h-[303px] bg-white/20 flex-shrink-0" />

          {/* Column 2: Contact Us & Links (Figma 305:6560, 305:6561, 305:6573, 305:6574, 305:6575) */}
          <div className="w-[300px] flex flex-col items-center text-center px-2 flex-shrink-0">
            {/* Contact Us */}
            <div>
              <h4 className="font-lato font-bold text-[24px] text-white text-center">
                Contact Us
              </h4>
              <p className="font-lato font-normal text-[20px] text-white text-center mt-2.5">
                <a href="mailto:info@ankurnarula.org" className="hover:text-[#efbf04] transition">
                  info@ankurnarula.org
                </a>
              </p>
              <p className="font-lato font-normal text-[20px] text-white text-center mt-1">
                <a href="tel:01815207777" className="hover:text-[#efbf04] transition">
                  Phone: 0181-520-7777
                </a>
              </p>
            </div>

            {/* Links */}
            <div className="mt-6">
              <h4 className="font-lato font-bold text-[24px] text-white text-center">
                Links
              </h4>
              <p className="font-lato font-normal text-[20px] text-white text-center mt-2.5">
                <Link href="/privacy-policy" className="hover:text-[#efbf04] transition">
                  Privacy Policy
                </Link>
              </p>
              <p className="font-lato font-normal text-[20px] text-white text-center mt-1">
                <Link href="/terms-and-conditions" className="hover:text-[#efbf04] transition">
                  Terms an Conditions
                </Link>
              </p>
            </div>
          </div>

          {/* Vertical Divider 2 (Figma 305:6567 - h: 301px) */}
          <div className="w-px h-[301px] bg-white/20 flex-shrink-0" />

          {/* Column 3: Pages (Figma 305:6562, 305:6551 - 305:6558) */}
          <div className="w-[240px] flex flex-col items-center text-center px-2 flex-shrink-0">
            <h4 className="font-lato font-bold text-[24px] text-white text-center mb-1">
              Pages
            </h4>
            <ul className="space-y-0.5">
              {pagesList.map((page, idx) => (
                <li key={idx}>
                  <Link
                    href={page.href}
                    className="font-lato font-normal text-[20px] text-white hover:text-[#efbf04] transition block leading-tight py-0.5"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical Divider 3 (Figma 305:6568 - h: 301px) */}
          <div className="w-px h-[301px] bg-white/20 flex-shrink-0" />

          {/* Column 4: Social Media Platforms & Locate Us (Figma 305:6563, 305:6564, 305:6576-305:6580) */}
          <div className="w-[340px] flex flex-col items-center text-center px-2 flex-shrink-0">
            {/* Social Media Platforms */}
            <div>
              <h4 className="font-lato font-bold text-[24px] text-white text-center">
                Social Media Platforms
              </h4>
              <div className="flex items-center justify-center gap-3.5 mt-2.5">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center hover:opacity-85 transition transform hover:scale-110 flex-shrink-0"
                    style={{ width: `${item.width}px`, height: `${item.height}px` }}
                    aria-label={item.name}
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={item.width}
                      height={item.height}
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Locate Us */}
            <div className="mt-4 flex flex-col items-center">
              <h4 className="font-lato font-bold text-[24px] text-white text-center">
                Locate Us
              </h4>
              <a
                href="https://maps.google.com/?q=The+Church+of+Signs+and+Wonders+Khambra+Jalandhar"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-[282px] h-[174px] mt-2 overflow-hidden shadow-md group cursor-pointer"
              >
                <Image
                  src="/figma-assets/f1c7c30e211dc39094fc986db7a7e7d876202f58.png"
                  alt="Church Location Map - Khambra, Jalandhar"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar (Figma 305:6559) */}
        <div className="pt-4 text-center">
          <p className="font-lato font-normal text-[20px] text-white text-center">
            © 2026 Ankur Narula Ministries. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ===================== TABLET / MEDIUM VIEWPORT (md to xl) ===================== */}
      <div className="hidden md:block xl:hidden max-w-[1000px] mx-auto px-6">
        {/* Top Gold Cross and Flanking Dividers */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-[180px] h-[1px] bg-[#efbf04]" />
          <div className="text-[#efbf04] text-[28px] font-serif select-none flex items-center justify-center">
            ✝
          </div>
          <div className="w-[180px] h-[1px] bg-[#efbf04]" />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-6">
          {/* Column 1: Ministry Crest & Overview */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="relative w-[180px] h-[75px] drop-shadow-[0px_4px_8px_rgba(0,0,0,0.25)]">
              <Image
                src="/figma-assets/25bc14240aaecc3fd8f585377e7e9865df659462.png"
                alt="Ankur Narula Ministries"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-lato font-bold text-[22px] text-white">
              Ankur Narula Ministries
            </h3>
            <p className="font-lato font-normal text-[14px] text-white leading-relaxed max-w-[340px]">
              The Church of Signs and Wonders is the biggest and fastest growing church ministry in World. Apostle Ankur Narula is the Senior Pastor and Overseer in The Church of Signs and Wonders.
            </p>
          </div>

          {/* Column 2: Contact Us & Links */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div>
              <h4 className="font-lato font-bold text-[22px] text-white">Contact Us</h4>
              <p className="font-lato font-normal text-[18px] text-white mt-1.5">
                <a href="mailto:info@ankurnarula.org" className="hover:text-[#efbf04]">info@ankurnarula.org</a>
              </p>
              <p className="font-lato font-normal text-[18px] text-white mt-0.5">
                <a href="tel:01815207777" className="hover:text-[#efbf04]">Phone: 0181-520-7777</a>
              </p>
            </div>
            <div>
              <h4 className="font-lato font-bold text-[22px] text-white">Links</h4>
              <p className="font-lato font-normal text-[18px] text-white mt-1.5">
                <Link href="/privacy-policy" className="hover:text-[#efbf04]">Privacy Policy</Link>
              </p>
              <p className="font-lato font-normal text-[18px] text-white mt-0.5">
                <Link href="/terms-and-conditions" className="hover:text-[#efbf04]">Terms an Conditions</Link>
              </p>
            </div>
          </div>

          {/* Column 3: Pages */}
          <div className="flex flex-col items-center text-center">
            <h4 className="font-lato font-bold text-[22px] text-white mb-2">Pages</h4>
            <ul className="space-y-1 font-lato font-normal text-[18px] text-white">
              {pagesList.map((page, idx) => (
                <li key={idx}>
                  <Link href={page.href} className="hover:text-[#efbf04] transition">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media & Locate Us */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div>
              <h4 className="font-lato font-bold text-[22px] text-white mb-2">Social Media Platforms</h4>
              <div className="flex items-center justify-center gap-3">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative hover:opacity-85 transition"
                    style={{ width: `${item.width}px`, height: `${item.height}px` }}
                  >
                    <Image src={item.icon} alt={item.name} width={item.width} height={item.height} className="object-contain" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-lato font-bold text-[22px] text-white mb-2">Locate Us</h4>
              <a
                href="https://maps.google.com/?q=The+Church+of+Signs+and+Wonders+Khambra+Jalandhar"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-[240px] h-[140px] rounded-lg overflow-hidden shadow"
              >
                <Image src="/figma-assets/f1c7c30e211dc39094fc986db7a7e7d876202f58.png" alt="Map" fill className="object-cover" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 text-center border-t border-white/10">
          <p className="font-lato font-normal text-[18px] text-white">
            © 2026 Ankur Narula Ministries. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ===================== MOBILE FOOTER (under md) ===================== */}
      <div className="md:hidden max-w-[440px] mx-auto px-4 text-center space-y-6">
        {/* Brand Header with Emblem */}
        <div className="flex flex-col items-center justify-center space-y-2.5">
          <div className="relative w-[160px] h-[65px] drop-shadow-[0px_4px_8px_rgba(0,0,0,0.25)]">
            <Image
              src="/figma-assets/25bc14240aaecc3fd8f585377e7e9865df659462.png"
              alt="Ankur Narula Ministries"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-lato font-bold text-white text-[20px]">
            Ankur Narula Ministries
          </span>
          <p className="font-lato font-normal text-[13px] text-white max-w-[340px] leading-relaxed">
            The Church of Signs and Wonders is the biggest and fastest growing church ministry in World. Apostle Ankur Narula is the Senior Pastor and Overseer in The Church of Signs and Wonders.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[280px] h-px bg-white/20 mx-auto" />

        {/* 2-Column: Contact Us | Links */}
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="text-left pl-2">
            <h4 className="font-lato font-bold text-[17px] text-white">Contact Us</h4>
            <p className="font-lato font-normal text-[14px] text-white mt-1.5">
              <a href="mailto:info@ankurnarula.org" className="hover:text-[#efbf04]">
                info@ankurnarula.org
              </a>
            </p>
            <p className="font-lato font-normal text-[14px] text-white mt-1">
              <a href="tel:01815207777" className="hover:text-[#efbf04]">
                Phone: 0181-520-7777
              </a>
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

          <div className="text-right pr-2">
            <h4 className="font-lato font-bold text-[17px] text-white">Links</h4>
            <p className="font-lato font-normal text-[14px] text-white mt-1.5">
              <Link href="/privacy-policy" className="hover:text-[#efbf04]">
                Privacy Policy
              </Link>
            </p>
            <p className="font-lato font-normal text-[14px] text-white mt-1">
              <Link href="/terms-and-conditions" className="hover:text-[#efbf04]">
                Terms an Conditions
              </Link>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[200px] h-px bg-white/20 mx-auto" />

        {/* Pages Section */}
        <div>
          <h4 className="font-lato font-bold text-[18px] text-white">Pages</h4>
          <ul className="mt-2 space-y-1 font-lato font-normal text-[15px] text-white">
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
        <div className="w-full max-w-[200px] h-px bg-white/20 mx-auto" />

        {/* Social Media Platforms */}
        <div>
          <h4 className="font-lato font-bold text-[18px] text-white">Social Media Platforms</h4>
          <div className="flex items-center justify-center gap-3.5 mt-3">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center hover:opacity-85 transition"
                style={{ width: `${item.width}px`, height: `${item.height}px` }}
                aria-label={item.name}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[200px] h-px bg-white/20 mx-auto" />

        {/* Location */}
        <div>
          <h4 className="font-lato font-bold text-[18px] text-white">Locate Us</h4>
          <a
            href="https://maps.google.com/?q=The+Church+of+Signs+and+Wonders+Khambra+Jalandhar"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 relative w-[220px] h-[135px] mx-auto rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src="/figma-assets/f1c7c30e211dc39094fc986db7a7e7d876202f58.png"
              alt="Church Location Map"
              fill
              className="object-cover"
            />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[300px] h-px bg-white/20 mx-auto" />

        {/* Copyright */}
        <p className="font-lato font-normal text-[15px] text-white pb-2">
          © 2026 Ankur Narula Ministries. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
