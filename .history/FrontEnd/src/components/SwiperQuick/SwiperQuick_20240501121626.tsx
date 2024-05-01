import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'
import 'src/Styles/SwiperQuick.scss'

interface Props {
  data: any
}
function SwiperQuick({ data }: Props) {
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
        className=' w-[434] text-sm h-[430px] pb-2 name'
      >
        <SwiperSlide>
          <img
            src='https://image.hsv-tech.io/987x0/bbx/common/eec0fe71-0d20-4188-8171-a18e7fc9b221.webp'
            alt=''
            className='object-center object-cover w-full h-full'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://image.hsv-tech.io/987x0/bbx/common/a2861844-7c45-4bd7-9bb5-5396a95eed68.webp'
            alt=''
            className='object-center object-cover w-full h-full'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://image.hsv-tech.io/987x0/bbx/common/02b72ead-c549-4cdd-bfea-e9595c8525da.webp'
            alt=''
            className='object-center object-cover w-full h-full'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://image.hsv-tech.io/987x0/bbx/common/d148fec5-c7f0-4a94-aaf7-27e6124b31de.webp'
            alt=''
            className='object-center object-cover w-full h-full'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://image.hsv-tech.io/987x0/bbx/common/2a92db11-227b-4579-8696-7be2f14bc782.webp'
            alt=''
            className='object-center object-cover w-full h-full'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperQuick
