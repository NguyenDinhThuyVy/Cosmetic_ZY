import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        className='h-full w-full justify-center'
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

export default App
