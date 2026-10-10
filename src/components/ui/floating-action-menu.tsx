'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export type FloatingActionMenuOption = {
  label: string
  onClick: () => void
  Icon?: React.ReactNode
}

export type FloatingActionMenuProps = {
  options: FloatingActionMenuOption[]
  className?: string
}

export const FloatingActionMenu: React.FC<FloatingActionMenuProps> = ({
  options,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={cn('relative inline-flex items-center', className)}>
      <Button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle actions menu"
        className="w-10 h-10 rounded-full bg-[#11111198] hover:bg-[#111111d1] text-white shadow-[0_0_20px_rgba(0,0,0,0.2)] p-0 flex items-center justify-center cursor-pointer"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        >
          <Plus className="w-5 h-5" />
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10, y: 10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: 10, y: 10, filter: 'blur(10px)' }}
            transition={{
              duration: 0.4,
              type: 'spring',
              stiffness: 300,
              damping: 20,
              delay: 0.05,
            }}
            className="absolute bottom-12 right-0 mb-2 z-50"
          >
            <div className="flex flex-col items-end gap-2 min-w-[180px]">
              {options.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.04,
                  }}
                >
                  <Button
                    onClick={() => {
                      option.onClick()
                      setIsOpen(false)
                    }}
                    size="sm"
                    className="flex items-center gap-2 bg-[#0b131d]/90 hover:bg-[#0b131d] text-white hover:text-[#efbf04] shadow-[0_4px_20px_rgba(0,0,0,0.25)] border border-[#efbf04]/30 hover:border-[#efbf04] rounded-xl backdrop-blur-md px-3.5 py-2 cursor-pointer transition-all"
                  >
                    {option.Icon}
                    <span className="font-poppins text-xs font-medium">{option.label}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FloatingActionMenu
