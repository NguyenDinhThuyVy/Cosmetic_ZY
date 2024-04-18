import { Breadcrumb } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function FilterProduct() {
  return (
    <div className='h-full flex flex-col productSale-Font  '>
      <div className=' min-h-32'>
        <div className='flex flex-col gap-2 my-4 mx-20'>
          <Breadcrumb
            separator='>'
            items={[
              {
                title: 'Home'
              },
              {
                title: <Link to='/'>Trang sản phẩm</Link>
              }
            ]}
          />
          <div className='text-2xl font-bold uppercase mt-5'>TOP SẢN PHẨM BÁN CHẠY</div>
          <div className=' mt-5 flex justify-between'>
            <div className='text-lg font-bold uppercase'>Bộ Lọc</div>
            <div className='flex flex-wrap gap-2'>
              <span>689 Kết Quả</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
