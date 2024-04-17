import { useState, useEffect, FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import ProductSale from 'src/components/ProductSale'

import 'swiper/swiper-bundle.css'
interface AppProps {}
const FlashSale: FC<AppProps> = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        className='h-full w-full justify-center  '
      >
        <SwiperSlide>
          <ProductSale></ProductSale>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <ProductSale></ProductSale>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <ProductSale></ProductSale>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <ProductSale></ProductSale>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <ProductSale></ProductSale>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <ProductSale></ProductSale>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default FlashSale
