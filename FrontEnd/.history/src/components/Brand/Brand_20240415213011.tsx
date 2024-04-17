import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/swiper-bundle.css'
import ItemBrand from '../ItemBrand'
interface AppProps {}
const FlashSale: FC<AppProps> = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={-80}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation]}
        className=' w-full '
      >
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/ea128db2-e4d4-48f8-a9f1-442c96372f23.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/5129ffce-7480-4920-a2e1-372fa69cc3a8.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/d7a00506-6d7c-4e14-8ac3-cd854ebf9da5.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='	https://image.hsv-tech.io/900x439/bbx/product-collections/eddaefda-c91e-4c6d-83ae-a8425901bf1d.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/26e2861b-bd2d-4f1b-81cb-709f6236273a.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/5c9a3619-22ab-4457-a26f-f75ff731fff8.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/41faa8f0-aeb0-46b9-ae31-f63a6fef6339.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/ab1aa59c-1feb-46a0-92e0-806bc85e031d.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/5022bcfe-22e0-4a86-915c-d31209413ef4.webp' />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img='https://image.hsv-tech.io/900x439/bbx/common/f34c628d-957a-4e99-aa1d-87b75fddede4.webp' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default FlashSale
