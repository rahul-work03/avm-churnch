'use client'

import React from 'react'
import { ChurchNavbar } from '@/components/ChurchHomepage/Navbar'

interface HeaderClientProps {
  data?: any
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return <ChurchNavbar data={data} />
}

export default HeaderClient
