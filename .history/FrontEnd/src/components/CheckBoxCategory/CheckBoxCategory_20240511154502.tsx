import { ConfigProvider, Radio, RadioChangeEvent } from 'antd'
import { useState } from 'react'

import { createSearchParams, useNavigate } from 'react-router-dom'
import 'src/Styles/CheckBoxBrand.scss'

import path from 'src/constants/path'
import { QueryConfig } from 'src/hooks/useQueryConfig'

import { Category } from 'src/types/category.type'

interface Props {
  queryConfig: QueryConfig
  categories: Category[]
}

export default function CheckBoxCategory({ queryConfig, categories }: Props) {
  const myTheme = {
    components: {
      Radio: {
        colorPrimary: 'black',
        colorPrimaryHover: 'black',
        fontFamily: 'Montserrat',
        paddingXS: 10,
        marginXS: 10,
        controlInteractiveSize: 18
      }
    }
  }
  const [expanded, setExpanded] = useState(false) // Giả sử bạn đã khai báo trạng thái này ở đâu đó
  const [selectedValue, setSelectedValue] = useState(null)

  const navigate = useNavigate()
  const onChange = (e: RadioChangeEvent) => {
    const newValue = e.target.value
    setSelectedValue(newValue) // Cập nhật giá trị được chọn
    navigate({
      pathname: path.filterProduct,
      search: createSearchParams({
        ...queryConfig,
        category: newValue
      }).toString()
    })
  }

  const renderCheckboxes = () => {
    // Tạo ra các radio button từ mỗi categoryItem
    const checkboxes = categories.map((categoryItem) => (
      <Radio key={categoryItem._id} onChange={onChange} value={categoryItem._id}>
        {categoryItem.name}
      </Radio>
    ))

    // Kiểm tra xem có cần giới hạn số lượng hiển thị không
    return expanded ? checkboxes : checkboxes.slice(0, 5)
  }

  const handleToggleExpanded = () => {
    setExpanded(!expanded) // Đảo trạng thái expanded
  }

  return (
    <div className='flex flex-col gap-5 scrollable-container' style={{ maxHeight: '310px', overflowY: 'auto' }}>
      <ConfigProvider theme={myTheme}>
        <div className='flex flex-col gap-5'>
          <Radio.Group value={selectedValue}>
            <div className='flex flex-col gap-5'>{renderCheckboxes()}</div>
          </Radio.Group>
        </div>
      </ConfigProvider>
      {!expanded && (
        <button
          onClick={handleToggleExpanded}
          className='text-left text-xs font-semibold text-black hover:text-gray-500'
        >
          {' '}
          {expanded ? 'Thu gọn' : 'Xem thêm'}
        </button>
      )}
    </div>
  )
}
