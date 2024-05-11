import { Router } from 'express'
import helpersMiddleware from '../../middleware/helpers.middleware'
import authMiddleware from '../../middleware/auth.middleware'
import { wrapAsync } from '../../utils/response'
import brandController from '../../controllers/brand.controller'

const adminBrandRouter = Router()
adminBrandRouter.get(
  '',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.entityValidator,
  wrapAsync(brandController.getBrands)
)
adminBrandRouter.get('/brands', wrapAsync(brandController.getBrands))
adminBrandRouter.get(
  '/:brand_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('brand_id'),
  helpersMiddleware.idValidator,
  wrapAsync(brandController.getBrand)
)
adminBrandRouter.post(
  '',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,

  helpersMiddleware.entityValidator,
  wrapAsync(brandController.addBrand)
)
adminBrandRouter.put(
  '/:brand_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('brand_id'),
  helpersMiddleware.idValidator,
  helpersMiddleware.entityValidator,
  wrapAsync(brandController.updateBrand)
)
adminBrandRouter.delete(
  '/delete/:brand_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('brand_id'),
  helpersMiddleware.idValidator,
  wrapAsync(brandController.deleteBrand)
)
export default adminBrandRouter
