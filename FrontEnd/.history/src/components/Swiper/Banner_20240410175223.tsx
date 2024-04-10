import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface AppProps {}

const Banner: FC<AppProps> = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className='h-full w-full justify-center bg-red-400'
      >
        <SwiperSlide className='flex w-full items-center justify-center h-full'>
          <img src='swiper1.webp' alt='' className='rounded-md' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='swiper2.webp' alt='' className='rounded-md' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='swiper3.webp' alt='' className='rounded-md' />
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
