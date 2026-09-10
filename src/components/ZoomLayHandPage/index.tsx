'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ChevronDown, Send } from 'lucide-react'

export const ZoomLayHandPage: React.FC = () => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#344054] antialiased pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* 1. Exact Figma 1140x620 Rounded Hero Banner */}
        <div
          className="relative w-full aspect-[1140/620] rounded-[24px] sm:rounded-[36px] md:rounded-[51px] overflow-hidden shadow-xl bg-[#0b0c1c]"
          data-node-id="299:5641"
        >
          <Image
            src="/figma-assets/624a2b77f2c32df6de342821ffd6101999d243b9.png"
            alt="Zoom Layhand Prayer - Apostle Dr. Ankur Yoseph Narula"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* 2. "Zoom Lay hand" Title with Golden Emblems */}
        <div className="text-center px-2 mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12">
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
              Zoom Lay hand
            </h1>
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
          </div>
        </div>

        {/* 3. Main Form Container */}
        <div className="bg-white rounded-[16px] sm:rounded-[24px] border border-[#e5e7eb] p-6 sm:p-10 md:p-14 shadow-[0px_10px_30px_rgba(0,0,0,0.04)]">
          {submitted ? (
            <div className="text-center py-12 sm:py-16 space-y-6 max-w-xl mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#003471]">
                Prayer Registration Received
              </h2>
              <p className="text-[#64748b] leading-relaxed text-sm sm:text-base">
                Thank you for submitting your Zoom Lay Hand request. Our ministry team will review your details and send the Zoom session instructions and time slots to <strong className="text-[#003471]">{formData.email || 'your email'}</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => {
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
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-[#003471] text-[#003471] font-medium hover:bg-[#003471]/5 transition cursor-pointer"
                >
                  Submit Another Request
                </button>
                <Link
                  href="/"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#efbf04] hover:bg-[#dfaf00] text-white font-medium shadow transition text-center"
                >
                  Return Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
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
                      type="text"
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
                  Emergency Contact Optional
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
                  className="w-full sm:w-[366px] h-[56px] sm:h-[58px] bg-[#efbf04] hover:bg-[#dfaf00] text-white font-semibold text-base sm:text-lg rounded-[8px] flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition duration-200 disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}

export default ZoomLayHandPage
