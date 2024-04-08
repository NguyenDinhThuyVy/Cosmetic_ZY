import logo from 'src/assets/logo.png'

function Header() {
  return (
    <header>
      <div className='flex justify-between'>
        <div className='logo'>
          <Link to='/'></Link>
          <img src={logo} alt='' />
        </div>
      </div>
    </header>
  )
}

export default Header
