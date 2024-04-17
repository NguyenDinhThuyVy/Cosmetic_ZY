import { Link } from 'react-router-dom'

export default function ProductSale() {
  return (
    <Link to='/' className=' bg-rose-300  w-[263px] h-[422px] p-5'>
      <div className=' bg-slate-50 flex flex-col justify-between gap-5 items-center rounded-2xl'>
        <div className='flex-1 h-1/2 w-full'>
          <img
            src='https://image.hsv-tech.io/600x600/bbx/common/74685e3a-71a1-4779-8896-ec20c117fc40.webp'
            alt=''
            className='w-full rounded-2xl'
          />
        </div>
        <div className='flex-1 h-1/2 '>
          <div className='flex flex-col gap-2 items-center justify-center px-6'>
            <div className='text-sm font-semibold'>AHC</div>
            <div className='text-[12px] line-clamp-2 text-center leading-relaxed font-normal'>
              [Trải Nghiệm Combo 11 Mặt Nạ HOT Nhất] Mặt Nạ AHC + Goodal + Dermatory Dưỡng Da Sáng &amp; Săn Mịn
            </div>
            <div className='text-[13px] flex gap-2'>
              <div className='font-semibold'>291.000đ</div>
              <div className='font-semibold text-gray-200'>291.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
