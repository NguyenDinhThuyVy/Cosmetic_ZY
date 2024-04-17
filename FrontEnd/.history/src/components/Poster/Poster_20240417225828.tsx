import { Link } from 'react-router-dom'

export default function Poster() {
  return (
    <div className='flex gap-3 max-h-[496px]'>
      <Link to='/'>
        {' '}
        <img src='poster1.webp' alt='' />
      </Link>
    </div>
  )
}
