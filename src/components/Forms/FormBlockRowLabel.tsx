'use client'
import React from 'react'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

interface FormFieldBlockData {
  blockType?: string
  name?: string
  label?: string
  blockName?: string
}

const formatBlockType = (type?: string) => {
  if (!type) return ''
  switch (type.toLowerCase()) {
    case 'text':
      return 'Text'
    case 'email':
      return 'Email'
    case 'textarea':
      return 'Text Area'
    case 'select':
      return 'Select'
    case 'country':
      return 'Country'
    case 'state':
      return 'State'
    case 'number':
      return 'Number'
    case 'checkbox':
      return 'Checkbox'
    case 'message':
      return 'Message'
    default:
      return type.charAt(0).toUpperCase() + type.slice(1)
  }
}

export const FormBlockRowLabel: React.FC<RowLabelProps> = () => {
  const rowLabelData = useRowLabel<FormFieldBlockData>()
  const data = rowLabelData?.data

  const rowNum =
    rowLabelData?.rowNumber !== undefined
      ? String(rowLabelData.rowNumber + 1).padStart(2, '0')
      : ''

  const blockType = formatBlockType(data?.blockType)
  const displayLabel = data?.label || data?.name || data?.blockName || 'Untitled'

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '13px',
      }}
    >
      {rowNum && (
        <span
          style={{
            fontFamily: 'monospace',
            color: 'var(--theme-elevation-400, #94a3b8)',
            fontWeight: 500,
          }}
        >
          {rowNum}
        </span>
      )}
      {blockType && (
        <span
          style={{
            padding: '2px 8px',
            borderRadius: '4px',
            backgroundColor: 'var(--theme-elevation-150, #f1f5f9)',
            color: 'var(--theme-elevation-700, #334155)',
            fontSize: '11px',
            fontWeight: 600,
          }}
        >
          {blockType}
        </span>
      )}
      <span
        style={{
          fontWeight: 600,
          color: 'var(--theme-elevation-800, #0f172a)',
        }}
      >
        {displayLabel}
      </span>
      {data?.name && data?.label && data.name !== data.label && (
        <span
          style={{
            fontSize: '12px',
            color: 'var(--theme-elevation-450, #64748b)',
            fontWeight: 400,
          }}
        >
          ({data.name})
        </span>
      )}
    </div>
  )
}

