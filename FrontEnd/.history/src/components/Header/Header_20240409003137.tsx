import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'

function Header() {
  return (
    <header>
      <div className='flex justify-between'>
        <div className='logo'>
          <Link to='/'></Link>
        </div>
      </div>
    </header>
  )
}

export default Header
