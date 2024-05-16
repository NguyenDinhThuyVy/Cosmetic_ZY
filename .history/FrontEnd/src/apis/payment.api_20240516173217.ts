import { Payment } from 'src/types/payment.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'payment'
const paymentApi = {
  getPayment() {
    return http.get<SuccessResponse<Payment[]>>(`${URL}`)
  }
}

export default paymentApi
