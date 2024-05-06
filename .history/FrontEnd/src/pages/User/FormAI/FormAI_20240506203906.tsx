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
        <div>
          <div className='flex flex-col gap-2'>
            <span>Giới tính</span>
            <Select
              defaultValue='lucy'
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
