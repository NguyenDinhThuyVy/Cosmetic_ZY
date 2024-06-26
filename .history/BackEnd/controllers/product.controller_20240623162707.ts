import { Request, Response } from 'express'
import { responseSuccess, ErrorHandler, responseError } from '../utils/response'
import { ProductModel } from '../database/models/product.model'
import { STATUS } from '../constants/status'
import mongoose from 'mongoose'
import { isAdmin } from '../utils/validate'
import { uploadFile, uploadManyFile } from '../utils/upload'
import { HOST } from '../utils/helper'
import { FOLDERS, FOLDER_UPLOAD, ROUTE_IMAGE } from '../constants/config'
import fs from 'fs'
import { omitBy } from 'lodash'
import { ORDER, SORT_BY } from '../constants/product'

const removeImageProduct = (image) => {
  if (image !== undefined && image !== '') {
    fs.unlink(`${FOLDER_UPLOAD}/${FOLDERS.PRODUCT}/${image}`, (err) => {
      if (err) console.error(err)
    })
  }
}

const removeManyImageProduct = (images: string[]) => {
  if (images !== undefined && images.length > 0) {
    images.forEach((image) => {
      removeImageProduct(image)
    })
  }
}

const addProduct = async (req: Request, res: Response) => {
  try {
    const form: Product = req.body
    const {
      name,
      description,
      category,
      image,
      images,
      brand,
      price,
      price_before_discount,
      quantity,
      uses,
      status,
      madeIn,
    } = form
    const product = {
      name,
      description,
      category,
      image,
      images,
      brand,
      price,
      rating: 0,
      price_before_discount,
      quantity,
      uses,
      sold: 0, // Giá trị mặc định cho sold
      view: 0, // Giá trị mặc định cho view
      status: 1, // Giá trị mặc định cho status
      madeIn,
    }
    const productAdd = await new ProductModel(product).save()
    const response = {
      message: 'Tạo sản phẩm thành công',
      data: productAdd.toObject({
        transform: (doc, ret, option) => {
          delete ret.__v
          return ret
        },
      }),
    }
    console.log(response)
    return responseSuccess(res, response)
  } catch (error) {
    console.log(error)
    return responseError(res, 'Không thể tạo sản phẩm')
  }
}

const getProducts = async (req: Request, res: Response) => {
  let {
    page = 1,
    limit = 100,
    category,
    exclude,
    brand,
    sort_by,
    order,
    rating_filter,
    price_max,
    price_min,
    name,
    status,
  } = req.query as {
    [key: string]: string | number
  }

  page = Number(page)
  limit = Number(limit)
  let condition: any = {}
  if (category) {
    condition.category = category
  }
  if (brand) {
    condition.brand = brand
  }
  if (exclude) {
    condition._id = { $ne: exclude }
  }
  if (rating_filter) {
    condition.rating = { $gte: rating_filter }
  }
  if (price_max) {
    condition.price = {
      $lte: price_max,
    }
  }
  if (price_min) {
    condition.price = condition.price
      ? { ...condition.price, $gte: price_min }
      : { $gte: price_min }
  }
  if (!ORDER.includes(order as string)) {
    order = ORDER[0]
  }
  if (!SORT_BY.includes(sort_by as string)) {
    sort_by = SORT_BY[0]
  }
  if (name) {
    condition.name = {
      $regex: name,
      $options: 'i',
    }
  }
  if (status) {
    condition.status = status
  }
  let [products, totalProducts]: [products: any, totalProducts: any] =
    await Promise.all([
      ProductModel.find(condition)
        .populate({ path: 'category brand' })
        .sort({ [sort_by]: order === 'desc' ? -1 : 1 })
        .skip(page * limit - limit)
        .limit(limit)
        .select({ __v: 0, description: 0 })
        .lean(),
      ProductModel.find(condition).countDocuments().lean(),
    ])

  const page_size = Math.ceil(totalProducts / limit) || 1
  const response = {
    message: 'Lấy các sản phẩm thành công',
    data: {
      products,
      pagination: {
        page,
        limit,
        page_size,
      },
    },
  }
  return responseSuccess(res, response)
}

