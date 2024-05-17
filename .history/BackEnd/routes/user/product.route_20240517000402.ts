import { Router } from 'express'
import authMiddleware from '../../middleware/auth.middleware'
import helpersMiddleware from '../../middleware/helpers.middleware'
// import purchaseMiddleware from '../../middleware/purchase.middleware'
import { wrapAsync } from '../../utils/response'
import ProductController from '../../controllers/product.controller'

export const userProductsRouter = Router()

userProductsRouter.post(
  '/:product_id',
  authMiddleware.verifyAccessToken,
  helpersMiddleware.idRule('product_id'),
  // helpersMiddleware.idValidator,
  wrapAsync(ProductController.addCommentToProduct)
)
