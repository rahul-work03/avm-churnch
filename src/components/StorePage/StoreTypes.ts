export interface ProductItem {
  id: string | number
  title: string
  category?: string | null
  image?: any
  imageFallback?: string | null
  originalPrice: number
  salePrice: number
  rating?: number | null
  description?: string | null
  inStock?: boolean | null
  order?: number | null
}

export interface StorePageData {
  id?: number | string
  headerTitle?: string | null
  headerSubtitle?: string | null
  fastDeliveryText?: string | null
  securePaymentText?: string | null
  supportPhone?: string | null
  supportEmail?: string | null
}
