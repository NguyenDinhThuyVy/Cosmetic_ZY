import { Button, Modal, Table, TableProps, Tag } from 'antd'
import { useQuery } from 'react-query'
import paymentApi from 'src/apis/payment.api'
import { Payment } from 'src/types/payment.type'
import {
  ClockCircleOutlined,
  SyncOutlined,
  CheckCircleOutlined,
  CarOutlined,
  SmileOutlined,
  QuestionOutlined
} from '@ant-design/icons'
import moment from 'moment'
import { formatCurrency } from 'src/utils/utils'
import { useState } from 'react'
export default function TableHistory() {
  const { data: paymentData } = useQuery({
    queryKey: ['payment'],
    queryFn: () => {
      return paymentApi.getPayment()
    }
  })
  const { data }: any = paymentData
  const payment: any = data.data
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  // Hàm để hiển thị modal
  const showModal = (id: string) => {
    setSelectedId(id)
    setIsModalVisible(true)
  }

  // Hàm để đóng modal
  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const columns: TableProps<Payment>['columns'] = [
    {
      title: 'Mã đơn hàng',
      dataIndex: '_id',
      key: '_id',
      render: (text, record) => <Button onClick={() => showModal(record._id)}>{text}</Button>
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
      key: 'totalMoney',
      render: (text) => formatCurrency(text)
    },
    {
      title: 'Ngày đặt',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => moment(text).format('DD/MM/YYYY HH:mm:ss')
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let statusText
        let icon
        let color

        switch (status) {
          case 1:
            statusText = 'Đang chờ xác nhận'
            icon = <ClockCircleOutlined />
            color = 'volcano' // red-orange
            break
          case 2:
            statusText = 'Đang chuẩn bị'
            icon = <SyncOutlined spin />
            color = 'geekblue' // blue
            break
          case 3:
            statusText = 'Bàn giao đơn vị vận chuyển'
            icon = <CarOutlined />
            color = 'orange' // orange
            break
          case 4:
            statusText = 'Đang giao'
            icon = <CheckCircleOutlined />
            color = 'gold' // yellow
            break
          case 5:
            statusText = 'Thành công'
            icon = <SmileOutlined />
            color = 'green' // green
            break
          default:
            statusText = 'Không xác định'
            icon = <QuestionOutlined />
            color = 'default' // grey
            break
        }

        return (
          <Tag icon={icon} color={color}>
            {statusText}
          </Tag>
        )
      }
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
        dataSource={payment}
      />
      <Modal
        title='Chi tiết đơn hàng'
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Đóng
          </Button>
        ]}
      >
        <p>Mã đơn hàng: {selectedId}</p>
        {/* Các thông tin khác về đơn hàng */}
      </Modal>
    </>
  )
}
