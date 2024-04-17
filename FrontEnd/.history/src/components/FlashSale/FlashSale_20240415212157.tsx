import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'
import ProductSale from '../ProductSale'
interface AppProps {}
const FlashSale: FC<AppProps> = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        className=' w-full lace-items-center text-sm px-8 py-5'
      >
        <SwiperSlide>
          <ProductSale></ProductSale>
        </SwiperSlide>
        <SwiperSlide>
          <ProductSale></ProductSale>
        </SwiperSlide>
        <SwiperSlide>
          <ProductSale></ProductSale>
        </SwiperSlide>
        <SwiperSlide>
          <ProductSale></ProductSale>
        </SwiperSlide>
        <SwiperSlide>
          <ProductSale></ProductSale>
        </SwiperSlide>
        <SwiperSlide>
          <ProductSale></ProductSale>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default FlashSale
