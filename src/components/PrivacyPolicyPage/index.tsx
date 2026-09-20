'use client'

import React from 'react'

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
          For any questions or concerns regarding your privacy, please contact us at{' '}
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

export default PrivacyPolicyPage
