'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MinistryDetailModal, MinistryDetail } from './MinistryDetailModal'

const ministryData: MinistryDetail[] = [
  {
    id: 'prayer-mountain',
    title: 'PRAYER MOUNTAIN',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    image: '/figma-assets/36eda1c5a6d082acb6e73e8881c8595815a11a60.png',
    fullDescription:
      'Prayer Mountain is a dedicated sanctuary of spiritual solitude established by Apostle Dr. Ankur Yoseph Narula. Set amidst serene nature, it provides believers with an atmosphere wholly devoted to uninterrupted communion with God, intercession, extended fasting, and spiritual rejuvenation.',
    features: [
      '24/7 dedicated prayer cabins and quiet meditation groves',
      'Regular continuous chain fasting and intercession retreats',
      'Deep spiritual renewal and deliverance sessions led by ministers',
      'Atmosphere charged with constant worship and God’s presence',
    ],
    timings: 'Open Daily: 6:00 AM – 9:00 PM',
    location: 'Near Head Church Complex, Village Khambra, Jalandhar, Punjab',
  },
  {
    id: 'prayer-house',
    title: 'PRAYER HOUSE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    image: '/figma-assets/55fa90036842a75181669f3a6aec9e0738913aee.png',
    fullDescription:
      'The ANM Prayer House is a central prayer fortress receiving hundreds of prayer requests daily from believers across the world. An active team of anointed prayer warriors intercedes relentlessly around the clock for healings, family breakthroughs, salvation, and national revival.',
    features: [
      '24/7 Global Prayer Helpline and counseling support',
      'Immediate intercession for urgent sickness and miracle needs',
      'Daily live prayer and agreement fellowships',
      'Specialized intercession teams for youth, families, and overseas believers',
    ],
    timings: '24 Hours / 7 Days Live Prayer Lines',
    location: 'Central Ministry Office, Jalandhar, Punjab',
  },
  {
    id: 'bible-college',
    title: 'BIBLE COLLEGE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    image: '/figma-assets/94a1faeb119e4d3406e3e61f9268b121e7b5496f.png',
    fullDescription:
      'The Bible College is established to equip, train, and send forth men and women of God grounded in biblical sound doctrine, Holy Spirit empowerment, leadership skills, and missionary zeal to plant churches and preach the Gospel of the Kingdom globally.',
    features: [
      'Comprehensive theological curriculum and biblical studies',
      'Practical ministerial training and crusade evangelism',
      'Discipleship under seasoned church leaders and pastors',
      'Certification and ordination programs for church workers',
    ],
    timings: 'Academic Batches: Morning & Evening Sessions',
    location: 'ANM Educational Campus, Jalandhar, Punjab',
  },
  {
    id: 'sophia-institute',
    title: 'SOPHIA INSTITUTE',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    image: '/figma-assets/38c0e2d311bde0d312937a97c60e92a2e2d34116.png',
    fullDescription:
      'Sophia Institute provides holistic education and skill development with Christian values, empowering young students and leaders with academic excellence, moral integrity, and professional skills to excel in modern careers and community leadership.',
    features: [
      'Modern digital classrooms and technology laboratories',
      'Character development, leadership, and ethical foundations',
      'Career counseling, higher education pathways, and workshops',
      'Scholarships and support for underprivileged youth',
    ],
    timings: 'Monday to Saturday: 8:30 AM – 4:30 PM',
    location: 'Sophia Institute Campus, Jalandhar, Punjab',
  },
  {
    id: 'church-branches',
    title: 'CHURCH BRANCHES',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    image: '/figma-assets/9969ab6a5c61f58502b9d0ffdb0cac71eff778d2.png',
    fullDescription:
      'With over 200+ church branches established across Punjab, various states across India, and international fellowship hubs, The Church of Signs and Wonders connects millions of believers locally for weekly live broadcasts, fellowship, and ministry outreach.',
    features: [
      'Live synchronized streaming of Head Church services',
      'Local pastors providing counseling, communion, and prayer',
      'Community outreach, food distribution, and welfare programs',
      'Weekly branch prayer meetings and youth fellowships',
    ],
    timings: 'Thursday & Sunday Live Services + Midweek Meetings',
    location: '200+ Branch Locations across India & Abroad',
  },
  {
    id: 'sunday-school',
    title: 'SUNDAY SCHOOL',
    subtitle: 'A peaceful place for prayer, fasting, and spiritual retreat',
    image: '/figma-assets/dcd3dfff5990d32ed5316ae442144e3f269cdb3e.png',
    fullDescription:
      'The ANM Sunday School ministry nurtures children in the Word of God from an early age through joyful worship, scripture memorization, interactive Bible lessons, Christian drama, and creative activities, raising a God-fearing next generation.',
    features: [
      'Age-appropriate curriculum from toddlers to young teens',
      'Passionate and vetted teachers dedicated to child ministry',
      'Annual children’s revival camps and musical performances',
      'Foundational moral and spiritual guidance in a loving environment',
    ],
    timings: 'Every Thursday & Sunday during Main Service Times',
    location: 'Children’s Ministry Wing, Head Church & All Branches',
  },
]

