'use client'

import React from 'react'
import { ChevronDown, UploadCloud } from 'lucide-react'
import RichText from '@/components/RichText'

export interface FormFieldOption {
  label: string
  value: string
  id?: string
}

export const DEFAULT_COUNTRIES: FormFieldOption[] = [
  { label: 'India', value: 'India' },
  { label: 'United States', value: 'United States' },
  { label: 'United Kingdom', value: 'United Kingdom' },
  { label: 'Canada', value: 'Canada' },
  { label: 'Australia', value: 'Australia' },
  { label: 'United Arab Emirates', value: 'United Arab Emirates' },
  { label: 'New Zealand', value: 'New Zealand' },
  { label: 'Singapore', value: 'Singapore' },
  { label: 'Malaysia', value: 'Malaysia' },
  { label: 'Germany', value: 'Germany' },
  { label: 'France', value: 'France' },
  { label: 'Italy', value: 'Italy' },
  { label: 'Spain', value: 'Spain' },
  { label: 'Saudi Arabia', value: 'Saudi Arabia' },
  { label: 'Kuwait', value: 'Kuwait' },
  { label: 'Qatar', value: 'Qatar' },
  { label: 'Oman', value: 'Oman' },
  { label: 'Bahrain', value: 'Bahrain' },
  { label: 'South Africa', value: 'South Africa' },
  { label: 'Other Country', value: 'Other' },
]

export interface FormField {
  blockType: string
  name?: string
  label?: string
  defaultValue?: string
  required?: boolean
  width?: number
  options?: FormFieldOption[]
  message?: any
  id?: string
}

interface DynamicFormFieldProps {
  field: FormField
  value: any
  onChange: (name: string, value: any) => void
  onFileChange?: (name: string, file: File | null) => void
  error?: string
  variant?: 'dark-gold' | 'checkout' | 'light'
}

