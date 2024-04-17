import { Link } from 'react-router-dom'

export default function Poster() {
  return (
    <div className='flex gap-5'>
      <Link to='/'>
        <img
          src='poster1.webp'
          alt=''
          className='max-h-[496px] rounded-xl transition-transform duration-300 hover:-translate-y-3'
        />
      </Link>
      <Link to='/'>
        <img
          src='poster1.webp'
          alt=''
          className='max-h-[496px] rounded-xl transition-transform duration-300 hover:-translate-y-3'
        />
      </Link>
      <Link to='/'>
        <img
          src='poster1.webp'
          alt=''
          className='max-h-[496px] rounded-xl transition-transform duration-300 hover:-translate-y-3'
        />
      </Link>
      <Link to='/'>
        <img
          src='poster1.webp'
          alt=''
          className='max-h-[496px] rounded-xl transition-transform duration-300 hover:-translate-y-3'
        />
      </Link>
    </div>
  )
}
