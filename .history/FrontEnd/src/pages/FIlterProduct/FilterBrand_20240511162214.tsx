import { createSearchParams, useNavigate } from 'react-router-dom'
import 'src/Styles/Header.scss'

import Pagination from 'src/components/Pagination'

import Product from 'src/components/Product'
import path from 'src/constants/path'
import { ProductListConfig } from 'src/types/product.type'
import { isUndefined, omit, omitBy } from 'lodash'
import useQueryParams from 'src/hooks/useQueryParams'
import { useQuery } from 'react-query'
import productApi from 'src/apis/product.api'
import { sortBy, order as orderConstant } from 'src/constants/product'
import { useState } from 'react'
export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}
export default function FilterBrand() {
  const queryParams: QueryConfig = useQueryParams()
  const navigate = useNavigate()
  const [showAllContent, setShowAllContent] = useState(false)
  const handleShowMore = () => {
    setShowAllContent(true)
  }

  const handleHideContent = () => {
    setShowAllContent(false)
  }
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || 20,
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      order: queryParams.order,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter,
      category: queryParams.category
    },
    isUndefined
  )
  const { data } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true
  })

  const { order } = queryConfig
  const handlePriceOrder = (orderValue: Exclude<ProductListConfig['order'], undefined>) => {
    navigate({
      pathname: path.filterProduct,
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortBy.price,
        order: orderValue
      }).toString()
    })
  }
  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })
  const handleRemoveAll = () => {
    navigate({
      pathname: path.filterProduct,
      search: createSearchParams(omit(queryConfig, ['price_min', 'price_max', 'rating_filter', 'category'])).toString()
    })
    // setRadioValue(null)
  }
  return (
    <div className='h-full flex flex-col font '>
      <div className='flex flex-col justify-center items-center gap-4'>
        <div>
          <img
            src='https://image.hsv-tech.io/400x0/bbx/product-collections/b12cbf2a-f20e-4020-bceb-25025e00459c.webp'
            alt=''
            className='w-[120px] h-[120px] rounded-xl'
          />
        </div>
        <div className='text-[23px] font-semibold'>AHC</div>
        <div className='text-gray-500'>Số lượng sản phẩm : 84</div>
        <div className='w-[70%] ' style={{ height: showAllContent ? 'auto' : '60px', overflow: 'hidden' }}>
          <div id='iaat'>
            <p id='iwj1'>
              <em id='i46l'>
                <span id='iu7j'>Công dụng chính:</span> Kem chống nắng dạng sữa dưỡng da bảo vệ hoàn hảo Anessa Perfect
                UV Skincare Milk SPF 50+ PA++++ với kết cấu dạng sữa mỏng nhẹ, giúp chống nắng vượt trội nhiều giờ liền
                mà vẫn có một làn da mịn mượt, không gây nhờn rít, bóng dầu. Đặc biệt, khả năng chống trôi trong nước
                &amp; mồ hôi với công nghệ độc quyền Aqua Booster, lên đến 80 phút trong hồ bơi, sản phẩm rất thích hợp
                dùng cho những hoạt động ngoài trời hay đi chơi, du lịch, công tác.
              </em>
              <br id='iwce' />
              <em id='itc5'>
                <span id='is775'>Đối tượng sử dụng:</span> Thích hợp với mọi loại da
              </em>
              <br id='itq0o' />
              <span id='iafuy'></span>
              <br id='izatv' />
            </p>
            <img
              id='in205'
              src='https://image.hsv-tech.io/bbx/common/f71c3a0f-29f5-4593-a28a-4471e478d52e.webp'
              alt='Sunscreen product'
            />
            <h2 id='i8bvb'>
              <br />
              Công dụng sữa chống nắng Anessa Perfect UV Sunscreen Skincare Milk
            </h2>
            <ul id='iod8p'>
              <li id='ik83f'>Kết cấu dạng sữa mỏng nhẹ, khô ráo, dễ dàng thẩm thấu qua da, không gây nhờn rít.</li>
              <li id='izxvh'>Chỉ số chống nắng cao với SPF 50+, PA++++, bảo vệ da tối ưu.</li>
              <li id='iqngw'>
                Công nghệ chống nắng 360° ngăn chặn tác hại của tia UV trên mọi bề mặt da và mọi góc độ.
              </li>
              <li id='i8t2w'>
                Công nghệ độc quyền Aqua Booster, chống trôi trong nước &amp; mồ hôi rất cao, lên đến 80 phút trong hồ
                bơi.
              </li>
              <li id='iszax'>
                Công nghệ “chống ma sát” độc đáo lần đầu tiên có trong sữa chống nắng, càng ma sát, lớp chống nắng mịn
                mượt sẽ không bị bong ra và gia tăng khả năng chống nắng, bảo vệ da hơn.
              </li>
              <li id='icpuk'>Chống cát dính vào da.</li>
              <li id='inbkm'>
                50% chiết xuất dưỡng da (chiết xuất hoa hồng, collagen, lô hội và super Hyaluronic Acid) giúp da mịn
                mượt, gia tăng độ đàn hồi, chống oxi hoá, chống viêm nhiễm và kiểm soát bóng dầu.
              </li>
              <li id='iz8dg'>Công thức với mùi hương thanh mát từ Cam, Quýt dễ chịu.</li>
              <li id='ihy6h'>Có thể dùng làm lớp lót trang điểm và dễ dàng làm sạch với sữa rửa mặt.</li>
            </ul>
            <div id='infxo' className='media-wrap image-wrap'>
              <img
                src='https://file.hstatic.net/200000223113/file/dedanglamsach_934f7a6d45a548e5980be2d601ad6c51.png'
                id='ij1gu'
                className='media-wrap image-wrap'
                alt='Sunscreen cleansing'
              />
            </div>
            <p id='idzfj'>
              <br id='iajwe' />
              <br id='imzaj' />
              <img
                id='iawki'
                src='https://image.hsv-tech.io/bbx/common/6208b755-9a22-4d33-913e-b232d2486ca3.webp'
                alt='Sunscreen usage'
              />
            </p>
            <h2 id='i174o'>Hướng dẫn sử dụng</h2>
            <span id='im2oc'>- Lắc đều để hạt bi hòa hợp sản phẩm trước khi sử dụng.</span>
            <span id='i4pc7'>
              <br />- Dùng sau bước dưỡng da, thoa đều khắp vùng da cần bảo vệ.
            </span>
            <br id='iv8sl' />
            <span id='i7vjm'>
              - Để đạt hiệu quả cao nhất, nên thoa lại sau khi tiếp xúc nhiều với nước hoặc lau bằng khăn.
            </span>
            <br id='ijy1m' />
            <span id='i355f'>- Dễ dàng làm sạch với sữa rửa mặt.</span>
            <br id='iucz9' />
            <span id='ihcth'>Lưu ý:</span>
            <br id='ixj8k' />
            <span id='i41i9'>- Tránh tiếp xúc với mắt. Nếu có, rửa ngay bằng nước lạnh hoặc nước ấm</span>
            <br id='in37p' />
            <span id='izgv8'>- Không sử dụng cho vùng da bị tổn thương</span>
            <br id='i8ik8' />
            <span id='ib2rm'>- Ngưng dùng ngay khi có biểu hiện kích ứng và tham khảo ý kiến bác sĩ da liễu</span>
            <br id='i2byq' />
            <span id='ie7gk'>
              - Bảo quản tránh ánh sáng trực tiếp, nơi có nhiệt độ cao hoặc ẩm ướt. Để xa tầm tay trẻ
            </span>
            <br id='imoeb' />
            <p id='iqe1g'></p>
            <div id='ipo67' className='media-wrap image-wrap'>
              <img
                src='https://file.hstatic.net/200000223113/file/huongdansudung_87b9ccd21beb4974b7cad7099200bf3a.png'
                id='in8fj'
                className='media-wrap image-wrap'
                alt='Sunscreen usage guide'
              />
            </div>
          </div>
        </div>
        {!showAllContent ? (
          <button
            onClick={handleShowMore}
            className='mt-[-90px] text-black bg-gradient-to-t from-white via-white to-white/50 p-16 font-bold  w-full text-[16px]'
          >
            Xem thêm
          </button>
        ) : (
          <button onClick={handleHideContent} className='mt-4 text-black text-center font-bold text-[16px] w-full'>
            Ẩn bớt
          </button>
        )}
      </div>
      <div className=' min-h-32'>
        {data && (
          <div className='flex flex-col gap-2 my-4 mx-20'>
            <div className='flex'></div>
            <div className=' mt-4 flex justify-between'>
              <div className='text-lg font-bold uppercase'>Bộ Lọc</div>
              <div className='flex justify-between gap-6'>
                <button
                  onClick={handleRemoveAll}
                  className='flex flex-wrap gap-3 items-center justify-center border rounded-lg border-gray-100 bg-gray-200 p-3 hover:opacity-80'
                >
                  Xóa tất cả bộ lọc
                </button>
                <div className='flex flex-wrap gap-3 items-center justify-center'>
                  <span>{productsData?.data.data.products.length} Kết Quả</span>
                  <span>Lọc Theo</span>
                  <select
                    className='px-4 capitalize bg-white text-black text-left outline-none'
                    value={order || ''}
                    onChange={(event) =>
                      handlePriceOrder(event.target.value as Exclude<ProductListConfig['order'], undefined>)
                    }
                  >
                    <option value='' disabled className='bg-white text-black'>
                      Tất Cả
                    </option>

                    <option value={orderConstant.asc}>Giá: Thấp đến cao</option>
                    <option value={orderConstant.desc}>Giá: Cao đến thấp</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='grid gap-5'>
              {/* <div>
                <Filter />
              </div> */}
              {data.data.data.products.length > 0 ? (
                <div className='flex flex-col items-center justify-center'>
                  <div className='mt-6 grid grid-cols-5 gap-5'>
                    {data.data.data.products.map((product) => (
                      <div className='col-span-1' key={product._id}>
                        <Product product={product} />
                      </div>
                    ))}
                  </div>{' '}
                  <Pagination queryConfig={queryConfig} pageSize={data.data.data.pagination.page_size} />
                </div>
              ) : (
                <div className='w-full flex justify-center items-center'>
                  <img src='https://drive.gianhangvn.com/image/empty-cart.jpg' alt='' className='w-full rounded-2xl' />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
