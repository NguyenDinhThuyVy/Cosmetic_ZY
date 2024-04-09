import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'
import { IoLogoGoogle } from 'react-icons/io'
import { PiInstagramLogoBold } from 'react-icons/pi'
import { IoLogoYoutube } from 'react-icons/io5'
import 'src/Styles/Footer.scss'
import logo from 'src/assets/logo.png'
function Footer() {
  return (
    <footer className="bg-[url('https://bizweb.dktcdn.net/100/336/334/themes/939194/assets/bg_cosmetics.jpg?1706112573342')] bg-center bg-no-repeat bg-cover">
      <div className='grid place-items-center py-9 font'>
        <div className='p-[20px] mx-auto'>
          <div className='flex gap-12 text-white'>
            <div className='flex-grow-1 '>
              <div className=' mb-4 mt-[-40px]'>
                <Link to='/' className='logo-wrapper'>
                  <img src={logo} alt='logo' className='w-[350px] h-[150px]' />
                </Link>
              </div>
              <div className='mb-6'>
                <h4 className=' flex flex-col gap-1 text-xl'>
                  <span>Shop mỹ phẩm Cool Beauty</span>
                  <span> Làm đẹp trở nên dễ dàng hơn</span>
                </h4>
                <div className='mt-3'>
                  <ul className='flex flex-col gap-3'>
                    <li>Địa chỉ:Phường Hòa Minh,Quận Liên Chiểu,T.Phố Đà Nẵng</li>
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
                  <h4 className='font-semibold'>
                    <Link to='/' className='uppercase '>
                      Hỗ trợ khách hàng
                    </Link>
                  </h4>
                  <div className=' text-white mt-4' id='collapseListMenu01'>
                    <ul className='flex flex-col gap-3 text-gray-400 '>
                      <li className='li_menu hover:text-rose-200'>
                        <Link to='/'>Trang chủ</Link>
                      </li>
                      <li className='li_menu hover:text-rose-200'>
                        <Link to='/gioi-thieu'>Giới thiệu</Link>
                      </li>
                      <li className='li_menu hover:text-rose-200'>
                        <Link to='/collections/all'>Sản phẩm</Link>
                      </li>
                      <li className='li_menu hover:text-rose-200'>
                        <Link to='/san-pham-hot'>Khuyến mãi hot</Link>
                      </li>
                      <li className='li_menu hover:text-rose-200'>
                        <Link to='/tin-tuc'>Tin tức</Link>
                      </li>
                      <li className='li_menu hover:text-rose-200'>
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
                  <h4 className='uppercase mb-4 font-semibold'>
                    <Link to='/'>Chính sách</Link>
                  </h4>
                  <div className='text-white' id='collapseListMenu02'>
                    <ul className='flex flex-col gap-3 text-gray-400'>
                      <li className='li_menu hover:text-rose-200'>
                        <Link to='/collections/all'>Chính sách đổi trả</Link>
                      </li>
                      <li className='li_menu hover:text-rose-200'>
                        <Link to='/san-pham-hot'>Chính sách vận chuyển</Link>
                      </li>
                      <li className='li_menu hover:text-rose-200'>
                        <Link to='/tin-tuc'>Chính sách bảo mật</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-grow-1'>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-5'>
                  <h4 className='uppercase font-semibold '> Kết nối với chúng tôi</h4>
                  <div className='flex gap-4 text-white text-3xl '>
                    <Link to='/'>
                      <FaFacebookF className='hover:bg-rose-300 border rounded-full border-white p-[6px]' />
                    </Link>
                    <Link to='/'>
                      <FaTwitter className='hover:bg-rose-300 border rounded-full border-white p-[6px]' />
                    </Link>
                    <Link to='/'>
                      <IoLogoGoogle className='hover:bg-rose-300 border rounded-full border-white p-[6px]' />
                    </Link>
                    <Link to='/'>
                      <PiInstagramLogoBold className='hover:bg-rose-300 border rounded-full border-white p-[6px]' />
                    </Link>
                    <Link to='/'>
                      <IoLogoYoutube className='hover:bg-rose-300 border rounded-full border-white p-[6px]' />
                    </Link>
                  </div>
                </div>
                <div className='flex flex-col gap-5 mt-5 '>
                  <h4 className='uppercase font-semibold '> Phương thức thanh toán</h4>
                  <div className=''>
                    <Link to='/'>
                      <img
                        src='https://bizweb.dktcdn.net/100/336/334/themes/939194/assets/i_payment.png?1706112573342'
                        alt=''
                        className='w-[230px] h-[65px] ml-[-14px]'
                      />
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
