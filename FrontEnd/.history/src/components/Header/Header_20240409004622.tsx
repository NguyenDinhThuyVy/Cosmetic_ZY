import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'

function Header() {
  return (
    <header>
      <div className='flex p-4 items-center'>
        <div className='logo ml-3 w-1/5'>
          <Link to='/'>
            {' '}
            <img src={logo} alt='' className='w-[270px] h-[80px]' />
          </Link>
        </div>
        <div className='search w-2/5 flex flex-col gap-2'>
          <form className=''>
            <div className='bg-gray-100 rounded-sm p-1 flex rounded-l-3xl rounded-r-3xl'>
              <input
                type='text'
                name='search'
                className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent'
                placeholder='search'
              />
              <button className='py-2 px-6 flex-shrink-0 bg-red-300 hover:opacity-90 h-full rounded-r-3xl'>
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
          <div className='flex flex-wrap gap-2 text-[9px]'>
            <Link to='/' className='text-gray-300 hover:text-rose-400'>
              <span className='text-[9px]'>Kem chống nắng</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
