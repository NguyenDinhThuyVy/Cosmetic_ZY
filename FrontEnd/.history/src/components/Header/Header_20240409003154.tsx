import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'

function Header() {
  return (
    <header>
      <div className='flex justify-between'>
        <div className='logo'>
          <Link to='/'>
            {' '}
            <img src={logo} alt='' className='w-[350px] h-[150px]' />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
