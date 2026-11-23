'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Search, Check } from 'lucide-react'

export interface CountryCodeItem {
  code: string
  iso: string
  name: string
  label: string
}

export const COUNTRY_CODES: CountryCodeItem[] = [
  { code: '+91', iso: 'IN', name: 'India', label: 'India (+91)' },
  { code: '+1', iso: 'US', name: 'United States', label: 'United States (+1)' },
  { code: '+44', iso: 'GB', name: 'United Kingdom', label: 'United Kingdom (+44)' },
  { code: '+1', iso: 'CA', name: 'Canada', label: 'Canada (+1)' },
  { code: '+971', iso: 'AE', name: 'United Arab Emirates', label: 'United Arab Emirates (+971)' },
  { code: '+61', iso: 'AU', name: 'Australia', label: 'Australia (+61)' },
  { code: '+64', iso: 'NZ', name: 'New Zealand', label: 'New Zealand (+64)' },
  { code: '+65', iso: 'SG', name: 'Singapore', label: 'Singapore (+65)' },
  { code: '+60', iso: 'MY', name: 'Malaysia', label: 'Malaysia (+60)' },
  { code: '+49', iso: 'DE', name: 'Germany', label: 'Germany (+49)' },
  { code: '+33', iso: 'FR', name: 'France', label: 'France (+33)' },
  { code: '+39', iso: 'IT', name: 'Italy', label: 'Italy (+39)' },
  { code: '+34', iso: 'ES', name: 'Spain', label: 'Spain (+34)' },
  { code: '+966', iso: 'SA', name: 'Saudi Arabia', label: 'Saudi Arabia (+966)' },
  { code: '+965', iso: 'KW', name: 'Kuwait', label: 'Kuwait (+965)' },
  { code: '+974', iso: 'QA', name: 'Qatar', label: 'Qatar (+974)' },
  { code: '+968', iso: 'OM', name: 'Oman', label: 'Oman (+968)' },
  { code: '+973', iso: 'BH', name: 'Bahrain', label: 'Bahrain (+973)' },
  { code: '+27', iso: 'ZA', name: 'South Africa', label: 'South Africa (+27)' },
  { code: '+977', iso: 'NP', name: 'Nepal', label: 'Nepal (+977)' },
  { code: '+94', iso: 'LK', name: 'Sri Lanka', label: 'Sri Lanka (+94)' },
  { code: '+880', iso: 'BD', name: 'Bangladesh', label: 'Bangladesh (+880)' },
  { code: '+92', iso: 'PK', name: 'Pakistan', label: 'Pakistan (+92)' },
  { code: '+63', iso: 'PH', name: 'Philippines', label: 'Philippines (+63)' },
  { code: '+353', iso: 'IE', name: 'Ireland', label: 'Ireland (+353)' },
  { code: '+31', iso: 'NL', name: 'Netherlands', label: 'Netherlands (+31)' },
  { code: '+41', iso: 'CH', name: 'Switzerland', label: 'Switzerland (+41)' },
  { code: '+46', iso: 'SE', name: 'Sweden', label: 'Sweden (+46)' },
  { code: '+47', iso: 'NO', name: 'Norway', label: 'Norway (+47)' },
  { code: '+45', iso: 'DK', name: 'Denmark', label: 'Denmark (+45)' },
]

export interface PhoneInputWithCountryProps {
  id?: string
  name?: string
  value?: string
  countryCode?: string
  onChange: (phone: string, countryCode?: string) => void
  onCountryCodeChange?: (countryCode: string) => void
  placeholder?: string
  required?: boolean
  error?: string
  variant?: 'light' | 'checkout' | 'dark-gold'
  className?: string
  disabled?: boolean
}

