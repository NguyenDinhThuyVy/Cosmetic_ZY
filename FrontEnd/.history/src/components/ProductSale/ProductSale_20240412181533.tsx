import { Link } from 'react-router-dom'

export default function ProductSale() {
  return (
    <Link to='/' className='rounded-lg bg-rose-300 flex flex-col w-[262px] h-[450px] justify-between'>
      <div className='flex-1 h-1/2'>
        <img src='https://image.hsv-tech.io/600x600/bbx/common/74685e3a-71a1-4779-8896-ec20c117fc40.webp' alt='' />
      </div>
      <div className='flex-1 h-1/2'>hihi</div>
    </Link>
  )
}
