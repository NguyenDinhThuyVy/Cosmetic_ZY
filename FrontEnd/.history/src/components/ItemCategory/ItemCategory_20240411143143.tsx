interface Props {
  img?: string
  name?: string
}
function ItemCategory({ img, name }: Props) {
  return (
    <div className='flex flex-col items-center justify-center px-3 py-3'>
      <button>
        <img src={img} alt='' />
        <div className='pt-3 flex  items-center'>
          <span>{name}</span>
        </div>
      </button>
    </div>
  )
}

export default ItemCategory
