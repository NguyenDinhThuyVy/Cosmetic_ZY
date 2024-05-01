import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'
import ProductSale from '../ProductSale'
import { Product } from 'src/types/product.type'
interface Props {
  data?: any
  product?: Product
}

function FlashSale({ data }: Props) {
  const [listItem, setListItem] = useState([])
  const fectchBannerItem = async () => {
    if (data) {
      setListItem(data)
    }
  }
  useEffect(() => {
    fectchBannerItem()
  }, [])
  console.log(data)
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={-30}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        className=' w-full lace-items-center text-sm px-8 py-5'
      >
       {listItem?.length > 0 && (
  <Swiper>
    {listItem.slice(0, 9).map((product, index) => (
      product.price_before_discount !== product.price ? (
        <SwiperSlide key={index}>
          <ProductSale product={product} />
        </SwiperSlide>
      ) : null
    ))}
  </Swiper>
)}
    </>
  )
}

export default FlashSale
