import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import ProductSale from 'src/components/ProductSale'

import 'swiper/swiper-bundle.css'
interface AppProps
const FlashSale : FC<AppProps> = () => {
  return (
    <div className='bg-[#ffc8b5] rounded-lg w-full p-10 grid grid-cols-5 gap-6  place-items-center '>
      <ProductSale />
      <ProductSale />
      <ProductSale />
      <ProductSale />
      <ProductSale />
    </div>
  )
}
