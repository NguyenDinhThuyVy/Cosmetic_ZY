import { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'
import ProductSale from '../ProductSale'
import { Product } from 'src/types/product.type'
interface Props {
  data?: any
  product?: Product
}
interface AppProps {}
const FlashSale: FC<AppProps> = ({ data }: Props) => {
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
        {listItem?.length > 0 &&
          listItem?.slice(10, 18)?.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductSale product={product}></ProductSale>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default FlashSale
