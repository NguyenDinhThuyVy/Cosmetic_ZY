import { Checkbox, CheckboxProps, ConfigProvider } from 'antd'
import { useState } from 'react'
import 'src/Styles/CheckBoxBrand.scss'

export default function CheckBoxCategory() {
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }
  const [expanded, setExpanded] = useState(false)
  const myTheme = {
    components: {
      Checkbox: {
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
      <Checkbox key='1' onChange={onChange}>
        <span>Chăm sóc cơ thể</span>
      </Checkbox>,
      <Checkbox key='2' onChange={onChange}>
        <span>Kem dưỡng mặt</span>
      </Checkbox>,
      <Checkbox key='3' onChange={onChange}>
        <span>Sửa rửa mặt</span>
      </Checkbox>,
      <Checkbox key='4' onChange={onChange}>
        <span>Serum</span>
      </Checkbox>,
      <Checkbox key='5' onChange={onChange}>
        <span>Tẩy Trang</span>
      </Checkbox>,
      <Checkbox key='6' onChange={onChange}>
        <span>Tẩy chế bào chết</span>
      </Checkbox>,
      <Checkbox key='7' onChange={onChange}>
        <span>Tẩy chế bào chết</span>
      </Checkbox>,
      <Checkbox key='8' onChange={onChange}>
        <span>Tẩy chế bào chết</span>
      </Checkbox>,
      <Checkbox key='9' onChange={onChange}>
        <span>Tẩy chế bào chết</span>
      </Checkbox>,
      <Checkbox key='10' onChange={onChange}>
        <span>Tẩy chế bào chết</span>
      </Checkbox>
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
