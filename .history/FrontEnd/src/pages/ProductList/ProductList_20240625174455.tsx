import { Link, createSearchParams } from 'react-router-dom'
import Banner from 'src/components/Swiper'
import 'src/Styles/Header.scss'
import ItemCategory from 'src/components/ItemCategory/ItemCategory'
import FlashSale from 'src/components/FlashSale'
import Brand from 'src/components/Brand'
import ProductTop from 'src/components/ProductTop'
import Poster from 'src/components/Poster'

import path from 'src/constants/path'

import { useQuery } from 'react-query'

import productApi from 'src/apis/product.api'
import { ProductListConfig } from 'src/types/product.type'
import useConfigHome from 'src/hooks/useConfigHome'

export default function ProductList() {
  const queryConfig = useConfigHome()
  const { data: productsData } = useQuery({
    queryKey: ['productsuser', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true
  })

  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        <div className='flex flex-row gap-5 items-center justify-center my-6 mx-32'>
          <div className='flex h-50 w-2/3 items-start text-[8px] z-0 '>
            <Banner />
          </div>
          <div className='flex flex-col h-[342px] w-1/3 gap-3 '>
            <div className='h-1/2 rounded-md'>
              <img src='image1.webp' alt='' className='rounded-md' />
            </div>
            <div className='h-1/2 rounded-md'>
              <img src='image2.webp' alt='' className='rounded-md' />
            </div>
          </div>
        </div>
        <div className='my-6 mx-28'>
          <div className='text-gray-400 uppercase pt-7 px-5 flex gap-3 font-bold text-xl items-center'>
            Danh Mục Nổi Bật
          </div>
          <div className=' grid grid-cols-8 py-4 place-items-center '>
            <Link
              to={{
                pathname: path.filterProduct,
                search: createSearchParams({
                  ...queryConfig,
                  category: '6630afa40cb55804581770c0'
                }).toString()
              }}
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <ItemCategory img='category1.webp' name='Kem dưỡng mặt'></ItemCategory>
            </Link>
            <Link
              to={{
                pathname: path.filterProduct,
                search: createSearchParams({
                  ...queryConfig,
                  category: '6630b92364d8fa096524aa2d'
                }).toString()
              }}
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <ItemCategory img='category2.webp' name='Serum'></ItemCategory>
            </Link>
            <Link
              to={{
                pathname: path.filterProduct,
                search: createSearchParams({
                  ...queryConfig,
                  category: '6630b93064d8fa096524aa2e'
                }).toString()
              }}
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <ItemCategory img='category3.webp' name='Sữa Tắm'></ItemCategory>
            </Link>
            <Link
              to={{
                pathname: path.filterProduct,
                search: createSearchParams({
                  ...queryConfig,
                  category: '6630b94064d8fa096524aa2f'
                }).toString()
              }}
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <ItemCategory img='category4.webp' name='Toner'></ItemCategory>
            </Link>
            <Link
              to={{
                pathname: path.filterProduct,
                search: createSearchParams({
                  ...queryConfig,
                  category: '6630b94f64d8fa096524aa30'
                }).toString()
              }}
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <ItemCategory img='category5.webp' name='Mặt nạ'></ItemCategory>
            </Link>
            <Link
              to={{
                pathname: path.filterProduct,
                search: createSearchParams({
                  ...queryConfig,
                  category: '6630b95d64d8fa096524aa31'
                }).toString()
              }}
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <ItemCategory img='category6.webp' name='Sửa rữa mặt'></ItemCategory>
            </Link>
            <Link
              to={{
                pathname: path.filterProduct,
                search: createSearchParams({
                  ...queryConfig,
                  category: '6630b96d64d8fa096524aa32'
                }).toString()
              }}
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <ItemCategory img='category7.webp' name='Tẩy trang'></ItemCategory>
            </Link>
            <Link
              to={{
                pathname: path.filterProduct,
                search: createSearchParams({
                  ...queryConfig,
                  category: '6630b97864d8fa096524aa33'
                }).toString()
              }}
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <ItemCategory img='category8.webp' name='Chống nắng'></ItemCategory>
            </Link>
          </div>
        </div>
        {productsData && (
          <div className='my-6 mx-28 w-5/6 flex flex-col  items-center justify-center bg-[#ffc8b5] rounded-lg '>
            <div className='flex justify-between pt-10 items-center w-full px-8'>
              <img src='anh.webp' alt='' className='w-[319px] h-[60px]' />
              <Link
                to={path.filterProduct}
                className='text-rose-800 bg-white border rounded-lg px-8 py-3 font-bold hover:border-rose-700'
                onClick={() => {
                  window.scrollTo(0, 0)
                }}
              >
                Xem Tất Cả
              </Link>
            </div>
            <FlashSale data={productsData.data.data.products}></FlashSale>
          </div>
        )}

        <div className='my-6 mx-28 w-5/6 '>
          <Brand></Brand>
        </div>
        {productsData && (
          <div className='my-10 mx-28 w-5/6'>
            <div className='flex flex-col gap-2 items-center justify-center '>
              <div className='text-center text-2xl font-semibold uppercase mt-6 '>top sản phẩm bán chạy</div>
              <ProductTop data={productsData.data.data.products} name='sold'></ProductTop>
              <Link
                to={path.filterProduct}
                className='text-gray-600 bg-white border-2 border-gray-600 rounded-full px-6 py-2 font-bold hover:border-rose-700 hover:text-rose-700'
                onClick={() => {
                  window.scrollTo(0, 0)
                }}
              >
                Xem Tất Cả
              </Link>
            </div>
          </div>
        )}
        {productsData && (
          <div className='my-10 mx-28 w-5/6'>
            <div className='flex flex-col gap-2 items-center justify-center '>
              <div className='text-center text-2xl font-semibold uppercase mt-6 '>top sản phẩm được quan tâm</div>
              <ProductTop data={productsData.data.data.products} name='view'></ProductTop>
              <Link
                to={path.filterProduct}
                className='text-gray-600 bg-white border-2 border-gray-600 rounded-full px-6 py-2 font-bold hover:border-rose-700 hover:text-rose-700'
                onClick={() => {
                  window.scrollTo(0, 0)
                }}
              >
                Xem Tất Cả
              </Link>
            </div>
          </div>
        )}

        <div className='my-10 mx-28 w-5/6'>
          <Poster />
        </div>
        {productsData && (
          <div className='my-10 mx-28 w-5/6'>
            <div className='flex flex-col gap-2 items-center justify-center '>
              <div className='text-center text-2xl font-semibold uppercase mt-6 '>CÁC MẪU mới nhất</div>
              <ProductTop data={productsData.data.data.products} name='createdAt'></ProductTop>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
