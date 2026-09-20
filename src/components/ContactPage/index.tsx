'use client'

import React from 'react'
import { ContactHeroSection } from './ContactHeroSection'
import { ContactInfoSection } from './ContactInfoSection'
import { AddressSection } from './AddressSection'
import { ContactPageData } from './ContactTypes'

interface ContactPageProps {
  data?: ContactPageData | null
}

export const ContactPage: React.FC<ContactPageProps> = ({ data }) => {
  return (
    <main className="w-full bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative overflow-hidden">
      {/* 1. Hero & Interactive Contact Form Section */}
      <ContactHeroSection
        heroTitle={data?.heroTitle}
        heroSubtitle={data?.heroSubtitle}
        heroImage={data?.heroImage}
        heroImageFallback={data?.heroImageFallback}
        heroImageBadgeTitle={data?.heroImageBadgeTitle}
        heroImageBadgeSubtitle={data?.heroImageBadgeSubtitle}
        formSuccessTitle={data?.formSuccessTitle}
        formSuccessMessage={data?.formSuccessMessage}
      />

      {/* 2. Contact Information Cards / Grid */}
      <ContactInfoSection
        infoSectionTitle={data?.infoSectionTitle}
        infoSectionSubtitle={data?.infoSectionSubtitle}
        generalInquiriesTitle={data?.generalInquiriesTitle}
        generalInquiriesEmail1={data?.generalInquiriesEmail1}
        generalInquiriesEmail2={data?.generalInquiriesEmail2}
        hospitalLineTitle={data?.hospitalLineTitle}
        hospitalLineEmail={data?.hospitalLineEmail}
        emergencyPrayersTitle={data?.emergencyPrayersTitle}
        emergencyPrayersEmail={data?.emergencyPrayersEmail}
        phoneSectionTitle={data?.phoneSectionTitle}
        phoneNumber={data?.phoneNumber}
      />

      {/* 3. Address Section */}
      <AddressSection
        addressSectionTitle={data?.addressSectionTitle}
        fullAddress={data?.fullAddress}
        googleMapsUrl={data?.googleMapsUrl}
      />
    </main>
  )
}

export default ContactPage