const getAllProducts = async (req: Request, res: Response) => {
  let { category } = req.query
  let condition: any = { status: { $ne: 0 } } // Excluding products with status 0
  if (category) {
    condition.category = category
  }

  let products: any = await ProductModel.find(condition)
    .populate({ path: 'category brand' })
    .sort({ createdAt: -1 })
    .select({ __v: 0, description: 0 })
    .lean()
  // products = products.map((product) => handleImageProduct(product))
  const response = {
    message: 'Lấy tất cả sản phẩm thành công',
    data: products,
  }
  return responseSuccess(res, response)
}
const getProductDelete = async (req: Request, res: Response) => {
  try {
    const productDB: any = await ProductModel.find({ status: 0 })
      .populate({ path: 'category brand' })
      .sort({ createdAt: -1 })
      .select({ __v: 0, description: 0 })
      .lean()

    return responseSuccess(res, {
      message: `Lấy danh sách sản phẩm đã xóa thành công`,
      data: productDB,
    })
  } catch (error) {
    return responseError(res, 'Lỗi khi lấy sản phẩm đã xóa')
  }
}

const getProduct = async (req: Request, res: Response) => {
  let condition = { _id: req.params.product_id }
  const productDB: any = await ProductModel.findOneAndUpdate(
    condition,
    { $inc: { view: 1 } },
    { new: true }
  )
    .populate('category')
    .select({ __v: 0 })
    .lean()
  if (productDB) {
    const response = {
      message: 'Lấy sản phẩm thành công',
      data: productDB,
    }
    return responseSuccess(res, response)
  } else {
    throw new ErrorHandler(STATUS.NOT_FOUND, 'Không tìm thấy sản phẩm')
  }
}

const updateProduct = async (req: Request, res: Response) => {
  const form: Product = req.body
  const {
    name,
    description,
    category,
    image,
    images,
    brand,
    price,
    price_before_discount,
    quantity,
    uses,
    madeIn,
  } = form
  const product = omitBy(
    {
      name,
      description,
      category,
      image,
      images,
      brand,
      price,
      price_before_discount,
      quantity,
      uses,
      madeIn,
    },
    (value) => value === undefined || value === ''
  )
  const productDB = await ProductModel.findByIdAndUpdate(
    req.params.product_id,
    product,
    {
      new: true,
    }
  )
    .select({ __v: 0 })
    .lean()
  if (productDB) {
    const response = {
      message: 'Cập nhật sản phẩm thành công',
      data: productDB,
    }
    return responseSuccess(res, response)
  } else {
    throw new ErrorHandler(STATUS.NOT_FOUND, 'Không tìm thấy sản phẩm')
  }
}
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product_id = req.params.product_id
    const productDB: any = await ProductModel.findByIdAndUpdate(
      product_id,
      { status: 0 },
      { new: true } // this option ensures that the updated document is returned
    ).lean()
    if (productDB) {
      return responseSuccess(res, {
        message: 'Xóa thành công',
        data: productDB,
      })
    } else {
      throw new ErrorHandler(STATUS.NOT_FOUND, 'Không tìm thấy sản phẩm')
    }
  } catch (error) {
    return responseError(res, 'Lỗi khi xóa sản phẩm')
  }
}

const deleteQuantityProducts = async (req: Request, res: Response) => {
  const productId = req.body.product_id

  if (!productId) {
    throw new ErrorHandler(
      STATUS.BAD_REQUEST,
      'Thông tin xóa sản phẩm không hợp lệ'
    )
  }

  const productDB: any = await ProductModel.findById(productId).lean()

  if (!productDB) {
    throw new ErrorHandler(
      STATUS.NOT_FOUND,
      'Không tìm thấy sản phẩm để xóa số lượng'
    )
  }

  productDB.status = 0

  await ProductModel.findByIdAndUpdate(productId, productDB)

  return responseSuccess(res, {
    message: `Đã xóa ${productDB.name}  thành công`,
    data: productDB,
  })
}
const updateDeleteProduct = async (req: Request, res: Response) => {
  const form: Product = req.body
  const { quantity } = form
  const product = omitBy(
    {
      status: 1,
      quantity,
    },
    (value) => value === undefined
  )
  const productDB = await ProductModel.findByIdAndUpdate(
    req.params.product_id,
    product,
    {
      new: true,
    }
  )
    .select({ __v: 0 })
    .lean()
  if (productDB) {
    const response = {
      message: 'Khôi phục sản phẩm thành công',
      data: productDB,
    }
    return responseSuccess(res, response)
  } else {
    throw new ErrorHandler(STATUS.NOT_FOUND, 'Không tìm thấy sản phẩm')
  }
}

