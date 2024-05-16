import { Modal, Space, Table, message } from 'antd'
import type { TableProps } from 'antd'

import adminApi from 'src/apis/admin.api'
import { useMutation, useQuery } from 'react-query'
import { User } from 'src/types/user.type'
import useQueryConfig from 'src/hooks/useQueryConfig'
import { useEffect, useState } from 'react'
import FormAccountEdit from '../FormAccountEdit'
import { MdDelete } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { FaEye } from 'react-icons/fa6'

function TableBrand() {
  const [editUserId, setEditUserId] = useState<string | null>(null) // State to store the ID of the user being edited
  const [shouldRefetch, setShouldRefetch] = useState<boolean>(false)
  const [userData, setUserData] = useState<any>(null)
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
          <button
            onClick={() => handleDelete(record._id)}
            className='bg-none text-black transition-colors hover:text-rose-400'
          >
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
  const queryConfig = useQueryConfig()
  const fetchData = async () => {
    try {
      const userData = await adminApi.getAllUser()
      setUserData(userData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    if (shouldRefetch) {
      fetchData()
      setShouldRefetch(false) // Đặt shouldRefetch lại sau khi fetchData đã được gọi
    }
  }, [shouldRefetch])

  const handleUpdateSuccess = () => {
    setShouldRefetch(true) // Trigger fetchData khi cập nhật thành công
  }

  const { data: usersData, refetch } = useQuery({
    queryKey: ['users', queryConfig],
    queryFn: () => {
      return adminApi.getAllUser()
    }
  })
  console.log(usersData)
  const deleteUserMutation = useMutation({
    mutationFn: adminApi.deleteUser,
    onSuccess: () => {
      refetch()
    }
  })
  const handleDelete = (userId: string) => {
    Modal.confirm({
      title: 'Xác nhận xoá',
      content: 'Bạn có chắc chắn muốn xoá người dùng này?',
      okText: 'Xoá',
      cancelText: 'Hủy',
      async onOk() {
        try {
          await deleteUserMutation.mutate([userId])
          message.success('Xoá người dùng thành công')
          refetch() // Refetch data after successful deletion
        } catch (error) {
          message.error('Xoá người dùng thất bại: ')
        }
      },

      okButtonProps: {
        style: {
          backgroundColor: '#b94545'
        }
      }
    })
  }
  if (userData) {
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
          dataSource={userData.data.data}
        />
      </>
    )
  } else if (usersData) {
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
          dataSource={usersData.data.data}
        />
      </>
    )
  }
}

export default TableBrand
