import TableData from '../../component/TableData'
import FirstForm from '../../component/FormAdd'
import { useEffect, useState } from 'react'
import adminApi from 'src/apis/admin.api'
import TableDataDelete from '../../component/TableDataDelete'

function RecycelBin() {
  const [products, setProducts] = useState([]) // State to store products
  const [shouldRefetch, setShouldRefetch] = useState<boolean>(false)
  const fetchData = async () => {
    try {
      const productData: any = await adminApi.getAllProducts()
      setProducts(productData) // Update products state with new data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    if (shouldRefetch) {
      fetchData()
      setShouldRefetch(false) // Đặt shouldRefetch lại sau khi fetchData đã được gọi
    }
  }, [shouldRefetch])
  const handleCreatSuccess = () => {
    setShouldRefetch(true)
  }
  return (
    <div className='flex flex-col  gap-8 border border-gray-200 rounded-lg w-full px-4 pt-4    '>
      <h1 className='font items-center text-[24px] font-bold text-center'>Quản lý sản phẩm đã xóa</h1>
      <TableDataDelete shouldRefetch={shouldRefetch} />
    </div>
  )
}

export default RecycelBin
