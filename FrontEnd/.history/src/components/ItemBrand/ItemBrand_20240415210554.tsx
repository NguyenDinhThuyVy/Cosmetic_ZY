import { useState } from 'react'
import 'src/Styles/Footer.scss'
interface Props {
  img?: string
}

function ItemBrand({ img }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className='px-2 py-3  font-semibold text-gray-500  hover:text-rose-400 font'>
      <div className='flex flex-col items-center justify-center relative'>
        <img
          src={img}
          alt=''
          className={`w-[120px] h-[120px] transform transition-transform duration-500 ease-in-out ${
            hovered ? 'hover:animate-customAnimation' : ''
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </div>
    </div>
  )
}

export default ItemBrand
