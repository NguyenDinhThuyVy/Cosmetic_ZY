import { useState } from 'react'

interface Props {
  img?: string
  name?: string
}
function ItemCategory({ img, name }: Props) {
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
    setTimeout(() => {
      setHovered(false)
    }, 1200)
  }

  const handleShake = (e) => {
    e.currentTarget.classList.add('scale-125')
    setTimeout(() => {
      e.currentTarget.classList.remove('scale-125')
      e.currentTarget.classList.add('translate-x-[-5px]')
    }, 300)
    setTimeout(() => {
      e.currentTarget.classList.remove('translate-x-[-5px]')
      e.currentTarget.classList.add('translate-x-[5px]')
    }, 600)
    setTimeout(() => {
      e.currentTarget.classList.remove('translate-x-[5px]')
      e.currentTarget.classList.add('translate-x-0')
    }, 900)
  }
  return (
    <div className='px-2 py-3  border-2 border-red-300 font-semibold text-gray-500'>
      <div className='flex flex-col items-center justify-center relative' onMouseEnter={handleMouseEnter}>
        <img
          src={img}
          alt=''
          className={`w-[120px] h-[120px] transition-transform duration-300 ease-in-out ${hovered ? 'scale-125' : ''}`}
          onMouseEnter={handleShake}
        />
        <div className='pt-3 flex items-center text-sm'>
          <span>{name}</span>
        </div>
      </div>
    </div>
  )
}

export default ItemCategory
