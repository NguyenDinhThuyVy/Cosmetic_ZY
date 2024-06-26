import React, { useContext } from 'react'
import { data } from './data'
import NavItem from './NavItem/NavItem'
import { getAvatarUrl } from 'src/utils/utils'
import { AppContext } from 'src/contexts/app.contexts'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import { useMutation } from 'react-query'
import authApi from 'src/apis/auth.api'

const SiderbarItem: React.FC = () => {
  const { profile } = useContext(AppContext)
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }
  return (
    <nav className='border border-gray-200 rounded-lg w-full px-2 pb-8 bg-gray-100 font text-[15px]'>
      <div className='flex flex-col gap-8 items-center  py-4 '>
        <Link to={path.adminProfile} className='flex flex-col gap-2 items-center'>
          <div className='h-14 w-14 flex overflow-hidden rounded-full border border-black/10'>
            <img src={getAvatarUrl(profile?.avatar)} alt='' className='h-full w-full object-cover' />
          </div>
          <span className=''>Hi!{profile.email}</span>
        </Link>

        {data.map((data) => (
          <NavItem data={data} key={data.id} />
        ))}

        <button onClick={handleLogout} className='text-gray-500 text-xs hover:text-red-400 text-[15px]'>
          Đăng xuất
        </button>
      </div>
    </nav>
  )
}

export default SiderbarItem
