import { FC, useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'
import 'src/Styles/SwiperQuick.scss'

interface Props {
  data: any
}
function SwiperQuick({ product }: Props) {
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
        {product.images.map((img) => {
          return (
            <SwiperSlide>
              <img
                src='https://image.hsv-tech.io/987x0/bbx/common/eec0fe71-0d20-4188-8171-a18e7fc9b221.webp'
                alt=''
                className='object-center object-cover w-full h-full'
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default SwiperQuick
