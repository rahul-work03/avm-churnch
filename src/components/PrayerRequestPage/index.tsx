'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { UploadCloud, CheckCircle, ChevronDown } from 'lucide-react'

export const PrayerRequestPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    nationality: '',
    profession: '',
    email: '',
    phone: '',
    relativesName: '',
    relativesPhone: '',
    relativesEmail: '',
    hasSickness: '',
    sicknessDetails: '',
    address: '',
    problemNature: '',
    problemDuration: '',
    medications: '',
    dailyLivingImpact: '',
    hospitalized: '',
    useBrace: '',
    useWalkingAid: '',
    useMedicalDevice: '',
    dailyActivitiesNormal: '',
    surgeryTherapyDetails: '',
    howDidYouHear: '',
    comments: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#344054] antialiased pt-24 pb-16 sm:pt-32 sm:pb-24 select-none">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* 1. Exact Figma 1140x620 Rounded Hero Banner with "PRAYER REQUEST" 3D embossed visual (Figma 297:5319) */}
        <div className="relative w-full aspect-[1140/620] rounded-[24px] sm:rounded-[36px] md:rounded-[51px] overflow-hidden shadow-xl bg-[#0b0c1c]">
          <Image
            src="/figma-assets/0c9f2208a82bd40d24f4da377e83cfe370d48e0a.png"
            alt="Prayer Request - Apostle Dr. Ankur Yoseph Narula & Pastor Sonia Narula"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 2. "How can we pray for You?" Title with Golden Emblems (Figma 297:5320, 297:5323, 297:5326) */}
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
            <h1 className="font-poppins font-semibold text-[#003471] text-xl sm:text-2xl md:text-[34px] tracking-tight">
              How can we pray for You?
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
        </div>

        {/* 3. Comprehensive Bilingual Prayer Request Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 font-poppins">
            {/* Row 1: First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-1.5">
                <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                  First Name ( पहला नाम ) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                  Last Name ( अंतिम नाम ) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                />
              </div>
            </div>

            {/* Row 2: Gender & Nationality */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-1.5">
                <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                  Gender ( लिंग ) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full h-[48px] px-4 pr-10 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male ( पुरुष )</option>
                    <option value="Female">Female ( महिला )</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                  Nationality ( राष्ट्रीयता ) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nationality"
                  required
                  placeholder="e.g. Indian"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                />
              </div>
            </div>

            {/* Row 3: Age & Profession */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-1.5">
                <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                  Age ( आयु ) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                  Profession ( व्यवसाय )
                </label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                />
              </div>
            </div>

            {/* Row 4: Phone & Your Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-1.5">
                <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                  Phone ( फ़ोन ) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                  Your Email ( ईमेल ) <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                />
              </div>
            </div>

            {/* Row 5: Relatives Phone & Relatives Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-1.5">
                <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                  Relatives Phone ( रिश्तेदार का फोन )
                </label>
                <input
                  type="tel"
                  name="relativesPhone"
                  value={formData.relativesPhone}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                  Relatives Name ( रिश्तेदार का नाम )
                </label>
                <input
                  type="text"
                  name="relativesName"
                  value={formData.relativesName}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                />
              </div>
            </div>

            {/* Row 6: Are you having any sickness? Dropdown & Relatives Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-1.5">
                <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                  Are you having any sickness? ( क्या आपको कोई बीमारी है? )
                </label>
                <div className="relative">
                  <select
                    name="hasSickness"
                    value={formData.hasSickness}
                    onChange={handleChange}
                    className="w-full h-[48px] px-4 pr-10 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                  >
                    <option value="">Select Option</option>
                    <option value="Yes">Yes ( हाँ )</option>
                    <option value="No">No ( नहीं )</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                  Relatives Email ( रिश्तेदार का ईमेल )
                </label>
                <input
                  type="email"
                  name="relativesEmail"
                  value={formData.relativesEmail}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                />
              </div>
            </div>

            {/* Row 7: Address */}
            <div className="space-y-1.5">
              <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                Address ( पता ) <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                required
                rows={3}
                value={formData.address}
                onChange={handleChange}
                className="w-full p-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] resize-y min-h-[100px]"
              />
            </div>

            {/* Detailed Question 1: Problem Nature & Symptoms */}
            <div className="space-y-1.5 pt-2">
              <label className="font-poppins font-semibold text-[14px] text-[#344054] block leading-[20px]">
                Please state the nature of the problem you are having and all the symptoms. Please specify in detail
                <span className="block font-normal text-slate-500 text-xs sm:text-sm mt-0.5">
                  ( कृपया आपको होने वाली समस्या और सभी लक्षणों की प्रकृति के बारे में बताएं। कृपया विस्तार से बताएं )
                </span>
              </label>
              <textarea
                name="problemNature"
                rows={4}
                value={formData.problemNature}
                onChange={handleChange}
                className="w-full p-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] resize-y min-h-[120px]"
              />
            </div>

            {/* Detailed Question 2: Duration */}
            <div className="space-y-1.5 pt-2">
              <label className="font-poppins font-semibold text-[14px] text-[#344054] block leading-[20px]">
                For how long have you been experiencing this problem?
                <span className="block font-normal text-slate-500 text-xs sm:text-sm mt-0.5">
                  ( आप कब से इस समस्या का सामना कर रहे हैं? )
                </span>
              </label>
              <textarea
                name="problemDuration"
                rows={3}
                value={formData.problemDuration}
                onChange={handleChange}
                className="w-full p-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] resize-y min-h-[100px]"
              />
            </div>

            {/* Detailed Question 3: Medications */}
            <div className="space-y-1.5 pt-2">
              <label className="font-poppins font-semibold text-[14px] text-[#344054] block leading-[20px]">
                List all the medications you are taking, have taken due to this problem/condition
                <span className="block font-normal text-slate-500 text-xs sm:text-sm mt-0.5">
                  ( इस समस्या / स्थिति के कारण आपके द्वारा ली जा रही सभी दवाओं की सूची बनाएं )
                </span>
              </label>
              <textarea
                name="medications"
                rows={3}
                value={formData.medications}
                onChange={handleChange}
                className="w-full p-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] resize-y min-h-[100px]"
              />
            </div>

            {/* Detailed Question 4: Daily Living Impact */}
            <div className="space-y-1.5 pt-2">
              <label className="font-poppins font-semibold text-[14px] text-[#344054] block leading-[20px]">
                How has the problem, condition affected your daily living?
                <span className="block font-normal text-slate-500 text-xs sm:text-sm mt-0.5">
                  ( समस्या / स्थिति ने आपके दैनिक जीवन को कैसे प्रभावित किया है? )
                </span>
              </label>
              <textarea
                name="dailyLivingImpact"
                rows={3}
                value={formData.dailyLivingImpact}
                onChange={handleChange}
                className="w-full p-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] resize-y min-h-[100px]"
              />
            </div>

            {/* Detailed Question 5: Hospitalized */}
            <div className="space-y-1.5 pt-2">
              <label className="font-poppins font-semibold text-[14px] text-[#344054] block leading-[20px]">
                Have you ever been hospitalized? If so when?
                <span className="block font-normal text-slate-500 text-xs sm:text-sm mt-0.5">
                  ( क्या आप कभी अस्पताल में भर्ती हुए हैं? अगर ऐसा हैं तोह कब? )
                </span>
              </label>
              <textarea
                name="hospitalized"
                rows={3}
                value={formData.hospitalized}
                onChange={handleChange}
                className="w-full p-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] resize-y min-h-[100px]"
              />
            </div>

            {/* Medical Device & Aid Dropdown 1 */}
            <div className="space-y-1.5 pt-2">
              <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                Are you using any form of brace? ( क्या आप ब्रेस के किसी भी रूप का उपयोग कर रहे हैं? )
              </label>
              <div className="relative">
                <select
                  name="useBrace"
                  value={formData.useBrace}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 pr-10 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes ( हाँ )</option>
                  <option value="No">No ( नहीं )</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Medical Device & Aid Dropdown 2 */}
            <div className="space-y-1.5 pt-2">
              <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                Are you using any form of walking aid (Crutches, stick, etc.) or wheelchair?
                <span className="block font-normal text-slate-500 text-xs sm:text-sm mt-0.5">
                  ( क्या आप पैदल चलने की सहायता (बैसाखी, छड़ी आदि) या व्हीलचेयर के किसी भी रूप का उपयोग कर रहे हैं? )
                </span>
              </label>
              <div className="relative">
                <select
                  name="useWalkingAid"
                  value={formData.useWalkingAid}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 pr-10 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes ( हाँ )</option>
                  <option value="No">No ( नहीं )</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Medical Device & Aid Dropdown 3 */}
            <div className="space-y-1.5 pt-2">
              <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                Are you using any medical device to support your health condition?
                <span className="block font-normal text-slate-500 text-xs sm:text-sm mt-0.5">
                  ( क्या आप अपनी स्वास्थ्य स्थिति का समर्थन करने के लिए किसी चिकित्सा उपकरण का उपयोग कर रहे हैं? )
                </span>
              </label>
              <div className="relative">
                <select
                  name="useMedicalDevice"
                  value={formData.useMedicalDevice}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 pr-10 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes ( हाँ )</option>
                  <option value="No">No ( नहीं )</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Medical Device & Aid Dropdown 4 */}
            <div className="space-y-1.5 pt-2">
              <label className="font-poppins font-semibold text-[14px] text-[#344054] block">
                Do you still go about your daily activities normally without using any aids or assistance from other people?
                <span className="block font-normal text-slate-500 text-xs sm:text-sm mt-0.5">
                  ( क्या आप अभी भी अन्य लोगों से किसी भी सहायता या सहायता का उपयोग किए बिना अपनी दैनिक गतिविधियों के बारे में सामान्य रूप से जाते हैं? )
                </span>
              </label>
              <div className="relative">
                <select
                  name="dailyActivitiesNormal"
                  value={formData.dailyActivitiesNormal}
                  onChange={handleChange}
                  className="w-full h-[48px] px-4 pr-10 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes ( हाँ )</option>
                  <option value="No">No ( नहीं )</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Upload Full Photograph (Figma 297:5511) */}
            <div className="bg-white p-4 sm:p-6 rounded-[8px] border border-[#d0d5dd] space-y-3 pt-4">
              <label className="font-poppins font-semibold text-[16px] text-[#191d23] block">
                Your current Full Photograph* ( आपकी वर्तमान की पुरी फ़ोटोग्राफ़ )
              </label>
              <div className="border border-dashed border-[#d0d5dd] rounded-[8px] p-6 sm:p-8 flex flex-col items-center justify-center text-center bg-[#fafbfd] hover:bg-slate-50 transition-colors cursor-pointer relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                />
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-[#efbf04] mb-3">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <p className="font-poppins text-sm text-[#191d23]">
                  {photoFile ? (
                    <span className="font-semibold text-emerald-600">{photoFile.name}</span>
                  ) : (
                    'Browse and choose the files you want to upload from your Device'
                  )}
                </p>
                <div className="mt-3 px-4 py-1.5 rounded-[4px] bg-[#efbf04] text-[#0b0c1c] text-xs font-bold shadow-sm">
                  {photoFile ? 'Change File' : 'Upload Photograph'}
                </div>
              </div>
            </div>

            {/* Surgery Details */}
            <div className="space-y-1.5 pt-2">
              <label className="font-poppins font-semibold text-[14px] text-[#344054] block leading-[20px]">
                Have you had any surgery or other therapy as a result of the problem/condition? If so, please give details.
                <span className="block font-normal text-slate-500 text-xs sm:text-sm mt-0.5">
                  ( क्या आपने समस्या / स्थिति के परिणामस्वरूप कोई सर्जरी या अन्य उपचार किया है? यदि हां, तो जानकारी दें। )
                </span>
              </label>
              <input
                type="text"
                name="surgeryTherapyDetails"
                value={formData.surgeryTherapyDetails}
                onChange={handleChange}
                className="w-full h-[48px] px-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
              />
            </div>

            {/* How did you hear about us? */}
            <div className="space-y-1.5 pt-2">
              <label className="font-poppins font-semibold text-[14px] text-[#344054] block leading-[20px]">
                How did you hear about us?
                <span className="block font-normal text-slate-500 text-xs sm:text-sm mt-0.5">
                  ( आपको हमारे बारे में कैसे पता चला? )
                </span>
              </label>
              <input
                type="text"
                name="howDidYouHear"
                value={formData.howDidYouHear}
                onChange={handleChange}
                className="w-full h-[48px] px-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
              />
            </div>

            {/* Comments */}
            <div className="space-y-1.5 pt-2">
              <label className="font-poppins font-semibold text-[14px] text-[#344054] block leading-[20px]">
                Comments
                <span className="block font-normal text-slate-500 text-xs sm:text-sm mt-0.5">
                  ( टिप्पणियाँ )
                </span>
              </label>
              <textarea
                name="comments"
                rows={3}
                value={formData.comments}
                onChange={handleChange}
                className="w-full p-4 rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] text-sm focus:outline-none focus:ring-2 focus:ring-[#003471]/30 focus:border-[#003471] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] resize-y min-h-[100px]"
              />
            </div>

            {/* Submit Button (Figma 297:5450: 366px x 58px bg-[#efbf04] rounded-[8px]) */}
            <div className="pt-6 sm:pt-10 flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-[366px] h-[58px] rounded-[8px] bg-[#efbf04] hover:bg-[#dfaf00] text-white font-poppins font-semibold text-base sm:text-[18px] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-102 active:scale-98"
              >
                Submit Your Prayer Request
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Success Card */
          <div className="bg-white rounded-[24px] border border-slate-200 p-8 sm:p-14 text-center max-w-2xl mx-auto shadow-xl space-y-5 animate-in fade-in duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#003471]">
              Prayer Request Submitted!
            </h2>
            <p className="font-poppins text-slate-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
              Thank you, <span className="font-semibold text-slate-800">{formData.firstName} {formData.lastName}</span>. Your prayer request has been received. Apostle Dr. Ankur Yoseph Narula and the ministry prayer team will stand in faith with you.
            </p>
            <p className="font-poppins font-medium text-[#efbf04] text-base italic">
              &ldquo;And all things, whatsoever ye shall ask in prayer, believing, ye shall receive.&rdquo; &mdash; Matthew 21:22
            </p>
            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 rounded-full bg-[#122f4a] text-white font-poppins font-semibold text-sm hover:bg-[#003471] transition-all shadow"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
