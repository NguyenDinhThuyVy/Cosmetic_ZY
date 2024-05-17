import React, { useState, useEffect, useMemo } from 'react'
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

  const previewImage = useMemo(() => {
    return file ? URL.createObjectURL(file) : ''
  }, [file])
  const brandbyid = brandDataMon?.data.data
  const uploadBrandImageMutation = useMutation(adminApi.uploadBrandImage)
  const updateBrandMutation = useMutation((params: [string[], BrandData]) => adminApi.updateBrand(...params), {
    onSuccess: () => {
      onUpdateSuccess()
      onClose()
    }
  })

  const { setValue, watch, setError } = useForm<FormData>({
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
    }
  }, [brandbyid, setValue])

  const handleSave = async () => {
    {
      try {
        let imageName = image
        if (file) {
          const form = new FormData()
          form.append('image', file)
          const uploadRes = await uploadBrandImageMutation.mutateAsync(form)
          imageName = uploadRes.data.data
          setValue('image', imageName)
        }
        const values = await form.validateFields()
        await updateBrandMutation.mutateAsync({
          ...data,
          image: imageName
        })
        toast.success('Chỉnh sửa sản phẩm thành công', {
          position: 'top-right', // Vị trí hiển thị thông báo
          autoClose: 1200 // Thời gian tự động đóng thông báo sau 1200 mili giây (1.2 giây)
        })
        onUpdateSuccess() // Notify update success
        onClose()
      } catch (error) {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormDataError>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormDataError, {
                message: formError[key as keyof FormDataError],
                type: 'Server'
              })
            })
          }
        }
      }
    }
  }

  const handleUploadChange = async (info: any) => {
    const formData = new FormData()
    formData.append('image', info.file.originFileObj || '')
    console.log('hihi')
    const uploadRes = await adminApi.uploadBrandImage(formData)
    console.log(uploadRes)
    form.setFieldsValue({
      image: uploadRes.data.data // Sử dụng đường dẫn của ảnh từ dữ liệu phản hồi
    })
    // setimage(uploadRes.data.data)
    // setbrandData((prevbrandData: any) => ({
    //   ...prevbrandData,
    //   data: {
    //     ...prevbrandData.data,
    //     image: getAvatarUrl(uploadRes.data.data)
    //   }
    // }))
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
                  // onRemove={() => {
                  //   // Xóa ảnh khỏi fileList khi người dùng nhấn nút xóa
                  //   setbrandData((prevbrandData: any) => ({
                  //     ...prevbrandData,
                  //     data: {
                  //       ...prevbrandData.data,
                  //       image: null
                  //     }
                  //   }))
                  // }}
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
