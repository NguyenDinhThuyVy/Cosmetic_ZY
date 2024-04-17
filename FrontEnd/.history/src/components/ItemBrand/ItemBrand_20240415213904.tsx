import { Link } from 'react-router-dom'
import 'src/Styles/Footer.scss'
interface Props {
  img?: string
}

function ItemBrand({ img }: Props) {
  return (
    <Link to='/' className='block w-full relative'>
      <div className='w-full transition-transform duration-300 hover:-translate-y-4'>
        <div className='w-full relative'>
          <img src={img} alt='' className='w-[217px] h-[106px] rounded-md' />
          <div className='absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300'></div>
        </div>
      </div>
    </Link>
  )
}

export default ItemBrand
