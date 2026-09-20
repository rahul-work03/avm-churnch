import React from 'react'
import { MinistriesHeroSection } from './MinistriesHeroSection'
import { MinistriesOverviewSection } from './MinistriesOverviewSection'
import { HeadChurchSection } from './HeadChurchSection'
import { WorshipTeamSection } from './WorshipTeamSection'

export interface MinistriesPageProps {
  ministriesData?: any
}

export const MinistriesPage: React.FC<MinistriesPageProps> = ({ ministriesData }) => {
  // Hero props
  const heroProps = {
    badgeText: ministriesData?.heroBadgeText,
    subtitle: ministriesData?.heroSubtitle,
    heroVideo: ministriesData?.heroVideo,
    heroVideoFallback: ministriesData?.heroVideoFallback || '/ministries_hero_video.mp4',
    bannerVideoUrl: ministriesData?.bannerVideoUrl,
    bannerImage: ministriesData?.heroBannerImage,
    bannerImageFallback: ministriesData?.heroBannerFallback,
    bannerAlt: ministriesData?.heroBannerAlt,
  }

  // Overview props
  const overviewProps = {
    headerTitle: ministriesData?.overviewHeaderTitle,
    cards: ministriesData?.ministryCards,
  }

  // Head church props
  const headChurchProps = {
    headerTitle: ministriesData?.headChurchHeaderTitle,
    image: ministriesData?.headChurchImage,
    imageFallback: ministriesData?.headChurchFallback,
    alt: ministriesData?.headChurchAlt,
    narrative: ministriesData?.headChurchNarrative,
  }

  // Worship team props
  const worshipTeamProps = {
    headerTitle: ministriesData?.worshipHeaderTitle,
    image: ministriesData?.worshipImage,
    imageFallback: ministriesData?.worshipFallback,
    alt: ministriesData?.worshipAlt,
    narrative: ministriesData?.worshipNarrative,
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c] relative w-full overflow-hidden">
      {/* 1. Ministries Hero Banner */}
      <MinistriesHeroSection {...heroProps} />

      {/* 2. Ministries Overview 6-Card Grid (Direct links to sub-pages) */}
      <MinistriesOverviewSection {...overviewProps} />

      {/* 3. Head Church Jalandhar Showcase */}
      <HeadChurchSection {...headChurchProps} />

      {/* 4. Worship Team Showcase */}
      <WorshipTeamSection {...worshipTeamProps} />
    </main>
  )
}
