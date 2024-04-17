import React from 'react'
import ProductSale from 'src/components/ProductSale'

export default function FlashSale() {
  return (
    <div className='bg-[#ffc8b5] rounded-lg w-full p-10 flex '>
      <ProductSale />
      <ProductSale />
    </div>
  )
}
