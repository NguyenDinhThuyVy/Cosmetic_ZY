export interface Product {
  _id: string
  name: string
  image: string
  images: string[]
  description: string
  category: string[]
  brand: string[]
  rating: number
  price: number
  price_before_discount: number
  quantity: number
  stockQuantity: number
  ingredient: Ingredient[]
  madeIn: string
  view: number
  sold: number
  status?: string
}
interface Ingredient {
  name: string
}
export interface ProductList {
  products: Product[]
  pagination: {
    page: number
    limit: number
    page_size: number
  }
}

export interface ProductListConfig {
  page?: number | string
  limit?: number | string
  sort_by?: 'createdAt' | 'view' | 'sold' | 'price'
  order?: 'asc' | 'desc'
  exclude?: string
  rating_filter?: number | string
  price_max?: number | string
  price_min?: number | string
  name?: string
  category?: string
  brand?: string
}
