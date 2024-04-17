import SwiperQuick from '../SwiperQuick'

export default function QuickView() {
  return (
    <div className='grid gap-5' style={{ gridTemplateColumns: '45% 55%' }}>
      <div className='h-1/4'>
        <SwiperQuick />
      </div>
      <div>Phần tử 2</div>
    </div>
  )
}
