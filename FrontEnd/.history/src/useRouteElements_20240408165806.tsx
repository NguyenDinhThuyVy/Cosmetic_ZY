import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
import MainLayout from './layouts/MainLayout'

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
    {
      path: '/login',
      element: (
        <MainLayout>
          <Login />
        </MainLayout>
      )
    },
    {
      path: '/register',
      element: (
        <MainLayout>
          <Register />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