export const MinistriesOverviewSection: React.FC = () => {
  const [selectedMinistry, setSelectedMinistry] = useState<MinistryDetail | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenDetail = (ministry: MinistryDetail) => {
    setSelectedMinistry(ministry)
    setModalOpen(true)
  }

  return (
    <section className="relative py-10 sm:py-16 md:py-24 bg-transparent overflow-hidden" data-node-id="277:1632">
      {/* Section Header with Golden Accent Lines and Emblems (Figma 277:1646, 277:1647, 277:1648) */}
      <div className="w-full flex items-center justify-between mb-8 sm:mb-12 md:mb-16">
        {/* Left Gold Bar */}
        <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[5px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-r-full shadow-sm flex-shrink-0" />

        {/* Center Title with Golden Emblems */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 px-2 sm:px-6 flex-shrink min-w-0">
          <div
            className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 bg-[#efbf04] flex-shrink-0"
            style={{
              maskImage: "url('/figma-assets/fef4ed678da919c6b52b3c402e3d3f41e5084014.png')",
              WebkitMaskImage: "url('/figma-assets/fef4ed678da919c6b52b3c402e3d3f41e5084014.png')",
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />

          <h2 className="font-poppins font-semibold text-[#003471] text-base sm:text-2xl md:text-[34px] tracking-tight text-center whitespace-nowrap">
            Ministries of Over View
          </h2>

          <div
            className="relative w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 bg-[#efbf04] flex-shrink-0 scale-x-[-1]"
            style={{
              maskImage: "url('/figma-assets/fef4ed678da919c6b52b3c402e3d3f41e5084014.png')",
              WebkitMaskImage: "url('/figma-assets/fef4ed678da919c6b52b3c402e3d3f41e5084014.png')",
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
        </div>

        {/* Right Gold Bar */}
        <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[5px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-l-full shadow-sm flex-shrink-0" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 6-Card Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop (Figma 277:1649 - 277:1672) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1140px] mx-auto justify-items-center">
          {ministryData.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[380px] md:max-w-[367px] h-auto md:h-[451px] bg-white border border-[#eee] rounded-[20px] p-5 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 group"
            >
              {/* Card Image */}
              <div className="relative w-full h-[220px] sm:h-[241px] rounded-[12px] overflow-hidden bg-slate-100 mb-4 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="font-poppins font-bold text-[#003471] text-base sm:text-[18px] tracking-wide mb-1.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-poppins text-[#333333] text-xs sm:text-[16px] leading-relaxed mb-4 max-w-[290px] line-clamp-2">
                {item.subtitle}
              </p>

              {/* Learn More Button (Figma 277:1787: 138px x 44px rounded-[100px]) */}
              <div className="mt-auto pt-1">
                <button
                  type="button"
                  onClick={() => handleOpenDetail(item)}
                  className="w-[138px] h-[44px] bg-[#efbf04] hover:bg-[#dfaf00] text-white font-poppins font-semibold text-xs sm:text-[14px] rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-95 cursor-pointer flex items-center justify-center"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <MinistryDetailModal
        ministry={selectedMinistry}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  )
}
