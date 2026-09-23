import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-[65vh] w-full flex items-center justify-center bg-[#fdfbf3]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-[#003471]/20 border-t-[#efbf04] animate-spin" />
        <p className="font-poppins text-xs font-semibold text-[#003471] tracking-widest uppercase animate-pulse">
          Loading Ankur Narula Ministries...
        </p>
      </div>
    </div>
  )
}
