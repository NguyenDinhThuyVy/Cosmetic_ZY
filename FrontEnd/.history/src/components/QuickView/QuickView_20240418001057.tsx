import SwiperQuick from '../SwiperQuick'

export default function QuickView() {
  return (
    <div className='grid gap-5' style={{ gridTemplateColumns: '45% 55%' }}>
      <div className=''>
        <SwiperQuick />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-xl text-rose-900 uppercase'>ahc</div>
      </div>
    </div>
  )
}
