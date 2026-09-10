import React from 'react'
import type { Metadata } from 'next'
import { SophiaInstitutePage } from '@/components/SophiaInstitutePage'

export const metadata: Metadata = {
  title: 'Sophia Institute | The Church of Signs and Wonders',
  description:
    'Sophia Institute is dedicated to nurturing faith, wisdom, and a deeper understanding of the Word of God through Scripture, prayer, teaching, and fellowship.',
}

export default function Page() {
  return <SophiaInstitutePage />
}
