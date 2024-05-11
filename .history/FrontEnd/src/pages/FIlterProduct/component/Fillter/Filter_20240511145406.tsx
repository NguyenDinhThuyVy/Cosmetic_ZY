import { useQuery } from 'react-query'
import productApi from 'src/apis/product.api'
import FilterItem from 'src/components/FilterItem'
import useQueryConfig from 'src/hooks/useQueryConfig'
import { ProductListConfig } from 'src/types/product.type'

export default function Filter() {
  const queryConfig = useQueryConfig()
  const { data: productsData } = useQuery({
    queryKey: ['products', useQueryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })
  console.log(productsData)
  return (
    <div className='flex flex-col '>
      <FilterItem index={1} label='Giá sản phẩm' />
      <FilterItem index={2} label='Danh mục' />
      <FilterItem index={3} label='Thương hiệu' />
      <FilterItem index={4} label='Đánh giá sản phẩm' />
    </div>
  )
}
