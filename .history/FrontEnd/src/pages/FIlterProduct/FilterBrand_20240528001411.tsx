import { createSearchParams, useNavigate } from 'react-router-dom'
import 'src/Styles/Header.scss'

import Pagination from 'src/components/Pagination'

import Product from 'src/components/Product'
import path from 'src/constants/path'
import { ProductListConfig } from 'src/types/product.type'
import { isUndefined, omitBy } from 'lodash'
import useQueryParams from 'src/hooks/useQueryParams'
import { useQuery } from 'react-query'
import productApi from 'src/apis/product.api'
import { sortBy, order as orderConstant } from 'src/constants/product'
import { useState } from 'react'
import adminApi from 'src/apis/admin.api'
export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}
export default function FilterBrand() {
  const queryParams: QueryConfig = useQueryParams()
  const navigate = useNavigate()
  const [showAllContent, setShowAllContent] = useState(false)
  const handleShowMore = () => {
    setShowAllContent(true)
  }

  const handleHideContent = () => {
    setShowAllContent(false)
  }
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
      category: queryParams.category,
      brand: queryParams.brand
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
  const { data: brandData } = useQuery({
    queryKey: ['brand', queryConfig],
    queryFn: () => {
      return adminApi.getBrandsbyID(queryConfig.brand || '')
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
  const BrandData: any =
  return (
    <div className='h-full flex flex-col font '>
      {brandData && (
        <div className='flex flex-col justify-center items-center gap-4'>
          <div>
            <img src={brandData.data.data.image} alt='' className='w-[120px] h-[120px] rounded-xl' />
          </div>

          <div className='text-[23px] font-semibold'>{brandData.data.data.name}</div>
          <div className='text-gray-500'>Số lượng sản phẩm : 84</div>
          <div className='w-[70%] ' style={{ height: showAllContent ? 'auto' : '60px', overflow: 'hidden' }}>
            <div dangerouslySetInnerHTML={{ __html: brandData.data.data.description } as any} />
          </div>
          {!showAllContent ? (
            <button
              onClick={handleShowMore}
              className='mt-[-90px] text-black bg-gradient-to-t from-white via-white to-white/50 p-16 font-bold  w-full text-[16px]'
            >
              Xem thêm
            </button>
          ) : (
            <button onClick={handleHideContent} className='mt-4 text-black text-center font-bold text-[16px] w-full'>
              Ẩn bớt
            </button>
          )}
        </div>
      )}

      <div className=' min-h-32'>
        {data && (
          <div className='flex flex-col gap-2 my-4 mx-20'>
            <div className='flex'></div>
            <div className=' mt-4 flex justify-between'>
              <div className='text-lg font-bold uppercase'>Bộ Lọc</div>
              <div className='flex justify-between gap-6'>
                <div className='flex flex-wrap gap-3 items-center justify-center'>
                  <span>{data?.data.data.products.length} Kết Quả</span>
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

            <div className='grid gap-5'>
              {/* <div>
                <Filter />
              </div> */}
              {data.data.data.products.length > 0 ? (
                <div className='flex flex-col items-center justify-center'>
                  <div className='mt-6 grid grid-cols-5 gap-5'>
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
