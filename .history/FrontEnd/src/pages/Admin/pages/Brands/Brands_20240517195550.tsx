import { useEffect, useState } from 'react'
import TableBrand from '../../component/TableBrand'

import adminApi from 'src/apis/admin.api'
import { useQuery } from 'react-query'

export default function Brands() {
  const [showAllContent, setShowAllContent] = useState(false)
  const [currentBrandId, setCurrentBrandId] = useState('')
  const [brandData, setBrandData] = useState<any>(null)
  const [check, setcheck] = useState<any>(null)
  const handleShowMore = () => {
    setShowAllContent(true)
  }
  const handleHideContent = () => {
    setShowAllContent(false)
  }
  const handleView = (brandId: any) => {
    setCurrentBrandId(brandId)
    setcheck(true)
  }

  const fetchData = async () => {
    try {
      const productData = await adminApi.getBrandsbyID(currentBrandId)

      setBrandData(productData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const fetchData1 = async () => {
    try {
      const productData = await adminApi.getBrandsbyID(currentBrandId)

      setcheck(productData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [currentBrandId])
  useEffect(() => {
    fetchData1()
  }, [currentBrandId])
  return (
    <div className='flex flex-col  gap-8 border border-gray-200 rounded-lg w-full px-4 pt-4    '>
      <h1 className='font items-center text-[24px] font-bold text-center'>Quản lý thương hiệu</h1>
      <div className='flex gap-6 '>
        <div className='border border-gray-200 rounded-lg W-[40%] p-2'>
          <TableBrand handleView={handleView} />
        </div>
        <div className='border border-gray-200 rounded-lg w-[60%] font'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='relative w-full mb-6'>
              <img
                src='https://image.hsv-tech.io/1920x0/bbx/common/b4d9bd4a-e2d8-4904-923d-ee063ba5c10d.webp'
                alt=''
                className='rounded-lg'
              />
              <img
                src={
                  currentBrandId
                    ? `${brandData.data.data.image}`
                    : 'https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/157755/Originals/hinh-nen-mau-hong%20(4).jpg'
                }
                alt=''
                className='w-[120px] h-[120px] rounded-2xl border-2 border-gray-200 absolute top-[60%] left-[40%] '
              />
            </div>
            <div className='text-[23px] font-semibold'>
              {currentBrandId ? `${brandData.data.data.name}` : 'ZYMY COSMEC'}
            </div>
            {/* <div className='flex gap-1'>
              <div className='text-gray-500 border-r-2 border-gray-200 pr-3'>
                Số lượng sản phẩm : {brandNumberData.data.data.products.length}
              </div>
              <div className='text-gray-500 pl-3'>Lượt bán : {brandNumberData.data.data.totalSold}</div>
            </div> */}

            <div className='w-[80%] ' style={{ height: showAllContent ? 'auto' : '120px', overflow: 'hidden' }}>
              {currentBrandId ? (
                <div dangerouslySetInnerHTML={{ __html: brandData.data.data.description } as any} />
              ) : (
                <div className='font text-[14px]'>
                  <p>
                    Chúng tôi xin chân thành gửi lời cảm ơn sâu sắc đến quý khách hàng đã lựa chọn{' '}
                    <strong>ZYMY COSMETIC</strong> là điểm đến cho nhu cầu làm đẹp của mình, thay vì bước vào thế giới
                    sôi động và đa dạng của thị trường mỹ phẩm ngày nay.
                  </p>
                  <p>
                    Việc quý khách hàng tin tưởng và ủng hộ <strong>ZYMY COSMETIC</strong>không chỉ là một điều vô cùng
                    quý giá mà còn là động lực lớn lao giúp chúng tôi không ngừng nỗ lực, cải thiện và mang đến những
                    sản phẩm chất lượng, dịch vụ tốt nhất cho quý vị.
                  </p>
                  <p>
                    Chúng tôi cam kết sẽ không ngừng phấn đấu, đổi mới và nâng cao chất lượng sản phẩm cũng như dịch vụ
                    để xứng đáng với sự tin yêu và ủng hộ của quý khách hàng.
                  </p>
                  <p>
                    Một lần nữa, chân thành cảm ơn quý khách hàng đã lựa chọn <strong>ZYMY COSMETIC</strong> và hy vọng
                    sẽ có nhiều cơ hội được phục vụ quý vị trong tương lai.
                  </p>
                </div>
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
