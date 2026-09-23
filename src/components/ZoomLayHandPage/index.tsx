'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronDown, Send, Video, PhoneCall, Mail, Loader2 } from 'lucide-react'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import type { ZoomLayHandPageData } from './ZoomLayHandTypes'

interface ZoomLayHandPageProps {
  data?: ZoomLayHandPageData | null
}

export const ZoomLayHandPage: React.FC<ZoomLayHandPageProps> = ({ data }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    gender: '',
    age: '',
    nationality: '',
    profession: '',
    email: '',
    phone: '',
    relativeName: '',
    relativePhone: '',
    relativeEmail: '',
    healthSituation: '',
    address: '',
    problemNature: '',
    duration: '',
    dailyLifeEffect: '',
    hospitalized: '',
    medicalDevices: '',
    zoomAvailability: '',
    additionalComments: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fallbacks
  const heroImageSrc = getMediaUrl(
    data?.heroBannerImage,
    data?.heroBannerFallback || '/figma-assets/624a2b77f2c32df6de342821ffd6101999d243b9.png'
  )
  const headingTitle = data?.headingTitle || 'Zoom Lay hand'
  const headingSubtitle =
    data?.headingSubtitle ||
    'Register for the global Zoom Lay Hand prayer session with Apostle Dr. Ankur Yoseph Narula.'
  const guidelinesTitle = data?.guidelinesTitle || 'Zoom Session Guidelines'
  const guidelinesText =
    data?.guidelinesText ||
    'Please ensure you have a stable internet connection and quiet environment for the Zoom Lay Hand prayer.'
  const supportPhone = data?.supportPhone || '0181 520 7777'
  const supportEmail = data?.supportEmail || 'Prayer@ankurnarula.org'
  const submitButtonText = data?.submitButtonText || 'Submit'
  const successTitle = data?.successTitle || 'Prayer Registration Received'
  const successMessage =
    data?.successMessage ||
    'Thank you for submitting your Zoom Lay Hand request. Our ministry team will review your details and send the Zoom session instructions and time slots to your email.'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/zoom-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const resData = await res.json()
      if (res.ok && resData.success) {
        setSubmitted(true)
        window.scrollTo({ top: 400, behavior: 'smooth' })
      } else {
        setSubmitted(true)
        window.scrollTo({ top: 400, behavior: 'smooth' })
      }
    } catch (err) {
      console.error('Zoom registration submit error:', err)
      setSubmitted(true)
      window.scrollTo({ top: 400, behavior: 'smooth' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      firstName: '',
      gender: '',
      age: '',
      nationality: '',
      profession: '',
      email: '',
      phone: '',
      relativeName: '',
      relativePhone: '',
      relativeEmail: '',
      healthSituation: '',
      address: '',
      problemNature: '',
      duration: '',
      dailyLifeEffect: '',
      hospitalized: '',
      medicalDevices: '',
      zoomAvailability: '',
      additionalComments: '',
    })
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#344054] antialiased pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* 1. Exact Figma 1140x620 Rounded Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[1140/620] rounded-[24px] sm:rounded-[36px] md:rounded-[51px] overflow-hidden shadow-2xl bg-[#0b0c1c]"
        >
          <Image
            src={heroImageSrc}
            alt="Zoom Layhand Prayer - Apostle Dr. Ankur Yoseph Narula"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* 2. Guidelines & Support Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-[16px] sm:rounded-[20px] bg-gradient-to-r from-[#003471] via-[#05244c] to-[#003471] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 border border-[#efbf04]/30"
        >
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-[#efbf04]/20 border border-[#efbf04]/40 flex items-center justify-center flex-shrink-0 text-[#efbf04]">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-base sm:text-lg text-white">
                {guidelinesTitle}
              </h3>
              <p className="font-poppins text-xs sm:text-sm text-slate-300">
                {guidelinesText}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${supportPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-poppins font-semibold text-xs sm:text-sm transition-all shadow-md hover:scale-105"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{supportPhone}</span>
            </a>
            <a
              href={`mailto:${supportEmail}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-poppins font-medium text-xs sm:text-sm transition-all border border-white/20"
            >
              <Mail className="w-4 h-4 text-[#efbf04]" />
              <span>{supportEmail}</span>
            </a>
          </div>
        </motion.div>

        {/* 3. "Zoom Lay hand" Title with Golden Emblems */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-center px-2 mt-8 sm:mt-12 md:mt-14 mb-8 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <div
              className="relative w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 bg-[#efbf04]"
              style={{
                maskImage: "url('/figma-assets/b3900b0c6d076c8791d4705df6a60f73f2821e51.png')",
                WebkitMaskImage: "url('/figma-assets/b3900b0c6d076c8791d4705df6a60f73f2821e51.png')",
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
            <h1 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#003471] tracking-tight text-center">
              {headingTitle}
            </h1>
            <div
              className="relative w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
              style={{
                maskImage: "url('/figma-assets/b3900b0c6d076c8791d4705df6a60f73f2821e51.png')",
                WebkitMaskImage: "url('/figma-assets/b3900b0c6d076c8791d4705df6a60f73f2821e51.png')",
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
          </div>
          {headingSubtitle && (
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-poppins">
              {headingSubtitle}
            </p>
          )}
        </motion.div>

        {/* 4. Main Form Container */}
        <div className="bg-white rounded-[16px] sm:rounded-[24px] border border-[#e5e7eb] p-6 sm:p-10 md:p-14 shadow-2xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 sm:py-16 space-y-6 max-w-xl mx-auto"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#003471]">
                  {successTitle}
                </h2>
                <p className="text-[#64748b] leading-relaxed text-sm sm:text-base">
                  Thank you, <strong className="text-[#003471]">{formData.firstName}</strong>. {successMessage} Details will be forwarded to <strong className="text-[#003471]">{formData.email || 'your email'}</strong>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-[#003471] text-[#003471] font-medium hover:bg-[#003471]/5 transition cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                  <Link
                    href="/"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-semibold shadow transition text-center"
                  >
                    Return Home
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-10 font-poppins"
              >
                {/* Primary Personal Info */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition"
                      />
                    </div>

                    {/* Gender */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="gender"
                          required
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition appearance-none cursor-pointer"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Age */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        Age <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="age"
                        required
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter age"
                        className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition"
                      />
                    </div>

                    {/* Nationality */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        Nationality <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nationality"
                        required
                        value={formData.nationality}
                        onChange={handleChange}
                        placeholder="Enter nationality"
                        className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition"
                      />
                    </div>

                    {/* Profession */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        Profession <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="profession"
                        required
                        value={formData.profession}
                        onChange={handleChange}
                        placeholder="Enter profession"
                        className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency Contact Optional */}
                <div className="pt-6 border-t border-slate-100 space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#003471]">
                    Emergency Contact (Optional)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Relative's Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        Relative&apos;s name
                      </label>
                      <input
                        type="text"
                        name="relativeName"
                        value={formData.relativeName}
                        onChange={handleChange}
                        placeholder="Enter relative's name"
                        className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition"
                      />
                    </div>

                    {/* Relatives Phone Number */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        Relatives Phone Number
                      </label>
                      <input
                        type="tel"
                        name="relativePhone"
                        value={formData.relativePhone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition"
                      />
                    </div>

                    {/* Relative's Email */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        Relative&apos;s Email
                      </label>
                      <input
                        type="email"
                        name="relativeEmail"
                        value={formData.relativeEmail}
                        onChange={handleChange}
                        placeholder="Enter relative's email"
                        className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Health and Problem Details */}
                <div className="pt-6 border-t border-slate-100 space-y-6">
                  {/* Health Situation */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#344054]">
                      Health Situation &amp; Any Sickness Or Medical Condition <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="healthSituation"
                      required
                      rows={3}
                      value={formData.healthSituation}
                      onChange={handleChange}
                      placeholder="Describe your health situation or medical conditions..."
                      className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition resize-y"
                    />
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#344054]">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      required
                      rows={2}
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter complete residential address"
                      className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition resize-y"
                    />
                  </div>

                  {/* Nature of the problem */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#344054]">
                      Nature of the problem <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="problemNature"
                      required
                      rows={3}
                      value={formData.problemNature}
                      onChange={handleChange}
                      placeholder="Explain the nature of the spiritual, physical, or personal problem..."
                      className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition resize-y"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* How long has this been going on? */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        How long has this been going on? <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="duration"
                        required
                        value={formData.duration}
                        onChange={handleChange}
                        placeholder="e.g. 6 months, 2 years"
                        className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition"
                      />
                    </div>

                    {/* Effect on daily life */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        Effect on daily life <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="dailyLifeEffect"
                        required
                        value={formData.dailyLifeEffect}
                        onChange={handleChange}
                        placeholder="e.g. Unable to work, severe pain, sleep issues"
                        className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Ever hospitalized? */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        Ever hospitalized? <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="hospitalized"
                          required
                          value={formData.hospitalized}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition appearance-none cursor-pointer"
                        >
                          <option value="">Select option</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Using any medical devices? */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[#344054]">
                        Using any medical devices? <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="medicalDevices"
                          required
                          value={formData.medicalDevices}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition appearance-none cursor-pointer"
                        >
                          <option value="">Select option</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Zoom availability */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#344054]">
                      Zoom availability (time zones / preferred windows) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="zoomAvailability"
                      required
                      value={formData.zoomAvailability}
                      onChange={handleChange}
                      placeholder="e.g. IST evenings, EST morning, Weekends"
                      className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition"
                    />
                  </div>

                  {/* Additional Comments */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#344054]">
                      Additional Comments
                    </label>
                    <textarea
                      name="additionalComments"
                      rows={4}
                      value={formData.additionalComments}
                      onChange={handleChange}
                      placeholder="Any additional information you would like the prayer team to know..."
                      className="w-full px-4 py-3 bg-white border border-[#d0d5dd] rounded-lg text-sm text-[#344054] placeholder:text-[#98a2b3] focus:outline-none focus:ring-2 focus:ring-[#003471]/20 focus:border-[#003471] transition resize-y"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-[366px] h-[56px] sm:h-[58px] bg-[#efbf04] hover:bg-[#dfaf00] text-[#0b0c1c] font-bold text-base sm:text-lg rounded-[8px] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition duration-200 disabled:opacity-75 cursor-pointer transform hover:scale-102 active:scale-98"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin h-5 w-5 text-[#0b0c1c]" />
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <span>{submitButtonText}</span>
                        <Send className="w-5 h-5 text-[#0b0c1c]" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}

export default ZoomLayHandPage
