import React, { useContext } from 'react'
import { data } from './data'
import NavItem from './NavItem/NavItem'
import { Link } from 'react-router-dom'

import { getAvatarUrl } from 'src/utils/utils'
import { AppContext } from 'src/contexts/app.contexts'
import path from 'src/constants/path'

const SiderbarItem: React.FC = () => {
  const { profile } = useContext(AppContext)
  return (
    <nav className='border border-gray-200 rounded-lg w-full px-2 pb-8 bg-gray-100 font text-[15px]'>
      <div className='flex flex-col gap-8 items-center  py-4 '>
        <div className='h-12 w-12 flex-col overflow-hidden rounded-full border border-black/10'>
          <img src={getAvatarUrl(profile?.avatar)} alt='' className='h-full w-full object-cover' />
          <span className=''>Hi!{profile.email}</span>
        </div>
        {data.map((data) => (
          <NavItem data={data} key={data.id} />
        ))}
      </div>
    </nav>
  )
}

export default SiderbarItem
