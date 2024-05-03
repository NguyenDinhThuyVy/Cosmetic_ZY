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
    <nav className='border border-gray-200 rounded-lg w-full px-4 pb-6 bg-gray-100 font'>
      <div className='flex flex-col items-center border-b border-b-gray-200 py-4 '>
        <Link to={path.profile} className='h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-black/10'>
          <img src={getAvatarUrl(profile?.avatar)} alt='' className='h-full w-full object-cover' />
        </Link>
        {data.map((data) => (
          <NavItem data={data} key={data.id} />
        ))}
      </div>
    </nav>
  )
}

export default SiderbarItem
