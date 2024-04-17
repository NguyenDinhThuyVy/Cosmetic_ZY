import React from 'react'
import ProductSale from 'src/components/ProductSale'

export default function FlashSale() {
  return (
    <div className='bg-[#ffc8b5] rounded-lg w-full p-10 grid grid-cols-5 gap-6 place-items-center '>
      <ProductSale />
      <ProductSale />
    </div>
  )
}
