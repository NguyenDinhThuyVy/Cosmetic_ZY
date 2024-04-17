import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'
import 'src/Styles/SwiperQuick.scss'
import ItemTop from '../ItemTop'
interface AppProps {}
const SwiperQuick: FC<AppProps> = () => {
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
        className=' w-full  text-sm  py-6'
      >
        <SwiperSlide>
          <img src='https://image.hsv-tech.io/987x0/bbx/common/eec0fe71-0d20-4188-8171-a18e7fc9b221.webp' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://image.hsv-tech.io/987x0/bbx/common/a2861844-7c45-4bd7-9bb5-5396a95eed68.webp' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://image.hsv-tech.io/987x0/bbx/common/02b72ead-c549-4cdd-bfea-e9595c8525da.webp' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://image.hsv-tech.io/987x0/bbx/common/eec0fe71-0d20-4188-8171-a18e7fc9b221.webp' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://image.hsv-tech.io/987x0/bbx/common/eec0fe71-0d20-4188-8171-a18e7fc9b221.webp' alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperQuick
