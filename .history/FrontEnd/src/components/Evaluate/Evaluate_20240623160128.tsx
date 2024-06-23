import { Rate } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useState } from 'react'
import { toast } from 'react-toastify'
import productApi from 'src/apis/product.api'
interface EvaluateProps {
  productId: string // Define the type of productId
}
export default function Evaluate({ productId }: EvaluateProps) {
  const [rating, setRating] = useState(0) // State for rating value
  const [comment, setComment] = useState('') // State for comment text

  const handleRatingChange = (value: any) => setRating(value)
  const handleCommentChange = (event: any) => setComment(event.target.value)
  const handleComment = async () => {
    if (!rating || !comment) {
      // Handle validation errors (optional: display error message to user)
      toast.error('Vui lòng nhập đánh giá hoặc chọn số sao bạn mong muốn.')
      return
    }
    const body = {
      rating,
      commentItem: comment
    }

    try {
      const response = await productApi.addComment(productId, body) // Assuming 'addComment' is defined elsewhere

      if (response.status === 200) {
        // Handle successful submission (optional: show success message, clear form)
        toast.success('Cảm ơn bạn đã đánh giá cho chúng tôi!!!')
        setRating(0)
        setComment('')
      } else {
        // Handle API errors (optional: display error message to user)
        toast.error('Vui lòng thử lại')
      }
    } catch (error) {
      // Handle general errors (optional: display error message to user)
      toast.error('Vui lòng thử lại')
    }
  }
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
          <Rate className='text-3xl' value={rating} onChange={handleRatingChange} />
        </div>
        <div className='flex flex-col gap-2 '>
          <span className='text-gray-500 text-lg font-semibold'>
            Đánh giá sản phẩm<span className='text-rose-500'>*</span>
          </span>
          <TextArea
            rows={6}
            placeholder='Viết đánh giá chi tiết'
            maxLength={300}
            value={comment}
            onChange={handleCommentChange}
          />
          <div className='text-sm text-gray-400/80  text-left w-full'>
            Bạn có thể nói thêm về sản phẩm ở dưới đây, ví dụ như độ hoàn thiện, sự thoải mái
          </div>
        </div>
      </div>
      <div className='w-full flex  items-center  justify-center mt-4'>
        <div className='flex  items-center  justify-center border-2 rounded-full w-[200px] h-[48px] bg-gradient-to-r from-[#f0a80e] via-[#c43131] to-[#671f57] text-white text-base  '>
          <button
            onClick={handleComment}
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
