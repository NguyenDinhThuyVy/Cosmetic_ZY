import TableData from '../../component/TableData'
import FirstForm from '../../component/FormAdd'
import { useEffect, useState } from 'react'
import adminApi from 'src/apis/admin.api'

function Products() {
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
      console.log(products)
      fetchData()
      setShouldRefetch(false) // Đặt shouldRefetch lại sau khi fetchData đã được gọi
    }
  }, [shouldRefetch])
  const handleCreatSuccess = () => {
    setShouldRefetch(true) // Trigger fetchData khi cập nhật thành công
  }
  console.log(shouldRefetch)
  return (
    <div className='flex flex-col  gap-8 border border-gray-200 rounded-lg w-full px-4 pt-4    '>
      <h1 className='font items-center text-[24px] font-bold text-center'>Quản lý thông tin sản phẩm</h1>
      <FirstForm
        initialValues={{}}
        onFormInstanceReady={() => {}}
        onImageDataReceived={() => {}}
        onCreated={handleCreatSuccess}
      ></FirstForm>
      <TableData shouldRefetch={shouldRefetch} />
    </div>
  )
}

export default Products
