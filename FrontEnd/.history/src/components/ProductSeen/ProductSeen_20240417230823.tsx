import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'

import ItemTop from '../ItemTop'
interface AppProps {}
const ProductSeen: FC<AppProps> = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={-120}

   }
        className=' w-full  text-sm  py-6'
      >
        <SwiperSlide>
          <ItemTop />
        </SwiperSlide>
        <SwiperSlide>
          <ItemTop />
        </SwiperSlide>
        <SwiperSlide>
          <ItemTop />
        </SwiperSlide>
        <SwiperSlide>
          <ItemTop />
        </SwiperSlide>
        <SwiperSlide>
          <ItemTop />
        </SwiperSlide>
        <SwiperSlide>
          <ItemTop />
        </SwiperSlide>
        <SwiperSlide>
          <ItemTop />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ProductSeen
