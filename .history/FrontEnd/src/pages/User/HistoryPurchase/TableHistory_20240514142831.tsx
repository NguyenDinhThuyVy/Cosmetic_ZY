import { Table, TableProps } from 'antd'
import { useQuery } from 'react-query'
import paymentApi from 'src/apis/payment.api'
import { Payment } from 'src/types/payment.type'

export default function TableHistory() {
  const { data: paymentData, refetch } = useQuery({
    queryKey: ['payment'],
    queryFn: () => {
      return paymentApi.getPayment()
    }
  })
  const { data }: any = paymentData
  // const payment: any = data.data.products
  console.log(data)
  const columns: TableProps<Payment>['columns'] = [
    {
      title: 'Mã đơn hàng',
      dataIndex: '_id',
      key: '_id'
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
  return (
    <>
      {' '}
      <Table
        pagination={{
          showSizeChanger: true, // Hiển thị tùy chọn lựa chọn pageSize
          pageSizeOptions: ['6', '8', '12'], // Các tùy chọn pageSize
          defaultPageSize: 6 // Kích thước mặc định của pageSize
        }}
        columns={columns}
        // dataSource={products}
      />
    </>
  )
}
