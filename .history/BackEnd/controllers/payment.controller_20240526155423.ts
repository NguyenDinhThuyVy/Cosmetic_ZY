import { Request, Response } from 'express'
import { PaymentModel } from '../database/models/payment.model'
import { ErrorHandler, responseSuccess } from '../utils/response'
import { STATUS } from '../constants/status'
import { STATUS_ORDER } from '../constants/purchase'
import { Payment } from '../@types/order.type'
import { handleImageProduct } from './product.controller'
import { cloneDeep } from 'lodash'
import moment from 'moment'

// User
const getPayments = async (req: Request, res: Response) => {
  const user_id = req.jwtDecoded.id

  try {
    let payments: any = await PaymentModel.find()

      .sort({
        createdAt: -1,
      })
      .lean()
    payments = payments.map((payment) => {
      if (payment.purchases && payment.purchases.length > 0) {
        payment.purchases = payment.purchases.map((purchaseItem) => {
          if (purchaseItem.product) {
            purchaseItem.product = handleImageProduct(
              cloneDeep(purchaseItem.product)
            )
          }
          return purchaseItem
        })
      }
      return payment
    })
    payments = payments.filter((payment) => payment.purchases.length > 0)
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

    payments = payments.map((payment) => {
      if (payment.purchases && payment.purchases.length > 0) {
        payment.purchases = payment.purchases.map((purchaseItem) => {
          if (purchaseItem.product) {
            purchaseItem.product = handleImageProduct(
              cloneDeep(purchaseItem.product)
            )
          }
          return purchaseItem
        })
      }
      return payment
    })
    payments = payments.filter((payment) => payment.purchases.length > 0)
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
        status: STATUS_ORDER.WAIT_FOR_GETTING,
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
const updateOrderProgress = async (req: Request, res: Response) => {
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

const updateOrderDelivered = async (req: Request, res: Response) => {
  try {
    const orderDB = await PaymentModel.findByIdAndUpdate(
      req.params.order_id,
      {
        status: STATUS_ORDER.DELIVERED,
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

const getTopSellingProductWeekly = async (req: Request, res: Response) => {
  try {
    const startOfWeek = moment().startOf('isoWeek').toDate()
    const endOfWeek = moment().endOf('isoWeek').toDate()

    const products = await PaymentModel.aggregate([
      {
        $match: {
          createdAt: { $gte: startOfWeek, $lte: endOfWeek },
          status: { $eq: STATUS_ORDER.DELIVERED },
        },
      },
      { $unwind: '$purchases' },
      {
        $group: {
          _id: '$purchases.product.name',
          totalSold: { $sum: '$purchases.buy_count' },
        },
      },
      { $sort: { totalSold: -1 } },
      { $limit: 1 },
    ])
    return res.status(200).json({
      message: 'Sản phẩm được bán chạy nhất trong tuần',
      data: products,
      period: 'weekly',
      startOfPeriod: startOfWeek,
      endOfPeriod: endOfWeek,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Đã xảy ra lỗi khi lấy sản phẩm được bán chạy nhất trong tuần',
      error: error.message,
    })
  }
}

const getTopSellingProductMonthly = async (req: Request, res: Response) => {
  try {
    let { month, year } = req.query

    // Chuyển đổi kiểu của month và year từ number sang string
    month = month.toString()
    year = year.toString()

    // Tạo ngày đầu và cuối tháng từ tháng và năm đã chọn
    const startOfMonth = moment(`${year}-${month}-01`).startOf('month').toDate()
    const endOfMonth = moment(`${year}-${month}-01`).endOf('month').toDate()

    const products = await PaymentModel.aggregate([
      {
        $match: {
          createdAt: { $gte: startOfMonth, $lte: endOfMonth },
          status: { $eq: STATUS_ORDER.DELIVERED },
        },
      },
      { $unwind: '$purchases' },
      {
        $group: {
          _id: '$purchases.product.name',
          totalSold: { $sum: '$purchases.buy_count' },
        },
      },
      { $sort: { totalSold: -1 } },
      { $limit: 1 },
    ])

    return res.status(200).json({
      message: 'Sản phẩm được bán chạy nhất trong tháng',
      data: products,
      period: 'monthly',
      startOfPeriod: startOfMonth,
      endOfPeriod: endOfMonth,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Đã xảy ra lỗi khi lấy sản phẩm được bán chạy nhất trong tháng',
      error: error.message,
    })
  }
}
const getMonthlyRevenue = async (req: Request, res: Response) => {
  try {
    const { month, year } = req.query

    // Kiểm tra xem tháng và năm có được truyền vào không
    if (!month || !year) {
      return res.status(400).json({
        message: 'Thiếu thông tin tháng và năm',
      })
    }
    // Chuyển đổi tháng và năm sang kiểu số nguyên
    const monthNumber = parseInt(month as string, 10)
    const yearNumber = parseInt(year as string, 10)

    // Kiểm tra xem tháng và năm có hợp lệ không
    if (
      isNaN(monthNumber) ||
      isNaN(yearNumber) ||
      monthNumber < 1 ||
      monthNumber > 12 ||
      yearNumber < 1970
    ) {
      return res.status(400).json({
        message: 'Tháng hoặc năm không hợp lệ',
      })
    }

    // Tính toán khoảng thời gian từ đầu đến cuối của tháng được chọn
    const startOfPeriod = moment(`${yearNumber}-${monthNumber}-01`)
      .startOf('month')
      .toDate()
    const endOfPeriod = moment(`${yearNumber}-${monthNumber}-01`)
      .endOf('month')
      .toDate()

    const payments = await PaymentModel.aggregate([
      {
        $match: {
          createdAt: { $gte: startOfPeriod, $lte: endOfPeriod },
          status: { $eq: STATUS_ORDER.DELIVERED },
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$totalMoney' },
        },
      },
    ])

    return res.status(200).json({
      message: `Doanh thu trong tháng ${monthNumber} năm ${yearNumber}`,
      data: payments,
      period: 'monthly',
      startOfPeriod: startOfPeriod,
      endOfPeriod: endOfPeriod,
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Đã xảy ra lỗi khi lấy doanh thu trong tháng',
      error: error.message,
    })
  }
}
const getDailyRevenue = async (req: Request, res: Response) => {
  try {
    const startDate = moment().subtract(30, 'days').startOf('day')
    const endDate = moment().endOf('day')

    const dailyRevenues = []

    for (
      let date = startDate.clone();
      date.isSameOrBefore(endDate, 'day');
      date.add(1, 'day')
    ) {
      const startOfDay = date.startOf('day').toDate()
      const endOfDay = date.endOf('day').toDate()

      const payment = await PaymentModel.aggregate([
        {
          $match: {
            createdAt: { $gte: startOfDay, $lte: endOfDay },
            status: { $eq: STATUS_ORDER.DELIVERED },
          },
        },
        {
          $group: {
            _id: null,
            totalRevenue: { $sum: '$totalMoney' },
          },
        },
      ])

      const dailyRevenue = {
        date: startOfDay,
        totalRevenue: payment.length > 0 ? payment[0].totalRevenue : 0,
      }

      dailyRevenues.push(dailyRevenue)
    }

    return res.status(200).json({
      message: 'Doanh thu từng ngày trong 30 ngày gần nhất',
      data: dailyRevenues,
      period: '30_days',
      startOfPeriod: startDate.toDate(),
      endOfPeriod: endDate.toDate(),
    })
  } catch (error) {
    return res.status(500).json({
      message:
        'Đã xảy ra lỗi khi lấy doanh thu từng ngày trong 30 ngày gần nhất',
      error: error.message,
    })
  }
}

const paymentController = {
  getPayments,
  getAllOrders,
  updateOrderConfirm,
  updateOrderProgress,
  updateOrderDelivered,
  updateOrderCancel,
  getTopSellingProductWeekly,
  getTopSellingProductMonthly,
  getMonthlyRevenue,
  getDailyRevenue,
}

export default paymentController
