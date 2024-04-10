import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import MainLayout from './layouts/MainLayout'

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
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
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
    }
  ])
  return routeElements
}
