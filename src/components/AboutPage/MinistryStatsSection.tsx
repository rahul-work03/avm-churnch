import React from 'react'

export const MinistryStatsSection: React.FC = () => {
  const stats = [
    {
      value: '500,000+',
      label: 'Weekly Attendees',
    },
    {
      value: '200+',
      label: 'Branches Worldwide',
    },
    {
      value: '2008',
      label: 'Year Established',
    },
  ]

  return (
    <section className="relative py-12 md:py-16 bg-[#122f4a] text-white overflow-hidden">
      {/* Section Header with Left & Right Gold Bars and Emblems spanning full width of viewport */}
      <div className="w-full flex items-center justify-between">
        <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] xl:h-[10px] bg-[#efbf04] rounded-r-full shadow-sm" />

        <div className="flex items-center justify-center gap-2 sm:gap-4 px-3 sm:px-6 md:px-8 flex-shrink min-w-0">
          <div
            className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 flex-shrink-0 bg-[#efbf04]"
            style={{
              maskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
              WebkitMaskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
          <h2 className="font-poppins font-semibold text-white text-xl sm:text-2xl md:text-[34px] tracking-tight text-center">
            Ministry Statistics
          </h2>
          <div
            className="relative w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 flex-shrink-0 bg-[#efbf04] scale-x-[-1]"
            style={{
              maskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
              WebkitMaskImage: "url('/figma-assets/68690249a71ebf2948a99aeb3014bd566cb1a309.png')",
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
        </div>

        <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] xl:h-[10px] bg-[#efbf04] rounded-l-full shadow-sm" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Stats Columns: Single Row with Vertical Dividers across Mobile and Desktop */}
        <div className="mt-8 sm:mt-12 max-w-[1040px] mx-auto grid grid-cols-3 gap-1 sm:gap-4 items-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center px-1 sm:px-4 ${
                idx !== stats.length - 1 ? 'border-r border-white/20' : ''
              }`}
            >
              <p className="font-poppins font-bold text-[#efbf04] text-base sm:text-2xl md:text-3xl lg:text-[40px] tracking-tight">
                {stat.value}
              </p>
              <p className="font-poppins text-slate-200 text-[11px] sm:text-sm md:text-lg lg:text-[22px] mt-1 sm:mt-2 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
