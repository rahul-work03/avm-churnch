'use client'

import React from 'react'
import { RecentEventsSection } from './RecentEventsSection'
import { UpcomingEventsSection } from './UpcomingEventsSection'

export const EventsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#ffffe9] text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative w-full overflow-hidden">
      {/* 1. Recent / Featured Events Showcase */}
      <RecentEventsSection />

      {/* 2. Upcoming Events Showcase & Schedule Details */}
      <UpcomingEventsSection />
    </main>
  )
}