export const PhoneInputWithCountry: React.FC<PhoneInputWithCountryProps> = ({
  id = 'phone',
  name = 'phone',
  value = '',
  countryCode = '+91',
  onChange,
  onCountryCodeChange,
  placeholder,
  required = false,
  error,
  variant = 'light',
  className = '',
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Find active country item (defaults to India)
  const activeCountry =
    COUNTRY_CODES.find((c) => c.code === countryCode) || COUNTRY_CODES[0]

  const isIndia = activeCountry.code === '+91'
  const isLight = variant === 'light'
  const isCheckout = variant === 'checkout'

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
      setTimeout(() => searchInputRef.current?.focus(), 50)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  // Filter countries by search query
  const filteredCountries = COUNTRY_CODES.filter((c) => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    return (
      c.name.toLowerCase().includes(q) ||
      c.code.includes(q) ||
      c.iso.toLowerCase().includes(q)
    )
  })

  const handleSelectCountry = (country: CountryCodeItem) => {
    if (onCountryCodeChange) {
      onCountryCodeChange(country.code)
    }
    onChange(value, country.code)
    setIsOpen(false)
    setSearchQuery('')
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawDigits = e.target.value.replace(/[^0-9]/g, '')
    const maxDigits = isIndia ? 10 : 15
    const cleanDigits = rawDigits.slice(0, maxDigits)
    onChange(cleanDigits, activeCountry.code)
  }

  // Wrapper border & background styles
  const wrapperClass = isLight
    ? `relative flex items-center bg-white border ${
        error
          ? 'border-rose-500 ring-2 ring-rose-500/20'
          : 'border-[#d0d5dd] focus-within:ring-2 focus-within:ring-[#efbf04] focus-within:border-transparent'
      } rounded-[8px] shadow-xs transition ${className}`
    : isCheckout
    ? `relative flex items-center bg-slate-900/80 border ${
        error
          ? 'border-rose-500 ring-1 ring-rose-500/30'
          : 'border-white/10 hover:border-amber-500/30 focus-within:border-amber-400 focus-within:ring-1 focus-within:ring-amber-400/30'
      } rounded-xl transition-all ${className}`
    : `relative flex items-center bg-slate-900/60 border ${
        error
          ? 'border-rose-500 ring-1 ring-rose-500/30'
          : 'border-amber-500/20 hover:border-amber-500/40 focus-within:border-amber-400/60 focus-within:ring-1 focus-within:ring-amber-400/30'
      } rounded-xl transition-all ${className}`

  // Button styles for country code selector
  const buttonClass = isLight
    ? 'flex items-center gap-1.5 px-3 sm:px-3.5 py-3 text-sm font-semibold text-[#101828] border-r border-[#d0d5dd] hover:bg-slate-50 transition rounded-l-[8px] focus:outline-none cursor-pointer shrink-0'
    : isCheckout
    ? 'flex items-center gap-1.5 px-3 sm:px-3.5 py-3 text-sm font-semibold text-white border-r border-white/10 hover:bg-white/5 transition rounded-l-xl focus:outline-none cursor-pointer shrink-0'
    : 'flex items-center gap-1.5 px-3 sm:px-3.5 py-3 text-sm font-semibold text-white border-r border-white/10 hover:bg-white/5 transition rounded-l-xl focus:outline-none cursor-pointer shrink-0'

  // Input styles
  const inputClass = isLight
    ? 'flex-1 min-w-0 px-3 sm:px-4 py-3 text-[#101828] text-sm sm:text-base placeholder:text-[#667085] bg-transparent focus:outline-none font-medium'
    : isCheckout
    ? 'flex-1 min-w-0 px-3 sm:px-4 py-3 text-white placeholder-slate-500 text-sm bg-transparent focus:outline-none'
    : 'flex-1 min-w-0 px-3 sm:px-4 py-3 text-white placeholder-white/30 text-sm bg-transparent focus:outline-none'

  // Dropdown container styles
  const dropdownClass = isLight
    ? 'absolute top-full left-0 mt-1.5 w-72 max-h-72 bg-white border border-[#d0d5dd] rounded-xl shadow-2xl py-1.5 z-50 overflow-hidden flex flex-col animate-in fade-in slide-in-from-top-1 duration-150'
    : 'absolute top-full left-0 mt-1.5 w-72 max-h-72 bg-slate-900 border border-amber-500/30 rounded-xl shadow-2xl py-1.5 z-50 overflow-hidden flex flex-col animate-in fade-in slide-in-from-top-1 duration-150'

  const defaultPlaceholder = isIndia ? '9876543210' : 'Phone number'
  const resolvedPlaceholder = (
    placeholder ? placeholder.replace(/\s*\(10\s*digits\)/gi, '') : defaultPlaceholder
  ).trim()

  return (
    <div className="w-full">
      <div className={wrapperClass}>
        {/* Country Code Dropdown Trigger */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            disabled={disabled}
            onClick={() => setIsOpen((prev) => !prev)}
            className={buttonClass}
            title={`Country Code: ${activeCountry.name} (${activeCountry.code})`}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <span className="font-mono text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400">
              {activeCountry.iso}
            </span>
            <span className="text-xs sm:text-sm font-semibold">
              {activeCountry.code}
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                isOpen ? 'rotate-180 text-[#003471]' : ''
              }`}
            />
          </button>

          {/* Country Selection Menu */}
          {isOpen && (
            <div className={dropdownClass}>
              {/* Search Box */}
              <div
                className={`p-2 border-b ${
                  isLight ? 'border-slate-100 bg-slate-50' : 'border-white/10 bg-slate-800/50'
                }`}
              >
                <div className="relative flex items-center">
                  <Search
                    className={`w-3.5 h-3.5 absolute left-2.5 ${
                      isLight ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search country or code..."
                    className={`w-full text-xs pl-8 pr-2.5 py-1.5 rounded-lg outline-none transition ${
                      isLight
                        ? 'bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:border-[#003471]'
                        : 'bg-slate-900 border border-white/10 text-white placeholder:text-slate-500 focus:border-amber-400'
                    }`}
                  />
                </div>
              </div>

              {/* Countries List */}
              <div className="overflow-y-auto max-h-56 divide-y divide-slate-100/10">
                {filteredCountries.length === 0 ? (
                  <div className="py-4 text-center text-xs text-slate-400">
                    No countries found
                  </div>
                ) : (
                  filteredCountries.map((c) => {
                    const isSelected = c.code === activeCountry.code && c.iso === activeCountry.iso
                    return (
                      <button
                        key={`${c.iso}-${c.code}`}
                        type="button"
                        onClick={() => handleSelectCountry(c)}
                        className={`w-full text-left px-3 py-2 text-xs sm:text-sm flex items-center justify-between cursor-pointer transition ${
                          isLight
                            ? isSelected
                              ? 'bg-amber-50 text-[#003471] font-semibold'
                              : 'hover:bg-slate-50 text-slate-700'
                            : isSelected
                            ? 'bg-amber-500/20 text-amber-300 font-semibold'
                            : 'hover:bg-white/5 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate pr-2">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                              isLight
                                ? 'bg-slate-100 text-slate-600'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {c.iso}
                          </span>
                          <span className="truncate">{c.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span
                            className={`font-mono text-xs font-semibold ${
                              isLight ? 'text-slate-500' : 'text-slate-400'
                            }`}
                          >
                            {c.code}
                          </span>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-amber-500" />
                          )}
                        </div>
                      </button>
                    )
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {/* Phone Number Input */}
        <input
          type="tel"
          id={id}
          name={name}
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={isIndia ? 10 : 15}
          disabled={disabled}
          required={required}
          value={value}
          onChange={handlePhoneChange}
          placeholder={resolvedPlaceholder || defaultPlaceholder}
          className={inputClass}
        />
      </div>

      {/* Helper text */}
      <p
        className={`text-[11px] mt-1 ${
          isLight ? 'text-slate-500 font-poppins' : 'text-white/40'
        }`}
      >
        {isIndia
          ? 'Must be a 10-digit mobile number'
          : `International number for ${activeCountry.name} (${activeCountry.code})`}
      </p>

      {error && <p className="text-xs text-rose-500 mt-1">{error}</p>}
    </div>
  )
}

