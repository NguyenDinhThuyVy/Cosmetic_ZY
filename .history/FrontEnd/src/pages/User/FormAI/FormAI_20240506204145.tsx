import { Select } from 'antd'

export default function FormAI() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  return (
    <div className='rounded-md bg-white px-2 pb-10 shadow md:px-7 md:pb-20 font'>
      <div className='border-b border-b-gray-200 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>AI hỗ trợ chu trình skincare</h1>
        <div className='mt-1 text-sm text-gray-700'>Vui lòng nhập form thông tin dưới đây để được hỗ trợ</div>
        <div className='mt-3 border-2 border-gray-200 p-3 rounded-lg'>
          <div className='flex flex-col gap-2'>
            <span className='text-[15px]'>Giới tính</span>
            <Select
              defaultValue='Nam'
              style={{ width: 80 }}
              onChange={handleChange}
              options={[
                { value: 'nam', label: 'Nam' },
                { value: 'nữ', label: 'Nữ' }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}