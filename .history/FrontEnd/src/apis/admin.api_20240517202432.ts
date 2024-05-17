import { Brand } from 'src/types/brand.type'
import { Category } from 'src/types/category.type'
import { Order } from 'src/types/order.type'
import { Product, ProductList } from 'src/types/product.type'
import { User } from 'src/types/user.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = '/admin/users'
interface UserData {
  email: string
  name: string
  phone: string
  address: string
  roles: string[]
}
interface BrandData {
  name: string
  image: string
  description: string
}

const adminApi = {
  getAllUser() {
    return http.get<SuccessResponse<User[]>>(URL)
  },
  updateUser(id: string[], userData: UserData) {
    return http.put<SuccessResponse<User[]>>(`/admin/users/${id}`, userData)
  },
  getUser(id: string[]) {
    return http.get<SuccessResponse<User[]>>(`/admin/users/${id}`)
  },
  deleteUser(id: string[]) {
    return http.delete<SuccessResponse<User[]>>(`/admin/users/delete/${id}`)
  },
  getAllProducts() {
    return http.get<SuccessResponse<ProductList[]>>('/admin/products/all')
  },
  getProduct(id: string[]) {
    return http.get<SuccessResponse<ProductList[]>>(`/admin/products/${id}`)
  },
  updateProduct(id: string[], userData: UserData) {
    return http.put<SuccessResponse<User[]>>(`/admin/products/${id}`, userData)
  },
  deleteProduct(id: string[]) {
    return http.delete<SuccessResponse<User[]>>(`/admin/products/delete/${id}`)
  },
  retoreProduct(id: string[]) {
    return http.patch<SuccessResponse<User[]>>(`/admin/products/${id}`)
  },
  getcategories() {
    return http.get<SuccessResponse<Category[]>>(`/admin/categories`)
  },
  createProduct(body: any) {
    return http.post<SuccessResponse<Product[]>>('/admin/products', body)
  },
  uploadImage(body: any) {
    return http.post<SuccessResponse<string>>('/admin/products/upload-image', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  uploadImages(body: any) {
    return http.post<SuccessResponse<string>>('/admin/products/upload-images', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  getAllOrder() {
    return http.get<SuccessResponse<Order[]>>('/admin/orders')
  },
  confirmprogress(id: string[]) {
    return http.put<SuccessResponse<Order[]>>(`/admin/orders/${id}/progress`)
  },
  confirmdelivered(id: string[]) {
    return http.put<SuccessResponse<Order[]>>(`/admin/orders/${id}/delivered`)
  },
  confirmaccept(id: string[]) {
    return http.put<SuccessResponse<Order[]>>(`/admin/orders/${id}/confirm`)
  },
  confirmcancel(id: string[]) {
    return http.put<SuccessResponse<Order[]>>(`/admin/orders/${id}/cancel`)
  },
  getDeleteProduct() {
    return http.get<SuccessResponse<Product[]>>('/admin/products/deleteProduct')
  },
  getBrands() {
    return http.get<SuccessResponse<Brand[]>>('/admin/brands')
  },
  getBrandsbyID(id: string) {
    return http.get<SuccessResponse<Brand[]>>(`/admin/brands/${id}`)
  },
  uploadBrandImage(body: any) {
    return http.post<SuccessResponse<string>>('/admin/brands/upload-image', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  getProductByBrand(id: string) {
    return http.get<SuccessResponse<Brand[]>>(`/products/brand/${id}`)
  },
  updateBrand(id: string[], brandData: BrandData) {
    return http.put<SuccessResponse<User[]>>(`/admin/brands/${id}`, brandData)
  }
}

export default adminApi
