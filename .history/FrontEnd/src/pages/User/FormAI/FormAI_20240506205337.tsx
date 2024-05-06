import { ConfigProviderProps, Select, SelectProps } from 'antd'
import { useState } from 'react'
type SizeType = ConfigProviderProps['componentSize']

const options: SelectProps['options'] = []

export default function FormAI() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const [size, setSize] = useState<SizeType>('middle')

  return (
    <div className='rounded-md bg-white px-2 pb-10 shadow md:px-7 md:pb-20 font'>
      <div className='border-b border-b-gray-200 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>AI hỗ trợ chu trình skincare</h1>
        <div className='mt-1 text-sm text-gray-700'>Vui lòng nhập form thông tin dưới đây để được hỗ trợ</div>
        <div className='mt-3 border border-gray-200 p-3 rounded-lg flex gap-6'>
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
          <div className='flex flex-col gap-2'>
            <span className='text-[15px]'>Loại da</span>
            <Select
              defaultValue='Da dầu'
              style={{ width: 180 }}
              onChange={handleChange}
              options={[
                { value: 'nam', label: 'Da dầu' },
                { value: 'nữ', label: 'Da khô' },
                { value: 'nam', label: 'Da hỗn hợp thiên dầu' },
                { value: 'nam', label: 'Da thường' },
                { value: 'nam', label: 'Da nhạy cảm' }
              ]}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='text-[15px]'>Tình trạng da</span>
            <Select
              mode='multiple'
              size={size}
              placeholder='Please select'
              defaultValue={['mụn ẩn', 'da không đều màu']}
              onChange={handleChange}
              style={{ width: 180 }}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
