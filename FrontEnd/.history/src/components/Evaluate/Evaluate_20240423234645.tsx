import { Rate } from 'antd'

export default function Evaluate() {
  return (
    <div className='px-4 py-3'>
      <span>Đánh Giá Sản phẩm</span>
      <div className='grid gap-5 ' style={{ gridTemplateColumns: '40% 60%' }}>
        <div>
          <Rate />
        </div>
        <div></div>
      </div>
    </div>
  )
}
