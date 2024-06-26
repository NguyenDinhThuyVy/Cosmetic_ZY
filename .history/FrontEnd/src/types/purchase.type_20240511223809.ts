import { Product } from './product.type'

export type PurchaseStatus = -1 | 1 | 2 | 3 | 4 | 5

export type PurchaseListStatus = PurchaseStatus | 0

export interface Purchase {
  _id: string
  buy_count: number
  price: number
  price_before_discount: number
  status: PurchaseStatus
  user: string
  product: Product
  order: [
    {
      product: Product
    }
  ]
  shippingAddress: [
    {
      street: string
      city: string
      postalCode: string
      phone: string
      paymentMethod: string
    }
  ]
  createdAt: string
  updatedAt: string
}

export interface ExtendedPurchase extends Purchase {
  disabled: boolean
  checked: boolean
}
