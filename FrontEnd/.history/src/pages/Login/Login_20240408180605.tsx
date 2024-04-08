import { Link } from 'react-router-dom'
import './Login.scss'
export default function Login() {
  return (
    <div className='bg-yellow'>
      <div className='container main'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-5 py-8 lg:py-14 lg:pr-10 bg-white'>
            <div className='lg:col-span-3 lg:col-start-1 px-6'>
              <img
                src='https://bazaarvietnam.vn/wp-content/uploads/2020/01/my-pham-xanh-03-drunk-elephant-hibiscus.jpg'
                alt=''
              />
            </div>
            <div className='lg:col-span-2 lg:col-start-4 place-content-center '>
              <form className='p-10 roundedshadow-sm'>
                <div className='text-4xl text'>Đăng nhập</div>
                <div className='mt-8'>
                  <input
                    type='email'
                    name='email'
                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-400 rounded-lg focus:shadow-sm place '
                    placeholder='Email'
                  />
                  <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
                </div>
                <div className='mt-3'>
                  <input
                    type='password'
                    name='password'
                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-400 rounded-lg focus:shadow-sm place'
                    placeholder='Password'
                  />
                  <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
                </div>
                <div className='mt-3'>
                  <button className='w-full text-center py-4 border rounded-lg  px-2 uppercase bg-pink_3 text-white text-sm hover:bg-pink_3/90'>
                    Đăng nhập
                  </button>
                </div>
                <div className='m-2 flex justify-end text-xs text-rose-400 hover:text-blue-500'>
                  <a href='/'>Quên mật khẩu</a>
                </div>
                <div className='flex items-center justify-center mt-8'>
                  <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                  <Link className='text-pink_2 ml-1' to='/register'>
                    Đăng ký
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
