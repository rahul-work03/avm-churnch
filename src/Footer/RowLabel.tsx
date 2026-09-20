'use client'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{ label?: string; name?: string; title?: string }>()

  const text = data?.data?.label || data?.data?.name || data?.data?.title
  const label = text
    ? `Item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${text}`
    : 'Row'

  return <div>{label}</div>
}

