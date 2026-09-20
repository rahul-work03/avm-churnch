'use client'

import React from 'react'
import { RecentEventsSection } from './RecentEventsSection'
import { UpcomingEventsSection } from './UpcomingEventsSection'

interface EventsPageProps {
  data?: any
}

export const EventsPage: React.FC<EventsPageProps> = ({ data }) => {
  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative w-full overflow-hidden">
      {/* 1. Recent / Featured Events Showcase */}
      <RecentEventsSection
        recentHeaderTitle={data?.recentHeaderTitle}
        recentEvents={data?.recentEvents}
      />

      {/* 2. Upcoming Events Showcase & Schedule Details */}
      <UpcomingEventsSection
        upcomingHeaderTitle={data?.upcomingHeaderTitle}
        featuredPoster={data?.featuredPoster}
        featuredPosterFallback={data?.featuredPosterFallback}
        featuredTitle={data?.featuredTitle}
        featuredLinkUrl={data?.featuredLinkUrl}
        featuredButtonLabel={data?.featuredButtonLabel}
        headingGreeting={data?.headingGreeting}
        announcementParagraph1={data?.announcementParagraph1}
        announcementParagraph2={data?.announcementParagraph2}
        announcementParagraph3={data?.announcementParagraph3}
        announcementParagraph4={data?.announcementParagraph4}
        scheduleDay={data?.scheduleDay}
        scheduleDate={data?.scheduleDate}
        scheduleTime={data?.scheduleTime}
        scheduleVenue={data?.scheduleVenue}
        schedulePostedBy={data?.schedulePostedBy}
      />
    </main>
  )
}
