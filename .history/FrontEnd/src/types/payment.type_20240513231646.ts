export interface Payment {
  _id: string
  name: string
  image: string
  images: string[]
  description: string
  category: { _id: string; name: string }
  brand: { _id: string; name: string; image: string; description: string }
  rating: number
  price: number
  price_before_discount: number
  quantity: number
  uses: string
  madeIn: string
  view: number
  sold: number
  status?: string
}
