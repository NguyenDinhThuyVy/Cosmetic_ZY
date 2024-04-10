import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import MainLayout from './layouts/MainLayout'
import { useContext } from 'react'
import { AppContext } from './contexts/app.contexts'
import HomeLayout from './layouts/HomeLayout/HomeLayout'

// function ProtectedRoute() {
//   return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
// }

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
          path: 'login',
          element: (
            <MainLayout>
              <Login />
            </MainLayout>
          )
        },
        {
          path: 'register',
          element: (
            <MainLayout>
              <Register />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '/',
      index: true,
      element: (
        <HomeLayout>
          <ProductList />
        </HomeLayout>
      )
    }
  ])
  return routeElements
}
