// import { Progress, ProgressProps } from 'antd'
import { Link } from 'react-router-dom'
import './ProductSale.scss'
export default function ProductSale() {
  // const twoColors: ProgressProps['strokeColor'] = {
  //   '0%': '#108ee9',
  //   '100%': '#87d068'
  // }
  return (
    <Link to='/' className='group  bg-rose-300  w-[263px] h-[422px] p-5'>
      <div className=' bg-[#ffffff] flex flex-col justify-between gap-5 items-center rounded-2xl'>
        <div className='flex-1 h-1/2 w-full relative'>
          <img
            src='https://image.hsv-tech.io/600x600/bbx/common/74af6c90-1acf-4d0a-85d5-3596d877c2d4.webp'
            alt=''
            className='w-full rounded-t-2xl rounded-tr-2xl'
          />
          <button className='absolute top-1/2 left-/2 translate-x-[-50%] và translate-y-[-50%] hidden'>
            Xem Chi Tiết
          </button>
        </div>
        <div className='flex-1 h-1/2 '>
          <div className='flex flex-col gap-2 items-center justify-center px-6 group-hover:block'>
            <div className='text-sm font-semibold text-black'>AHC</div>
            <div className='text-[12px] line-clamp-2 text-center leading-relaxed font-normal text-black'>
              [Trải Nghiệm Combo 11 Mặt Nạ HOT Nhất] Mặt Nạ AHC + Goodal + Dermatory Dưỡng Da Sáng &amp; Săn Mịn
            </div>
            <div className='text-[13px] flex gap-3 px-3'>
              <div className='font-semibold text-black'>291.000đ</div>
              <div className='font-medium text-gray-400 line-through'>771.000đ</div>
              <div className='relative bg-[#c73030] w-[30px] h-[15px] flex justify-center items-center rounded-full'>
                <div className='absolute text-gray-100 text-[11px] p-1'>11%</div>
              </div>
            </div>

            <div className='lbbUFt w-full font'>
              <div className='ant-progress ant-progress-line ant-progress-status-normal ant-progress-default '>
                <div className='ant-progress-outer'>
                  <div
                    className='ant-progress-inner'
                    style={{
                      backgroundColor: 'rgba(199, 49, 48, 0.314)'
                    }}
                  >
                    <div
                      className='ant-progress-bg'
                      style={{
                        width: '25.6667%',
                        height: '20px',
                        background:
                          'repeating-linear-gradient(-45deg, rgba(199, 49, 48, 0.6), rgba(199, 49, 48, 0.6) 10px, rgb(199, 49, 48) 10px, rgb(199, 49, 48) 20px)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className='lb-stock'>còn 13 sản phẩm</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
