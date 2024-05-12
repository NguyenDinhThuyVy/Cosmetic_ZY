import React, { useState, ChangeEvent } from 'react'

import purchaseApi from 'src/apis/purchase.api'
import { toast } from 'react-toastify'
import { useQuery } from 'react-query'
import { purchasesStatus } from 'src/constants/purchase'
import { Image, Input, Select } from 'antd'
import { ExtendedPurchase } from 'src/types/purchase.type'
interface Props {
  checkedPurchases: ExtendedPurchase[]
}
export default function Payment({ checkedPurchases }: Props) {
  const { data: purchasesInCartData, refetch } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchases({ status: purchasesStatus.inCart })
  })
  const [address, setAddress] = useState({
    street: '',
    city: '',
    postalCode: '',
    phone: '',
    paymentMethod: 'cash' // Default payment method
  })

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(purchasesInCartData)

    const checkedPurchaseIdsString = localStorage.getItem('checkedPurchaseIds')

    if (!checkedPurchaseIdsString) {
      console.error('No checked purchase IDs found in sessionStorage')
      return
    }

    // Phân tích cú pháp chuỗi JSON thành một mảng JavaScript
    const checkedPurchaseIds = JSON.parse(checkedPurchaseIdsString)

    try {
      // Duyệt qua từng checkedPurchaseId và gửi nó lên API
      for (const checkedPurchaseId of checkedPurchaseIds) {
        const response = await purchaseApi.shippingAddress(checkedPurchaseId, address)
        // Xử lý response ở đây nếu cần
        if (response.status === 200) {
          // Xử lý thành công, ví dụ: cập nhật giao dịch
          // console.log('Shipping address updated successfully')
        } else {
          // Xử lý thất bại, ví dụ: hiển thị thông báo lỗi
          // console.error('Shipping address update failed')
        }
      }

      toast.success('Thanh toán thành công', {
        position: 'top-right',
        autoClose: 1200 // Thời gian tự đóng trong 2 giây
      })

      setTimeout(() => {
        refetch()
      }, 1300)
    } catch (error) {
      toast.error('Thanh toán thất bại')
      // Xử lý lỗi nếu cần
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 m-5 font'>
        <div className='flex flex-col border-2 border-gray-100 rounded-lg p-3'>
          <span className='text-center text-[16px] font-bold uppercase'>Số lượng mặt hàng đã mua</span>
          <table className='table-auto w-full mt-5 text-[12px]'>
            <thead>
              <tr>
                <th className='px-4 py-2 text-center text-[12px]'>Ảnh</th>
                <th className='px-4 py-2 text-center w-[50%] text-[12px]'>Tên sản phẩm</th>
                <th className='px-4 py-2 text-center text-[12px]'>Số lượng</th>
                <th className='px-4 py-2 text-center text-[12px]'>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {checkedPurchases.map((Item) => (
                <>
                  <tr>
                    <td className='px-4 py-2 text-center'>
                      <Image width={80} src={Item.product.image} style={{ borderRadius: '5px' }} />
                    </td>
                    <td className='px-4 py-2'>{Item?.product.name}</td>
                    <td className='px-4 py-2 text-center'>{Item?.buy_count}</td>
                    <td className='px-4 py-2 text-center'>
                      {`${(Item?.product?.price * Item?.buy_count).toLocaleString()} VND`}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div className=' flex gap-4 items-center'>
            <label htmlFor='street' className='text-sm'>
              Street:
            </label>
            <Input value={address.street} onChange={handleChange} required name='street' className='w-[378px]' />
          </div>
          <div className=' flex gap-7 items-center'>
            <label htmlFor='city' className='text-sm'>
              City:
            </label>
            <Input value={address.city} onChange={handleChange} className='w-[378px]' required id='city' name='city' />
          </div>
          <div className=' flex gap-4 items-center'>
            <label htmlFor='postalCode'>Code:</label>
            <Input
              value={address.postalCode}
              onChange={handleChange}
              className='w-[378px]'
              required
              id='postalCode'
              name='postalCode'
            />
          </div>
          <div className=' flex gap-3 items-center'>
            <label htmlFor='phone'>Phone:</label>
            <Input
              id='phone'
              value={address.phone}
              onChange={handleChange}
              required
              name='phone'
              className='w-[378px]'
            />
          </div>
          <div className=' flex gap-2 items-center'>
            <label htmlFor='paymentMethod'>Payment Method:</label>
            <Select defaultValue='cash' style={{ width: 120 }} disabled options={[{ value: 'cash', label: 'Cash' }]} />
          </div>
          <button
            type='submit'
            className='border-solid border-2 border-red-400 w-[80px] mr-0 bg-red-400 rounded-md text-white p-1 hover:opacity-90'
          >
            Complete
          </button>
        </div>
      </form>
    </div>
  )
}
