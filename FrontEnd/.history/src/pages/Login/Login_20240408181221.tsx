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
                <div className='m-2 flex justify-end text-xs text-blue-400 hover:text-blue-500'>
                  <a href='/'>Quên mật khẩu</a>
                </div>
                <div className='flex items-center'>
                  <div className='flex-1 h-px w-4/5 bg-slate-200'></div>
                  <span className='uppercase text-slate-300 px-4'>Hoặc</span>
                  <div className='flex-1 h-px w-4/5 bg-slate-200'></div>
                </div>
                <div className='flex gap-x-5 mt-3'>
                  <button className='flex  gap-x-2 items-center justify-center p-3 border border-gray-400 rounded-lg basis-1/2 shadow-md hover:border-gray-200 '>
                    <div>
                      <svg xmlns='http://www.w3.org/2000/svg' height='25' width='25' viewBox='0 0 512 512'>
                        <path
                          fill='#2166de'
                          d='M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z'
                        />
                      </svg>
                    </div>
                    <div>Facebook</div>
                  </button>
                  <button className='flex  gap-x-2 items-center justify-center p-3 border border-gray-400 rounded-lg basis-1/2 shadow-md hover:border-gray-200'>
                    <div>
                      <img
                        src='https://www.svgrepo.com/show/475656/google-color.svg
'
                        alt=''
                      />
                    </div>
                    <div>Telegram</div>
                  </button>
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
