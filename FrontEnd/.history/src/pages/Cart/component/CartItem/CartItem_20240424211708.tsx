import { Popconfirm } from 'antd'
import React from 'react'

export default function CartItem() {
  return (
    <tr className={`${loading ? 'cursor-wait' : ''}`}>
      <td className='p-0 text-center'>
        <input type='checkbox' onChange={handleCheckboxChange} checked={checked}></input>
      </td>
      <td className=''>
        <div className='flex flex-row items-center gap-x-[10px]'>
          <div className='relative'>
            <Image
              src={cart?.Book.mainImage[0].url}
              alt=''
              width={200}
              height={200}
              className='item-img max-w-[80px] object-cover'
            />
            <Popconfirm
              title='Delete the book'
              description='Are you sure to delete this book?'
              onConfirm={handleDelete}
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
          <span className='line-through'>
            {cart?.Book.price?.toLocaleString('it-IT', {
              style: 'currency',
              currency: 'VND'
            })}
          </span>
          <span className='text-red-500'>
            {parseFloat(cart?.PriceDiscount)?.toLocaleString('it-IT', {
              style: 'currency',
              currency: 'VND'
            })}
          </span>
        </div>
      </td>
      {/* <td className="text-center price-amount amount">
                  </td> */}
      <td className='pl-[15px] quantity'>
        <div className='col-wrap product-number'>
          {count === 1 ? (
            <Popconfirm
              title='Delete the book'
              description='Are you sure to delete this book?'
              okText='Yes'
              cancelText='No'
            >
              <button className='justify-center w-full col col-minus'>
                <i className='fa fa-light fa-minus fa-xs '></i>
              </button>
            </Popconfirm>
          ) : (
            <button className='justify-center w-full col col-minus'>
              <i className='fa fa-light fa-minus fa-xs '></i>
            </button>
          )}
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
        <span className='text-black'>{book123?.quantity}</span>
      </td>
    </tr>
  )
}
