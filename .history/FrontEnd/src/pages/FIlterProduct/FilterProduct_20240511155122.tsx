import { Breadcrumb } from 'antd'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import 'src/Styles/Header.scss'
import Filter from './component/Fillter'
import Pagination from 'src/components/Pagination'

import Product from 'src/components/Product'
import path from 'src/constants/path'
import { ProductListConfig } from 'src/types/product.type'
import { isUndefined, omit, omitBy } from 'lodash'
import useQueryParams from 'src/hooks/useQueryParams'
import { useQuery } from 'react-query'
import productApi from 'src/apis/product.api'
import { sortBy, order as orderConstant } from 'src/constants/product'
export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}
export default function FilterProduct() {
  const queryParams: QueryConfig = useQueryParams()
  const navigate = useNavigate()

  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || 20,
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      order: queryParams.order,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter,
      category: queryParams.category
    },
    isUndefined
  )
  const { data } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true
  })

  const { order } = queryConfig
  const handlePriceOrder = (orderValue: Exclude<ProductListConfig['order'], undefined>) => {
    navigate({
      pathname: path.filterProduct,
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortBy.price,
        order: orderValue
      }).toString()
    })
  }
  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })
  const handleRemoveAll = () => {
    navigate({
      pathname: path.filterProduct,
      search: createSearchParams(omit(queryConfig, ['price_min', 'price_max', 'rating_filter', 'category'])).toString()
    })
    // setRadioValue(null)
  }
  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        {data && (
          <div className='flex flex-col gap-2 my-4 mx-20'>
            <Breadcrumb
              separator='>'
              items={[
                {
                  title: <Link to={path.home}>Trang chủ</Link>
                },
                {
                  title: <Link to={path.filterProduct}>Trang sản phẩm</Link>
                }
              ]}
            />
            <div className='text-2xl font-bold uppercase mt-5'>Tất cả sản phẩm</div>
            <div className='flex'></div>
            <div className=' mt-4 flex justify-between'>
              <div className='text-lg font-bold uppercase'>Bộ Lọc</div>
              <div className='flex justify-between gap-6'>
                <button
                  onClick={handleRemoveAll}
                  className='flex flex-wrap gap-3 items-center justify-center border rounded-lg border-gray-100 bg-gray-200 p-3 hover:opacity-80'
                >
                  Xóa tất cả bộ lọc
                </button>
                <div className='flex flex-wrap gap-3 items-center justify-center'>
                  <span>{productsData?.data.data.products.length} Kết Quả</span>
                  <span>Lọc Theo</span>
                  <select
                    className='px-4 capitalize bg-white text-black text-left outline-none'
                    value={order || ''}
                    onChange={(event) =>
                      handlePriceOrder(event.target.value as Exclude<ProductListConfig['order'], undefined>)
                    }
                  >
                    <option value='' disabled className='bg-white text-black'>
                      Tất Cả
                    </option>

                    <option value={orderConstant.asc}>Giá: Thấp đến cao</option>
                    <option value={orderConstant.desc}>Giá: Cao đến thấp</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='grid gap-5' style={{ gridTemplateColumns: '20% 80%' }}>
              <div>
                <Filter />
              </div>
              {data.data.data.products.length > 0 ? (
                <div className='flex flex-col items-center justify-center'>
                  <div className='mt-6 grid grid-cols-4 gap-5'>
                    {data.data.data.products.map((product) => (
                      <div className='col-span-1' key={product._id}>
                        <Product product={product} />
                      </div>
                    ))}
                  </div>{' '}
                  <Pagination queryConfig={queryConfig} pageSize={data.data.data.pagination.page_size} />
                </div>
              ) : (
                <div className='w-full flex justify-center items-center'>
                  <img src='https://drive.gianhangvn.com/image/empty-cart.jpg' alt='' className='w-full rounded-2xl' />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
