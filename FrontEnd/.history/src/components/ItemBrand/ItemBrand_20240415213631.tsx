import { Link } from 'react-router-dom'
import 'src/Styles/Footer.scss'
interface Props {
  img?: string
}

function ItemBrand({ img }: Props) {
  return (
    <Link to='/' className='block w-full relative overflow-hidden'>
      <div className='w-full'>
        <img
          src={img}
          alt=''
          className='w-[217px] h-[106px] rounded-md transition-transform duration-300 hover:-translate-y-10'
        />
      </div>
      <div className='absolute inset-0 bg-transparent hover:bg-opacity-50 transition-opacity duration-300'></div>
    </Link>
  )
}

export default ItemBrand
