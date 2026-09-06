'use client'

import React from 'react'
import { FooterSection } from '@/components/ChurchHomepage/FooterSection'
import type { Footer as FooterType } from '@/payload-types'

interface FooterClientProps {
  data?: FooterType
}

export const FooterClient: React.FC<FooterClientProps> = () => {
  return <FooterSection />
}
