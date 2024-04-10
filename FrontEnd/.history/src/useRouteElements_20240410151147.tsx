import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import MainLayout from './layouts/MainLayout'

const isAuthenticated = false
function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    path: '',
    element: <RejectedRoute />,
    children: [
      {
        path: 'login',
        element: (
          <RegisterLayout>
            <Login />
          </RegisterLayout>
        )
      },
      {
        path: 'register',
        element: (
          <RegisterLayout>
            <Register />
          </RegisterLayout>
        )
      }
    ]
  },
  ])
  return routeElements
}
