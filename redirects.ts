import type { NextConfig } from 'next'

export const redirects: NextConfig['redirects'] = async () => {
  const internetExplorerRedirect = {
    destination: '/ie-incompatible.html',
    has: [
      {
        type: 'header' as const,
        key: 'user-agent',
        value: '(.*Trident.*)', // all ie browsers
      },
    ],
    permanent: false,
    source: '/:path((?!ie-incompatible.html$).*)', // all pages except the incompatibility page
  }

  const churchBranchesRedirect = {
    destination: '/branches',
    permanent: true,
    source: '/church-branches',
  }

  const shippingRedirect = {
    destination: '/shipping-and-delivery-policy',
    permanent: true,
    source: '/shipping-and-delivery',
  }

  const refundRedirect = {
    destination: '/cancellation-and-refund-policy',
    permanent: true,
    source: '/cancellation-and-refund',
  }

  return [internetExplorerRedirect, churchBranchesRedirect, shippingRedirect, refundRedirect]
}
