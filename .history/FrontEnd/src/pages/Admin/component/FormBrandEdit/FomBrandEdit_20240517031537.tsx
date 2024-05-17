import React, { useState, useEffect } from 'react'
import { Form, Input, Modal, Upload } from 'antd'

import adminApi from 'src/apis/admin.api'
import { toast } from 'react-toastify'

import { useMutation } from 'react-query'

import { getAvatarUrl } from 'src/utils/utils'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
}

interface CollectionCreateFormProps {
  brandId: any

  onClose: () => void
  onUpdateSuccess: () => void
}

const FormBrandEdit: React.FC<CollectionCreateFormProps> = ({ brandId, onClose, onUpdateSuccess }) => {
  const [form] = Form.useForm()

  const [brandData, setbrandData] = useState<any>(null)
  const [image, setimage] = useState<any>('')
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const brandDataResponse = await adminApi.getBrandsbyID([brandId]) // Thay đổi thành getUserById
        setbrandData(brandDataResponse.data)
        form.setFieldsValue(brandDataResponse.data.data) // Thiết lập giá trị mặc định cho các trường
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    if (brandId) {
      fetchUserData()
    }
  }, [brandId]) // Thêm form vào dependencies

  const handleSave = async () => {
    try {
      const values = await form.validateFields()
      console.log(values)
      await adminApi.updateBrand([brandId], values)

      toast.success('Chỉnh sửa thương hiệu thành công', {
        position: 'top-right',
        autoClose: 1200
      })
      onUpdateSuccess()
      onClose()
    } catch (error) {
      toast.error('Chỉnh sửa thương hiệu thất bại', {
        position: 'top-right',
        autoClose: 1200
      })
    }
  }

  // const image = brandData?.data.image
  // console.log(image)
  useEffect(() => {
    if (brandData?.data.image) {
      setimage(brandData.data.image)
    } else {
      setimage('') // Đặt lại thành trống nếu không có ảnh
    }
  }, [brandData])

  const handleUploadChange = async (info: any) => {
    if (image === '') {
      const formData = new FormData()
      formData.append('image', info.file.originFileObj || '')
      console.log('hihi')
      const uploadRes = await adminApi.uploadBrandImage(formData)
      form.setFieldsValue({
        image: uploadRes.data.data // Sử dụng đường dẫn của ảnh từ dữ liệu phản hồi
      })
      setimage(uploadRes.data.data)
      setbrandData((prevbrandData: any) => ({
        ...prevbrandData,
        data: {
          ...prevbrandData.data,
          image: getAvatarUrl(uploadRes.data.data)
        }
      }))
    }
  }

  return (
    <Modal
      open
      width={700}
      title=''
      onCancel={onClose}
      onOk={handleSave}
      destroyOnClose
      okText='Save'
      cancelText='Cancel'
      okButtonProps={{
        style: {
          backgroundColor: '#b94545' // Đổi màu của nút Save thành màu đỏ
        }
      }}
    >
      <Form {...formItemLayout} form={form} initialValues={brandData}>
        <div className='flex flex-col  gap-4 border border-gray-200 rounded-lg w-full px-4 pt-2  font  '>
          <h1 className='font items-center text-[14px] font-bold text-center'>Form chỉnh sửa thương hiệu</h1>
          <div className=' '>
            <div className=' w-full'>
              <Form.Item label='Ảnh chính' name='image' initialValue={image}>
                <Upload
                  // customRequest={customRequest} // Sử dụng customRequest để tải ảnh lên
                  listType='picture-card'
                  fileList={image ? [{ uid: '-1', name: 'image.png', url: image }] : []}
                  maxCount={1}
                  onRemove={() => {
                    // Xóa ảnh khỏi fileList khi người dùng nhấn nút xóa
                    setbrandData((prevbrandData: any) => ({
                      ...prevbrandData,
                      data: {
                        ...prevbrandData.data,
                        image: null
                      }
                    }))
                  }}
                  onChange={handleUploadChange}
                >
                  {image ? null : <div>Upload</div>}
                </Upload>
              </Form.Item>
            </div>{' '}
            <div className='  w-full'>
              <Form.Item label='Tên sản phẩm' name='name'>
                <Input />
              </Form.Item>
            </div>
          </div>

          <Form.Item label='Mô tả sản phẩm' name='description' style={{ width: '100%', height: '200px' }}>
            <Input.TextArea className=' resize-none' style={{ height: '200px' }} />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  )
}

export default FormBrandEdit
