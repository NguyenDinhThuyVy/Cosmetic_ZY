import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="bg-[url('https://bizweb.dktcdn.net/100/336/334/themes/939194/assets/bg_cosmetics.jpg?1706112573342')]">
        <div className='p-[15px] m-auto'>
          <div className='grid grid-cols-3 lg:grid-cols-2 gap-6 '>
            <div className='col-span-1'>
              <div className=' mb-6'>
                <Link to='/' className='logo-wrapper'>
                  <img
                    src='//bizweb.dktcdn.net/100/336/334/themes/939194/assets/logo_footer.png?1706112573342'
                    alt='logo'
                  />
                </Link>
              </div>

              <div className=' mb-6'>
                <h4 className='title-menu-top'>
                  <span>
                    Shop mỹ phẩm Cool Beauty
                    <br />
                    Làm đẹp trở nên dễ dàng hơn
                  </span>
                </h4>
                <div className='hotline_footer'>
                  <ul>
                    <li>Địa chỉ: Toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Quận Ba Đình, Hà Nội</li>
                    <li>
                      Hotline:{' '}
                      <Link className='hai01' to='tel:19006750'>
                        1900 6750
                      </Link>
                    </li>
                    <li>
                      Email: <a href='mailto:coolteam@gmail.com'>coolteam@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='flex flex-col gap-2 text-white'>
                <div className=''>
                  <h4 className='mb-4'>
                    <Link to='/' className='uppercase'>
                      Hỗ trợ khách hàng
                    </Link>
                  </h4>
                  <div className=' text-white' id='collapseListMenu01'>
                    <ul className='flex flex-col gap-3 text-gray-300'>
                      <li className='li_menu'>
                        <Link to='/'>Trang chủ</Link>
                      </li>
                      <li className='li_menu'>
                        <Link to='/gioi-thieu'>Giới thiệu</Link>
                      </li>
                      <li className='li_menu'>
                        <Link to='/collections/all'>Sản phẩm</Link>
                      </li>
                      <li className='li_menu'>
                        <Link to='/san-pham-hot'>Khuyến mãi hot</Link>
                      </li>
                      <li className='li_menu'>
                        <Link to='/tin-tuc'>Tin tức</Link>
                      </li>
                      <li className='li_menu'>
                        <Link to='/lien-he'>Liên hệ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className=''>
                  <h4 className=''>
                    <button
                      className=''
                      data-toggle='collapse'
                      aria-expanded='false'
                      data-target='#collapseListMenu02'
                      aria-controls='collapseListMenu02'
                    >
                      Chính sách <i className='fa fa-plus' aria-hidden='true'></i>
                    </button>
                  </h4>
                  <div className='collapse time_work' id='collapseListMenu02'>
                    <ul className='list-menu'>
                      <li className='li_menu'>
                        <Link to='/'>Trang chủ</Link>
                      </li>
                      <li className='li_menu'>
                        <Link to='/gioi-thieu'>Giới thiệu</Link>
                      </li>
                      <li className='li_menu'>
                        <Link to='/collections/all'>Sản phẩm</Link>
                      </li>
                      <li className='li_menu'>
                        <Link to='/san-pham-hot'>Khuyến mãi hot</Link>
                      </li>
                      <li className='li_menu'>
                        <Link to='/tin-tuc'>Tin tức</Link>
                      </li>
                      <li className='li_menu'>
                        <Link to='/lien-he'>Liên hệ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
