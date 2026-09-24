import React from 'react'
import { HeroSection } from './HeroSection'
import { ManOfGodSection } from './ManOfGodSection'
import { ActionCardsSection } from './ActionCardsSection'
import { ScheduleSection } from './ScheduleSection'
import { SocialSection } from './SocialSection'
import { SermonsSection } from './SermonsSection'

export interface ChurchHomepageProps {
  homepageData?: any
  sermonsData?: any[]
}

export const ChurchHomepage: React.FC<ChurchHomepageProps> = ({
  homepageData,
  sermonsData,
}) => {
  // Hero props
  const heroProps = {
    headline1: homepageData?.heroHeadline1,
    headline2: homepageData?.heroHeadline2,
    description: homepageData?.heroDescription,
    videoDesktop: homepageData?.heroVideoDesktop,
    videoDesktopFallback: homepageData?.heroVideoDesktopFallback || '/homepage_hero.mp4',
    videoMobile: homepageData?.heroVideoMobile,
    videoMobileFallback: homepageData?.heroVideoMobileFallback || '/homepage_hero_mobile.mp4',
    bannerImage: homepageData?.heroBannerImage,
    bannerImageFallback: homepageData?.heroBannerFallback,
    bannerAlt: homepageData?.heroBannerAlt,
  }

  // Man of God props
  const mogProps = {
    headerTitle: homepageData?.mogHeaderTitle,
    badgeTitle: homepageData?.mogBadgeTitle,
    slides: homepageData?.mogSlides,
    leaderName: homepageData?.leaderName,
    leaderRole: homepageData?.leaderRole,
    leaderBio: homepageData?.leaderBio,
    knowMoreLink: homepageData?.knowMoreLink,
    knowMoreLabel: homepageData?.knowMoreLabel,
  }

  // Action cards props
  const actionCardsProps = {
    cards: homepageData?.actionCards?.map((c: any) => ({
      id: c.id,
      title: c.title,
      image: c.image,
      imageFallback: c.imageFallback,
      href: c.href,
      buttonVariant: c.buttonVariant,
    })),
  }

  // Schedule props
  const scheduleProps = {
    headerTitle: homepageData?.scheduleHeaderTitle,
    videoBannerUrl: homepageData?.scheduleVideoBannerUrl,
    weeklyServices: homepageData?.weeklyServices,
    dailyPrograms: homepageData?.dailyPrograms,
    joinLiveLink: homepageData?.joinLiveLink,
    joinLiveLabel: homepageData?.joinLiveLabel,
  }

  // Social props
  const socialProps = {
    headerTitle: homepageData?.socialHeaderTitle,
    subtitle: homepageData?.socialSubtitle,
    platforms: homepageData?.socialPlatforms,
  }

  // Sermons props
  const dynamicSermonList =
    sermonsData && sermonsData.length > 0
      ? sermonsData.map((s: any) => ({
          id: s.id,
          title: s.title,
          thumbnail: s.thumbnail,
          thumbnailFallback: s.customThumbnailUrl,
          youtubeUrl: s.youtubeUrl,
        }))
      : undefined

  const sermonsProps = {
    headerTitle: homepageData?.sermonsHeaderTitle,
    featuredBannerImage: homepageData?.sermonsFeaturedVideoImage,
    featuredBannerFallback: homepageData?.sermonsFeaturedVideoFallback,
    featuredBannerAlt: homepageData?.sermonsFeaturedVideoAlt,
    featuredBannerUrl: homepageData?.sermonsFeaturedVideoUrl,
    sermons: dynamicSermonList,
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#efbf04] selection:text-black">
      {/* Full-Screen Video Hero Section */}
      <HeroSection {...heroProps} />

      {/* The Church of Signs & Wonders / Man of God Showcase */}
      <ManOfGodSection {...mogProps} />

      {/* Action Cards: Prayer Request, Offerings, Zoom Lay Hand */}
      <ActionCardsSection {...actionCardsProps} />

      {/* Live Prayer & Worship Schedule */}
      <ScheduleSection {...scheduleProps} />

      {/* Our Social Media Platforms */}
      <SocialSection {...socialProps} />

      {/* Watch Our Latest Sermons */}
      <SermonsSection {...sermonsProps} />
    </main>
  )
}
