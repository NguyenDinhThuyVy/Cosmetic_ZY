import SwiperQuick from '../SwiperQuick'

export default function QuickView() {
  return (
    <div className='flex'>
      <div style={{ flex: '45%' }}>
        <SwiperQuick />
      </div>
      <div style={{ flex: '55%' }}>Phần tử 2</div>
    </div>
  )
}
