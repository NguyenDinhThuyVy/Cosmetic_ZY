import { Breadcrumb, ConfigProvider, Select } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import 'src/Styles/Header.scss'
export default function FilterProduct() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const myTheme = {
    components: {
      Select: {
        colorPrimaryHover: '#ede3db',
        colorPrimary: '#f0e6dd',
        colorBorder: '#f7f2ef',
        optionSelectedBg: '#ff8e8eaa',
        colorText: '#1c1b1b'
      }
    }
  }
  return (
    <div className='h-full flex flex-col font '>
      <div className=' min-h-32'>
        <div className='flex flex-col gap-2 my-4 mx-20'>
          <Breadcrumb
            separator='>'
            items={[
              {
                title: 'Home'
              },
              {
                title: <Link to='/'>Trang sản phẩm</Link>
              }
            ]}
          />
          <div className='text-2xl font-bold uppercase mt-5'>TOP SẢN PHẨM BÁN CHẠY</div>
          <div className=' mt-5 flex justify-between'>
            <div className='text-lg font-bold uppercase'>Bộ Lọc</div>
            <div className='flex flex-wrap gap-3 items-center justify-center'>
              <span>689 Kết Quả</span>
              <span>Lọc Theo</span>
              <ConfigProvider theme={myTheme}>
                <Select
                  placeholder='Tất cả'
                  style={{
                    width: 100
                  }}
                  onChange={handleChange}
                  options={[
                    { value: 'Vietnamese', label: 'VN' },
                    { value: 'English', label: 'EN' }
                  ]}
                />
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
