'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export interface CountUpProps {
  value: string | number
  duration?: number
  delay?: number
  className?: string
  start?: number
}

function parseStatValue(raw: string | number) {
  const str = String(raw).trim()
  
  // Match prefix, number (with optional commas/decimals), and suffix
  // e.g. "$500,000+" -> prefix: "$", num: 500000, hasCommas: true, suffix: "+"
  // e.g. "2008" -> prefix: "", num: 2008, hasCommas: false, suffix: ""
  const match = str.match(/^([^\d.]*)(\d[\d,.]*)(.*)$/)
  
  if (!match) {
    return {
      prefix: '',
      target: 0,
      hasCommas: false,
      decimals: 0,
      suffix: str,
      isNumeric: false,
    }
  }

  const prefix = match[1] || ''
  const numStr = match[2]
  const suffix = match[3] || ''
  
  const hasCommas = numStr.includes(',')
  const cleanNumStr = numStr.replace(/,/g, '')
  const target = parseFloat(cleanNumStr) || 0
  const decimals = cleanNumStr.includes('.') ? cleanNumStr.split('.')[1].length : 0

  return {
    prefix,
    target,
    hasCommas,
    decimals,
    suffix,
    isNumeric: !isNaN(target),
  }
}

function formatNumber(num: number, hasCommas: boolean, decimals: number): string {
  const fixed = decimals > 0 ? num.toFixed(decimals) : Math.round(num).toString()
  if (!hasCommas) return fixed
  
  const parts = fixed.split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export const CountUp: React.FC<CountUpProps> = ({
  value,
  duration = 2.0,
  delay = 0,
  className = '',
  start,
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  
  const parsed = React.useMemo(() => parseStatValue(value), [value])
  
  // Determine start value: if target is a year like 2008, starting from (target - 50) or 0
  const initialStart = start ?? (parsed.target > 1900 && parsed.target < 2100 ? parsed.target - 40 : 0)
  
  const [displayValue, setDisplayValue] = useState<string>(() => {
    if (!parsed.isNumeric) return String(value)
    return `${parsed.prefix}${formatNumber(initialStart, parsed.hasCommas, parsed.decimals)}${parsed.suffix}`
  })

  useEffect(() => {
    if (!isInView || !parsed.isNumeric) return

    let startTime: number | null = null
    let animationFrameId: number

    // Delay start if requested
    const timer = setTimeout(() => {
      const startNum = initialStart
      const endNum = parsed.target
      const totalDurationMs = duration * 1000

      const step = (now: number) => {
        if (!startTime) startTime = now
        const elapsed = now - startTime
        const progress = Math.min(elapsed / totalDurationMs, 1)

        // Ease out expo / cubic
        const ease = 1 - Math.pow(1 - progress, 3.5)
        const current = startNum + (endNum - startNum) * ease

        setDisplayValue(
          `${parsed.prefix}${formatNumber(current, parsed.hasCommas, parsed.decimals)}${parsed.suffix}`
        )

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step)
        } else {
          setDisplayValue(
            `${parsed.prefix}${formatNumber(endNum, parsed.hasCommas, parsed.decimals)}${parsed.suffix}`
          )
        }
      }

      animationFrameId = requestAnimationFrame(step)
    }, delay * 1000)

    return () => {
      clearTimeout(timer)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [isInView, parsed, duration, delay, initialStart])

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}
