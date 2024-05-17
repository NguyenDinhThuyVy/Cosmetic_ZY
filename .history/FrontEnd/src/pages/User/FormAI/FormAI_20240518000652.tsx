import { Button, ConfigProviderProps, Form, Image, Input, Modal, Select, SelectProps } from 'antd'
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

const options2: SelectProps['options'] = [
  { label: 'Trắng da', value: 'Trắng da' },
  { label: 'Giảm mụn viêm', value: 'Giảm mụn viêm' },
  { label: 'Giảm dầu thừa', value: 'Giảm dầu thừa' },
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

  const [form] = Form.useForm()
  const [size] = useState<SizeType>('middle')
  const [hovered, setHovered] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  // Hàm để hiển thị modal
  const showModal = () => {
    setIsModalVisible(true)
  }

  // Hàm để đóng modal
  const handleCancel = () => {
    setIsModalVisible(false)
  }

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

        <Form form={form}>
          <div className='flex gap-2 w-full border border-gray-200 p-4 rounded-lg mt-3'>
            <div className='  flex flex-col gap-6 item-center justify-center'>
              <div className='flex gap-6'>
                {' '}
                <div className='flex flex-col gap-2'>
                  <span className='text-[15px]'>ID Form</span>
                  <Form.Item name='user' style={{ width: 180 }}>
                    <Input style={{ width: '100%' }} disabled />
                  </Form.Item>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-[15px]'>Loại da</span>
                  <Form.Item>
                    <Select
                      defaultValue='Da dầu'
                      style={{ width: 180 }}
                      onChange={handleChange}
                      options={[
                        { value: 'Da dầu', label: 'Da dầu' },
                        { value: 'Da khô', label: 'Da khô' },
                        { value: 'Da hỗn hợp thiên dầu', label: 'Da hỗn hợp thiên dầu' },
                        { value: 'Da thường', label: 'Da thường' },
                        { value: 'Da nhạy cảm', label: 'Da nhạy cảm' }
                      ]}
                    />
                  </Form.Item>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-[15px]'>Tình trạng da</span>
                  <Form.Item>
                    <Select
                      mode='multiple'
                      size={size}
                      placeholder='Please select'
                      onChange={handleChange}
                      style={{ width: 300 }}
                      options={options}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className='flex gap-8'>
                <div className='flex flex-col gap-2'>
                  <span className='text-[15px]'>Giới tính</span>
                  <Form.Item>
                    <Select
                      defaultValue='Nam'
                      style={{ width: 80 }}
                      onChange={handleChange}
                      options={[
                        { value: 'nam', label: 'Nam' },
                        { value: 'nữ', label: 'Nữ' }
                      ]}
                    />
                  </Form.Item>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-[15px]'>Chu trình mong muốn</span>
                  <Form.Item>
                    <Select
                      defaultValue='Vui lòng chọn'
                      style={{ width: 200 }}
                      onChange={handleChange}
                      options={[
                        { value: 'Chu trình đơn giản', label: 'Chu trình đơn giản' },
                        { value: 'Chu trình đầy đủ', label: 'Chu trình đầy đủ' }
                      ]}
                    />
                  </Form.Item>
                </div>
                <div className='flex flex-col gap-2'>
                  <span className='text-[15px]'>Mong muốn cải thiện</span>
                  <Form.Item>
                    <Select
                      mode='multiple'
                      size={size}
                      placeholder='Vui lòng chọn'
                      onChange={handleChange}
                      style={{ width: 350 }}
                      options={options2}
                    />
                  </Form.Item>
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
        </Form>

        <div className='absolute top-0 right-0    text-gray-100  rounded-full bg-gradient-to-r from-[#f0a80edb] via-[#c43131d8] to-[#671f57d1] w-[50px] h-[50px] flex justify-center items-center'>
          Mới
        </div>
      </div>
      <div className='border-b border-b-gray-200 py-6 '>
        <button onClick={() => showModal()}>hihi</button>
      </div>
      <Modal
        title=''
        width={800}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Đóng
          </Button>
        ]}
      >
        <div className='flex flex-col border-2 border-gray-100 rounded-lg p-4 font'>
          <span className='text-center text-[16px] font-bold uppercase'>Hóa Đơn của bạn</span>

          <div className='px-2 flex flex-col gap-3'>
            <div className='flex gap-6'>
              <span className='text-start text-[14px] font-semibold '>
                Tên khách hàng: <span className='font-normal'>Thúy Vy</span>{' '}
              </span>
              <span className='text-start text-[14px] font-semibold '>
                Tuổi : <span className='font-normal'>Thúy Vy</span>{' '}
              </span>
            </div>
            <div className='flex gap-6'>
              <span className='text-start text-[14px] font-semibold '>
                Loại Da: <span className='font-normal'>09055</span>{' '}
              </span>
              <span className='text-start text-[14px] font-semibold '>
                Tình Trạng Da: <span className='font-normal'>232</span>{' '}
              </span>
              <span className='text-start text-[14px] font-semibold '>
                Thành Phố: <span className='font-normal'>255</span>{' '}
              </span>
            </div>
            <div className='flex gap-[54px]'>
              <span className='text-start text-[14px] font-semibold '>
                Chu trình mong muốn: <span className='font-normal'>255</span>{' '}
              </span>
              <span className='text-start text-[14px] font-semibold '>
                Mong muốn cải thiện: <span className='font-normal'>55</span>{' '}
              </span>
            </div>
          </div>

          <table className='table-auto w-full mt-5 text-[12px] border-2 border-gray-100 rounded-lg p-4'>
            <thead>
              <tr>
                <th className='px-4 py-2 text-center text-[12px]'>Ảnh</th>
                <th className='px-4 py-2 text-center w-[50%] text-[12px]'>Tên sản phẩm</th>
                <th className='px-4 py-2 text-center text-[12px]'>Số lượng</th>
                <th className='px-4 py-2 text-center text-[12px]'>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              <>
                <tr>
                  <td className='px-4 py-2 text-center'>
                    <Image
                      width={80}
                      src='https://preview.redd.it/imagine-having-a-cute-sticker-sheet-of-yourself-v0-kitc0j6yd85b1.jpg?width=1080&crop=smart&auto=webp&s=84b1071f941124b5cdddce822bcfde3ea2aaf5c1'
                      style={{ borderRadius: '5px' }}
                    />
                  </td>
                  <td className='px-4 py-2'>hihi</td>
                  <td className='px-4 py-2 text-center'>hihi</td>
                  <td className='px-4 py-2 text-center'>hihi</td>
                </tr>
              </>
            </tbody>
          </table>
        </div>
      </Modal>
    </div>
  )
}
