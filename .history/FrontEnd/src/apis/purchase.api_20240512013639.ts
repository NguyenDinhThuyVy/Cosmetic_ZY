import { Product } from 'src/types/product.type'
import { Purchase, PurchaseListStatus } from 'src/types/purchase.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'purchases'
interface OrderItem {
  product: Product
  buy_count: number
}
const purchaseApi = {
  addToCart(body: { order: OrderItem[] }) {
    const { product, buy_count } = body.order
    const newBody = {
      product_id: product_id,
      buy_count: buy_count
    }

    return http.post<SuccessResponse<Purchase>>(`${URL}/add-to-cart`, newBody)
  },
  getPurchases(params: { status: PurchaseListStatus }) {
    return http.get<SuccessResponse<Purchase[]>>(`${URL}`, {
      params
    })
  },
  buyProducts(body: { product_id: string; buy_count: number }[]) {
    return http.post<SuccessResponse<Purchase[]>>(`${URL}/buy-products`, body)
  },
  updatePurchase(body: { product_id: string; buy_count: number }) {
    return http.put<SuccessResponse<Purchase>>(`${URL}/update-purchase`, body)
  },
  deletePurchase(purchaseIds: string[]) {
    return http.delete<SuccessResponse<{ deleted_count: number }>>(`${URL}`, {
      data: purchaseIds
    })
  },
  shippingAddress(
    purchaseIds: string[],
    body: { street: string; city: string; postalCode: string; phone: string; paymentMethod: string }
  ) {
    return http.post<SuccessResponse<Purchase>>(`address/${purchaseIds}`, body)
  }
}

export default purchaseApi
