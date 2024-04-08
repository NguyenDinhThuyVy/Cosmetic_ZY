import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'

function Header() {
  return (
    <header>
      <div className='flex justify-between p-4'>
        <div className='logo ml-3'>
          <Link to='/'>
            {' '}
            <img src={logo} alt='' className='w-[270px] h-[80px]' />
          </Link>
        </div>
        <div className='search'>
          <form className='col-span-9'>
            <div className='bg-white rounded-sm p-1 flex '>
              <input
                type='text'
                name='search'
                className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent'
                placeholder='search'
              />
              <button className='rounded-sm py-2 px-6 flex-shrink-0 bg-red-400 hover:opacity-90'>
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
        </div>
      </div>
    </header>
  )
}

export default Header
