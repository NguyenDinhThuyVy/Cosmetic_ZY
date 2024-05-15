interface Product {
  name: string
  image: string
  images: string[]
  description: string
  category: Category
  brand?: Brand
  rating: number
  price: number
  price_before_discount: number
  quantity: number
  uses: string
  madeIn: string
  view: number
  sold: number
  status?: number
}
interface Ingredient {
  name: string
  amount: number // Lượng của thành phần dinh dưỡng, có thể là số lượng hoặc tỉ lệ phần trăm
}
interface Category {
  name: string
}
interface Brand {
  name: string
  image: string
  description: string
}
