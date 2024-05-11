import { Router } from 'express'
import userController from '../../controllers/user.controller'
import helpersMiddleware from '../../middleware/helpers.middleware'
import userMiddleware from '../../middleware/user.middleware'
import authMiddleware from '../../middleware/auth.middleware'
import { wrapAsync } from '../../utils/response'

const adminEmployeeRouter = Router()
adminEmployeeRouter.get(
  '',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  userController.getEmployees
)
adminEmployeeRouter.post(
  '',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  userMiddleware.addUserRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(userController.addEmployee)
)
adminEmployeeRouter.post(
  '',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  userMiddleware.addUserRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(userController.addEmployee)
)
adminEmployeeRouter.put(
  '/:user_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('user_id'),
  helpersMiddleware.idValidator,
  userMiddleware.updateUserRules(),
  helpersMiddleware.entityValidator,
  wrapAsync(userController.updateUser)
)
adminEmployeeRouter.get(
  '/:user_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('user_id'),
  helpersMiddleware.idValidator,
  wrapAsync(userController.getUser)
)
adminEmployeeRouter.delete(
  '/delete/:user_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('user_id'),
  helpersMiddleware.idValidator,
  wrapAsync(userController.deleteUser)
)
export default adminEmployeeRouter
