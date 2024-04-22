import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import 'src/Styles/Header.scss'
import Popover from 'src/components/Popover'
export default function FilterProduct() {
  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        <div className='flex flex-col gap-2 my-4 mx-20'>
          <Breadcrumb
            separator='>'
            items={[
              {
                title: 'Home'
              },
              {
                title: <Link to='/'>Trang sản phẩm</Link>
              }
            ]}
          />
          <div className='text-2xl font-bold uppercase mt-5'>TOP SẢN PHẨM BÁN CHẠY</div>
          <div className=' mt-5 flex justify-between'>
            <div className='text-lg font-bold uppercase'>Bộ Lọc</div>
            <div className='flex flex-wrap gap-3 items-center justify-center'>
              <span>689 Kết Quả</span>
              <span>Lọc Theo</span>
              <Popover
                className='flex items-center py-1 hover:text-gray-300 cursor-pointer'
                renderPopover={
                  <div className='bg-white relative shadow-md rounded-sm border border-gray-200'>
                    <div className='flex flex-col py-2 pr-28 pl-3'>
                      <button className='py-2 px-3 text-left hover:text-rose-300'>Tiếng Việt</button>
                      <button className='py-2 px-3 text-left hover:text-rose-300 mt-2'>English</button>
                    </div>
                  </div>
                }
              >
                <span className='mx-1'>Tất cả</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                </svg>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
