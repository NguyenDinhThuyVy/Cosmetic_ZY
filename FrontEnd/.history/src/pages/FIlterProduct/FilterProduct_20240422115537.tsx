import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import 'src/Styles/Header.scss'
export default function FilterProduct() {
  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        <div className='flex flex-col gap-2 my-4 mx-20'>
          <Breadcrumb
            separator='>'
            items={[
              {
                title: 'Home'
              },
              {
                title: <Link to='/'>Trang sản phẩm</Link>
              }
            ]}
          />
          <div className='text-2xl font-bold uppercase mt-5'>TOP SẢN PHẨM BÁN CHẠY</div>
          <div className=' mt-5 flex justify-between'>
            <div className='text-lg font-bold uppercase'>Bộ Lọc</div>
            <div className='flex flex-wrap gap-3 items-center justify-center'>
              <span>689 Kết Quả</span>
              <span>Lọc Theo</span>
              <select className='h-8 px-4 capitalize bg-white text-black text-sm text-left outline-none' value=''>
                <option value='' disabled>
                  Giá
                </option>
                <option value='price:asc'>Giá: Thấp đến cao</option>
                <option value='price:desc'>Giá: Cao đến thấp</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
