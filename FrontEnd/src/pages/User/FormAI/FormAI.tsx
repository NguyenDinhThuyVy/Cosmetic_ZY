import { ConfigProviderProps, Select, SelectProps } from 'antd'
import { useState } from 'react'
type SizeType = ConfigProviderProps['componentSize']
const options: SelectProps['options'] = [
  { label: 'mụn ẩn', value: 'mụn ẩn' },
  { label: 'mụn viêm', value: 'mụn viêm' },
  { label: 'da không đều màu', value: 'da không đều màu' },
  { label: 'lỗ chân lông to', value: 'lỗ chân lông to' },
  { label: 'sợi bã nhờn', value: 'sợi bã nhờn' },
  { label: 'mụn đầu đen', value: 'mụn đầu đen' },
  { label: 'tàn nhan', value: 'tàn nhan' },
  { label: 'thâm mụn', value: 'thâm mụn' }
]

const options1: SelectProps['options'] = [
  { label: 'Tonner', value: 'Tonner' },
  { label: 'Sữa rửa mặt', value: 'Sữa rửa mặt' },
  { label: 'Tẩy tế bào chết', value: 'Tẩy tế bào chết' },
  { label: 'Serum', value: 'Serum' },
  { label: 'Kem dưỡng ẩm', value: 'Kem dưỡng ẩm' },
  { label: 'Kem trị mụn', value: 'Kem trị mụn' }
]

const options2: SelectProps['options'] = [
  { label: 'Trắng da', value: 'Trắng da' },
  { label: 'Giảm mụn viêm', value: 'Giảm mụn viêm' },
  { label: 'Giảm mụn đầu đen', value: 'Giảm mụn đầu đen' },
  { label: 'Se khít lỗ chân lông', value: 'Se khít lỗ chân lông' },
  { label: 'Dưỡng ẩm', value: 'Dưỡng ẩm' },
  { label: 'Giảm thâm mụn', value: 'Giảm thâm mụn' },
  { label: 'Giảm tàn nhan', value: 'Giảm tàn nhan' },
  { label: 'Đều màu da', value: 'Đều màu da' }
]
export default function FormAI() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const [size] = useState<SizeType>('middle')
  const [hovered, setHovered] = useState(false)
  return (
    <div className='rounded-md bg-white px-2 pb-10 shadow md:px-7 md:pb-20 font '>
      <div className='border-b border-b-gray-200 py-6 relative'>
        <h1 className='text-lg font-medium capitalize text-gray-900 '>
          <span className=' h-[25px] w-[25px] text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f0a80e] via-[#c43131] to-[#671f57]'>
            AI
          </span>{' '}
          hỗ trợ chu trình skincare
        </h1>
        <div className='mt-1 text-sm text-gray-700'>Vui lòng nhập form thông tin dưới đây để được hỗ trợ</div>
        <div className='flex gap-2 w-full border border-gray-200 p-4 rounded-lg mt-3'>
          <div className='  flex flex-col gap-6 item-center justify-center'>
            <div className='flex gap-6'>
              {' '}
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
                  style={{ width: 420 }}
                  options={options}
                />
              </div>
            </div>
            <div className='flex gap-8'>
              <div className='flex flex-col gap-2'>
                <span className='text-[15px]'>Sản phẩm quan tâm</span>
                <Select
                  mode='multiple'
                  size={size}
                  placeholder='Please select'
                  defaultValue={['Sữa rửa mặt', 'Tonner']}
                  onChange={handleChange}
                  style={{ width: 350 }}
                  options={options1}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <span className='text-[15px]'>Mong muốn cải thiện</span>
                <Select
                  mode='multiple'
                  size={size}
                  placeholder='Please select'
                  defaultValue={['Trắng da', 'Giảm mụn đầu đen']}
                  onChange={handleChange}
                  style={{ width: 350 }}
                  options={options2}
                />
              </div>
            </div>
          </div>
          <div className='w-full flex items-center justify-center'>
            <button className=' w-full h-[150px] text-gray-100  font-bold rounded-full bg-gradient-to-r from-[#f0a80edb] via-[#c43131d8] to-[#671f57d1]'>
              <img
                src='https://go4customer.com/images/blog/SIMPLE%20CHATBOTS.png'
                alt=''
                className={`w-[180px] h-[120px]  transform transition-transform duration-500 ease-in-out ${
                  hovered ? 'hover:animate-customAnimation' : ''
                }`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              />
            </button>
          </div>
        </div>

        <div className='absolute top-0 right-0    text-gray-100  rounded-full bg-gradient-to-r from-[#f0a80edb] via-[#c43131d8] to-[#671f57d1] w-[50px] h-[50px] flex justify-center items-center'>
          Mới
        </div>
      </div>
      <div className='border-b border-b-gray-200 py-6 '></div>
    </div>
  )
}
