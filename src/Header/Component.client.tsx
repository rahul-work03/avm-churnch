'use client'

import React from 'react'
import { ChurchNavbar } from '@/components/ChurchHomepage/Navbar'
import type { Header } from '@/payload-types'

interface HeaderClientProps {
  data?: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = () => {
  return <ChurchNavbar />
}
