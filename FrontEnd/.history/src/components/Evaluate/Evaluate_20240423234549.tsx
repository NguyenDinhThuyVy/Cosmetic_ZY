import { Rate } from 'antd'

export default function Evaluate() {
  return (
    <div className='grid gap-5 px-4 py-3' style={{ gridTemplateColumns: '40% 60%' }}>
      <div>
        <Rate />
      </div>
      <div></div>
    </div>
  )
}
