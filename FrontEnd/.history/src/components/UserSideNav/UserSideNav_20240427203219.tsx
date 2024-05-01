import { FaUserEdit } from 'react-icons/fa'
import { FaUserLock } from 'react-icons/fa6'
import { BsCartCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'

export default function UserSideNav() {
  return (
    <div className=' border border-gray-200 rounded-lg w-full px-4 pb-6 bg-gray-100 font'>
      <div className='flex items-center border-b border-b-gray-200 py-4'>
        <Link to={path.profile} className='h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-black/10'>
          <img
            src='https://cf.shopee.vn/file/d04ea22afab6e6d250a370d7ccc2e675_tn'
            alt=''
            className='h-full w-full object-cover'
          />
        </Link>
        <div className='flex-grow pl-4'>
          <div className='mb-1 truncate font-semibold text-gray-600'>cdthanh</div>
          <Link to={path.profile} className='flex items-center capitalize text-gray-500'>
            <svg
              width={12}
              height={12}
              viewBox='0 0 12 12'
              xmlns='http://www.w3.org/2000/svg'
              style={{ marginRight: 4 }}
            >
              <path
                d='M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48'
                fill='#9B9B9B'
                fillRule='evenodd'
              />
            </svg>
            Sửa hồ sơ
          </Link>
        </div>
      </div>
      <div className='mt-7'>
        <Link to={path.profile} className='flex items-center capitalize text-[14px] text-gray-700 transition-colors'>
          <div className='mr-3 h-[25px] w-[25px]'>
            <FaUserEdit className=' h-[25px] w-[25px]' />
          </div>
          Tài khoản của tôi
        </Link>
        <Link
          to={path.changePassword}
          className='mt-4 flex items-center capitalize text-[14px]  text-gray-700 transition-'
        >
          <div className='mr-3 h-[25px] w-[25px]'>
            <FaUserLock className=' h-[25px] w-[25px]' />
          </div>
          Đổi mật khẩu
        </Link>
        <Link
          to={path.hitoryPurchase}
          className='mt-4 flex items-center capitalize text-[14px] text-gray-700 transition-colors'
        >
          <div className='mr-3 h-[25px] w-[25px]'>
            <BsCartCheckFill className=' h-[25px] w-[25px]' />
          </div>
          Đơn mua
        </Link>
      </div>
    </div>
  )
}
