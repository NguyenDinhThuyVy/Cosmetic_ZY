import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, Schema } from 'src/utils/rules'
import Input from 'src/components/Input'
import { useMutation } from 'react-query'

import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.contexts'
import styles from 'src/Styles/Login.module.scss'
import path from 'src/constants/path'
import authApi from 'src/apis/auth.api'
import { toast } from 'react-toastify'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])

export default function Login() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(loginSchema) })
  const loginMutation = useMutation({
    mutationFn: (body: FormData) => authApi.login(body)
  })
  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        toast.success('Đăng nhập thành công!', {
          autoClose: 1300 // Tự động đóng thông báo sau 2 giây
        })
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
        toast.error('Đăng nhập thất bại!', {
          autoClose: 1300 // Tự động đóng thông báo sau 2 giây
        })
      }
    })
  })

  return (
    <div className='bg-yellow pt-8'>
      <div className=' h-[683px] '>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-5 py-8 lg:py-14 lg:pr-10 bg-white border rounded-xl '>
            <div className='lg:col-span-3 lg:col-start-1 px-6'>
              <img
                src='https://bazaarvietnam.vn/wp-content/uploads/2020/01/my-pham-xanh-03-drunk-elephant-hibiscus.jpg'
                alt=''
              />
            </div>
            <div className='lg:col-span-2 lg:col-start-4 place-content-center '>
              <form className='p-10 roundedshadow-sm' onSubmit={onSubmit} noValidate>
                <div className={styles.text}>
                  <span className='text-4xl'>Đăng nhập</span>
                </div>
                <Input
                  name='email'
                  register={register}
                  type='email'
                  className='mt-8'
                  errorMessage={errors.email?.message}
                  placeholder='Email'
                />
                <Input
                  name='password'
                  register={register}
                  type='password'
                  className='mt-2 relative'
                  errorMessage={errors.password?.message}
                  placeholder='Password'
                  autoComplete='on'
                />
                <div className='mt-2'>
                  <button className='w-full text-center py-4 border rounded-lg  px-2 uppercase bg-pink_3 text-white text-sm hover:bg-pink_3/90'>
                    Đăng nhập
                  </button>
                </div>
                <div className='m-2 flex justify-end text-xs text-blue-400 hover:text-blue-500'>
                  <a href={path.forgetpassword}>Quên mật khẩu</a>
                </div>
                <div className='flex items-center'>
                  <div className='flex-1 h-px w-4/5 bg-slate-200'></div>
                  <span className='uppercase text-slate-300 px-4 text'>Hoặc</span>
                  <div className='flex-1 h-px w-4/5 bg-slate-200'></div>
                </div>
                <div className='flex gap-x-5 mt-3'>
                  <button className='flex  gap-x-2 items-center justify-center p-3 border border-gray-300 rounded-lg basis-1/2 shadow-md hover:scale-105 '>
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
                  <button className='flex  gap-x-2 items-center justify-center p-3 border border-gray-300 rounded-lg basis-1/2 shadow-md hover:scale-105'>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        height='25'
                        width='25'
                        viewBox='-0.5 0 48 48'
                        version='1.1'
                      >
                        <title>Google-color</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id='Icons' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                          <g id='Color-' transform='translate(-401.000000, -860.000000)'>
                            <g id='Google' transform='translate(401.000000, 860.000000)'>
                              <path
                                d='M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24'
                                id='Fill-1'
                                fill='#FBBC05'
                              ></path>
                              <path
                                d='M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333'
                                id='Fill-2'
                                fill='#EB4335'
                              ></path>
                              <path
                                d='M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667'
                                id='Fill-3'
                                fill='#34A853'
                              ></path>
                              <path
                                d='M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24'
                                id='Fill-4'
                                fill='#4285F4'
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div>Google</div>
                  </button>
                </div>
                <div className='flex items-center justify-center mt-8 '>
                  <div className={styles.text}>
                    <span className='text-gray-400  text-lg'>Bạn chưa có tài khoản?</span>
                  </div>
                  <div className={styles.text}>
                    <Link
                      className='text-pink_2 ml-1  text-lg'
                      to={path.register}
                      onClick={() => {
                        window.scrollTo(0, 0)
                      }}
                    >
                      Đăng ký
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
