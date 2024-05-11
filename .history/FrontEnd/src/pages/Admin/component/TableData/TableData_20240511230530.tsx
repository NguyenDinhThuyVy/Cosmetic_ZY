import { Modal, Space, Table, message } from 'antd'
import type { TableProps } from 'antd'
// import { Link } from 'react-router-dom'
import adminApi from 'src/apis/admin.api'
import { useMutation, useQuery } from 'react-query'
import { Product } from 'src/types/product.type'
import useQueryConfig from 'src/hooks/useQueryConfig'
import { useEffect, useState } from 'react'
import FormProductEdit from '../FormProductEdit'

import { MdDelete } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { IoEye } from 'react-icons/io5'
type OnChange = NonNullable<TableProps<any>['onChange']>
type Filters = Parameters<OnChange>[1]

function TableData({ shouldRefetch }: { shouldRefetch: boolean }) {
  const [editProductId, setEditProductId] = useState<string | null>(null)
  const [viewProductId, setViewProductId] = useState<string | null>(null)
  const [shouldRefetch1, setShouldRefetch] = useState<boolean>(false)
  const [ProductData, setProductData] = useState<any>(null)
  const [filteredInfo] = useState<Filters>({})

  const handleEdit = (productId: string) => {
    setEditProductId(productId) // Set the ID of the user being edited
  }
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
  console.log(productsData, '2')
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
  const deleteProductMutation = useMutation({
    mutationFn: adminApi.deleteProduct,
    onSuccess: () => {
      refetch()
    }
  })

  const handleDelete = (productId: string) => {
    Modal.confirm({
      title: 'Xác nhận xoá',
      content: 'Bạn có chắc chắn muốn xoá sản phẩm này không?',
      okText: 'Xoá',
      cancelText: 'Hủy',
      async onOk() {
        try {
          await deleteProductMutation.mutate([productId])
          message.success('Xoá sản phẩm  thành công')
          refetch() // Refetch data after successful deletion
        } catch (error) {
          message.error('Xoá sản phẩm thất bại: ')
        }
      },

      okButtonProps: {
        style: {
          backgroundColor: '#b94545'
        }
      }
    })
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
            onClick={() => handleDelete(record._id)}
            className='bg-none text-black transition-colors hover:text-blue'
          >
            <MdDelete className='text-[20px]' />
          </button>
          <button
            type='button'
            onClick={() => handleEdit(record._id)}
            className='bg-none text-black transition-colors hover:text-blue'
          >
            <AiFillEdit className='text-[20px]' />
          </button>
          <button
            type='button'
            onClick={() => handleView(record._id)}
            className='bg-none text-black transition-colors hover:text-blue'
          >
            <IoEye className='text-[20px]' />
          </button>
        </Space>
      )
    }
  ]

  if (ProductData) {
    const { data }: any = ProductData
    const products: Product[] = data.data.products

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
    const products: Product[] = data.data.products

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

export default TableData
