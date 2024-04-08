import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='bg-yellow'>
      <div className='container main'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-5 py-8 lg:py-14 lg:pr-10 bg-white'>
            <div className='lg:col-span-3 lg:col-start-1 px-6'>
              <img
                src='https://tronhouse.com/assets/data/editor/source/NH%E1%BB%AENG%20%C3%9D%20T%C6%AF%E1%BB%9ENG%20CH%E1%BB%A4P%20%E1%BA%A2NH%20M%E1%BB%B8%20PH%E1%BA%A8M%20%C4%90%C6%AF%E1%BB%A2C%20%C6%AFA%20CHU%E1%BB%98NG%20HI%E1%BB%86N%20NAY/cover%20-%20chup%20hinh%20my%20pham.jpg'
                alt=''
              />
            </div>
            <div className='lg:col-span-2 lg:col-start-4 place-content-center '>
              <form className='p-10 roundedshadow-sm'>
                <div className='text-4xl text'>Đăng Ký</div>
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
                    Đăng Ký
                  </button>
                </div>

                <div className='flex items-center justify-center mt-8'>
                  <span className='text-gray-400 text text-xl'>Bạn đã có tài khoản?</span>
                  <Link className='text-pink_2 ml-1 text text-xl' to='/login'>
                    Đăng Nhập
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
