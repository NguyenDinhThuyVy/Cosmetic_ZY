import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import ProductSale from 'src/components/ProductSale'

import 'swiper/swiper-bundle.css'
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
        className='bg-[#ffc8b5] rounded-lg w-full p-10  place-items-center'
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
