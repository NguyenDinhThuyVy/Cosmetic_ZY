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
import UserLayout from './layouts/UserLayout'
import Profile from './pages/User/Profile'
import ChangePassword from './pages/User/ChangePassword'
import HistoryPuchase from './pages/User/HistoryPurchase'
import LayoutAdmin from './pages/Admin/layouts/LayoutAdmin'
import Dashboard from './pages/Admin/pages/Dashboard'
import Accounts from './pages/Admin/pages/Accounts'
import Products from './pages/Admin/pages/Products'
import Orders from './pages/Admin/pages/Orders'
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import AdminProfile from './pages/Admin/pages/AdminProfile'
import FormAI from './pages/User/FormAI'
import FilterBrand from './pages/FIlterProduct/FilterBrand'

function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}
function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}
function AdminProtectedRoute() {
  const { isAuthenticated, user } = useContext(AppContext)
  // console.log(user)
  return isAuthenticated && user && user.roles.includes('Admin') ? <Outlet /> : <Navigate to='/login' />
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
      path: path.filterBrand,
      index: true,
      element: (
        <HomeLayout>
          <FilterBrand />
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
      path: '',
      element: <ProtectedRoute />,
      children: [
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
          path: path.user,
          element: (
            <HomeLayout>
              <UserLayout />
            </HomeLayout>
          ),
          children: [
            {
              path: path.profile,
              element: <Profile />
            },
            {
              path: path.changePassword,
              element: <ChangePassword />
            },
            {
              path: path.hitoryPurchase,
              element: <HistoryPuchase />
            },
            {
              path: path.AIform,
              element: <FormAI />
            }
          ]
        }
      ]
    },
    {
      path: '',
      element: <AdminProtectedRoute />,
      children: [
        {
          path: path.admin,
          element: (
            <AdminLayout>
              <LayoutAdmin />
            </AdminLayout>
          ),
          children: [
            {
              path: path.dashboard,
              element: <Dashboard />
            },
            {
              path: path.adminProfile,
              element: <AdminProfile />
            },
            {
              path: path.accounts,
              element: <Accounts />
            },
            {
              path: path.products,
              element: <Products />
            },
            {
              path: path.orders,
              element: <Orders />
            }
          ]
        }
      ]
    }
  ])
  return routeElements
}
