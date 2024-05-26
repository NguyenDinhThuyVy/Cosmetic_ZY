import { createSearchParams, useNavigate } from 'react-router-dom'
import 'src/Styles/Header.scss'

import Pagination from 'src/components/Pagination'

import Product from 'src/components/Product'
import path from 'src/constants/path'
import { ProductListConfig } from 'src/types/product.type'
import { isUndefined, omit, omitBy } from 'lodash'
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
}
