import 'src/Styles/Footer.scss'
interface Props {
  img?: string
}

function ItemBrand({ img }: Props) {
  return (
    <div className='w-full'>
      <div className='w-full'>
        <img src={img} alt='' className='w-[217px] h-[106px] ' />
      </div>
    </div>
  )
}

export default ItemBrand
