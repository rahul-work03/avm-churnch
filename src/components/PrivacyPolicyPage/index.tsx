'use client'

import React from 'react'
import Link from 'next/link'

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-[#040609] antialiased pt-28 pb-16 sm:pt-36 sm:pb-24 select-text">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 font-poppins text-base sm:text-lg md:text-[22px] lg:text-[24px] leading-relaxed sm:leading-[1.7] space-y-6 sm:space-y-8" data-node-id="291:4144">
        {/* Intro Paragraph */}
        <p className="text-[#040609]">
          At Ankur Narula Ministries, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our{' '}
          <a
            href="https://www.ankurnarula.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 font-medium hover:text-[#003471] transition-colors"
          >
            website
          </a>
          , purchase products, or engage with our services.
        </p>

        {/* 1.1. Information We Collect */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[26px] text-[#040609]">
            1.1. Information We Collect
          </h2>
          <p>We collect personal information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 sm:pl-9 space-y-1 sm:space-y-1.5">
            <li>Name</li>
            <li>Email address</li>
            <li>Shipping address</li>
            <li>Payment details</li>
            <li>Other information you provide when making a purchase or contacting us</li>
          </ul>
        </div>

        {/* 1.2. How We Use Your Information */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[26px] text-[#040609]">
            1.2. How We Use Your Information
          </h2>
          <p>We use your personal information to:</p>
          <ul className="list-disc pl-6 sm:pl-9 space-y-1 sm:space-y-1.5">
            <li>Process your orders and deliver products</li>
            <li>Communicate with you regarding your purchases, services, and updates</li>
            <li>Improve our website and offerings</li>
            <li>Send newsletters or promotional content (with your consent)</li>
          </ul>
        </div>

        {/* 1.3. Data Security */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[26px] text-[#040609]">
            1.3. Data Security
          </h2>
          <p>
            We take reasonable steps to ensure the security of your personal information, including using encryption and secure payment processing methods.
          </p>
        </div>

        {/* 1.4. Third-Party Sharing */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[26px] text-[#040609]">
            1.4. Third-Party Sharing
          </h2>
          <p>
            We do not sell, rent, or trade your personal information. However, we may share your information with trusted third-party service providers who assist us with order fulfillment, payments, and marketing, under strict confidentiality agreements.
          </p>
        </div>

        {/* 1.5. Cookies */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[26px] text-[#040609]">
            1.5. Cookies
          </h2>
          <p>
            We use cookies to improve your experience on our website. Cookies are small files stored on your device that help us analyze website traffic and tailor content to your preferences. You can manage cookie settings in your browser.
          </p>
        </div>

        {/* 1.6. Your Rights */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[26px] text-[#040609]">
            1.6. Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us via the contact details provided on our website.
          </p>
        </div>

        {/* 1.7. Changes to this Privacy Policy */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[26px] text-[#040609]">
            1.7. Changes to this Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
          </p>
        </div>

        {/* Contact Us Clause */}
        <p className="pt-2">
          For any questions or concerns regarding your privacy, please contact us at{' '}
          <a
            href="mailto:anmbrightmedia5185@gmail.com"
            className="underline underline-offset-4 font-medium hover:text-[#003471] transition-colors"
          >
            anmbrightmedia5185@gmail.com
          </a>
          .
        </p>
      </div>
    </main>
  )
}
