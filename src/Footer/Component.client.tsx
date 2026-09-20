'use client'

import React from 'react'
import { FooterSection } from '@/components/ChurchHomepage/FooterSection'

interface FooterClientProps {
  data?: any
}

export const FooterClient: React.FC<FooterClientProps> = ({ data }) => {
  return <FooterSection data={data} />
}

export default FooterClient
