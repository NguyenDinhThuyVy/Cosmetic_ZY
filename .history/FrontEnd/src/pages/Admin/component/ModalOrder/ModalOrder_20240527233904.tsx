import React from 'react'
import { Image, Modal } from 'antd'
import { Order } from 'src/types/order.type'

interface Props {
  orderId: any
  orderdata: Order[]
  visible: boolean
  onClose: () => void
}

const ModalOrder: React.FC<Props> = ({ orderdata, visible, onClose, orderId }) => {
  // Tìm chi tiết đơn hàng có orderId tương ứng
  const orderDetail = orderdata.find((order: Order) => order._id === orderId)

  // Kiểm tra nếu không tìm thấy chi tiết đơn hàng thì không hiển thị nội dung
  if (!orderDetail) {
    return null
  }

  console.log(orderDetail)
  // Tạo đường dẫn hình ảnh
  const imageUrls = orderDetail.order?.map((orderItem) => {
    const product = orderItem?.product
    return product ? 'http://localhost:4000/images/' + product.image : ''
  })
  return (
    <Modal title={`Chi tiết đơn hàng: `} open={visible} onCancel={onClose} footer={null} width={1100}>
      <table className='table-auto w-full mt-5'>
        <thead>
          <tr>
            <th className='px-4 py-2 text-center'>Ảnh</th>
            <th className='px-4 py-2 text-center'>Tên sản phẩm</th>
            <th className='px-4 py-2 text-center'>Số lượng</th>
            <th className='px-4 py-2 text-center'>Tổng tiền</th>
            <th className='px-4 py-2 text-center'>Mã Code</th>
          </tr>
        </thead>
        <tbody>
          {orderDetail.order.map((orderItem, index) => (
            <>
              <tr>
                <td className='px-4 py-2 text-center'>
                  <Image width={120} src={imageUrls[index]} style={{ borderRadius: '5px' }} />
                </td>
                <td className='px-4 py-2'>{orderItem?.product.name}</td>
                <td className='px-4 py-2 text-center'>{orderItem?.buy_count}</td>
                <td className='px-4 py-2 text-center'>
                  {`${(orderItem?.product?.price * orderItem?.buy_count).toLocaleString()} VND`}
                </td>
                <td className='px-4 py-2 text-center'>{orderDetail?.shippingAddress[0]?.postalCode}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </Modal>
  )
}

export default ModalOrder
