import { Link } from 'react-router-dom'

export default function ProductSale() {
  return (
    <Link to='/' className=' bg-rose-300  w-[262px] h-[420px] p-5'>
      <div className=' bg-slate-50 flex flex-col justify-between gap-4 items-center'>
        <div className='flex-1 h-1/2 w-5/6'>
          <img src='https://image.hsv-tech.io/600x600/bbx/common/74685e3a-71a1-4779-8896-ec20c117fc40.webp' alt='' />
        </div>
        <div className='flex-1 h-1/2'>hihi</div>
      </div>
    </Link>
  )
}
