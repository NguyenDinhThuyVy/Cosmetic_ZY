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
        slidesPerView={5}
        spaceBetween={-20}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        className=' w-full '
      >
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/ea128db2-e4d4-48f8-a9f1-442c96372f23.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/ea128db2-e4d4-48f8-a9f1-442c96372f23.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/ea128db2-e4d4-48f8-a9f1-442c96372f23.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/ea128db2-e4d4-48f8-a9f1-442c96372f23.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/ea128db2-e4d4-48f8-a9f1-442c96372f23.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/ea128db2-e4d4-48f8-a9f1-442c96372f23.webp' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default FlashSale
