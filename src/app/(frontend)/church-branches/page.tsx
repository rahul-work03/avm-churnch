import React from 'react'
import type { Metadata } from 'next'
import { ChurchBranchesPage } from '@/components/ChurchBranchesPage'

export const metadata: Metadata = {
  title: 'Our Branches | The Church of Signs and Wonders',
  description:
    'Explore national and international church branches of The Church of Signs and Wonders (Ankur Narula Ministries). Locate head branch Khambra and branches across India and worldwide.',
}

export default function Page() {
  return <ChurchBranchesPage />
}
