import { useEffect, useState } from 'react'
import adminApi from 'src/apis/admin.api'
import TableDataDelete from '../../component/TableDataDelete'

function RecycelBin() {
  const { data: ordersData } = useQuery({
    queryKey: ['orders', queryConfig],
    queryFn: () => {
      return adminApi.getAllOrder()
    }
  })
  return (
    <div className='flex flex-col  gap-8 border border-gray-200 rounded-lg w-full px-4 pt-4    '>
      <h1 className='font items-center text-[24px] font-bold text-center'>Quản lý sản phẩm đã xóa</h1>
      <TableDataDelete shouldRefetch={shouldRefetch} />
    </div>
  )
}

export default RecycelBin
