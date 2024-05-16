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
  function calculateTotalSphamr(products) {
    return products
      .filter((product) => product.category === '6643a9985eafed2d94a7ee33')
      .map((product) => product.sphamr)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }
  const columns: TableProps<Brand>['columns'] = [
    {
      title: 'Thương hiệu',
      dataIndex: 'name',
      key: 'name'
      // render: (text) => <Link to='/'>{text}</Link>
    },
    {
      title: 'Số lượng sản phẩm',
      dataIndex: 'name', // Đưa vào dữ liệu phù hợp với dữ liệu sản phẩm
      key: 'productCount',
      render: (_, record) => calculateProductCount(record) // Sử dụng hàm calculateProductCount để tính toán số lượng sản phẩm
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
  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return adminApi.getAllProducts()
    }
  })
  console.log(productsData?.data.data)
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
