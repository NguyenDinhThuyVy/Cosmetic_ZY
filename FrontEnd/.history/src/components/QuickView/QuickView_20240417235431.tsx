import SwiperQuick from '../SwiperQuick'

export default function QuickView() {
  return (
    <div className='grid' style={{ gridTemplateColumns: '45% 55%' }}>
      <div>
        <SwiperQuick />
      </div>
      <div>Phần tử 2</div>
    </div>
  )
}
