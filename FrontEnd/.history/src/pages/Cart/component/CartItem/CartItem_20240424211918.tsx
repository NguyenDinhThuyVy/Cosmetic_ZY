import { Popconfirm } from 'antd'
import React from 'react'

export default function CartItem() {
  return (
    <tr>
      <td className='p-0 text-center'>
        <input type='checkbox'></input>
      </td>
      <td className=''>
        <div className='flex flex-row items-center gap-x-[10px]'>
          <div className='relative'>
            <img
              src='https://image.hsv-tech.io/600x600/bbx/common/aff84cdc-8459-4c87-83ca-3d58c9d146ca.webp'
              alt=''
              width={200}
              height={200}
              className='item-img max-w-[80px] object-cover'
            />
            <Popconfirm
              title='Delete the book'
              description='Are you sure to delete this book?'
              okText='Yes'
              cancelText='No'
            >
              <button className='absolute top-[-15px] right-[-10px] z-40'>
                <i className='fa fa-times' aria-hidden='true'></i>
              </button>
            </Popconfirm>
          </div>
          <span className=''>{cart?.Book.booktitle}</span>
        </div>
      </td>
      <td className='p-0 text-center price-amount amount'>
        <div className='flex items-center gap-x-[10px]'>
          <span className='line-through'>10000</span>
          <span className='text-red-500'>10000</span>
        </div>
      </td>
      {/* <td className="text-center price-amount amount">
                  </td> */}
      <td className='pl-[15px] quantity'>
        <div className='col-wrap product-number'>
          <button className='justify-center w-full col col-minus'>
            <i className='fa fa-light fa-minus fa-xs '></i>
          </button>
          <span className='justify-center w-full col col-number'>1</span>
          <button className='justify-center w-full col col-plus'>
            <i className='fa fa-light fa-plus fa-xs'></i>
          </button>
        </div>
      </td>
      <td className='p-[10px] text-left price-amount amount-sub'>
        <span className=''>10000</span>
      </td>
      <td className='p-[10px] text-left price-amount amount-sub'>
        <span className='text-black'>10</span>
      </td>
    </tr>
  )
}
