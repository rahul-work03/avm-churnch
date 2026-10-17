'use client'

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { OrderFailurePage } from '@/components/StorePage/OrderFailurePage'
import { Loader2 } from 'lucide-react'

function FailureContent() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get('orderNumber')
  const reason = searchParams.get('reason')

  return <OrderFailurePage orderNumber={orderNumber} reason={reason} />
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#003471]" />
        </main>
      }
    >
      <FailureContent />
    </Suspense>
  )
}
