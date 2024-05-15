import React, { useState, ChangeEvent } from 'react'
import purchaseApi from 'src/apis/purchase.api'
import { toast } from 'react-toastify'
import { useMutation, useQuery } from 'react-query'
import { ConfigProvider, Image, Input, Radio } from 'antd'
import { PayPalButton } from 'react-paypal-button-v2'
import { ExtendedPurchase } from 'src/types/purchase.type'
import { BsCreditCard2BackFill } from 'react-icons/bs'

import moment from 'moment';
import paymentApi from 'src/apis/payment.api'
interface Props {
  checkedPurchases: ExtendedPurchase[]
  totalCheckedPurchasePrice: number
}
export default function Payment({ checkedPurchases, totalCheckedPurchasePrice }: Props) {
  const [payment, setPayment] = useState({
    street: '',
    totalMoney: 0,
    city: '',
    name: '',
    phone: '',
    paymentMethod: 0,
    purchases: [],
    order: []
  })
  const myTheme = {
    components: {
      Radio: {
        colorPrimary: 'black',
        colorPrimaryHover: 'black',
        fontFamily: 'Montserrat',
        paddingXS: 10,
        marginXS: 10,
        controlInteractiveSize: 18
      }
    }
  }

  const Date =
  const date = moment(Date, 'YYYYMMDDHHmmss')
  const formattedDate = date.format('DD-MM-YYYY HH:mm')
  const [isPayPalButtonSuccess, setIsPayPalButtonSuccess] = useState(false)
  const [showPayPalButton, setShowPayPalButton] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setPayment((prevPayment) => ({
      ...prevPayment,
      [name]: value
    }))
  }

  const buyProductsMutation = useMutation({
    mutationFn: purchaseApi.buyProducts
  })

  const { data: paymentData } = useQuery({
    queryKey: ['payment', ],
    queryFn: () => paymentApi.getPayment()
  })
  console.log(paymentData)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const purchasesIds = checkedPurchases.map((purchase) => purchase._id)
    const orders = checkedPurchases.map((purchase) => ({
      product_id: purchase.product._id,
      buy_count: purchase.buy_count.toString()
    }))

    const body = {
      street: payment.street,
      city: payment.city,
      phone: payment.phone,
      name: payment.name,
      totalMoney: totalCheckedPurchasePrice,
      purchase: purchasesIds,
      order: orders,
      paymentMethod: payment.paymentMethod
    }
    if (payment.paymentMethod !== 0 && payment.paymentMethod !== 1) {
      toast.error('Vui lòng chọn phương thức thanh toán', {
        position: 'top-right',
        autoClose: 1200
      })
    } else {
      buyProductsMutation.mutate(body)
      setIsPayPalButtonSuccess(true)
    }
  }
  const total: any = (totalCheckedPurchasePrice / 24000).toFixed(2)

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
        <div className='flex gap-3'>
          {isPayPalButtonSuccess ? ( // Check if payment is successful
            // Your new content after successful payment
            <div className='flex flex-col gap-4 border-2 border-gray-100 rounded-lg p-5 w-full'>
              <div className='mt-[20px]'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLUjvZxYG3cFjZb-pyaof20zvvG6ctBK10g&usqp=CAU'
                  alt=''
                  className='w-[150px] h-[150px] rounded-full mx-auto'
                />
                {/* <h1 className='text-3xl font-bold text-green-600'>{t('Paymentsuccess')}</h1> */}
                {/* <p className='pt-[10px]'>
                  {t('code')} <span className='text-xl font-bold'>{code}</span>.
                </p>
                <p className='pt-[10px]'>
                  {t('time')} <span className='text-xl font-bold'>{formattedDate}</span>.
                </p> */}
                {/* <p className="pt-[10px]">
            Bạn có thể xem chi tiết trong :{' '}
            <Link
              href="/customer-history"
              className="text-xl font-bold hover:text-gray-500/80"
            >
              Lịch sử mua hàng
            </Link>
          </p> */}
                <p className='pt-[10px]'>
                  {/* {t('timedelivery')} <span className='text-xl font-bold'>{formattedDateShip}</span>. */}
                </p>
                <div className='mt-4 flex justify-center p-t[10px]'>
                  {/* <button
                    onClick={() => handleClose()}
                    className='w-40 h-10 mt-[10px] rounded-full bg-green-500 text-white hover:bg-green-500/80'
                  >
                    {t('Continueshopping')}
                  </button> */}
                </div>
              </div>
            </div>
          ) : (
            <div className='flex flex-col gap-4 border-2 border-gray-100 rounded-lg p-5'>
              <span className='text-center text-[14px] font-bold uppercase'>Form nhập thông tin</span>
              <div className=' flex gap-4 items-center'>
                <label htmlFor='street' className='text-sm'>
                  Đường:
                </label>
                <Input value={payment.street} onChange={handleChange} required name='street' className='w-[378px]' />
              </div>
              <div className=' flex gap-6 items-center'>
                <label htmlFor='city' className='text-sm'>
                  T.Phố:
                </label>
                <Input
                  value={payment.city}
                  onChange={handleChange}
                  className='w-[378px]'
                  required
                  id='city'
                  name='city'
                />
              </div>
              <div className=' flex gap-9 items-center'>
                <label htmlFor='city' className='text-sm'>
                  Tên:
                </label>
                <Input
                  value={payment.name}
                  onChange={handleChange}
                  className='w-[378px]'
                  required
                  id='name'
                  name='name'
                />
              </div>
              <div className=' flex gap-9 items-center'>
                <label htmlFor='phone'>SDT:</label>
                <Input
                  id='phone'
                  value={payment.phone}
                  onChange={handleChange}
                  required
                  name='phone'
                  className='w-[378px]'
                />
              </div>
              <div className='flex gap-3'>
                <div className='flex flex-col gap-4 border-2 border-gray-100 rounded-lg p-5  w-full'>
                  <span className='text-center text-[14px] font-bold uppercase'>Chọn phương thức thanh toán</span>
                  <ConfigProvider theme={myTheme}>
                    {' '}
                    <Radio.Group>
                      <div className='flex flex-col gap-6'>
                        <Radio
                          value='cash'
                          onChange={() => {
                            setPayment((prevPayment) => ({ ...prevPayment, paymentMethod: 0 }))
                            setShowPayPalButton(false)
                          }}
                        >
                          <span>Thanh toán khi nhận hàng</span>
                        </Radio>
                        <Radio
                          value='paypal'
                          onChange={() => {
                            setPayment((prevPayment) => ({ ...prevPayment, paymentMethod: 2 }))
                            setShowPayPalButton(true)
                          }}
                        >
                          <span className='flex gap-2 items-center justify-center'>
                            Thanh toán trực tuyến <BsCreditCard2BackFill fontSize={20} />
                          </span>
                        </Radio>
                      </div>
                    </Radio.Group>
                  </ConfigProvider>

                  {showPayPalButton && (
                    <div className='flex flex-col gap-4 border-2 border-gray-100 rounded-lg p-5 h-[140px] w-full overflow-hidden'>
                      <PayPalButton
                        amount={total}
                        onSuccess={() => {
                          setPayment((prevPayment) => ({ ...prevPayment, paymentMethod: 1 }))
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
              <button
                type='submit'
                className='border-solid border-2 border-red-400 w-[80px] mr-0 bg-red-400 rounded-md text-white p-1 hover:opacity-90'
              >
                Complete
              </button>
            </div>
          )}
          <div className='flex flex-col gap-4 border-2 border-gray-100 rounded-lg p-5 h-[400px] w-full'>
            <img
              src='https://marketplace.canva.com/EAFpJf0PEd0/1/0/1236w/canva-nhi%E1%BB%81u-m%C3%A0u-s%E1%BA%AFc-m%E1%BA%ABu-postcard-h%E1%BB%8Da-ti%E1%BA%BFt-%C4%91%C3%A1ng-y%C3%AAu-c%C3%A1m-%C6%A1n-v%C3%AC-%C4%91%C3%A3-%C4%91%E1%BA%B7t-h%C3%A0ng-73yYjLudyys.jpg'
              alt=''
              className='h-full'
            />
          </div>
        </div>
      </form>
    </div>
  )
}
