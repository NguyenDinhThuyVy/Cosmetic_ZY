import SwiperQuick from '../SwiperQuick'

export default function QuickView() {
  return (
    <div className='grid gap-5' style={{ gridTemplateColumns: '45% 55%' }}>
      <div className=''>
        <SwiperQuick />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-l text-rose-700 uppercase font-bold'>ahc</div>
        <div className='text-xl text-gray-700 uppercase font-bold'>
          Kem Dưỡng Ẩm, Phục Hồi Da AHC Premium Ex Hydra B5 Biome Capsule Cream 50ml
        </div>
      </div>
    </div>
  )
}
