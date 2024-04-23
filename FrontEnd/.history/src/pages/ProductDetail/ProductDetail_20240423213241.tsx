import { Breadcrumb } from 'antd'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import AddPurchase from 'src/components/AddPurchase'
import path from 'src/constants/path'
export default function ProductDetail() {
  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        <div className='flex flex-col gap-2 my-4 mx-20'>
          <div
            className='grid gap-24  border-white border-b-gray-100 border-2 pb-8'
            style={{ gridTemplateColumns: '35% 65%' }}
          >
            <div className='grid gap-5' style={{ gridTemplateColumns: '20% 80%' }}>
              <div className='flex flex-col gap-4 item-center justify-center '>
                <button className=' text-black text-[25px] text-center flex justify-center '>
                  <HiChevronUp />
                </button>
                <div className=' flex flex-col gap-3 justify-center item-center mr-[20px]'>
                  <img
                    src='https://image.hsv-tech.io/0x1920/bbx/common/d6f2241f-37fc-4c28-8420-a1708d66a9e9.webp'
                    alt=''
                    className='cursor-pointer w-[100%] object-cover '
                  />
                  <img
                    src='https://image.hsv-tech.io/600x600/bbx/common/672cdc75-8e5c-4256-935e-1af794b9b66a.webp'
                    alt=''
                    className='cursor-pointer w-[100%] object-cover '
                  />
                  <img
                    src='https://image.hsv-tech.io/600x600/bbx/common/07792ca2-c2de-4519-8b1d-7c209903a2b2.webp'
                    alt=''
                    className='cursor-pointer w-[100%] object-cover '
                  />
                  <img
                    src='https://image.hsv-tech.io/0x1920/bbx/common/d6f2241f-37fc-4c28-8420-a1708d66a9e9.webp'
                    alt=''
                    className='cursor-pointer w-[100%] object-cover '
                  />
                </div>
                <button className=' text-black text-[25px] text-center flex justify-center '>
                  <HiChevronDown />
                </button>
              </div>
              <div className='mt-[1%]  '>
                <img
                  src='https://image.hsv-tech.io/0x1920/bbx/common/d6f2241f-37fc-4c28-8420-a1708d66a9e9.webp'
                  alt=''
                  className='cursor-pointer w-[120%] h-[100%]  object-cover rounded-lg'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2  w-[780px]'>
              <Breadcrumb
                separator='>'
                items={[
                  {
                    title: <Link to={path.home}>Trang chủ</Link>
                  },
                  {
                    title: <Link to={path.filterProduct}>Sản phẩm</Link>
                  }
                ]}
              />
              <div className='text-base font-bold text-rose-700'>AHC</div>
              <div className='text-[19px] text-left font-bold text-gray-700 w-[780px]'>
                [Trải Nghiệm Combo 11 Mặt Nạ HOT Nhất] Mặt Nạ AHC + Goodal + Dermatory Dưỡng Da Sáng &amp; Săn Mịn
              </div>
              <div className='flex gap-2 mt-2'>
                <div className='flex gap-1 text-black items-center justify-center text-[13px] border-white border-r-gray-200 border-2 pr-3'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <span className='text-black ml-2 text-[13px]'>(10)</span>
                </div>
                <div className='flex gap-1  border-white border-r-gray-200 border-2 pr-3'>
                  <span className='font-semibold'>Xuất sứ :</span>
                  <span>Hàn Quốc</span>
                </div>
                <div className='flex gap-1  border-white border-r-gray-200 border-2 pr-3'>
                  <span className='font-semibold'>Mã:</span>
                  <span>5044</span>
                </div>
                <div className='flex gap-1'>
                  <span className='font-semibold'>Lượt bán:</span>
                  <span>50.44k</span>
                </div>
              </div>
              <div className='text-[22px] flex gap-3 mt-2'>
                <div className='font-bold text-black'>291.000đ</div>
                <div className='font-medium text-gray-400 line-through text-[15px] pt-[6px] '>771.000đ</div>
                <div className='relative bg-[#c73030] w-[40px] h-[22px] flex justify-center items-center rounded-full'>
                  <div className='absolute text-gray-100 text-[13px] p-1'>11%</div>
                </div>
              </div>
              <div className='border-gradient rounded-lg p-2 mt-4 flex flex-col gap-1 w-[780px]'>
                <div className='font-bold text-[15px]'>Bảng thành phần :</div>
                <p className='line-clamp-6'>
                  Kem dưỡng AHC Premium Ex Hydra B5 Biome Capsule Cream tập trung cấp dưỡng ẩm, phục hồi và tăng cường
                  sức khỏe làn da mang lại vẻ ngoài sáng mịn, tươi tắn. Sản phẩm chứa 150 triệu lợi khuẩn giúp bổ sung
                  vào làn da, nâng cao sức đề kháng và cải thiện sắc da sáng mịn, khỏe khoắn rõ rệt. Thành phần
                  prebiotics trong kem dưỡng ẩm AHC giúp kích hoạt hoạt chất giữ ẩm cho hàng rào sinh học của da, làm
                  cho làn da khỏe mạnh hơn. Kết hợp với đó là công nghệ Micro Liposome chứa hàng triệu vi khuẩn có lợi
                  được bao bọc bởi màng biofilm, giúp ổn định chất lượng và vận chuyển lactobacillus đầy đủ và nhanh
                  chóng vào trong da, đem lại làn da mềm mại tức thì mà không gây dính rít.
                </p>
              </div>
              <div className='mt-2'>
                <AddPurchase />
              </div>
            </div>
          </div>
          <div className='grid gap-24 mt-[60px]' style={{ gridTemplateColumns: '30% 70%' }}>
            <div className='uppercase text-left text-lg font-bold'>Giới thiệu</div>
          </div>
        </div>
      </div>
    </div>
  )
}
