import React from 'react'

export default function AddPurchase() {
  return (
    <div className='flex gap-2 mt-4'>
      <div className='flex  items-center justify-center border-2 border-gray-200 rounded-full'>
        <button type='button' className=' flex items-center px-3 w-[40px] h-[45px] rounded-l-full hover:bg-gray-200 '>
          <span role='img' className='anticon'>
            <svg width='14' height='2' viewBox='0 0 14 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2L1 0ZM13 2C13.5523 2 14 1.55228 14 1C14 0.447715 13.5523 0 13 0V2ZM1 2L13 2V0L1 0L1 2Z'
                fill='black'
              ></path>
            </svg>
          </span>
        </button>
        <div className=' flex items-center px-3 w-[40px] h-[45px] text-base font-bold justify-center'>2</div>
        <button type='button' className='flex items-center px-3 w-[40px] h-[45px] rounded-r-full hover:bg-gray-200 '>
          <span role='img' className='anticon'>
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1 6C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8L1 6ZM13 8C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6V8ZM1 8L13 8V6L1 6L1 8Z'
                fill='black'
              ></path>
              <path
                d='M6 13C6 13.5523 6.44772 14 7 14C7.55228 14 8 13.5523 8 13L6 13ZM8 1C8 0.447715 7.55228 -2.41411e-08 7 0C6.44771 2.41411e-08 6 0.447715 6 1L8 1ZM8 13L8 1L6 1L6 13L8 13Z'
                fill='black'
              ></path>
            </svg>
          </span>
        </button>
      </div>
      <div className='flex  items-center  justify-center border-2 rounded-full w-[285px] h-[48px] bg-black text-white text-base hover:bg-black/80'>
        <button
          type='button'
          className='ant-btn ant-btn-primary size-16 w-100 flex-1 btn-black h-50 radius-38 pd-14-23 flex-center btn-add-cart'
        >
          <span role='img' className='anticon'>
            <svg width='22' height='19' viewBox='0 0 22 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M21 6.99953H16.21L11.83 0.439531C11.64 0.159531 11.32 0.0195312 11 0.0195312C10.68 0.0195312 10.36 0.159531 10.17 0.449531L5.79 6.99953H1C0.45 6.99953 0 7.44953 0 7.99953C0 8.08953 0.00999996 8.17953 0.04 8.26953L2.58 17.5395C2.81 18.3795 3.58 18.9995 4.5 18.9995H17.5C18.42 18.9995 19.19 18.3795 19.43 17.5395L21.97 8.26953L22 7.99953C22 7.44953 21.55 6.99953 21 6.99953ZM11 2.79953L13.8 6.99953H8.2L11 2.79953ZM17.5 16.9995L4.51 17.0095L2.31 8.99953H19.7L17.5 16.9995ZM11 10.9995C9.9 10.9995 9 11.8995 9 12.9995C9 14.0995 9.9 14.9995 11 14.9995C12.1 14.9995 13 14.0995 13 12.9995C13 11.8995 12.1 10.9995 11 10.9995Z'
                fill='white'
              ></path>
            </svg>
          </span>
          <span className='pl-2'>Thêm vào giỏ hàng</span>
        </button>
      </div>
      <div className='flex  items-center  justify-center border-2 rounded-full w-[125px] h-[48px] bg-gradient-to-r from-[#f0a80e] via-[#c43131] to-[#671f57] text-white text-base '>
        <button
          type='button'
          className='ant-btn ant-btn-primary size-16 w-100 flex-1 btn-black h-50 radius-38 pd-14-23 flex-center btn-add-cart'
        >
          Mua Ngay
        </button>
      </div>
    </div>
  )
}
