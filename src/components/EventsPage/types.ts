export interface EventItem {
  id?: string
  title: string
  eventTargetDate?: string | null
  landscapePoster?: any
  landscapePosterFallback?: string | null
  cardPoster?: any
  cardPosterFallback?: string | null
  buttonLabel?: string | null
  detailPoster?: any
  detailPosterFallback?: string | null
  headingGreeting?: string | null
  subheading?: string | null
  announcementParagraph1?: string | null
  announcementParagraph2?: string | null
  announcementParagraph3?: string | null
  announcementParagraph4?: string | null
  scheduleDay?: string | null
  scheduleDate?: string | null
  scheduleTime?: string | null
  scheduleVenue?: string | null
  schedulePostedBy?: string | null
  customLinkText?: string | null
  customLinkUrl?: string | null
}
