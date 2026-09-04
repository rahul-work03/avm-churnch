'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { ChurchNavbar } from '@/components/ChurchHomepage/Navbar'
import type { Header } from '@/payload-types'

interface HeaderClientProps {
  data?: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = () => {
  const pathname = usePathname()

  // On the homepage, the navbar is seamlessly integrated into the top of the hero
  if (pathname === '/') {
    return null
  }

  // On other pages, render the Church Navbar
  return <ChurchNavbar />
}
