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
interface Item {
  sold: number
  view: number
  // Add other properties if necessary
}
function ProductTop({ data, name }: Props) {
  const [listItem, setListItem] = useState<Item[]>([])
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
            ?.slice(0) // Make a copy of the array to avoid mutating the original
            .sort((a, b) => {
              // Compare prices ('sold' property) in descending order
              return b.sold - a.sold
            })
            .slice(0, 10) // Take the top 10 items
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
