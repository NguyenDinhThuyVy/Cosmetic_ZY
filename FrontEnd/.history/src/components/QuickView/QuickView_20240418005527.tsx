import { FaStar } from 'react-icons/fa6'
import SwiperQuick from '../SwiperQuick'
import { FaStarHalfAlt } from 'react-icons/fa'
import 'src/Styles/SwiperQuick.scss'
export default function QuickView() {
  return (
    <div className='grid gap-5' style={{ gridTemplateColumns: '45% 55%' }}>
      <div className=''>
        <SwiperQuick />
      </div>
      <div className='flex flex-col gap-1'>
        <div className='text-l text-rose-700 uppercase font-bold'>ahc</div>
        <div className='text-xl text-gray-900  font-bold'>
          Kem Dưỡng Ẩm, Phục Hồi Da AHC Premium Ex Hydra B5 Biome Capsule Cream 50ml
        </div>
        <div className='flex gap-2'>
          <div className='flex gap-1 text-orange-500 items-center justify-center text-[13px] border-white border-r-gray-200 border-2 pr-3'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <span className='text-black ml-2 text-[13px]'>(10)</span>
          </div>
          <div className='flex gap-1  border-white border-r-gray-200 border-2 pr-3'>
            <span className='font-semibold'>Xuất sứ :</span>
            <span>Hàn Quốc</span>
          </div>
          <div className='flex gap-1'>
            <span className='font-semibold'>Mã:</span>
            <span>5044</span>
          </div>
        </div>
        <div className='border-gradient'>hihi</div>
        <div className='gradient-text font-semibold'>Your text here</div>
      </div>
    </div>
  )
}
