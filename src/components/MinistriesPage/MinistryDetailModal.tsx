'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { X, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

export interface MinistryDetail {
  id: string
  title: string
  subtitle: string
  image: string
  fullDescription: string
  features: string[]
  timings?: string
  location?: string
  contact?: string
}

interface MinistryDetailModalProps {
  ministry: MinistryDetail | null
  isOpen: boolean
  onClose: () => void
}

export const MinistryDetailModal: React.FC<MinistryDetailModalProps> = ({
  ministry,
  isOpen,
  onClose,
}) => {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !ministry) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 border border-slate-100 animate-in zoom-in-95 fade-in duration-200 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#efbf04]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Featured Image */}
        <div className="relative w-full h-56 sm:h-64 bg-slate-900">
          <Image
            src={ministry.image}
            alt={ministry.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block bg-[#efbf04] text-[#0b0c1c] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-1">
              Ministry Wing
            </span>
            <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white">
              {ministry.title}
            </h3>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <p className="font-poppins font-medium text-amber-800 text-sm sm:text-base italic mb-3">
              &ldquo;{ministry.subtitle}&rdquo;
            </p>
            <p className="font-poppins text-slate-700 text-sm sm:text-base leading-relaxed">
              {ministry.fullDescription}
            </p>
          </div>

          {/* Key Features / Highlights */}
          {ministry.features && ministry.features.length > 0 && (
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100">
              <h4 className="font-poppins font-semibold text-slate-900 text-sm mb-3">
                Key Highlights & Objectives
              </h4>
              <ul className="space-y-2.5">
                {ministry.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-poppins">
                    <CheckCircle2 className="w-4 h-4 text-[#003471] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Timings & Location details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {ministry.timings && (
              <div className="flex items-center gap-3 bg-amber-50/70 p-3.5 rounded-xl border border-amber-100/60">
                <Calendar className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <div>
                  <p className="text-xs text-amber-900 font-medium font-poppins">Schedule</p>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold font-poppins">{ministry.timings}</p>
                </div>
              </div>
            )}
            {ministry.location && (
              <div className="flex items-center gap-3 bg-blue-50/70 p-3.5 rounded-xl border border-blue-100/60">
                <MapPin className="w-5 h-5 text-[#003471] flex-shrink-0" />
                <div>
                  <p className="text-xs text-[#003471] font-medium font-poppins">Location</p>
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold font-poppins">{ministry.location}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-poppins">
            Ankur Narula Ministries
          </span>
          <button
            onClick={onClose}
            type="button"
            className="bg-[#003471] text-white text-xs sm:text-sm font-poppins font-medium px-5 py-2.5 rounded-full hover:bg-[#002652] transition cursor-pointer shadow-sm"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  )
}
