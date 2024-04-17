import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'
import ItemBrand from '../ItemBrand'
interface AppProps {}
const FlashSale: FC<AppProps> = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
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
     <ItemBrand/.
        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>

        </SwiperSlide>
        <SwiperSlide>
          <ProductSale></ProductSale>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default FlashSale
