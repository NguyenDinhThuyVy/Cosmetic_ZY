import { Select, SelectProps } from 'antd'

type LabelRender = SelectProps['labelRender']

const options = [
  { label: 'gold', value: 'gold' },
  { label: 'lime', value: 'lime' },
  { label: 'green', value: 'green' },
  { label: 'cyan', value: 'cyan' }
]

const labelRender: LabelRender = (props) => {
  const { label, value } = props

  if (label) {
    return value
  }
  return <span>Giới tính</span>
}
export default function FormAI() {
  return (
    <div className='rounded-md bg-white px-2 pb-10 shadow md:px-7 md:pb-20 font'>
      <div className='border-b border-b-gray-200 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>AI hỗ trợ chu trình skincare</h1>
        <div className='mt-1 text-sm text-gray-700'>Vui lòng nhập form thông tin dưới đây để được hỗ trợ</div>
        <div>
          <div className='flex flex-col gap-2'>
            <span>Giới tính</span>
            <Select labelRender={labelRender} defaultValue='1' style={{ width: '100%' }} options={options} />
            );
          </div>
        </div>
      </div>
    </div>
  )
}
