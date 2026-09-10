'use client'

import React from 'react'
import Image from 'next/image'
import { X, Heart, Calendar, MapPin } from 'lucide-react'

export interface TestimonyDetail {
  id: string
  person: string
  title: string
  summary: string
  fullStory: string
  image: string
  date: string
  location: string
}

interface TestimonyDetailModalProps {
  testimony: TestimonyDetail | null
  isOpen: boolean
  onClose: () => void
}

export const TestimonyDetailModal: React.FC<TestimonyDetailModalProps> = ({
  testimony,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !testimony) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="bg-[#122f4a] p-5 sm:p-6 text-white flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#efbf04]/20 flex items-center justify-center text-[#efbf04]">
              <Heart className="w-5 h-5 fill-[#efbf04]" />
            </div>
            <div>
              <h3 className="font-poppins font-bold text-lg sm:text-xl text-white">
                {testimony.person}
              </h3>
              <p className="font-poppins text-xs sm:text-sm text-[#efbf04]">
                Miracle &amp; Healing Testimony
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Photo & Metadata */}
          <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-2xl overflow-hidden shadow-md shrink-0 bg-slate-900 border border-slate-200">
              <Image
                src={testimony.image}
                alt={testimony.person}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1 space-y-3 text-center sm:text-left">
              <h4 className="font-poppins font-bold text-[#003471] text-xl">
                {testimony.title}
              </h4>
              <p className="font-poppins text-slate-700 text-sm leading-relaxed">
                {testimony.summary}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-500 font-poppins">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#efbf04]" />
                  <span>{testimony.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#efbf04]" />
                  <span>{testimony.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Narrative Text */}
          <div className="border-t border-slate-100 pt-5">
            <h5 className="font-poppins font-semibold text-[#122f4a] text-sm uppercase tracking-wider mb-2">
              Full Testimony
            </h5>
            <p className="font-poppins text-[#333333] text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {testimony.fullStory}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-[#122f4a] hover:bg-[#1c4266] text-white font-poppins text-sm font-medium rounded-full transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
