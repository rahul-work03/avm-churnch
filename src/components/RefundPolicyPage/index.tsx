'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { RotateCcw, Mail, ArrowRight } from 'lucide-react'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'

export interface RefundPolicyData {
  pageTitle?: string | null
  introText?: string | null
  sections?: Array<{
    sectionTitle?: string | null
    content?: string | null
  }> | null
  contactEmail?: string | null
}

interface RefundPolicyProps {
  data?: RefundPolicyData | null
}

const DEFAULT_SECTIONS = [
  {
    sectionTitle: '3.1. Cancellations',
    content:
      'You can cancel your order within 24 hours of purchase if it has not yet been shipped. To cancel an order, please contact us immediately at anmbrightmedia5185@gmail.com with your order details. Once the order has been shipped, it cannot be canceled.',
  },
  {
    sectionTitle: '3.2. Refunds',
    content:
      'Refund requests are accepted within 7 days of receiving your order. If you are not satisfied with your purchase or if the product is damaged or defective, please contact us at anmbrightmedia5185@gmail.com to initiate the return and refund process.',
  },
  {
    sectionTitle: '3.3. Eligibility for Refunds',
    content:
      'Refunds will only be issued under the following conditions:\n• The product is defective or damaged upon arrival.\n• The wrong product was delivered.\n• You cancel the order within the specified time frame and it has not been shipped.\n\nRefunds will be processed to the original payment method after the product is returned and inspected.',
  },
  {
    sectionTitle: '3.4. Non-refundable Items',
    content:
      'Some products, such as downloadable content or products marked as final sale, may not be eligible for a refund.',
  },
  {
    sectionTitle: '3.5. Shipping Costs',
    content:
      'Shipping fees are non-refundable, and the customer is responsible for the cost of return shipping, unless the product was defective or an error was made by us.',
  },
]

export const RefundPolicyPage: React.FC<RefundPolicyProps> = ({ data }) => {
  const pageTitle =
    data?.pageTitle ||
    'Cancellation and Refund Policy for Ankur Narula Ministries'
  const introText =
    data?.introText ||
    'We want you to be satisfied with your purchase from Ankur Narula Ministries. If you need to cancel or request a refund, please refer to the guidelines below.'
  const sections =
    data?.sections && data.sections.length > 0 ? data.sections : DEFAULT_SECTIONS
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
            <RotateCcw className="w-4 h-4 text-[#efbf04]" />
            <span className="font-poppins text-xs font-semibold text-amber-900 tracking-wide uppercase">
              Cancellation & Refund Policy
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
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:border-[#efbf04]/50 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-50 text-[#003471] font-poppins font-bold text-sm flex items-center justify-center border border-amber-200/50 group-hover:bg-[#efbf04] group-hover:text-black transition-colors">
                  {idx + 1}
                </span>
                <div className="space-y-2 flex-grow">
                  <h3 className="font-poppins font-semibold text-lg sm:text-xl text-[#003471] group-hover:text-blue-900 transition-colors">
                    {section?.sectionTitle}
                  </h3>
                  <div className="font-poppins text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {section?.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support Footer Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#003471] to-[#001f44] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-[#efbf04]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white">
                Questions Regarding Cancellations or Refunds?
              </h3>
              <p className="font-poppins text-slate-200 text-sm sm:text-base max-w-xl">
                For any inquiries regarding returns, cancellations, or refund statuses, please contact our support team.
              </p>
            </div>

            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#efbf04] text-black font-poppins font-semibold text-sm hover:bg-yellow-400 hover:shadow-lg transition-all transform active:scale-95 flex-shrink-0"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default RefundPolicyPage

