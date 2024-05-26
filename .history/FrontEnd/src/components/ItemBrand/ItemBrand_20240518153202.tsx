import { Link, createSearchParams } from 'react-router-dom'
import 'src/Styles/Footer.scss'
import path from 'src/constants/path'
import useQueryConfig from 'src/hooks/useQueryConfig'
interface Props {
  img?: string
  id: any
}

function ItemBrand({ img, id }: Props) {
  const queryConfig = useQueryConfig()
  return (
    <Link
      to={{
        pathname: path.filterBrand,
        search: createSearchParams({
          ...queryConfig,
          brand: id
        }).toString()
      }}
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
