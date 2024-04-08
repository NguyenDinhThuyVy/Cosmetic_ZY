import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'
import './Header.scss'
function Header() {
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
                className='h-[32px] w-[32px] mt-1'
              />
              <div className='flex flex-col '>
                <span className='text-gray-500'>Hỗ trợ khách hàng</span>
                <span className='text-gray-500 font-semibold text-lg hover:text-red-400'>1900 6750</span>
              </div>
            </div>
          </div>
          <div className='flex-grow-1'>
            <div className='flex flex-wrap gap-2 border-2 text-gray-600  border-orange-400 rounded-lg p-2 py-1 hover:text-gray-300 cursor-pointer items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                />
              </svg>
              <span className='mx-1'>Tiếng Việt</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
              </svg>
            </div>
          </div>
          <div className='flex-grow-1'>
            <div className='flex flex-wrap gap-3'>
              <img
                src='https://bizweb.dktcdn.net/100/426/076/themes/896300/assets/account_icon.png?1692086228721'
                alt=''
                className='h-[32px] w-[32px] mt-1 border-2 border-red-400 rounded-full p-1'
              />
              <div className='flex flex-col justify-center mt-2'>
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
          <div className='flex-grow-1'>
            <Link to='/'>
              <div className='flex flex-wrap gap-8 border-2 border-orange-400 rounded-lg p-2'>
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
        </div>
      </div>
    </header>
  )
}

export default Header
