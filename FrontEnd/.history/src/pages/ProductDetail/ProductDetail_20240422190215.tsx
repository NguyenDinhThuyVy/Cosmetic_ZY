import { HiChevronUp } from 'react-icons/hi'
export default function ProductDetail() {
  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        <div className='flex flex-col gap-2 my-4 mx-20'>
          <div className='grid gap-5' style={{ gridTemplateColumns: '40% 60%' }}>
            <div className='grid gap-5' style={{ gridTemplateColumns: '40% 60%' }}>
              <div className='flex flex-col gap-2 relative '>
                <button className='absolute left-0 top-1/2  -translate-y-1/2 bg-black/20 text-white text-md'>
                  <HiChevronUp />
                </button>
              </div>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
