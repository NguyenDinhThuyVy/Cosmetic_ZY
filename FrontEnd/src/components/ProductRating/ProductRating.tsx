import { FaStar } from 'react-icons/fa6'

export default function ProductRating({
  rating,
  activeClassname = 'text-[14px] fill-orange-600 text-orange-800 rounded-lg',
  nonActiveClassname = 'text-[14px] fill-current text-gray-300 rounded-lg'
}: {
  rating: number
  activeClassname?: string
  nonActiveClassname?: string
}) {
  const handleWidth = (order: number) => {
    if (order <= rating) {
      return '100%'
    }
    if (order > rating && order - rating < 1) {
      return (rating - Math.floor(rating)) * 100 + '%'
    }
    return '0%'
  }
  return (
    <div className='flex items-center gap-1  '>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className='relative ' key={index}>
            <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: handleWidth(index + 1) }}>
              <FaStar className={activeClassname} />
            </div>
            <FaStar className={nonActiveClassname} />
          </div>
        ))}
    </div>
  )
}
