import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import 'src/Styles/Header.scss'
import Filter from './component/Fillter'
import Pagination from 'src/components/Pagination'
import { useState } from 'react'
import Product from 'src/components/Product'
import path from 'src/constants/path'

export default function FilterProduct() {
  const [page, setPage] = useState(1)
  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        <div className='flex flex-col gap-2 my-4 mx-20'>
          <Breadcrumb
            separator='>'
            items={[
              {
                title: <Link to={path.home}>Trang chủ</Link>
              },
              {
                title: <Link to={path.filterProduct}>Trang sản phẩm</Link>
              }
            ]}
          />
          <div className='text-2xl font-bold uppercase mt-5'>TOP SẢN PHẨM BÁN CHẠY</div>
          <div className=' mt-5 flex justify-between'>
            <div className='text-lg font-bold uppercase'>Bộ Lọc</div>
            <div className='flex flex-wrap gap-3 items-center justify-center'>
              <span>689 Kết Quả</span>
              <span>Lọc Theo</span>
              <select className='px-4 capitalize bg-white text-black text-left outline-none' value=''>
                <option value='' disabled className='bg-white text-black'>
                  Tất Cả
                </option>

                <option value='price:asc'>Giá: Thấp đến cao</option>
                <option value='price:desc'>Giá: Cao đến thấp</option>
              </select>
            </div>
          </div>
          <div className='grid gap-5' style={{ gridTemplateColumns: '20% 80%' }}>
            <div>
              <Filter />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='mt-6 grid grid-cols-4 gap-5'>
                {Array(30)
                  .fill(0)
                  .map((_, index) => (
                    <div className='col-span-1' key={index}>
                      <Product />
                    </div>
                  ))}
              </div>{' '}
              <Pagination page={page} setPage={setPage} pageSize={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
