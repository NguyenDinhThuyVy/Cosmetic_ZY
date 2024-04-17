// import { Progress, ProgressProps } from 'antd'
import { Link } from 'react-router-dom'
import './ProductSale.scss'
export default function ProductSale() {
  // const twoColors: ProgressProps['strokeColor'] = {
  //   '0%': '#108ee9',
  //   '100%': '#87d068'
  // }
  return (
    <Link to='/' className=' bg-rose-300  w-[263px] h-[422px] p-5'>
      <div className=' bg-[#ffffff] flex flex-col justify-between gap-5 items-center rounded-2xl'>
        <div className='flex-1 h-1/2 w-full'>
          <img
            src='https://image.hsv-tech.io/600x600/bbx/common/74af6c90-1acf-4d0a-85d5-3596d877c2d4.webp'
            alt=''
            className='w-full rounded-t-2xl rounded-tr-2xl'
          />
        </div>
        <div className='flex-1 h-1/2 '>
          <div className='flex flex-col gap-2 items-center justify-center px-6 hover:'>
            <div className='text-sm font-semibold text-black'>AHC</div>
            <div className='text-[12px] line-clamp-2 text-center leading-relaxed font-normal text-black'>
              [Trải Nghiệm Combo 11 Mặt Nạ HOT Nhất] Mặt Nạ AHC + Goodal + Dermatory Dưỡng Da Sáng &amp; Săn Mịn
            </div>
            <div className='text-[13px] flex gap-3 px-3'>
              <div className='font-semibold text-black'>291.000đ</div>
              <div className='font-medium text-gray-400 line-through'>771.000đ</div>
              <div className='relative bg-[#c73030] w-[30px] h-[15px] flex justify-center items-center rounded-full'>
                <div className='absolute text-gray-100 text-[11px] p-1'>11%</div>
              </div>
            </div>
            <div class='rating-section'>
              <ul class='ant-rate ant-rate-disabled' tabindex='-1' role='radiogroup'>
                <li class='ant-rate-star ant-rate-star-zero'>
                  <div role='radio' aria-checked='false' aria-posinset='1' aria-setsize='5' tabindex='-1'>
                    <div class='ant-rate-star-first'>
                      <span role='img' aria-label='star' class='anticon anticon-star'>
                        <svg
                          viewBox='64 64 896 896'
                          focusable='false'
                          data-icon='star'
                          width='1em'
                          height='1em'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                        </svg>
                      </span>
                    </div>
                    <div class='ant-rate-star-second'>
                      <span role='img' aria-label='star' class='anticon anticon-star'>
                        <svg
                          viewBox='64 64 896 896'
                          focusable='false'
                          data-icon='star'
                          width='1em'
                          height='1em'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li class='ant-rate-star ant-rate-star-zero'>
                  <div role='radio' aria-checked='false' aria-posinset='2' aria-setsize='5' tabindex='-1'>
                    <div class='ant-rate-star-first'>
                      <span role='img' aria-label='star' class='anticon anticon-star'>
                        <svg
                          viewBox='64 64 896 896'
                          focusable='false'
                          data-icon='star'
                          width='1em'
                          height='1em'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                        </svg>
                      </span>
                    </div>
                    <div class='ant-rate-star-second'>
                      <span role='img' aria-label='star' class='anticon anticon-star'>
                        <svg
                          viewBox='64 64 896 896'
                          focusable='false'
                          data-icon='star'
                          width='1em'
                          height='1em'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li class='ant-rate-star ant-rate-star-zero'>
                  <div role='radio' aria-checked='false' aria-posinset='3' aria-setsize='5' tabindex='-1'>
                    <div class='ant-rate-star-first'>
                      <span role='img' aria-label='star' class='anticon anticon-star'>
                        <svg
                          viewBox='64 64 896 896'
                          focusable='false'
                          data-icon='star'
                          width='1em'
                          height='1em'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                        </svg>
                      </span>
                    </div>
                    <div class='ant-rate-star-second'>
                      <span role='img' aria-label='star' class='anticon anticon-star'>
                        <svg
                          viewBox='64 64 896 896'
                          focusable='false'
                          data-icon='star'
                          width='1em'
                          height='1em'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li class='ant-rate-star ant-rate-star-zero'>
                  <div role='radio' aria-checked='false' aria-posinset='4' aria-setsize='5' tabindex='-1'>
                    <div class='ant-rate-star-first'>
                      <span role='img' aria-label='star' class='anticon anticon-star'>
                        <svg
                          viewBox='64 64 896 896'
                          focusable='false'
                          data-icon='star'
                          width='1em'
                          height='1em'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                        </svg>
                      </span>
                    </div>
                    <div class='ant-rate-star-second'>
                      <span role='img' aria-label='star' class='anticon anticon-star'>
                        <svg
                          viewBox='64 64 896 896'
                          focusable='false'
                          data-icon='star'
                          width='1em'
                          height='1em'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li class='ant-rate-star ant-rate-star-zero'>
                  <div role='radio' aria-checked='false' aria-posinset='5' aria-setsize='5' tabindex='-1'>
                    <div class='ant-rate-star-first'>
                      <span role='img' aria-label='star' class='anticon anticon-star'>
                        <svg
                          viewBox='64 64 896 896'
                          focusable='false'
                          data-icon='star'
                          width='1em'
                          height='1em'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                        </svg>
                      </span>
                    </div>
                    <div class='ant-rate-star-second'>
                      <span role='img' aria-label='star' class='anticon anticon-star'>
                        <svg
                          viewBox='64 64 896 896'
                          focusable='false'
                          data-icon='star'
                          width='1em'
                          height='1em'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z'></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <div class='count-rate'>(0)</div>
            </div>
            <div className='lbbUFt w-full font'>
              <div className='ant-progress ant-progress-line ant-progress-status-normal ant-progress-default '>
                <div className='ant-progress-outer'>
                  <div
                    className='ant-progress-inner'
                    style={{
                      backgroundColor: 'rgba(199, 49, 48, 0.314)'
                    }}
                  >
                    <div
                      className='ant-progress-bg'
                      style={{
                        width: '25.6667%',
                        height: '20px',
                        background:
                          'repeating-linear-gradient(-45deg, rgba(199, 49, 48, 0.6), rgba(199, 49, 48, 0.6) 10px, rgb(199, 49, 48) 10px, rgb(199, 49, 48) 20px)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className='lb-stock'>còn 13 sản phẩm</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
