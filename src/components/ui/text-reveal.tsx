'use client'

import React, { useRef } from 'react'
import { motion, useInView, type HTMLMotionProps, type Variants } from 'framer-motion'

interface BaseTextAnimationProps {
  children: string | React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
}

const motionComponents = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  p: motion.p,
  span: motion.span,
  div: motion.div,
} as const

/**
 * TextWordReveal: Splits text into words and reveals them one by one
 * with a subtle slide-up, scale, and fade.
 */
interface TextWordRevealProps extends BaseTextAnimationProps {
  staggerDelay?: number
  distance?: number
}

export const TextWordReveal: React.FC<TextWordRevealProps> = ({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.035,
  duration = 0.45,
  distance = 14,
  once = true,
  as: Component = 'div',
}) => {
  const MotionComponent = motionComponents[Component] || motion.div

  // If children is plain string, split by words
  if (typeof children === 'string') {
    const words = children.split(' ')

    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    }

    const wordVariants: Variants = {
      hidden: {
        opacity: 0,
        y: distance,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }

    return (
      <MotionComponent
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once, margin: '0px' }}
        className={className}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block whitespace-pre"
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        ))}
      </MotionComponent>
    )
  }

  // Fallback for complex children (React nodes)
  const fallbackVariants: Variants = {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <MotionComponent
      variants={fallbackVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '0px' }}
      className={className}
    >
      {children}
    </MotionComponent>
  )
}

/**
 * BlurTextReveal: Words or sentences fade in smoothly with subtle upward motion.
 * Perfect for subtitles, paragraphs, and bios.
 */
interface BlurTextRevealProps extends BaseTextAnimationProps {
  blurAmount?: number
  distance?: number
}

export const BlurTextReveal: React.FC<BlurTextRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  distance = 12,
  once = true,
  as: Component = 'p',
}) => {
  const MotionComponent = motionComponents[Component] || motion.p

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: distance,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '0px' }}
      className={className}
    >
      {children}
    </MotionComponent>
  )
}

/**
 * MaskedHeading: Clips the text and slides it up from below the baseline.
 */
interface MaskedHeadingProps extends BaseTextAnimationProps {
  distance?: number
}

export const MaskedHeading: React.FC<MaskedHeadingProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  distance = 24,
  once = true,
  as: Component = 'div',
}) => {
  const MotionComponent = motionComponents[Component] || motion.div

  const childVariants: Variants = {
    hidden: {
      y: distance,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className="overflow-hidden">
      <MotionComponent
        variants={childVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once, margin: '0px' }}
        className={className}
      >
        {children}
      </MotionComponent>
    </div>
  )
}

/**
 * GoldBarReveal: Decorative gold bar that smoothly expands horizontally on scroll.
 */
interface GoldBarRevealProps extends HTMLMotionProps<'div'> {
  direction?: 'left' | 'right' | 'center'
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export const GoldBarReveal: React.FC<GoldBarRevealProps> = ({
  direction = 'left',
  delay = 0.1,
  duration = 0.6,
  className = '',
  style,
  ...props
}) => {
  const originClass =
    direction === 'left' ? 'origin-left' : direction === 'right' ? 'origin-right' : 'origin-center'

  return (
    <div
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        ...style,
      }}
      className={`h-[6px] sm:h-[8px] bg-[#efbf04] animate-gold-bar ${originClass} ${className}`}
      {...(props as any)}
    />
  )
}




