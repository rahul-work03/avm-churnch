'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Truck, Mail, ArrowRight } from 'lucide-react'
import { TextWordReveal, BlurTextReveal } from '@/components/ui/text-reveal'

export interface ShippingPolicyData {
  pageTitle?: string | null
  introText?: string | null
  sections?: Array<{
    sectionTitle?: string | null
    content?: string | null
  }> | null
  contactEmail?: string | null
}

interface ShippingPolicyProps {
  data?: ShippingPolicyData | null
}

const DEFAULT_SECTIONS = [
  {
    sectionTitle: '4.1. Shipping Locations',
    content:
      'For international shipping, additional customs duties or taxes may apply and are the responsibility of the customer.',
  },
  {
    sectionTitle: '4.2. Processing Time',
    content:
      'Orders are processed within 7 business days from the time of purchase. You will receive an email notification once your order has been shipped, including tracking details if applicable.',
  },
  {
    sectionTitle: '4.3. Shipping Charges',
    content:
      'Shipping charges depend on the delivery address and the size/weight of the order. Shipping costs will be calculated at checkout. We occasionally offer free or discounted shipping promotions.',
  },
  {
    sectionTitle: '4.4. Delivery Time',
    content: 'Delivery times vary based on your location:',
  },
  {
    sectionTitle: '4.5. Delays and Issues',
    content:
      'We are not responsible for delays caused by external factors such as weather, customs clearance, or postal service issues. In the rare event that your order is lost or delayed significantly, please contact us, and we will work with the courier to resolve the issue.',
  },
  {
    sectionTitle: '4.6. Order Tracking',
    content:
      "Once your order has shipped, you will receive a tracking number (if applicable) to monitor your order's progress. If you do not receive a tracking number or have any issues with tracking, please contact us.",
  },
  {
    sectionTitle: '4.7. Incorrect Shipping Information',
    content:
      'Please ensure that the shipping address provided is correct. If an order is returned to us due to an incorrect address, you will be responsible for the cost of reshipping.',
  },
]

export const ShippingPolicyPage: React.FC<ShippingPolicyProps> = ({ data }) => {
  const pageTitle =
    data?.pageTitle || 'Shipping and Delivery Policy for Ankur Narula Ministries'
  const introText =
    data?.introText ||
    'At Ankur Narula Ministries, we aim to deliver your order promptly and securely. Below is an outline of our shipping and delivery policy.'
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
            <Truck className="w-4 h-4 text-[#efbf04]" />
            <span className="font-poppins text-xs font-semibold text-amber-900 tracking-wide uppercase">
              Official Shipping Policy
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
                Questions Regarding Shipping?
              </h3>
              <p className="font-poppins text-slate-200 text-sm sm:text-base max-w-xl">
                For any shipping-related inquiries or assistance, please reach out to our media and support team.
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

export default ShippingPolicyPage

