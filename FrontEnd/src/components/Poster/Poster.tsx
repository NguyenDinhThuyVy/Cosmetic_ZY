import { Link } from 'react-router-dom'

export default function Poster() {
  return (
    <div className='flex gap-5'>
      <Link to='/'>
        <img
          src='poster1.webp'
          alt=''
          className='max-h-[496px] rounded-xl transition-transform duration-300 hover:-translate-y-2'
        />
      </Link>
      <Link to='/'>
        <img
          src='poster2.webp'
          alt=''
          className='max-h-[496px] rounded-xl transition-transform duration-300 hover:-translate-y-2'
        />
      </Link>
      <Link to='/'>
        <img
          src='poster3.webp'
          alt=''
          className='max-h-[496px] rounded-xl transition-transform duration-300 hover:-translate-y-2'
        />
      </Link>
      <Link to='/'>
        <img
          src='poster4.webp'
          alt=''
          className='max-h-[496px] rounded-xl transition-transform duration-300 hover:-translate-y-2'
        />
      </Link>
    </div>
  )
}
