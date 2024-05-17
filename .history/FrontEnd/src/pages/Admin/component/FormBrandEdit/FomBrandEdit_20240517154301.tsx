import React, { useState, useEffect } from 'react'
import { Form, Input, Modal, Upload } from 'antd'

import adminApi from 'src/apis/admin.api'
import { toast } from 'react-toastify'

import { getAvatarUrl } from 'src/utils/utils'
import { useMutation, useQuery } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { BrandSchema, brandSchema } from 'src/utils/rules'

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
  brandId: string

  onClose: () => void
  onUpdateSuccess: () => void
}

const FormBrandEdit: React.FC<CollectionCreateFormProps> = ({ brandId, onClose, onUpdateSuccess }) => {
  const [form] = Form.useForm()

  const [brandData, setbrandData] = useState<any>(null)
  const [image, setimage] = useState<any>('')
  type FormData = Pick<BrandSchema, 'name' | 'description' | 'image'>
  const databBrandSchema = brandSchema.pick(['name', 'description', 'image'])
  const { data: brandDataMon, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: adminApi.getBrandsbyID(brandId)
  })
  const brandbyID = brandDataMon?.data.data

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

  const uploadBrandImageMutation = useMutation(adminApi.uploadBrandImage)
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
    setError
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      description: '',
      image: ''
    },
    resolver: yupResolver(databBrandSchema)
  })
  const image = watch('image')
  const handleUploadChange = async (info: any) => {
    const formData = new FormData()
    formData.append('image', info.file.originFileObj || '')
    console.log('hihi')
    const uploadRes = await adminApi.uploadBrandImage(formData)
    console.log(uploadRes)
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
