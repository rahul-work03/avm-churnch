'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Mail, ArrowRight } from 'lucide-react'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'

export interface PrivacyPolicyData {
  pageTitle?: string | null
  introText?: string | null
  sections?: Array<{
    sectionTitle?: string | null
    content?: string | null
  }> | null
  contactEmail?: string | null
}

interface PrivacyPolicyProps {
  data?: PrivacyPolicyData | null
}

const DEFAULT_SECTIONS = [
  {
    sectionTitle: '1.1. Information We Collect',
    content:
      'We collect personal information that you provide directly to us, including: Name, Email address, Shipping address, Payment details, and other information you provide when making a purchase or contacting us.',
  },
  {
    sectionTitle: '1.2. How We Use Your Information',
    content:
      'We use your personal information to: Process your orders and deliver products, Communicate with you regarding your purchases, services, and updates, Improve our website and offerings, and Send newsletters or promotional content (with your consent).',
  },
  {
    sectionTitle: '1.3. Data Security',
    content:
      'We take reasonable steps to ensure the security of your personal information, including using encryption and secure payment processing methods.',
  },
  {
    sectionTitle: '1.4. Third-Party Sharing',
    content:
      'We do not sell, rent, or trade your personal information. However, we may share your information with trusted third-party service providers who assist us with order fulfillment, payments, and marketing, under strict confidentiality agreements.',
  },
  {
    sectionTitle: '1.5. Cookies',
    content:
      'We use cookies to improve your experience on our website. Cookies are small files stored on your device that help us analyze website traffic and tailor content to your preferences. You can manage cookie settings in your browser.',
  },
  {
    sectionTitle: '1.6. Your Rights',
    content:
      'You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us via the contact details provided on our website.',
  },
  {
    sectionTitle: '1.7. Changes to this Privacy Policy',
    content:
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.',
  },
]

export const PrivacyPolicyPage: React.FC<PrivacyPolicyProps> = ({ data }) => {
  const pageTitle = data?.pageTitle || 'Privacy Policy for Ankur Narula Ministries'
  const introText =
    data?.introText ||
    'At Ankur Narula Ministries, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website, purchase products, or engage with our services.'
  const sections = data?.sections && data.sections.length > 0 ? data.sections : DEFAULT_SECTIONS
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
            <ShieldCheck className="w-4 h-4 text-[#efbf04]" />
            <span className="font-poppins text-xs font-semibold text-amber-900 tracking-wide uppercase">
              Official Legal Document
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
          For any questions or concerns regarding your privacy, please contact us at{' '}
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

export default PrivacyPolicyPage
