'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { TestimonyDetailModal, TestimonyDetail } from './TestimonyDetailModal'

const testimonies: TestimonyDetail[] = [
  {
    id: 'testimony-1',
    person: 'Sister Randeep',
    title: 'Miraculous Healing from Total Paralysis',
    summary:
      'Randeep was completely healed from paralysis after receiving Lay Hand prayer in the 20 April 2025 Easter Meeting by the grace of God.',
    fullStory:
      'Sister Randeep had been suffering from severe body paralysis and had been bedridden for months with no medical hope of walking again. During the Holy Easter Gathering at Prayer Mountain, Apostle Dr. Ankur Yoseph Narula prayed over the sick with the laying on of hands.\n\nImmediately as the prayer was made in the mighty Name of Jesus Christ, divine sensation and power rushed through her limbs. She stood up instantly, walked across the stage without support, and was completely made whole by God’s supernatural healing power!',
    image: '/figma-assets/408cbe685022eb94200ab9e84237419210301602.png',
    date: '20 April 2025',
    location: 'Prayer Mountain, Jalandhar',
  },
  {
    id: 'testimony-2',
    person: 'Sister Manjit Kaur',
    title: 'Deliverance from Severe Lung Affliction',
    summary:
      'Randeep was completely healed from paralysis after receiving Lay Hand prayer in the 20 April 2025 Easter Meeting by the grace of God.',
    fullStory:
      'Suffering from severe respiratory failure, advanced pulmonary fluid accumulation, and chronic weakness, Sister Manjit had to be on constant medical assistance and bed rest.\n\nDuring intense 24/7 intercession at the Prayer Mountain altar, she received the Word of deliverance. Medical re-examinations showed lungs completely clear, with full oxygen capacity restored and zero fluid residue. Glory to God alone!',
    image: '/figma-assets/29c9c3a1ebaf7d9b300e03952a2750d7b8131f18.png',
    date: '12 January 2025',
    location: 'Prayer Mountain Sanctuary',
  },
]

export const TestimoniesSection: React.FC = () => {
  const [selectedTestimony, setSelectedTestimony] = useState<TestimonyDetail | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = (t: TestimonyDetail) => {
    setSelectedTestimony(t)
    setModalOpen(true)
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white overflow-hidden select-none" data-node-id="279:2081">
      {/* Dark Navy Section Header Bar (Figma 279:2100, 279:2103, 279:2106, 279:2108) */}
      <div className="bg-[#122f4a] py-4 sm:py-5 md:py-6 text-white relative shadow-sm mb-8 sm:mb-12">
        <div className="w-full flex items-center justify-between">
          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-r-full flex-shrink-0" />

          <h2 className="font-poppins font-semibold text-white text-sm sm:text-2xl md:text-[28px] text-center px-3 sm:px-8 md:px-12 tracking-wide uppercase flex-shrink min-w-0">
            TESTIMONIES OF PRAYER MOUTAIN
          </h2>

          <div className="w-[48px] sm:w-[140px] md:w-[240px] lg:w-[323px] h-[6px] sm:h-[12px] md:h-[18px] lg:h-[20px] bg-[#efbf04] rounded-l-full flex-shrink-0" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Cards Grid (Figma 279:2156 - 279:2167) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-[1160px] mx-auto">
          {testimonies.map((item) => (
            <div
              key={item.id}
              className="bg-[#122f4a] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-xl flex flex-col sm:flex-row items-center sm:items-stretch group border border-white/5"
            >
              {/* Left Photo */}
              <div className="relative w-full sm:w-[270px] h-[220px] sm:h-[259px] bg-slate-900 shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.person}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Right Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 text-white text-left">
                <div>
                  <p className="font-poppins text-white text-sm sm:text-[16px] leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                {/* Read Full Testimony Button (Figma 279:2163: 180px x 49px rounded-[8px] bg-[#efbf04]) */}
                <div className="mt-auto">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(item)}
                    className="w-[180px] h-[49px] bg-[#efbf04] hover:bg-[#dfaf00] text-[#003471] font-poppins font-semibold text-xs sm:text-[13px] rounded-[8px] shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-95 cursor-pointer flex items-center justify-center uppercase tracking-wider"
                  >
                    READ FULL TESTIMONY
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Testimony Detail Modal */}
      <TestimonyDetailModal
        testimony={selectedTestimony}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  )
}
