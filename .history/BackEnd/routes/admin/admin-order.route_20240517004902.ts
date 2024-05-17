import { Router } from 'express'
import paymentController from '../../controllers/payment.controller'
import authMiddleware from '../../middleware/auth.middleware'
import helpersMiddleware from '../../middleware/helpers.middleware'
import { wrapAsync } from '../../utils/response'

const adminOrderRouter = Router()

adminOrderRouter.get(
  '',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  wrapAsync(paymentController.getAllOrders)
)
adminOrderRouter.put(
  '/:order_id/confirm',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('order_id'),
  // helpersMiddleware.idValidator,
  wrapAsync(paymentController.updateOrderConfirm)
)
adminOrderRouter.put(
  '/:order_id/progress',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('order_id'),
  // helpersMiddleware.idValidator,
  wrapAsync(paymentController.updateOrderProgress)
)
adminOrderRouter.put(
  '/:order_id/delivered',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('order_id'),
  // helpersMiddleware.idValidator,
  wrapAsync(paymentController.updateOrderDelivered)
)
adminOrderRouter.put(
  '/:order_id/cancel',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('order_id'),
  // helpersMiddleware.idValidator,
  wrapAsync(paymentController.updateOrderCancel)
)

export default adminOrderRouter
