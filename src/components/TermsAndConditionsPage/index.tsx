'use client'

import React from 'react'
import Link from 'next/link'

export const TermsAndConditionsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-[#040609] antialiased pt-28 pb-16 sm:pt-36 sm:pb-24 select-text">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 font-poppins text-base sm:text-lg md:text-[22px] lg:text-[24px] leading-relaxed sm:leading-[1.7] space-y-6 sm:space-y-8" data-node-id="291:4192">
        {/* Document Title */}
        <h1 className="font-semibold text-xl sm:text-2xl md:text-[28px] lg:text-[32px] text-[#040609]">
          Terms and Conditions for Ankur Narula Ministries
        </h1>

        {/* Intro Paragraph */}
        <p className="text-[#040609]">
          By using the{' '}
          <a
            href="https://www.ankurnarula.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 font-medium hover:text-[#003471] transition-colors"
          >
            website
          </a>{' '}
          and purchasing products from Ankur Narula Ministries, you agree to the following terms and conditions. Please read them carefully.
        </p>

        {/* 2.1. General */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[26px] text-[#040609]">
            2.1. General
          </h2>
          <p>
            Ankur Narula Ministries is a Christian ministry that provides resources including books and materials related to spiritual growth. Our website allows users to purchase products, access content, and engage with our ministry. By accessing or using this website, you agree to comply with these Terms and Conditions.
          </p>
        </div>

        {/* 2.2. Product Information and Availability */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[26px] text-[#040609]">
            2.2. Product Information and Availability
          </h2>
          <p>
            We make every effort to ensure that product descriptions, images, and prices are accurate. However, we cannot guarantee that all products are available at all times. If an item is out of stock or unavailable, we will notify you.
          </p>
        </div>

        {/* 2.3. Payment and Pricing */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[26px] text-[#040609]">
            2.3. Payment and Pricing
          </h2>
          <p>
            All prices on the website are in the specified currency and are exclusive of taxes, shipping, and handling fees unless otherwise stated. We accept payments through Razorpay and other secure payment gateways. Payment must be received in full before products are shipped.
          </p>
        </div>

        {/* 2.4. Shipping and Delivery */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[26px] text-[#040609]">
            2.4. Shipping and Delivery
          </h2>
          <p>
            Please refer to our “Shipping and Delivery” page for detailed information on shipping costs and estimated delivery times.
          </p>
        </div>

        {/* 2.5. Limitation of Liability */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[26px] text-[#040609]">
            2.5. Limitation of Liability
          </h2>
          <p>
            We are not liable for any direct, indirect, incidental, special, or consequential damages that may result from using our website or purchasing our products, except where required by law.
          </p>
        </div>

        {/* 2.6. Changes to Terms and Conditions */}
        <div className="space-y-2">
          <h2 className="font-semibold text-lg sm:text-xl md:text-[24px] lg:text-[26px] text-[#040609]">
            2.6. Changes to Terms and Conditions
          </h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. All changes will be posted on this page with the updated date.
          </p>
        </div>

        {/* Contact Us Clause */}
        <p className="pt-2">
          If you have any questions or concerns, please contact us at{' '}
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
