import { Router } from 'express'
import paymentController from '../../controllers/payment.controller'
import authMiddleware from '../../middleware/auth.middleware'
import helpersMiddleware from '../../middleware/helpers.middleware'
// import purchaseMiddleware from '../../middleware/purchase.middleware'
import { wrapAsync } from '../../utils/response'

export const userProductsRouter = Router()

userProductsRouter.post(
  '/:product_id',
  authMiddleware.verifyAccessToken,
  helpersMiddleware.idRule('product_id'),
  // helpersMiddleware.idValidator,
  wrapAsync(ProductController.addCommentToProduct)
)
