import 'src/Styles/Footer.scss'
interface Props {
  img?: string
}

function ItemBrand({ img }: Props) {
  return (
    <div className='px-2 py-3  w-full'>
      <div className='w-full px-2'>
        <img src={img} alt='' className='w-[217px] h-[106px] ' />
      </div>
    </div>
  )
}

export default ItemBrand
