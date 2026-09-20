'use client'

import React from 'react'

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
    <main className="min-h-screen bg-white text-[#040609] antialiased pt-28 pb-16 sm:pt-36 sm:pb-24 select-text">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 font-poppins text-base sm:text-lg md:text-[20px] lg:text-[22px] leading-relaxed sm:leading-[1.7] space-y-6 sm:space-y-8">
        {/* Document Title */}
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#003471]">
          {pageTitle}
        </h1>

        {/* Intro Paragraph */}
        <p className="text-[#040609]">{introText}</p>

        {/* Dynamic Clauses */}
        {sections.map((sec, idx) => (
          <div key={idx} className="space-y-2">
            <h2 className="font-semibold text-lg sm:text-xl md:text-[22px] lg:text-[24px] text-[#003471]">
              {sec.sectionTitle}
            </h2>
            <p className="text-[#252c32]">{sec.content}</p>
          </div>
        ))}

        {/* Contact Us Clause */}
        <p className="pt-4 border-t border-slate-200">
          If you have any questions or concerns, please contact us at{' '}
          <a
            href={`mailto:${contactEmail}`}
            className="underline underline-offset-4 font-semibold text-[#003471] hover:text-[#efbf04] transition-colors"
          >
            {contactEmail}
          </a>
          .
        </p>
      </div>
    </main>
  )
}

export default TermsAndConditionsPage
