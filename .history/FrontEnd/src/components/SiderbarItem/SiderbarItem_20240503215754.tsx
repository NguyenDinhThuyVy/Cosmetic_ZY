import React from 'react'
import { data } from './data'
import NavItem from './NavItem/NavItem'

const SiderbarItem: React.FC = () => {
  return (
    <nav className='border border-gray-200 rounded-lg w-full px-4 pb-6 bg-gray-100 font'>
      <div className='flex-col items-center border-b border-b-gray-200 py-4 '>
        {data.map((data) => (
          <NavItem data={data} key={data.id} />
        ))}
      </div>
    </nav>
  )
}

export default SiderbarItem
