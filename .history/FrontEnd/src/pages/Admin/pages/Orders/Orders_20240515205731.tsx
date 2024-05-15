import { useEffect, useState } from 'react'

import { useQuery } from 'react-query'
import adminApi from 'src/apis/admin.api'
import useQueryConfig from 'src/hooks/useQueryConfig'
// import TableHistory from '../../component/TableHistory'
import ChartHistory from '../../component/ChartHistory'

interface Role {
  role1: number
  role2: number
  role3: number
}

export default function Orders() {
  const queryConfig = useQueryConfig()
  const { data: ordersData } = useQuery({
    queryKey: ['orders', queryConfig],
    queryFn: () => {
      return adminApi.getAllOrder()
    }
  })

  const [role, setRole] = useState<Role>({
    role1: 0,
    role2: 0,
    role3: 0
  }) // Initialize role state with the Role type

  const handleGetAllAccount = async () => {
    const roleCounts: Role = {
      role1: 0,
      role2: 0,
      role3: 0
    }
    if (ordersData)
      ordersData.data.data.forEach((item: { status: number }) => {
        if (item.status === 1) {
          roleCounts.role1++
        } else if (item.status === 3) {
          roleCounts.role2++
        } else {
          roleCounts.role3++
        }
      })

    setRole(roleCounts)
  }

  useEffect(() => {
    handleGetAllAccount()
  }, [ordersData])

  return (
    <div className='flex flex-col  gap-8 border border-gray-200 rounded-lg w-full px-4 pt-4    '>
      <h1 className='font items-center text-[24px] font-bold text-center'>Quản lý thông Lịch sử đơn hàng</h1>
      <div className='flex items-center justify-center border-b-2 border-gray-200 p-2'></div>
      <div className='flex-grow basis-3/10 items-center justify-center'>
        {' '}
        {/* Flex grow for remaining space, basis for 40% */}
        {/* <ChartHistory role={role}></ChartHistory> */}
      </div>
    </div>
  )
}
