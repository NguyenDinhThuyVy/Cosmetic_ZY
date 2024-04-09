import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<FormData>()
  const rules = getRules(getValues)
  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    },
    (data) => {
      const password = getValues('password'))
  return (
    <div className='bg-yellow pt-8'>
      <div className='h-[683px]'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-5 py-8 lg:py-14 lg:pr-10 bg-white border rounded-xl'>
            <div className='lg:col-span-3 lg:col-start-1 px-6 h-[533px] '>
              <img
                src='https://tronhouse.com/assets/data/editor/source/tai-sao-hinh-anh-san-pham-thuong-duoc-chup-tren-nen-trang/chup-anh-sang-tao-2.jpg'
                alt=''
                className='h-[533px] w-full object-cover'
              />
            </div>
            <div className='lg:col-span-2 lg:col-start-4 place-content-center '>
              <form className='p-10 roundedshadow-sm' onSubmit={onSubmit} noValidate>
                <div className='text-4xl text'>Đăng Ký</div>
                <div className='mt-8'>
                  <input
                    type='email'
                    {...register('email', rules.email)}
                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-400 rounded-lg focus:shadow-sm place '
                    placeholder='Email'
                    autoComplete='on'
                  />
                  <div className='mt-1 text-red-400 min-h-[1.25rem] text-sm pl-1'>{errors.password?.message}</div>
                </div>
                <div className='mt-2'>
                  <input
                    type='password'
                    {...register('password', rules.password)}
                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-400 rounded-lg focus:shadow-sm place'
                    placeholder='Password'
                  />
                  <div className='mt-1 text-red-400 min-h-[1.25rem] text-sm pl-1'></div>
                </div>
                <div className='mt-2'>
                  <input
                    type='password'
                    {...register('confirm_password', rules.confirm_password)}
                    className='p-3 w-full outline-none border border-gray-300 focus:border-gray-400 rounded-lg focus:shadow-sm place'
                    placeholder='Confirm Password'
                  />
                  <div className='mt-1 text-red-400 min-h-[1.25rem] text-sm pl-1'>
                    {errors.confirm_password?.message}
                  </div>
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
