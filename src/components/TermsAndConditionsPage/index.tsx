'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Mail, ArrowRight } from 'lucide-react'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'

export interface TermsPageData {
  pageTitle?: string | null
  introText?: string | null
  sections?: Array<{
    sectionTitle?: string | null
    content?: string | null
  }> | null
  contactEmail?: string | null
}

interface TermsProps {
  data?: TermsPageData | null
}

const DEFAULT_TERMS = [
  {
    sectionTitle: '2.1. General',
    content:
      'Ankur Narula Ministries is a Christian ministry that provides resources including books and materials related to spiritual growth. Our website allows users to purchase products, access content, and engage with our ministry. By accessing or using this website, you agree to comply with these Terms and Conditions.',
  },
  {
    sectionTitle: '2.2. Product Information and Availability',
    content:
      'We make every effort to ensure that product descriptions, images, and prices are accurate. However, we cannot guarantee that all products are available at all times. If an item is out of stock or unavailable, we will notify you.',
  },
  {
    sectionTitle: '2.3. Payment and Pricing',
    content:
      'All prices on the website are in the specified currency and are exclusive of taxes, shipping, and handling fees unless otherwise stated. We accept payments through Razorpay and other secure payment gateways. Payment must be received in full before products are shipped.',
  },
  {
    sectionTitle: '2.4. Shipping and Delivery',
    content:
      'Please refer to our “Shipping and Delivery” information for detailed insights on shipping costs and estimated delivery times across India and internationally.',
  },
  {
    sectionTitle: '2.5. Limitation of Liability',
    content:
      'We are not liable for any direct, indirect, incidental, special, or consequential damages that may result from using our website or purchasing our products, except where required by law.',
  },
  {
    sectionTitle: '2.6. Changes to Terms and Conditions',
    content:
      'We reserve the right to modify these Terms and Conditions at any time. All changes will be posted on this page with the updated date.',
  },
]

export const TermsAndConditionsPage: React.FC<TermsProps> = ({ data }) => {
  const pageTitle = data?.pageTitle || 'Terms and Conditions for Ankur Narula Ministries'
  const introText =
    data?.introText ||
    'By using the website and purchasing products from Ankur Narula Ministries, you agree to the following terms and conditions. Please read them carefully.'
  const sections = data?.sections && data.sections.length > 0 ? data.sections : DEFAULT_TERMS
  const contactEmail = data?.contactEmail || 'anmbrightmedia5185@gmail.com'

  return (
    <main className="min-h-screen bg-slate-50/50 text-[#040609] antialiased pt-28 pb-16 sm:pt-36 sm:pb-24 select-text">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 mb-4">
            <FileText className="w-4 h-4 text-[#efbf04]" />
            <span className="font-poppins text-xs font-semibold text-amber-900 tracking-wide uppercase">
              Terms of Agreement
            </span>
          </div>

          <TextWordReveal
            as="h1"
            delay={0.05}
            staggerDelay={0.03}
            className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-[#003471] tracking-tight"
          >
            {pageTitle}
          </TextWordReveal>

          <BlurTextReveal
            as="p"
            delay={0.15}
            duration={0.6}
            className="font-poppins text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4 pt-4 border-t border-slate-100"
          >
            {introText}
          </BlurTextReveal>
        </motion.div>

        {/* Dynamic Clauses / Sections */}
        <div className="space-y-4 sm:space-y-6">
          {sections.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-xs hover:border-amber-300/60 transition-colors"
            >
              <h2 className="font-poppins font-semibold text-base sm:text-lg md:text-xl text-[#003471] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#efbf04] inline-block flex-shrink-0" />
                {sec.sectionTitle}
              </h2>
              <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed pl-3.5 border-l border-slate-100">
                {sec.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Us Clause */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-poppins text-slate-700 text-sm sm:text-base pt-6 border-t border-slate-200"
        >
          If you have any questions or concerns, please contact us at{' '}
          <a
            href={`mailto:${contactEmail}`}
            className="underline underline-offset-4 font-semibold text-[#003471] hover:text-[#efbf04] transition-colors"
          >
            {contactEmail}
          </a>
          .
        </motion.p>
      </div>
    </main>
  )
}

export default TermsAndConditionsPage
