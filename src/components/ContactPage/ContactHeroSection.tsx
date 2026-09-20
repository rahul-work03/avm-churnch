'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, CheckCircle2, Loader2 } from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

const COUNTRY_CODES = [
  { code: '+91', country: 'IND', label: 'India (+91)' },
  { code: '+1', country: 'USA', label: 'United States (+1)' },
  { code: '+44', country: 'GBR', label: 'United Kingdom (+44)' },
  { code: '+1', country: 'CAN', label: 'Canada (+1)' },
  { code: '+971', country: 'UAE', label: 'United Arab Emirates (+971)' },
  { code: '+61', country: 'AUS', label: 'Australia (+61)' },
  { code: '+64', country: 'NZL', label: 'New Zealand (+64)' },
]

interface ContactHeroSectionProps {
  heroTitle?: string | null
  heroSubtitle?: string | null
  heroImage?: any
  heroImageFallback?: string | null
  heroImageBadgeTitle?: string | null
  heroImageBadgeSubtitle?: string | null
  formSuccessTitle?: string | null
  formSuccessMessage?: string | null
}

export const ContactHeroSection: React.FC<ContactHeroSectionProps> = ({
  heroTitle = 'We Love To Hear From You.',
  heroSubtitle = 'Stay Connected With Us',
  heroImage,
  heroImageFallback = '/contact_us_hero.png',
  heroImageBadgeTitle = 'Ankur Narula Ministries',
  heroImageBadgeSubtitle = 'The Church of Signs and Wonders',
  formSuccessTitle = 'Message Sent Successfully!',
  formSuccessMessage = 'Thank you for contacting Ankur Narula Ministries. Our ministry team will connect with you soon.',
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    countryCode: '+91',
    phone: '',
    email: '',
    message: '',
  })

  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const heroPhotoUrl = getMediaUrl(
    heroImage,
    heroImageFallback || '/contact_us_hero.png'
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({
      firstName: '',
      lastName: '',
      countryCode: '+91',
      phone: '',
      email: '',
      message: '',
    })
  }

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Side: Hero Image Card */}
        <RevealOnScroll direction="left" duration={0.6} className="lg:col-span-6 w-full">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[560/760] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-2xl border border-amber-200/30 bg-slate-900 group">
            <Image
              src={heroPhotoUrl}
              alt="Ankur Narula Ministries Contact Us"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#122f4a]/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none hidden sm:block">
              <h3 className="font-poppins font-semibold text-lg sm:text-xl text-white drop-shadow-md">
                {heroImageBadgeTitle || 'Ankur Narula Ministries'}
              </h3>
              <p className="font-poppins text-xs sm:text-sm text-slate-200 mt-1 drop-shadow">
                {heroImageBadgeSubtitle || 'The Church of Signs and Wonders'}
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Right Side: Contact Form */}
        <RevealOnScroll direction="right" duration={0.6} className="lg:col-span-6 flex flex-col justify-start">
          <div className="mb-6 sm:mb-8">
            <h1 className="font-poppins font-semibold text-[#003471] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[60px] tracking-tight">
              {heroTitle || 'We Love To Hear From You.'}
            </h1>
            <p className="font-poppins font-medium text-[#344054] text-base sm:text-lg mt-2 sm:mt-3">
              {heroSubtitle || 'Stay Connected With Us'}
            </p>
          </div>

          {isSuccess && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <CheckCircle2 className="text-emerald-600 w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-poppins font-semibold text-emerald-900 text-sm sm:text-base">
                  {formSuccessTitle || 'Message Sent Successfully!'}
                </h4>
                <p className="font-poppins text-xs sm:text-sm text-emerald-700 mt-0.5">
                  {formSuccessMessage ||
                    'Thank you for contacting Ankur Narula Ministries. Our ministry team will connect with you soon.'}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block font-poppins font-semibold text-[#344054] text-sm mb-1.5"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="Your name"
                className="w-full bg-white border border-[#d0d5dd] rounded-[8px] px-4 py-3 text-[#101828] text-base placeholder:text-[#667085] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#efbf04] focus:border-transparent transition"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block font-poppins font-medium text-[#344054] text-sm mb-1.5"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Enter Last name.."
                className="w-full bg-white border border-[#d0d5dd] rounded-[8px] px-4 py-3 text-[#101828] text-base placeholder:text-[#667085] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#efbf04] focus:border-transparent transition"
              />
            </div>

            {/* Phone Number with Country Code Dropdown */}
            <div>
              <label
                htmlFor="phone"
                className="block font-poppins font-medium text-[#344054] text-sm mb-1.5"
              >
                Phone number
              </label>
              <div className="relative flex items-center bg-white border border-[#d0d5dd] rounded-[8px] shadow-xs focus-within:ring-2 focus-within:ring-[#efbf04] focus-within:border-transparent">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-1.5 px-3 sm:px-4 py-3 text-sm sm:text-base font-medium text-[#101828] border-r border-[#d0d5dd] hover:bg-slate-50 transition rounded-l-[8px] focus:outline-none cursor-pointer"
                  >
                    <span>{selectedCountry.country}</span>
                    <ChevronDown className="w-4 h-4 text-[#667085]" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-[#d0d5dd] rounded-lg shadow-xl py-1 z-30 animate-in fade-in duration-150">
                      {COUNTRY_CODES.map((c, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(c)
                            setFormData({ ...formData, countryCode: c.code })
                            setDropdownOpen(false)
                          }}
                          className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-100 flex items-center justify-between cursor-pointer ${
                            selectedCountry.country === c.country
                              ? 'bg-slate-50 font-semibold text-[#003471]'
                              : 'text-slate-700'
                          }`}
                        >
                          <span>{c.label}</span>
                          <span className="text-slate-400 text-xs">{c.code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={`${selectedCountry.code} (000) 000-0000`}
                  className="flex-1 px-4 py-3 text-[#101828] text-base placeholder:text-[#667085] bg-transparent focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-poppins font-medium text-[#344054] text-sm mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter Your mail"
                className="w-full bg-white border border-[#d0d5dd] rounded-[8px] px-4 py-3 text-[#101828] text-base placeholder:text-[#667085] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#efbf04] focus:border-transparent transition"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block font-poppins font-medium text-[#344054] text-sm mb-1.5"
              >
                Write a Message For Us
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Type here......."
                className="w-full bg-white border border-[#d0d5dd] rounded-[8px] px-4 py-3 text-[#101828] text-base placeholder:text-[#667085] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#efbf04] focus:border-transparent transition resize-y min-h-[120px]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#efbf04] hover:bg-[#e5b700] text-[#0b0c1c] font-poppins font-semibold text-base py-3.5 px-6 rounded-[8px] shadow-sm transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Now</span>
                )}
              </button>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  )
}
