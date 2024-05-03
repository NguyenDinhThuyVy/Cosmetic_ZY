import { Outlet } from 'react-router-dom'
import SiderbarItem from 'src/components/SiderbarItem'

export default function LayoutAdmin() {
  return (
    <div className='h-full'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-12 h-full  '>
        <div className='col-span-4 '>
          <SiderbarItem></SiderbarItem>
        </div>
        <div className='col-span-8 '>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
