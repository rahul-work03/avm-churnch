import crypto from 'node:crypto'

export interface CreatePaymentRequestOptions {
  amount: number
  purpose: string
  buyerName: string
  email: string
  phone: string
  redirectUrl: string
  webhookUrl?: string
}

export interface PaymentRequestResult {
  success: boolean
  paymentRequestId: string
  longurl: string
  isMock?: boolean
  error?: string
  raw?: unknown
}

export interface VerifyPaymentResult {
  success: boolean
  status: 'Credit' | 'Failed' | 'Pending' | 'Unknown'
  amount?: number
  paymentId?: string
  paymentRequestId?: string
  buyerName?: string
  buyerEmail?: string
  buyerPhone?: string
  error?: string
  isMock?: boolean
  raw?: unknown
}

interface CachedToken {
  accessToken: string
  expiresAt: number // timestamp in ms
}

let tokenCache: CachedToken | null = null

function getInstamojoConfig() {
  const clientId =
    process.env.INSTAMOJO_CLIENT_ID?.trim() ||
    process.env.INSTAMOJO_API_KEY?.trim() ||
    ''
  const clientSecret =
    process.env.INSTAMOJO_CLIENT_SECRET?.trim() ||
    process.env.INSTAMOJO_AUTH_TOKEN?.trim() ||
    ''
  const privateSalt = process.env.INSTAMOJO_PRIVATE_SALT?.trim() || ''

  let baseUrl =
    process.env.INSTAMOJO_API_BASE_URL?.trim() ||
    process.env.INSTAMOJO_ENDPOINT?.trim() ||
    'https://api.instamojo.com'

  // Clean trailing slash
  if (baseUrl.endsWith('/')) {
    baseUrl = baseUrl.slice(0, -1)
  }

  const isConfigured = Boolean(
    clientId &&
      clientSecret &&
      clientId !== 'your-client-id' &&
      clientId !== 'your_instamojo_api_key'
  )

  return { clientId, clientSecret, privateSalt, baseUrl, isConfigured }
}

/**
 * Generates or returns a cached OAuth2 Access Token using client_credentials grant.
 */
export async function getInstamojoAccessToken(): Promise<{
  accessToken: string | null
  error?: string
}> {
  const config = getInstamojoConfig()

  if (!config.isConfigured) {
    return { accessToken: null, error: 'Instamojo credentials not configured' }
  }

  // Return cached token if still valid (with 60-second safety window)
  const now = Date.now()
  if (tokenCache && tokenCache.expiresAt > now + 60000) {
    return { accessToken: tokenCache.accessToken }
  }

  try {
    const payload = new URLSearchParams()
    payload.append('grant_type', 'client_credentials')
    payload.append('client_id', config.clientId)
    payload.append('client_secret', config.clientSecret)

    const tokenUrl = `${config.baseUrl}/oauth2/token/`
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: payload.toString(),
    })

    const data = await response.json()

    if (!response.ok || !data.access_token) {
      console.error('[Instamojo OAuth Error]', data)
      return {
        accessToken: null,
        error: data.error_description || data.error || 'Failed to obtain access token',
      }
    }

    const expiresInSec = Number(data.expires_in) || 36000
    tokenCache = {
      accessToken: data.access_token,
      expiresAt: now + expiresInSec * 1000,
    }

    return { accessToken: data.access_token }
  } catch (error: unknown) {
    console.error('[Instamojo Token Exception]', error)
    return {
      accessToken: null,
      error: error instanceof Error ? error.message : 'Unable to connect to Instamojo OAuth server',
    }
  }
}

/**
 * Creates an Instamojo Payment Request using the v2 API (/v2/payment_requests/).
 * Falls back to an interactive sandbox simulation if credentials are not configured.
 */
