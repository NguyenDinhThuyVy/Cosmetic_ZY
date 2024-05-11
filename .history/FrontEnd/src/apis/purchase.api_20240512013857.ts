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
    // Khởi tạo một mảng mới để lưu trữ các thông tin sản phẩm và số lượng mua
    const orders: { product_id: string; buy_count: number }[] = [];

    // Lặp qua từng OrderItem trong mảng
    body.order.forEach(orderItem => {
      // Truy cập vào thuộc tính product và buy_count của từng OrderItem
      const product_id = orderItem.product._id;
      const buy_count = orderItem.buy_count;

      // Thêm thông tin sản phẩm và số lượng mua vào mảng orders
      orders.push({ product_id, buy_count });
    });

    // Gọi API với dữ liệu đã chuẩn bị
    return http.post<SuccessResponse<Purchase>>(`${URL}/add-to-cart`, { order: orders });
  }rchases(params: { status: PurchaseListStatus }) {
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
