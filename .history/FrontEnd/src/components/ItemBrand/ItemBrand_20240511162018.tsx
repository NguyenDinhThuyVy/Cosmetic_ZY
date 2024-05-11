import { Link } from 'react-router-dom'
import 'src/Styles/Footer.scss'
import path from 'src/constants/path'
interface Props {
  img?: string
}

function ItemBrand({ img }: Props) {
  return (
    <Link
      to={path.filterBrand}
      onClick={() => {
        window.scrollTo(0, 0)
      }}
      className='block w-full relative z-10'
    >
      <div className='w-full transition-transform duration-300 hover:-translate-y-3'>
        <div className='w-full'>
          <img src={img} alt='' className='w-[217px] h-[106px] rounded-md relative z-10' />
        </div>
      </div>
    </Link>
  )
}

export default ItemBrand
