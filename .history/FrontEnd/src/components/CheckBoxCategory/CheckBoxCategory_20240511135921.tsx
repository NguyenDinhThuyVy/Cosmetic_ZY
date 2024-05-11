import { CheckboxProps, ConfigProvider, Radio } from 'antd'
import { useState } from 'react'
import 'src/Styles/CheckBoxBrand.scss'
import { QueryConfig } from 'src/pages/FIlterProduct/FilterProduct'
import { Category } from 'src/types/category.type'

interface Props {
  queryConfig: QueryConfig
  categories: Category[]
}

export default function CheckBoxCategory({ queryConfig, categories }: Props) {
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }
  const { category } = queryConfig
  const [expanded, setExpanded] = useState(false)
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
  const [selectedValue, setSelectedValue] = useState(null) // Trạng thái lưu giá trị radio được chọn

  const onChange = (e) => {
    setSelectedValue(e.target.value) // Cập nhật giá trị được chọn
  }

  const renderCheckboxes = () => {
    // Tạo ra các radio button từ mỗi categoryItem
    const checkboxes = categories.map((categoryItem, index) => (
      <Radio key={index} onChange={onChange} value={categoryItem.id}>
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
          <Radio.Group value={selectedValue}>{renderCheckboxes()}</Radio.Group>
        </div>
      </ConfigProvider>
      {!expanded && (
        <button
          onClick={handleToggleExpanded}
          className='text-left text-xs font-semibold text-black hover:text-gray-500'
        >
          Xem thêm
        </button>
      )}
    </div>
  )
}
