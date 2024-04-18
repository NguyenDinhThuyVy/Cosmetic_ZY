import { Breadcrumb } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function FilterProduct() {
  return (
    <div className='h-full flex flex-col productSale-Font  '>
      <div className=' min-h-32'>
        <div className='flex my-4 mx-20'>
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
        </div>
      </div>
    </div>
  )
}
