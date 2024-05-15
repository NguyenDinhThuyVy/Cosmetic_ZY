import { Space, Table } from 'antd'
import type { TableProps } from 'antd'
// import { Link } from 'react-router-dom'
import adminApi from 'src/apis/admin.api'
import { useQuery } from 'react-query'
import { Product } from 'src/types/product.type'
import useQueryConfig from 'src/hooks/useQueryConfig'
import { useEffect, useState } from 'react'
import FormProductEdit from '../FormProductEdit'
import { FaRecycle } from 'react-icons/fa6'
type OnChange = NonNullable<TableProps<any>['onChange']>
type Filters = Parameters<OnChange>[1]

function TableDataDelete({ shouldRefetch }: { shouldRefetch: boolean }) {
  const [editProductId, setEditProductId] = useState<string | null>(null)
  const [viewProductId, setViewProductId] = useState<string | null>(null)
  const [shouldRefetch1, setShouldRefetch] = useState<boolean>(false)
  const [ProductData, setProductData] = useState<any>(null)
  const [filteredInfo] = useState<Filters>({})

  const handleView = (productId: string) => {
    setViewProductId(productId) // Set the ID of the user being edited
  }
  const categoryName = (filteredInfo?.category as any)?.name

  const queryConfig = useQueryConfig()
  const { data: productsData, refetch } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return adminApi.getAllProducts()
    }
  })

  const { data: categoriesData } = useQuery({
    queryKey: ['categories', queryConfig],
    queryFn: () => {
      return adminApi.getcategories()
    }
  })
  const filters =
    categoriesData?.data.data.map(function (category) {
      return { text: category.name, value: category.name }
    }) || []
  const fetchData = async () => {
    try {
      const productData = await adminApi.getAllProducts()
      setProductData(productData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  useEffect(() => {
    if (shouldRefetch1) {
      fetchData()
      setShouldRefetch(false) // Đặt shouldRefetch lại sau khi fetchData đã được gọi
    }
  }, [shouldRefetch1])

  useEffect(() => {
    fetchData()
  }, [productsData])
  const handleUpdateSuccess = () => {
    console.log(shouldRefetch)
    setShouldRefetch(true) // Trigger fetchData khi cập nhật thành công
  }

  const columns: TableProps<Product>['columns'] = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      width: 400
    },
    {
      title: 'Giá sản phẩm',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity
    },

    {
      title: 'Danh mục',
      dataIndex: ['category', 'name'],
      key: 'category.name',
      filters: filters,
      filteredValue: categoryName,
      onFilter: (value: string | number | any, record: Product) => {
        const stringValue = typeof value === 'string' ? value : String(value)
        return record['category']['name'].includes(stringValue)
      },
      ellipsis: true
    },

    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size='middle'>
          <button
            type='button'
            onClick={() => handleView(record._id)}
            className='bg-none text-black transition-colors hover:text-blue'
          >
            <FaRecycle className='text-[20px]' />
          </button>
        </Space>
      )
    }
  ]

  if (ProductData) {
    const { data }: any = ProductData
    const products: Product[] = data.data

    return (
      <>
        {editProductId !== null && (
          <FormProductEdit
            productId={editProductId}
            onClose={() => setEditProductId(null)}
            onUpdateSuccess={handleUpdateSuccess}
          />
        )}
        {viewProductId !== null && (
          <FormProductEdit
            productId={viewProductId}
            onClose={() => setEditProductId(null)}
            onUpdateSuccess={handleUpdateSuccess}
          />
        )}
        <Table
          pagination={{
            showSizeChanger: true, // Hiển thị tùy chọn lựa chọn pageSize
            pageSizeOptions: ['6', '8', '12'], // Các tùy chọn pageSize
            defaultPageSize: 6 // Kích thước mặc định của pageSize
          }}
          columns={columns}
          dataSource={products}
        />
      </>
    )
  } else if (productsData) {
    const { data }: any = productsData
    const products: Product[] = data.data

    return (
      <>
        {' '}
        {editProductId !== null && (
          <FormProductEdit
            productId={editProductId}
            onClose={() => setEditProductId(null)}
            onUpdateSuccess={handleUpdateSuccess}
          />
        )}
        <Table
          pagination={{
            showSizeChanger: true, // Hiển thị tùy chọn lựa chọn pageSize
            pageSizeOptions: ['6', '8', '12'], // Các tùy chọn pageSize
            defaultPageSize: 6 // Kích thước mặc định của pageSize
          }}
          columns={columns}
          dataSource={products}
        />
      </>
    )
  }
}

export default TableDataDelete
