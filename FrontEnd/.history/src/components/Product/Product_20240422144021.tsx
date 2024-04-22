// import { Progress, ProgressProps } from 'antd'
import { Link } from 'react-router-dom'

import { FaStar } from 'react-icons/fa6'
import { useState } from 'react'
import { Modal } from 'antd'
import QuickView from '../QuickView'
import 'src/Styles/Header.scss'
export default function Product() {
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
    <Link to='/filterProduct' className='group h-[419px] font'>
      <div className=' w-[260px] flex flex-col justify-between gap-5 items-center rounded-2xl shadow-gray-400/90 group-hover:shadow-lg '>
        <div className='flex-1 h-1/2  relative '>
          <img
            src='https://image.hsv-tech.io/600x600/bbx/common/58686708-4fe0-4737-b8ef-fcee0391fa03.webp'
            alt=''
            className='w-full rounded-t-2xl rounded-tr-2xl'
          />
          <button
            className='absolute top-1/2 left-1/2 translate-x-[-50%] và translate-y-[-50%] hidden  group-hover:block bg-[#121010b6] text-gray-100 px-4 py-3 font-bold rounded-full hover:bg-gradient-to-r from-[#f0a80edb] via-[#c43131d8] to-[#671f57d1]'
            onClick={showModal}
          >
            Xem Nhanh
          </button>
          <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1100} footer={null}>
            <QuickView />
          </Modal>
          <div className='absolute left-3 top-4 transform  w-[40px] h-[40px] bg-[#d4795a] text-white px-1 py-2 rounded-full'>
            -20%
          </div>
        </div>
        <div className='flex-1 h-1/2 '>
          <div className='flex flex-col gap-2 items-center justify-center px-6'>
            <div className='text-sm font-semibold text-black'>AHC</div>
            <div className='text-[12px] line-clamp-2 text-center leading-relaxed font-normal text-black'>
              [Trải Nghiệm Combo 11 Mặt Nạ HOT Nhất] Mặt Nạ AHC + Goodal + Dermatory Dưỡng Da Sáng &amp; Săn Mịn
            </div>
            <div className='text-[13px] flex gap-3 px-3'>
              <div className='font-semibold text-black'>291.000đ</div>
              <div className='font-medium text-gray-400 line-through'>771.000đ</div>
              <div className='relative bg-[#c73030] w-[30px] h-[15px] flex justify-center items-center rounded-full'>
                <div className='absolute text-gray-100 text-[11px] p-1'>11%</div>
              </div>
            </div>
            <div className='flex gap-1 px-3 text-gray-300 items-center justify-center'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className='text-black ml-2 text-sm'>(0)</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
