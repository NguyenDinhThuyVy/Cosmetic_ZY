import { Request, Response } from 'express'
import { STATUS_PURCHASE } from '../constants/purchase'
import { STATUS } from '../constants/status'
import { ProductModel } from '../database/models/product.model'
import { PurchaseModel } from '../database/models/purchase.model'
import { ErrorHandler, responseError, responseSuccess } from '../utils/response'
import { handleImageProduct } from './product.controller'
import { cloneDeep } from 'lodash'

export const addToCart = async (req: Request, res: Response) => {
  const listOrder = req.body
  const purchaseInDb: any = await PurchaseModel.findOne({
    user: req.jwtDecoded.id,
    status: STATUS_PURCHASE.IN_CART,
  }).populate({
    path: 'order',
    populate: {
      path: 'product',
    },
  })

  if (!purchaseInDb) {
    const myOrder = purchaseInDb?.order || []
    for (const order of listOrder) {
      const { product_id, buy_count } = order
      const product: any = await ProductModel.findById(product_id).lean()
      if (product) {
        if (buy_count > product.quantity) {
          throw new ErrorHandler(
            STATUS.NOT_ACCEPTABLE,
            'Số lượng vượt quá số lượng sản phẩm'
          )
        }
      }

      myOrder.push({
        product: product,
        buy_count,
      })
    }

    const price = myOrder?.reduce((a, b) => {
      return a + b?.product?.price * Number(b.buy_count)
    }, 0)

    const price_before_discount = myOrder?.reduce((a, b) => {
      return a + b?.product?.price_before_discount * Number(b.buy_count)
    }, 0)

    const purchase = {
      user: req.jwtDecoded.id,
      order: myOrder?.map((item) => ({
        product: item?.product?._id,
        buy_count: item?.buy_count,
      })),
      price,
      price_before_discount,
      status: STATUS_PURCHASE.IN_CART,
    }

    const addedPurchase = await new PurchaseModel(purchase).save()
    const data = await PurchaseModel.findById(addedPurchase._id).populate({
      path: 'order',
      populate: {
        path: 'product',
      },
    })

    const response = {
      message: 'Thêm sản phẩm vào giỏ hàng thành công',
      data,
    }
    return responseSuccess(res, response)
  }

  const myOrder = purchaseInDb?.order || []

  for (const order of listOrder) {
    const { product_id, buy_count } = order
    const product: any = await ProductModel.findById(product_id).lean()
    if (product) {
      if (buy_count > product.quantity) {
        throw new ErrorHandler(
          STATUS.NOT_ACCEPTABLE,
          'Số lượng vượt quá số lượng sản phẩm'
        )
      }
    }

    const existingOrder = myOrder?.find(
      (item) => item?.product?._id?.toString() === product_id?.toString()
    )

    if (!existingOrder) {
      myOrder.push({
        product: product,
        buy_count,
      })
    } else {
      existingOrder.buy_count += buy_count
    }
  }

  const price = myOrder?.reduce((a, b) => {
    return a + b?.product?.price * Number(b.buy_count)
  }, 0)

  const price_before_discount = myOrder?.reduce((a, b) => {
    return a + b?.product?.price_before_discount * Number(b.buy_count)
  }, 0)

  const payload = {
    price,
    price_before_discount,
    order: myOrder?.map((item) => ({
      product: item?.product?._id,
      buy_count: item?.buy_count,
    })),
  }

  const data = await PurchaseModel.findByIdAndUpdate(
    purchaseInDb._id,
    {
      price,
      price_before_discount,
      order: myOrder?.map((item) => ({
        product: item?.product?._id,
        buy_count: item?.buy_count,
      })),
    },
    { new: true }
  )

  const response = {
    message: 'Thêm sản phẩm vào giỏ hàng thành công',
    data,
  }
  return responseSuccess(res, response)
}

