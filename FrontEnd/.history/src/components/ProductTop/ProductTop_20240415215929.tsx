import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'
import ProductSale from '../ProductSale'
interface AppProps {}
const ProductTop: FC<AppProps> = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={-30}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        className=' w-full lace-items-center text-sm px-8 py-5'
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  )
}

export default ProductTop
