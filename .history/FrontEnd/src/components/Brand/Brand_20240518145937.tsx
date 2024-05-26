import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import ItemBrand from '../ItemBrand'
import brand1 from 'src/assets/Brands/brand1.webp'
import brand11 from 'src/assets/Brands/brand11.webp'
import brand3 from 'src/assets/Brands/brand3.webp'
import brand4 from 'src/assets/Brands/brand4.webp'
import brand5 from 'src/assets/Brands/brand5.webp'
import brand12 from 'src/assets/Brands/brand12.webp'
import brand7 from 'src/assets/Brands/brand7.webp'
import brand13 from 'src/assets/Brands/brand13.webp'
import brand14 from 'src/assets/Brands/brand14.webp'
import brand10 from 'src/assets/Brands/brand10.webp'
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
          <ItemBrand img={brand11} />
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
          <ItemBrand img={brand12} />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img={brand7} />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img={brand13} />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img={brand14} />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBrand img={brand10} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default FlashSale
