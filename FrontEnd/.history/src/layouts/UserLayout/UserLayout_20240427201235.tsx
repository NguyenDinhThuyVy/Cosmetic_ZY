import { Outlet } from 'react-router-dom'
import UserSideNav from '../../components/UserSideNav'

export default function UserLayout() {
  return (
    <div className=' gap-2 my-4 mx-20 text-sm text-gray-600'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3 items-center place-items-center'>
            <UserSideNav />
          </div>
          <div className='col-span-9 '>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
