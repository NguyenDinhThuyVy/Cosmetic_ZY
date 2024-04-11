interface Props {
  img?: string
  name?: string
}
function ItemCategory({ img, name }: Props) {
  return (
    <div className='px-2 py-3  border-2 border-red-300'>
      <button className='flex flex-col items-center justify-center '>
        <img src={img} alt='' className='w-[100px] h-[100px]' />
        <div className='pt-3 flex items-center text-sm'>
          <span>{name}</span>
        </div>
      </button>
    </div>
  )
}

export default ItemCategory
