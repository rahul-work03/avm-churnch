'use client'

import React, { useState } from 'react'
import { RecentEventsSection, type EventItem } from './RecentEventsSection'
import { UpcomingEventsSection } from './UpcomingEventsSection'
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
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative w-full overflow-hidden">
      {/* 1. Events Grid Showcase */}
      <RecentEventsSection
        headerTitle={data?.eventsSectionTitle || data?.recentHeaderTitle || 'Events'}
        events={eventsList}
        selectedIndex={selectedEventIndex}
        onSelectEvent={(idx) => setSelectedEventIndex(idx)}
      />

      {/* 2. Selected Event Detailed View & Schedule Breakdown */}
      <UpcomingEventsSection
        upcomingHeaderTitle={data?.upcomingSectionTitle || data?.upcomingHeaderTitle || 'Upcoming Events'}
        event={activeEvent}
      />
    </main>
  )
}

