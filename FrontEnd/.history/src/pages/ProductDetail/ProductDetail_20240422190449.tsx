import { HiChevronUp } from 'react-icons/hi'
export default function ProductDetail() {
  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        <div className='flex flex-col gap-2 my-4 mx-20'>
          <div className='grid gap-5' style={{ gridTemplateColumns: '40% 60%' }}>
            <div className='grid gap-5' style={{ gridTemplateColumns: '40% 60%' }}>
              <div className='flex flex-col gap-2 relative '>
                <button className='absolute left-0 top-1/2  -translate-y-1/2  text-black text-[25px]'>
                  <HiChevronUp />
                </button>
                <div className='relative w-full pt-[100%]'>
                  <img
                    src='https://image.hsv-tech.io/0x1920/bbx/common/d6f2241f-37fc-4c28-8420-a1708d66a9e9.webp'
                    alt=''
                    className='absolute top-0 left-0 h-full w-full cursor-pointer bg-white object-cover'
                  />
                  <div className='absolute inset-0 border-2 border-orange' />
                </div>
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
