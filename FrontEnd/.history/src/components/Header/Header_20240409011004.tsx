import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'

function Header() {
  return (
    <header>
      <div className='flex p-4 items-center gap-5'>
        <div className='logo ml-3 w-1/5'>
          <Link to='/'>
            {' '}
            <img src={logo} alt='' className='w-[270px] h-[80px]' />
          </Link>
        </div>
        <div className='search w-2/5 flex flex-col gap-2 h-1/4 '>
          <form className='w-10/12 '>
            <div className='bg-gray-100 rounded-sm p-1 flex rounded-l-3xl rounded-r-3xl '>
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
                  className='w-6 h-6'
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
        <div className='flex gap-4 items-center'>
          <div className='w-1/3'>
            <div className='flex flex-wrap gap-1'>
              <img
                src='https://bizweb.dktcdn.net/100/426/076/themes/896300/assets/phone_icon.png?1692086228721'
                alt=''
                className='h-[30px] w-[90px]'
              />
            </div>
          </div>
          <div className='w-1/3'></div>
          <div className='w-1/3'></div>
        </div>
      </div>
    </header>
  )
}

export default Header
