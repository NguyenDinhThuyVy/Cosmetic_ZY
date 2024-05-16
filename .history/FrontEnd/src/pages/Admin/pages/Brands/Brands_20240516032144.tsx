import { useEffect, useState } from 'react'
import TableBrand from '../../component/TableBrand'

import adminApi from 'src/apis/admin.api'
import DOMPurify from 'dompurify'

export default function Brands() {
  const [showAllContent, setShowAllContent] = useState(false)
  const [currentBrandId, setCurrentBrandId] = useState('')
  const [brandData, setBrandData] = useState<any>(null)

  const handleShowMore = () => {
    setShowAllContent(true)
  }
  const handleHideContent = () => {
    setShowAllContent(false)
  }
  const handleView = (brandId: any) => {
    setCurrentBrandId(brandId)
  }

  const fetchData = async () => {
    try {
      const productData = await adminApi.getBrandsbyID(currentBrandId)
      setBrandData(productData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [currentBrandId])

  return (
    <div className='flex flex-col  gap-8 border border-gray-200 rounded-lg w-full px-4 pt-4    '>
      <h1 className='font items-center text-[24px] font-bold text-center'>Quản lý thương hiệu</h1>
      <div className='flex gap-6 '>
        <div className='border border-gray-200 rounded-lg W-[40%] p-2'>
          <TableBrand handleView={handleView} />
        </div>
        <div className='border border-gray-200 rounded-lg p-2 w-[60%]'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div>
              <img
                src={
                  currentBrandId
                    ? `${brandData.data.data.image}`
                    : 'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/157755/Originals/hinh-nen-mau-hong%20(4).jpg'
                }
                alt=''
                className='w-[120px] h-[120px] rounded-2xl border-2 border-gray-200'
              />
            </div>
            <div className='text-[23px] font-semibold'>
              {currentBrandId ? `${brandData.data.data.name}` : 'ZYMY COSMETIC'}
            </div>
            <div className='text-gray-500'>Số lượng sản phẩm : 84</div>
            <div className='w-[70%] ' style={{ height: showAllContent ? 'auto' : '60px', overflow: 'hidden' }}>
              {currentBrandId ? (
                <div dangerouslySetInnerHTML={{ __html: brandData.data.data.description } as any} />
              ) : (
                'ZYMY COSMETIC'
              )}
            </div>
            {!showAllContent ? (
              <button
                onClick={handleShowMore}
                className='mt-[-90px] text-black bg-gradient-to-t from-white via-white to-white/50 p-16 font-bold  w-full text-[16px]'
              >
                Xem thêm
              </button>
            ) : (
              <button onClick={handleHideContent} className='mt-4 text-black text-center font-bold text-[16px] w-full'>
                Ẩn bớt
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
