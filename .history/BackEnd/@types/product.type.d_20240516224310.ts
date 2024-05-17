interface Product {
  name: string
  image: string
  images: string[]
  description: string
  category: Category
  brand?: Brand
  // rating: number
  price: number
  price_before_discount: number
  quantity: number
  ingredient: string
  madeIn: string
  view: number
  sold: number
  status?: number
  comment: Comment[] // Thêm trường comment
}

interface Category {
  name: string
}

interface Brand {
  name: string
  image: string
  description: string
}

interface Comment {
  user: User
  rating: number
  comment: string
}
