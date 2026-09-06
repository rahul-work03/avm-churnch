import React from 'react'

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="relative pt-4 pb-14 md:pb-24 bg-transparent" data-node-id="218:2037">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Identity & Vision Header Badge */}
        <div className="relative max-w-[754px] mx-auto bg-[#122f4a] rounded-[18px] sm:rounded-[44px] py-3.5 sm:py-6 px-0 text-center text-white shadow-xl -mb-6 sm:-mb-14 z-20 overflow-hidden flex items-center justify-between">
          {/* Decorative Gold Side Bars reaching the very edges */}
          <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-r-full pointer-events-none" />

          <div className="px-4 sm:px-8 flex-shrink min-w-0">
            <p className="font-poppins font-medium text-slate-300 text-xs sm:text-xl md:text-2xl">
              Our Identity
            </p>
            <h2 className="font-poppins font-semibold text-white text-sm sm:text-2xl md:text-[32px] mt-0.5 sm:mt-1">
              Our Vision and Our mission
            </h2>
          </div>

          <div className="flex-1 h-[4px] sm:h-[6px] md:h-[8px] bg-[#efbf04] rounded-l-full pointer-events-none" />
        </div>

        {/* Mobile View: 2 Distinct Stacked Cards (Figma nodes 218:2077 & 218:2078) */}
        <div className="md:hidden space-y-3 pt-10">
          {/* Card 1: Our Vision */}
          <div className="bg-white border border-[#e7e7e7] rounded-[18px] p-5 shadow-sm text-left">
            <h3 className="font-poppins font-semibold text-[#003471] text-[18px]">
              Our Vision
            </h3>
            <p className="font-poppins text-[#333333] text-[12px] leading-relaxed mt-2">
              &ldquo;Not one soul would be lost&rdquo; &mdash; The ministry aims to see a global revival of faith, hope, and love
              through the transformative power of Jesus Christ.
            </p>
          </div>

          {/* Card 2: Our Mission */}
          <div className="bg-white border border-[#e7e7e7] rounded-[18px] p-5 shadow-sm text-left">
            <h3 className="font-poppins font-semibold text-[#003471] text-[18px]">
              Our Mission
            </h3>
            <p className="font-poppins text-[#333333] text-[12px] leading-relaxed mt-2">
              Spreading the Gospel of Jesus Christ. Leading people into a personal relationship with God. Demonstrating His
              power through healing, deliverance, and transformation.
            </p>
          </div>
        </div>

        {/* Desktop View: Unified 2-Column Vision & Mission Card (Figma node 218:2338) */}
        <div className="hidden md:block bg-white rounded-[44px] shadow-2xl pt-24 pb-14 px-12 md:px-16 border border-slate-100 relative z-10">
          <div className="grid grid-cols-2 gap-12 relative">
            {/* Column 1: Our Vision */}
            <div className="text-left flex flex-col justify-start">
              <h3 className="font-poppins font-semibold text-[#003471] text-[32px] tracking-tight">
                Our Vision
              </h3>
              <p className="font-poppins text-[#333333] text-[17px] leading-relaxed mt-4">
                &ldquo;Not one soul would be lost&rdquo; &mdash; The ministry aims to see a global revival of faith, hope, and love
                through the transformative power of Jesus Christ.
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="absolute left-1/2 top-4 bottom-4 w-px bg-slate-200 -translate-x-1/2" />

            {/* Column 2: Our Mission */}
            <div className="text-left flex flex-col justify-start">
              <h3 className="font-poppins font-semibold text-[#003471] text-[32px] tracking-tight">
                Our Mission
              </h3>
              <p className="font-poppins text-[#333333] text-[17px] leading-relaxed mt-4">
                Spreading the Gospel of Jesus Christ. Leading people into a personal relationship with God. Demonstrating His power through healing, deliverance, and transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
