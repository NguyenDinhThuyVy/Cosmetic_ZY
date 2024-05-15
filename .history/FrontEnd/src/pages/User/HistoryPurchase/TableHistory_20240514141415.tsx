import React from 'react'
import { Payment } from 'src/types/payment.type'

export default function TableHistory() {
  const columns: TableProps<Payment>['columns'] = [
    {
      title: 'Mã đơn hàng',
      dataIndex: '_id',
      key: '_id',
      width: 100
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
