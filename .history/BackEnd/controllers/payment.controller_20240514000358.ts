import { Request, Response } from 'express'
import axios from 'axios'
import crypto from 'crypto'
import qs from 'qs'
import { PaymentModel } from '../database/models/payment.model'
import { responseSuccess } from '../utils/response'

const getPayments = async (req: Request, res: Response) => {
  // const user_id = req.jwtDecoded.id

  // let condition: any = {
  //   user: user_id,
  // }
  // console.log(user_id)
  try {
    let payments: any = await PaymentModel.find()
      .populate({
        path: 'purchase',
        populate: {
          path: 'product',
          populate: {
            path: 'category',
          },
        },
      })
      .sort({
        createdAt: -1,
      })
      .lean()
    // console.log(payments)
    const response = {
      message: 'Lấy đơn mua thành công',
      data: payments,
    }
    return responseSuccess(res, response)
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Đã xảy ra lỗi khi lấy đơn mua', error: error.message })
  }
}

const paymentController = { getPayments }

export default paymentController
