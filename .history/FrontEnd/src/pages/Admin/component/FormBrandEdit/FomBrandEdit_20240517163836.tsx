import React, { useState, useEffect, useMemo } from 'react'
import { Form, Input, Modal, Upload } from 'antd'

import adminApi from 'src/apis/admin.api'
import { toast } from 'react-toastify'

import { useMutation, useQuery } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { BrandSchema, brandSchema } from 'src/utils/rules'
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
  brandId: string
  onClose: () => void
  onUpdateSuccess: () => void
}
type BrandData = {
  name: string
  description: string
  image: string // Assuming image is a URL
  // Add other properties if necessary
}
const FormBrandEdit: React.FC<CollectionCreateFormProps> = ({ brandId, onClose, onUpdateSuccess }) => {
  const [form] = Form.useForm()
  const [brandData, setbrandData] = useState<any>(null)
  type FormData = Pick<BrandSchema, 'name' | 'description' | 'image'>
  const databBrandSchema = brandSchema.pick(['name', 'description', 'image'])
  const { data: brandDataMon, refetch } = useQuery<Brand>({
    queryKey: ['brand', brandId],
    queryFn: () => adminApi.getBrandsbyID(brandId)
  })

  const [file, setFile] = useState<File>()

  const brandbyid = brandDataMon?.data.data
  const uploadBrandImageMutation = useMutation(adminApi.uploadBrandImage)
  const updateBrandMutation = useMutation((params: [string[], BrandData]) => adminApi.updateBrand(...params), {
    onSuccess: () => {
      onUpdateSuccess()
      onClose()
    }
  })

  const { setValue, watch } = useForm<FormData>({
    defaultValues: {
      name: '',
      description: '',
      image: ''
    },
    resolver: yupResolver(databBrandSchema)
  })
  const image = watch('image')

  useEffect(() => {
    if (brandbyid) {
      setValue('name', brandbyid.name)
      setValue('description', brandbyid.description)
      setValue('image', brandbyid.image)
      form.setFieldsValue(brandbyid)
      setbrandData(brandDataMon.data)
    }
  }, [brandbyid, setValue])

  const handleSave = async (data) => {
    try {
      const values = await form.validateFields()
      await adminApi.updateProduct([brandId], values)
      toast.success('Chỉnh sửa sản phẩm thành công', {
        position: 'top-right',
        autoClose: 1200
      })
      onUpdateSuccess()
      onClose()
    } catch (error) {
      toast.error('Chỉnh sửa sản phẩm thất bại', {
        position: 'top-right',
        autoClose: 1200
      })
    }
  }
  const handleUploadChange = async (file?: File) => {
    let imageName = image
    if (file) {
      const form = new FormData()
      form.append('image', file)
      const uploadRes = await uploadBrandImageMutation.mutateAsync(form)
      imageName = uploadRes.data.data
      setValue('image', imageName)
    }
    form.setFieldsValue({
      image: imageName // Sử dụng đường dẫn của ảnh từ dữ liệu phản hồi
    })

    setbrandData((prevbrandData: any) => ({
      ...prevbrandData,
      data: {
        ...prevbrandData.data,
        image: getAvatarUrl(imageName)
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
                    // Reset the image value in the form
                    form.setFieldsValue({ image: '' })
                    // Optionally, you can also update the state to remove the image preview
                    setFile(null)
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
