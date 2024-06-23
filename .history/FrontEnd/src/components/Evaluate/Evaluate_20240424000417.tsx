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
          <div className='text-sm text-gray-400/80  text-left w-full'>
            Bạn có thể nói thêm về sản phẩm ở dưới đây, ví dụ như độ hoàn thiện, sự thoải mái
          </div>
        </div>
      </div>
      <div className='w-full flex  items-center  justify-center mt-4'>
        <div className='flex  items-center  justify-center border-2 rounded-full w-[200px] h-[48px] bg-gradient-to-r from-[#f0a80e] via-[#c43131] to-[#671f57] text-white text-base  '>
          <button
            type='button'
            className='ant-btn ant-btn-primary size-16 font-bold flex-1 btn-black h-30 radius-38 pd-14-23 flex-center btn-add-cart uppercase'
          >
            Gửi Cho Chúng Tôi
          </button>
        </div>
      </div>
    </div>
  )
}
