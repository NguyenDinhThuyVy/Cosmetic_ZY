import { Request, Response } from 'express'
import axios from 'axios'
import crypto from 'crypto'
import qs from 'qs'

const paymentVNPay = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.body

    const vnp_TmnCode = process.env.VNP_TMNCODE
    const vnp_ReturnUrl = process.env.VNP_RETURN
    const vnp_HashSecret = process.env.VNP_HASH_SECRET

    // Tạo requestData
    const requestData = {
      vnp_Version: '2.1.0',
      vnp_Command: 'pay',
      vnp_TmnCode,
      vnp_Locale: 'vn',
      vnp_CurrCode: 'VND',
      vnp_OrderType: 'billpayment',
      vnp_ReturnUrl,
      orderId,
      vnp_SecureHashType: '',
      vnp_SecureHash: '',
    }

    // Sắp xếp các thuộc tính theo thứ tự từ điển
    const sortedData = Object.keys(requestData)
      .sort()
      .reduce((acc, key) => {
        acc[key] = requestData[key]
        return acc
      }, {})

    // Tạo chuỗi dữ liệu
    const signData = qs.stringify(sortedData, { encode: false })
    const secureHash = crypto
      .createHash('sha256')
      .update(vnp_HashSecret + signData)
      .digest('hex')

    // Thêm Secure Hash vào requestData
    requestData.vnp_SecureHashType = 'SHA256'
    requestData.vnp_SecureHash = secureHash.toUpperCase()

    // Gửi request thanh toán đến VNPAY
    const vnpUrl = process.env.VNP_URL // URL môi trường sandbox của VNPAY
    const formData = qs.stringify(requestData)

    // Chuyển hướng người dùng đến VNPAY để tiến hành thanh toán
    res.redirect(`${vnpUrl}?${formData}`)
  } catch (error) {
    console.error('Error processing payment request:', error)
    res.status(500).json({ success: false, message: 'Có lỗi xảy ra' })
  }
}

const paymentController = { paymentVNPay }

export default paymentController
