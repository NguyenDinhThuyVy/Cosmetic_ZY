import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import ItemTop from '../ItemTop'
import { Product } from 'src/types/product.type'
import { useEffect, useState } from 'react'
interface Props {
  data?: any
  product?: Product
}

function ProductTop({ data }: Props) {
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
    ?.filter(product => product.sold > 4) // Lọc ra những sản phẩm có sold > 4
    .slice(0, 10)
    .map((product, index) => (
      <SwiperSlide key={index}>
        <ItemTop products={product} />
      </SwiperSlide>
    ))}
    </>
  )
}

export default ProductTop