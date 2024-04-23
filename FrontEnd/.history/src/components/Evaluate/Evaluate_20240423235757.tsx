import { Rate } from 'antd'
import TextArea from 'antd/es/input/TextArea'

export default function Evaluate() {
  return (
    <div className='px-4 py-3'>
      <div className='w-full'>
        <div className='text-xl font-bold text-gray-600 uppercase text-center w-full'>Đánh Giá Sản phẩm</div>
      </div>

      <div className='grid gap-5 mt-3' style={{ gridTemplateColumns: '40% 60%' }}>
        <div className='flex flex-col gap-2 '>
          <span className='text-gray-500 text-lg font-semibold'>
            Đánh giá chung <span className='text-rose-500'>*</span>
          </span>
          <Rate className='text-3xl' />
        </div>
        <div className='flex flex-col gap-2 '>
          <span className='text-gray-500 text-lg font-semibold'>
            Đánh giá sản phẩm<span className='text-rose-500'>*</span>
          </span>
          <TextArea rows={6} placeholder='Viết đánh giá chi tiết' maxLength={300} />
        </div>
        <div className='text-sm font-bold text-gray-400  text-center w-full'>Đánh Giá Sản phẩm</div>
      </div>
    </div>
  )
}
