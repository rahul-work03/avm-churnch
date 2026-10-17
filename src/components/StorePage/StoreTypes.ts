export interface ProductItem {
  id: string | number
  title: string
  slug?: string | null
  productUrl?: string | null
  amazonUrl?: string | null
  flipkartUrl?: string | null
  otherExternalUrl?: string | null
  category?: string | null
  image?: unknown
  imageFallback?: string | null
  originalPrice: number
  salePrice: number
  rating?: number | null
  description?: string | null
  detailedDescription?: string | null
  author?: string | null
  publisher?: string | null
  language?: string | null
  pagesCount?: number | null
  format?: string | null
  isbn?: string | null
  features?: { id?: string; feature: string }[] | null
  inStock?: boolean | null
  allowDirectPurchase?: boolean | null
  stockQuantity?: number | null
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

export interface CartItem {
  id: string | number
  slug: string
  title: string
  category?: string
  image: string
  price: number
  originalPrice?: number
  quantity: number
}

export interface CustomerDetails {
  name: string
  phone: string
  email: string
  address: string
  landmark?: string
  city: string
  state: string
  pincode: string
  deliveryNotes?: string
}

export interface OrderItem {
  productId?: string
  title: string
  slug?: string
  quantity: number
  unitPrice: number
  totalPrice: number
  image?: string
}
