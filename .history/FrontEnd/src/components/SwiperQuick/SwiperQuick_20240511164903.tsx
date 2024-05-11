import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'
import 'src/Styles/SwiperQuick.scss'

interface Props {
  product: any
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
        {product.images.map((img: string, index: number) => {
          return (
            <SwiperSlide key={index}>
              <img src={img} alt='' className='object-center object-cover w-full h-full' />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default SwiperQuick
