import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'
import 'src/Styles/Header.scss'
import { ConfigProvider, Select } from 'antd'
import Popover from '../Popover'

import { useContext } from 'react'
import { useMutation, useQuery } from 'react-query'
import { AppContext } from 'src/contexts/app.contexts'
import path from 'src/constants/path'
import { FaPhone } from 'react-icons/fa6'
import authApi from 'src/apis/auth.api'
import { formatCurrency, getAvatarUrl } from 'src/utils/utils'
import { purchasesStatus } from 'src/constants/purchase'
import purchaseApi from 'src/apis/purchase.api'

const MAX_PURCHASES = 5
function Header() {
  const { setIsAuthenticated, isAuthenticated, setProfile, profile } = useContext(AppContext)
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
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const myTheme = {
    components: {
      Select: {
        colorPrimaryHover: '#fa913c',
        colorPrimary: '#fa913c',
        colorBorder: '#e07925',
        optionSelectedBg: '#ff8e8eaa',
        colorText: '#939292'
      }
    }
  }
  const { data: purchasesInCartData } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchases({ status: purchasesStatus.inCart }),
    enabled: isAuthenticated
  })

  const purchasesInCart = purchasesInCartData?.data.data
  return (
    <header className='font'>
      <div className='flex py-5 px-8  items-center gap-12 justify-center'>
        <div className='logo w-1/6'>
          <Link to={path.home}>
            <img src={logo} alt='' className='w-[240px] h-[80px]' />
          </Link>
        </div>
        <div className='search w-2/5 flex flex-col gap-2 '>
          <form className=' mt-4'>
            <div className='bg-gray-100 rounded-sm p-1 flex rounded-l-3xl rounded-r-3xl  h-9 '>
              <input
                type='text'
                name='search'
                className='text-black px-3 flex-grow border-none outline-none bg-transparent'
                placeholder='search'
              />
              <button className='py-2 px-6 flex-shrink-0 bg-red-300 hover:opacity-90 rounded-r-3xl'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-[14px]'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className='flex flex-wrap gap-3 text-xs ml-2'>
            <Link to='/' className='text-gray-400 hover:text-red-400'>
              <span>Kem chống nắng</span>
            </Link>
            <Link to='/' className='text-gray-400 hover:text-red-400'>
              <span>Son môi</span>
            </Link>
            <Link to='/' className='text-gray-400 hover:text-red-400'>
              <span>Bông tẩy trang</span>
            </Link>
            <Link to='/' className='text-gray-400 hover:text-red-400'>
              <span>Serum</span>
            </Link>
            <Link to='/' className='text-gray-400 hover:text-red-400'>
              <span>Sửa rửa mặt</span>
            </Link>
          </div>
        </div>
        <div className='flex gap-8 items-center w-3/5 '>
          <div className='flex-grow-1'>
            <Link to='/'>
              {' '}
              <div className='flex flex-wrap gap-3 items-center text-red-400'>
                <FaPhone className='text-3xl' />
                <div className='flex flex-col gap-1 '>
                  <span className='text-gray-400 font-medium text-sm '>Hỗ trợ khách hàng</span>
                  <span className='text-gray-500 font-semibold text-sm '>1950.6750</span>
                </div>
              </div>
            </Link>
          </div>
          <div className='flex-grow-1'>
            <div className='flex flex-wrap gap-2  text-gray-500  items-center font-semibold'>
              <ConfigProvider theme={myTheme}>
                <Select
                  defaultValue='Vietnamese'
                  className='border-gray-500 hover:border-red-500 '
                  style={{
                    width: 70
                  }}
                  onChange={handleChange}
                  options={[
                    { value: 'Vietnamese', label: 'VN' },
                    { value: 'English', label: 'EN' }
                  ]}
                />
              </ConfigProvider>
            </div>
          </div>
          <div className='flex-grow-1'>
            <div className='flex flex-wrap gap-3'>
              <img
                src={getAvatarUrl(profile?.avatar)}
                alt=''
                className='h-[32px] w-[32px] mt-1 border-2 border-gray-400 rounded-full '
              />
              {isAuthenticated && (
                <div className='flex flex-col justify-center mt-1'>
                  <Link to={path.profile}>
                    {' '}
                    <span className='text-gray-500'>Hi ! {profile?.email}</span>
                  </Link>
                  <div className='flex flex-wrap gap-1'>
                    <button onClick={handleLogout} className='text-gray-500 text-xs hover:text-red-400 '>
                      Đăng xuất
                    </button>
                  </div>
                </div>
              )}
              {!isAuthenticated && (
                <div className='flex flex-col justify-center mt-1 '>
                  <span className='text-gray-500 font-semibold'>Tài Khoản</span>
                  <div className='flex flex-wrap gap-1 justify-center items-center'>
                    <Link to={path.login}>
                      <span className='text-gray-500 text-xs hover:text-red-400 '>Đăng Nhập </span>
                    </Link>
                    <span className='text-gray-500 text-sm pt-[-16px]'>|</span>
                    <Link to={path.register}>
                      <span className='text-gray-500 text-xs hover:text-red-400  '>Đăng Ký </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Popover
            renderPopover={
              <div className='bg-white relative shadow-md rounded-lg border border-gray-200 max-w-[400px] text-sm mr-3 font'>
                {purchasesInCart && purchasesInCart.length > 0 ? (
                  <div className='p-2'>
                    <div className='capitalize text-gray-400'>Sản phẩm mới thêm</div>
                    <div className='mt-5'>
                      {purchasesInCart.slice(0, MAX_PURCHASES).map((purchase) => (
                        <div className='mt-2 flex py-2 hover:bg-gray-100' key={purchase._id}>
                          <div className='flex-shrink-0'>
                            <img
                              src={purchase.product.image}
                              alt={purchase.product.name}
                              className='h-11 w-11 object-cover rounded-md'
                            />
                          </div>
                          <div className='ml-2 flex-grow overflow-hidden'>
                            <div className='truncate'>{purchase.product.name}</div>
                          </div>
                          <div className='ml-2 flex-shrink-0'>
                            <span className='bg-clip-text text-[13px]  text-transparent bg-gradient-to-r from-[#f0a80e] via-[#c43131] to-[#671f57] font-semibold'>
                              {formatCurrency(purchase.product.price)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='mt-6 flex items-center justify-between'>
                      <div className='text-xs capitalize text-gray-500'>
                        {purchasesInCart.length > MAX_PURCHASES ? purchasesInCart.length - MAX_PURCHASES : ''} Thêm hàng
                        vào giỏ
                      </div>
                      <Link
                        to={path.cart}
                        className='capitalize bg-gradient-to-r from-[#f0a80e] via-[#c43131] to-[#671f57] text-white text-base px-4 py-2 rounded-lg '
                      >
                        Xem giỏ hàng
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className='flex h-[300px] w-[300px] flex-col  items-center justify-center p-2'>
                    <img
                      src='https://fansport.vn/default/template/img/cart-empty.png'
                      alt='no purchase'
                      className='h-24 w-24 '
                    />
                    <div className='mt-3 capitalize'> Không có sản phẩm</div>
                  </div>
                )}
              </div>
            }
          >
            <Link to={path.cart} className='relative'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-8 w-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
              {purchasesInCart && purchasesInCart.length > 0 && (
                <span className='absolute top-[-5px] left-[17px] rounded-full px-[9px] py-[1px] bg-clip-text text-[13px]  text-transparent bg-gradient-to-r from-[#f0a80e] via-[#c43131] to-[#671f57] font-semibold '>
                  {purchasesInCart?.length}
                </span>
              )}
            </Link>
          </Popover>
        </div>
      </div>
    </header>
  )
}

export default Header
