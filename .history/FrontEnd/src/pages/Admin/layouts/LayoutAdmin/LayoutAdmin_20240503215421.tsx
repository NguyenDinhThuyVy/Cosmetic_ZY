import { Outlet } from 'react-router-dom'
import SiderbarItem from 'src/components/SiderbarItem'

export default function LayoutAdmin() {
  return (
    <div className='h-full'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-12 h-full  '>
        <div className='col-span-5 lg:col-span-2'>
          <SiderbarItem></SiderbarItem>
        </div>
        <div className='col-span-7 lg:col-span-10'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
