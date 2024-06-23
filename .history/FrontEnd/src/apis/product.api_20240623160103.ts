import { Product, ProductList, ProductListConfig } from 'src/types/product.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'products'
const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<SuccessResponse<ProductList>>(URL, {
      params
    })
  },
  getProductDetail(id: string) {
    return http.get<SuccessResponse<Product>>(`${URL}/${id}`)
  },
  getProduct() {
    return http.get<SuccessResponse<ProductList>>(URL)
  },
  addComment(id: string, body: { rating: number; commentItem: string }) {
    return http.post<SuccessResponse<Product>>(`products/${id}`, body)
  }
}

export default productApi
