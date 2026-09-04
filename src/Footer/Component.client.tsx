'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { FooterSection } from '@/components/ChurchHomepage/FooterSection'
import type { Footer as FooterType } from '@/payload-types'

interface FooterClientProps {
  data?: FooterType
}

export const FooterClient: React.FC<FooterClientProps> = () => {
  const pathname = usePathname()

  // Homepage already includes the dedicated, customized FooterSection
  if (pathname === '/') {
    return null
  }

  // If on other pages, render the church footer section
  return <FooterSection />
}
