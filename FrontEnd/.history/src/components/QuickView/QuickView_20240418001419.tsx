import { FaStar } from 'react-icons/fa6'
import SwiperQuick from '../SwiperQuick'

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
          {' '}
          <div className='flex gap-1 text-gray-800 items-center justify-center'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className='text-black ml-2 text-sm'>(0)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
