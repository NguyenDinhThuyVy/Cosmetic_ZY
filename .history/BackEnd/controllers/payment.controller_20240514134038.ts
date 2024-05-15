import { Request, Response } from 'express'
import { PaymentModel } from '../database/models/payment.model'
import { ErrorHandler, responseSuccess } from '../utils/response'
import { STATUS } from '../constants/status'
import { STATUS_ORDER } from '../constants/purchase'
import { Payment } from '../@types/order.type'

// User
const getPayments = async (req: Request, res: Response) => {
  const user_id = req.jwtDecoded.id

  try {
    let payments: any = await PaymentModel.find()
      .populate({
        path: 'purchase',
        match: { user: user_id },
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
    payments = payments.filter((payment) => payment.purchase.length > 0)
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

// Admin
const getAllOrders = async (req: Request, res: Response) => {
  try {
    let payments: any = await PaymentModel.find()
      .populate({
        path: 'purchase',
        populate: {
          path: 'product',
        },
      })
      .sort({
        createdAt: -1,
      })
      .lean()
    payments = payments.filter((payment) => payment.purchase.length > 0)
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
const updateOrderConfirm = async (req: Request, res: Response) => {
  try {
    const orderDB = await PaymentModel.findByIdAndUpdate(
      req.params.order_id,
      {
        status: STATUS_ORDER.IN_PROGRESS,
      },
      { new: true }
    )

    // Kiểm tra nếu không tìm thấy đơn hàng
    if (!orderDB) {
      return res.status(404).json({
        message: 'Không tìm thấy đơn hàng',
      })
    }

    // Lưu lại thay đổi vào cơ sở dữ liệu
    await orderDB.save()

    // Trả về thông báo thành công
    return res.status(200).json({
      message: 'Cập nhật đơn hàng thành công',
      data: orderDB,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Đã xảy ra lỗi khi cập nhật đơn hàng',
      error: error.message,
    })
  }
}

const updateOrderCancel = async (req: Request, res: Response) => {
  try {
    const orderDB = await PaymentModel.findByIdAndUpdate(
      req.params.order_id,
      {
        status: STATUS_ORDER.CANCELLED,
      },
      { new: true }
    )

    // Kiểm tra nếu không tìm thấy đơn hàng
    if (!orderDB) {
      return res.status(404).json({
        message: 'Không tìm thấy đơn hàng',
      })
    }

    // Lưu lại thay đổi vào cơ sở dữ liệu
    await orderDB.save()

    // Trả về thông báo thành công
    return res.status(200).json({
      message: 'Cập nhật đơn hàng thành công',
      data: orderDB,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Đã xảy ra lỗi khi cập nhật đơn hàng',
      error: error.message,
    })
  }
}

const paymentController = {
  getPayments,
  getAllOrders,
  updateOrderConfirm,
  updateOrderCancel,
}

export default paymentController
