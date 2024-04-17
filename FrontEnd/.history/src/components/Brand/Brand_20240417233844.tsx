import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import ItemBrand from '../ItemBrand'
import brand1 from 'src/assets/Brands/brand1.webp'
import brand2 from 'src/assets/Brands/brand1.webp'
import brand3 from 'src/assets/Brands/brand1.webp'
import brand4 from 'src/assets/Brands/brand1.webp'
import brand5 from 'src/assets/Brands/brand1.webp'
import brand6 from 'src/assets/Brands/brand1.webp'
import brand7 from 'src/assets/Brands/brand1.webp'
import brand8 from 'src/assets/Brands/brand1.webp'
import brand9 from 'src/assets/Brands/brand1.webp'
import brand10 from 'src/assets/Brands/brand1.webp'
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
        className=' w-full py-4'
      >
        <SwiperSlide>
          <ItemBrand img={brand1} />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img={brand2} />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img={brand3} />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img={brand4} />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img={brand5} />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img={brand6} />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img={brand7} />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img=8brand2} />
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