export const DynamicFormField: React.FC<DynamicFormFieldProps> = ({
  field,
  value,
  onChange,
  onFileChange,
  error,
  variant = 'dark-gold',
}) => {
  const { blockType, name, label, required, width = 100, options } = field

  if (!name && blockType !== 'message') return null

  // Styling variants
  const isCheckout = variant === 'checkout'
  const isLight = variant === 'light'
  
  const labelClass = isLight
    ? 'block font-poppins font-medium text-[#344054] text-sm mb-1.5'
    : isCheckout
    ? 'block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2'
    : 'block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2'

  const isMessageField = name === 'message' || label?.toLowerCase().includes('message')
  const isRequired = isMessageField ? false : Boolean(required)

  const requiredAsterisk = isRequired ? (
    <span className={isLight ? 'text-[#efbf04] ml-1 font-bold' : 'text-amber-400 ml-1'}>*</span>
  ) : null

  const inputClass = isLight
    ? `w-full bg-white border ${
        error ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-[#d0d5dd] focus:ring-2 focus:ring-[#efbf04] focus:border-transparent'
      } rounded-[8px] px-4 py-3 text-[#101828] text-base placeholder:text-[#667085] shadow-xs focus:outline-none transition`
    : isCheckout
    ? `w-full bg-slate-900/80 border ${
        error ? 'border-rose-500 ring-1 ring-rose-500/30' : 'border-white/10 hover:border-amber-500/30'
      } rounded-xl px-4 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all`
    : `w-full bg-slate-900/60 border ${
        error ? 'border-rose-500 ring-1 ring-rose-500/30' : 'border-amber-500/20 hover:border-amber-500/40'
      } rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-all`

  const textareaClass = isLight
    ? `w-full bg-white border ${
        error ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-[#d0d5dd] focus:ring-2 focus:ring-[#efbf04] focus:border-transparent'
      } rounded-[8px] px-4 py-3 text-[#101828] text-base placeholder:text-[#667085] shadow-xs focus:outline-none transition resize-y min-h-[120px]`
    : isCheckout
    ? `w-full bg-slate-900/80 border ${
        error ? 'border-rose-500 ring-1 ring-rose-500/30' : 'border-white/10 hover:border-amber-500/30'
      } rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all resize-y min-h-[100px]`
    : `w-full bg-slate-900/60 border ${
        error ? 'border-rose-500 ring-1 ring-rose-500/30' : 'border-amber-500/20 hover:border-amber-500/40'
      } rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-all resize-y min-h-[110px]`

  const selectClass = isLight
    ? `w-full bg-white border ${
        error ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-[#d0d5dd] focus:ring-2 focus:ring-[#efbf04] focus:border-transparent'
      } rounded-[8px] px-4 py-3 text-[#101828] text-base shadow-xs focus:outline-none transition appearance-none cursor-pointer pr-10`
    : isCheckout
    ? `w-full bg-slate-900 border ${
        error ? 'border-rose-500' : 'border-white/10'
      } rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all appearance-none cursor-pointer pr-10`
    : `w-full bg-slate-900 border ${
        error ? 'border-rose-500' : 'border-amber-500/20'
      } rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition-all appearance-none cursor-pointer pr-10`

  // Calculate grid col span
  let colSpanClass = 'col-span-12'
  if (width <= 33) {
    colSpanClass = 'col-span-12 md:col-span-4'
  } else if (width <= 50) {
    colSpanClass = 'col-span-12 md:col-span-6'
  } else if (width <= 67) {
    colSpanClass = 'col-span-12 md:col-span-8'
  }

  // 1. Message block (RichText or section note)
  if (blockType === 'message') {
    return (
      <div className="col-span-12 my-2 py-2 border-b border-white/10">
        {field.message ? (
          typeof field.message === 'string' ? (
            <p className="text-white/80 text-sm">{field.message}</p>
          ) : (
            <RichText data={field.message} enableGutter={false} className="text-white/80 text-sm" />
          )
        ) : null}
      </div>
    )
  }

  // 2. Textarea block
  if (blockType === 'textarea') {
    const isNotesOrMessage =
      isMessageField ||
      name === 'deliveryNotes' ||
      name === 'additionalComments' ||
      label?.toLowerCase().includes('note') ||
      label?.toLowerCase().includes('instruction')
    const charLimit = 500
    const currentLength = typeof value === 'string' ? value.length : 0

    return (
      <div className={colSpanClass}>
        <div className="flex items-center justify-between mb-1">
          {label && (
            <label htmlFor={name} className={labelClass}>
              {label}
              {requiredAsterisk}
              {isMessageField && (
                <span className={`text-xs ml-1.5 font-normal ${isLight ? 'text-slate-400' : 'text-white/50'}`}>
                  (Optional)
                </span>
              )}
            </label>
          )}
          {isNotesOrMessage && (
            <span className={`text-[11px] font-medium ${isLight ? 'text-slate-400' : 'text-white/40'}`}>
              {currentLength}/{charLimit} characters
            </span>
          )}
        </div>
        <textarea
          id={name}
          name={name}
          value={value ?? ''}
          required={isRequired}
          maxLength={charLimit}
          onChange={(e) => {
            const val = isNotesOrMessage ? e.target.value.slice(0, charLimit) : e.target.value
            onChange(name!, val)
          }}
          placeholder={label || ''}
          className={textareaClass}
        />
        {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
      </div>
    )
  }

  // 3. Select / State / Country block
  if (blockType === 'select' || blockType === 'state' || blockType === 'country') {
    const isCountry = blockType === 'country' || name === 'country'
    const effectiveOptions =
      options && options.length > 0
        ? options
        : isCountry
        ? DEFAULT_COUNTRIES
        : []
    const effectiveValue =
      value !== undefined && value !== ''
        ? value
        : isCountry
        ? (field.defaultValue || 'India')
        : ''

    return (
      <div className={colSpanClass}>
        {label && (
          <label htmlFor={name} className={labelClass}>
            {label}
            {requiredAsterisk}
          </label>
        )}
        <div className="relative">
          <select
            id={name}
            name={name}
            value={effectiveValue}
            required={isRequired}
            onChange={(e) => onChange(name!, e.target.value)}
            className={selectClass}
          >
            {!isCountry && (
              <option value="" disabled className={isLight ? 'text-slate-400' : 'bg-slate-900 text-slate-400'}>
                Select {label || 'an option'}
              </option>
            )}
            {effectiveOptions?.map((opt, i) => (
              <option
                key={opt.id || opt.value || i}
                value={opt.value}
                className={isLight ? 'text-[#101828]' : 'bg-slate-900 text-white'}
              >
                {opt.label || opt.value}
              </option>
            ))}
          </select>
          <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 ${isLight ? 'text-slate-400' : 'text-white/50'}`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
      </div>
    )
  }

  // 4. Checkbox block
  if (blockType === 'checkbox') {
    return (
      <div className={`${colSpanClass} flex items-center space-x-3 pt-2`}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={Boolean(value)}
          required={required}
          onChange={(e) => onChange(name!, e.target.checked)}
          className="w-4 h-4 rounded border-amber-500/30 text-amber-500 focus:ring-amber-400/40 bg-slate-900 cursor-pointer"
        />
        {label && (
          <label htmlFor={name} className="text-sm text-slate-300 cursor-pointer select-none">
            {label}
            {requiredAsterisk}
          </label>
        )}
        {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
      </div>
    )
  }

  // 5. Upload block
  if (blockType === 'upload') {
    return (
      <div className={colSpanClass}>
        {label && (
          <label htmlFor={name} className={labelClass}>
            {label}
            {requiredAsterisk}
          </label>
        )}
        <label
          htmlFor={name}
          className="flex flex-col items-center justify-center border-2 border-dashed border-amber-500/20 hover:border-amber-400/40 rounded-xl p-5 cursor-pointer bg-slate-900/40 transition-colors"
        >
          <UploadCloud className="w-8 h-8 text-amber-400 mb-2" />
          <span className="text-sm text-slate-300 font-medium">Click to select photo or document</span>
          <span className="text-xs text-slate-500 mt-1">PNG, JPG, PDF up to 10MB</span>
          <input
            type="file"
            id={name}
            name={name}
            required={required}
            onChange={(e) => {
              if (onFileChange && e.target.files && e.target.files[0]) {
                onFileChange(name!, e.target.files[0])
              }
            }}
            className="hidden"
          />
        </label>
        {value && typeof value === 'object' && 'name' in value && (
          <p className="text-xs text-amber-300 mt-2">Selected: {(value as File).name}</p>
        )}
        {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
      </div>
    )
  }

  // 6. Number block
  if (blockType === 'number') {
    return (
      <div className={colSpanClass}>
        {label && (
          <label htmlFor={name} className={labelClass}>
            {label}
            {requiredAsterisk}
          </label>
        )}
        <input
          type="number"
          id={name}
          name={name}
          value={value ?? ''}
          required={required}
          onChange={(e) => onChange(name!, e.target.value)}
          placeholder={label || ''}
          className={inputClass}
        />
        {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
      </div>
    )
  }

  // 7. Email block
  if (blockType === 'email') {
    return (
      <div className={colSpanClass}>
        {label && (
          <label htmlFor={name} className={labelClass}>
            {label}
            {requiredAsterisk}
          </label>
        )}
        <input
          type="email"
          id={name}
          name={name}
          inputMode="email"
          value={value ?? ''}
          required={required}
          onChange={(e) => onChange(name!, e.target.value)}
          placeholder={label || 'you@example.com'}
          className={inputClass}
        />
        {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
      </div>
    )
  }

  // 8. Default: Text block (with smart phone / pincode validation & length constraints)
  const isPhone = name === 'phone' || label?.toLowerCase().includes('phone') || label?.toLowerCase().includes('mobile')
  const isPincode = name === 'pincode' || label?.toLowerCase().includes('pincode') || label?.toLowerCase().includes('pin code')

  return (
    <div className={colSpanClass}>
      {label && (
        <label htmlFor={name} className={labelClass}>
          {label}
          {requiredAsterisk}
        </label>
      )}
      <input
        type={isPhone ? 'tel' : 'text'}
        id={name}
        name={name}
        inputMode={isPhone || isPincode ? 'numeric' : undefined}
        pattern={isPhone || isPincode ? '[0-9]*' : undefined}
        maxLength={isPhone ? 10 : isPincode ? 6 : undefined}
        value={value ?? ''}
        required={required}
        onChange={(e) => {
          if (isPhone) {
            onChange(name!, e.target.value.replace(/[^0-9]/g, '').slice(0, 10))
          } else if (isPincode) {
            onChange(name!, e.target.value.replace(/[^0-9]/g, '').slice(0, 6))
          } else {
            onChange(name!, e.target.value)
          }
        }}
        placeholder={
          isPhone
            ? '9876543210 (10 digits)'
            : isPincode
            ? '144001 (6 digits)'
            : label || ''
        }
        className={inputClass}
      />
      {isPhone && (
        <p className={`text-[11px] mt-1 ${isLight ? 'text-slate-400' : 'text-white/40'}`}>
          Must be exactly 10 digits
        </p>
      )}
      {isPincode && (
        <p className={`text-[11px] mt-1 ${isLight ? 'text-slate-400' : 'text-white/40'}`}>
          6-digit postal PIN code
        </p>
      )}
      {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
    </div>
  )
}

interface DynamicFormFieldsListProps {
  fields: FormField[]
  values: Record<string, any>
  onChange: (name: string, value: any) => void
  onFileChange?: (name: string, file: File | null) => void
  errors?: Record<string, string>
  variant?: 'dark-gold' | 'checkout' | 'light'
}

export const DynamicFormFieldsList: React.FC<DynamicFormFieldsListProps> = ({
  fields,
  values,
  onChange,
  onFileChange,
  errors = {},
  variant = 'dark-gold',
}) => {
  if (!fields || fields.length === 0) return null

  return (
    <div className="grid grid-cols-12 gap-4 sm:gap-5">
      {fields.map((field, index) => (
        <DynamicFormField
          key={field.id || field.name || index}
          field={field}
          value={field.name ? values[field.name] : undefined}
          onChange={onChange}
          onFileChange={onFileChange}
          error={field.name ? errors[field.name] : undefined}
          variant={variant}
        />
      ))}
    </div>
  )
}
