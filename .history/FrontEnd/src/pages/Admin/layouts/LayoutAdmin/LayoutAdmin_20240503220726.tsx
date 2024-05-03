import { Outlet } from 'react-router-dom'
import SiderbarItem from 'src/components/SiderbarItem'

export default function LayoutAdmin() {
  return (
    <div className='h-full'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-12 h-full my-4 mx-10 text-sm '>
        <div className='col-span-3 items-center place-items-center'>
          <SiderbarItem></SiderbarItem>
        </div>
        <div className='col-span-9 '>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
