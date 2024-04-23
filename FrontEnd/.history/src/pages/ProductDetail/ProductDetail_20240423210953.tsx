import { Breadcrumb } from 'antd'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
export default function ProductDetail() {
  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        <div className='flex flex-col gap-2 my-4 mx-20'>
          <div className='grid gap-24' style={{ gridTemplateColumns: '35% 65%' }}>
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
              <div className='mt-[1%] '>
                <img
                  src='https://image.hsv-tech.io/0x1920/bbx/common/d6f2241f-37fc-4c28-8420-a1708d66a9e9.webp'
                  alt=''
                  className='cursor-pointer w-[120%] h-[100%]  object-cover rounded-lg'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
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
              <div className='text-[20px] line-clamp-2 text-left font-extrabold text-black w-[650px]'>
                [Trải Nghiệm Combo 11 Mặt Nạ HOT Nhất] Mặt Nạ AHC + Goodal + Dermatory Dưỡng Da Sáng &amp; Săn Mịn
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
