import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'payment'
const purchaseApi = {
  getPurchases(params: { status: PurchaseListStatus }) {
    return http.get<SuccessResponse<Purchase[]>>(`${URL}`, {
      params
    })
  }
}

export default purchaseApi
