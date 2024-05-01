import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'

import ItemTop from '../ItemTop'
import { Product } from 'src/types/product.type'

interface Props {
  data?: any
  product?: Product
}

function ProductSeen({ data }: Props) {
  const [listItem, setListItem] = useState([])
  const fectchBannerItem = async () => {
    if (data) {
      setListItem(data)
    }
  }
  useEffect(() => {
    fectchBannerItem()
  }, [])
  return (
    <>
      <Swiper slidesPerView={4} spaceBetween={-120} className=' w-full  text-sm  py-6'>
        {listItem?.length > 0 &&
          listItem?.slice(0, 1)?.map((product, index) => (
            <SwiperSlide key={index}>
              <ItemTop products={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default ProductSeen
