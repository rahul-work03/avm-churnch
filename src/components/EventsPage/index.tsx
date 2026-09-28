'use client'

import React, { useState } from 'react'
import { PrimaryEventHeroSection, type EventItem } from './PrimaryEventHeroSection'
import { MoreEventsSection } from './MoreEventsSection'
import { DEFAULT_EVENTS } from '@/globals/EventsPage/config'

interface EventsPageProps {
  data?: any
}

export const EventsPage: React.FC<EventsPageProps> = ({ data }) => {
  const [selectedEventIndex, setSelectedEventIndex] = useState(0)

  const eventsList: EventItem[] =
    data?.events && data.events.length > 0 ? data.events : DEFAULT_EVENTS

  const activeEvent =
    eventsList[selectedEventIndex] || eventsList[0] || DEFAULT_EVENTS[0]

  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative w-full overflow-hidden pb-16 sm:pb-24">
      {/* 1. Primary Event Hero (Wide Landscape Banner + Live Countdown + Narrative & Schedule) */}
      <PrimaryEventHeroSection
        sectionTitle={data?.eventsSectionTitle || 'UPCOMING PRIMARY EVENT'}
        event={activeEvent}
      />

      {/* 2. More Events Directory Grid with 'See Details' Switcher */}
      <MoreEventsSection
        headerTitle={data?.upcomingSectionTitle || 'MORE EVENTS'}
        events={eventsList}
        selectedIndex={selectedEventIndex}
        onSelectEvent={(idx) => setSelectedEventIndex(idx)}
      />
    </main>
  )
}