export const updatePurchase = async (req: Request, res: Response) => {
  const { product_id, buy_count } = req.body
  const purchaseInDb: any = await PurchaseModel.findOne({
    user: req.jwtDecoded.id,
    status: STATUS_PURCHASE.IN_CART,
  })
    .populate({
      path: 'order',
      populate: {
        path: 'product',
      },
    })
    .lean()

  if (!purchaseInDb)
    throw new ErrorHandler(STATUS.NOT_FOUND, 'Không tìm thấy đơn')

  // EXIst PURCHASE
  const product: any = await ProductModel.findById(product_id).lean()
  if (product) {
    if (buy_count > product.quantity) {
      throw new ErrorHandler(
        STATUS.NOT_ACCEPTABLE,
        'Số lượng vượt quá số lượng sản phẩm'
      )
    }
  }

  const myOrder = purchaseInDb.order
    ?.map((item) => {
      if (item?.product?._id?.toString() === product_id.toString()) {
        return {
          product: product,
          buy_count,
        }
      }
      return item
    })
    ?.filter((sItem) => Number(sItem?.buy_count) !== 0)

  const price = myOrder?.reduce((a, b) => {
    return a + b?.product?.price * Number(b.buy_count)
  }, 0)

  const price_before_discount = myOrder?.reduce((a, b) => {
    return a + b?.product?.price_before_discount * Number(b.buy_count)
  }, 0)

  const data = await PurchaseModel.findByIdAndUpdate(
    purchaseInDb._id,
    {
      order: myOrder?.map((item) => ({
        product: item?.product?._id,
        buy_count: item?.buy_count,
      })),
      price,
      price_before_discount,
    },
    {
      new: true,
    }
  )

  const response = {
    message: 'Cập nhật đơn thành công',
    data,
  }
  return responseSuccess(res, response)
}

export const buyProducts = async (req: Request, res: Response) => {
  const purchase: any = await PurchaseModel.findById(req.body.purchase_id)
    .populate({
      path: 'order',
      populate: {
        path: 'product',
      },
    })
    .sort({
      createdAt: -1,
    })

  await PurchaseModel.findByIdAndUpdate(purchase._id, {
    status: STATUS_PURCHASE.WAIT_FOR_CONFIRMATION,
  })

  const listOrder = purchase.order

  for (const order of listOrder) {
    const product = (await ProductModel.findById(order.product._id)) as any
    console.log(product)
    if (!product || product.status === 0) {
      // Xử lý trường hợp sản phẩm không tồn tại hoặc có status = 0
      // Thí dụ: return hoặc throw error để ngăn không cho tiếp tục mua sản phẩm
      // return responseError(res, 'Sản phẩm không tồn tại hoặc đã bị chặn')
      throw new Error('Sản phẩm không tồn tại hoặc đã bị chặn')
    }
    await ProductModel.findByIdAndUpdate(order.product._id, {
      $inc: { quantity: -Number(order.buy_count) },
    })
  }

  const response = {
    message: 'Mua thành công',
    data: purchase,
  }
  return responseSuccess(res, response)
}

export const getPurchases = async (req: Request, res: Response) => {
  const { status = STATUS_PURCHASE.ALL, user_id } = req.query

  let condition: any = {
    ...(user_id && { user: user_id }),
    status: STATUS_PURCHASE.ALL,
  }

  if (Number(status) !== STATUS_PURCHASE.ALL) {
    condition.status = status
  }

  try {
    let purchases: any = await PurchaseModel.find(condition)
      .populate({
        path: 'order',
        populate: {
          path: 'product',
        },
      })
      .sort({
        createdAt: -1,
      })
      .lean()

    // Handle image product
    purchases = purchases.map((purchase: any) => {
      if (purchase.product) {
        purchase.product = handleImageProduct(cloneDeep(purchase.product))
      }
      return purchase
    })

    const response = {
      message: 'Lấy đơn mua thành công',
      data: purchases,
    }
    return responseSuccess(res, response)
  } catch (error) {
    return responseError(res, 'Lỗi khi lấy đơn mua')
  }
}

export const deletePurchases = async (req: Request, res: Response) => {
  try {
    const user_id = req.jwtDecoded.id
    const deletedData = await PurchaseModel.deleteOne({
      user: user_id,
      status: STATUS_PURCHASE.IN_CART,
    })
    return responseSuccess(res, {
      message: `Xoá ${deletedData.deletedCount} đơn thành công`,
    })
  } catch (error) {
    console.log(error)
  }
}
