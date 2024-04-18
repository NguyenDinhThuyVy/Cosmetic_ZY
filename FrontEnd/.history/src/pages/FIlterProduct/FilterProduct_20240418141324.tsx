import { Breadcrumb } from 'antd'
import React from 'react'

export default function FilterProduct() {
  return (
    <div className='h-full flex flex-col productSale-Font  '>
      <div className=' min-h-32'>
        <div className='flex my-6 mx-32'>
          <Breadcrumb
            items={[
              {
                title: 'Home'
              },
              {
                title: <a href=''>Application Center</a>
              },
              {
                title: <a href=''>Application List</a>
              },
              {
                title: 'An Application'
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}
