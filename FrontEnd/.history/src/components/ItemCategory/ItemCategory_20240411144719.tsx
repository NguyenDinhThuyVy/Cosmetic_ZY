import React, { useState } from 'react'

interface Props {
  img?: string
  name?: string
}

function ItemCategory({ img, name }: Props) {
  const [hovered, setHovered] = useState(false)
  const [shake, setShake] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
    setTimeout(() => {
      setHovered(false)
    }, 1200)
  }

  const handleShake = () => {
    setShake(true)
    setTimeout(() => {
      setShake(false)
    }, 1200)
  }

  return (
    <div className='px-2 py-3 border-2 border-red-300 font-semibold text-gray-500'>
      <div className='flex flex-col items-center justify-center relative' onMouseEnter={handleMouseEnter}>
        <img
          src={img}
          alt=''
          className={`w-[120px] h-[120px] transition-transform duration-300 ease-in-out ${hovered ? 'scale-125' : ''} ${shake ? 'shake-animation' : ''}`}
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
