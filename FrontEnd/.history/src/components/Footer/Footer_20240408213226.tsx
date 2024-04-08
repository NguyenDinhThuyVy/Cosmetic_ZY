import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'
function Footer() {
  return (
    <footer>
      <div className="bg-[url('https://bizweb.dktcdn.net/100/336/334/themes/939194/assets/bg_cosmetics.jpg?1706112573342')]">
        <div className='p-[20px] mx-auto'>
          <div className='flex gap-12 text-white'>
            <div className='flex-grow-1 '>
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
            <div className='flex-grow-1'>
              <div className='flex  gap-2 text-white'>
                <div className=''>
                  <h4 className=''>
                    <Link to='/' className='uppercase '>
                      Hỗ trợ khách hàng
                    </Link>
                  </h4>
                  <div className=' text-white mt-4' id='collapseListMenu01'>
                    <ul className='flex flex-col gap-3 text-gray-400 '>
                      <li className='li_menu hover:text-gray-200'>
                        <Link to='/'>Trang chủ</Link>
                      </li>
                      <li className='li_menu hover:text-gray-200'>
                        <Link to='/gioi-thieu'>Giới thiệu</Link>
                      </li>
                      <li className='li_menu hover:text-gray-200'>
                        <Link to='/collections/all'>Sản phẩm</Link>
                      </li>
                      <li className='li_menu hover:text-gray-200'>
                        <Link to='/san-pham-hot'>Khuyến mãi hot</Link>
                      </li>
                      <li className='li_menu hover:text-gray-200'>
                        <Link to='/tin-tuc'>Tin tức</Link>
                      </li>
                      <li className='li_menu hover:text-gray-200'>
                        <Link to='/lien-he'>Liên hệ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-grow-1'>
              <div className='flex gap-2 text-white'>
                <div className=''>
                  <h4 className='uppercase mb-4'>
                    <Link to='/'>Chính sách</Link>
                  </h4>
                  <div className='text-white' id='collapseListMenu02'>
                    <ul className='flex flex-col gap-3 text-gray-400'>
                      <li className='li_menu hover:text-gray-200'>
                        <Link to='/collections/all'>Chính sách đổi trả</Link>
                      </li>
                      <li className='li_menu hover:text-gray-200'>
                        <Link to='/san-pham-hot'>Chính sách vận chuyển</Link>
                      </li>
                      <li className='li_menu hover:text-gray-200'>
                        <Link to='/tin-tuc'>Chính sách bảo mật</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-grow-1'>
              <div className='flex gap-4'>
                <div className='flex flex-col gap-4'>
                  <h4 className='uppercase '> Kết nối với chúng tôi</h4>
                  <div className='flex gap-4 text-white text-3xl'>
                    <Link to='/'>
                      <FaFacebookF className='hover:bg-rose-300 border rounded-full border-white p-1' />
                    </Link>
                    <Link to='/'>
                      <FaTwitter className='hover:bg-rose-300 border rounded-full border-white p-1' />
                    </Link>
                    <Link to='/'>
                      <FaFacebookF className='hover:bg-rose-300 border rounded-full border-white p-1' />
                    </Link>
                    <Link to='/'>
                      <FaFacebookF className='hover:bg-rose-300 border rounded-full border-white p-1' />
                    </Link>
                    <Link to='/'>
                      <FaFacebookF className='hover:bg-rose-300 border rounded-full border-white p-1' />
                    </Link>
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
