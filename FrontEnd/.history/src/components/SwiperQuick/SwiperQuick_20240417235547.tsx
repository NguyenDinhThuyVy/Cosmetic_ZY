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
          <img src='https://image.hsv-tech.io/987x0/bbx/common/eec0fe71-0d20-4188-8171-a18e7fc9b221.webp' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://image.hsv-tech.io/987x0/bbx/common/eec0fe71-0d20-4188-8171-a18e7fc9b221.webp' alt='' />
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
