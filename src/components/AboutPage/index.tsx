import React from 'react'
import dynamic from 'next/dynamic'
import { AboutHeroSection } from './AboutHeroSection'
import { VisionMissionSection } from './VisionMissionSection'
import { OurLeadersSection } from './OurLeadersSection'
import { MinistryStatsSection } from './MinistryStatsSection'
import { ScheduleSection } from '@/components/ChurchHomepage/ScheduleSection'
import { FaithResourcesSection } from './FaithResourcesSection'

const CrusadesSection = dynamic(
  () => import('./CrusadesSection').then((mod) => mod.CrusadesSection),
  {
    loading: () => <div className="h-[400px] w-full animate-pulse bg-slate-900/50" />,
  },
)

const InternationalPresenceSection = dynamic(
  () => import('./InternationalPresenceSection').then((mod) => mod.InternationalPresenceSection),
  {
    loading: () => <div className="h-[350px] w-full animate-pulse bg-slate-100" />,
  },
)

export interface AboutPageProps {
  aboutData?: any
  scheduleData?: any
}

export const AboutPage: React.FC<AboutPageProps> = ({
  aboutData,
  scheduleData,
}) => {
  // Hero props
  const heroProps = {
    headerTitle: aboutData?.heroHeaderTitle,
    description: aboutData?.heroDescription,
    bannerImage: aboutData?.heroBannerImage,
    bannerImageFallback: aboutData?.heroBannerFallback,
    bannerAlt: aboutData?.heroBannerAlt,
  }

  // Vision & Mission props
  const vmProps = {
    identityBadge: aboutData?.vmIdentityBadge,
    headerTitle: aboutData?.vmHeaderTitle,
    visionTitle: aboutData?.visionTitle,
    visionDescription: aboutData?.visionDescription,
    missionTitle: aboutData?.missionTitle,
    missionDescription: aboutData?.missionDescription,
  }

  // Our Leaders props
  const leadersProps = {
    headerTitle: aboutData?.leadersHeaderTitle,
    leaderImages: aboutData?.leaderImages,
    paragraph1: aboutData?.leaderParagraph1,
    paragraph2: aboutData?.leaderParagraph2,
    paragraph3: aboutData?.leaderParagraph3,
  }

  // Stats props
  const statsProps = {
    headerTitle: aboutData?.statsHeaderTitle,
    stats: aboutData?.stats,
  }

  // Schedule props (reusable from scheduleData / homepage global)
  const scheduleProps = {
    headerTitle: scheduleData?.scheduleHeaderTitle,
    videoBannerUrl: scheduleData?.scheduleVideoBannerUrl,
    weeklyServices: scheduleData?.weeklyServices,
    dailyPrograms: scheduleData?.dailyPrograms,
    joinLiveLink: scheduleData?.joinLiveLink,
    joinLiveLabel: scheduleData?.joinLiveLabel,
  }

  // Faith Resources props
  const faithProps = {
    headerTitle: aboutData?.resourcesHeaderTitle,
    description: aboutData?.resourcesDescription,
    storeLink: aboutData?.resourcesStoreLink,
    storeLabel: aboutData?.resourcesStoreLabel,
    bgImage: aboutData?.resourcesBgImage,
    bgFallback: aboutData?.resourcesBgFallback,
    fgImage: aboutData?.resourcesFgImage,
    fgFallback: aboutData?.resourcesFgFallback,
  }

  // Crusades props
  const crusadesProps = {
    headerTitle: aboutData?.crusadesHeaderTitle,
    crusadeImages: aboutData?.crusadeImages,
  }

  // International Presence props
  const presenceProps = {
    headerTitle: aboutData?.presenceHeaderTitle,
    subtitle: aboutData?.presenceSubtitle,
    row1Photos: aboutData?.presenceRow1,
    row2Photos: aboutData?.presenceRow2,
  }

  return (
    <main className="min-h-screen bg-white text-[#0b0c1c] antialiased selection:bg-[#efbf04]/30 selection:text-[#0b0c1c]">
      {/* Top Container: Clean Background spanning Hero & Vision/Mission */}
      <div className="bg-white relative w-full overflow-hidden">
        {/* 1. Hero / Overview */}
        <AboutHeroSection {...heroProps} />

        {/* 2. Our Identity / Vision & Mission */}
        <VisionMissionSection {...vmProps} />
      </div>

      {/* 3. Our Leaders */}
      <OurLeadersSection {...leadersProps} />

      {/* 4. Ministry Statistics */}
      <MinistryStatsSection {...statsProps} />

      {/* 5. Live Services Schedule */}
      <ScheduleSection {...scheduleProps} />

      {/* 6. Faith Resources (Books & Media) */}
      <FaithResourcesSection {...faithProps} />

      {/* 7. Largest Crusades */}
      <CrusadesSection {...crusadesProps} />

      {/* 8. International Presence */}
      <InternationalPresenceSection {...presenceProps} />
    </main>
  )
}
