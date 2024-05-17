import { Request, Response } from 'express'
import { responseSuccess, ErrorHandler } from '../utils/response'
import { STATUS } from '../constants/status'
import { BrandModel } from '../database/models/brand.model'
import { HOST } from '../utils/helper'
import { ROUTE_IMAGE } from '../constants/config'

export const handleImageProduct = (product) => {
  if (product.image !== undefined && product.image !== '') {
    product.image = HOST + `/${ROUTE_IMAGE}/` + product.image
  }
  if (product.images !== undefined && product.images.length !== 0) {
    product.images = product.images.map((image) => {
      return image !== '' ? HOST + `/${ROUTE_IMAGE}/` + image : ''
    })
  }
  return product
}
const addBrand = async (req: Request, res: Response) => {
  const { name, image, description } = req.body
  const brandAdd = await new BrandModel({ name, image, description }).save()
  const response = {
    message: 'Tạo Brand thành công',
    data: brandAdd.toObject({
      transform: (doc, ret, option) => {
        delete ret.__v
        return handleImageProduct(ret)
      },
    }),
  }
  return responseSuccess(res, response)
}

const getBrands = async (req: Request, res: Response) => {
  const { exclude } = req.query
  let condition = exclude ? { _id: { $ne: exclude } } : {}
  const brands = await BrandModel.find(condition).select({ __v: 0 }).lean()
  const response = {
    message: 'Lấy categories thành công',
    data: brands,
  }
  return responseSuccess(res, response)
}

const getBrand = async (req: Request, res: Response) => {
  const brandDB = await BrandModel.findById(req.params.brand_id)
    .select({ __v: 0 })
    .lean()

  if (brandDB) {
    const response = {
      message: 'Lấy brand thành công',
      data: handleImageProduct(brandDB),
    }
    return responseSuccess(res, response)
  } else {
    throw new ErrorHandler(STATUS.BAD_REQUEST, 'Không tìm thấy Brand')
  }
}

const updateBrand = async (req: Request, res: Response) => {
  const { name, image, description } = req.body
  const brandDB = await BrandModel.findByIdAndUpdate(
    req.params.brand_id,
    { name, image, description },
    { new: true }
  )
    .select({ __v: 0 })
    .lean()
  if (brandDB) {
    const response = {
      message: 'Cập nhật brand thành công',
      data: brandDB,
    }
    return responseSuccess(res, response)
  } else {
    throw new ErrorHandler(STATUS.BAD_REQUEST, 'Không tìm thấy brand ')
  }
}

const deleteBrand = async (req: Request, res: Response) => {
  const brand_id = req.params.category_id
  const brandDB = await BrandModel.findByIdAndDelete(brand_id).lean()
  if (brandDB) {
    return responseSuccess(res, { message: 'Xóa thành công' })
  } else {
    throw new ErrorHandler(STATUS.BAD_REQUEST, 'Không tìm thấy Category')
  }
}

const brandController = {
  addBrand,
  getBrand,
  getBrands,
  updateBrand,
  deleteBrand,
}

export default brandController
