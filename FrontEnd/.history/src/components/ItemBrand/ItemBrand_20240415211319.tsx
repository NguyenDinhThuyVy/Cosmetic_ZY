import 'src/Styles/Footer.scss'
interface Props {
  img?: string
}

function ItemBrand({ img }: Props) {
  return (
    <div className='px-2 py-3  font-semibold text-gray-500  hover:text-rose-400 font'>
      <div className='w-full'>
        <img src={img} alt='' className='w-[120px] h-[120px] transform transition-transform duration-500 ease-in-out' />
      </div>
    </div>
  )
}

export default ItemBrand
