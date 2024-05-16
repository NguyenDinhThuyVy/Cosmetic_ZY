import { Space, Table } from 'antd'
import type { TableProps } from 'antd'

import adminApi from 'src/apis/admin.api'
import { useQuery } from 'react-query'
import { User } from 'src/types/user.type'
import useQueryConfig from 'src/hooks/useQueryConfig'
import { useEffect, useState } from 'react'
import FormAccountEdit from '../FormAccountEdit'

import { AiFillEdit } from 'react-icons/ai'
import { FaEye } from 'react-icons/fa6'

function TableBrand() {
  const [editUserId, setEditUserId] = useState<string | null>(null) // State to store the ID of the user being edited
  const [shouldRefetch, setShouldRefetch] = useState<boolean>(false)
  const queryConfig = useQueryConfig()

  const handleEdit = (userId: string) => {
    setEditUserId(userId) // Set the ID of the user being edited
  }

  const columns: TableProps<User>['columns'] = [
    {
      title: 'Thương hiệu',
      dataIndex: 'name',
      key: 'name'
      // render: (text) => <Link to='/'>{text}</Link>
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
  const handleUpdateSuccess = () => {
    setShouldRefetch(true) // Trigger fetchData khi cập nhật thành công
  }

  const { data: brandsData, refetch } = useQuery({
    queryKey: ['brands', queryConfig],
    queryFn: () => {
      return adminApi.getAllUser()
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
