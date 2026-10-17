'use client'

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { OrderSuccessPage } from '@/components/StorePage/OrderSuccessPage'
import { Loader2 } from 'lucide-react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get('orderNumber') || 'ANM-ORDER'
  const paymentId = searchParams.get('paymentId')

  return <OrderSuccessPage orderNumber={orderNumber} paymentId={paymentId} />
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
      <SuccessContent />
    </Suspense>
  )
}
