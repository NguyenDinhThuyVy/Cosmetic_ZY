import { Link } from 'react-router-dom'
import 'src/Styles/Footer.scss'
interface Props {
  img?: string
}

function ItemBrand({ img }: Props) {
  return (
    <Link to='/'>
      <div className='w-full hover:-translate-y-4'>
        <div className='w-full'>
          <img src={img} alt='' className='w-[217px] h-[106px] rounded-md' />
        </div>
      </div>
    </Link>
  )
}

export default ItemBrand
