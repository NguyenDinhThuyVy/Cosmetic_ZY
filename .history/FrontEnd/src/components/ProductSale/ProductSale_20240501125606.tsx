// import { Progress, ProgressProps } from 'antd'
import { Link } from 'react-router-dom'

import { FaStar } from 'react-icons/fa6'
import { Modal } from 'antd'
import QuickView from '../QuickView'
import { useState } from 'react'
import path from 'src/constants/path'
import { formatCurrency, generateNameId, rateSale } from 'src/utils/utils'
import ProductRating from '../ProductRating'
interface Props {
  product: any
}
export default function ProductSale({ product }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='relative h-full group'>
      <Link
        to={`${path.home}${generateNameId({ name: product.name, id: product._id })}`}
        className=' p-5  h-[422px]'
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      >
        <div className=' bg-[#ffffff]  w-[262px] flex flex-col justify-between gap-5 items-center rounded-2xl group-hover:scale-105'>
          <div className='flex-1 h-1/2  relative '>
            <img src={product?.image} alt='' className='w-full rounded-t-2xl rounded-tr-2xl' />
            {product.price_before_discount != product.price ? (
              <div className='absolute left-3 top-4 transform  w-[40px] h-[40px] bg-[#252322] text-white px-1 py-2 rounded-full text-[12px] pl-1'>
                -{rateSale(product.price_before_discount, product.price)}
              </div>
            ) : (
              <div />
            )}
          </div>
          <div className='flex-1 h-1/2 '>
            <div className='flex flex-col gap-2 items-center justify-center px-6'>
              <div className='text-sm font-semibold text-black'>{product?.brand}</div>
              <div className='text-[12px] line-clamp-2 text-center leading-relaxed font-normal text-black'>
                {product?.name}
              </div>
              <div className='text-[13px] flex gap-3 px-3'>
                <div className='font-semibold text-black'>{formatCurrency(product.price)}đ</div>
                <div className='font-medium text-gray-400 line-through'>
                  {formatCurrency(product.price_before_discount)}đ
                </div>
                <div className='relative bg-[#c73030] w-[30px] h-[15px] flex justify-center items-center rounded-full'>
                  <div className='absolute text-gray-100 text-[10px] p-1'>
                    -{rateSale(product.price_before_discount, product.price)}
                  </div>
                </div>
              </div>
              <div className='flex gap-1 px-3 text-gray-300 items-center justify-center'>
                <ProductRating rating={product.rating} />
                <span className='text-black ml-2 text-sm'>(0)</span>
              </div>

              <div className=' w-full font pb-3 relative mt-2'>
                <div className=' relative '>
                  <div>
                    <div
                      className='relative overflow-hidden w-full rounded-full'
                      style={{
                        backgroundColor: 'rgba(199, 49, 48, 0.314)'
                      }}
                    >
                      <div
                        className=''
                        style={{
                          width: '25.6667%',
                          height: '20px',
                          background:
                            'repeating-linear-gradient(-45deg, rgba(199, 49, 48, 0.6), rgba(199, 49, 48, 0.6) 10px, rgb(199, 49, 48) 10px, rgb(199, 49, 48) 20px)'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className='absolute mt-[-20px] px-2 text-red-50'>Đã bán 13 sản phẩm</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <button
        className='absolute top-1/3 left-[40%] translate-x-[-50%] và translate-y-[-50%] hidden  group-hover:block bg-[#121010b6] text-gray-100 px-4 py-3 font-bold rounded-full hover:bg-gradient-to-r from-[#f0a80edb] via-[#c43131d8] to-[#671f57d1]'
        onClick={showModal}
      >
        Xem Nhanh
      </button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1100} footer={null}>
        <QuickView product={product} />
      </Modal>
    </div>
  )
}
