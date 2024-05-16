import { Space, Table } from 'antd'
import type { TableProps } from 'antd'

import adminApi from 'src/apis/admin.api'
import { useQuery } from 'react-query'

import useQueryConfig from 'src/hooks/useQueryConfig'
import { useEffect, useState } from 'react'
import FormAccountEdit from '../FormAccountEdit'

import { AiFillEdit } from 'react-icons/ai'
import { FaEye } from 'react-icons/fa6'
import { Brand } from 'src/types/brand.type'
import { Product } from 'src/types/product.type'

function TableBrand() {
  const [editUserId, setEditUserId] = useState<string | null>(null) // State to store the ID of the user being edited
  const [shouldRefetch, setShouldRefetch] = useState<boolean>(false)
  const queryConfig = useQueryConfig()

  const handleEdit = (userId: string) => {
    setEditUserId(userId) // Set the ID of the user being edited
  }
  const handleUpdateSuccess = () => {
    setShouldRefetch(true) // Trigger fetchData khi cập nhật thành công
  }
  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return adminApi.getAllProducts()
    }
  })
  const products = productsData?.data.data
  const desiredBrandName = 'Bioderma' // Ví dụ: Bioderma
  const productsWithDesiredBrand = products.filter((product: any) => product?.brand.name === desiredBrandName)
  console.log(productsWithDesiredBrand)

  const brandQuantities: { [brandName: string]: number } = {}

  // Tính tổng số lượng sản phẩm cho mỗi thương hiệu
  productsWithDesiredBrand.forEach((product: any) => {
    const brandName = product.brand.name
    brandQuantities[brandName] = (brandQuantities[brandName] || 0) + 1
  })

  const columns: TableProps<Brand>['columns'] = [
    {
      title: 'Thương hiệu',
      dataIndex: 'name',
      key: 'name'
      // render: (text) => <Link to='/'>{text}</Link>
    },
    {
      title: 'Số lượng',
      dataIndex: '_id',
      key: '_id',
      render: (_, record) => brandQuantities[record._id] || 0
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size='middle'>
          <button className='bg-none text-black transition-colors hover:text-rose-400'>
            <FaEye className='text-[20px]' />
          </button>
          <button
            type='button'
            onClick={() => handleEdit(record._id)}
            className='bg-none text-black transition-colors hover:text-rose-400'
          >
            <AiFillEdit className='text-[20px]' />
          </button>
        </Space>
      )
    }
  ]

  const { data: brandsData, refetch } = useQuery({
    queryKey: ['brands', queryConfig],
    queryFn: () => {
      return adminApi.getBrands()
    }
  })

  useEffect(() => {
    if (shouldRefetch) {
      refetch()
      setShouldRefetch(false) // Đặt shouldRefetch lại sau khi fetchData đã được gọi
    }
  }, [shouldRefetch])
  if (brandsData) {
    return (
      <>
        {/* Render the FormAccountEdit component if editUserId is not null */}
        {editUserId !== null && (
          <FormAccountEdit
            userId={editUserId}
            onClose={() => setEditUserId(null)}
            onUpdateSuccess={handleUpdateSuccess}
          />
        )}

        {/* Render the table */}
        <Table
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: ['4', '8', '12'],
            defaultPageSize: 4
          }}
          columns={columns}
          dataSource={brandsData.data.data}
        />
      </>
    )
  }
}

export default TableBrand
