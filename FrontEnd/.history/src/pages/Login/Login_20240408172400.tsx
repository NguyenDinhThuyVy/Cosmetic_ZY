import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg-white '>
      <div className='container main'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-5 py-8 lg:py-14 lg:pr-10 bg-yellow'>
            <div className='lg:col-span-3 lg:col-start-1 px-2'>
              <img src='https://goccuaru.com/wp-content/uploads/2020/03/t%E1%BB%95ng-h%E1%BB%A3p.jpg' alt='' />
            </div>
            <div className='lg:col-span-2 lg:col-start-4 place-content-center '>
              <form className='p-10 roundedshadow-sm'>
                <div className='text-2xl'>Đăng nhập</div>
                <div className='mt-8'>
                  <input
                    type='email'
                    name='email'
                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                    placeholder='Email'
                  />
                  <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
                </div>
                <div className='mt-3'>
                  <input
                    type='password'
                    name='password'
                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                    placeholder='Password'
                  />
                  <div className='mt-1 text-red-600 min-h-[1rem] text-sm'></div>
                </div>
                <div className='mt-3'>
                  <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                    Đăng nhập
                  </button>
                </div>
                <div className='flex items-center justify-center mt-8'>
                  <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                  <Link className='text-red-400 ml-1' to='/register'>
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
