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
  createdAt: string
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
            .slice() // Tạo một bản sao của mảng để không làm thay đổi mảng gốc
            .sort((a, b) => {
              if (name === 'sold') {
                return b.sold - a.sold
              } else if (name === 'view') {
                return b.view - a.view
              } else if (name === 'createdAt') {
                // Chuyển đổi chuỗi thời gian thành đối tượng Date để so sánh
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
              }
              return 0 // Nếu name không phải là 'sold', 'view', hoặc 'createdAt', không sắp xếp
            })
            .slice(0, 10) // Chọn chỉ lấy 10 sản phẩm đầu tiên sau khi đã sắp xếp
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
