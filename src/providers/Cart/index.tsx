'use client'

import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react'
import type { CartItem, ProductItem } from '@/components/StorePage/StoreTypes'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export interface AddItemOptions {
  openCart?: boolean
  mode?: 'add' | 'set'
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: ProductItem, quantity?: number, options?: AddItemOptions) => void
  removeItem: (id: string | number) => void
  updateQuantity: (id: string | number, quantity: number) => void
  clearCart: () => void
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  itemCount: number
  subtotal: number
  shippingFee: number
  totalAmount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'avm_church_store_cart_v1'

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [hasHydrated, setHasHydrated] = useState(false)

  // Hydrate & sanitize from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          // Sanitize and deduplicate cached items (resolves any legacy duplication)
          const deduplicated: CartItem[] = []
          for (const raw of parsed) {
            if (!raw || (!raw.id && !raw.slug)) continue
            // Normalize legacy mock IDs
            const normalizedId = raw.id === 'book-1' ? 1 : raw.id === 'book-2' ? 2 : raw.id
            const existing = deduplicated.find(
              (x) =>
                (x.slug && raw.slug && x.slug === raw.slug) ||
                String(x.id) === String(normalizedId)
            )

            if (existing) {
              // Merge duplicates by keeping the maximum or valid quantity
              existing.quantity = Math.max(existing.quantity, Number(raw.quantity) || 1)
            } else {
              deduplicated.push({
                ...raw,
                id: normalizedId,
                quantity: Math.max(1, Math.floor(Number(raw.quantity) || 1)),
              })
            }
          }
          setItems(deduplicated)
        }
      }
    } catch (e) {
      console.warn('Failed to parse cart from localStorage:', e)
    } finally {
      setHasHydrated(true)
    }
  }, [])

  // Persist to localStorage whenever cart items change (after hydration)
  useEffect(() => {
    if (!hasHydrated) return
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    } catch (e) {
      console.warn('Failed to save cart to localStorage:', e)
    }
  }, [items, hasHydrated])

  const openCart = useCallback(() => setIsCartOpen(true), [])
  const closeCart = useCallback(() => setIsCartOpen(false), [])
  const toggleCart = useCallback(() => setIsCartOpen((prev) => !prev), [])

  const removeItem = useCallback((id: string | number) => {
    setItems((prevItems) =>
      prevItems.filter(
        (it) => String(it.id) !== String(id) && it.slug !== String(id)
      )
    )
  }, [])

  const updateQuantity = useCallback((id: string | number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems((prevItems) =>
      prevItems.map((it) =>
        String(it.id) === String(id) || it.slug === String(id)
          ? { ...it, quantity: Math.max(1, Math.floor(quantity)) }
          : it
      )
    )
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
    try {
      localStorage.removeItem(CART_STORAGE_KEY)
    } catch {
      // ignore
    }
  }, [])

  const addItem = useCallback(
    (
      product: ProductItem,
      quantity: number = 1,
      options: AddItemOptions = { openCart: true, mode: 'add' }
    ) => {
      const sanitizedQty = Math.max(1, Math.floor(quantity || 1))
      const shouldOpenCart = options.openCart !== false
      const mode = options.mode || 'add'

      setItems((prevItems) => {
        // Robust matching by slug OR by id (prevents any duplication between catalog, PDP, and database)
        const existingIndex = prevItems.findIndex((it) => {
          if (product.slug && it.slug && it.slug === product.slug) return true
          if (String(it.id) === String(product.id)) return true
          return false
        })

        const resolvedImage = getMediaUrl(
          product.image,
          product.imageFallback || '/store/book_abhishikth_geeton_ki_mala.png'
        )
        const slug = product.slug || String(product.id)

        if (existingIndex > -1) {
          const updated = [...prevItems]
          const existing = updated[existingIndex]
          const newQuantity =
            mode === 'set'
              ? sanitizedQty
              : existing.quantity + sanitizedQty

          updated[existingIndex] = {
            ...existing,
            quantity: newQuantity,
            price: Number(product.salePrice) || existing.price,
            image: resolvedImage || existing.image,
          }
          return updated
        }

        const newItem: CartItem = {
          id: product.id,
          slug,
          title: product.title,
          category: product.category || 'Spiritual Book',
          image: resolvedImage,
          price: Number(product.salePrice) || 0,
          originalPrice: Number(product.originalPrice) || Number(product.salePrice) || 0,
          quantity: sanitizedQty,
        }
        return [...prevItems, newItem]
      })

      if (shouldOpenCart) {
        setIsCartOpen(true)
      } else {
        setIsCartOpen(false)
      }
    },
    []
  )

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  )

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  )

  // Free standard shipping across India
  const shippingFee = 0

  const totalAmount = useMemo(() => subtotal + shippingFee, [subtotal, shippingFee])

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        itemCount,
        subtotal,
        shippingFee,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
