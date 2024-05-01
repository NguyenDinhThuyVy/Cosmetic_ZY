import { userPurchaseRouter } from './purchase.route'
import { userUserRouter } from './user-user.route'
import { userAddressRouter } from './address.route'
import { userPaymentRouter } from './payment.route'

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
      path: 'address',
      route: userAddressRouter,
    },
    {
      path: 'payment',
      route: userPaymentRouter,
    },
  ],
}

export default userRoutes
