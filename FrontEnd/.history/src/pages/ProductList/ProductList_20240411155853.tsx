import { Link } from 'react-router-dom'
import ItemCategory from 'src/components/ItemCategory/ItemCategory'
import Banner from 'src/components/Swiper'

export default function ProductList() {
  return (
    <div className='h-full flex flex-col'>
      <div className=' min-h-32'>
        <div className='flex flex-row gap-5 items-center justify-center my-6 mx-32'>
          <div className='flex h-50 w-2/3 items-start text-[8px]  '>
            <Banner />
          </div>
          <div className='flex flex-col h-full w-1/3 gap-2 '>
            <div className='h-1/2 rounded-md'>
              <img src='image1.webp' alt='' className='rounded-md' />
            </div>
            <div className='h-1/2 rounded-md'>
              <img src='image2.webp' alt='' className='rounded-md' />
            </div>
          </div>
        </div>
        <div className='my-6 mx-28'>
          <div className='text-gray-400 uppercase pt-7 px-5 flex gap-3 font-bold text-xl items-center'>
            Danh Mục Nổi Bật
            <img
              width='38'
              height='38'
              src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-cosmetics-professions-woman-diversity-flaticons-lineal-color-flat-icons.png'
              alt='external-cosmetics-professions-woman-diversity-flaticons-lineal-color-flat-icons'
            />
          </div>
          <div className=' grid grid-cols-8 py-4 place-items-center '>
            <Link to='/'>
              <ItemCategory img='category1.webp' name='Chăm sóc da'></ItemCategory>
            </Link>
            <Link to='/'>
              <ItemCategory img='category2.webp' name='Trang điểm'></ItemCategory>
            </Link>
            <Link to='/'>
              <ItemCategory img='category3.webp' name='Chăm sóc body'></ItemCategory>
            </Link>
            <Link to='/'>
              <ItemCategory img='category4.webp' name='Chăm sóc cá nhân'></ItemCategory>
            </Link>
            <Link to='/'>
              <ItemCategory img='category5.webp' name='Chăm sóc tóc'></ItemCategory>
            </Link>
            <Link to='/'>
              <ItemCategory img='category6.webp' name='Dụng cụ làm đẹp'></ItemCategory>
            </Link>
            <Link to='/'>
              <ItemCategory img='category7.webp' name='Son môi'></ItemCategory>
            </Link>
            <Link to='/'>
              <ItemCategory img='category8.webp' name='Tẩy tế bào chết'></ItemCategory>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
