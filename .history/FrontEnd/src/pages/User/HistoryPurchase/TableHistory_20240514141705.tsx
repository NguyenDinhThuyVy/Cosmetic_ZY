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
      title: 'Tên người đặt',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'street',
      key: 'street'
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'totalMoney',
      key: 'totalMoney'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status'
    }
  ]
  return <div>TableHistory</div>
}
