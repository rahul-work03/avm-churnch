'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { useCart } from '@/providers/Cart'

function CallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { clearCart } = useCart()

  const [statusMessage, setStatusMessage] = useState('Verifying payment securely...')

  useEffect(() => {
    const paymentId = searchParams.get('payment_id')
    const paymentStatus = searchParams.get('payment_status')
    const paymentRequestId = searchParams.get('payment_request_id')
    const orderNumber = searchParams.get('orderNumber')
    const isBuyNow = searchParams.get('buyNow') === '1'

    async function verify() {
      try {
        const response = await fetch('/api/store/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderNumber,
            paymentId,
            paymentStatus,
            paymentRequestId,
          }),
        })

        const data = await response.json()

        if (response.ok && data.verified) {
          setStatusMessage('Payment verified successfully! Preparing your receipt...')
          // Only clear cart if this was a cart checkout (preserve background cart for direct buyNow)
          if (!isBuyNow) {
            clearCart()
          }
          router.replace(
            `/store/order/success?orderNumber=${encodeURIComponent(
              data.orderNumber || orderNumber || ''
            )}&paymentId=${encodeURIComponent(paymentId || '')}`
          )
        } else {
          setStatusMessage('Payment was not completed. Redirecting...')
          router.replace(
            `/store/order/failed?orderNumber=${encodeURIComponent(
              data.orderNumber || orderNumber || ''
            )}&reason=${encodeURIComponent(data.message || 'Payment was cancelled or failed')}`
          )
        }
      } catch (err) {
        console.error('Error during callback payment verification:', err)
        router.replace(
          `/store/order/failed?orderNumber=${encodeURIComponent(
            orderNumber || ''
          )}&reason=Network%20verification%20error`
        )
      }
    }

    verify()
  }, [searchParams, router, clearCart])

  return (
    <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 text-center shadow-sm space-y-5">
      <div className="w-16 h-16 rounded-full bg-amber-50 text-[#003471] flex items-center justify-center mx-auto">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>

      <div>
        <h2 className="font-poppins font-bold text-xl text-[#003471]">
          Payment Verification in Progress
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-poppins mt-2">
          {statusMessage}
        </p>
      </div>

      <p className="text-[11px] text-slate-400 font-poppins">
        Please do not refresh or close this window while we securely confirm your transaction.
      </p>
    </div>
  )
}

export default function OrderCallbackPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#252c32] antialiased pt-32 pb-24 flex items-center justify-center px-4">
      <Suspense
        fallback={
          <div className="text-center font-poppins text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2 text-[#003471]" />
            <span>Loading...</span>
          </div>
        }
      >
        <CallbackContent />
      </Suspense>
    </main>
  )
}
