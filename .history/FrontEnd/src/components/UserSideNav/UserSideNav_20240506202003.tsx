import { FaUserEdit } from 'react-icons/fa'
import { FaUserLock } from 'react-icons/fa6'
import { BsCartCheckFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.contexts'
import { useContext } from 'react'
import { getAvatarUrl } from 'src/utils/utils'
import classNames from 'classnames'

export default function UserSideNav() {
  const { profile } = useContext(AppContext)
  return (
    <div className=' border border-gray-200 rounded-lg w-full px-4 pb-6 bg-gray-100 font'>
      <div className='flex items-center border-b border-b-gray-200 py-4'>
        <Link to={path.profile} className='h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-black/10'>
          <img src={getAvatarUrl(profile?.avatar)} alt='' className='h-full w-full object-cover' />
        </Link>
        <div className='flex-grow pl-4'>
          <div className='mb-1 truncate font-semibold text-gray-600'>{profile?.email}</div>
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
        <NavLink
          to={path.profile}
          className={({ isActive }) =>
            classNames('mt-4 flex items-center capitalize text-[14px]  text-gray-700', {
              'text-rose-800': isActive,
              'text-gray-700': !isActive
            })
          }
        >
          <div className='mr-3 h-[25px] w-[25px]'>
            <FaUserEdit className=' h-[25px] w-[25px]' />
          </div>
          Tài khoản của tôi
        </NavLink>
        <NavLink
          to={path.changePassword}
          className={({ isActive }) =>
            classNames('mt-4 flex items-center capitalize text-[14px]  text-gray-700', {
              'text-rose-800': isActive,
              'text-gray-700': !isActive
            })
          }
        >
          <div className='mr-3 h-[25px] w-[25px]'>
            <FaUserLock className=' h-[25px] w-[25px]' />
          </div>
          Đổi mật khẩu
        </NavLink>
        <NavLink
          to={path.hitoryPurchase}
          className={({ isActive }) =>
            classNames('mt-4 flex items-center capitalize text-[14px]  text-gray-700', {
              'text-rose-800': isActive,
              'text-gray-700': !isActive
            })
          }
        >
          <div className='mr-3 h-[25px] w-[25px]'>
            <BsCartCheckFill className=' h-[25px] w-[25px]' />
          </div>
          Đơn mua
        </NavLink>
        <NavLink
          to={path.AIform}
          className={({ isActive }) =>
            classNames('mt-4 flex items-center capitalize text-[14px]  text-gray-700', {
              'text-rose-800': isActive,
              'text-gray-700': !isActive
            })
          }
        >
          <div className='mr-3 h-[25px] w-[25px]'>
            <div className=' h-[25px] w-[25px] text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f0a80e] via-[#c43131] to-[#671f57]'>
              AI
            </div>
          </div>
          Hỗ trợ chu trình skincare
        </NavLink>
      </div>
    </div>
  )
}