export async function createInstamojoPaymentRequest(
  options: CreatePaymentRequestOptions
): Promise<PaymentRequestResult> {
  const config = getInstamojoConfig()
  const cleanPhone = options.phone.replace(/[^0-9]/g, '').slice(-10)

  // Dev Mock fallback if credentials are not configured
  if (!config.isConfigured) {
    console.warn(
      '\n⚠️ [INSTAMOJO OAUTH] Missing INSTAMOJO_CLIENT_ID or INSTAMOJO_CLIENT_SECRET.'
    )
    console.warn('⚠️ [INSTAMOJO OAUTH] Simulating sandbox checkout for local testing.')

    const mockRequestId = 'REQ_MOCK_' + crypto.randomBytes(6).toString('hex').toUpperCase()
    const mockPaymentId = 'MOJO_MOCK_' + crypto.randomBytes(6).toString('hex').toUpperCase()

    const callbackUrl = new URL(options.redirectUrl)
    callbackUrl.searchParams.set('payment_request_id', mockRequestId)
    callbackUrl.searchParams.set('payment_id', mockPaymentId)
    callbackUrl.searchParams.set('payment_status', 'Credit')

    return {
      success: true,
      paymentRequestId: mockRequestId,
      longurl: callbackUrl.toString(),
      isMock: true,
    }
  }

  // Obtain OAuth2 Bearer Access Token
  const { accessToken, error: tokenError } = await getInstamojoAccessToken()
  if (!accessToken) {
    return {
      success: false,
      paymentRequestId: '',
      longurl: '',
      error: tokenError || 'Authentication token generation failed',
    }
  }

  try {
    const payload = new URLSearchParams()
    payload.append('amount', Number(options.amount).toFixed(2))
    payload.append('purpose', options.purpose.slice(0, 30))
    payload.append('buyer_name', options.buyerName)
    payload.append('email', options.email)
    payload.append('phone', cleanPhone)
    payload.append('redirect_url', options.redirectUrl)
    payload.append('send_email', 'False')
    payload.append('send_sms', 'False')
    payload.append('allow_repeated_payments', 'False')

    if (options.webhookUrl) {
      const isLocalhost =
        options.webhookUrl.includes('localhost') || options.webhookUrl.includes('127.0.0.1')
      if (!isLocalhost) {
        payload.append('webhook', options.webhookUrl)
      } else {
        console.warn(
          '[Instamojo] Omitting webhook URL because Instamojo requires a public hostname (no localhost/127.0.0.1). Set INSTAMOJO_WEBHOOK_URL to your ngrok URL for webhook testing.'
        )
      }
    }

    const response = await fetch(`${config.baseUrl}/v2/payment_requests/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: payload.toString(),
    })

    const data = await response.json()

    if (!response.ok || !data.id || !data.longurl) {
      console.error('[Instamojo v2 API Error]', data)
      const errorMsg =
        data.message ||
        (Array.isArray(data.amount) ? data.amount[0] : null) ||
        (Array.isArray(data.purpose) ? data.purpose[0] : null) ||
        (typeof data === 'object' ? JSON.stringify(data) : 'Failed to create payment request')

      return {
        success: false,
        paymentRequestId: '',
        longurl: '',
        error: errorMsg,
        raw: data,
      }
    }

    return {
      success: true,
      paymentRequestId: data.id,
      longurl: data.longurl,
      raw: data,
    }
  } catch (error: unknown) {
    console.error('[Instamojo v2 Exception]', error)
    return {
      success: false,
      paymentRequestId: '',
      longurl: '',
      error: error instanceof Error ? error.message : 'Payment service unreachable',
    }
  }
}

/**
 * Verifies a payment request status using the v2 API (/v2/payment_requests/{id}/).
 */
export async function verifyInstamojoPayment(
  paymentRequestId: string,
  paymentId?: string
): Promise<VerifyPaymentResult> {
  const config = getInstamojoConfig()

  // Support Mock verification
  if (
    paymentRequestId?.startsWith('REQ_MOCK_') ||
    (paymentId && paymentId.startsWith('MOJO_MOCK_'))
  ) {
    return {
      success: true,
      status: 'Credit',
      paymentId: paymentId || 'MOJO_MOCK',
      paymentRequestId,
      isMock: true,
    }
  }

  if (!config.isConfigured) {
    return {
      success: false,
      status: 'Unknown',
      error: 'Instamojo credentials not configured on server',
    }
  }

  const { accessToken, error: tokenError } = await getInstamojoAccessToken()
  if (!accessToken) {
    return {
      success: false,
      status: 'Unknown',
      error: tokenError || 'Could not authenticate with Instamojo',
    }
  }

  try {
    // 1. Query the Payment Request by ID
    const url = `${config.baseUrl}/v2/payment_requests/${paymentRequestId}/`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const data = await response.json()

    if (!response.ok || !data.id) {
      return {
        success: false,
        status: 'Unknown',
        error: data.message || 'Payment request lookup failed',
        raw: data,
      }
    }

    // Inspect payments array inside payment request
    const payments = Array.isArray(data.payments) ? data.payments : []
    const matchingPayment = paymentId
      ? payments.find((p: Record<string, unknown>) => p.payment_id === paymentId || p.id === paymentId)
      : payments[0]

    // Status resolution: v2 sets request status to 'Completed' when paid, or payment item status to 'Credit'
    const isCompleted =
      data.status === 'Completed' ||
      matchingPayment?.status === 'Credit' ||
      matchingPayment?.status === true

    const isFailed =
      data.status === 'Failed' ||
      matchingPayment?.status === 'Failed' ||
      matchingPayment?.status === false

    const resolvedStatus = isCompleted ? 'Credit' : isFailed ? 'Failed' : 'Pending'

    return {
      success: isCompleted,
      status: resolvedStatus,
      amount: Number(matchingPayment?.amount || data.amount || 0),
      paymentId: (matchingPayment?.payment_id as string) || (matchingPayment?.id as string) || paymentId,
      paymentRequestId: data.id,
      buyerName: data.buyer_name,
      buyerEmail: data.email,
      buyerPhone: data.phone,
      raw: data,
    }
  } catch (error: unknown) {
    return {
      success: false,
      status: 'Unknown',
      error: error instanceof Error ? error.message : 'Unable to connect to Instamojo verification endpoint',
    }
  }
}

/**
 * Verifies HMAC-SHA1 webhook MAC signature from Instamojo.
 */
export function verifyWebhookSignature(postData: Record<string, unknown>, mac: string): boolean {
  const config = getInstamojoConfig()
  if (!config.privateSalt) {
    return true // Salt is optional; pass through if not configured
  }

  try {
    const sortedKeys = Object.keys(postData)
      .filter((k) => k !== 'mac')
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))

    const message = sortedKeys.map((k) => postData[k]).join('|')
    const calculatedMac = crypto
      .createHmac('sha1', config.privateSalt)
      .update(message)
      .digest('hex')

    return calculatedMac.toLowerCase() === mac.toLowerCase()
  } catch (err) {
    console.error('Error verifying Instamojo webhook MAC signature:', err)
    return false
  }
}
