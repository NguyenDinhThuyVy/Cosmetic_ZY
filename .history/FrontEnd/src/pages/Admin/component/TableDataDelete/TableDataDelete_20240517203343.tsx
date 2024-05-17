import { Form, Input, Modal, Space, Table } from 'antd'
import type { TableProps } from 'antd'
// import { Link } from 'react-router-dom'
import adminApi from 'src/apis/admin.api'
import { useQuery } from 'react-query'
import { Product } from 'src/types/product.type'
import useQueryConfig from 'src/hooks/useQueryConfig'
import { useState } from 'react'
import { FaRecycle } from 'react-icons/fa6'
type OnChange = NonNullable<TableProps<any>['onChange']>
type Filters = Parameters<OnChange>[1]

function TableDataDelete() {
  const [filteredInfo] = useState<Filters>({})

  const categoryName = (filteredInfo?.category as any)?.name
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedRecord, setSelectedRecord] = useState(null)

  const showModal = (record) => {
    setSelectedRecord(record)
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setSelectedRecord(null)
  }

  const queryConfig = useQueryConfig()
  const { data: productsData } = useQuery({
    queryKey: ['orders', queryConfig],
    queryFn: () => {
      return adminApi.getDeleteProduct()
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

  const columns: TableProps<Product>['columns'] = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      width: 500
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
      width: '80px',
      render: (record) => (
        <Space size='middle'>
          <button
            type='button'
            onClick={() => showModal(record)}
            className='bg-none text-black transition-colors hover:text-blue'
          >
            <FaRecycle className='text-[20px]' />
          </button>
        </Space>
      )
    }
  ]
  if (productsData) {
    const { data }: any = productsData
    const products: Product[] = data.data

    return (
      <>
        <Table
          pagination={{
            showSizeChanger: true, // Hiển thị tùy chọn lựa chọn pageSize
            pageSizeOptions: ['6', '8', '12'], // Các tùy chọn pageSize
            defaultPageSize: 6 // Kích thước mặc định của pageSize
          }}
          columns={columns}
          dataSource={products}
        />
        <Modal title='Modal Title' visible={isModalVisible} onCancel={handleCancel} footer={null}>
          {/* Content of the modal, you can use selectedRecord to display record-specific information */}
          <div>
            {' '}
            <Form form={form}>
              <Form.Item label='Số lượng sản phẩm' name='name'>
                <Input />
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </>
    )
  }
}

export default TableDataDelete
