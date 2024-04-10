import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'
import 'src/Styles/Header.scss'
import { ConfigProvider, Dropdown, MenuProps, Select } from 'antd'
import Popover from '../Popover'
import { logout } from 'src/apis/auth.api'
import { useContext } from 'react'
import { useMutation } from 'react-query'
import { AppContext } from 'src/contexts/app.contexts'
import path from 'src/constants/path'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
        1st menu item
      </a>
    )
  },
  {
    key: '2',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
        2nd menu item
      </a>
    )
  }
]
function Header() {
  const { setIsAuthenticated, isAuthenticated, setProfile, profile } = useContext(AppContext)
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
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
              <div className='flex flex-wrap gap-2 items-center'>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 30 29'
                  fill='#e6677c'
                  xmlns='http://www.w3.org/2000/svg'
                  className='font-extrabold'
                >
                  <path
                    d='M30 9.70911C30 8.13337 28.1141 2.75357 27.0365 1.24149C26.4818 0.461581 25.5784 0 24.6117 0H5.38827C4.42155 0 3.51823 0.461581 2.96355 1.24149C1.8859 2.75357 0 8.13337 0 9.70911C0 10.8551 0.459588 11.9215 1.26783 12.7173C1.34707 12.7969 1.42631 12.8606 1.50555 12.9402V25.0527C1.50555 27.2173 3.24881 28.9682 5.40412 28.9682L14.9921 28.9841V27.8699H10.8558V20.3732C10.8558 19.4023 11.6482 18.6065 12.6149 18.6065H17.3534C18.3201 18.6065 19.1125 19.4023 19.1125 20.3732V29L24.5642 28.9841C26.7195 28.9841 28.4628 27.2333 28.4628 25.0686V12.9402C28.542 12.8765 28.6212 12.7969 28.7005 12.7173C29.5404 11.9215 30 10.8551 30 9.70911ZM22.7734 1.11416H24.6117C25.2139 1.11416 25.7845 1.40066 26.1331 1.89407C27.1632 3.32656 28.8906 8.4517 28.8906 9.70911C28.8906 10.5527 28.5578 11.3326 27.9556 11.9215C27.3534 12.5104 26.561 12.8128 25.7211 12.781C24.1046 12.7173 22.7734 11.3008 22.7734 9.62953V1.11416ZM21.664 9.70911C21.664 11.3963 20.2853 12.781 18.6054 12.781C16.9255 12.781 15.5468 11.3963 15.5468 9.70911V1.11416H21.664V9.62953C21.664 9.66136 21.664 9.67728 21.664 9.70911ZM8.33597 1.11416H14.4532V9.70911C14.4532 11.3963 13.0745 12.781 11.3946 12.781C9.71474 12.781 8.33597 11.3963 8.33597 9.70911C8.33597 9.67728 8.33597 9.64545 8.33597 9.62953V1.11416ZM1.10935 9.70911C1.10935 8.43579 2.83677 3.32656 3.86688 1.89407C4.21553 1.40066 4.78605 1.11416 5.38827 1.11416H7.22662V9.62953C7.22662 11.3167 5.91125 12.7333 4.27892 12.781C3.43899 12.8128 2.64659 12.5104 2.04437 11.9215C1.44216 11.3326 1.10935 10.5527 1.10935 9.70911ZM27.3693 25.0527C27.3693 26.5966 26.1173 27.854 24.58 27.854L20.2377 27.8699V20.3573C20.2377 18.7656 18.954 17.4764 17.3693 17.4764H12.6307C11.046 17.4764 9.76228 18.7656 9.76228 20.3573V27.854H5.41997C3.88273 27.854 2.63074 26.5966 2.63074 25.0527V13.5928C3.15372 13.7997 3.72425 13.9111 4.32647 13.8793C5.78447 13.8315 7.06815 12.972 7.76545 11.7464C8.47861 13.0198 9.84152 13.8793 11.3946 13.8793C12.9319 13.8793 14.2789 13.0357 15.0079 11.7783C15.7211 13.0357 17.084 13.8793 18.6212 13.8793C20.1743 13.8793 21.5372 13.0198 22.2504 11.7464C22.9477 12.972 24.2314 13.8156 25.6894 13.8793C25.7369 13.8793 25.7845 13.8793 25.8479 13.8793C26.3867 13.8793 26.8938 13.7838 27.3851 13.5928V25.0527H27.3693Z'
                    fill='#e6677c'
                    className='font-extrabold'
                  ></path>
                </svg>
                <span className='text-gray-500 font-semibold text-sm hover:text-red-400'>Hệ Thống Cửa Hàng</span>
              </div>
            </Link>
          </div>
          <div className='flex-grow-1'>
            <div className='flex flex-wrap gap-2  text-gray-500  items-center font-semibold'>
              <ConfigProvider theme={myTheme}>
                <Dropdown menu={{ items }} placement='bottom' arrow>
                  <Button>bottom</Button>
                </Dropdown>
              </ConfigProvider>
            </div>
          </div>
          <div className='flex-grow-1'>
            <div className='flex flex-wrap gap-3'>
              <img
                src='https://bizweb.dktcdn.net/100/426/076/themes/896300/assets/account_icon.png?1692086228721'
                alt=''
                className='h-[32px] w-[32px] mt-1 border-2 border-red-400 rounded-full p-1'
              />
              {isAuthenticated && (
                <div className='flex flex-col justify-center mt-1'>
                  <span className='text-gray-500'>Hi ! {profile?.email}</span>
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
              <div className='bg-white relative shadow-md rounded-lg border border-gray-200 max-w-[400px] text-sm mr-3  '>
                <div className='p-3 mt-2'>
                  <div className='text-gray-400 capitalize'>Sản phẩm mới thêm</div>
                  <div className='mt-5'>
                    <div className='mt-4 flex'>
                      <div className='flex-shrink-0'>
                        <img
                          src='https://cf.shopee.vn/file/sg-11134201-22110-s3ycuwtvgvjvb4_tn'
                          alt='anh'
                          className='w-11 h-11 object-cover'
                        />
                      </div>
                      <div className='flex-grow ml-2 overflow-hidden'>
                        <div className='truncate'>
                          [LIFEMCMBP2 -12% đơn 250K] Bộ Nồi Inox 3 Đáy SUNHOUSE SH334 16, 20, 24 cm
                        </div>
                      </div>
                      <div className='ml-2 flex-shrink-0'>
                        <span className='text-orange'>₫469.000</span>
                      </div>
                    </div>
                    <div className='mt-4 flex'>
                      <div className='flex-shrink-0'>
                        <img
                          src='https://cf.shopee.vn/file/sg-11134201-22110-s3ycuwtvgvjvb4_tn'
                          alt='anh'
                          className='w-11 h-11 object-cover'
                        />
                      </div>
                      <div className='flex-grow ml-2 overflow-hidden'>
                        <div className='truncate'>
                          [LIFEMCMBP2 -12% đơn 250K] Bộ Nồi Inox 3 Đáy SUNHOUSE SH334 16, 20, 24 cm
                        </div>
                      </div>
                      <div className='ml-2 flex-shrink-0'>
                        <span className='text-orange'>₫469.000</span>
                      </div>
                    </div>
                    <div className='mt-4 flex'>
                      <div className='flex-shrink-0'>
                        <img
                          src='https://cf.shopee.vn/file/sg-11134201-22110-s3ycuwtvgvjvb4_tn'
                          alt='anh'
                          className='w-11 h-11 object-cover'
                        />
                      </div>
                      <div className='flex-grow ml-2 overflow-hidden'>
                        <div className='truncate'>
                          [LIFEMCMBP2 -12% đơn 250K] Bộ Nồi Inox 3 Đáy SUNHOUSE SH334 16, 20, 24 cm
                        </div>
                      </div>
                      <div className='ml-2 flex-shrink-0'>
                        <span className='text-orange'>₫469.000</span>
                      </div>
                    </div>
                    <div className='mt-4 flex'>
                      <div className='flex-shrink-0'>
                        <img
                          src='https://cf.shopee.vn/file/sg-11134201-22110-s3ycuwtvgvjvb4_tn'
                          alt='anh'
                          className='w-11 h-11 object-cover'
                        />
                      </div>
                      <div className='flex-grow ml-2 overflow-hidden'>
                        <div className='truncate'>
                          [LIFEMCMBP2 -12% đơn 250K] Bộ Nồi Inox 3 Đáy SUNHOUSE SH334 16, 20, 24 cm
                        </div>
                      </div>
                      <div className='ml-2 flex-shrink-0'>
                        <span className='text-orange'>₫469.000</span>
                      </div>
                    </div>
                    <div className='mt-4 flex'>
                      <div className='flex-shrink-0'>
                        <img
                          src='https://cf.shopee.vn/file/sg-11134201-22110-s3ycuwtvgvjvb4_tn'
                          alt='anh'
                          className='w-11 h-11 object-cover'
                        />
                      </div>
                      <div className='flex-grow ml-2 overflow-hidden'>
                        <div className='truncate'>
                          [LIFEMCMBP2 -12% đơn 250K] Bộ Nồi Inox 3 Đáy SUNHOUSE SH334 16, 20, 24 cm
                        </div>
                      </div>
                      <div className='ml-2 flex-shrink-0'>
                        <span className='text-orange'>₫469.000</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex mt-6 items-center justify-between'>
                    <div className='capitalize text-xs text-gray-500'>Thêm hàng vào giỏ</div>
                    <button className='capitalize bg-orange-500 hover:bg-opacity-90 px-4 py-2 rounded-lg text-white'>
                      Xem giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            }
          >
            <div className='flex-grow-1 '>
              <Link to={path.home}>
                <div className='flex flex-wrap gap-8 border-2 border-orange-400 rounded-lg p-2 items-center'>
                  <div className='relative'>
                    <img
                      src='https://bizweb.dktcdn.net/100/426/076/themes/896300/assets/cart_icon.png?1692086228721'
                      alt=''
                      className='h-[18px] w-[18px] relative '
                    />
                    <span className='absolute top-[-6px] left-[16px] rounded-full bg-white px-[9px] py-[1px] text-xs text-orange-400 '>
                      0
                    </span>
                  </div>
                  <span> Giỏ hàng </span>
                </div>
              </Link>
            </div>
          </Popover>
        </div>
      </div>
    </header>
  )
}

export default Header
