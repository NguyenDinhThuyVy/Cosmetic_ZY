import adminApi from 'src/apis/admin.api'
import TableDataDelete from '../../component/TableDataDelete'
import { useQuery } from 'react-query'
import useQueryConfig from 'src/hooks/useQueryConfig'

function RecycelBin() {
  console.log(shouldRefetch)
  return (
    <div className='flex flex-col  gap-8 border border-gray-200 rounded-lg w-full px-4 pt-4    '>
      <h1 className='font items-center text-[24px] font-bold text-center'>Quản lý sản phẩm đã xóa</h1>
      <div className='flex flex-col gap-8 border border-gray-200 rounded-lg w-full px-4 pt-4'>
        <h1 className='font items-center text-[24px] font-bold text-center'>Quản lý sản phẩm đã xóa</h1>
        {shouldRefetch ? <TableDataDelete shouldRefetch={shouldRefetch} /> : <Empty description={false} />}
      </div>
    </div>
  )
}

export default RecycelBin
