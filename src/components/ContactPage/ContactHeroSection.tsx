'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'
import { getMediaUrl } from '@/utilities/getMediaUrl'

import { DynamicFormFieldsList, PhoneInputWithCountry } from '@/components/Forms/DynamicFormFieldRenderer'

interface ContactHeroSectionProps {
  heroTitle?: string | null
  heroSubtitle?: string | null
  heroImage?: any
  heroImageFallback?: string | null
  heroImageBadgeTitle?: string | null
  heroImageBadgeSubtitle?: string | null
  formSuccessTitle?: string | null
  formSuccessMessage?: string | null
  form?: any
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
  form,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({
    firstName: '',
    lastName: '',
    countryCode: '+91',
    phone: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const heroPhotoUrl = getMediaUrl(
    heroImage,
    heroImageFallback || '/contact_us_hero.png'
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          countryCode: formData.countryCode || '+91',
          formId: form?.id,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setIsSuccess(true)
        setFormData({
          firstName: '',
          lastName: '',
          countryCode: '+91',
          phone: '',
          email: '',
          message: '',
        })
      } else {
        setErrorMessage(data.message || 'Failed to send message. Please try again.')
      }
    } catch (err: any) {
      console.error('Contact submission error:', err)
      setErrorMessage('Unable to connect to the server. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative pt-24 sm:pt-30 md:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Side: Hero Image Card Optimized for Mobile and Desktop */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 w-full"
        >
          <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] lg:aspect-[580/724] min-h-[320px] sm:min-h-[440px] lg:min-h-[660px] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-2xl border border-amber-200/30 bg-slate-900 group">
            <Image
              src={heroPhotoUrl}
              alt="Ankur Narula Ministries Contact Us"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 560px"
              priority
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#122f4a]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-white pointer-events-none">
              <h3 className="font-poppins font-semibold text-sm sm:text-lg lg:text-xl text-white drop-shadow-md">
                {heroImageBadgeTitle || 'Ankur Narula Ministries'}
              </h3>
              <p className="font-poppins text-[11px] sm:text-xs lg:text-sm text-slate-200 mt-0.5 sm:mt-1 drop-shadow">
                {heroImageBadgeSubtitle || 'The Church of Signs and Wonders'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 flex flex-col justify-start"
        >
          <div className="mb-6 sm:mb-8">
            <TextWordReveal
              as="h1"
              delay={0.05}
              staggerDelay={0.035}
              className="font-poppins font-semibold text-[#003471] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] lg:leading-[60px] tracking-tight"
            >
              {heroTitle || 'We Love To Hear From You.'}
            </TextWordReveal>
            <BlurTextReveal
              as="p"
              delay={0.15}
              className="font-poppins font-medium text-[#344054] text-base sm:text-lg mt-2 sm:mt-3"
            >
              {heroSubtitle || 'Stay Connected With Us'}
            </BlurTextReveal>
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

          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle className="text-red-600 w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-poppins font-semibold text-red-900 text-sm sm:text-base">
                  Submission Failed
                </h4>
                <p className="font-poppins text-xs sm:text-sm text-red-700 mt-0.5">
                  {errorMessage}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {form?.fields && form.fields.length > 0 ? (
              <DynamicFormFieldsList
                fields={form.fields}
                values={formData}
                onChange={(name, val) => setFormData((prev) => ({ ...prev, [name]: val }))}
                variant="light"
              />
            ) : (
              <>
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-poppins font-semibold text-[#344054] text-sm mb-1.5"
                  >
                    First Name <span className="text-[#efbf04]">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName || ''}
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
                    Last Name <span className="text-[#efbf04]">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName || ''}
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
                    Phone number <span className="text-[#efbf04]">*</span>
                  </label>
                  <PhoneInputWithCountry
                    id="phone"
                    name="phone"
                    value={formData.phone || ''}
                    countryCode={formData.countryCode || '+91'}
                    required
                    variant="light"
                    placeholder="9876543210"
                    onChange={(phone, code) => {
                      setFormData((prev) => ({
                        ...prev,
                        phone,
                        ...(code ? { countryCode: code } : {}),
                      }))
                    }}
                    onCountryCodeChange={(code) => {
                      setFormData((prev) => ({ ...prev, countryCode: code }))
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-poppins font-medium text-[#344054] text-sm mb-1.5"
                  >
                    Email <span className="text-[#efbf04]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email || ''}
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
                    Write a Message For Us <span className="text-slate-400 text-xs font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message || ''}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type here......."
                    className="w-full bg-white border border-[#d0d5dd] rounded-[8px] px-4 py-3 text-[#101828] text-base placeholder:text-[#667085] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#efbf04] focus:border-transparent transition resize-y min-h-[120px]"
                  />
                </div>
              </>
            )}

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
                  <span>{form?.submitButtonLabel || 'Submit Now'}</span>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHeroSection
