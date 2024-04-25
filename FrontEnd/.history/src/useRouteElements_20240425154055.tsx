import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import MainLayout from './layouts/MainLayout'
import { useContext } from 'react'
import { AppContext } from './contexts/app.contexts'
import HomeLayout from './layouts/HomeLayout/HomeLayout'
import FilterProduct from './pages/FIlterProduct'
import ProductDetail from './pages/ProductDetail'
import path from './constants/path'
import Cart from './pages/Cart'
import Forgetpassword from './pages/ForgetPassword/ForgetPassword'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}
function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <MainLayout>
              <Login />
            </MainLayout>
          )
        },
        {
          path: path.register,
          element: (
            <MainLayout>
              <Register />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: path.home,
      index: true,
      element: (
        <HomeLayout>
          <ProductList />
        </HomeLayout>
      )
    },
    {
      path: path.filterProduct,
      index: true,
      element: (
        <HomeLayout>
          <FilterProduct />
        </HomeLayout>
      )
    },
    {
      path: path.productDetail,
      index: true,
      element: (
        <HomeLayout>
          <ProductDetail />
        </HomeLayout>
      )
    },
    {
      path: path.cart,
      index: true,
      element: (
        <HomeLayout>
          <Cart />
        </HomeLayout>
      )
    },
    {
      path: path.forgetpassword,
      index: true,
      element: (
        <MainLayout>
          <Forgetpassword />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
