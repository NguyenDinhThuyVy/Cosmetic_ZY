import React from 'react'

export default function TableHistory() {
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
  return <div>TableHistory</div>
}
