import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
export default function ProductDetail() {
  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        <div className='flex flex-col gap-2 my-4 mx-20'>
          <div className='grid gap-5' style={{ gridTemplateColumns: '40% 60%' }}>
            <div className='grid gap-5' style={{ gridTemplateColumns: '20% 80%' }}>
              <div className='flex flex-col gap-4 item-center justify-center '>
                <button className=' text-black text-[25px] text-center flex justify-center '>
                  <HiChevronUp />
                </button>
                <div className=' flex flex-col gap-3 justify-center item-center bg-rose-400'>
                  <img
                    src='https://image.hsv-tech.io/0x1920/bbx/common/d6f2241f-37fc-4c28-8420-a1708d66a9e9.webp'
                    alt=''
                    className='cursor-pointer w-[100%] object-cover '
                  />
                  <img
                    src='https://image.hsv-tech.io/600x600/bbx/common/672cdc75-8e5c-4256-935e-1af794b9b66a.webp'
                    alt=''
                    className='cursor-pointer w-[100%] object-cover '
                  />
                  <img
                    src='https://image.hsv-tech.io/600x600/bbx/common/07792ca2-c2de-4519-8b1d-7c209903a2b2.webp'
                    alt=''
                    className='cursor-pointer w-[100%] object-cover '
                  />
                  <img
                    src='https://image.hsv-tech.io/0x1920/bbx/common/d6f2241f-37fc-4c28-8420-a1708d66a9e9.webp'
                    alt=''
                    className='cursor-pointer w-[100%] object-cover '
                  />
                </div>
                <button className=' text-black text-[25px] text-center flex justify-center '>
                  <HiChevronDown />
                </button>
              </div>
              <div>
                <img
                  src='https://image.hsv-tech.io/0x1920/bbx/common/d6f2241f-37fc-4c28-8420-a1708d66a9e9.webp'
                  alt=''
                  className='cursor-pointer w-[90%] pt-[10%] object-cover '
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
