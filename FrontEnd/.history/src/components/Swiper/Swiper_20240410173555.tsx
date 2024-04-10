import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
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
          <img src='image1.png' alt='' className='rounded-md' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='2.jpg' alt='' className='rounded-md' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='3.jpg' alt='' className='rounded-md' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='7.jpg' alt='' className='rounded-md' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='4.jpg' alt='' className='rounded-md' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default App
