import { FaStar } from 'react-icons/fa6'
import SwiperQuick from '../SwiperQuick'
import { FaStarHalfAlt } from 'react-icons/fa'
import 'src/Styles/SwiperQuick.scss'
export default function QuickView() {
  return (
    <div className='grid gap-5' style={{ gridTemplateColumns: '45% 55%' }}>
      <div className=''>
        <SwiperQuick />
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-l text-rose-700 uppercase font-bold'>ahc</div>
        <div className='text-xl text-gray-900  font-bold'>
          Kem Dưỡng Ẩm, Phục Hồi Da AHC Premium Ex Hydra B5 Biome Capsule Cream 50ml
        </div>
        <div className='flex gap-2'>
          <div className='flex gap-1 text-orange-500 items-center justify-center text-[13px] border-white border-r-gray-200 border-2 pr-3'>
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
          <div className='flex gap-1'>
            <span className='font-semibold'>Mã:</span>
            <span>5044</span>
          </div>
        </div>
        <div className='border-gradient w-[92%] rounded-lg p-2 mt-2 flex flex-col gap-1 '>
          <div className='font-bold text-[15px]'>Thông tin sản phẩm :</div>
          <p className='line-clamp-6'>
            Kem dưỡng AHC Premium Ex Hydra B5 Biome Capsule Cream tập trung cấp dưỡng ẩm, phục hồi và tăng cường sức
            khỏe làn da mang lại vẻ ngoài sáng mịn, tươi tắn. Sản phẩm chứa 150 triệu lợi khuẩn giúp bổ sung vào làn da,
            nâng cao sức đề kháng và cải thiện sắc da sáng mịn, khỏe khoắn rõ rệt. Thành phần prebiotics trong kem dưỡng
            ẩm AHC giúp kích hoạt hoạt chất giữ ẩm cho hàng rào sinh học của da, làm cho làn da khỏe mạnh hơn. Kết hợp
            với đó là công nghệ Micro Liposome chứa hàng triệu vi khuẩn có lợi được bao bọc bởi màng biofilm, giúp ổn
            định chất lượng và vận chuyển lactobacillus đầy đủ và nhanh chóng vào trong da, đem lại làn da mềm mại tức
            thì mà không gây dính rít.
          </p>
        </div>
        <div className='flex gap-2 mt-3'>
          <div className=''>
            <div className='flex  items-center justify-center border-2 border-gray-300 rounded-full'>
              <button
                type='button'
                className=' flex items-center px-3 w-[40px] h-[55px] rounded-l-full hover:bg-gray-200 '
              >
                <span role='img' className='anticon'>
                  <svg width='14' height='2' viewBox='0 0 14 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2L1 0ZM13 2C13.5523 2 14 1.55228 14 1C14 0.447715 13.5523 0 13 0V2ZM1 2L13 2V0L1 0L1 2Z'
                      fill='black'
                    ></path>
                  </svg>
                </span>
              </button>
              <div className=' flex items-center px-3 w-[40px] h-[45px] text-base font-bold justify-center'>2</div>
              <button
                type='button'
                className='flex items-center px-3 w-[40px] h-[50px] rounded-r-full hover:bg-gray-200 '
              >
                <span role='img' className='anticon'>
                  <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M1 6C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8L1 6ZM13 8C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6V8ZM1 8L13 8V6L1 6L1 8Z'
                      fill='black'
                    ></path>
                    <path
                      d='M6 13C6 13.5523 6.44772 14 7 14C7.55228 14 8 13.5523 8 13L6 13ZM8 1C8 0.447715 7.55228 -2.41411e-08 7 0C6.44771 2.41411e-08 6 0.447715 6 1L8 1ZM8 13L8 1L6 1L6 13L8 13Z'
                      fill='black'
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
