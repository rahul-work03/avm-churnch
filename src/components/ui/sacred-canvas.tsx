'use client'

import React from 'react'

export interface SacredCanvasProps {
  children?: React.ReactNode
  className?: string
  tone?: 'warm-alabaster' | 'pure-light' | 'midnight-sapphire' | 'champagne-mist'
}

export const SacredCanvas: React.FC<SacredCanvasProps> = ({
  children,
  className = '',
  tone = 'pure-light',
}) => {
  // Clean, crisp neutral tone backgrounds without yellow neon hazes
  const toneBgClasses = {
    'warm-alabaster': 'bg-[#fcfbf9] text-slate-900',
    'pure-light': 'bg-white text-slate-900',
    'champagne-mist': 'bg-[#fafaf8] text-slate-900',
    'midnight-sapphire': 'bg-[#0c1a29] text-white',
  }

  return (
    <div className={`relative w-full overflow-hidden ${toneBgClasses[tone]} ${className}`}>
      {/* Relative Content Layer */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}
