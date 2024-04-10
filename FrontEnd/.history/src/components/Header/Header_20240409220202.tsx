import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'
import 'src/Styles/Header.scss'
import { ConfigProvider, Select } from 'antd'
import Popover from '../Popover'

function Header() {
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
  return (
    <header className='font'>
      <div className='flex py-5 px-8 items-center gap-10 justify-center'>
        <div className='logo w-1/6'>
          <Link to='/'>
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
        <div className='flex gap-5 items-center w-3/5 '>
          <div className='flex-grow-1'>
            <div className='flex flex-wrap gap-2'>
              <img
                src='https://bizweb.dktcdn.net/100/426/076/themes/896300/assets/phone_icon.png?1692086228721'
                alt=''
                className='h-[30px] w-[30px] mt-1'
              />
              <div className='flex flex-col '>
                <span className='text-gray-500'>Hỗ trợ khách hàng</span>
                <span className='text-gray-500 font-semibold text-lg hover:text-red-400'>1900 6750</span>
              </div>
            </div>
          </div>
          <div className='flex-grow-1'>
            <div className='flex flex-wrap gap-2  text-gray-500  items-center'>
              <ConfigProvider theme={myTheme}>
                <Select
                  defaultValue='Vietnamese'
                  className='border-gray-500 hover:border-red-500'
                  style={{
                    width: 120
                  }}
                  onChange={handleChange}
                  options={[
                    { value: 'Vietnamese', label: 'Tiếng Việt' },
                    { value: 'English', label: 'Tiếng Anh' }
                  ]}
                />
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
              <div className='flex flex-col justify-center mt-1'>
                <span className='text-gray-500'>Tài Khoản</span>
                <div className='flex flex-wrap gap-1'>
                  <Link to='/login'>
                    <span className='text-gray-500 text-xs hover:text-red-400 '>Đăng Nhập </span>
                  </Link>
                  <span className='text-gray-500 text-sm'>|</span>
                  <Link to='/register'>
                    <span className='text-gray-500 text-xs hover:text-red-400  '>Đăng Ký </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Popover
            renderPopover={
              <div className='bg-white relative shadow-md rounded-sm border border-gray-200 max-w-[400px] text-sm mr-3 '>
                <div className='p-3 mt-2 transition delay-300 duration-400 ease-in-out hover:delay-1000'>
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
              <Link to='/'>
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
