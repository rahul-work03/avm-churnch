'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface FooterPageLink {
  label: string
  href: string
}

export interface FooterSocialLink {
  name: string
  icon?: any
  iconFallback?: string | null
  url: string
  width?: number | null
  height?: number | null
}

export interface FooterData {
  logo?: any
  logoFallback?: string | null
  ministryName?: string | null
  aboutText?: string | null
  contactEmail?: string | null
  contactPhone?: string | null
  privacyPolicyUrl?: string | null
  termsUrl?: string | null
  pagesList?: FooterPageLink[] | null
  socialLinks?: FooterSocialLink[] | null
  mapEmbedUrl?: string | null
  mapImage?: any
  mapImageFallback?: string | null
  mapUrl?: string | null
  copyrightText?: string | null
}

const DEFAULT_MAP_IFRAME =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.0779467068696!2d75.56073407539549!3d31.273939074327686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b50b36a88a1%3A0x3d8b66ec2e189bf6!2sAnkur%20Narula%20Ministries!5e0!3m2!1sen!2sin!4v1790533216619!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>'

const DEFAULT_MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.0779467068696!2d75.56073407539549!3d31.273939074327686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b50b36a88a1%3A0x3d8b66ec2e189bf6!2sAnkur%20Narula%20Ministries!5e0!3m2!1sen!2sin!4v1790533216619!5m2!1sen!2sin'

function getIframeSrc(input?: string | null): string {
  const value = input && input.trim() ? input.trim() : DEFAULT_MAP_IFRAME
  if (value.startsWith('<iframe')) {
    const match = value.match(/src=["']([^"']+)["']/)
    return match ? match[1] : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.0779467068696!2d75.56073407539549!3d31.273939074327686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b50b36a88a1%3A0x3d8b66ec2e189bf6!2sAnkur%20Narula%20Ministries!5e0!3m2!1sen!2sin!4v1790533216619!5m2!1sen!2sin'
  }
  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value
  }
  return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.0779467068696!2d75.56073407539549!3d31.273939074327686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b50b36a88a1%3A0x3d8b66ec2e189bf6!2sAnkur%20Narula%20Ministries!5e0!3m2!1sen!2sin!4v1790533216619!5m2!1sen!2sin'
}

const DEFAULT_PAGES_LIST: FooterPageLink[] = [
  { label: 'Branches', href: '/church-branches' },
  { label: 'Prayer Request', href: '/prayer-request' },
  { label: 'Give', href: '/give' },
  { label: 'Prayer Mountain', href: '/prayer-mountain' },
  { label: 'Prayer House', href: '/prayer-house' },
  { label: 'Sunday School', href: '/sunday-school' },
  { label: 'Bible College', href: '/bible-college' },
  { label: 'Sophia Institute', href: '/sophia-institute' },
]

const DEFAULT_SOCIAL_LINKS: FooterSocialLink[] = [
  {
    name: 'Instagram',
    iconFallback: '/instagram_logo_footer.png',
    url: 'https://www.instagram.com/ankurnarulaministries',
    width: 27,
    height: 27,
  },
  {
    name: 'Facebook',
    iconFallback: '/facebook_logo_footer.png',
    url: 'https://www.facebook.com/ankurnarulaministries/',
    width: 26,
    height: 27,
  },
  {
    name: 'YouTube',
    iconFallback: '/youtube_logo_footer.png',
    url: 'https://www.youtube.com/@ankurnarulaministries',
    width: 25,
    height: 24,
  },
  {
    name: 'X Twitter',
    iconFallback: '/twitter_logo_footer.png',
    url: 'https://x.com/apostleankur',
    width: 27,
    height: 27,
  },
]

const FooterMapEmbed: React.FC<{ src: string; className?: string }> = ({
  src,
  className = '',
}) => {
  return (
    <iframe
      src={src}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      title="Church Location Map - Ankur Narula Ministries"
      className={`absolute inset-0 w-full h-full border-0 pointer-events-auto ${className}`}
    />
  )
}

