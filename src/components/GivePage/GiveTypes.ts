export interface BankAccount {
  id?: string
  bankName: string
  logo?: any
  logoFallback?: string | null
  accountHolder?: string | null
  accountNumber: string
  ifsc: string
  branch?: string | null
  borderColor?: string | null
}

export interface GivePageData {
  heroTitle?: string | null
  scriptureVerse?: string | null
  purposeStatement?: string | null
  qrHeaderTitle?: string | null
  iciciQrImage?: any
  iciciQrFallback?: string | null
  hdfcQrImage?: any
  hdfcQrFallback?: string | null
  axisLogo?: any
  axisLogoFallback?: string | null
  axisQrImage?: any
  axisQrFallback?: string | null
  gpayQrImage?: any
  gpayQrFallback?: string | null
  bankHeaderTitle?: string | null
  bankAccounts?: BankAccount[] | null
}