const searchProduct = async (req: Request, res: Response) => {
  let { searchText }: { [key: string]: string | any } = req.query
  searchText = decodeURI(searchText)
  let condition = { $text: { $search: `\"${searchText}\"` } }
  if (!isAdmin(req)) {
    condition = Object.assign(condition, { visible: true })
  }
  let products: any = await ProductModel.find(condition)
    .populate('category')
    .sort({ createdAt: -1 })
    .select({ __v: 0, description: 0 })
    .lean()
  // products = products.map((product) => handleImageProduct(product))
  const response = {
    message: 'Tìm các sản phẩm thành công',
    data: products,
  }
  return responseSuccess(res, response)
}

const uploadProductImage = async (req: Request, res: Response) => {
  const path = await uploadFile(req, FOLDERS.PRODUCT)
  const response = {
    message: 'Upload ảnh thành công',
    data: path,
  }
  return responseSuccess(res, response)
}

const uploadManyProductImages = async (req: Request, res: Response) => {
  const paths = await uploadManyFile(req, FOLDERS.PRODUCT)
  const response = {
    message: 'Upload các ảnh thành công',
    data: paths,
  }
  return responseSuccess(res, response)
}
const uploadBrandImage = async (req: Request, res: Response) => {
  const path = await uploadFile(req, FOLDERS.BRAND)
  const response = {
    message: 'Upload ảnh của brand thành công',
    data: path,
  }
  return responseSuccess(res, response)
}

const getSoldProductByCategory = async (req: Request, res: Response) => {
  const categoryId = req.params.categoryId
  try {
    const products: any = await ProductModel.find({ category: categoryId })
      .populate({ path: 'category brand' })
      .lean()

    let totalSold = 0
    for (const product of products) {
      const soldCount = product.sold || 0
      totalSold += soldCount
    }
    const response = {
      message: 'Lấy tất cả sản phẩm thành công',
      data: {
        products: products,
        totalSold: totalSold,
      },
    }
    return responseSuccess(res, response)
  } catch (error) {
    // Xử lý lỗi nếu có
    res.status(500).json({ error: 'Lỗi khi lấy sản phẩm từ danh mục' })
  }
}

const getSoldProductByBrand = async (req: Request, res: Response) => {
  const brandId = req.params.brandId
  try {
    const products: any = await ProductModel.find({ brand: brandId })
      .populate({ path: 'category brand' })
      .lean()
    let totalSold = 0
    for (const product of products) {
      const soldCount = product.sold || 0
      totalSold += soldCount
    }
    const response = {
      message: 'Lấy tất cả sản phẩm thành công',
      data: {
        products: products,
        totalSold: totalSold,
      },
    }
    return responseSuccess(res, response)
  } catch (error) {
    // Xử lý lỗi nếu có
    res.status(500).json({ error: 'Lỗi khi lấy sản phẩm từ thương hiệu' })
  }
}
const addCommentToProduct = async (req: Request, res: Response) => {
  const product_id = req.params.product_id
  const { user, rating, commentItem } = req.body
  try {
    // Tìm và cập nhật sản phẩm trong database
    const product: any = await ProductModel.findByIdAndUpdate(
      product_id,
      {
        $push: {
          comment: {
            user: req.jwtDecoded.id,
            rating: rating,
            commentItem: commentItem,
          },
        },
      },
      { new: true } // Option để trả về sản phẩm sau khi cập nhật
    )

    if (!product) {
      return res.status(404).json({ error: 'Sản phẩm không tồn tại' })
    }
    return res
      .status(200)
      .json({ message: 'Đã thêm comment thành công', data: product })
  } catch (error) {
    console.error('Lỗi khi thêm comment vào sản phẩm:', error)
    return res.status(500).json({ error: 'Lỗi khi thêm comment vào sản phẩm' })
  }
}
const ProductController = {
  addProduct,
  getAllProducts,
  getProductDelete,
  getProducts,
  getProduct,
  updateProduct,
  searchProduct,
  deleteProduct,
  updateDeleteProduct,
  deleteQuantityProducts,
  uploadProductImage,
  uploadManyProductImages,
  uploadBrandImage,
  getSoldProductByCategory,
  getSoldProductByBrand,
  addCommentToProduct,
}

export default ProductController
