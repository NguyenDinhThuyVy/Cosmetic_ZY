import SwiperQuick from '../SwiperQuick'

export default function QuickView() {
  return (
    <div className='grid' style={{ gridTemplateColumns: '45% 55%' }}>
      <div className='h-1/2'>
        <SwiperQuick />
      </div>
      <div>Phần tử 2</div>
    </div>
  )
}
