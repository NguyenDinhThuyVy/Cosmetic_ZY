import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import ItemTop from '../ItemTop'
import { Product } from 'src/types/product.type'
import { useEffect, useState } from 'react'
interface Props {
  data?: any
  product?: Product
  name?: string
}

function ProductTop({ data, name }: Props) {
  const [listItem, setListItem] = useState<{ sold: any }[]>([])
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
        spaceBetween={-120}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true
        }}
        modules={[Pagination, Navigation]}
        className=' w-full  text-sm  py-8'
      >
        {listItem?.length > 0 &&
          listItem
            ?.sort((a, b) => b.name - a.name)
            .slice(0, 10)
            .map((product, index) => (
              <SwiperSlide key={index}>
                <ItemTop products={product} />
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  )
}

export default ProductTop
