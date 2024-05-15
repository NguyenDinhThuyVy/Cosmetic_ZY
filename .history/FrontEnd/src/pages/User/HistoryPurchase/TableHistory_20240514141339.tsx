import React from 'react'
import { Payment } from 'src/types/payment.type'

export default function TableHistory() {
  const columns: TableProps<Payment>['columns'] = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      width: 400
    },
    {
      title: 'Giá sản phẩm',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity'
    }
  ]
  return <div>TableHistory</div>
}
