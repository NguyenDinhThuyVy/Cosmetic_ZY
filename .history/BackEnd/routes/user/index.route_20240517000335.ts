import { userPurchaseRouter } from './purchase.route'
import { userUserRouter } from './user-user.route'
import { userPaymentRouter } from './payment.route'
import { userProductsRouter } from './product.route'

const userRoutes = {
  prefix: '/',
  routes: [
    {
      path: 'user',
      route: userUserRouter,
    },
    {
      path: 'purchases',
      route: userPurchaseRouter,
    },
    {
      path: 'products',
      route: userProductsRouter,
    },
    {
      path: 'payment',
      route: userPaymentRouter,
    },
  ],
}

export default userRoutes
