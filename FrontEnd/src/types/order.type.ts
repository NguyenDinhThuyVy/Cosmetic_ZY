import { Product } from './product.type'
import { User } from './user.type'

export interface Order {
  _id: string
  order: [{ buy_count: number; product: Product }]
  price: number
  price_before_discount: number
  status: number
  user: User[]
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
