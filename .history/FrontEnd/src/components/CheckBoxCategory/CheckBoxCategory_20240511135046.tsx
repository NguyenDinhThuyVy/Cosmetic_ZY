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
  const renderCheckboxes = () => {
    const checkboxes = [
      <Radio key='1' onChange={onChange}>
        <span>Chăm sóc cơ thể</span>
      </Radio>,
      <Radio key='2' onChange={onChange}>
        <span>Kem dưỡng mặt</span>
      </Radio>,
      <Radio key='3' onChange={onChange}>
        <span>Sửa rửa mặt</span>
      </Radio>,
      <Radio key='4' onChange={onChange}>
        <span>Serum</span>
      </Radio>,
      <Radio key='5' onChange={onChange}>
        <span>Tẩy Trang</span>
      </Radio>,
      <Radio key='6' onChange={onChange}>
        <span>Tẩy chế bào chết</span>
      </Radio>,
      <Radio key='7' onChange={onChange}>
        <span>Tẩy chế bào chết</span>
      </Radio>,
      <Radio key='8' onChange={onChange}>
        <span>Tẩy chế bào chết</span>
      </Radio>,
      <Radio key='9' onChange={onChange}>
        <span>Tẩy chế bào chết</span>
      </Radio>,
      <Radio key='10' onChange={onChange}>
        <span>Tẩy chế bào chết</span>
      </Radio>
    ]

    if (!expanded) {
      return checkboxes.slice(0, 5) // Chỉ hiển thị 5 Checkbox ban đầu
    } else {
      return checkboxes // Hiển thị tất cả Checkbox khi đã mở rộng
    }
  }
  const handleToggleExpanded = () => {
    setExpanded(!expanded)
  }
  return (
    <div className='flex flex-col gap-5 scrollable-container' style={{ maxHeight: '310px', overflowY: 'auto' }}>
      <ConfigProvider theme={myTheme}>
        <div className='flex flex-col gap-5'>{renderCheckboxes()}</div>
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