interface FooterSectionProps {
  data?: FooterData | null
}

export const FooterSection: React.FC<FooterSectionProps> = ({ data }) => {
  const logoUrl = getMediaUrl(
    data?.logo,
    data?.logoFallback || '/avm_church_logo.webp'
  )
  const ministryName = data?.ministryName || 'Ankur Narula Ministries'
  const aboutText =
    data?.aboutText ||
    'The Church of Signs and Wonders is the biggest and fastest growing church ministry in World. Apostle Ankur Narula is the Senior Pastor and Overseer in The Church of Signs and Wonders.'
  const contactEmail = data?.contactEmail || 'info@ankurnarula.org'
  const contactPhone = data?.contactPhone || 'Phone: 0181-520-7777'
  const privacyPolicyUrl = data?.privacyPolicyUrl || '/privacy-policy'
  const termsUrl = data?.termsUrl || '/terms-and-conditions'
  const pagesList = data?.pagesList && data.pagesList.length > 0 ? data.pagesList : DEFAULT_PAGES_LIST
  const socialLinks =
    data?.socialLinks && data.socialLinks.length > 0 ? data.socialLinks : DEFAULT_SOCIAL_LINKS
  const mapEmbedUrl = getIframeSrc(data?.mapEmbedUrl)
  const mapImageUrl = getMediaUrl(
    data?.mapImage,
    data?.mapImageFallback || '/figma-assets/f1c7c30e211dc39094fc986db7a7e7d876202f58.png'
  )
  const mapUrl =
    data?.mapUrl || 'https://maps.google.com/?q=The+Church+of+Signs+and+Wonders+Khambra+Jalandhar'
  const copyrightText = data?.copyrightText || '© 2026 Ankur Narula Ministries. All Rights Reserved.'

  return (
    <footer
      className="bg-[#122f4a] text-white pt-6 pb-6 overflow-hidden relative w-full"
      data-node-id="305:6583"
    >
      {/* ===================== DESKTOP FOOTER (Exact Figma Node 305:6583) ===================== */}
      <div className="hidden xl:block max-w-[1440px] mx-auto px-4">
        {/* Top Gold Cross and Flanking Dividers (Figma 305:6565, 305:6569, 305:6570) */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-[251px] h-[1px] bg-[#efbf04]" />
          <div className="text-[#efbf04] text-[30px] leading-none font-serif select-none drop-shadow-[0_2px_8px_rgba(239,191,4,0.4)] flex items-center justify-center">
            ✝
          </div>
          <div className="w-[250px] h-[1px] bg-[#efbf04]" />
        </div>

        {/* 4 Columns Container with 3 Exact Vertical Dividers */}
        <div className="flex items-start justify-between pb-6">
          {/* Column 1: Ministry Crest & Overview (Figma 305:6549, 305:6572, 305:6581) */}
          <div className="w-[380px] flex flex-col items-start text-left px-2 flex-shrink-0">
            <div className="relative w-[190px] h-[78px] drop-shadow-[0px_4px_8px_rgba(0,0,0,0.25)] flex-shrink-0">
              <Image
                src={logoUrl}
                alt={ministryName}
                fill
                className="object-contain object-left"
              />
            </div>
            <h3 className="font-lato font-bold text-[19px] text-white text-left mt-3 whitespace-nowrap">
              {ministryName}
            </h3>
            <p className="font-lato font-normal text-[14px] text-white/90 text-left leading-[1.4] w-[374px] mt-2">
              {aboutText}
            </p>
          </div>

          {/* Vertical Divider 1 */}
          <div className="w-px self-stretch min-h-[260px] bg-white/20 flex-shrink-0" />

          {/* Column 2: Contact Us & Links (Figma 305:6560, 305:6561, 305:6573, 305:6574, 305:6575) */}
          <div className="w-[300px] flex flex-col items-start text-left px-2 flex-shrink-0">
            {/* Contact Us */}
            <div className="w-full text-left">
              <h4 className="font-lato font-bold text-[18px] text-white text-left">
                Contact Us
              </h4>
              <p className="font-lato font-normal text-[15px] text-white/90 text-left mt-2">
                <a href={`mailto:${contactEmail}`} className="hover:text-[#efbf04] transition">
                  {contactEmail}
                </a>
              </p>
              <p className="font-lato font-normal text-[15px] text-white/90 text-left mt-1">
                <a href={`tel:${contactPhone.replace(/[^0-9]/g, '')}`} className="hover:text-[#efbf04] transition">
                  {contactPhone}
                </a>
              </p>
            </div>

            {/* Links */}
            <div className="mt-5 w-full text-left">
              <h4 className="font-lato font-bold text-[18px] text-white text-left">
                Links
              </h4>
              <p className="font-lato font-normal text-[15px] text-white/90 text-left mt-2">
                <Link href={privacyPolicyUrl} className="hover:text-[#efbf04] transition">
                  Privacy Policy
                </Link>
              </p>
              <p className="font-lato font-normal text-[15px] text-white/90 text-left mt-1">
                <Link href={termsUrl} className="hover:text-[#efbf04] transition">
                  Terms and Conditions
                </Link>
              </p>
            </div>
          </div>

          {/* Vertical Divider 2 */}
          <div className="w-px self-stretch min-h-[260px] bg-white/20 flex-shrink-0" />

          {/* Column 3: Pages (Figma 305:6562, 305:6551 - 305:6558) */}
          <div className="w-[240px] flex flex-col items-start text-left px-2 flex-shrink-0">
            <h4 className="font-lato font-bold text-[18px] text-white text-left mb-2">
              Pages
            </h4>
            <ul className="space-y-1 w-full text-left">
              {pagesList.map((page, idx) => (
                <li key={idx} className="text-left">
                  <Link
                    href={page.href}
                    className="font-lato font-normal text-[15px] text-white/90 hover:text-[#efbf04] transition block leading-tight py-0.5 text-left"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical Divider 3 */}
          <div className="w-px self-stretch min-h-[260px] bg-white/20 flex-shrink-0" />

          {/* Column 4: Social Media Platforms & Locate Us (Figma 305:6563, 305:6564, 305:6576-305:6580) */}
          <div className="w-[340px] flex flex-col items-start text-left px-2 flex-shrink-0">
            {/* Social Media Platforms */}
            <div className="w-full text-left">
              <h4 className="font-lato font-bold text-[18px] text-white text-left">
                Social Media Platforms
              </h4>
              <div className="flex items-center justify-start gap-3 mt-2">
                {socialLinks.map((item, idx) => {
                  const iconUrl = getMediaUrl(item.icon, item.iconFallback || '')
                  const w = item.width || 24
                  const h = item.height || 24

                  return (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center hover:opacity-85 transition transform hover:scale-110 flex-shrink-0"
                      style={{ width: `${w}px`, height: `${h}px` }}
                      aria-label={item.name}
                    >
                      <Image
                        src={iconUrl}
                        alt={item.name}
                        width={w}
                        height={h}
                        className="object-contain"
                      />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Locate Us */}
            <div className="mt-4 flex flex-col items-start w-full text-left">
              <h4 className="font-lato font-bold text-[18px] text-white text-left">
                Locate Us
              </h4>
              <div className="relative w-full max-w-[320px] h-[190px] mt-2 overflow-hidden rounded-lg shadow-md bg-black/20">
                <FooterMapEmbed src={mapEmbedUrl} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar (Figma 305:6559) */}
        <div className="pt-4 text-center border-t border-white/10">
          <p className="font-lato font-normal text-[14px] text-white/80 text-center">
            {copyrightText}
          </p>
        </div>
      </div>

      {/* ===================== TABLET / MEDIUM VIEWPORT (md to xl) ===================== */}
      <div className="hidden md:block xl:hidden max-w-[1000px] mx-auto px-6">
        {/* Top Gold Cross and Flanking Dividers */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-[180px] h-[1px] bg-[#efbf04]" />
          <div className="text-[#efbf04] text-[26px] font-serif select-none flex items-center justify-center">
            ✝
          </div>
          <div className="w-[180px] h-[1px] bg-[#efbf04]" />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-6">
          {/* Column 1: Ministry Crest & Overview */}
          <div className="flex flex-col items-start text-left space-y-2.5">
            <div className="relative w-[170px] h-[70px] drop-shadow-[0px_4px_8px_rgba(0,0,0,0.25)]">
              <Image
                src={logoUrl}
                alt={ministryName}
                fill
                className="object-contain object-left"
              />
            </div>
            <h3 className="font-lato font-bold text-[18px] text-white text-left">
              {ministryName}
            </h3>
            <p className="font-lato font-normal text-[13px] text-white/90 text-left leading-relaxed max-w-[340px]">
              {aboutText}
            </p>
          </div>

          {/* Column 2: Contact Us & Links */}
          <div className="flex flex-col items-start text-left space-y-3.5">
            <div className="w-full text-left">
              <h4 className="font-lato font-bold text-[16px] text-white text-left">Contact Us</h4>
              <p className="font-lato font-normal text-[14px] text-white/90 text-left mt-1.5">
                <a href={`mailto:${contactEmail}`} className="hover:text-[#efbf04]">{contactEmail}</a>
              </p>
              <p className="font-lato font-normal text-[14px] text-white/90 text-left mt-0.5">
                <a href={`tel:${contactPhone.replace(/[^0-9]/g, '')}`} className="hover:text-[#efbf04]">{contactPhone}</a>
              </p>
            </div>
            <div className="w-full text-left">
              <h4 className="font-lato font-bold text-[16px] text-white text-left">Links</h4>
              <p className="font-lato font-normal text-[14px] text-white/90 text-left mt-1.5">
                <Link href={privacyPolicyUrl} className="hover:text-[#efbf04]">Privacy Policy</Link>
              </p>
              <p className="font-lato font-normal text-[14px] text-white/90 text-left mt-0.5">
                <Link href={termsUrl} className="hover:text-[#efbf04]">Terms and Conditions</Link>
              </p>
            </div>
          </div>

          {/* Column 3: Pages */}
          <div className="flex flex-col items-start text-left">
            <h4 className="font-lato font-bold text-[16px] text-white text-left mb-1.5">Pages</h4>
            <ul className="space-y-1 font-lato font-normal text-[14px] text-white/90 text-left w-full">
              {pagesList.map((page, idx) => (
                <li key={idx} className="text-left">
                  <Link href={page.href} className="hover:text-[#efbf04] transition text-left block">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media & Locate Us */}
          <div className="flex flex-col items-start text-left space-y-3.5">
            <div className="w-full text-left">
              <h4 className="font-lato font-bold text-[16px] text-white text-left mb-1.5">Social Media Platforms</h4>
              <div className="flex items-center justify-start gap-3">
                {socialLinks.map((item, idx) => {
                  const iconUrl = getMediaUrl(item.icon, item.iconFallback || '')
                  const w = item.width || 24
                  const h = item.height || 24

                  return (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative hover:opacity-85 transition"
                      style={{ width: `${w}px`, height: `${h}px` }}
                      aria-label={item.name}
                    >
                      <Image src={iconUrl} alt={item.name} width={w} height={h} className="object-contain" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="w-full text-left">
              <h4 className="font-lato font-bold text-[16px] text-white text-left mb-1.5">Locate Us</h4>
              <div className="relative w-full max-w-[280px] h-[160px] rounded-lg overflow-hidden shadow-md bg-black/20">
                <FooterMapEmbed src={mapEmbedUrl} />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 text-center border-t border-white/10">
          <p className="font-lato font-normal text-[13px] text-white/80 text-center">
            {copyrightText}
          </p>
        </div>
      </div>

      {/* ===================== MOBILE FOOTER (under md) ===================== */}
      <div className="md:hidden max-w-[440px] mx-auto px-4 text-left space-y-5">
        {/* Brand Header with Emblem */}
        <div className="flex flex-col items-start justify-start space-y-2 text-left">
          <div className="relative w-[150px] h-[60px] drop-shadow-[0px_4px_8px_rgba(0,0,0,0.25)]">
            <Image
              src={logoUrl}
              alt={ministryName}
              fill
              className="object-contain object-left"
            />
          </div>
          <span className="font-lato font-bold text-white text-[17px] text-left">
            {ministryName}
          </span>
          <p className="font-lato font-normal text-[12.5px] text-white/90 text-left max-w-[340px] leading-relaxed">
            {aboutText}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[280px] h-px bg-white/20" />

        {/* 2-Column: Contact Us | Links */}
        <div className="grid grid-cols-2 gap-4 relative text-left">
          <div className="text-left">
            <h4 className="font-lato font-bold text-[15px] text-white text-left">Contact Us</h4>
            <p className="font-lato font-normal text-[13px] text-white/90 text-left mt-1.5">
              <a href={`mailto:${contactEmail}`} className="hover:text-[#efbf04]">
                {contactEmail}
              </a>
            </p>
            <p className="font-lato font-normal text-[13px] text-white/90 text-left mt-1">
              <a href={`tel:${contactPhone.replace(/[^0-9]/g, '')}`} className="hover:text-[#efbf04]">
                {contactPhone}
              </a>
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

          <div className="text-left pl-2">
            <h4 className="font-lato font-bold text-[15px] text-white text-left">Links</h4>
            <p className="font-lato font-normal text-[13px] text-white/90 text-left mt-1.5">
              <Link href={privacyPolicyUrl} className="hover:text-[#efbf04]">
                Privacy Policy
              </Link>
            </p>
            <p className="font-lato font-normal text-[13px] text-white/90 text-left mt-1">
              <Link href={termsUrl} className="hover:text-[#efbf04]">
                Terms and Conditions
              </Link>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[200px] h-px bg-white/20" />

        {/* Pages Section */}
        <div className="text-left">
          <h4 className="font-lato font-bold text-[15px] text-white text-left">Pages</h4>
          <ul className="mt-1.5 space-y-1 font-lato font-normal text-[13px] text-white/90 text-left">
            {pagesList.map((page, idx) => (
              <li key={idx} className="text-left">
                <Link href={page.href} className="hover:text-[#efbf04] transition block text-left">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[200px] h-px bg-white/20" />

        {/* Social Media Platforms */}
        <div className="text-left">
          <h4 className="font-lato font-bold text-[15px] text-white text-left">Social Media Platforms</h4>
          <div className="flex items-center justify-start gap-3 mt-2.5">
            {socialLinks.map((item, idx) => {
              const iconUrl = getMediaUrl(item.icon, item.iconFallback || '')
              const w = item.width || 24
              const h = item.height || 24

              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center hover:opacity-85 transition"
                  style={{ width: `${w}px`, height: `${h}px` }}
                  aria-label={item.name}
                >
                  <Image
                    src={iconUrl}
                    alt={item.name}
                    width={w}
                    height={h}
                    className="object-contain"
                  />
                </a>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[200px] h-px bg-white/20" />

        {/* Location */}
        <div className="text-left">
          <h4 className="font-lato font-bold text-[15px] text-white text-left">Locate Us</h4>
          <div className="mt-2.5 relative w-full max-w-[280px] h-[155px] rounded-lg overflow-hidden shadow-md bg-black/20">
            <FooterMapEmbed src={mapEmbedUrl} />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[300px] h-px bg-white/20" />

        {/* Copyright */}
        <p className="font-lato font-normal text-[12px] text-white/80 pb-2 text-left">
          {copyrightText}
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
