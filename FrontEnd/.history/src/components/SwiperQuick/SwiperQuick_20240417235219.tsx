import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'

import ItemTop from '../ItemTop'
interface AppProps {}
const ProductTop: FC<AppProps> = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={-120}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Navigation]}
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

export default SwiperQuick
