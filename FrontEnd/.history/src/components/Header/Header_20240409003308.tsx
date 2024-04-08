import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'

function Header() {
  return (
    <header>
      <div className='flex justify-between p-4'>
        <div className='logo'>
          <Link to='/'>
            {' '}
            <img src={logo} alt='' className='w-[270px] h-[80px]' />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
