import { Rate } from 'antd'

export default function Evaluate() {
  return (
    <div className='px-4 py-3'>
      <div className='w-full'>
        <div className='text-xl font-bold text-gray-600 uppercase text-center w-full'>Đánh Giá Sản phẩm</div>
      </div>

      <div className='grid gap-5 ' style={{ gridTemplateColumns: '40% 60%' }}>
        <div className='flex flex-col gap-2 text-xl'>
          <span className='text-gray-500 text-lg font-semibold'>
            Đánh giá chung <span className='text-rose-500'>*</span>
          </span>
          <Rate />
        </div>
        <div></div>
      </div>
    </div>
  )
}
