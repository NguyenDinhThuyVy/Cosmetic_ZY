import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'
import 'src/Styles/SwiperCustom.scss'

interface AppProps {}

const Banner: FC<AppProps> = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        className='h-full w-full justify-center productSale-Font '
      >
        <SwiperSlide className='flex w-full items-center justify-center h-full'>
          <img src='swiper1.webp' alt='' className='rounded-md' />
        </SwiperSlide>
        <SwiperSlide className='flex w-full items-center justify-center h-full'>
          <img src='swiper.webp' alt='' className='rounded-md' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='swiper2.webp' alt='' className='rounded-md' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='swiper3.webp' alt='' className='rounded-md h-[340px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='swiper4.webp' alt='' className='rounded-md' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='swiper5.webp' alt='' className='rounded-md' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner
