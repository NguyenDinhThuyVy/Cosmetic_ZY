import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'

import ItemTop from '../ItemTop'
interface AppProps {}
const ProductSeen: FC<AppProps> = () => {
  return (
    <>
      <Swiper slidesPerView={4} spaceBetween={-120} className=' w-full  text-sm  py-6'>
        {listItem?.length > 0 &&
          listItem?.slice(0, 8)?.map((product, index) => (
            <SwiperSlide key={index}>
              <ItemTop products={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default ProductSeen
