import React, { useState } from 'react'
import './ItemCategory.scss'
interface Props {
  img?: string
  name?: string
}

function ItemCategory({ img, name }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className='px-2 py-3 border-2 border-red-300 font-semibold text-gray-500'>
      <div className='flex flex-col items-center justify-center relative'>
        <img
          src={img}
          alt=''
          className={`w-[120px] h-[120px] transition-transform duration-300 ease-in-out transform hover:scale-75 hover:rotate-5 ${hovered ? 'hover:-rotate-5' : ''} ${hovered ? 'hover:animate-rotateThenMoveLeft' : ''}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <div className='pt-3 flex items-center text-sm'>
          <span>{name}</span>
        </div>
      </div>
    </div>
  )
}

export default ItemCategory
